let deadline = new Date(2025,12,4,13,59,45,25).getTime()
let x = setInterval(function(){
let current = new Date().getTime()
let left = deadline-current
let day = Math.floor(left/(1000*60*60*24))
let hour = Math.floor((left%(1000*60*60*24))/(1000*60*60))
let min = Math.floor((left%(1000*60*60))/(1000*60))
let sec = Math.floor((left%(1000*60))/(1000))
document.getElementById("times").innerHTML = day+"d "+hour+"h "+min+"m "+sec+"s " 
if(left<0){
    clearInterval(x)
    alert("countdown is completed")
    document.getElementById("times").style.display = "none"
}
},1000)