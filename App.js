import {profileData,suggData,postData} from "./component/data.js";
import { navbar } from "./component/navbar.js";
import { createPeople,addSugPeople } from "./component/people.js";
import { createSlider } from "./component/slider.js";
import { createPost } from "./component/post.js";
import { SuggerDisplay } from "./component/modalSuggDisplay.js";
import { profileDisplay } from "./component/modalProDisplay.js";


SuggerDisplay.Create()
profileDisplay.Create()

const root = document.querySelector("#root");
const fullProfile = document.querySelector("#fullProfile");
const proClose = document.querySelector("#proClose");
const fullSugg = document.querySelector("#fullSugg");
const suggClose = document.querySelector("#suggClose");
const suggerImg = document.querySelector("#suggerImg")
const suggerId = document.querySelector("#suggerId")




localStorage.setItem("profileDetails", JSON.stringify(profileData));
let profileLoc = JSON.parse(localStorage.getItem("profileDetails"));

function profileUpdate() {
    const newImg = document.querySelector(".newImg");
    const input = document.querySelector("#input-file");
    
    input.addEventListener("change", () => {
        if (input.files.length > 0) {
            let IMG = URL.createObjectURL(input.files[0]);
            newImg.src = IMG;
            document.querySelector(".createPe").src = IMG
            
        }
    });
}

profileUpdate()


navbar(root)
createSlider()
createPeople(profileLoc.id, profileLoc.name, profileLoc.img);
suggData.forEach((data,index)=>{
    addSugPeople(suggData[index].id, suggData[index].img)
})



const pro = document.querySelector("#pro");
const profile = document.querySelector("#profile");
const navMenu = document.querySelectorAll(".nav-link li")
const sliderLayout = document.querySelector(".sliderLayout");
const right = document.querySelector("#right");
const left = document.querySelector("#left");
const allImage = document.querySelectorAll(".slider-image");
const suggItem = document.querySelectorAll(".suggItem");
const Followed = document.querySelectorAll(".Followed")
const peopleArea = document.querySelector("#peopleArea")
const mainBody = document.querySelector("#mainBody")





// slider function call start

const imageSize = allImage.length * 100;
let count = 0;
right.addEventListener("click", rightNav);
left.addEventListener("click", leftNav);

// slider function call end




pro.addEventListener("click", function (){profileShow(fullProfile)});
proClose.addEventListener("click", function(){profileHide(fullProfile)});
fullProfile.addEventListener("click", function(){profileHide(fullProfile)});



suggItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        const targetIndex = suggItem.length - index - 1;
        SuggerDisplay.update(suggData[targetIndex].img , suggData[targetIndex].id);
        profileShow(fullSugg);
    });
});
suggClose.addEventListener("click", function(){profileHide(fullSugg)});
fullSugg.addEventListener("click", function(){profileHide(fullSugg)});

Followed.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (item.textContent === "Followed") {
            item.innerText = "Follow";
        } else {
            item.innerText = "Followed";
        }
    });
});










// idImg,idName,idLoc,mainPost,title

postData.forEach((data,index)=>{
    createPost(postData[index].img, postData[index].id, postData[index].loc, postData[index].postImg, postData[index].caption)
})







// slider all function start

function rightNav() {
    let newPosition = 212.5 * (count + 1);
    if (newPosition < imageSize) {
        left.classList.remove("hidden");
        sliderLayout.style.left = `-${newPosition}px`;
        count++;
    }
    if (newPosition + 212.5 >= imageSize) {
        right.classList.add("hidden");
    }
}


function leftNav (){
    if (count > 0) {
        count--;
        let newPosition = 212.5 * count;
        sliderLayout.style.left = `-${newPosition}px`;
        right.classList.remove("hidden");
    }
    if (count === 0) {
        left.classList.add("hidden");
    }
}


// slider all function end








// modal show and hide start

function profileShow(Parent) {
    Parent.classList.remove("hidden");
    Parent.classList.add("flex");

    setTimeout(() => {
        Parent.classList.remove("opacity-0");
        Parent.classList.add("opacity-100");
    }, 20);
}

function profileHide(Parent) {
    Parent.classList.remove("opacity-100");
    Parent.classList.add("opacity-0");

    setTimeout(() => {
        Parent.classList.remove("flex");
        Parent.classList.add("hidden");
    }, 200); 
}

// modal show and hide end

































navMenu.forEach((item)=>{
    item.addEventListener("click",()=>{
        navMenu.forEach(item =>{
            item.classList.remove("activePage")
        })



        if(item.classList.contains("homeID")){
            peopleArea.classList.add("hidden")
            mainBody.classList.remove("hidden")
            item.classList.add("activePage")
        }


        else if(item.classList.contains("peopleID")){
            mainBody.classList.add("hidden")
            peopleArea.classList.remove("hidden")
            item.classList.add("activePage")
        }


        
    })
})