
import { useEffect, useState } from "@/utilities";
import HeaderAdmin from "../HeaderAdmin";
const AboutList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/about")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return `
        ${HeaderAdmin()}
    <div class="mx-5">
        <h1 class="text-5xl text-center my-5 font-bold" >Manage About</h1>
        <table class="table-auto mx-auto">
            <thead>
                <tr class="text-2xl border-2">
                    <th class="w-2/5 border-2">Intro photo</th>
                    <th class="border-2 w-40">School's name</th>
                    <th class="border-2">Profession</th>
                    <th class="border-2 ">Phone</th>
                    <th class="border-2">Email</th>
                    <th class="border-2 p-3">Address</th>
                    <th class="w-2/5 border-2">Content</th>
                    <th class="border-2 "></th>
                </tr>
            </thead>
        <tbody>
            ${data
            .map(
                (about, index) => `
                <tr class="text-xl ">
                    <td class="border-2 "> <img src="${about.img[1]}" alt=""   class="mx-auto p-2 my-3 w-96 h-56"></td>
                    <td class="border-2  font-medium p-5 ">${about.education}</td>
                    <td class="border-2 p-5 font-medium">${about.job}</td>
                    <td class="border-2 p-5 font-medium">${about.phone}</td>
                    <td class="border-2 p-5 font-medium">${about.email}</td>
                    <td class="border-2 p-5 font-medium">${about.address}</td>
                    <td class="border-2 p-5 font-medium">${about.content}</td>
                    
                    <td class="border-2 p-10 ">     
                        <div class="mx-auto">
                            <button class=" btn-remove  bg-lime-600 font-bold p-2 rounded-lg m-10  hover:bg-cyan-700">
                                <a href="/admin/about/${about.id}/edit">Edit</a>
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
     `;

};

export default AboutList;

// JSON: parse va stringify
// localStorage.getItem(key) => vi du: JSON.parse(localStorage.get('a'))
// localStorage.setItem(key, JSON.stringify(value));

// Bước 1: npm i -g json-server
// Bước 2: truy cập vào root folder gõ : json-server --watch db.json
// Nếu lỗi: truy cập https://angular.io/guide/setup-local
// copy dòng: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
