import * as fs from 'fs'
import * as path from 'path'

const envrc = process.env.INJECT_DIRENV_ENVRC || '.envrc'

export const findEnvrc = (pwd = process.env.PWD): string => {
  const pathEnvrc = path.join(pwd, envrc)

  if (!fs.existsSync(pathEnvrc)) {
    if (pathEnvrc === '/.envrc') {
      console.warn(`.envrc doesn't exists`)
      return ''
    }
    return findEnvrc(path.join(pwd, '..'))
  } else {
    console.info(`.envrc: ${pathEnvrc}`)
    return fs.readFileSync(pathEnvrc).toString()
  }
}
