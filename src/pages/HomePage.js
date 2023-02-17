import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeaderPage from "@/components/HeaderPage";
import Preamble from "@/components/Preamble";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

const HomePage = () => {
  return `
    ${HeaderPage()}
    ${Preamble()}
    ${About()}
    ${Projects()}
    ${Skill()}
    ${Contact()}
    ${Footer()}
  `;
}

export default HomePage