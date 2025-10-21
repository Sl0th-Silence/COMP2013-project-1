import { useState } from "react";
import ProductContainer from "./productContainer";
import CartContainer from "./cartContainer";
import NavBar from "./navBar";

export default function GroceriesAppContainer({
    products,
}){
    //Product State
    const [productQuantity, setProductQuantity] = useState(
        products.map((prod) => {
            return {
                id: prod.id,
                prodQuantity: 0,
                price: prod.price,
            }
        })
    )

    //Function to set the up and down of each number in productQuantity
    const handleAddProductQuantity = (productID) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if(prod.id === productID){
                return{...prod, prodQuantity: prod.prodQuantity + 1}
            }
            return prod
        });
        setProductQuantity(newProductQuantity)
        return
    }
    
    const handleRemoveProductQuantity = (productID) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if(prod.id === productID && prod.prodQuantity > 0){
                return{...prod, prodQuantity: prod.prodQuantity - 1}
            }
            return prod
        });
        setProductQuantity(newProductQuantity)
        return
    }
    //Now we add to the cart. What fun >___<
    //My brain hurts
    //New state for cart
    const [cart, setCart] = useState([])

    //Function for adding to the cart
    const handleAddToCart = (productToAdd) => {
        const currentProduct = products.find((prod) => prod.id === productToAdd.id)
        const productInCart = cart.find((item) => item.id === productToAdd.id)
        if(productToAdd.prodQuantity === 0){
            alert("Please Add Quantity")
            return;
        }

        if(!productInCart){
            setCart((prevCart) => {
                return [...prevCart, {...currentProduct, prodQuantity: productToAdd.prodQuantity}]
            })
        }
        else {
            alert("Item already in cart");
        }
    }
    //Remove from cart
    const handleRemoveFromCart = (cartItem) => {
        const filteredCart = cart.filter((item) => item.id !== cartItem.id);
        setCart(filteredCart);
    }

    
    //Handle remove all from cart
    //Just go direct inside of the button I guess?
    //If something is in cart, add the buttons below them

    return <div className="GroceriesApp-Container">
        <NavBar cart={cart}/>

        <ProductContainer productQuantity={productQuantity} products={products} 
        handleAddProductQuantity={handleAddProductQuantity}
        handleRemoveProductQuantity={handleRemoveProductQuantity}
        handleAddToCart={handleAddToCart}
        cart={cart}
        />
        <CartContainer productQuantity={productQuantity} products={products} 
        cart={cart} handleRemoveFromCart={handleRemoveFromCart}
        handleAddProductQuantity={handleAddProductQuantity}
        handleRemoveProductQuantity={handleRemoveProductQuantity}
        setCart={setCart}
        />

    </div>
    
}