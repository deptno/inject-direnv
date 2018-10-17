# inject-direnv

find `.envrc`(until root directory) inject export variable
if you are using JetBrain series, You can run IDE Run(`option` + `F11`) with injected `.envrc`

## Install
```bash
npm install -D inject-direnv
```

## Usage
**Run** Intellij(WebStorm)  
`Ctrl` + `A`

![](configuration-webstorm-0.png)
![](configuration-webstorm-1.png)

## Basic concept

```bash
vim .envrc
```

save below text
```bash
export INJECT=true
```

*Run* `node` with `-r inject-direnv` option
```bash
node -r inject-direnv
> process.env.INJECT
'true'
```

## License
MIT
