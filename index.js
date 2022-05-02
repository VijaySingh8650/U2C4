// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",addToLocal);
var array = JSON.parse(localStorage.getItem("schedule"))||[];
function addToLocal(){
    event.preventDefault();
    var object = {
        matchNumber:document.querySelector("#matchNum").value,
        teamA:document.querySelector("#teamA").value,
        teamB:document.querySelector("#teamB").value,
        date:document.querySelector("#date").value,
        venue:document.querySelector("#venue").value,
    }
    array.push(object);
    localStorage.setItem("schedule",JSON.stringify(array));
}