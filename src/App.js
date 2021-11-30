
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
function App() {
 
return (
    < BrowserRouter>
       <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">DemoEcommerce</a>
                </div>
                <div>
                    <a href="/cart">cart</a>
                    <a href="/signin">Sign In</a>
                </div>

            </header>
            
            
            <main>
               
            <Routes>
              <Route path="/cart/:id" element={< CartScreen/>} ></Route>
              <Route path="/product/:id" element={<ProductScreen/>} ></Route>
              <Route path="/" element={<HomeScreen/>} exact></Route>  
              
           
            
            </Routes>

            </main>
            <footer className="row center"> All right reserved</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
