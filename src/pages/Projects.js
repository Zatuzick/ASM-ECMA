import { useEffect, useState } from "@/utilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeaderPage from "@/components/HeaderPage";


const Projects = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return `
    ${HeaderPage()}


    <div class="my-5">
    <h1 class="text-5xl font-bold text-center">Projects</h1>
    <div class="grid grid-cols-3 gap-5 mx-28 my-10">
    ${data.map(
    (project, index) => `
      <div class="border-2">
          <img src="src/img/ad.jpg" alt="" width="70%" class="mx-auto my-5 rounded-3xl">
          <a href="">
              <h3 class="text-center text-2xl font-bold hover:text-red-800">${project.name} </h3>
              <p class="text-center mb-5">${project.describe}</p>
          </a>
      </div>`).join("")}

     
  </div>
    
</div>

    ${Contact()}
    ${Footer()}
  `;
}

export default Projects