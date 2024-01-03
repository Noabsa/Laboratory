'use strict'
import { ILambdaEvent } from '../utils/interfaces'
import { fatalError, notFound, success } from '../utils/responseHandler'

export const handler = async (event: ILambdaEvent) => {
  console.log('EVENT: ' + JSON.stringify(event))

  const { httpMethod } = event
  try {
    switch (httpMethod) {
      case 'GET':
        return success(event)
      case 'PUT':
        return success(event)
      case 'POST':
        return success(event)
      case 'DELETE':
        return success(event)
      default:
        return notFound('INPUTS LAMBDA - INVALID method')
    }
  } catch (error) {
    return fatalError('FATAL ERROR ON INPUTS-LAMBDA')
  }
}
