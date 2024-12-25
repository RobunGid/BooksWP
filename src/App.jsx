import { Books } from './components/Books/Books';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Layout/Header';

export function App() {
	return (
		<>
			<Header />
			<Cart />
			<main>
				<Books />
			</main>
		</>
	);
}
