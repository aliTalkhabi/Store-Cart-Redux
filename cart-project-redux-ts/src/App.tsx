import { Provider } from "react-redux"
import { store } from "./store/store"
import { productData } from "./data/item"
import ProductList from "./components/ProductList"
import Product from "./components/Product"
import NavBar from "./components/NavBar"




function App() {

  return (
    <Provider store={store}>
      <NavBar />
      <ProductList>
        {
          productData.map((item) => (
            <div key={item.id}>
              <Product {...item} />
            </div>
          ))
        }
      </ProductList>
    </Provider>
  )
}

export default App
