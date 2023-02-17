import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeaderPage from "@/components/HeaderPage";
import Preamble from "@/components/Preamble";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

const HomePage = () => {
  return `
  <div class="max-w-6xl py-10">
  ${HeaderPage()}
  </div>
  
  <div class="max-w-7xl mx-auto ">
  
  ${Preamble()}
  ${About()}
  ${Projects()}
  ${Skill()}
  ${Contact()}
  ${Footer()}
  </div>
    
  `;
}

export default HomePage