const assert = require('assert');
const { expect } = require('chai');

const Basket = require('../src/index');

describe('Basket', () => {
    describe('addProduct()', () => {
        it('should add a new product to the basket', () => {
            const item = {
                id: '0101',
                name: 'Balenciaga Triple S low-top sneakers',
                price: 695
            };

            const basket = new Basket();
            basket.addProduct(item);
            const basketItems = basket.getBasketItems();

            expect(basketItems).to.include(item);
        });
    });
    describe('removeProduct()', () => {
        it('should remove product from the basket', () => {
            const item = {
                id: '0102',
                name: 'Maison Margiela Tabi ankle boots',
                price: 695
            };

            const item2 = {
                id: '0103',
                name: 'Chloé Lauren low-top sneakers',
                price: 370
            };

            const basket = new Basket();
            basket.addProduct(item);
            basket.addProduct(item2);

            basket.removeProduct(item);
            const basketItems = basket.getBasketItems();

            expect(basketItems).to.not.include(item);
        });
    });
    describe('getBasketCount()', () => {
        it('should return the total number of products in the basket', () => {
            const expectedTotal = 4;

            const item = {
                id: '0102',
                name: 'Maison Margiela Tabi ankle boots',
                price: 695
            };

            const item2 = {
                id: '0104',
                name: 'Chloé Lauren low-top sneakers',
                price: 370
            };

            const item3 = {
                id: '0105',
                name: 'Maison Margiela Tabi ankle boots',
                price: 695
            };

            const item4 = {
                id: '0106',
                name: 'Chloé Lauren low-top sneakers',
                price: 370
            };

            const basket = new Basket();
            basket.addProduct(item);
            basket.addProduct(item2);
            basket.addProduct(item3);
            basket.addProduct(item4);

            const totalCount = basket.getBasketCount();
            assert.equal(totalCount, expectedTotal);
            
        })
    });
    describe('getTotalPrice()', () => {
        it('should return the total price', () => {
            const expectedTotal = 1065;

            const item = {
                id: '0102',
                name: 'Maison Margiela Tabi ankle boots',
                price: 695
            };

            const item2 = {
                id: '0103',
                name: 'Chloé Lauren low-top sneakers',
                price: 370
            };

            const basket = new Basket();
            basket.addProduct(item);
            basket.addProduct(item2);

            const totalPrice = basket.getTotalPrice();

            assert.equal(totalPrice, expectedTotal);
        });
    })
});