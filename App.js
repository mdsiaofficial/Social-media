import {profileData,suggData,postData} from "./component/data.js";
import { navbar } from "./component/navbar.js";
import { createPeople,addSugPeople } from "./component/people.js";
import { createSlider } from "./component/slider.js";
import { createPost } from "./component/post.js";




const root = document.querySelector("#root");
const fullProfile = document.querySelector("#fullProfile");
const proClose = document.querySelector("#proClose");

navbar(root)
createSlider()
createPeople("rahulroynipon","Rahul Roy Nipon","./sugg/rahul.png");




const pro = document.querySelector("#pro");
const profile = document.querySelector("#profile");
const navMenu = document.querySelectorAll(".nav-link li")
const sliderLayout = document.querySelector(".sliderLayout");
const right = document.querySelector("#right");
const left = document.querySelector("#left");
const allImage = document.querySelectorAll(".slider-image");
const imageSize = allImage.length * 100;
let count = 0;

right.addEventListener("click", () => {
    let newPosition = 212.5 * (count + 1);
    if (newPosition < imageSize) {
        left.classList.remove("hidden");
        sliderLayout.style.left = `-${newPosition}px`;
        count++;
    }
    if (newPosition + 212.5 >= imageSize) {
        right.classList.add("hidden");
    }
});

left.addEventListener("click", () => {
    if (count > 0) {
        count--;
        let newPosition = 212.5 * count;
        sliderLayout.style.left = `-${newPosition}px`;
        right.classList.remove("hidden");
    }
    if (count === 0) {
        left.classList.add("hidden");
    }
});




pro.addEventListener("click", profileShow);
proClose.addEventListener("click", profileHide);
fullProfile.addEventListener("click", profileHide);























suggData.forEach((data,index)=>{
    addSugPeople(suggData[index].id, suggData[index].img)
})

// idImg,idName,idLoc,mainPost,title

postData.forEach((data,index)=>{
    createPost(postData[index].img, postData[index].id, postData[index].loc, postData[index].postImg, postData[index].caption)
})









function profileShow() {
    fullProfile.classList.remove("hidden");
    fullProfile.classList.add("flex");

    setTimeout(() => {
        fullProfile.classList.remove("opacity-0");
        fullProfile.classList.add("opacity-100");
    }, 20);
}

function profileHide() {
    fullProfile.classList.remove("opacity-100");
    fullProfile.classList.add("opacity-0");

    setTimeout(() => {
        fullProfile.classList.remove("flex");
        fullProfile.classList.add("hidden");
    }, 200); // Wait for the opacity transition to complete before hiding the profile
}






































// navMenu.forEach(item =>{
//     item.addEventListener("click",()=>{
//         if(!profile.classList.contains("-right-[1100px]")){
//             profile.classList.add("-right-[1100px]")
//         }
//     })
// })


// pro.addEventListener("click",()=>{
//     profile.classList.toggle("-right-[1100px]")
// })
