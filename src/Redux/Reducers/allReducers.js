import {combineReducers} from 'redux';
import appLoadReducer from './appLoadReducer';

const allReducers= combineReducers({
    loadedData : appLoadReducer,
});

export default allReducers;