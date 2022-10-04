
/*
import { logOut } from "./index";
*/
function checkSession() {
    let session = sessionStorage.getItem("user");
    console.log(session);
    if (session != null) {
        document.getElementById("badLogin").style.display = "none";
        document.getElementById("goodLogin").style.display = "inline-block";
    } else if (session == null) {
        document.getElementById("goodLogin").style.display = "none";
        document.getElementById("badLogin").style.display = "inline-block";
    }
}
checkSession();
function logout() {
    sessionStorage.removeItem("user");
    document.getElementById("goodLogin").style.display = "none";
    document.getElementById("badLogin").style.display = "inline-block";
}

let logOutbtn = document.getElementById("logoutbtn");

logOutbtn.onclick = logout;

let loginbtnpage = document.getElementById("loginbtnpage");
function backTOlogin() {
loginbtnpage.onclick = window.location.href = "index.html";
}
loginbtnpage.onclick = backTOlogin;
