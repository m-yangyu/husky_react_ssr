import {combineReducers} from 'redux';
import root from './module/reducer';
const reducers = combineReducers({
    root: root,
});
export default reducers;
