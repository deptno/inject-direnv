#!/usr/bin/env node

import {injectEnv} from './read-envrc'

Object.assign(process.env, injectEnv())