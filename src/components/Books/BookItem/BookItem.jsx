import styles from './BookItem.module.css';
import { BookItemForm } from './BookItemForm';

export const BookItem = ({ name, author, description, price, id }) => {
	const formattedPrice = `$${price.toFixed(2)}`;

	return (
		<li className={styles.book}>
			<div>
				<h3>{name}</h3>
				<div className={styles.author}>{author}</div>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{formattedPrice}</div>
			</div>

			<div>
				<BookItemForm id={id} />
			</div>
		</li>
	);
};
