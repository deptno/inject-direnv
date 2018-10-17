import {findEnvrc} from './find-envrc'

describe('inject-envrc', () => {
  it('findEnvrc', () => {
    const env = findEnvrc()
    console.log(env)
  })
})