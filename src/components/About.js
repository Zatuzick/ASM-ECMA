import { useEffect, useState } from "@/utilities";
const About = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/about")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return `
    <div>
    <h1 class="text-center text-5xl font-bold my-5">About</h1>
    <div class="mx-40 border-4 ">
        <h3 class="text-center text-3xl font-bold mt-5">Giới thiệu</h3>
        <div class="flex border-b-2 ">

        ${data.map(
        (about, index) => `
            <div class="m-7">
                <img src="src/img/ad.jpg" alt="" class="border-2 rounded-tl-3xl rounded-br-3xl max-w-md">
            </div>
            <div class="mt-5">
                <p class="font-medium border-b-2 m-2 text-xl">${about.content}</p>

                <div class="mt-5">
                    <h4 class="font-bold text-2xl">Thông tin cơ bản</h4>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <h4 class="text-xl font-medium mx-3 my-2">Học vấn: <span class="p-3"> ${about.education}</span></h4>
                            <h4 class="text-xl font-medium mx-3 my-2">Email: <span
                                    class="p-3">${about.email}</span></h4>
                        </div>
                        <div>
                            <h4 class="text-xl font-medium mx-3 my-2">Điện thoại: <span
                                    class="p-3">${about.phone}</span></h4>
                            <h4 class="text-xl font-medium mx-3 my-2">Nghề nghiệp: <span class="p-3">${about.job}</span></h4>
                        </div>
                    </div>
                    <h4 class="text-center font-medium text-xl mb-3">Địa chỉ: <span class="p-3">${about.address}</span></h4>
                </div>
            </div>
            `).join("")}
        </div>
    </div>
</div>
    `;
}

export default About