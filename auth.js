// auth.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Dummy database for demonstration purposes
const users = [];
const secretKey = 'your_secret_key'; // Should be stored securely

// Auto-admin creation logic
function createAdmin(email, password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const admin = {
        email: email,
        password: hashedPassword,
        role: 'admin'
    };
    users.push(admin);
    console.log('Admin created:', admin);
}

// User authentication logic
function authenticate(email, password) {
    const user = users.find(user => user.email === email);
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ email: user.email, role: user.role }, secretKey);
        return { token };
    } else {
        throw new Error('Authentication failed');
    }
}

// Role-based access control logic
function checkAccess(userRole, requiredRole) {
    if (userRole !== requiredRole) {
        throw new Error('Access denied');
    }
}

// Example usage
createAdmin('admin@example.com', 'password123');

module.exports = { createAdmin, authenticate, checkAccess };