import "./App.css";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Jumbotrons from "./components/Jumbotrons/Jumbotrons";
import Navbar from "./components/Navbar/Navbar";
import Quote from "./components/Quote/Quote";
import Subscription from "./components/Subscription/Subscription";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Jumbotrons />
      <Quote />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
