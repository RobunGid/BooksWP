import styles from './PromoText.module.css';
export const PromoText = () => {
	return (
		<section className={styles['promo-text']}>
			<h2>BooksWP – Where every book brings pleasure</h2>
			<p>
				BooksWP is an online bookstore where you can explore a wide variety of
				fascinating books, selected to match every interest and taste.
			</p>
			<p>
				We offer a vast selection of books across all genres – from bestsellers to
				hidden treasures. Buy paper books or eBooks with fast delivery right to
				your door or device.
			</p>
		</section>
	);
};
