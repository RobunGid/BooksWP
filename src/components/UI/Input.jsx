import { forwardRef } from 'react';
import styles from './Input.module.css';

const InputComponent = ({ label, input }, ref) => {
	return (
		<div className={styles.input}>
			<label htmlFor={input.id}>{label}</label>
			<input ref={ref} {...input} />
		</div>
	);
};

export const Input = forwardRef(InputComponent);
