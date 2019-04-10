class Basket {
    goodsList = [];

    getTotalPrice() {
        let sum = 0;
        this.goodsList.forEach(function (item) {
            sum += item.price;
        });
        return sum;
    };

    putProduct(product) {
        this.goodsList.push(product);
    };

}

class Product {
    title = '';
    price = 0;

    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

// const basket = new Basket();
//
// let cat = new Product('cat', 50);
// let dog = new Product('dog', 30);
//
// basket.putProduct(chair);
// basket.putProduct(table);
//
// const totalPrice = basket.getTotalPrice();
//
// console.log(totalPrice);


const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket'},
    {title: 'Shoes', price: 250},
    {title: 'Coat', price: 150},
    {title: 'Jeans', price: 200}
];

const renderGoodsItem = (title = 'Нет названия', price = 0) =>
    `<div class="goods-item">
        <h3 class="goods-item__name">${title}</h3>
        <p class="goods-item__price">${price}</p>
        <a href="#" class="small-btn">Добавить</a>
     </div>`;

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);



//
// const Basket = {
//     goodList: [],
//
//     countTotalPrice: function () {
//         return this.goodList.reduce((sum, item) => {
//             return sum + item.price;
//         }, 0);
//     },
//
//     putProduct: function (product) {
//         let isHas = this.goodList.some((productInBasket) => {
//             if (productInBasket.name === product.name) {
//                 productInBasket.count++;
//                 return true;
//             }
//         });
//
//         if (!isHas) {
//             this.goodList.push({...product, count: 1});
//         }
//     },
//
// };
//
// const products = [
//     {name: 'apple', price: 10},
//     {name: 'chair', price: 20},
//     {name: 'bottle', price: 30},
//     {name: 'cheese', price: 10},
//     {name: 'mouse', price: 50},
// ];
//
// products.forEach((product, i) => {
//     if (i % 2) {
//         Basket.putProduct(product);
//     }
//     Basket.putProduct(product);
// });
//
// const totalPrice = Basket.countTotalPrice();
// const elBasketParagraph = document.createElement('p');
//
// if (totalPrice === 0) {
//     elBasketParagraph.innerHTML = 'Корзина пуста';
// } else {
//     elBasketParagraph.innerHTML = `В корзине ${Basket.goodList.length} товаров на ${totalPrice} рублей`;
// }
//
// basket.appendChild(elBasketParagraph);

//  console.log(Basket.goodList);
// console.log(totalPrice);