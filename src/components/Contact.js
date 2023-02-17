import { useEffect, useState } from "@/utilities";

const Contact = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/contact")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return `<div id="Contact">
    <div class="my-20">
        <h1 class="text-center text-5xl font-bold">Contact</h1>
        <h3 class="text-center text-3xl font-bold my-5">Thông tin liên hệ chi tiết</h3>
        <div class="grid  justify-items-center">
        ${data.map(
        (contact, index) => `
        <div class="flex">
                <a href="https://www.facebook.com/profile.php?id=100010398076739">
                    <img src="${contact.img[0]}" alt="" width="50px"></a>
                <a href="https://www.google.com/intl/vi/gmail/about/" class="mx-5">
                    <img src="${contact.img[1]}" alt="" width="50px">
                </a>
                <a href="/zalo">
                    <img src="${contact.img[2]}" alt="" width="50px">
                </a>
        </div>
            `).join("")}
        </div >
    </div >
    </div >
    `;
}

export default Contact