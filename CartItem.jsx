import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "./CartSlice.jsx";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <main className="page">
      <h1 className="page-title">Shopping Cart</h1>

      <section className="cart-summary">
        <h2>Total Plants: {totalItems}</h2>
        <h2>Total Cost: ${totalCost}</h2>
      </section>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link className="primary-button" to="/products">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="cart-actions">
            <Link className="secondary-button" to="/products">
              Continue Shopping
            </Link>
            <button className="primary-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default CartItem;
