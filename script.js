console.log("Hello World");

let dog = {
    name: "Steve",
    age: 1,
    location: "Japan",
    profileImg: "url('https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80')",
    bannerImg: "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
    backgroundColor: "#00FFFF",
    stats: {
        followers: "1.2M",
        likes: "8M",
        posts: "2K"
    }
}

let cat = {
    name: "Mochi",
    age: 1,
    location: "Philippines",
    profileImg: "url('https://images.unsplash.com/photo-1621780030440-71c9ace78fa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG9yYW5nZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')",
    bannerImg: "url('https://www.teahub.io/photos/full/159-1595602_chevron-desktop-wallpapers-hd-blue-striped-wallpaper-hd.jpg')",
    backgroundColor: "#FFD580",
    stats: {
        followers: "4.5M",
        likes: "12M",
        posts: "8K"
    },

    speak() {
        return "meow meow"
    }
}




// document.getElementById("#full-name").addEventListener("click", function() {
//     document.getElementById("#full-name").style.color = "blue"
// })
//--------------------------------------------------------------------------------------

document.getElementById("change2").addEventListener("click", function changeDog() {
// Get access to your name --------------------------------------------------------------------------------------------------
document.querySelector("#full-name").innerText = dog.name;
// console.log(document.querySelector("#full-name").innerText)

//Get access to your age ---------------------------------------------------------------------------------------------
let age = document.querySelector("#text1").innerText = dog.age;
// console.log(age)
//Get access to your location ----------------------------------------------------------------------------------
let cornfield = document.getElementById("location").innerText = dog.location;
// console.log(cornfield)
//Get access to your profileImg * ----------------------------------------------------------------------------
let cardImg = document.querySelector(".circle").style.backgroundImage = dog.profileImg
// console.log(cardImg)

// //Get access to your bannerImg * -----------------------------------------------------------------------
let topImg = document.querySelector(".top").style.backgroundImage = dog.bannerImg
// console.log(topImg)
// //Get access to your backgroundColor *----------------------------------------------------------------
let background = document.querySelector("body").style.backgroundColor = dog.backgroundColor
// console.log(background)


// // //Get access to your stats * -----------------------------------------------------------
// let standings1 = document.querySelector("#currentStats1").innerText = dog.stats.followers
// // console.log(standings1)
let standings2 = document.querySelector("#currentStats2").innerText = dog.stats.likes
// console.log(standings2)
let standings3 = document.querySelector("#currentStats3").innerText = dog.stats.posts 
// console.log(standings3)

})

// console.log(document.getElementById("full-name").style.color = "blue");




// //----------------------------------------------------------------------
//I need help assigning with a "for in" loop


// for (const key in dog) {
//     if (Object.hasOwnProperty.call(dog, key)) {
//         const element = dog[key];
//         if (element === dog.stats) {
//             console.log(element)
             
                     
//                  }
//              }
//         }
    






document.getElementById("change1").addEventListener("click", function changeCat() {


     

        //     // Get access to your name --------------------------------------------------------------------------------------------------
        document.querySelector("#full-name").innerText = cat.name;
        // console.log(document.querySelector("#full-name").innerText)
        
        // //Get access to your age ---------------------------------------------------------------------------------------------
        let age = document.querySelector("#text1").innerText = cat.age;
        // console.log(age)
        // //Get access to your location ----------------------------------------------------------------------------------
        let cornfield = document.getElementById("location").innerText = cat.location;
        // console.log(cornfield)
        // //Get access to your profileImg * ----------------------------------------------------------------------------
        let cardImg = document.querySelector(".circle").style.backgroundImage = cat.profileImg
        // console.log(cardImg)
        
        // // //Get access to your bannerImg * -----------------------------------------------------------------------
        let topImg = document.querySelector(".top").style.backgroundImage = cat.bannerImg
        // console.log(topImg)
        // // //Get access to your backgroundColor *----------------------------------------------------------------
        let background = document.querySelector("body").style.backgroundColor = cat.backgroundColor
        // console.log(background)
        
        
        // // // //Get access to your stats * -----------------------------------------------------------
        let standings1 = document.querySelector("#currentStats1").innerText = cat.stats.followers
        // console.log(standings1)
        let standings2 = document.querySelector("#currentStats2").innerText = cat.stats.likes
        // console.log(standings2)
        let standings3 = document.querySelector("#currentStats3").innerText = cat.stats.posts 
        // console.log(standings3)
        
        })




