import { StackProps } from 'aws-cdk-lib'
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export enum IStage {
  dev = 'dev',
  prod = 'prod',
  local = 'local'
}
export interface IgoodoStack extends StackProps {
  stage: IStage
}
export interface IApiResources {
  resource: string
  methods: string[]
  lambda: LambdaIntegration
}

export type ILambdaEvent = Partial<APIGatewayProxyEvent>
export type ILambdaResponse = Partial<APIGatewayProxyResult>
