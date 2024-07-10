const { addItem } = require("./itemController");
exports.addItemsToDB = () => {

    const newItemsList = [
        {
            type: {
                itemType: "Start Dish",
                eventType: "Pareve"
            },
            name: "kugel potato",
            price: 5
        }, {
            type: {
                itemType: "Start Dish",
                eventType: "Pareve"
            },
            name: "kugel noodles",
            price: 5
        }, {
            type: {
                itemType: "Start Dish",
                eventType: "Pareve"
            },
            name: "salmon fish",
            price: 15
        }, {
            type: {
                itemType: "Start Dish",
                eventType: "Pareve"
            },
            name: "tilapia fillet fish",
            price: 10
        }, {
            type: {
                itemType: "Start Dish",
                eventType: "Pareve"
            },
            name: "vegetable borax",
            price: 3
        }, {
            type: {
                itemType: "Start Dish",
                eventType: "Pareve"
            },
            name: "blinches",
            price: 4
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "fried eggplants",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "eggplants in mayonnaise",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "grinding",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "chickpeas",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "pickles",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "beetroot",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "raw vegetables",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "lettuce",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "coleslaw",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "carrot",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "tomatoes",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "cranberry purple cabbage",
            price: 7
        }, {
            type: {
                itemType: "Salads",
                eventType: "Pareve"
            },
            name: "white cabbage",
            price: 7
        }, , {
            type: {
                itemType: "Salads",
                eventType: "Milky"
            },
            name: "salty cheese",
            price: 7
        }, , {
            type: {
                itemType: "Salads",
                eventType: "Milky"
            },
            name: "dill garlic cheese",
            price: 7
        }, , {
            type: {
                itemType: "Salads",
                eventType: "Milky"
            },
            name: "yellow cheese",
            price: 7
        }, {
            type: {
                itemType: "Main Course",
                eventType: "Fleshy"
            },
            name: "chicken steak",
            price: 15
        }, {
            type: {
                itemType: "Main Course",
                eventType: "Fleshy"
            },
            name: "schnitzel",
            price: 15
        }, {
            type: {
                itemType: "Main Course",
                eventType: "Fleshy"
            },
            name: "meat",
            price: 15
        }, {
            type: {
                itemType: "Main Course",
                eventType: "Pareve"
            },
            name: "turkey roll",
            price: 10
        }, {
            type: {
                itemType: "Main Course",
                eventType: "Pareve"
            },
            name: "pea Soup",
            price: 10
        }, {
            type: {
                itemType: "Main Course",
                eventType: "Pareve"
            },
            name: "vegetable soup",
            price: 10
        }, {
            type: {
                itemType: "Main Course",
                eventType: "Pareve"
            },
            name: "onion soup",
            price: 10
        }, {
            type: {
                itemType: "Main Course",
                eventType: "Milky"
            },
            name: "Cheese borax",
            price: 8
        }, {
            type: {
                itemType: "Main Course",
                eventType: "Milky"
            },
            name: "pizza",
            price: 7
        },
        {
            type: {
                itemType: "Extras",
                eventType: "Pareve"
            },
            name: "rice",
            price: 7
        }, {
            type: {
                itemType: "Extras",
                eventType: "Pareve"
            },
            name: "rice with vegetables",
            price: 7
        }, {
            type: {
                itemType: "Extras",
                eventType: "Pareve"
            },
            name: "baked potato",
            price: 7
        }, {
            type: {
                itemType: "Extras",
                eventType: "Pareve"
            },
            name: "potato and sweet potato",
            price: 7
        }, {
            type: {
                itemType: "Extras",
                eventType: "Pareve"
            },
            name: "beans in sauce",
            price: 7
        }, {
            type: {
                itemType: "Extras",
                eventType: "Pareve"
            },
            name: "tsimas",
            price: 7
        }, {
            type: {
                itemType: "Extras",
                eventType: "Pareve"
            },
            name: "puree",
            price: 7
        }, {
            type: {
                itemType: "Extras",
                eventType: "Milky"
            },
            name: "creamed potatoes",
            price: 7
        }, {
            type: {
                itemType: "Extras",
                eventType: "Milky"
            },
            name: "creamy pasta",
            price: 7
        }, {
            type: {
                itemType: "Dessert",
                eventType: "Milky"
            },
            name: "creamy ice cream",
            price: 9
        }, {
            type: {
                itemType: "Dessert",
                eventType: "Milky"
            },
            name: "milk jam ice cream",
            price: 9
        }, {
            type: {
                itemType: "Dessert",
                eventType: "Pareve"
            },
            name: "sorbet ice cream",
            price: 9
        }, {
            type: {
                itemType: "Dessert",
                eventType: "Pareve"
            },
            name: "strawberry roll",
            price: 9
        }, {
            type: {
                itemType: "Dessert",
                eventType: "Pareve"
            },
            name: "fruit shake",
            price: 9
        }, {
            type: {
                itemType: "Dessert",
                eventType: "Pareve"
            },
            name: "pie plate",
            price: 9
        }, {
            type: {
                itemType: "Dessert",
                eventType: "Pareve"
            },
            name: "mousse",
            price: 9
        }, {
            type: {
                itemType: "Dessert",
                eventType: "Pareve"
            },
            name: "soufflé",
            price: 9
        }, {
            type: {
                itemType: "Dessert",
                eventType: "Pareve"
            },
            name: "Strawberry roll",
            price: 9
        },
    ];

    newItemsList.forEach(item => {
        try {
            addItem({
                body: item
            });
        } catch (error) {
            console.error('Failed to add item:', error);
        }
    });
};