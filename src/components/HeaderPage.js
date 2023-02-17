import { useEffect, useState } from "@/utilities";


const HeaderPage = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/menus")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return `
  <div class="grid grid-cols-1 md:grid-cols-2   gap-4 border-b-2 border-black ">
  <div>
      <a href="/"><img src="src/img/ad.jpg" alt="" class="rounded-full mx-auto md:m-2 w-20 h-20 my-2"></a>
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