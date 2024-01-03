enum IStage {
  dev = 'dev',
  prod = 'prod',
  local = 'local'
}
const STAGE = process.env.REACT_APP_STAGE?.trim() as IStage
const DOMAIN_OBJ = {
  dev: 'https://kc7r802o41.execute-api.eu-west-3.amazonaws.com/dev',
  prod: 'https://kc7r802o41.execute-api.eu-west-3.amazonaws.com/prod',
  local: 'http://localhost:3030'
}

export const DOMAIN = DOMAIN_OBJ[STAGE]
