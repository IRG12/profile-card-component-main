console.log("Hello World");

let dog = {
    name: "Steve",
    age: 1,
    location: "Japan",
    profileImg: "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
    bannerImg: "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
    backgroundColor: "#00FFFF",
    stats: {
        followers: "1.2M",
        likes: "8M",
        posts: "2K"
    }
}

// console.log(document.getElementById("full-name").style.color = "blue");

//Get access to your name 
// let dubbed = document.querySelector("#full-name").innerText = dog.name;
// console.log(dubbed)

//Get access to your age
// let age = document.querySelector("#text1").innerText = dog.age;
// console.log(age)
//Get access to your location
let cornfield = document.getElementById("location").innerText;
console.log(cornfield)
//Get access to your profileImg *
let cardImg = document.querySelectorAll(".circle");
console.log(cardImg)

//     console.log(cardImg)

//Get access to your bannerImg *
let topImg = document.querySelectorAll(".top");
console.log(topImg)
//Get access to your backgroundColor *
let background = document.querySelectorAll("body");
console.log(background)
//Get access to your stats *
let standings = document.querySelector(".footer");
console.log(standings)




// x = document.getElementsByTagName("*");
// l = x.length;
// for (i = 0; i < l; i++) {
//   document.write(x[i].tagName + "<br>");
// }

