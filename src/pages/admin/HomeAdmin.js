import HeaderAdmin from "./HeaderAdmin";



const HomeAdmin = () => {
  return `
        ${HeaderAdmin()}
    <div class="text-7xl text-center font-bold my-10 ">
      <h1 class="text-red-700">Home Admin</h1>
      <h2 class="text-4xl text-center font-bold my-24"> Admin quản lý dự án </h2>
    </div>
  `;
}

export default HomeAdmin