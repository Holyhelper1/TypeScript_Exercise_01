"use strict";
const totalPrice = ({ price, discount, isInstallment, months }) => {
    return isInstallment ? (price - (price * discount / 100)) / months : price - (price * discount / 100);
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
