import { useReducer } from 'react';

const initialInputState = {
	inputValue: '',
	wasTouched: false,
};

const inputStateReducer = (state, action) => {
	if (action.type === 'INPUT_CHANGE') {
		return { inputValue: action.value, wasTouched: state.wasTouched };
	}
	if (action.type === 'INPUT_BLUR') {
		return { inputValue: state.inputValue, wasTouched: true };
	}
	if (action.type === 'RESET_INPUT') {
		return { inputValue: '', wasTouched: false };
	}

	return initialInputState;
};

export const useInput = (validateValueCallback) => {
	const [inputState, dispatchAction] = useReducer(inputStateReducer, initialInputState);

	const isValueValid = validateValueCallback(inputState.inputValue);
	const isInputInvalid = !isValueValid && inputState.wasTouched;

	const handleChangeInput = (event) => {
		dispatchAction({ type: 'INPUT_CHANGE', value: event.target.value });
	};

	const handleLostFocusInput = () => {
		dispatchAction({ type: 'INPUT_BLUR' });
	};

	const resetValues = () => {
		dispatchAction({ type: 'RESET_INPUT' });
	};

	return {
		value: inputState.inputValue,
		hasError: isInputInvalid,
		isValid: isValueValid,
		handleChangeInput,
		handleLostFocusInput,
		resetValues,
	};
};
