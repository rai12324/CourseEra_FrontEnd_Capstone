import greek from '../Assets/greek-salad.jpg';
import bruschetta from '../Assets/bruschetta.jpg';
import fish from '../Assets/grilled-fish.jpg';
import lemon from '../Assets/lemon-dessert.jpg';

const menuItems = [
{
    id: 1,
    name: "Greek Salad",
    description: "A delicious salad with crispy lettuce, peppers, olives, and feta cheese, dressed with our signature lemon-olive oil dressing.",
    price: "$12.99",
    image: greek
},
{
    id: 2,
    name: "Bruschetta",
    description: "Grilled bread topped with diced tomatoes, garlic, basil, and balsamic drizzle.",
    price: "$8.99",
    image: bruschetta
},
{
    id: 3,
    name: "Grilled Fish",
    description: "Freshly caught fish of the day, grilled to perfection with a side of steamed vegetables.",
    price: "$18.99",
    image: fish
},
{
    id: 4,
    name: "Lemon Dessert",
    description: "A zesty lemon dessert with a buttery crust, topped with whipped cream.",
    price: "$6.99",
    image: lemon
}
];

export default menuItems;