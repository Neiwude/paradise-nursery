import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice.jsx";

const plants = [
  {
    category: "Air Purifying Plants",
    items: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=400&q=80" },
      { id: 2, name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=400&q=80" },
      { id: 3, name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c49de5?auto=format&fit=crop&w=400&q=80" },
      { id: 4, name: "Areca Palm", price: 25, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80" },
      { id: 5, name: "Aloe Vera", price: 10, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80" },
      { id: 6, name: "Rubber Plant", price: 22, image: "https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=400&q=80" },
    ],
  },
  {
    category: "Low Maintenance Plants",
    items: [
      { id: 7, name: "ZZ Plant", price: 20, image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=400&q=80" },
      { id: 8, name: "Pothos", price: 14, image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=400&q=80" },
      { id: 9, name: "Jade Plant", price: 16, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80" },
      { id: 10, name: "Cast Iron Plant", price: 21, image: "https://images.unsplash.com/photo-1597055181449-f8f3da2f5ea6?auto=format&fit=crop&w=400&q=80" },
      { id: 11, name: "Haworthia", price: 9, image: "https://images.unsplash.com/photo-1499188073299-5bd9060e044b?auto=format&fit=crop&w=400&q=80" },
      { id: 12, name: "Philodendron", price: 19, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&q=80" },
    ],
  },
  {
    category: "Decorative Indoor Plants",
    items: [
      { id: 13, name: "Monstera", price: 28, image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=400&q=80" },
      { id: 14, name: "Fiddle Leaf Fig", price: 35, image: "https://images.unsplash.com/photo-1597055181300-e3633a917c0b?auto=format&fit=crop&w=400&q=80" },
      { id: 15, name: "Calathea", price: 24, image: "https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c1?auto=format&fit=crop&w=400&q=80" },
      { id: 16, name: "Bird of Paradise", price: 40, image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=400&q=80" },
      { id: 17, name: "Anthurium", price: 26, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80" },
      { id: 18, name: "Chinese Money Plant", price: 17, image: "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=400&q=80" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const addedIds = cartItems.map((item) => item.id);

  return (
    <main className="page">
      <h1 className="page-title">Shop Houseplants</h1>

      {plants.map((group) => (
        <section className="plant-section" key={group.category}>
          <h2>{group.category}</h2>
          <div className="product-grid">
            {group.items.map((plant) => {
              const isAdded = addedIds.includes(plant.id);

              return (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price}</p>
                  <button
                    className="cart-button"
                    disabled={isAdded}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isAdded ? "Added" : "Add to Cart"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
