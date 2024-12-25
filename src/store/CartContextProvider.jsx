import { CartContext } from './cart-context';

export const CartContextProvider = ({ children }) => {
	const handleAddItem = (item) => item;

	const handleRemoveItem = (id) => id;

	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: handleAddItem,
		removeItem: handleRemoveItem,
	};

	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};
