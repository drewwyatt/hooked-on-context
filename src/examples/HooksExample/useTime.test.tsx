import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { TimeContext } from './context'
import { DEFAULT_STATE } from './state'
import useTime from './useTime'

let dispatch = jest.fn()

const render = (hook: typeof useTime) => {
  const wrapper = (props: any) => (
    <TimeContext.Provider {...props} value={{ state: DEFAULT_STATE, dispatch }} />
  )
  return renderHook(hook, { wrapper })
}

const reset = () => {
  dispatch.mockReset()
}

describe('useTime', () => {
  afterEach(reset)
  it('Will initialize itself', () => {
    render(() => useTime())
    expect(dispatch).toHaveBeenCalledTimes(1)
  })

  it('has a default state', () => {
    const [state] = render(() => useTime()).result.current
    expect(state).toMatchObject(DEFAULT_STATE)
  })
})
