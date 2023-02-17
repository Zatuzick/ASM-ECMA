import { router, useEffect } from "@/utilities";
import axios from "axios";
// import { projects } from "../../data";
const SkillAdd = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const name = document.getElementById("name");
        const img = document.getElementById("img");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(img.files);

            const formData = {
                name: name.value,
                img: urls,

            };
            fetch("http://localhost:3000/skill", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/skill/list"));
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
    return `<div>
    
    <h1 class="text-5xl text-center font-bold my-5">Thêm Skill</h1>
        <form id="form-add" class=" mx-96">
                
        <div>
            <labe class="text-2xl font-bold m-10">Tên Skill:</labe>
            <input type="text" id="name" placeholder="Nhập Tên Skill" class="p-2 mx-6 w-60 rounded-md text-base font-medium" >
        </div>
        <div class="my-5">
            <labe class="text-2xl font-bold m-10">Ảnh Skill:</labe>
            <input type="file" id="img" multiple class="mx-5">
        </div>
        <div class="my-5">
            <button class=" btn-primary p-3 text-xl font-bold rounded-xl hover:bg-lime-600  bg-red-600 ml-32">Thêm</button>
            <button class=" btn-primary p-3 text-xl font-bold rounded-xl hover:bg-lime-600  bg-red-600 ml-52">
                <a href="/admin/skill/list" >Danh sách</a>
            </button>
        </div>
        
        </form>
    </div>`;
};

export default SkillAdd;


