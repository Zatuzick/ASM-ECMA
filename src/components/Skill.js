import { useEffect, useState } from "@/utilities";
const Skill = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/skill")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return `
    <div id="Skill" class=" mt-10 mx-auto" >
        <div class="py-16">
        <h1 class="text-6xl font-bold text-center my-5">Skills</h1>
        <div class="grid grid-cols-6 gap-4 mx-20 my-10">
        ${data.map(
    (skill, index) => `
        <img src="${skill.img}" alt="" class="mx-auto  my-5 w-[100px] h-[100px] rounded-2xl">
        `).join("")}
  </div>
</div>
    </div>
    
  `;
}

export default Skill



// json-server --watch db.json
// <a data-navigo ></a>