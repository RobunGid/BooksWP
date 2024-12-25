import { Input } from '../../UI/Input';
import styles from './BookItemForm.module.css';

export const BookItemForm = ({ id }) => {
	return (
		<form className={styles.form}>
			<Input
				label='Count'
				input={{
					id: id,
					type: 'number',
					min: '1',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>Add</button>
		</form>
	);
};
