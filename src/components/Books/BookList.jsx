import { Card } from '../UI/Card';
import { BookItem } from './BookItem/BookItem';
import styles from './BookList.module.css';

import { BOOK_LIST } from './constants.JSX';

export const BookList = () => {
	const bookList = BOOK_LIST.map((bookData) => (
		<BookItem
			key={bookData.id}
			price={bookData.price}
			name={bookData.name}
			author={bookData.author}
			description={bookData.description}
		>
			{bookData.name}
		</BookItem>
	));

	return (
		<section className={styles.books}>
			<Card>
				<ul>{bookList}</ul>
			</Card>
		</section>
	);
};
