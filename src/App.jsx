import { useState } from 'react';
import { Books } from './components/Books/Books';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Layout/Header';
import { CartContextProvider } from './store/CartContextProvider';

export function App() {
	const [isCartVisible, setIsCartVisible] = useState(false);

	const handleShowCart = () => {
		setIsCartVisible(true);
	};

	const handleHideCart = () => {
		setIsCartVisible(false);
	};

	return (
		<CartContextProvider>
			<Header onShowCart={handleShowCart} />
			{isCartVisible && <Cart onHideCart={handleHideCart} />}
			<main>
				<Books />
			</main>
		</CartContextProvider>
	);
}
