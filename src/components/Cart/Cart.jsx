import styles from './Cart.module.css';

export const Cart = () => {
	const cartItems = (
		<ul className={styles['card-items']}>
			{[
				{
					id: 'book_0001',
					name: 'The Old Man and the Sea',
					author: 'Ernest Hemingway',
					price: 6.74,
					amount: 2,
				},
			].map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	);

	return (
		<div>
			{cartItems}
			<div className={styles.total}>
				<span>Total</span>
				<span>$94.34</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['buton--alt']}>Close</button>
				<button className={styles['buton']}>Order</button>
			</div>
		</div>
	);
};
