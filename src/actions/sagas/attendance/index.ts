import {
	all, fork, takeLatest
} from 'redux-saga/effects';
import * as Sagas from './sagas';
import { AttendanceTypes } from 'actions/redux/attendance';

function* watchProductsSaga() {
	yield takeLatest(AttendanceTypes.GET_ATTENDANCE_LIST, Sagas.getAttendace);
}

function* attendanceSaga() {
	yield all([
		fork(watchProductsSaga)
	]);
}

export default attendanceSaga;
