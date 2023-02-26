
setTimeout("CallButton()",5000)
function CallButton()
{
   document.getElementById("skip").click();   
}

setTimeout("count1()",1000)
function count1()
{
    document.getElementById('count').innerHTML = `4`  
}

setTimeout("count2()",2000)
function count2()
{
    document.getElementById('count').innerHTML = `3`  
}

setTimeout("count3()",3000)
function count3()
{
    document.getElementById('count').innerHTML = `2`  
}

setTimeout("count4()",4000)
function count4()
{
    document.getElementById('count').innerHTML = `1`  
}

setTimeout("count5()",5000)
function count5()
{
    document.getElementById('count').innerHTML = `0`  
}

