import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/Slices/cartListSlice";
import { deleteItem } from "../../redux/Slices/itemListSlice";
import {STATUSES} from "../../redux/Slices/itemListSlice"
import ItemCard from "./ItemCard";
import CenterScreenMessage from "./CenterScreenMessage";

function ItemList({itemList, showToastMessage}) {
    
    const cartList = useSelector(state => state.cartList);
    const dataStatus = useSelector(state => state.itemList.status);
    const dispatch = useDispatch();

    function handleAddToCart(item) {
        const itemAlreadyInCart = cartList.find(cartItem => cartItem.id === item.id);
        if(!itemAlreadyInCart) {
            dispatch(addItemToCart(item));
            showToastMessage(`${item.title} added to cart`);
        } else {
            showToastMessage(`${itemAlreadyInCart.title} already in cart`);
        }
    }

    return (
        <>
            <section>
                <div className="product-heading">Products are fetched from <a href="https://dummyjson.com" rel="noreferrer" target="_blank">dummyjson.com</a></div>
                
                {dataStatus === STATUSES.LOADING && (
                    <CenterScreenMessage>
                        <div className="spinner"></div>
                        <div>Loading data...</div>
                    </CenterScreenMessage>
                )}

                {dataStatus === STATUSES.ERROR && (
                    <CenterScreenMessage>
                        <div>
                            Error in loading data :(
                        </div>
                    </CenterScreenMessage>
                )}

                {dataStatus === STATUSES.SUCCESS && (
                    <div className="items-container">{itemList.map(item => {
                        return (
                            <ItemCard key={item.id} item={item}>
                                <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
                                <button onClick={() => dispatch(deleteItem({id: item.id}))}>Delete From List</button>
                            </ItemCard>
                        );
                    })}
                    </div>
                )}
                
            </section>
        </> 
    );
}

export default memo(ItemList);
