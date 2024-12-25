import { Books } from './components/Books/Books';
import { Header } from './components/Layout/Header';

export function App() {
	return (
		<>
			<Header />
			<main>
				<Books />
			</main>
		</>
	);
}
