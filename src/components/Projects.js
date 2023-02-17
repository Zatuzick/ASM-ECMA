import { useEffect, useState } from "@/utilities";
const Projects = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return `
    <div id="Projects">
        <div class="my-5 border-2">
        <h1 class="text-5xl font-bold text-center my-5">Projects</h1>
        <div class="grid grid-cols-3 gap-5 mx-28 my-10">
        ${data.map(
        (project, index) => `
        <div class="border-4 hover:border-red-600">
            
            <a href="/project/${project.id}"}>
                <img src="${project.img}" alt=""  class="mx-auto my-5 p-3 rounded-3xl w-[416px] h-[207px]">
                <h3 class="text-center text-2xl font-bold hover:text-red-800">${project.name} </h3>
                <p class="text-center text-xl font-medium mb-5">${project.describe}</p>
            </a>
        </div>`).join("")}
  </div>
</div>
    </div>
    
  `;
}

export default Projects



// json-server --watch db.json
// <a data-navigo ></a>