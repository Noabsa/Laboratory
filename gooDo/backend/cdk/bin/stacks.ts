import { App } from 'aws-cdk-lib'
import { goodoStack } from '../lib/goodo-stack'
import { STAGE } from '../../utils/constants'

const app = new App()

new goodoStack(app, `gooDo-${STAGE}-mainStack`, {
  stage: STAGE,
  description: 'Stack for the creation of goodo main resources',
  stackName: `gooDo-${STAGE}-mainStack`
})
