import { router, useEffect, useState } from "@/utilities";
import axios from "axios";
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
        const linkcode = document.getElementById("linkcode")


        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(img.files);
            const formData = {
                name: name.value,
                describe: describe.value,
                linkcode: linkcode.value,
                img: urls,

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

    const uploadFiles = async (files) => {
        if (files) {
            const ClOUD_NAME = "dvnui7zt1";
            const PRESET_NAME = "ASM-ECMA-upload";
            const FOLDER_NAME = "ECMA";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${ClOUD_NAME}/image/upload`;

            const formData = new FormData();

            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);

            for (const file of files) {
                formData.append("file", file);

                const response = await axios.post(api, formData, {
                    Headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                urls.push(response.data.secure_url)
            }
            return urls;
        }
    };

    return `
            ${HeaderAdmin()}
            <div>
    
            <h1 class="text-5xl text-center font-bold my-5">Edit Project</h1>
                <form id="form-edit" class=" mx-96">
                        
                <div>
                    <labe class="text-2xl font-bold m-10">Name:</labe>
                    <input type="text" id="name" value="${project.name}" class="p-2 mx-6 w-60 rounded-md text-base font-medium" >
                </div>
                <div class="my-3">
                    <labe class="text-2xl font-bold m-10">Describe:</labe>
                    <input type="text"  value="${project.describe}" id="describe"  class="p-2  w-60 rounded-md text-base font-medium h-10"
                </div> 
                <div class="my-3">
                    <labe class="text-2xl font-bold m-10">Link Code:</labe>
                    <input type="text"  value="${project.linkcode}" id="linkcode"  class="p-2  w-60 rounded-md text-base font-medium h-10"
                </div>
                <div class="my-5">
                    <labe class="text-2xl font-bold m-10">Project photo:</labe>
                    <input type="file" id="img" multiple class="mx-5">
                    
                    
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