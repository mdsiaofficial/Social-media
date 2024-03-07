function navbar(Parent){
    const header = document.createElement("header");
    header.setAttribute("class","navbar");
    header.innerHTML = 
    `
    <nav class="h-screen">
    <div class="flex items-center justify-center gap-4 mb-16 text-2xl"><img class="w-7 md:w-10" src="./icons/favicon.ico" alt=""><p class="icon_font">Friend Zone</p></div>


    <ul class="flex flex-col nav-link">
        <li class="nav-item activePage"><img class="w-5 md:w-7" src="./icons/home.svg" alt=""><p>Home</p></li>
        <li class="nav-item md:hidden"><img class="w-5 md:w-7" src="./icons/people.svg" alt=""><p>People</p></li>
        <li class="nav-item"><img class="w-5 md:w-7" src="./icons/gallery-add.svg" alt=""><p>Create</p></li>
        <li class="nav-item"><img class="w-5 md:w-7" src="./icons/chat.svg" alt=""><p>Message</p></li>
        <li class="nav-item"><img class="w-5 md:w-7" src="./icons/save.svg" alt=""><p>Saved</p></li>
    </ul>

    <div class="nav-item mt-56"><img class="w-5 md:w-7" src="./icons/logout.svg" alt=""><p>logout</p></div>
</nav>
    `
    Parent.prepend(header);
}



export {navbar}