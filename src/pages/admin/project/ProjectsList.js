
import { useEffect, useState } from "@/utilities";
import HeaderAdmin from "../HeaderAdmin";
const ProjectsList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []); // điều kiện để gọi lại useEffect
    useEffect(() => {
        // 3
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                // Xóa local
                const newProjects = data.filter((project) => project.id != id);
                setData(newProjects);

                // xóa server

                fetch(`http://localhost:3000/projects/${id}`, {
                    method: "DELETE",
                }).then(() => alert("Xóa thành công"));
            });
        }
    });
    // 2
    return `
        ${HeaderAdmin()}
    <div>
        <h1 class="text-5xl text-center my-5 font-bold" >Quản lý dự án</h1>
        <table class="table-auto mx-auto">
            <thead>
                <tr class="text-2xl border-2">
                    <th class="border-2">Id</th>
                    <th class="w-2/5 border-2">Ảnh dự án</th>
                    <th class="border-2 w-40">Tên dự án</th>
                    <th class="border-2 ">Mô tả dự án</th>
                    
                    <th class="border-2"></th>
                </tr>
            </thead>
        <tbody>
            ${data
            .map(
                (project, index) => `
                <tr class="text-xl ">
                    <td class="border-2 text-xl p-5 w-16 font-medium ">${index + 1}</td>
                    <td class="border-2 "> <img src="${project.img}" alt=""   class="mx-auto my-3 w-96 h-56"></td>
                    <td class="border-2 p-5 font-medium">${project.name}</td>
                    <td class="border-2  font-medium p-5 w-96">${project.describe}</td>
                    
                    <td class="border-2 p-10 ">
                        <div class="mx-auto">
                            <button data-id="${project.id
                    }" class=" btn-remove bg-red-500 p-2 font-bold mx-auto rounded-lg hover:bg-cyan-700">Remove</button>
                        </div>
                        
                        <div class="mx-auto">
                            <button class=" btn-remove  bg-lime-600 font-bold p-2 rounded-lg m-10  hover:bg-cyan-700">
                                <a href="/admin/project/${project.id}/edit">Sửa</a>
                            </button>
                        </div>
                    </td>
                </tr>
            `
            )
            .join("")}
            
        </tbody>
               
    </div>
    </table>
    
    <button class="m-8 bg-red-700 p-3 rounded-lg hover:bg-green-700" > <a href="/admin/project/add"  class="text-2xl  font-bold">Thêm dự án </a></button>
         
     `;

};

export default ProjectsList;

// JSON: parse va stringify
// localStorage.getItem(key) => vi du: JSON.parse(localStorage.get('a'))
// localStorage.setItem(key, JSON.stringify(value));

// Bước 1: npm i -g json-server
// Bước 2: truy cập vào root folder gõ : json-server --watch db.json
// Nếu lỗi: truy cập https://angular.io/guide/setup-local
// copy dòng: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
