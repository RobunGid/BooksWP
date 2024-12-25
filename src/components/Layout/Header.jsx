import booksStoreImage from '../../assets/books_store_large.jpg';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<h1>BooksWP</h1>
				<button>Cart</button>
			</header>
			<div className={styles['main-image']}>
				<img src={booksStoreImage} alt='Books store image' />
			</div>
		</>
	);
};
