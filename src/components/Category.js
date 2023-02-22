import { useEffect } from "@/utilities";

const Category = ({ categories, onClick }) => {
    useEffect(() => {
        const btns = document.querySelectorAll(".btn");
        for (const btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                onClick(id);
            });
        }
    });

    return `<div class="text-center font-medium text-2xl">
    
        ${categories
            .map(
                (category) => `
                    <button class="btn mx-10 bg-slate-400 p-3 rounded-2xl hover:bg-slate-600 hover:text-white" data-id="${category.id}">${category.name}</button>`
            )
            .join("")
        }
    </div > `;
};

export default Category;