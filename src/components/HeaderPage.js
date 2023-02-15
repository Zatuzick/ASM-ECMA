
const HeaderPage = () => {
  return `
  <div class="grid grid-cols-3 gap-4 border-b-2 border-black ">
  <div>
      <a href="/"><img src="src/img/ad.jpg" alt="" class="rounded-full w-20 h-20 my-2"></a>

  </div>
  <div></div>
  <div class="flex my-auto">
      <a href="/" class="mx-6 font-bold text-2xl hover:text-red-500">Home</a>
      <a href="/projects" class="mx-6 font-bold text-2xl hover:text-red-500">Projects</a>

  </div>
</div>
  `;
}

export default HeaderPage