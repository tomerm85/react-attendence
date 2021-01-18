import Immutable, { from } from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from '../index';
import {
	AttendanceState, TypesNames, ActionCreator, SetAttendanceAction
} from './interfaces';
import { AnyAction } from 'redux';

// TODO: Do not for get add your reducer to index file

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	getAttendanceList: [],
	setAttendanceList: ['attendanceList']
});

export const AttendanceTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<AttendanceState>({
	attendanceList: []
});

/* ------------- Selectors ------------- */

export const attendanceSelector = {
	getAttendanceList: (state: ApplicationState) => state.attendance.attendanceList
};

/* ------------- Reducers ------------- */

const setAttendanceReducer = (state: AttendanceState, action: SetAttendanceAction) => {
	const { attendanceList } = action;
	return from(state).merge({
		attendanceList
	});
};

/* ------------- Hookup Reducers To Types ------------- */

const attendanceReducer = createReducer<any, AnyAction>(INITIAL_STATE, {
	[AttendanceTypes.SET_ATTENDANCE_LIST]: setAttendanceReducer
});

export const reducer = attendanceReducer;
