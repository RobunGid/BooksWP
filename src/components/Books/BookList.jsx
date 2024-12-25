import styles from './BookList.module.css';

import { BOOK_LIST } from './constants.JSX';

export const BookList = () => {
	const bookList = BOOK_LIST.map((bookData) => (
		<li key={bookData.id}>{bookData.name}</li>
	));

	return (
		<section className={styles.books}>
			<ul>{bookList}</ul>
		</section>
	);
};
