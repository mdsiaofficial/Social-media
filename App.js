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
const SavePost = document.querySelector("#SavePost");






let userAllInfo = localStorage.getItem("proInfo")
if (userAllInfo){
    let DD = JSON.parse(userAllInfo)
    profileData.id = DD.id
    profileData.name = DD.name
    profileData.img = DD.img
}




function profileUpdate() {
    const newImg = document.querySelector(".newImg");
    const input = document.querySelector("#input-file");

    if (localStorage.getItem("proInfo")){
        const fullDetails = JSON.parse(localStorage.getItem("proInfo"))
        newImg.src = fullDetails.img
        document.querySelector(".disUser").innerText = fullDetails.id
    }
    
    input.addEventListener("change", () => {
        if (input.files.length > 0) {
            let IMG = URL.createObjectURL(input.files[0]);
            newImg.src = IMG;
            document.querySelector(".createPe").src = IMG
            profileData.img = IMG
            storyIMGappend(IMG)
            
        }
    });
}

profileUpdate()



// idImg,idName,idLoc,mainPost,title

postData.forEach((data,index)=>{
    createPost(postData[index].img, postData[index].id, postData[index].loc, postData[index].postImg, postData[index].caption)
})





let rahul = 0; // Define rahul variable outside

function SharePostUpdate(IMG,rahul,Alldata=null) {
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
        if (rahul === 1 && !Alldata) {
            if (IMG && IMG !== "./images/createPost.png") { 
                const postCaption = document.querySelector("#createPostFull textarea").value;
                createPost(profileData.img, profileData.id, "Dinajpur", IMG, postCaption);
                postData.push(Alldata);

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


                let newdata = {
                    img: profileData.img,
                    id: profileData.id,
                    loc: "Bangladesh",
                    postImg: IMG,
                    caption: postCaption
                };

                postData.push(newdata)

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
createPeople(profileData.id, profileData.name, profileData.img);
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
const savePostArea = document.querySelector("#savePostArea");
const savePostAppend = document.querySelector(".savePostAppend")


// Function to attach event listeners for like buttons
function attachLikeEventListeners(like, countlike) {
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



function attachSAVEDEventListeners(saved) {
    saved.forEach((item, index) => {
        item.addEventListener("click", () => {  

            if (item.getAttribute("src")==="./icons/save.svg"){
                item.setAttribute("src", "./icons/saved.svg");
            setTimeout(()=>{
                savePostAppend.prepend(item.parentNode.parentNode)
            },300)

            }
            else if (item.getAttribute("src")==="./icons/saved.svg"){
                mainPost.prepend(item.parentNode.parentNode)
            }
            
          
        });
    });
}






// Function to attach event listeners for postShare items
function handlePostShareClick(item, index, postShare, profileData, postData) {
    item.addEventListener("click", () => {
        // Ensure that the logic runs only once
        if (!item.clicked) {
            // Set the clicked flag to true to prevent multiple executions
            item.clicked = true;
            let rahul = 1;
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
            SharePostUpdate(postData[targetIndex].postImg, rahul, Alldata);
        }
    });
}

// Attach event listener for mainPost
mainPost.addEventListener("click", () => {
    let postShare = document.querySelectorAll("#sharePost");
    let like = document.querySelectorAll("#like");
    let countlike = document.querySelectorAll("#countlike");
    let savePostBtn = document.querySelectorAll("#savePostBtn")

    // Reset the clicked flag for all postShare items
    postShare.forEach(item => {
        item.clicked = false;
    });

    // Reset the clicked flag for all like buttons
    like.forEach(item => {
        item.clicked = false;
    });

    savePostBtn.forEach(item =>{
        item.clicked = false;
    })

    // Reattach event listeners for like buttons
    attachLikeEventListeners(like, countlike);
    attachSAVEDEventListeners(savePostBtn)

    // Attach event listeners for postShare items
    postShare.forEach((item, index) => {
        handlePostShareClick(item, index, postShare, profileData, postData);
    });
});

// Attach event listeners for like buttons initially
let like = document.querySelectorAll("#like");
let countlike = document.querySelectorAll("#countlike");
attachLikeEventListeners(like, countlike);

let savePostBtn = document.querySelectorAll("#savePostBtn")
attachSAVEDEventListeners(savePostBtn)

// Attach event listeners for postShare items initially
let postShare = document.querySelectorAll("#sharePost");
postShare.forEach((item, index) => {
    handlePostShareClick(item, index, postShare, profileData, postData);
});



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
            navMenu.forEach(item =>{
                item.classList.remove("activePage")
            })
    
        


        if(item.classList.contains("homeID")){
            peopleRemove()
            saveRemove()
            homeActive()
            item.classList.add("activePage")
        }


        else if(item.classList.contains("peopleID")){
            peopleActive()
            item.classList.add("activePage")
        }

        else if (item.classList.contains("createID")){
            document.querySelector(".homeID").classList.add("activePage")
            createID.addEventListener("click", function (){profileShow(createPostFull)});
            peopleRemove()
            saveRemove()
            homeActive()

        }


        else if(item.classList.contains("saveID")){
            item.classList.add("activePage")
            saveActive()
            peopleRemove()
           
            
        }

        

        
    })
})
// Assuming item refers to the element with the class "logoutID"







function homeActive(){
    mainBody.classList.remove("hidden")
    mainPost.classList.remove("md:hidden")
    mainPost.classList.remove("hidden")

}

function homeRemove(){
    mainBody.classList.add("hidden")
    mainPost.classList.add("md:hidden")
    mainPost.classList.add("hidden")

}



function peopleActive(){
    mainBody.classList.add("hidden")
    peopleArea.classList.remove("hidden")
}


function peopleRemove(){
    mainBody.classList.remove("hidden")
    peopleArea.classList.add("hidden")
}



function saveActive(){
    savePostArea.classList.remove("hidden")
    mainPost.classList.add("hidden")
}


function saveRemove(){
    savePostArea.classList.add("hidden")
    mainPost.classList.remove("hidden")
}


