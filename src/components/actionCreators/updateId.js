import actionTypes from "./actonTypes";
const { UPDATE_ID } = actionTypes;

export default function updateId() {
	return {
		type: UPDATE_ID,
	};
}
