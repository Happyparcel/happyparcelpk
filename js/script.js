// ===============================
// HappyParcel.pk JavaScript
// ===============================

// Search Function

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".product-card, .category-card");

        cards.forEach(function(card){

            let text = card.innerText.toLowerCase();

            if(text.includes(filter)){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

}


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        let target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// Header Shadow on Scroll

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(header){

        if(window.scrollY > 50){

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

        }else{

            header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

        }

    }

});


console.log("HappyParcel.pk Loaded Successfully ✅");
