import { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';
import styles from './BookItem.module.css';
import { BookItemForm } from './BookItemForm';

export const BookItem = ({ name, author, description, price, id, cover }) => {
	const cartContext = useContext(CartContext);
	const handleAddToCart = ({ count }) => {
		cartContext.addItem({
			name: name,
			author: author,
			id: id,
			count: count,
			price: price,
			cover: cover,
		});
	};

	const formattedPrice = `$${price.toFixed(2)}`;

	return (
		<li className={styles.book}>
			<div className={styles['cover-container']}>
				<div className={styles.cover}>
					<img src={cover} alt='book_cover' />
				</div>
			</div>

			<div>
				<h3>{name}</h3>
				<div className={styles.author}>{author}</div>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{formattedPrice}</div>
			</div>

			<div>
				<BookItemForm onAddToCart={handleAddToCart} id={id} />
			</div>
		</li>
	);
};
