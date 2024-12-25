import { createContext } from 'react';

export const CartContext = createContext({
	items: [],
	totalCount: 0,
	addItem: (item) => item,
	removeItem: (id) => id,
});
