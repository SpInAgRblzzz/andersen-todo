import actionTypes from "./actonTypes";
const { TOGGLE_CHECK } = actionTypes;

export default function toggleCheck(checkStatus, idRoute) {
	return {
		type: TOGGLE_CHECK,
		isChecked: !checkStatus,
		idRoute,
	};
}
