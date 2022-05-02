// write js code here corresponding to matches.html
var matchHome = JSON.parse(localStorage.getItem("schedule"));
display(matchHome);
function display(matchHome){
    document.querySelector("tbody").innerHTML="";
    matchHome.map(function(ele){
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      td1.innerText=ele.matchNumber;

      var td2 = document.createElement("td");
      td2.innerText=ele.teamA; 
      var td3 = document.createElement("td");  
      td3.innerText=ele.teamB;

      var td4 = document.createElement("td"); 
      td4.innerText=ele.date; 
      var td5 = document.createElement("td");  
      td5.innerText=ele.venue; 
      var td6= document.createElement("td");
      td6.innerText="Add as Favourites";
      td6.style.color="green";
      td6.style.cursor="pointer";

      td6.addEventListener("click",function(){
          change(ele);
      })

      tr.append(td1,td2,td3,td4,td5,td6);
      document.querySelector("tbody").append(tr);
    }) 

}
var arr = JSON.parse(localStorage.getItem("favourites"))|| [];
function change(ele){
   var obj = {
       matchNumber:ele.matchNumber,
       teamA:ele.teamA,
       teamB:ele.teamB,
       date:ele.date,
       venue:ele.venue,
   }
   arr.push(obj);
   localStorage.setItem("favourites",JSON.stringify(arr));

}
document.querySelector("#filterVenue").addEventListener("change",function(){
  var selected = document.querySelector("#filterVenue").value;
 var filerData =  matchHome.filter(function(ele){
      return ele.venue===selected; 
    
  })
  display(filerData);  
})