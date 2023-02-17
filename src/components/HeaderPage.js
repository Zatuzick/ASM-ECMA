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
  <div class="grid grid-cols-1 md:grid-cols-2   gap-4 border-b-2 border-black ">
  <div>
  ${img.map(
    (img, index) => `
      <a href="/"><img src="${img.img[0]}" alt="" class="rounded-full mx-auto md:m-2 w-20 h-20 my-2"></a>
      `).join("")}
  </div>
  <div class="flex my-auto mx-auto">
  ${data.map(
      (menu, index) => `
      <a href="${menu.link}" class="mx-6 font-bold text-2xl hover:text-red-500">${menu.name}</a>
      `).join("")}
  </div>
</div>
  `;
}

export default HeaderPage