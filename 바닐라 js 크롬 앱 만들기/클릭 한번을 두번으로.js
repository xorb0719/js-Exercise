const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "twofont";
    const clickedClass2 = "threefont";

    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
        h1.classList.add(clickedClass2);
    }
    else if(h1.classList.contains(clickedClass2)){
        h1.classList.remove(clickedClass2);

    }
    else{
        h1.classList.add(clickedClass);
    }
}
h1.addEventListener("click", handleTitleClick);

