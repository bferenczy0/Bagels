class Basket {
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity || 1000;
        this.currentLevel = 0;
    }
    add(item){
        for (let i = 0; i<item.length;i++){

            if (this.duplicateChecker(item[i]))
            {
                return "Bagel already in basket";

            }
            if (this.isFull()){
                //console.log('Basket is full');
                return this.items;
            }else {
                //console.log('else');
                this.items.push(item[i]);
                this.currentLevel++;
            }
        } return this.items;
    }
    remove (item)
    {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        return this.items;
    }
    isFull(){
        if (this.currentLevel>=this.capacity){
            return true;
        } else {
            return false;
        }
    }
    increaseCapacity(increase)
    {
        this.capacity +=increase;
    }

    duplicateChecker (bagel)
    { 
        if (this.items.includes(bagel)){
            return true;

        }
        else {return false;}
    }

}
module.exports = Basket;