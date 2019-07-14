import React, { Dispatch, FC } from 'react'
import { Action, DEFAULT_STATE, reducer, State } from './state'

const { createContext, useReducer } = React

type StateWithDispatch = {
  state: State
  dispatch: Dispatch<Action>
}

export const TimeContext = createContext<StateWithDispatch>(undefined as any)

export const TimeContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE)
  return (
    <TimeContext.Provider value={{ state, dispatch }}>{children}</TimeContext.Provider>
  )
}
