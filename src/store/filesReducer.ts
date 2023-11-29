// import {
// 	GET_DEGREES_FROM_LS,
// 	LS_DEGREES,
// 	ONE_DEGREE,
// 	ROTATE_LEFT,
// 	ROTATE_RIGHT,
// } from "../constants";
import { defaultFolder } from "../const";
import { TAction } from "../types/TAction";

const defaultState = {
	files: defaultFolder,
};

export const filesReducer = (state = defaultState, action: TAction) => {
	switch (action.type) {
		// case ROTATE_RIGHT:
		//   return { ...state, degrees: state.degrees + action.payload };
		// case ROTATE_LEFT:
		//   return { ...state, degrees: state.degrees - action.payload };
		// case GET_DEGREES_FROM_LS:
		//   // @ts-ignore
		//   return { ...state, degrees: +localStorage.getItem(LS_DEGREES) };
		default:
			return state;
	}
};

// export const rotateRightAction = () => ({
//   type: ROTATE_RIGHT,
//   payload: ONE_DEGREE,
// });

// export const rotateLeftAction = () => ({
//   type: ROTATE_LEFT,
//   payload: ONE_DEGREE,
// });
