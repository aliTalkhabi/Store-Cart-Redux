import { addToCart, removeFromCart, type CartItem } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks"

function CartItems() {
    const cartItems = useCartSelector((state) => state.cart.items);
    const dispatch = useCartDispatch();
    const totalPrice = cartItems.reduce(
        (value, item) => value + item.price * item.quantity, 0
    )
    function handleAddToCart(item: CartItem) {
        dispatch(addToCart(item))
    }
    function handleRemoveFromCart(id: string) {
        dispatch(removeFromCart(id))
    }
    return (
        <div>
            {cartItems.length === 0 && <p>محصولی در سبد خرید وجود ندارد</p>}
            <ul className="cart-items">
                {cartItems.map((item) => {
                    return (
                        <li key={item.id}>
                            <div>
                                <span>{item.title}</span>
                            </div>
                            <div className="cart-item-actions">
                                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleAddToCart(item)}>+</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {cartItems.length > 0 && <p className="cart-total-price">
                مجموع :<strong>{totalPrice}</strong> تومان
            </p>}
        </div>
    )
}
export default CartItems