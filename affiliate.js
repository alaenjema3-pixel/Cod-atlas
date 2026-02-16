// affiliate.js

// Affiliate Dashboard Functionality for ATLAS COD AFFILIATES

// Product Browsing
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
];

function browseProducts() {
    return products;
}

// Order Submission
function submitOrder(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) return 'Product not found';
    const total = product.price * quantity;
    return `Order submitted for ${quantity} x ${product.name}. Total: $${total}`;
}

// Order Tracking
const orders = [];

function trackOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return 'Order not found';
    return order;
}

// Withdrawal Requests
const withdrawalRequests = [];

function requestWithdrawal(amount) {
    if (amount <= 0) return 'Invalid amount';
    withdrawalRequests.push({ amount, date: new Date() });
    return `Withdrawal request submitted for $${amount}`;
}

// Exporting functionalities
module.exports = { browseProducts, submitOrder, trackOrder, requestWithdrawal };