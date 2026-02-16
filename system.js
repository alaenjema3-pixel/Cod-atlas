'use strict';

// Core functionalities for ATLAS COD AFFILIATES platform

// 1. Admin Auto-Creation
const admin = {
    username: 'admin',
    password: 'admin123', // For demonstration. Use hashed password in production.
};

const createAdmin = () => {
    // Logic to create an admin account in the database
    console.log('Admin account created:', admin);
};

// 2. Authentication
const authenticate = (username, password) => {
    // Logic to authenticate users
    if (username === admin.username && password === admin.password) {
        console.log('Authentication successful');
        return true;
    }
    console.log('Authentication failed');
    return false;
};

// 3. Category Management
let categories = [];

const addCategory = (name) => {
    categories.push(name);
    console.log('Category added:', name);
};

const getCategories = () => {
    return categories;
};

// 4. Product Management
let products = [];

const addProduct = (product) => {
    products.push(product);
    console.log('Product added:', product);
};

const getProducts = () => {
    return products;
};

// 5. City Management
let cities = [];

const addCity = (city) => {
    cities.push(city);
    console.log('City added:', city);
};

const getCities = () => {
    return cities;
};

// 6. Order Management
let orders = [];

const createOrder = (order) => {
    orders.push(order);
    console.log('Order created:', order);
};

const getOrders = () => {
    return orders;
};

// 7. Withdrawal Management
let withdrawals = [];

const addWithdrawal = (withdrawal) => {
    withdrawals.push(withdrawal);
    console.log('Withdrawal added:', withdrawal);
};

const getWithdrawals = () => {
    return withdrawals;
};

// 8. Affiliate Management
let affiliates = [];

const addAffiliate = (affiliate) => {
    affiliates.push(affiliate);
    console.log('Affiliate added:', affiliate);
};

const getAffiliates = () => {
    return affiliates;
};

// Initialize admin account
createAdmin();

module.exports = {
    authenticate,
    addCategory,
    getCategories,
    addProduct,
    getProducts,
    addCity,
    getCities,
    createOrder,
    getOrders,
    addWithdrawal,
    getWithdrawals,
    addAffiliate,
    getAffiliates,
};