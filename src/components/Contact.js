import { useEffect, useState } from "@/utilities";

const Contact = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/contact")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return `<div id="Contact" class="bg-slate-200">
    <div class=" py-10">
        <h1 class="text-center text-5xl font-bold">Contact</h1>
        <h3 class="text-center text-3xl font-bold my-5">Detailed contact information</h3>
        <div class="grid  justify-items-center">
        <div class="flex    ">
        ${data.map(
        (contact, index) => `
        
                <a href="${contact.link}">
                    <img src="${contact.img}" alt="" width="50px" class="mx-5"></a>
            `).join("")}
            </div>
        </div >
    </div >
    </div >
    `;
}

export default Contact