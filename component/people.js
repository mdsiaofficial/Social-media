function createPeople(){
    const Parent = document.querySelector("#main");
    const footer = document.createElement("footer");
    footer.setAttribute("class","sticky top-0 hidden md:block md:w-[35%] lg:w-[40%] pl-5 md:pr-5 lg:pr-12 py-7");
    footer.innerHTML =
    `
    <div class="flex gap-3 items-center cursor-pointer">
    <img src="./images/profile.png" alt="">
    <div><p class="font-semibold text-lg opacity-95">rahulroynipon</p>
        <p class="opacity-70 text-md">Rahul Roy Nipon</p>
    </div>
</div>
<div class="flex justify-between items-center mt-6 mb-5">
    <p class="opacity-70">Suggested for you</p>
    <p class="text-sm cursor-pointer">See all</p>
</div>
<section id="sugPeople"></section>
    `
    Parent.append(footer);

}




function addSugPeople(){
    const Parent = document.querySelector("#sugPeople")
    const div = document.createElement("div");
    div.setAttribute("class","flex items-center justify-between gap-2");
    div.innerHTML = 
    `
    <div class="flex gap-3 items-center mb-4 cursor-pointer">
        <img class="h-12" src="./images/profile.png" alt="">
        <div><p class="font-semibold text-sm opacity-90 hover:opacity-100">rahulroynipon</p>
            <p class="opacity-70 text-sm font-thin">Suggested for you</p>
        </div>
    </div>
    <p class="text-sm font-thin text-blue-600 hover:text-blue-400 cursor-pointer">Follow</p>
    `
    Parent.prepend(div)
}





export {createPeople,addSugPeople}