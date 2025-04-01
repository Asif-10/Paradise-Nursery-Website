import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'

function App() {

  return (
    <>
       <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
    </>
  )
}

export default App
