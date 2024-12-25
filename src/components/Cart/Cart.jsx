import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';

export const Cart = ({ onHideCart }) => {
	const cartItems = (
		<ul className={styles['cart-items']}>
			{[
				{
					id: 'book_0001',
					name: 'The Old Man and the Sea',
					author: 'Ernest Hemingway',
					price: 6.74,
					count: 2,
				},
			].map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	);

	return (
		<Modal onClose={onHideCart}>
			{cartItems}
			<div className={styles.total}>
				<span>Total</span>
				<span>$94.34</span>
			</div>
			<div className={styles.actions}>
				<button onClick={onHideCart} className={styles['button--alt']}>
					Close
				</button>
				<button className={styles['button']}>Order</button>
			</div>
		</Modal>
	);
};
