import menuItems from '../Data/Menu';
import '../App.css';

function MenuPage() {
    return (
        <div className="menu">
            <h1>Our Menu</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuPage;
