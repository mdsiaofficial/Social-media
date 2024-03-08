

class profileDisplay {
    static Create() {
        const fullPro = document.querySelector("#fullProfile");
        fullPro.innerHTML = `
        <div onclick="event.stopImmediatePropagation()" class="w-fit h-fit bg-[#000000d9] backdrop-blur px-5 py-6 rounded-md shadow-lg shadow-[#5b5353]">
        <div class="flex justify-between">
            <h1></h1>
            <button id="proClose" class="btn text-lg hover:bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full">X</button>
        </div>
        

        <main class="flex flex-col items-center">
            <div class="border rounded-full p-2 relative">
                <span class="absolute bottom-5 right-2 btn bg-black rounded-lg">
                   <label for="input-file"><img class="w-7" src="./icons/edit.svg" alt=""></label>
                   <input class="hidden" type="file" accept="images/jpg, images/png, images/jpeg" id="input-file">
                </span>
                <img class="newImg h-[150px] w-[150px] md:h-[180px] md:w-[180px] rounded-full" 
            src="./images/nipon.png" alt="">
            </div>
            <h1 class="text-4xl mt-5 font-semibold opacity-90">rahulroynipon</h1>
            <div class="flex gap-7 md:gap-10 mt-5 opacity-85">
                <p><span>0</span> posts</p>
                <p><span>0</span> followers</p>
                <p><span>0</span> following</p>
            </div>
    
        </main>
    </div>
            
            `;
    }

 
}

export { profileDisplay };
