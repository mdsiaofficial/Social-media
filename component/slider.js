function createSlider(){
    const Parent = document.querySelector("#mainBody")
    const Section = document.createElement("section")
    Section.setAttribute("class","mr-3 h-[220px] rounded-lg relative")
    Section.setAttribute("id","topside")
    Section.innerHTML = 
    `
                <div id="sliderIMgParent" class="flex gap-2 overflow-hidden absolute inset-0 sliderLayout duration-200 transition-all">
                </div>

                <div>
                    <img id="right" class="absolute bg-white rounded-full h-10 right-2 top-[38%] hover:scale-90 duration-200 transition-all" 
                    src="./icons/angle-circle-right.svg" alt="">
                    <img id="left" class="absolute hidden bg-white rounded-full h-10 left-2 rotate-180 top-[38%] hover:scale-90 duration-200 transition-all" 
                    src="./icons/angle-circle-right.svg" alt="">
                </div>
    
    `
    Parent.prepend(Section)

}




function storyIMGappend(path) {
    const Parent = document.querySelector("#sliderIMgParent");

    const IMG = document.createElement("img");
    IMG.setAttribute("class", "slider-image");
    IMG.src = path;

    Parent.prepend(IMG);
}




export{
    createSlider,
    storyIMGappend
}