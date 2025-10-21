import "./App.css";
import GroceriesAppContainer from "./components/groceriesAppContainer";
import products from "./data/products"

function App() {
  return <>
    <GroceriesAppContainer products={products}/>
  </>;
}

export default App;
