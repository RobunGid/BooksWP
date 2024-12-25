import booksStoreImage from '../../assets/books_store_large.jpg';
import styles from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';
export const Header = ({ onShowCart }) => {
	return (
		<>
			<header className={styles.header}>
				<h1>BooksWP</h1>
				<HeaderCartButton onClick={onShowCart} />
			</header>
			<div className={styles['main-image']}>
				<img src={booksStoreImage} alt='Books store image' />
			</div>
		</>
	);
};
