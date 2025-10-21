import QuantityCounter from "./quantityCounter"

export default function CartCard({
    productName,
    prodQuantity,
    price,
    handleRemoveFromCart,
    handleAddCartQuantity,
    handleRemoveCartQuantity,
    id,
}){
    const cleanPrice = price.replace("$", "")

    return <div className="CartCard">
        <h2>{productName}</h2>
        <p>Total Price: ${(prodQuantity * cleanPrice).toFixed(2)}</p>
        <button className="RemoveButton" onClick={() => handleRemoveFromCart({productName, prodQuantity, id})}>Remove From Cart</button>
        <QuantityCounter handleAddProductQuantity={handleAddCartQuantity}
        handleRemoveProductQuantity={handleRemoveCartQuantity}
        id={id}
        individualQuantity={prodQuantity}
        />
    </div>
}