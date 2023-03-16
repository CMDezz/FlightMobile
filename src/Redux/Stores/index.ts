import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../Reducers';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'
const middleware = [
    ReduxThunk,
]

let store = createStore(
    reducers,
    applyMiddleware(...middleware)
)
export type RootState = ReturnType<typeof store.getState>
export default store;
