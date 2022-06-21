// Student: Evan Bezuidenhout
// Task: 15
// Capstone Project Final
// File: main.js

// === Variables ===


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