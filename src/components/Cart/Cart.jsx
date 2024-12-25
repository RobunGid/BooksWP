import { useContext } from 'react';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import { CartContext } from '../../store/cart-context';
import { CartItem } from './CartItem';

export const Cart = ({ onHideCart }) => {
	const cartContext = useContext(CartContext);

	const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;

	const hasItems = cartContext.items.length > 0;

	const handleAddCartItem = (item) => {
		cartContext.addItem({ ...item, count: 1 });
	};

	const handleRemoveCartItem = (id) => {
		cartContext.removeItem(id);
	};

	const cartItems = (
		<ul className={styles['cart-items']}>
			{cartContext.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					author={item.author}
					price={item.price}
					count={item.count}
					onAdd={handleAddCartItem.bind(null, item)}
					onRemove={handleRemoveCartItem.bind(null, item.id)}
				></CartItem>
			))}
		</ul>
	);

	return (
		<Modal onClose={onHideCart}>
			{cartItems}
			<div className={styles.total}>
				<span>Total</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button onClick={onHideCart} className={styles['button--alt']}>
					Close
				</button>
				{hasItems && <button className={styles['button']}>Order</button>}
			</div>
		</Modal>
	);
};
