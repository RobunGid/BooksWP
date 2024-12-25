import { useContext } from 'react';
import { CartIcon } from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import { CartContext } from '../../store/cart-context';

export const HeaderCartButton = ({ onClick }) => {
	const cartContext = useContext(CartContext);

	const cartItemsCount = cartContext.items.reduce((currentCount, item) => {
		return currentCount + item.count;
	}, 0);

	return (
		<button className={styles.button} onClick={onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={styles.badge}>{cartItemsCount}</span>
		</button>
	);
};
