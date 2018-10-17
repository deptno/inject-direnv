import ProcessEnv = NodeJS.ProcessEnv
import {findEnvrc} from './find-envrc'

export const injectEnv = (): ProcessEnv => {
  console.log(`inject-direnv base directory: ${process.env.PWD}`)

  return findEnvrc()
    .toString()
    .split('\n')
    .filter(line => line.startsWith('export '))
    .reduce((env, envVar) => {
      const [variable, value] = envVar
        .split(' ')[1]
        .split('=')
      env[variable] = value
      return env
    }, {})
}

