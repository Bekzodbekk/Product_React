import Cardbox from "../card_box/Cardbox";
import ClientSay from "../clientSay/ClientSay";
import Contents from "../contents/Contents";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";
import Price from "../priceTable/Price";
import ProductInfo from "../product_info/ProductInfo";
import "./app.scss"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <ProductInfo />
      <Contents />
      <Price />
      <ClientSay />
      <Cardbox />
      <Footer />
    </div>
  );
}

export default App;
