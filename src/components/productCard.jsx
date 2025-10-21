import QuantityCounter from "./quantityCounter"

export default function ProductCard({
    //Then we take each part from the {...prod} and display
    productName,
    brand,
    image,
    price,
    handleAddProductQuantity,
    handleRemoveProductQuantity,
    handleAddToCart,
    id,
    productQuantity,
    cart
}){

    //Now we need to get the individual product quantity.
    //Maybe find using the id?
    
    // IMPORTANT NOTE //


    //I researched how to do this with a mix of asking AI and Stack overflow questions. The main suggestion was
    //using Optional Chaining but I opted to use a longer way as I know you haven't taught that yet


    const idFound = productQuantity.find((prod) => prod.id === id)
    const individualQuantity = idFound ? idFound.prodQuantity : 0

    //This will return the detailed card for each
    //Still need add remove buttons
    return <div className="ProductCard">
            <p>{productName}</p>
            <p>{brand}</p>
            <img src={image} alt="" />
            <p>{price}</p>
            <QuantityCounter handleAddProductQuantity={handleAddProductQuantity} 
            handleRemoveProductQuantity={handleRemoveProductQuantity}
            id={id} individualQuantity={individualQuantity}/>
            <button onClick={() => handleAddToCart({id, prodQuantity: individualQuantity})}>Add To Cart</button>
        </div>
}