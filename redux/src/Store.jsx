import {createStore} from 'redux';
import rootReducer from './reducers/index'
const Store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store
