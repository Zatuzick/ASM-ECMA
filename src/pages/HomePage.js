import About from "@/components/About";
import Category from "@/components/Category";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeaderPage from "@/components/HeaderPage";
import Preamble from "@/components/Preamble";

import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import { useEffect, useState } from "@/utilities";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  const onHandleClick = (id) => {
    fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  };

  return `
  <div class="max-w-6xl py-10 ">
  ${HeaderPage()}
  </div>
  ${Preamble()}
  ${About()}
  <div id="Projects" class="bg-slate-200">
        <div class="my-5 mt-20">
        <h1 class="text-5xl font-bold text-center my-5 pt-5">Projects</h1>
  ${Category({ categories, onClick: onHandleClick })}
  ${Projects({ projects })}
  </div>
    </div>
  ${Skill()}
  
  ${Contact()}
  ${Footer()}
      
  `;
}

export default HomePage