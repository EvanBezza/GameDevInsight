// Student: Evan Bezuidenhout
// Task: 15
// Capstone Project Final
// File: main.js


// === Variables ===
let storedItems = localStorage.getItem('save');
let saveItems;
let likedItems = [];

$(()=>{
    // =========================
    // Header Nav Menu Drop Down
    // =========================
    $("#hover").hover(function(){
        $(".navMenu").slideToggle();
    });
    


    // ===============
    // Site Animations
    // ===============
    $(".Button").fadeIn(1000);
    $(".txt").fadeIn(1000);



    // ======================
    // Hide show AI page list
    // ======================
    $("#hideShow").click(function(){
        hideAndShowList();
    })


    // ==================================
    // Site button pressing functionality
    // ==================================
    /*  This snippet checks if the visitor has run the code before if they haven't we set the local storage to an empty array, if they have
        we set the local storage to the value of the array.*/
    if (localStorage.getItem('codeRan') === null) {
        localStorage.setItem('codeRan', true)
        saveItems = []; // create array

        // Upon button being pressed call the corresponding function with an argument of the ID of the button pressed
        $(".likeBtn").click(function(){ 
            likeFunction(this.id);
        })
        $("#submitComment").click(function(){ 
            commenting();
        })
        $(".Button").click(function(){
            saveArticle(this.id);
        })
    }
    else{        
        // Set save items to save array if code had run already
        saveItems = JSON.parse(localStorage.getItem('save'));        

        $(".likeBtn").click(function(){
            likeFunction(this.id);
        })
        $("#submitComment").click(function(){ 
            commenting();
        })
        $(".Button").click(function(){
            saveArticle(this.id);
        })
    }



    // ===================================
    // FUNCTIONS -- FUNCTIONS -- FUNCTIONS
    // ===================================

    // =============
    // Like articles
    // =============
    function likeFunction(id) {
        if (likedItems.includes(id)) {
            let remove = likedItems.indexOf(id);
            likedItems.splice(remove);
            document.getElementById(id).innerHTML = "LIKE";
        }
        else{
            likedItems.push(id); 
            console.log(likedItems);
            document.getElementById(id).innerHTML = "LIKED";
        }
    } 



    // =========================
    // Slide Toggle AI page list
    // =========================
    function hideAndShowList() {
        $("#list").toggle(200);
    }



    // ==============================
    // Save Articles to Local Storage
    // ==============================
    function saveArticle(articleId) {
        if (saveItems.includes(articleId)) {
            let remove = saveItems.indexOf(articleId);
            saveItems.splice(remove);
            localStorage.setItem('save', JSON.stringify(saveItems));
            document.getElementById(articleId).innerHTML = "SAVE";
        }
        else{
            saveItems.push(articleId); 
            document.getElementById(articleId).innerHTML = "SAVED";
            localStorage.setItem('save', JSON.stringify(saveItems));
            alert(`You have ${saveItems.length} items saved for later.`);
        }
    }



    // ==============================================
    // Load saved elements into the saved items page.
    // ==============================================
    if(window.location.href.search("SaveForLater.html") != -1){
        // Call the load saved elements function
        loadSavedEl();
    }
    function loadSavedEl() {
        // for each element in the saveItems array create 2 new divs one with a class and create an a element which also has a class of Button.
        saveItems.forEach(element => {            
            let savedForLater = document.getElementById("SavedItemsContainer");

            let newDiv = document.createElement('div');
            newDiv.classList.add("ArticleContainer");

            let btnDiv = document.createElement('div');
            let btn = document.createElement('a');
            btn.classList.add("Button");

            savedForLater.appendChild(newDiv);
            // Using a switch statement to check which article snippet / heading to show on the page
            switch (element) {
                case "gameAIHome":
                    // Set the html of newDiv to some text
                    newDiv.innerHTML = `Game AI section on the home page!`
                    // Set the created a tag's innerHTML to VIEW and have the view have the href of the article they had saved.
                    btn.innerHTML = "<a href='index.html#GameAISection'>VIEW</a>";
                    // Append the buttons to their div and then break the section of code.
                    btnDiv.append(btn)
                    newDiv.append(btnDiv);
                    break;

                case "gameRenderHome":
                    newDiv.innerHTML = `Game Rendering section on the home page!`
                    btn.classList.add("Button");
                    btn.innerHTML = "<a href='index.html#GameRenderingSection'>VIEW</a>";
                    btnDiv.append(btn)
                    newDiv.append(btnDiv);
                    break;

                case "fsmDef":
                    newDiv.innerHTML = `What is a Finite State Machine?`
                    btn.classList.add("Button");
                    btn.innerHTML = "<a href='AIPage.html#Article1'>VIEW</a>";
                    btnDiv.append(btn)
                    newDiv.append(btnDiv);
                    break;

                case "fsmUses":
                    newDiv.innerHTML = `Uses for a Finite-State Machine?`
                    btn.classList.add("Button");
                    btn.innerHTML = "<a href='AIPage.html#Article2'>VIEW</a>";
                    btnDiv.append(btn)
                    newDiv.append(btnDiv);
                    break;

                case "fsmExample":
                    newDiv.innerHTML = `An example of a FSM on a Boss.`
                    btn.classList.add("Button");
                    btn.innerHTML = "<a href='AIPage.html#Article3'>VIEW</a>";
                    btnDiv.append(btn)
                    newDiv.append(btnDiv);
                    break;

                case "lodArticle":
                    newDiv.innerHTML = `Level of Detail Meshes.`
                    btn.classList.add("Button");
                    btn.innerHTML = "<a href='RenderingStyles.html#Article1'>VIEW</a>";
                    btnDiv.append(btn)
                    newDiv.append(btnDiv);
                    break;

                case "occlusionArticle":
                    newDiv.innerHTML = `Occlusion Culling.`
                    btn.classList.add("Button");
                    btn.innerHTML = "<a href='RenderingStyles.html#Article2'>VIEW</a>";
                    btnDiv.append(btn)
                    newDiv.append(btnDiv);
                    break;
                    
                default:
                    newDiv.innerHTML = `Please have a look around the site and save a few articles.`;
                    break;
            }
        });
    }



    // ===========================
    // Adding comments to the page
    // ===========================
    function commenting() {
        // Variables for comments section to get the values of user input
        let viewerName = document.getElementById('viewerName').value;
        let viewerMsg = document.getElementById('viewerComment').value;
        // if input fields aren't empty
        if (viewerName != "" && viewerMsg != "") {
            // Create a div to contain the comments
            let viewerComment = document.createElement('div');
            // Set innerHTML of div to the values of the userinput and use the "quote" tags for the name and a double dash for the comment
            viewerComment.innerHTML = `<q>${viewerName}</q><br>&mdash; <i>${viewerMsg}</i><br><br>`;
            // Append newly created div to the visitorCommentSection ID on the index.html page
            $("#visitorCommentSection").append(viewerComment);
        } 
    }
})

// References

// JSFiddle. unknown. https://jsfiddle.net/BDxUL/23/ (date accessed 01.06.2022)
// stackOverflow. unknown. Storing Variables Across Multiple Pages With localStorage?. https://stackoverflow.com/questions/41267384/storing-variables-across-multiple-pages-with-localstorage (date accessed 02.06.2022)
// Task 19
// Task 18