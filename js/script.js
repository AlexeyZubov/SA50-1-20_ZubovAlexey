function anime(){
    let elem = document.getElementById("cube");
    let pos = 0;
    let top = 0;
    let time = setInterval (frame, 2);
    function frame(){
        if(pos==0 && top==0){
        speed_left = 10;
        speed_top = 0;
        }else if(pos==600 && top==0){
        speed_left = 0;
        speed_top = 10;
        }else if(pos==600 && top==600){
        speed_left = -10;
        speed_top = 0;
        }else if(pos==0 && top==600){
        speed_left = 0;
        speed_top = -10;
        }
        top=top+speed_top;
        elem.style.top = top + "px";
        pos=pos+speed_left;
        elem.style.left = pos + "px";
        }
    }