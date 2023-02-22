import { router, useEffect } from "@/utilities";
import axios from "axios";
import HeaderAdmin from "../HeaderAdmin";
const ProjectAdd = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const name = document.getElementById("name");
        const describe = document.getElementById("describe");
        const linkweb = document.getElementById("linkweb");
        const linkcode = document.getElementById("linkcode");
        const img = document.getElementById("img");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(img.files);
            console.log(urls);

            const formData = {
                name: name.value,
                describe: describe.value,
                linkweb: linkweb.value,
                linkcode: linkcode.value,
                img: urls,

            };
            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/project/list"));
        });
    }, []);

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
       
    <div>
    
    <h1 class="text-5xl text-center font-bold my-5">Thêm dự án</h1>
        <form id="form-add" class=" mx-96">
                
        <div>
            <labe class="text-2xl font-bold m-10">Tên dự án:</labe>
            <input type="text" id="name" placeholder="Nhập Tên dự án" class="p-2 mx-6 w-60 rounded-md text-base font-medium" >
        </div>
        <div class="my-3">
            <labe class="text-2xl font-bold m-10">Mô tả dự án:</labe>
            <textarea  placeholder="Nhập mô tả dự án" id="describe"  class="p-2  w-60 rounded-md text-base font-medium h-10"></textarea>
        </div> 
        <div class="my-3">
            <labe class="text-2xl font-bold m-10">Link Web dự án:</labe>
            <input  placeholder="Nhập link Web dự án" id="linkweb"  class="p-2 mx-5  w-60 rounded-md text-base font-medium h-10">
        </div>
        <div class="my-3">
            <labe class="text-2xl font-bold m-10">Link Code dự án:</labe>
            <input  placeholder="Nhập link Code dự án" id="linkcode"  class="p-2 mx-5  w-60 rounded-md text-base font-medium h-10">
        </div>
        <div class="my-5">
            <labe class="text-2xl font-bold m-10">Ảnh dự án:</labe>
            <input type="file" id="img" multiple class="mx-5">
        </div>
        <div class="my-5">
            <button class=" btn-primary p-3 text-xl font-bold rounded-xl hover:bg-lime-600  bg-red-600 ml-32">Thêm</button>
            <button class=" btn-primary p-3 text-xl font-bold rounded-xl hover:bg-lime-600  bg-red-600 ml-52">
                <a href="/admin/project/list" >Danh sách</a>
            </button>
        </div>
        
        </form>
    </div>`;
};

export default ProjectAdd;


