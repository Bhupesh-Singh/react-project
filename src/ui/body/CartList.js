import { useSelector, useDispatch } from "react-redux"
import { removeItemFromCart } from "../../redux/Slices/cartListSlice";
import CenterScreenMessage from "./CenterScreenMessage";
import ItemCard from "./ItemCard";

export default function CartList({showToastMessage}) {

    const cartList = useSelector(state => state.cartList);
    const dispatch = useDispatch();

    const totalCost = cartList.reduce(calculateTotalPrice, 0);

    function calculateTotalPrice(previousValue, currentItem) {
        return previousValue + currentItem.price;
    } 

    function handleRemoveItemFromCart(itemId, itemTitle) {
        dispatch(removeItemFromCart({id: itemId}));
        setTimeout(() => {
            showToastMessage(`${itemTitle} removed from cart`);
        }, 0);
    }

    return (
        <>
            <div className="cart-list">
                {cartList.length === 0 ? (
                    <CenterScreenMessage>
                        Cart is empty. Please add items to cart
                    </CenterScreenMessage>
                ) :
                (<>
                    <div className="cart-total-price">
                        Cart Total : <span style={{color: '#247d0b', fontWeight: 'bold'}}>${totalCost}</span>
                    </div>
                    <div className="items-container">
                        {cartList.map(item => {
                            return (
                                <ItemCard key={item.id} item={item}>
                                    <button onClick={() => handleRemoveItemFromCart(item.id, item.title)}>Remove from Cart</button>
                                </ItemCard>
                            )
                        })}
                    </div>
                </>  
                )}
            </div>
        </>
    );
}