// This object contains the profile data of a user, including their ID, name, and profile image path.
let profileData = {
    id : "rahulroynipon",
    name: "Rahul Roy Nipon",
    img: "./images/nipon.png"
}

// This array contains the paths to the stories of a user.
let storySore = [
    "./sugg/mahin.png",
    "./slider/slider4.jpg",
    "./slider/slider3.jpg",
    "./slider/slider2.jpg",
    "./sugg/jugol.png",
    "./sugg/dipok.png",
    "./slider/slider4.jpg",
    "./sugg/rahul.png",
    "./sugg/nirmol.png",
    "./slider/slider3.jpg",
    "./slider/slider2.jpg",
    "./slider/slider1.jpg"
]

// This array contains the suggested user data, each object containing an ID and an image path.
let  suggData =  [
    {
        id: "dipokroy",
        img: "./sugg/dipok.png"
    },
    {
        id: "jugolroy",
        img: "./sugg/jugol.png"
    },
    {
        id: "mahinsarkar",
        img: "./sugg/mahin.png"
    },
    {
        id: "hrishikeshroy",
        img: "./sugg/resi.png"
    },
    {
        id: "nirmolroy",
        img: "./sugg/nirmol.png"
    }
]

// This array contains the post data, each object containing the user's image, ID, location, post image, and caption.
let postData = [
    // ... (each object in this array has the same structure as the one above)
    {
       img: "./sugg/dipok.png",
       id: "dipokroy",
       loc: "Chirirbandar, Dinajpur",
       postImg: "./sugg/dipok.png",
       caption: "I'm not bossy, I just have better ideas"
    },
    {
       img: "./sugg/mahin.png",
       id: "mahinsarkar",
       loc: "Savar, Dhaka",
       postImg: "./sugg/mahin.png",
       caption: "Self-love is the best kind of love"
    },
    {
       img: "./sugg/nirmol.png",
       id: "nirmol.png",
       loc: "Naraingonj, Dhaka",
       postImg: "./sugg/nirmol.png",
       caption: "Create your own sunshine on even the cloudiest days"
    },
    {
       img: "./sugg/jugol.png",
       id: "jugolroy",
       loc: "Chirirbandar, Dinajpur",
       postImg: "./sugg/jugol.png",
       caption: "Find the beauty in every moment"
    },
    { 
       img: "./sugg/resi.png",
       id: "donroy",
       loc: "Chirirbandar, Dinajpur",
       postImg: "./sugg/resi.png",
       caption: "Find the beauty in every moment"
    },
    {
       img: "./sugg/rahul.png",
       id: "rahulroynipon",
       loc: "City University, Savar, Dhaka",
       postImg: "./slider/slider3.jpg",
       caption: "Find the beauty in every moment"
    },
    {
       img: "./images/nipon.png",
       id: "rahulroynipon",
       loc: "Chirirbandar, Dinajpur",
       postImg: "./images/nipon.png",
       caption: "A great day"
    },
    
     {
        img: "./images/nipon.png",
        id: "rahulroynipon",
        loc: "Dinajpur, Rangpur",
        postImg: "./sugg/project.png",
        caption: "my small project. hope you like it."
     },
     {
        img: "./sugg/gp.jpeg",
        id: "grameenphone",
        loc: "Dinajpur, Rangpur",
        postImg: "./sugg/people.jpeg",
        caption: "মা-মেয়ের মুখে এমন ভুবন ভোলানো হাসি কেন জানেন"
     }

]

// This exports the profile data, suggested user data, post data, and story data for use in other files.
export {
    profileData,
    suggData,
    postData,
    storySore
}
