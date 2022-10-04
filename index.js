let URL_LOGIN = "http://localhost:8080/api/employees/login";

let button = document.getElementById("loginbtn");
async function login() {
    const loginInfo = {
        userName: document.getElementById("employeeuser").value,
        password: document.getElementById("userpwd").value
    }
    const opts = {}
    opts.method = "POST"
    opts.headers = { "Content-type": "application/json" }
    opts.body = JSON.stringify(loginInfo)

    await fetch(URL_LOGIN, opts).then(response => {
        if (response.status == 404) {
            if(sessionStorage.getItem("user")!== null){
                sessionStorage.removeItem("user");
            }
            window.location.href = "loginSucces.html";
            throw new Error("User not found");
        } else if (response.status == 202) {
            sessionStorage.setItem("user", "true");
            window.location.href = "loginSucces.html";
        } else if (response.status == 400) {
            if(sessionStorage.getItem("user")!== null){
                sessionStorage.removeItem("user");
            }
            window.location.href = "loginSucces.html";
            throw new Error("Incorrect password");
        }
        
    })
    /*
    console.log(document.getElementById("employeeuser").value)
    console.log(document.getElementById("userpwd").value)
    console.log(sessionStorage.getItem("user"))
    */
}
button.onclick = login;