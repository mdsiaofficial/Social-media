import {profileData ,suggData, postData, storySore} from "./component/data.js";
import { navbar } from "./component/navbar.js";
import { createPeople, addSugPeople } from "./component/people.js";
import { createSlider, storyIMGappend } from "./component/slider.js";
import { createPost } from "./component/post.js";
import { SuggerDisplay } from "./component/modalSuggDisplay.js";
import { profileDisplay } from "./component/modalProDisplay.js";
import { cratePostDisplay } from "./component/createPostModal.js";


SuggerDisplay.Create()
profileDisplay.Create()
cratePostDisplay.Create()




const root = document.querySelector("#root");
const fullProfile = document.querySelector("#fullProfile");
const proClose = document.querySelector("#proClose");
const fullSugg = document.querySelector("#fullSugg");
const suggClose = document.querySelector("#suggClose");
const suggerImg = document.querySelector("#suggerImg")
const suggerId = document.querySelector("#suggerId")
const createPostFull = document.querySelector("#createPostFull")
const postClose = document.querySelector("#postClose")
const postCaption = document.querySelector("#createPostFull textarea");








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



// idImg,idName,idLoc,mainPost,title

postData.forEach((data,index)=>{
    createPost(postData[index].img, postData[index].id, postData[index].loc, postData[index].postImg, postData[index].caption)
})





let rahul = 0; // Define rahul variable outside

function SharePostUpdate(IMG,rahul) {
    const newImg = document.querySelector("#uploadImg");
    const input = document.querySelector("#inputfile");
    const newPostP = document.querySelector("#newPostP");

    input.addEventListener("change", () => {
        if (input.files.length > 0) {
            IMG = URL.createObjectURL(input.files[0]);
            newImg.src = IMG;
        }
    });

    newPostP.addEventListener("click", () => {
        if (rahul === 1) {
            if (IMG && IMG !== "./images/createPost.png") { 
                const postCaption = document.querySelector("#createPostFull textarea").value;
                createPost(profileData.img, profileData.id, "Dinajpur", IMG, postCaption);
                document.querySelector("#createPostFull textarea").value = "";
                uploadImg.src = "./images/createPost.png";
                profileHide(createPostFull);
                IMG = ""; // Reset IMG variable after posting
            }
        }
        else{

            if (IMG && IMG !== "./images/createPost.png") { 
                const postCaption = document.querySelector("#createPostFull textarea").value;
                createPost(profileData.img, profileData.id, "Dinajpur", IMG, postCaption);


                let Alldata = {
                    img: profileData.img,
                    id: profileData.id,
                    loc: "Bangladesh",
                    postImg: IMG,
                    caption: postCaption
                };

                postData.push(Alldata)

                document.querySelector("#createPostFull textarea").value = "";
                uploadImg.src = "./images/createPost.png";
                profileHide(createPostFull);
                IMG = ""; // Reset IMG variable after posting
    
                
            }

        }
    });
}

// Usage
let IMG; // Define IMG variable outside
SharePostUpdate(IMG);









navbar(root)
createSlider()
storySore.forEach((item)=>{
    storyIMGappend(item)
})
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
let allImage = document.querySelectorAll(".slider-image");
const suggItem = document.querySelectorAll(".suggItem");
const Followed = document.querySelectorAll(".Followed")
const peopleArea = document.querySelector("#peopleArea")
const mainBody = document.querySelector("#mainBody")
const createID = document.querySelector(".createID")
const uploadImg = document.querySelector("#uploadImg")
const storyImg = document.querySelector("#storyImg")
const mainPost = document.querySelector("#mainPost");



// Select elements once outside the event listener
let postShare = document.querySelectorAll("#sharePost");
let like = document.querySelectorAll("#like");
let countlike = document.querySelectorAll("#countlike");
// Function to attach event listeners for like buttons
function attachLikeEventListeners() {
    like.forEach((item, index) => {
        item.addEventListener("click", () => {
            if (item.getAttribute("src") === "./icons/like.svg") {
                item.setAttribute("src", "./icons/liked.svg");
                countlike[index].innerHTML = "1";
            } else {
                item.setAttribute("src", "./icons/like.svg");
                countlike[index].innerHTML = "0";
            }
        });
    });
}


function attachNewPostEventListeners(){
    postShare.forEach((item, index) => {
        item.addEventListener("click", () => {
            // Ensure that the logic runs only once
            if (!item.clicked) {
                // Set the clicked flag to true to prevent multiple executions
                item.clicked = true;
                rahul = 1;
                let targetIndex = postShare.length - index - 1;
                let Alldata = {
                    img: profileData.img,
                    id: profileData.id,
                    loc: postData[targetIndex].loc,
                    postImg: postData[targetIndex].postImg,
                    caption: postData[targetIndex].caption
                };
    
                document.querySelector("#createPostFull textarea").value = postData[targetIndex].caption;
                uploadImg.src = postData[targetIndex].postImg;
                profileShow(createPostFull);
                SharePostUpdate(postData[targetIndex].postImg, rahul);
                rahul = 0;
                postData.push(Alldata);
            }
        });
    });
    
}

// Attach event listener for mainPost
mainPost.addEventListener("click", () => {
    postShare = document.querySelectorAll("#sharePost");
    like = document.querySelectorAll("#like");
    countlike = document.querySelectorAll("#countlike");
    
    // Reset the clicked flag for all postShare items
    postShare.forEach(item => {
        item.clicked = false;
    });
    
    // Reset the clicked flag for all like buttons
    like.forEach(item => {
        item.clicked = false;
    });
    
    // Reattach event listeners for like buttons
    attachLikeEventListeners();
    attachNewPostEventListeners();
});

// Attach event listeners for like buttons initially
attachLikeEventListeners();
attachNewPostEventListeners();

// Attach event listeners for postShare items




storyImg.addEventListener("change", () => {
    const file = storyImg.files[0]; // Get the first file selected in the input
    if (file) {
        const IMG = URL.createObjectURL(file);
        storyIMGappend(IMG);
    }
});


// slider function call start

let imageSize = allImage.length * 100;
let count = 0;
right.addEventListener("click", rightNav);
left.addEventListener("click", leftNav);



// slider function call end




pro.addEventListener("click", function (){profileShow(fullProfile)});
proClose.addEventListener("click", function(){profileHide(fullProfile)});
fullProfile.addEventListener("click", function(){profileHide(fullProfile)});




postClose.addEventListener("click", function(){
    document.querySelector("#createPostFull textarea").value = ""
    uploadImg.src = "./images/createPost.png"
    profileHide(createPostFull);


});
createPostFull.addEventListener("click", function(){
    document.querySelector("#createPostFull textarea").value = ""
    uploadImg.src = "./images/createPost.png"
    profileHide(createPostFull)
});



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
        if (item.textContent === "Following") {
            item.innerText = "Follow";
        } else {
            item.innerText = "Following";
        }
    });
});

















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
        if (!item.classList.contains("createID")){
            navMenu.forEach(item =>{
                item.classList.remove("activePage")
            })
    
        }


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

        else if (item.classList.contains("createID")){
            createID.addEventListener("click", function (){profileShow(createPostFull)});
        }


        
    })
})








