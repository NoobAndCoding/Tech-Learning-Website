function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("contentArea").style.marginLeft = "250px"
}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0px";
    document.getElementById("contentArea").style.marginLeft = "0px"
}

function showContent(content) {
    document.getElementById("contentTitle").textContent = content + " Page";
    closeNav()
}