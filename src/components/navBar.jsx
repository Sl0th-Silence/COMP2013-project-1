export default function NavBar({
    cart,
}){
    return <div className="NavBar">
        <h3 className="NavUser">Welcome user</h3>
        <h2 className="NavTitle">Grocery App!</h2>
        <img className="NavCart" src={(cart.length !== 0) ? "src/assets/cart-full.png" : "src/assets/cart-empty.png"} alt="" />
    </div>
}