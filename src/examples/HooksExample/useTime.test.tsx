import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { TimeContext } from './context'
import { DEFAULT_STATE } from './state'
import useTime from './useTime'

let MOCKED_HOURS = 7
let MOCKED_MINUTES = 0
let MOCKED_SECONDS = 0
let dispatch = jest.fn()

  // Date mock
;(global as any).Date = class extends Date {
  getHours() {
    return MOCKED_HOURS
  }

  getMinutes() {
    return MOCKED_MINUTES
  }

  getSeconds() {
    return ++MOCKED_SECONDS
  }
}

const render = (hook: typeof useTime) => {
  const wrapper = (props: any) => (
    <TimeContext.Provider {...props} value={{ state: DEFAULT_STATE, dispatch }} />
  )
  return renderHook(hook, { wrapper })
}

const setup = () => {
  jest.useFakeTimers()
}

const reset = () => {
  dispatch.mockReset()
}

describe('useTime', () => {
  beforeAll(setup)
  afterEach(reset)
  it('Will initialize itself', () => {
    render(() => useTime())
    expect(dispatch).toHaveBeenCalledTimes(1)
  })

  it('has a default state', () => {
    const [state] = render(() => useTime()).result.current
    expect(state).toMatchObject(DEFAULT_STATE)
  })

  it('dispatches an action each second', async () => {
    render(() => useTime())
    expect(dispatch).toHaveBeenCalledTimes(1) // init
    act(() => {
      jest.advanceTimersByTime(3000)
    })
    expect(dispatch).toHaveBeenCalledTimes(4)
  })
})
