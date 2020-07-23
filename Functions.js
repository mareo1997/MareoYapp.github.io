// JavaScript source code

function redirect() {
    window.open("HomePage.html", "_self");
}

function Page(page) {
    if(page == 'about'){
        window.open("HomePage.html", "_self");
    } else if (page == 'resume') {
        window.open("Resume.html", "_self");
    } else if (page == 'references') {
        window.open("References.html", "_self");
    }
}