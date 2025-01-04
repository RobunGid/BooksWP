import styles from './SubmitOrder.module.css';
import { useInput } from '../Hooks/use-input';

const isNameValid = (name) => name.trim() !== '';
const isCityValid = (city) => city.trim() !== '';
const isAddressValid = (address) => address.trim() !== '';

export const SubmitOrder = ({ onCancel, onSubmit }) => {
	const {
		value: enteredNameValue,
		hasError: isEnteredNameInvalid,
		isValid: isEnteredNameValid,
		handleChangeInput: handleChangeNameInput,
		handleLostFocusInput: handleLostFocusNameInput,
		resetValues: handleResetNameInput,
	} = useInput(isNameValid);

	const {
		value: enteredCityValue,
		hasError: isEnteredCityInvalid,
		isValid: isEnteredCityValid,
		handleChangeInput: handleChangeCityInput,
		handleLostFocusInput: handleLostFocusCityInput,
		resetValues: handleResetCityInput,
	} = useInput(isCityValid);

	const {
		value: enteredAddressValue,
		hasError: isEnteredAddressInvalid,
		isValid: isEnteredAddressValid,
		handleChangeInput: handleChangeAddressInput,
		handleLostFocusInput: handleLostFocusAddressInput,
		resetValues: handleResetAddressInput,
	} = useInput(isAddressValid);

	const nameInputClasses = `${styles.control} ${
		isEnteredNameInvalid ? styles.invalid : ''
	}`;

	const cityInputClasses = `${styles.control} ${
		isEnteredCityInvalid ? styles.invalid : ''
	}`;

	const addressInputClasses = `${styles.control} ${
		isEnteredAddressInvalid ? styles.invalid : ''
	}`;

	const handleConfirmOrder = (event) => {
		event.preventDefault();

		const isFormValid =
			isEnteredNameValid && isEnteredCityValid && isEnteredAddressValid;

		if (!isFormValid) {
			handleLostFocusNameInput();
			handleLostFocusCityInput();
			handleLostFocusAddressInput();
			return;
		}

		handleResetNameInput();
		handleResetCityInput();
		handleResetAddressInput();

		onSubmit({
			name: enteredNameValue,
			city: enteredCityValue,
			address: enteredAddressValue,
		});
	};

	return (
		<form className={styles.form} onSubmit={handleConfirmOrder}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					value={enteredNameValue}
					onChange={handleChangeNameInput}
					onBlur={handleLostFocusNameInput}
				/>
				{isEnteredNameInvalid && <p>Please, enter correct name</p>}
			</div>

			<div className={cityInputClasses}>
				<label htmlFor='city'>City name</label>
				<input
					type='text'
					id='city'
					value={enteredCityValue}
					onChange={handleChangeCityInput}
					onBlur={handleLostFocusCityInput}
				/>
				{isEnteredCityInvalid && <p>Please, enter correct city name</p>}
			</div>

			<div className={addressInputClasses}>
				<label htmlFor='address'>Address</label>
				<input
					type='text'
					id='address'
					value={enteredAddressValue}
					onChange={handleChangeAddressInput}
					onBlur={handleLostFocusAddressInput}
				/>
				{isEnteredAddressInvalid && <p>Please, enter correct address</p>}
			</div>

			<div className={styles.actions}>
				<button className={styles.submit}>Confirm order</button>
				<button onClick={onCancel} type='button'>
					Cancel order
				</button>
			</div>
		</form>
	);
};
