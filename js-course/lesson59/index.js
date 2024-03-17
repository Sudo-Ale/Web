// anonymous objects = Objects whitout a name
//                     Not directly referenced
//                     Less syntax. No need for unique names

class Cards{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

new Cards("A", "Hearts");
new Cards("A", "Spades");
new Cards("A", "Diamonds");
new Cards("A", "Clubs");

new Cards("2", "Hearts");
new Cards("2", "Spades");
new Cards("2", "Diamonds");
new Cards("2", "Clubs");

let cards = [
            new Cards("A", "Hearts"),
            new Cards("A", "Spades"),
            new Cards("A", "Diamonds"),
            new Cards("A", "Clubs")
            
];