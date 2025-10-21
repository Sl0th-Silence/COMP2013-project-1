import ProductCard from "./productCard"

export default function ProductContainer({
    products,
    handleAddProductQuantity,
    handleRemoveProductQuantity,
    handleAddToCart,
    productQuantity,
}){
    return <div className="ProductsContainer">
        {
            products.map((prod) => {
            return <ProductCard
                key={prod.id}
                {...prod} //This sends all information to prod card deconstructed?
                handleAddProductQuantity={handleAddProductQuantity}
                handleRemoveProductQuantity={handleRemoveProductQuantity}
                handleAddToCart={handleAddToCart}
                productQuantity={productQuantity}
                />
                
            })
            }
    </div>
}