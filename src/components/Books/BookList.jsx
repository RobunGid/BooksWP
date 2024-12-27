import { useEffect, useState } from 'react';
import { Card } from '../UI/Card';
import { BookItem } from './BookItem/BookItem';
import styles from './BookList.module.css';

export const BookList = () => {
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [HTTPErrorMessage, setHTTPErrorMessage] = useState();

	useEffect(() => {
		const fetchBooks = async () => {
			setIsLoading(true);
			const response = await fetch(
				// Firebase db link
				'FIREBASE_URL/books.json'
			);

			if (
				!response.ok ||
				response.headers.get('Content-Type') !== 'application/json; charset=utf-8'
			) {
				throw new Error('Something goes wrong... Try reload page');
			}

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

			setIsLoading(false);
		};

		fetchBooks().catch((error) => {
			setIsLoading(false);
			setHTTPErrorMessage(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={styles.loading}>
				<p>Fetching data from server...</p>
			</section>
		);
	}

	if (HTTPErrorMessage) {
		return (
			<section className={styles.error}>
				<p>{HTTPErrorMessage}</p>
			</section>
		);
	}

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
