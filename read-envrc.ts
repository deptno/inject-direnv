import * as fs from 'fs'
import * as path from 'path'
import ProcessEnv = NodeJS.ProcessEnv

export const injectEnv = (): ProcessEnv => {
  console.log(`inject-direnv base directory: ${__dirname}`)

  try {
  const envrc = fs.readFileSync('.envrc') || fs.readFileSync(path.join('..', '.envrc'))

  return envrc
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
  } catch(e) {
    console.log(`.envrc doesn't exists`)
    process.exit()
  }
}

