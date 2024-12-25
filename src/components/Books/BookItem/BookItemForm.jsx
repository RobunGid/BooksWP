import { useRef, useState } from 'react';
import { Input } from '../../UI/Input';
import styles from './BookItemForm.module.css';

export const BookItemForm = ({ id, onAddToCart }) => {
	const [isCountValid, setIsCountValid] = useState(true);

	const countInputRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		const inputCount = countInputRef.current.value;
		if (inputCount.trim().length === 0 || +inputCount < 1 || +inputCount > 30) {
			setIsCountValid(false);
			return;
		}

		onAddToCart({ count: +inputCount });
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<Input
				label='Count'
				ref={countInputRef}
				input={{
					id: id,
					type: 'number',
					min: '1',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>Add</button>
			{!isCountValid && <p>The count of books must be between 1 and 30</p>}
		</form>
	);
};
