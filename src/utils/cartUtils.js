// Example schema of each product in cart array and saved array in localStorage
// cartItem = { ...productItem, qty: cart_item_qty }

export const initializeCart = () => {
  localStorage.setItem("cart", JSON.stringify([]));
  localStorage.setItem("saved", JSON.stringify([]));
};

export const createCartItem = (item, qty = 1) => {
  return { ...item, qty };
};

// CART
export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart"));
};

export const setCart = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

export const addToCart = (item) => {
  const currentItems = getCart();
  const existingItem = currentItems.find((_) => _.id === item.id);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    currentItems.push(item);
  }
  setCart(currentItems);
};

export const updateQuantity = (id, qty) => {
  const currentItems = getCart();
  const itemToUpdate = currentItems.find((item) => item.id === id);
  itemToUpdate.qty = qty;
};

export const removeItem = (id) => {
  let currentItems = getCart();
  currentItems = currentItems.filter((item) => item.id !== id);
  setCart(currentItems);
};

// SAVED
export const getSaved = () => {
  return JSON.parse(localStorage.getItem("saved"));
};

export const setSaved = (items) => {
  localStorage.setItem("saved", JSON.stringify(items));
};

export const addToSaved = (item) => {
  const currentItems = getSaved();
  currentItems.push(item);
  setCart(currentItems);
};

export const removeFromSaved = (id) => {
  let currentItems = getSaved();
  currentItems = currentItems.filter((item) => item.id !== id);
  setSaved(currentItems);
};
