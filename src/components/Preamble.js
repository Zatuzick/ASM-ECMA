
const Preamble = () => {
    return `
    <div class="grid grid-cols-2 gap-4 m-16 border-4 ">
        <div class="font-bold  my-auto ml-10">
            <h1 class="text-6xl my-10">Xin chào, tôi là <br> <span class="mx-10">Văn Minh</span></h1>
            <h3 class="text-4xl">Tôi làm
                <marquee width="80%" behavior="alternate" scrolldelay="100" direction="left" class="text-5xl">
                    Web Developer
                </marquee>
            </h3>
        </div>
        <div class="max-w-screen-sm my-4">
            <img src="src/img/ad.jpg" alt="" width="80%" height="80%" class="rounded-full">
        </div>
    </div>
  `;
}

export default Preamble