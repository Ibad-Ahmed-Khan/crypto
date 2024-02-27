import { Box, Text, Heading } from "@chakra-ui/react";
import Services from "./pages/Services";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Team from "./pages/Team";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Customers from "./pages/Customers";
import SliderComponent from "./components/SliderComponent";

function App() {
  return (
    <Box>
      <Header />
      <Home />
      <Services />
      <About />
      <WhyUs />
      <Team />
      <Customers />
      {/* <SliderComponent /> */}
      <Footer />
    </Box>
  );
}

export default App;
