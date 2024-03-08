function createPost(idImg,idName,idLoc,mainPost,title){
    const Parent = document.querySelector("#mainPost");

    const Section = document.createElement("main");
    Section.setAttribute("class","w-full rounded-lg mt-4");

    Section.innerHTML = 
    `
    <main class=" w-full rounded-lg mt-4">
               
                <section class="border-t border-[#7c7e845e] py-3">
                    <div class="flex items-center gap-4 mb-3">
                        <img class="h-12 w-12 rounded-full border-2 p-1 border-[#655ce0]" 
                        src="${idImg}" alt="">

                        <div class="flex items-center justify-between w-[80%] md:w-[85%]">
                            <div>
                                <p class="font-semibold text-s transition-all opacity-80 hover:opacity-90">${idName}</p>
                                <p class="text-sm font-thin -mt-1 opacity-70">${idLoc}</p>
                            </div>
                            <img id="sharePost" class="h-6 btn" src="./icons/share.svg" alt="">
                        </div>
                    </div>

                    <img class="w-full rounded-sm" src="${mainPost}" alt="">

                    <div class="flex justify-between items-center">
                        <div class="flex gap-4 mt-4">
                            <img id="like" class="h-6 btn" src="./icons/like.svg" alt="">
                            <img class="h-6 btn" src="./icons/chat.svg" alt="">
                        </div>
                        <img id="savePostBtn" class="h-6 btn"  src="./icons/save.svg" alt="">
                    </div>

                    <p class="opacity-90 text-md mt-3 hover:opacity-95"><span id="countlike">0</span> likes</p>
                    
                    <div class="opacity-95 text-sm font-thin flex items-center">
                        <span class="line-clamp-1 hover:line-clamp-none transition-all duration-500">${title}</span>
                    </div>

                    <textarea class="w-full rounded mt-2 bg-[#000000] p-1 border-none 
                    outline-none" rows="1" placeholder="write a comment"></textarea>
                    
                </section>
            </main>
    `

    Parent.prepend(Section)
}


export {createPost}