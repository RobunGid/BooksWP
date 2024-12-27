import { useEffect, useState } from 'react';
import { Card } from '../UI/Card';
import { BookItem } from './BookItem/BookItem';
import styles from './BookList.module.css';

export const BookList = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await fetch(
				// Firebase db link
				'FIREBASE_URL/books.json'
			);
			const responseData = await response.json();

			const loadedBooks = [];

			for (const key in responseData) {
				loadedBooks.push({
					id: key,
					name: responseData[key].name,
					author: responseData[key].author,
					description: responseData[key].description,
					price: responseData[key].price,
					cover: responseData[key].cover,
				});
			}

			setBooks(loadedBooks);
		};

		fetchBooks();
	}, []);

	const bookList = books.map((bookData) => (
		<BookItem
			key={bookData.id}
			id={bookData.id}
			name={bookData.name}
			author={bookData.author}
			description={bookData.description}
			price={bookData.price}
			cover={bookData.cover}
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
