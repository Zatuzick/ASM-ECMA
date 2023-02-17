import { useEffect, useState } from "@/utilities";
const Skill = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/skill")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return `
    <div id="Skill">
        <div class="mx-32 border-2">
        <h1 class="text-5xl font-bold text-center my-5">Skills</h1>
        <div class="grid grid-cols-4 gap-5 mx-28 my-10">
        ${data.map(
    (skill, index) => `
        <img src="${skill.img}" alt="" class="mx-auto  my-5 w-[144px] h-[144px] rounded-3xl">
        `).join("")}
  </div>
</div>
    </div>
    
  `;
}

export default Skill



// json-server --watch db.json
// <a data-navigo ></a>