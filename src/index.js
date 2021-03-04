/*
Build a basket module exposing a public api that allows:
 - Adding a product to the basket (id, name and price).
 - Removing from the basket.
 - Getting the total number of products.
 - Getting the total price of the basket.
*/

class Basket {
    constructor() {
        this.basketItems = [];
    }

    addProduct(product) {
        return this.basketItems.push(product);
    }

    getBasketItems() {
        return this.basketItems;
    }

    removeProduct(product) {
        const index = this.basketItems.indexOf(product)
        if (index > -1) {
            return this.basketItems.splice(index, 1);
        }
    }

    getBasketCount() {
        return this.basketItems.length;
    }

    getTotalPrice() {
        return this.basketItems.reduce((prev, { price }) => prev + price, 0);
    }
}

module.exports = Basket
