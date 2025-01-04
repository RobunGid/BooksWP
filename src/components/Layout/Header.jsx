import booksStoreImage from '/public/books_store_large.jpg';
import { BooksWPLogo } from '/public/BooksWPLogo';
import styles from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';
export const Header = ({ onShowCart }) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.icon}>
					<BooksWPLogo />
					<h1>BooksWP</h1>
				</div>
				<HeaderCartButton onClick={onShowCart} />
			</header>
			<div className={styles['main-image']}>
				<img src={booksStoreImage} alt='Books store image' />
			</div>
		</>
	);
};
