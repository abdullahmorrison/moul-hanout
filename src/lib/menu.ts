type menuType = {
  name: string,
  description: string,
  price: number,
  note?: string,
}
type menuCategoryType = {
  name: string,
  meals: menuType[],
}

const menu: menuCategoryType[] = [
  {
    name: "Deli Meals",
    meals: [
      {
        name: "Mixed Sandwich",
        description: "A combination of meats in a sandwich, served with your choice of Moroccan tea (vegan & gluten-free) or buttermilk. ",
        price: 12.95,
      },
      {
        name: "Chicken Sandwich",
        description: "Chicken deli sandwich accompanied by a drink.",
        price: 12.95,
      },
      {
        name: "Mortadella Sandwich",
        description: "Mortadella deli sandwich accompanied by a drink.",
        price: 12.95,
      },
      {
        name: "Tuna Sandwich",
        description: "Tuna deli sandwich accompanied by a drink.",
        price: 12.95,
      },
      {
        name: "Veggie Sausage Sandwich",
        description: "Vegan and gluten-free veggie sausage sandwich.",
        price: 10.95,
      },
    ],
  },
  {
    name: "Entrees",
    meals: [
      {
        name: "Moroccan Soup (Harira)",
        description: "Traditional Moroccan soup served with shebakia or bread.",
        price: 7.95,
      },
      {
        name: "Fries",
        description: "Crispy golden fries.",
        price: 3.95,
      },
      {
        name: "Signature Salad",
        description: "Fresh salad with a unique Moroccan twist.",
        price: 7.95,
      },
      {
        name: "Bread",
        description: "Nine pieces of golden grain bread.",
        price: 1.95,
      },
    ],
  },
  {
    name: "Drinks",
    meals: [
      {
        name: "Moroccan Mint Tea",
        note: "Included with select sandwiches",
        description: "Traditional Moroccan mint tea.",
        price: 3.95,
      },
      {
        name: "Buttermilk",
        note: "Included with select sandwiches",
        description: "Refreshing buttermilk drink.",
        price: 3.95,
      },
    ]
  },
  {
    name: "Desserts",
    meals: [
      {
        name: "Moroccan Biscuits",
        description: "Traditional Moroccan biscuits, often served with tea.",
        price: 5.95,
      },
    ]
  },
]
export default menu;
