class cratePostDisplay {
    static Create() {
        const fullSugg = document.querySelector("#createPostFull");
        fullSugg.innerHTML = `
        <div onclick="event.stopImmediatePropagation()" class="w-fit h-fit bg-[#000000d9] backdrop-blur px-5 py-6 rounded-md shadow-lg shadow-[#5b5353]">
        <div class="flex justify-between items-center">
           <a href="#topside"> <input id="newPostP" class="btn bg-[#57358c] hover:bg-[#806ba3] px-3 py-1 rounded mt-2" type="button" value="Post"></a>
           <button id="postClose" class="btn text-lg hover:bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full">X</button>
        </div>
        <main class="flex flex-col items-center mt-5">
           <textarea class="w-full rounded my-3 py-2 px-2 bg-[#3b3b44a5]" rows="1" 
              placeholder="write the caption"></textarea>
           <div class="rounded-full p-2 flex flex-col items-center">
              <img id="uploadImg" class="w-[230px] md:w-[300px] rounded" src="./images/createPost.png" alt="">
              <label for="inputfile">
                 <div class="flex btn justify-between items-center gap-3 hover:bg-[#806ba3]
                    bg-[#57358c] px-3 py-2 rounded mt-5">
                    <h1>upload photo</h1>
                    <img class="w-7" src="./icons/edit.svg" alt="">
                 </div>
              </label>
              <input class="hidden" type="file" accept="images/jpg, images/png, images/jpeg" id="inputfile">
           </div>
        </main>
     </div>
     `;
    }

}



export { cratePostDisplay };
