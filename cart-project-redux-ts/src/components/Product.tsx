import { addToCart } from "../store/cart-slice";
import { useCartDispatch } from "../store/hooks";

type ProductProps = {
    id: string,
    title: string,
    price: number,
    image: string
}

function Product({ id, title, price, image }: ProductProps) {
    const dispatch = useCartDispatch();
    function handleAddToCart() {
        dispatch(addToCart({ id, title, price }))
    }
    return (
        <div className="product">
            <img src={image} />
            <div>
                <h3>{title}</h3>
                <p className="product-price">{price} تومان</p>
            </div>
            <p className="product-actions">
                <button onClick={handleAddToCart}>افزودن به سبد خرید </button>
            </p>
        </div>
    )
}
export default Product