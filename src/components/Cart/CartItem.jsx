import styles from './CartItem.module.css';

export const CartItem = ({ name, author, price, count, cover, onRemove, onAdd }) => {
	const formattedPrice = `$${price.toFixed(2)}`;

	return (
		<li className={styles['cart-item']}>
			<div className={styles['cover-container']}>
				<div className={styles.cover}>
					<img src={cover} alt='book_cover' />
				</div>
			</div>
			<div className={styles.info}>
				<h2>{name}</h2>
				<h3>{author}</h3>
				<div className={styles.summary}>
					<span className={styles.price}>{formattedPrice}</span>
					<span className={styles.count}>x {count}</span>
				</div>
			</div>
			<div className={styles.actions}>
				<button onClick={onRemove}>−</button>
				<button onClick={onAdd}>+</button>
			</div>
		</li>
	);
};
