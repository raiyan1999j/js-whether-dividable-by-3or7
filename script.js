function mygame(){
    var a = document.getElementById('demo').value;
    var c;
    if (a % 3==0){c="its multiple by 3";}
    else if (a % 7==0){c="its multiple by 7";}
        else{c="its neither multiple by 3 or 7";}
            document.getElementById('shadow').innerHTML=c;
}