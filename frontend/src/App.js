import logo from "./logo.svg";
import "./App.css";
import "./pro.css";
import Nav from "./Nav";
import Signup from "./Signup";
import Signin from "./Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Privatecomp from "./Privatecomp";
import Addproduct from "./Addproduct"; 
import Product from "./Product";
import Produclist2 from "./Produclist2";
import Updatepro from "./Updatepro";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />

        <Routes>
            <Route element={<Privatecomp />}>
            <Route path="product" element={<Product/>} />

              <Route path="/" element={<Produclist2/>} />
              <Route path="/addproduct" element={<Addproduct/>} />
              <Route path="/updateproduct/:id" element={<Updatepro/>}/>
              <Route path="/profile" element={<h1> this is profile page</h1>}/>
              <Route path="/logout" element={<h1>logout page</h1>} />
              </Route>
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />

        </Routes>

        </BrowserRouter>
        </div>
       <Footer />

    </>
  );
}

export default App;
