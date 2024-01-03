import express, { Request } from 'express'
import { handler as usersLambda } from '../../src/users-lambda'
import { handler as inputsLambda } from '../../src/inputs-lambda'
import { ILambdaEvent } from '../../utils/interfaces'
import { APIGatewayProxyEventQueryStringParameters } from 'aws-lambda'

export const usersRouter = express.Router()
export const inputsRouter = express.Router()

function transformRequestIntoEvent(request: Request) {
  return {
    queryStringParameters: request.query as APIGatewayProxyEventQueryStringParameters,
    path: request.baseUrl,
    httpMethod: request.method,
    body: request.body
  }
}

usersRouter.all('/', async (req, res) => {
  const request: ILambdaEvent = transformRequestIntoEvent(req)
  res.send(await usersLambda(request))
})
inputsRouter.all('/', async (req, res) => {
  const request: ILambdaEvent = transformRequestIntoEvent(req)
  res.send(await inputsLambda(request))
})
