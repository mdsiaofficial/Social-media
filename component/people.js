function createPeople(id, name, path) {
    const parent = document.querySelector("#main");
    const footer = document.createElement("footer");
    footer.setAttribute("class", "sticky top-0 hidden w-full md:block md:w-[35%] lg:w-[40%] pl-5 pr-7 md:pr-5 lg:pr-12 py-7");
    footer.setAttribute("id", "peopleArea");
    footer.innerHTML =
        `<div class="flex gap-3 items-center cursor-pointer">
             <img id="pro" class="h-16 w-16 rounded-full createPe" src="${path}" alt="">
             <div class="flex items-center justify-between w-full">
                 <div>
                     <p class="font-semibold text-lg opacity-90">${id}</p>
                     <p class="opacity-70 text-md">${name}</p>
                 </div>
                 
                 <div>
                 <label for="storyImg">
                      <p class="opacity-70 border-blue-600 w-12 h-12 flex items-center 
                      justify-center  btn text-sm border rounded-full">story</p>
                      </label>
                      <input class="hidden" type="file" accept="images/jpg, images/png, images/jpeg" id="storyImg">
                 </div>
             </div>
         </div>


         <div class="flex justify-between items-center mt-6 mb-5">
             <p class="opacity-70">Suggested for you</p>
         </div>
         <section id="sugPeople" class="relative"></section>
         <p class="mt-12 font-thin opacity-30 text-sm">
             Copyright © 2024 by rahulroynipon
             <br>All Rights Reserved.
         </p>`;
    parent.append(footer);
}

function addSugPeople(name, path) {
    const parent = document.querySelector("#sugPeople");
    const div = document.createElement("div");
    div.setAttribute("class", "flex items-center justify-between gap-2");
    div.innerHTML =
        `<div class="suggItem flex gap-3 items-center mb-4 cursor-pointer">
             <img class="h-12 w-12 rounded-full" src="${path}" alt="">
             <div>
                 <p class="font-semibold text-sm opacity-80 hover:opacity-100">${name}</p>
                 <p class="opacity-70 text-sm font-thin">Suggested for you</p>
             </div>
         </div>
         <p class="Followed text-sm font-thin text-blue-600 hover:text-blue-400 cursor-pointer">Follow</p>`;
    parent.prepend(div);
}

export { createPeople, addSugPeople };
