const app = new Vue({
    el: '#app',
    data: {
        books: [{
                id: 1,
                name: '《算法导论》',
                date: '2006-09',
                price: 85.00,
                count: 1,
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-02',
                price: 59.00,
                count: 1,
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1,
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-03',
                price: 128.00,
                count: 1,
            },
        ]

    },
    methods: {
        increment(i) {
            this.books[i].count++;
        },
        decrement(i) {
            this.books[i].count--;
        },
        removeBooks(i) {
            this.books.splice(i, 1);
        }
    },
    computed: {
        totalPrice() {
            //let totalprice = 0;
            //for (let n = 0; n < this.books.length; n++) {
            //    totalprice += this.books[n].price * this.books[n].count;
            //}
            //return totalprice;
            return this.books.reduce(function(preValue, book) {
                return preValue + book.price * book.count
            }, 0)
        }
    },
    filters: {
        showPrice(price) {
            return '¥ ' + price.toFixed(2);
        }

    }
})