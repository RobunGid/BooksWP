import { useContext, useState } from 'react';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import { CartContext } from '../../store/cart-context';
import { CartItem } from './CartItem';
import { SubmitOrder } from './SubmitOrder';

export const Cart = ({ onHideCart }) => {
	const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);

	const cartContext = useContext(CartContext);

	const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;

	const hasItems = cartContext.items.length > 0;

	const handleAddCartItem = (item) => {
		cartContext.addItem({ ...item, count: 1 });
	};

	const handleRemoveCartItem = (id) => {
		cartContext.removeItem(id);
	};

	const handleOrder = () => {
		setIsSubmitOrderAvailable(true);
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
					cover={item.cover}
					onAdd={handleAddCartItem.bind(null, item)}
					onRemove={handleRemoveCartItem.bind(null, item.id)}
				></CartItem>
			))}
		</ul>
	);

	const modalButtons = (
		<div className={styles.actions}>
			<button onClick={onHideCart} className={styles['button--alt']}>
				Close
			</button>
			{hasItems && (
				<button className={styles['button']} onClick={handleOrder}>
					Order
				</button>
			)}
		</div>
	);

	return (
		<Modal onClose={onHideCart}>
			{cartItems}
			<div className={styles.total}>
				<span>Total</span>
				<span>{totalAmount}</span>
			</div>
			{isSubmitOrderAvailable && <SubmitOrder onCancel={onHideCart} />}
			{!isSubmitOrderAvailable && modalButtons}
		</Modal>
	);
};
