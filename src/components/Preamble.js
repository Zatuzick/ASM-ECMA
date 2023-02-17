import { useEffect, useState } from "@/utilities";


const Preamble = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/preamble")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return `
    <div class="grid grid-cols-2 gap-4 m-16 border-4 " id="Preamble">
        
        ${data.map(
        (preamble, index) => `
        <div class="font-bold  my-auto ml-10">
            <h1 class="text-6xl my-10 ">${preamble.title1} <br> <span class="ml-10">${preamble.name}</span></h1>
            <h3 class="text-4xl">${preamble.title2}
                <marquee width="80%" behavior="alternate" scrolldelay="100" direction="left" class="text-5xl">
                ${preamble.job}
                </marquee>
            </h3>
        </div>
            <div class="max-w-screen-sm my-4">
                <img src="${preamble.img}" alt="" width="80%" height="80%" class="rounded-full">
            </div>
            `).join("")}
        
    </div>
  `;
}

export default Preamble