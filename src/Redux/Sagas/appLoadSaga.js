import { all, put, takeLatest } from 'redux-saga/effects';
import Axios from 'axios';
import { APP_LOAD_SUCCESS, APP_LOAD_FAIL} from '../Actions/appLoadAction'
const API_URL = 'https://api.covid19india.org/state_district_wise.json';

export function* CallWorkbook(action) {
    try{
        const response = yield Axios({
            method: 'get',
            url: API_URL,
          });
        yield put(APP_LOAD_SUCCESS(response.data));
    }
    catch(error){
        yield put(APP_LOAD_FAIL(error));
    }
}

function* watchCallWorkbook(){
    yield takeLatest('APP_LOAD', CallWorkbook);
}

export default function* rootSaga(){
    yield all([
        watchCallWorkbook()
    ]);
}