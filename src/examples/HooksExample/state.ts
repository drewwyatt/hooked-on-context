import { AmPm, HourType, TimeEvent } from 'our-fake-time-lib'

// Models

export type State = {
  hours: number
  minutes: number
  seconds: number
  hourType: HourType
  amPm: AmPm
}

export const DEFAULT_STATE: State = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  hourType: HourType.twentyFour,
  amPm: AmPm.na,
}

// Action Creators

export const setHours = (payload: number) =>
  ({
    type: 'SET_HOURS',
    payload,
  } as const)

export const setMinutes = (payload: number) =>
  ({
    type: 'SET_MINUTES',
    payload,
  } as const)

export const setSeconds = (payload: number) =>
  ({
    type: 'SET_SECONDS',
    payload,
  } as const)

export const setHourType = (hourType: HourType, currentTime: TimeEvent) =>
  ({
    type: 'SET_HOUR_TYPE',
    payload: {
      hourType,
      currentTime,
    },
  } as const)

export const setAmPm = (payload: AmPm) =>
  ({
    type: 'SET_AMPM',
    payload,
  } as const)

export const init = (payload: State) =>
  ({
    type: 'INIT',
    payload,
  } as const)

export type Action =
  | ReturnType<typeof setHours>
  | ReturnType<typeof setMinutes>
  | ReturnType<typeof setSeconds>
  | ReturnType<typeof setAmPm>
  | ReturnType<typeof setHourType>
  | ReturnType<typeof init>

// Reducer

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action.payload }
    case 'SET_HOURS':
      return { ...state, hours: action.payload }
    case 'SET_MINUTES':
      return { ...state, minutes: action.payload }
    case 'SET_SECONDS':
      return { ...state, seconds: action.payload }
    case 'SET_HOUR_TYPE':
      return {
        ...state,
        hourType: action.payload.hourType,
        hours: action.payload.currentTime.hours,
        amPm: action.payload.currentTime.amPm,
      }
    case 'SET_AMPM':
      return { ...state, amPm: action.payload }
    default:
      return state
  }
}
