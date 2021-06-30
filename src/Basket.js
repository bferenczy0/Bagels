class Basket {
    constructor() {
        this.items = [];
    }
    add(item){
        this.items.push(item);
        return this.items;
    }
    remove (item)
    {
        const index = this.items.indexOf(item);
        return this.items.splice(index, 1);
    }
}
module.exports = Basket;