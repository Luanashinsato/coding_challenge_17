// Task 1: Creating a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name; // Assigning customer name 
        this.email = email; // Assigning customer email 
        this.purchaseHistory = []; // Assigning customer purchase history 
    }
    // Adding a method that adds a purchase amount to purchaseHistory
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }
    // Adding a method that returns total amount spent
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}

// Example usage
const customer1 = new Customer("Luana Shinsato", "luanashinsato@gmail.com");
customer1.addPurchase(50);
customer1.addPurchase(30);
console.log(`New customer created - Name: ${customer1.name}, Email: ${customer1.email}`); // Logging new customer creation
console.log(`Total spent by ${customer1.name} - $${customer1.getTotalSpent()}`); // Logging total spent after purchases
