import styles from './SubmitOrder.module.css';
import { useRef, useState } from 'react';

const isInputValid = (inputValue) => inputValue.trim() !== '';

export const SubmitOrder = ({ onCancel, onSubmit }) => {
	const [formValidity, setFormValidity] = useState({
		name: true,
		city: true,
		address: true,
	});

	const nameInputRef = useRef();
	const cityInputRef = useRef();
	const addressInputRef = useRef();

	const handleConfirmOrder = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredCity = cityInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;

		const isEnteredNameValid = isInputValid(enteredName);
		const isEnteredCityValid = isInputValid(enteredCity);
		const isEnteredAddressValid = isInputValid(enteredAddress);

		setFormValidity({
			name: isEnteredNameValid,
			city: isEnteredCityValid,
			address: isEnteredAddressValid,
		});

		const isFormValid =
			isEnteredNameValid && isEnteredCityValid && isEnteredAddressValid;

		if (!isFormValid) {
			return;
		}

		onSubmit({
			name: enteredName,
			city: enteredCity,
			address: enteredAddress,
		});
	};

	const nameInputClasses = `${styles.control} ${
		formValidity.name ? '' : styles.invalid
	}`;

	const cityInputClasses = `${styles.control} ${
		formValidity.city ? '' : styles.invalid
	}`;

	const addressInputClasses = `${styles.control} ${
		formValidity.address ? '' : styles.invalid
	}`;

	return (
		<form className={styles.form} onSubmit={handleConfirmOrder}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' ref={nameInputRef} />
				{formValidity.name || <p>Please, enter correct name</p>}
			</div>

			<div className={cityInputClasses}>
				<label htmlFor='city'>City name</label>
				<input type='text' id='city' ref={cityInputRef} />
				{formValidity.city || <p>Please, enter correct city name</p>}
			</div>

			<div className={addressInputClasses}>
				<label htmlFor='address'>Address</label>
				<input type='text' id='address' ref={addressInputRef} />
				{formValidity.address || <p>Please, enter correct address</p>}
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
