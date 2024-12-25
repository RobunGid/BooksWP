import { useContext, useEffect, useState } from 'react';
import { CartIcon } from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import { CartContext } from '../../store/cart-context';

export const HeaderCartButton = ({ onClick }) => {
	const [isButtonAnimated, setIsButtonAnimated] = useState(false);
	const cartContext = useContext(CartContext);

	const cartItemsCount = cartContext.items.reduce((currentCount, item) => {
		return currentCount + item.count;
	}, 0);

	const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`;

	useEffect(() => {
		if (cartContext.items.length == 0) {
			return;
		}
		setIsButtonAnimated(true);

		const timer = setTimeout(() => {
			setIsButtonAnimated(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [cartContext.items]);

	return (
		<button className={buttonClasses} onClick={onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={styles.badge}>{cartItemsCount}</span>
		</button>
	);
};
