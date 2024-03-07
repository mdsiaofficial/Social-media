function createPeople(id,name,path){
    const Parent = document.querySelector("#main");
    const footer = document.createElement("footer");
    footer.setAttribute("class","sticky top-0 hidden md:block md:w-[35%] lg:w-[40%] pl-5 md:pr-5 lg:pr-12 py-7");
    footer.innerHTML =
    `
    <div id="pro" class="flex gap-3 items-center cursor-pointer">
         <img class="h-16 w-16 rounded-full" src="${path}" alt="">
        <div><p class="font-semibold text-lg opacity-90">${id}</p>
             <p class="opacity-70 text-md">${name}</p>
        </div>
    </div>
    <div class="flex justify-between items-center mt-6 mb-5">
        <p class="opacity-70">Suggested for you</p>
        <p class="text-sm cursor-pointer">See all</p>
    </div>
    <section id="sugPeople" class="relative"></section>
    <P class="mt-12 font-thin opacity-30 text-sm">
    Copyright © 2024 by rahulroynipon
    <br>All Rights Reserved.</p>
    `
    Parent.append(footer);

}




function addSugPeople(name,path){
    const Parent = document.querySelector("#sugPeople")
    const div = document.createElement("div");
    div.setAttribute("class","flex items-center justify-between gap-2");
    div.innerHTML = 
    `
    <div class="flex gap-3 items-center mb-4 cursor-pointer">
        <img class="h-12 w-12 rounded-full" src="${path}" alt="">
        <div><p class="font-semibold text-sm opacity-80 hover:opacity-100">${name}</p>
            <p class="opacity-70 text-sm font-thin">Suggested for you</p>
        </div>
    </div>
    <p class="text-sm font-thin text-blue-600 hover:text-blue-400 cursor-pointer">Follow</p>
    `
    Parent.prepend(div)
}





export {createPeople,addSugPeople}