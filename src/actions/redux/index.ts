import { combineReducers, Reducer } from 'redux';

import baseReducers, { BaseApplicationState } from '@base/features/base-reducers';
import { CatalogState } from './catalog/interfaces';
import { CartState } from './cart/interfaces';
import { AttendanceState } from './attendance/interfaces';

export interface ApplicationState extends BaseApplicationState {
	cart: CartState;
	catalog: CatalogState;
	attendance: AttendanceState;
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	...baseReducers,

	cart: require('./cart').reducer,
	catalog: require('./catalog').reducer,
	attendance: require('./attendance').reducer,
});

export default rootReducer;
