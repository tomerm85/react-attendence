import { Action } from 'redux';

export interface AttendanceState {
	attendanceList: Attendance[];
}

export enum TypesNames {
	GET_ATTENDANCE_LIST = 'GET_ATTENDANCE_LIST',
	SET_ATTENDANCE_LIST = 'SET_ATTENDANCE_LIST'
}

export interface ActionCreator {
	getAttendanceList: () => Action<TypesNames.GET_ATTENDANCE_LIST>;
	setAttendanceList: (attendanceList: Attendance[]) => SetAttendanceAction;
}

export interface SetAttendanceAction extends Action<TypesNames.SET_ATTENDANCE_LIST> {
	attendanceList: Attendance[];
}

export class Attendance {
	id: string;
	date: string;
	entryTime: string;
	exitTime: string;
}
