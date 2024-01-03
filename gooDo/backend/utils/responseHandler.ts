import { ILambdaResponse } from './interfaces'

export const success = (body: Record<string, any>) => {
  const response: ILambdaResponse = { statusCode: 200, body: JSON.stringify(body) }
  console.log('RESPONSE: ' + JSON.stringify(response))
  return response
}

const failure = (statusCode: number, body: string) => {
  const response: ILambdaResponse = { statusCode, body: JSON.stringify(body) }
  console.error('ERROR: ' + JSON.stringify(response))
  return response
}
export const notFound = (body: string) => {
  return failure(404, body)
}
export const fatalError = (body: string) => {
  return failure(400, body)
}
