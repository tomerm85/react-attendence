import { put } from 'redux-saga/effects';
import AttendanceActions from 'actions/redux/attendance/index';
import { Attendance } from 'actions/redux/attendance/interfaces';
import data from './attendance-data.json';
import { sortBy } from 'lodash';

export function* getAttendace() {
	const mockProductList: Attendance[] = sortBy(data, ['date']) as Attendance[];
	yield put(AttendanceActions.setAttendanceList(mockProductList));
}
