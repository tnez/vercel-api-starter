import { NowRequest, NowResponse } from '@vercel/node'
import { compose, map } from 'lodash/fp'
import { appendFoo } from '../lib/foo'
import { flattenQueryTerm } from '../lib/utils'

export default async (req: NowRequest, res: NowResponse) => {
  try {
    const { words } = req.query
    const result = compose(
      map(appendFoo),
      splitBy(','),
      requireArg('words'),
      flattenQueryTerm,
    )(words)

    res.status(200).json(result)
  } catch (error) {
    const { message, status = 500 } = error
    res.status(status).json({ error: message })
  }
}

function requireArg<T>(argName: string) {
  return (arg: T) => {
    if (!arg) {
      throw new ErrorWithStatus(400, `${argName} is a required argument`)
    }
    return arg
  }
}

function splitBy(seperator: string) {
  return (str: string) => str.split(seperator)
}

class ErrorWithStatus extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}
