import { useEffect, useState } from "@/utilities";


const HeaderPage = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/menus")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const [img, setImg] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/imgs")
      .then((response) => response.json())
      .then((img) => setImg(img));
  }, []);

  return `

  <div class=" mx-auto  top-0  backdrop-blur-sm  bg-white/30 fixed">
  <div class="grid grid-cols-1 md:grid-cols-2  gap-4    ">
  
  <div class="">
  ${img.map(
    (img, index) => `
      <a href="/"><img src="${img.img[1]}" alt="" class="rounded-full ml-6  md:m-2 w-20 h-20 m-20"></a>
      `).join("")}
  </div>
  
  <div class="flex my-auto mx-32">
  ${data.map(
      (menu, index) => `
      <a href="${menu.link}" class="mx-6 font-bold text-2xl hover:text-red-500">${menu.name}</a>
      `).join("")}
  </div>
</div>
  
  </div>
  
  `;
}

export default HeaderPage