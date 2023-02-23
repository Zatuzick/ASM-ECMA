import { router, useEffect } from "@/utilities";
const CategoriesAdd = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const name = document.getElementById("name");


        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const formData = {
                name: name.value,

            };
            fetch("http://localhost:3000/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/category/list"));
        });
    }, []);
    return `<div>
    
    <h1 class="text-5xl text-center font-bold my-5">Add Category</h1>
        <form id="form-add" class=" mx-96">
                
        <div>
            <labe class="text-2xl font-bold m-10">Name:</labe>
            <input type="text" id="name" placeholder="Name..." class="p-2 mx-6 w-60 rounded-md text-base font-medium" >
        </div>
        <div class="my-5">
            <button class=" btn-primary p-3 text-xl font-bold rounded-xl hover:bg-lime-600  bg-red-600 ml-32">Add</button>
            <button class=" btn-primary p-3 text-xl font-bold rounded-xl hover:bg-lime-600  bg-red-600 ml-52">
                <a href="/admin/categorys/list" >List</a>
            </button>
        </div>
        
        </form>
    </div>`;
};

export default CategoriesAdd;


