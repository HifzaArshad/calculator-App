function get(num){
    var res=document.getElementById("field")
    res.value += num;
   
}

function cancel(num){
    var res=document.getElementById("field")
    res.value="";
}
function calculation(){
    var res=document.getElementById("field")
    res.value=eval(res.value)
}