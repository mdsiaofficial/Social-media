function createSlider(){
    const Parent = document.querySelector("#mainBody")
    const Section = document.createElement("section")
    Section.setAttribute("class","mr-3 h-[220px] rounded-lg relative")
    Section.setAttribute("id","topside")
    Section.innerHTML = 
    `
                <div class="flex gap-2 overflow-hidden absolute inset-0 sliderLayout duration-200 transition-all">
                    <img class="slider-image" src="./slider/slider1.jpg" alt="">
                    <img class="slider-image" src="./slider/slider2.jpg" alt="">
                    <img class="slider-image" src="./slider/slider3.jpg" alt="">
                    <img class="slider-image" src="./sugg/nirmol.png" alt="">
                    <img class="slider-image" src="./sugg/rahul.png" alt="">
                    <img class="slider-image" src="./slider/slider4.jpg" alt="">

                    <img class="slider-image" src="./sugg/dipok.png" alt="">
                    <img class="slider-image" src="./sugg/jugol.png" alt="">
                    

                    <img class="slider-image" src="./slider/slider2.jpg" alt="">
                    <img class="slider-image" src="./slider/slider3.jpg" alt="">
                    <img class="slider-image" src="./slider/slider4.jpg" alt="">
                    <img class="slider-image" src="./sugg/mahin.png" alt="">
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



export{
    createSlider
}