import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { useEffect, useState } from "@/utilities";



const ProjectDetail = ({ id }) => {


  const [project, setProject] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/projects/" + id)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);


  return `
  <div class="my-5">
    <h1 class="text-6xl text-center font-bold border-b-2 hover:text-red-500 p-5"> <a href="/">Home </a></h1>
  </div>
  <h3 class="text-center text-4xl font-bold hover:text-red-800">${project.name} </h3>
            <div class="  my-10 flex">
            <img src="${project.img}" alt=""  class="w-[900px]  my-5 rounded-3xl">
            
            <h3 class="text-center text-2xl m-5 font-bold">${project.describe} </h3>
            </div>
            <div class="border-b-2">
            <h3 class="text-2xl font-bold text-center hover:text-red-600 my-10"><a href="${project.link}">Xem WEB tại đây </a> </h3> 
            </div>
                 
        ${Contact()}
        ${Footer()}
        `;
};
export default ProjectDetail;
