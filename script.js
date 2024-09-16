const paragraphs = document.querySelectorAll(".interface");

document.addEventListener("scroll", function(){
    paragraphs.forEach((paragraph) => {
        if(isInView(paragraph)){
            paragraph.classList.add("interface--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && 
        rect.top < 
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}


