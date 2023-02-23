import { router, useEffect, useState } from "@/utilities";
import axios from "axios";
import HeaderAdmin from "../HeaderAdmin";
const AboutEdit = ({ id }) => {
    const [about, setAbout] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/about/" + id)
            .then((response) => response.json())
            .then((about) => setAbout(about));
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const content = document.querySelector("#content");
        const education = document.getElementById("education");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const job = document.getElementById("job");
        const address = document.getElementById("address");
        const img = document.getElementById("img");


        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(img.files);
            const formData = {
                content: content.value,
                education: education.value,
                phone: phone.value,
                email: email.value,
                job: job.value,
                address: address.value,
                img: urls,

            };
            fetch(`http://localhost:3000/about/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then(() => router.navigate("/admin/about/list"))
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

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/about")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return `
            ${HeaderAdmin()}
            <div>
    
            <h1 class="text-5xl text-center font-bold my-5">Edit About</h1>
                <form id="form-edit" class=" mx-96">
                        
                <div class="my-5 border-2 p-1">
                    <labe class="text-2xl font-bold m-10">School's name:</labe>
                    <input type="text" id="education" value="${about.education}" class="p-2 mx-20 w-80 rounded-md text-base font-medium" >
                </div>
                <div class="my-5 border-2">
                    <labe class="text-2xl font-bold m-10">Profession:</labe>
                    <input type="text" id="job" value="${about.job}" class="p-2 mx-20 w-80  rounded-md text-base font-medium" >
                </div>
                <div class="my-5 border-2">
                    <labe class="text-2xl font-bold m-10">Phone:</labe>
                    <input type="text" id="phone" value="${about.phone}" class="p-2 mx-20 w-80 rounded-md text-base font-medium" >
                </div>
                <div class="my-5 border-2">
                    <labe class="text-2xl font-bold m-10">Email:</labe>
                    <input type="text" id="email" value="${about.email}" class="p-2 mx-40 w-80 rounded-md text-base font-medium" >
                </div>
                <div class="my-5 border-2">
                    <labe class="text-2xl font-bold m-10">Address:</labe>
                    <input type="text" id="address" value="${about.address}" class="p-2 mx-36 w-80 rounded-md text-base font-medium" >
                </div>
                <div class="my-5 border-2">
                    <labe class="text-2xl font-bold m-10">Content:</labe>
                    <input type="text" value="${about.content}" id="content"  class="p-2  w-80 rounded-md text-base font-medium ">
                </div> 
                <div class="my-5 border-2">
                    <labe class="text-2xl font-bold m-10">Intro photo:</labe>
                    ${data.map(
        (about, index) => ` <div class="flex p-3">
                            <img src="${about.img[0]}" class="mx-auto w-[260px] ">
                            <img src="${about.img[1]}" class="mx-auto  w-[260px]">
                            <img src="${about.img[2]}" class="mx-auto  w-[260px]">
                    </div>`).join("")}
                                
                    <input type="file" id="img" multiple class="mx-10 my-3">
                </div>
                <div class="my-5">
                    <button class=" btn-primary p-3 text-xl font-bold rounded-xl hover:bg-lime-600  bg-red-600 ml-32">Sửa</button>
                    <button class=" btn-primary p-3 text-xl font-bold rounded-xl hover:bg-lime-600  bg-red-600 ml-52">
                        <a href="/admin/about/list" >Danh sách</a>
                    </button>
                </div>
                
                </form>
            </div> `;
};

export default AboutEdit;