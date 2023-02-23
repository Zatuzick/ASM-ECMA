
import { useEffect, useState } from "@/utilities";
import HeaderAdmin from "../HeaderAdmin";
const CategoriesList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    useEffect(() => {

        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                const newProjects = data.filter((project) => project.id != id);
                setData(newProjects);
                fetch(`http://localhost:3000/categories/${id}`, {
                    method: "DELETE",
                }).then(() => alert("Xóa thành công"));
            });
        }
    });
    return `
        ${HeaderAdmin()}
    <div class="mx-96">
        <h1 class="text-5xl text-center my-5 font-bold" >Manage Categories</h1>
        <table class="table table-bordered">
            <thead>
                <tr class="text-2xl border-2">
                    <th class="border-2">Id</th>
                
                    <th class="border-2 w-40">Name</th>
                    
                    <th class="border-2"></th>
                </tr>
            </thead>
        <tbody>
        ${data
            .map(
                (category, index) => `
                <tr class="text-xl ">
                    <td class="border-2 text-xl p-5 w-16 font-medium ">${index + 1}</td>
                    
                    <td class="border-2 p-5 font-medium">${category.name}</td>
                    <td class="border-2 p-10 ">
                        <button data-id="${category.id
                    }" class=" btn-remove bg-red-500 p-2 font-bold mx-32 rounded-lg hover:bg-cyan-700">Remove</button>
                    </td>
                </tr>
            `
            )
            .join("")}
            
        </tbody>
               
    </div>
    </table>
    
    <button class="my-8 bg-red-700 p-3 rounded-lg hover:bg-green-700" > <a href="/admin/category/add"  class="text-2xl  font-bold">Add  </a></button>
         
     `;

};

export default CategoriesList;

