import { App, Duration, Stack, Tags } from 'aws-cdk-lib'
import { Cors, LambdaIntegration, MethodLoggingLevel, RestApi } from 'aws-cdk-lib/aws-apigateway'
import { IgoodoStack } from '../../utils/interfaces'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import { join } from 'path'
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb'
import { StringParameter } from 'aws-cdk-lib/aws-ssm'
import { apiResourcesCt } from '../../utils/constructors'

export class goodoStack extends Stack {
  constructor(scope: App, id: string, props: IgoodoStack) {
    super(scope, id, props)

    Tags.of(this).add('Name', `gooDo-${props.stage}-Stack`)
    Tags.of(this).add('Project', 'gooDo')

    // LAMBDA CREATION, WE WILL USE IT ON API

    // TODO: Change files name snakecase to kamelcase
    // TODO: Add policies and roles to secure access
    // TODO: Create constructor for lambdas
    const inputsLambda = new NodejsFunction(this, `gooDo-${props.stage}-Inputs-Lambda`, {
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(30),
      entry: join(__dirname, '../../src/inputs-lambda.ts'),
      description: `gooDo ${props.stage} inputs lambda to route HTTP requests through backend methods`,
      functionName: `gooDo-${props.stage}-Inputs-Lambda`,
      environment: { stage: props.stage }
    })

    const usersLambda = new NodejsFunction(this, `gooDo-${props.stage}-Users-Lambda`, {
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(30),
      entry: join(__dirname, '../../src/users-lambda.ts'),
      description: `gooDo ${props.stage} users lambda to route HTTP requests through backend methods`,
      functionName: `gooDo-${props.stage}-Users-Lambda`,
      environment: { stage: props.stage }
    })

    // API CREATION
    const api = new RestApi(this, `gooDo-${props.stage}-API`, {
      defaultCorsPreflightOptions: {
        allowHeaders: Cors.DEFAULT_HEADERS,
        allowMethods: Cors.ALL_METHODS,
        allowOrigins: Cors.ALL_ORIGINS
      },
      restApiName: `gooDo-${props.stage}-API`,
      deployOptions: {
        metricsEnabled: true,
        dataTraceEnabled: true,
        loggingLevel: MethodLoggingLevel.ERROR,
        stageName: props.stage
      },
      description: 'gooDo api to serve application endpoints'
    })

    // API RESOURCES LINKED WITH LAMBDAS
    const inputsLambdaIntegration = new LambdaIntegration(inputsLambda, { proxy: true })
    const usersLambdaIntegration = new LambdaIntegration(usersLambda, { proxy: true })

    const resources = [
      { resource: 'inputs', methods: ['POST', 'PUT', 'GET', 'DELETE'], lambda: inputsLambdaIntegration },
      { resource: 'users', methods: ['POST', 'PUT', 'GET', 'DELETE'], lambda: usersLambdaIntegration }
    ]
    new apiResourcesCt(this, `gooDo-${props.stage}-apiResources`, {
      api,
      resources
    })

    //DYNAMO DB TABLES CREATION, LAMBDAS WILL READ AND WRITE THEM

    // TODO: Table to V2
    // TODO: Create constructor for tables
    const goodoMainTable = new Table(this, `gooDo-${props.stage}-mainTable`, {
      partitionKey: { name: 'userId', type: AttributeType.STRING },
      sortKey: { name: 'creation_date', type: AttributeType.NUMBER },
      tableName: `gooDo-${props.stage}-mainTable`
    })
    inputsLambda.addEnvironment('goodoTableName', goodoMainTable.tableName)
    goodoMainTable.grantReadWriteData(inputsLambda)

    const goodoLogsTable = new Table(this, `gooDo-${props.stage}-logsTable`, {
      partitionKey: { name: 'userId', type: AttributeType.STRING },
      sortKey: { name: 'creation_date', type: AttributeType.NUMBER },
      tableName: `gooDo-${props.stage}-logsTable`
    })
    inputsLambda.addEnvironment('goodoTableName', goodoLogsTable.tableName)
    goodoLogsTable.grantReadWriteData(inputsLambda)
    goodoLogsTable.grantReadWriteData(usersLambda)

    // STRING PARAMETERS TO SAVE RELEVANT STACK DATA

    // TODO: Create constructor for String Parameters
    new StringParameter(this, `gooDo-${props.stage}-API-endpoint`, {
      stringValue: api.url,
      description: `gooDo ${props.stage} api endpoint`,
      parameterName: `/gooDo/${props.stage}/API/endpoint`
    })
    new StringParameter(this, `gooDo-${props.stage}-mainTable-TableName`, {
      stringValue: goodoMainTable.tableName,
      description: `gooDo ${props.stage} main table name`,
      parameterName: `/gooDo/${props.stage}/tables/mainTable/tableName`
    })
    new StringParameter(this, `gooDo-${props.stage}-logsTable-TableName`, {
      stringValue: goodoLogsTable.tableName,
      description: `gooDo ${props.stage} logs table name`,
      parameterName: `/gooDo/${props.stage}/tables/logsTable/tableName`
    })
  }
}
