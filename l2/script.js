// window.onload = () => {
//
//     const goods = [
//         {title: 'Shirt', price: 150},
//         {title: 'Socks', price: 50},
//         {title: 'Jacket', price: 350},
//         {title: 'Shoes', price: 250},
//     ];
//
//     const renderGoodsItem = (title, price) => {
//         return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
//     };
//
//     const renderGoodsList = (list) => {
//         let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//         document.querySelector('.goods-list').innerHTML = goodsList.join("");
//     }
//
//     renderGoodsList(goods);
//
// }


class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><button class="sale-button">Купить</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.allProducts = [];
    }

    fetchGoods() {
        this.goods = [
            {title: 'Shirt', price: 150},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 350},
            {title: 'Shoes', price: 250},
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    getSum() {
        let res = 0;
        for (let product of this.goods) {
            res += product.price;
        }

        alert(res);
    }
}

window.onload = () => {
    const list = new GoodsList();
    list.fetchGoods();
    list.render();
    list.getSum();
}

class Basket {

}

class ElemBasket {

}



