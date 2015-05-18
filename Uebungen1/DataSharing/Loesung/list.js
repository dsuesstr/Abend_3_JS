var users = sessionStorage.getItem("users");
if( !users )
{
    sessionStorage.setItem("users", JSON.stringify([]));
    var users = sessionStorage.getItem("users");
}
users = JSON.parse(users);
document.getElementById("numberOfElements").innerText = users.length;