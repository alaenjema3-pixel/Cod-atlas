// system.js

// Initialize LocalStorage Data
const initializeData = () => {
    if (!localStorage.getItem('admins')) {
        const admins = [{ id: 1, username: 'admin', password: 'admin123' }];
        localStorage.setItem('admins', JSON.stringify(admins));
    }
    if (!localStorage.getItem('categories')) localStorage.setItem('categories', JSON.stringify([]));
    if (!localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify([]));
    if (!localStorage.getItem('cities')) localStorage.setItem('cities', JSON.stringify([]));
    if (!localStorage.getItem('orders')) localStorage.setItem('orders', JSON.stringify([]));
    if (!localStorage.getItem('withdrawals')) localStorage.setItem('withdrawals', JSON.stringify([]));
    if (!localStorage.getItem('affiliates')) localStorage.setItem('affiliates', JSON.stringify([]));
};

// Authentication
const authenticateUser = (username, password) => {
    const admins = JSON.parse(localStorage.getItem('admins'));
    return admins.find(admin => admin.username === username && admin.password === password);
};

// Categories Management
const addCategory = (categoryName) => {
    const categories = JSON.parse(localStorage.getItem('categories'));
    categories.push({ id: categories.length + 1, name: categoryName });
    localStorage.setItem('categories', JSON.stringify(categories));
};

const getCategories = () => {
    return JSON.parse(localStorage.getItem('categories'));
};

// Product Management
const addProduct = (product) => {
    const products = JSON.parse(localStorage.getItem('products'));
    products.push({ id: products.length + 1, ...product });
    localStorage.setItem('products', JSON.stringify(products));
};

const getProducts = () => {
    return JSON.parse(localStorage.getItem('products'));
};

// City Management
const addCity = (cityName) => {
    const cities = JSON.parse(localStorage.getItem('cities'));
    cities.push({ id: cities.length + 1, name: cityName });
    localStorage.setItem('cities', JSON.stringify(cities));
};

// Order System
const createOrder = (order) => {
    const orders = JSON.parse(localStorage.getItem('orders'));
    orders.push({ id: orders.length + 1, ...order });
    localStorage.setItem('orders', JSON.stringify(orders));
};

// Withdrawal System
const requestWithdrawal = (amount) => {
    const withdrawals = JSON.parse(localStorage.getItem('withdrawals'));
    withdrawals.push({ id: withdrawals.length + 1, amount });
    localStorage.setItem('withdrawals', JSON.stringify(withdrawals));
};

// Affiliate Management
const addAffiliate = (affiliate) => {
    const affiliates = JSON.parse(localStorage.getItem('affiliates'));
    affiliates.push({ id: affiliates.length + 1, ...affiliate });
    localStorage.setItem('affiliates', JSON.stringify(affiliates));
};

// Initialize Data
initializeData();