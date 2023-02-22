import { useEffect, useState } from "@/utilities";


const Preamble = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/preamble")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return `
    <div></div>
    <div class="grid grid-cols-2 gap-4 py-24  bg-slate-200 rounded-b-[400px] " id="Preamble">
        
        ${data.map(
        (preamble, index) => `

        <div class=" mb-32 mx-32">
                <img src="${preamble.img[1]}" alt="" width="70%" height="70%" class="rounded-3xl">
            </div>
        <div class="font-bold  my-auto ">
            <h1 class="text-6xl my-10 ">${preamble.title1} <br> <span class="ml-10">${preamble.name}</span></h1>
            <h3 class="text-4xl">${preamble.title2}
                <marquee width="80%" behavior="alternate" scrolldelay="100" direction="left" class="text-5xl">
                ${preamble.job}
                </marquee>
            </h3>
        </div>
            
            `).join("")}
        
    </div>
  `;
}

export default Preamble