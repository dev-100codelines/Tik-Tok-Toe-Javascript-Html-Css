var td = document.querySelectorAll("td");
var reset = document.querySelector("button");
var count=0;
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
for(var i=0; i<td.length; i++){
    td[i].addEventListener("click", function(){
        count ++; 
        if(count%2==0){
            this.textContent="0";
        }else{
            this.textContent="X";
        }
    })
}
for(var i=0;i<td.length;i++){
    td[i].addEventListener("click",function(){
        if(td[0].textContent===td[1].textContent && td[0].textContent===td[2].textContent){
            if(td[0].textContent=="X"){
                h1.classList.add("Xwin");
                h1.textContent=td[0].textContent + "WINS"
            }else{
                h1.classList.add("Owin");
                h1.textContent=td[0].textContent + "WINS"
            }
            for(var j=0; j<3; j++){
               if (td[0].textContent=="X"){
                   td[j].classList.add("xboxred");
               }else{
                td[j].classList.add("oboxred");
               }
            }
        }
        if(td[6].textContent===td[7].textContent && td[6].textContent===td[8].textContent){
            if(td[6].textContent=="X"){
                h1.classList.add("Xwin");
                h1.textContent=td[6].textContent + "WINS"
            }else{
                h1.classList.add("Owin");
                h1.textContent=td[6].textContent + "WINS"
            }
            for(var j=6; j<9; j++){
               if (td[6].textContent=="X"){
                   td[j].classList.add("xboxred");
               }else{
                td[j].classList.add("oboxred");
               }
            }
        }
        if(td[3].textContent===td[4].textContent && td[3].textContent===td[5].textContent){
            if(td[3].textContent=="X"){
                h1.classList.add("Xwin");
                h1.textContent=td[3].textContent + "WINS"
            }else{
                h1.classList.add("Owin");
                h1.textContent=td[3].textContent + "WINS"
            }
            for(var j=3; j<6; j++){
               if (td[3].textContent=="X"){
                   td[j].classList.add("xboxred");
               }else{
                td[j].classList.add("oboxred");
               }
            }
        }
        if(td[0].textContent===td[4].textContent && td[0].textContent===td[8].textContent){
            if(td[4].textContent=="X"){
                h1.classList.add("Xwin");
                h1.textContent=td[4].textContent + "WINS"
            }else{
                h1.classList.add("Owin");
                h1.textContent=td[4].textContent + "WINS"
            }
            if(td[0].textContent=="X"){
                td[0].classList.add("xboxred");
                td[4].classList.add("xboxred");
                td[8].classList.add("xboxred");
            }else{
                td[0].classList.add("oboxred");
                td[4].classList.add("oboxred");
                td[8].classList.add("oboxred");
            }
        }
        if(td[2].textContent===td[4].textContent && td[2].textContent===td[6].textContent){
            if(td[2].textContent=="X"){
                h1.classList.add("Xwin");
                h1.textContent=td[2].textContent + "WINS"
            }else{
                h1.classList.add("Owin");
                h1.textContent=td[2].textContent + "WINS"
            }
            if(td[2].textContent=="X"){
                td[2].classList.add("xboxred");
                td[4].classList.add("xboxred");
                td[6].classList.add("xboxred");
            }else{
                td[2].classList.add("oboxred");
                td[4].classList.add("oboxred");
                td[6].classList.add("oboxred");
            }
        }
        if(td[0].textContent===td[3].textContent && td[0].textContent===td[6].textContent){
            if(td[0].textContent=="X"){
                h1.classList.add("Xwin");
                h1.textContent=td[0].textContent + "WINS"
            }else{
                h1.classList.add("Owin");
                h1.textContent=td[0].textContent + "WINS"
            }
            if(td[0].textContent=="X"){
                td[0].classList.add("xboxred");
                td[3].classList.add("xboxred");
                td[6].classList.add("xboxred");
            }else{
                td[0].classList.add("oboxred");
                td[3].classList.add("oboxred");
                td[6].classList.add("oboxred");
            }
        }
        if(td[1].textContent===td[4].textContent && td[1].textContent===td[7].textContent){
            if(td[1].textContent=="X"){
                h1.classList.add("Xwin");
                h1.textContent=td[1].textContent + "WINS"
            }else{
                h1.classList.add("Owin");
                h1.textContent=td[1].textContent + "WINS"
            }
            if(td[1].textContent=="X"){
                td[1].classList.add("xboxred");
                td[4].classList.add("xboxred");
                td[7].classList.add("xboxred");
            }else{
                td[1].classList.add("oboxred");
                td[4].classList.add("oboxred");
                td[7].classList.add("oboxred");
            }
        }
        if(td[2].textContent===td[5].textContent && td[2].textContent===td[8].textContent){
            if(td[2].textContent=="X"){
                h1.classList.add("Xwin");
                h1.textContent=td[2].textContent + "WINS"
            }else{
                h1.classList.add("Owin");
                h1.textContent=td[2].textContent + "WINS"
            }
            if(td[2].textContent=="X"){
                td[2].classList.add("xboxred");
                td[5].classList.add("xboxred");
                td[8].classList.add("xboxred");
            }else{
                td[2].classList.add("oboxred");
                td[5].classList.add("oboxred");
                td[8].classList.add("oboxred");
            }
        }
    });
}