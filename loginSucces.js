let session = sessionStorage.getItem("user");
console.log(session);
if(session != null){
    document.getElementById("badLogin").style.display = "none";
    document.getElementById("goodLogin").style.display = "inline-block";
}else if(session == null){
    document.getElementById("goodLogin").style.display = "none";
    document.getElementById("badLogin").style.display = "inline-block";
}