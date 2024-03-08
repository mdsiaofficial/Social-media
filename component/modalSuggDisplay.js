class SuggerDisplay {
    static Create() {
        const fullSugg = document.querySelector("#fullSugg");
        fullSugg.innerHTML = `
            <div onclick="event.stopImmediatePropagation()" class="w-fit h-fit bg-[#000000d9] backdrop-blur px-5 py-6 rounded-md shadow-lg shadow-[#5b5353]">
                <div class="flex justify-between">
                    <h1></h1>
                    <button id="suggClose" class="btn text-lg hover:bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full">X</button>
                </div>
                
                <main class="flex flex-col items-center">
                    <div class="border rounded-full p-2">
                        <img id="suggerImg" class="h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full" src="./images/WhatsApp Image 2024-02-16 at 22.07.31_a6f8eb00.jpg" alt="">
                    </div>
                    <h1 id="suggerId" class="text-4xl mt-5 font-semibold opacity-90">rahulroynipon</h1>
                    <div class="flex gap-7 md:gap-10 mt-5 opacity-85">
                        <p><span>0</span> posts</p>
                        <p><span>0</span> followers</p>
                        <p><span>0</span> following</p>
                    </div>
                </main>
            </div>`;
    }

    static update(imgSrc, id) {
        const suggerImg = document.querySelector("#suggerImg");
        suggerImg.src = imgSrc;

        const suggerId = document.querySelector("#suggerId");
        suggerId.innerText = id;
    }
}

export { SuggerDisplay };
