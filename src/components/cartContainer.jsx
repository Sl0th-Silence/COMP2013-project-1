import CartCard from "./cartCard";

export default function CartContainer({
    cart,
    handleRemoveFromCart,
    handleAddCartQuantity,
    handleRemoveCartQuantity,
    setCart,
}){

    if(cart.length === 0){
        return <div><p>Your cart is empty</p></div>
    }

        //Cart total Had to do some digging for use of the reduce function >__<
  const totalPrice = cart.reduce((sum, item) => {
      const cleanPrice = parseFloat(item.price.replace("$", ""));
      return sum + cleanPrice * (item.prodQuantity || 1);}, 0).toFixed(2);

    return <div className="CartContainer">
        {cart.map((item) => <CartCard key={item.id} {...item}
        handleRemoveFromCart={handleRemoveFromCart}
        handleAddCartQuantity={handleAddCartQuantity}
        handleRemoveCartQuantity={handleRemoveCartQuantity}
        />)}
        <button className="RemoveButton" onClick={() => setCart([])}>Empty Cart</button>
        <button className="BuyButton">Purchase: ${totalPrice}</button>
    </div>
}
