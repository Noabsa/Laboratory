import { Construct } from 'constructs'
import { IApiResources } from './interfaces'
import { RestApi } from 'aws-cdk-lib/aws-apigateway'

export class apiResourcesCt extends Construct {
  constructor(scope: Construct, id: string, props: { api: RestApi; resources: IApiResources[] }) {
    super(scope, id)
    const { api, resources } = props

    if (!api || !resources) {
      console.error('Lack of information on creation api resources')
      return
    }
    resources.forEach((resourceObject) => {
      const { resource, methods, lambda } = resourceObject
      const apiResource = api.root.addResource(resource)
      methods.forEach((method) => {
        apiResource.addMethod(method, lambda)
      })
    })
  }
}
