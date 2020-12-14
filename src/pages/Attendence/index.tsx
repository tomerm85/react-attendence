import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
// import AttendenceActions, { attendenceSelector } from 'actions/redux/attendence';

interface Props {

}

class Attendence extends React.Component<Props> {
	render() {
		return (
			<div>
				Attendence New Container
			</div>
		);
	}
}

export default baseConnect(Attendence,
	(state: ApplicationState) => {
		return {

		};
	},
	{

	});
