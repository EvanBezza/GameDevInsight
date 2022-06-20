// Student: Evan Bezuidenhout
// Task: 15
// Capstone Project Final
// File: main.js

// {/* <script> src = "saveElements"</script> */}

// === Variables ===
// let elementsArr = [];


// let savedItems = document.getElementById("selectedItems");

$(function(){
    // Heade Nav Menu Drop Down
    $("#hover").hover(function(){
        $(".navMenu").slideToggle();
    });
    
    // Site Animations
    $(".Button").fadeIn(1000);
    $(".txt").fadeIn(1000);
})

// Hide and show list on AI page
function hideAndShowList() {
    $("#list").toggle(200);
}



// Set an empty array
// Create a function to click and save elements to array
// If local storage is empty, call the click function



let selectedItems = [];
const stored = localStorage.setItem("saved", JSON.stringify(selectedItems));
// The globally accessible array to momentarily hold the ID's of each selected section in my entire site.
let testArr = ["Test"]; // This will pull through on every page because it is manually set in the JS file already


if (stored === null) {
    
}

$(()=>{
    if (stored === null) {
        selectedItems = [];
        $("section").click(function(){
            // selectedItems = JSON.parse(localStorage.getItem("saved"));
            selectedItems = localStorage.getItem("saved");
            selectedItems.push(this.id); // Push the selected sections ID to the selectedItems array
            
            console.log(selectedItems);
        })
    } else{
        console.log("bruh");
    }
})


// $(()=>{ // Document ready JQUERY function
//     if (localStorage.getItem("CodeHadRun") == null) {
//         // localStorage.setItem("saved", JSON.stringify(selectedItems));
//         // selectedItems.push(localStorage.getItem("saved"));
//         // localStorage.setItem("saved", JSON.stringify(selectedItems));
//         localStorage.setItem("CodeHadRun", true);
//         // console.log("has not run");
//         // selectedItems = localStorage.getItem("saved"); // Selection function for if a user clicks on anything in the html document that is a section
//     }else{
//         $("section").click(function(){
//             selectedItems = JSON.parse(localStorage.getItem("saved"));
//             selectedItems.push(this.id); // Push the selected sections ID to the selectedItems array
//             localStorage.setItem("saved", JSON.stringify(selectedItems));
//             console.log(selectedItems);
//         })
//     }
//     // $("button").click(function(){
//     //         alert(localStorage.getItem("SavedElements")); // This button is on another page and send an alert of the local storage incase it actually works for quicker testing.
//     //     })
//     })

// What I suspect is wrong is that each time a page loads, the JQUERY document ready function fires and resets the local storage to an empty array. which is why nothing is pulling through.
// If that is indeed the cae, please provide me with a solution that may work.
// This copde snippet is strictly for testing how I can get it to work, quite frustrating being stuck on something like this.



















// let elementsArr = []
    
// function savingToLocal(selectedElement) {
//     let temp = [];
//     temp = localStorage.getItem("saveElements");
//     console.log(selectedElement);
//     localStorage.setItem("saveElements", JSON.stringify(elementsArr));
//     elementsArr.push(selectedElement);
//     console.log(elementsArr);
//     console.log(temp);
// }

// function HomePageTest() {
//     elementsArr = JSON.parse(localStorage.getItem("saveElements"));
//     elementsArr.push("Home Page");
//     localStorage.setItem("saveElements", JSON.stringify(elementsArr));
//     console.log(`Array = ${elementsArr}`);
//     console.log(localStorage);
// }

// function AIPageTest() {
//     elementsArr.push("AI Page");
//     localStorage.setItem("saveElements", JSON.stringify(elementsArr));
// }

// function RenderingPageTest() {
//     elementsArr.push("Rendering Page");
//     localStorage.setItem("saveElements", JSON.stringify(elementsArr));
// }

// === Saving Elements from pages ===
