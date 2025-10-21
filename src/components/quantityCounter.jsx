export default function QuantityCounter({
    handleAddProductQuantity,
    handleRemoveProductQuantity,
    individualQuantity,
    id,
}){
    return <div className="ProductQuantityDiv">
        <button className="QuantityBtn" onClick={() => handleRemoveProductQuantity(id)}>-</button>
        {individualQuantity}
        <button className="QuantityBtn" onClick={() => handleAddProductQuantity(id)}>+</button>
    </div>
}