import {
  init,
  setAmPm,
  setHourType,
  setHours,
  setMinutes,
  setSeconds,
  reducer,
  DEFAULT_STATE,
  State,
} from './state'
import { AmPm, HourType } from './useTime'

let state: State = DEFAULT_STATE

const reset = () => {
  state = reducer(DEFAULT_STATE, { type: '' } as any)
}

describe('state', () => {
  beforeEach(reset)
  it('has a default state', () => {
    expect(state).toEqual(DEFAULT_STATE)
  })

  it('can be initialized', () => {
    const sevenAm: State = {
      hours: 7,
      minutes: 0,
      seconds: 0,
      amPm: AmPm.am,
      hourType: HourType.twelve,
    }
    state = reducer(state, init(sevenAm))
    expect(state).toMatchObject(sevenAm)
  })

  it('can update hours', () => {
    state = reducer(state, setHours(13))
    expect(state.hours).toEqual(13)
  })

  it('can update minutes', () => {
    state = reducer(state, setMinutes(13))
    expect(state.minutes).toEqual(13)
  })

  it('can update seconds', () => {
    state = reducer(state, setSeconds(13))
    expect(state.seconds).toEqual(13)
  })

  it('can update amPm', () => {
    state = reducer(state, setAmPm(AmPm.am))
    expect(state.amPm).toEqual(AmPm.am)
  })

  it('can update hourType', () => {
    state = reducer(
      state,
      setHourType(HourType.twelve, {
        hours: 7,
        minutes: 0,
        seconds: 0,
        amPm: AmPm.am,
        hourType: HourType.twelve,
      }),
    )
    expect(state.hourType).toEqual(HourType.twelve)
  })
})
