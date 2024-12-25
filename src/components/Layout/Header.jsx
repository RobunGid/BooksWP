import booksStoreImage from '../../assets/books_store_large.jpg';
import styles from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';
export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<h1>BooksWP</h1>
				<HeaderCartButton />
			</header>
			<div className={styles['main-image']}>
				<img src={booksStoreImage} alt='Books store image' />
			</div>
		</>
	);
};
