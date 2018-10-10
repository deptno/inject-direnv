import {injectEnv} from './read-envrc'

describe('inject-envrc', () => {
  it('.envrc', () => {
    const env = injectEnv()
    expect(env.TEST_INJECT_DIRENV).toEqual('true')
  })
})