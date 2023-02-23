import { useEffect, useState } from "@/utilities";

const Projects = ({ projects }) => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return `
    
        <div id="all">
        <div class="grid grid-cols-3 gap-5 mx-28 pb-5 my-10">
        ${projects.map(
        (project, index) => `
        <div class="border-4 hover:border-red-600">
            
            <a href="/project/${project.id}"}>
                <img src="${project.img[0]}" alt=""  class="mx-auto my-5 p-3 rounded-3xl w-[416px] h-[207px]">
                <h3 class="text-center text-2xl font-bold hover:text-red-800">${project.name} </h3>
                <p class="text-center text-xl font-medium mb-5">${project.describe}</p>
            </a>
            
        </div>`).join("")}


        

  </div>
  </div>

    
  `;
}

export default Projects



// json-server --watch db.json
// <a data-navigo ></a>