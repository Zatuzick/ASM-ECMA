
const About = () => {
    return `
    <div>
    <h1 class="text-center text-5xl font-bold my-5">About</h1>
    <div class="mx-40 border-4 ">
        <h3 class="text-center text-3xl font-bold mt-5">Giới thiệu</h3>
        <div class="flex border-b-2 ">
            <div class="m-7">
                <img src="src/img/ad.jpg" alt="" class="border-2 rounded-tl-3xl rounded-br-3xl max-w-md">
            </div>
            <div class="mt-5">
                <p class="font-medium border-b-2 m-2 text-xl">Hiện tại, mình đang là sinh viên kì 4 tại trường FPT
                    Polytechnic. Mình
                    bắt
                    đầu học lập
                    trình từ tháng 10
                    năm
                    ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc học tập trên trường
                    thì mình
                    thường
                    xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev, easy frontend,
                    ...<br><br>

                </p>

                <div class="mt-5">
                    <h4 class="font-bold text-2xl">Thông tin cơ bản</h4>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <h4 class="text-xl font-medium mx-3 my-2">Học vấn: <span class="p-3"> FPT
                                    Polytechnic</span></h4>
                            <h4 class="text-xl font-medium mx-3 my-2">Email: <span
                                    class="p-3">zatuzick03@gmail.com</span></h4>
                        </div>
                        <div>
                            <h4 class="text-xl font-medium mx-3 my-2">Điện thoại: <span
                                    class="p-3">0925318918</span></h4>
                            <h4 class="text-xl font-medium mx-3 my-2">Nghề nghiệp: <span class="p-3">Web
                                    Developer</span></h4>
                        </div>
                    </div>
                    <h4 class="text-center font-medium text-xl mb-3">Địa chỉ: <span class="p-3">Dĩnh Kế, Bắc Giang
                        </span></h4>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}

export default About