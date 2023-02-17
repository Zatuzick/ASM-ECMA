import { router, useEffect, useState } from "@/utilities";
import HeaderAdmin from "../HeaderAdmin";
const ProjectEdit = ({ id }) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/projects/" + id)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const name = document.querySelector("#name");
        const describe = document.getElementById("describe");
        const img = document.querySelector("#img");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                name: name.value,
                describe: describe.value,
                img: img.file,
            };
            fetch(`http://localhost:3000/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then(() => router.navigate("/admin/project/list"))
                .catch((error) => console.log(error));
        });
    });
    return `
            ${HeaderAdmin()}
            <div>
    
            <h1 class="text-5xl text-center font-bold my-5">Sửa dự án</h1>
                <form id="form-edit" class=" mx-96">
                        
                <div>
                    <labe class="text-2xl font-bold m-10">Tên dự án:</labe>
                    <input type="text" id="name" value="${project.name}" class="p-2 mx-6 w-60 rounded-md text-base font-medium" >
                </div>
                <div class="my-3">
                    <labe class="text-2xl font-bold m-10">Mô tả dự án:</labe>
                    <input type="text"  value="${project.describe}" id="describe"  class="p-2  w-60 rounded-md text-base font-medium h-10"
                </div> 
                <div class="my-5">
                    <labe class="text-2xl font-bold ">Ảnh dự án:</labe>
                    <img src="${project.img}" alt=""   class="mx-auto my-3 w-96 h-56">
                    
                </div>
                <div class="my-5">
                    <button class=" btn-primary p-3 text-xl font-bold rounded-xl hover:bg-lime-600  bg-red-600 ml-32">Sửa</button>
                    <button class=" btn-primary p-3 text-xl font-bold rounded-xl hover:bg-lime-600  bg-red-600 ml-52">
                        <a href="/admin/project/list" >Danh sách</a>
                    </button>
                </div>
                
                </form>
            </div> `;
};

export default ProjectEdit;