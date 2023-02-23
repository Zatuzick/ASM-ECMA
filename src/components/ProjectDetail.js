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
    <h1 class="text-5xl text-right font-bold border-b-2 p-5"> <a href="/" class="  hover:text-red-500">Home </a></h1>
  </div>
              <h3 class="text-5xl text-center font-bold"></h3>
            <div class="  m-10 flex border-b-2">
            
            <img src="${project.img}" alt=""  class="mx-auto my-5 border-2 p-3 rounded-3xl w-[700px] ">
              
    <div>
            <h3 class="text-center text-4xl my-10 font-bold hover:text-red-800">${project.name} </h3>
            <h3 class="text-center text-2xl m-5 font-bold">${project.describe} </h3>
            <div class="my-20">
              
              <div>
                <h3 class="text-2xl font-bold text-center hover:text-red-600 my-5"><a href="${project.linkcode}">SEE HERE <span>👇</span></a> </h3>
              </div>
             </div>
            </div >

            
            </div >


  ${Contact()}
        ${Footer()}
`;
};
export default ProjectDetail;
