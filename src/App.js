import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

function App() {
  return (
    <>
      {/* <!-- Navigation--> */}
      <Navbar />
      {/* <!-- Header--> */}
      <Header />
      {/* <!-- Content section 1--> */}
      <SectionOne />
      {/* <!-- Content section 2--> */}
      <SectionTwo />
      {/* <!-- Content section 3--> */}
      <SectionThree />
      {/* <!-- Footer--> */}
      <Footer />
    </>
  );
}

export default App;
