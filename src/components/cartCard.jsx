import QuantityCounter from "./quantityCounter"

export default function CartCard({
    productName,
    prodQuantity,
    price,
    handleRemoveFromCart,
    handleAddProductQuantity,
    handleRemoveProductQuantity,
    id,
    productQuantity
}){

    const idFound = productQuantity.find((prod) => prod.id === id)
    const individualQuantity = idFound ? idFound.prodQuantity : 0
    const cleanPrice = price.replace("$", "")

    return <div className="CartCard">
        <h2>{productName}</h2>
        <p>Total Price: ${(individualQuantity * cleanPrice).toFixed(2)}</p>
        <button className="RemoveButton" onClick={() => handleRemoveFromCart({productName, prodQuantity, id})}>Remove From Cart</button>
        <QuantityCounter handleAddProductQuantity={handleAddProductQuantity}
        handleRemoveProductQuantity={handleRemoveProductQuantity}
        individualQuantity={individualQuantity}
        id={id}
        />
    </div>
}