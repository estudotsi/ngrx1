import { createAction, createReducer, on } from "@ngrx/store"

export interface IAppState {
  counter: number
}

export const appInitialState: IAppState = {
  counter: 2
}

export const incrementaContador = createAction('[App] aumenta contador');
export const decrementaContador = createAction('[App] Diminui contador')

export const appReducer = createReducer(
  appInitialState,
  on(incrementaContador, (state) =>{
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state
  }),
  on(decrementaContador, (state) =>{
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state
  })
)
