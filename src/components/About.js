import { useEffect, useState } from "@/utilities";
const About = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/about")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return `
    <div id="About" class="">
    <div>
    <h1 class="text-center text-5xl font-bold  my-10 pt-20">About</h1>
    <div class="mx-40 border-4 ">
        
        
        <div class="flex-none  md:flex mb-10 ">

        ${data.map(
        (about, index) => `
        
            <div class="m-7">
                <img src="${about.img[1]}" alt="" class="border-4 mx-auto rounded-3xl  max-w-sm">
                <img src="${about.img[0]}" alt="" class="border-2  rounded-tl-3xl -mt-24 ml-52 rounded-br-3xl w-[154px] h-[229px]">
            </div>
            <div class=" my-auto ml-20">
            <h3 class="text-center text-3xl font-bold  mt-5">Introduce</h3>
                <p class="font-medium m-2 text-xl border-b-4">${about.content}</p>

                <div class="mt-5">
                    <h4 class="font-bold text-2xl">Basic Information</h4>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <h4 class="text-xl font-medium mx-2 my-2">Education: <span class="p-2"> ${about.education}</span></h4>
                            <h4 class="text-xl font-medium mx-3 my-2">Email: <span
                                    class="p-3">${about.email}</span></h4>
                        </div>
                        <div>
                            <h4 class="text-xl font-medium mx-3 my-2">Phone: <span
                                    class="p-3">${about.phone}</span></h4>
                            <h4 class="text-xl font-medium mx-3 my-2">Profession: <span class="p-3">${about.job}</span></h4>
                        </div>
                    </div>
                    <h4 class="text-center font-medium text-xl mb-3">Address: <span class="p-3">${about.address}</span></h4>
                </div>
            
            
            `).join("")}
        
        </div>
    </div>
</div>
    </div>
    `;
}

export default About