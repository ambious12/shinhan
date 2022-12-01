const mycar_btn = document.querySelector("#mycar");
const mycar_btn2 = document.querySelector(".mycar2");
const mycar_menu = document.querySelector("#mycar_menu");

function mycarHandler(e){
    console.log(e.target.id);

    if(e.target.id === "mycar"){
        mycar_menu.style.display = "block";
    }else{
        mycar_menu.style.display = "none";
    }

}


mycar_btn.addEventListener("click",mycarHandler);
mycar_btn2.addEventListener("click",mycarHandler);