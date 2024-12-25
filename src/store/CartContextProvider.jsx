import { useReducer } from 'react';
import { CartContext } from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.count;

		const existingCartItemIndex = state.items.findIndex((item) => {
			return item.id === action.item.id;
		});

		const existingCartItem = state.items[existingCartItemIndex];

		let updatedItem;
		let updatedItems;

		if (existingCartItem) {
			updatedItem = {
				...existingCartItem,
				count: existingCartItem.count + action.item.count,
			};

			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItem = {
				...action.item,
			};
			updatedItems = [...state.items, action.item];
		}

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
