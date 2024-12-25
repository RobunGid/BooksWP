import { useReducer } from 'react';
import { CartContext } from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const updatedItems = [...state.items, action.item];
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.count;

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	return defaultCartState;
};

export const CartContextProvider = ({ children }) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
	const handleAddItem = (item) => {
		dispatchCartAction({
			type: 'ADD_ITEM',
			item: item,
		});
	};
	const handleRemoveItem = (id) => {
		dispatchCartAction({
			type: 'REMOVE_ITEM',
			id: id,
		});
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: handleAddItem,
		removeItem: handleRemoveItem,
	};

	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};
