import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeaderPage from "@/components/HeaderPage";
import Preamble from "@/components/Preamble";

const HomePage = () => {
  return `
    ${HeaderPage()}
    ${Preamble()}
    ${About()}
    ${Contact()}
    ${Footer()}
  `;
}

export default HomePage