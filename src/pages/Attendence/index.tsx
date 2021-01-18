import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { Button } from 'common-components/business';
import AttendenceActions, { attendanceSelector } from 'actions/redux/attendance';
import { Dispatch } from 'redux';
import { Attendance } from 'actions/redux/attendance/interfaces';

interface Props {
	attendenceList: Attendance[];
	getAttendanceList: () => void;
}

class Attendence extends React.Component<Props> {
	componentDidMount() {
		const { getAttendanceList } = this.props;
		getAttendanceList();
	}

	onEntryHandler = () => {};

	onExitHandler = () => {};

	render() {
		return (
			<div className="atendance-page-wrapper">
				<div className="punch-in-and-out-buttons">
					<Button buttonClass="" buttonText="Entry" onButtonClickHandler={this.onEntryHandler} />
					<Button buttonClass="" buttonText="Exit" onButtonClickHandler={this.onExitHandler} />
				</div>
				{/* <div className="attendance-list">

				</div> */}
			</div>
		);
	}
}

export default baseConnect(
	Attendence,
	(state: ApplicationState) => {
		return {
			attendenceList: attendanceSelector.getAttendanceList(state),
		};
	},
	(dispatch: Dispatch) => ({ getAttendanceList: () => dispatch(AttendenceActions.getAttendanceList()) })
);
