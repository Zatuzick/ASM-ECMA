import { useEffect, useState } from "@/utilities";


const HeaderAdmin = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/menuAdmin")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return `
  <div class="grid grid-cols-1 md:grid-cols-2   gap-4 border-b-2 border-black ">
  <div class="my-3 flex">
    <h1><a href="/" class="mx-6 font-bold text-2xl hover:text-red-500">HomeWeb</a></h1>

  </div>
  
  
  <div class="flex my-auto mx-auto">
  ${data.map(
    (menuAdmin, index) => `
      <a href="${menuAdmin.link}" dât class="mx-6 font-bold text-2xl hover:text-red-500">${menuAdmin.name}</a>
      `).join("")}
  </div>
</div>
  `;
}

export default HeaderAdmin

