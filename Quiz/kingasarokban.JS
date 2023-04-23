// kingasarokban //
let kingasarokbanlepes = 0
function kingasarokbanVissza(){
    kingasarokbanlepes -= 1
}
function kingasarokbanTovabb(){
    kingasarokbanlepes += 1
}
function kingasarokbanMegny(){
    if (kingasarokbanlepes < 0){
        kingasarokbanlepes = 0
    }
    if (kingasarokbanlepes == 0){
        document.querySelector('#kingasarokban #a1').src = feherkiraly;    
        document.querySelector('#kingasarokban #b2').src = fehsemmi;
    }
    if (kingasarokbanlepes == 1){
        document.querySelector('#kingasarokban #a1').src = fehsemmi;    
        document.querySelector('#kingasarokban #b2').src = feherkiraly;
    }
    if (kingasarokbanlepes == 2){
        document.querySelector('#kingasarokban #b2').src = feherkiraly;    
        document.querySelector('#kingasarokban #c3').src = fehsemmi ;
    }
    if (kingasarokbanlepes == 3){
        document.querySelector('#kingasarokban #b2').src = fehsemmi;    
        document.querySelector('#kingasarokban #c3').src = feherkiraly;
    }
    if (kingasarokbanlepes == 4){
        document.querySelector('#kingasarokban #d4').src = fehsemmi;    
        document.querySelector('#kingasarokban #c3').src = feherkiraly;
    }
    if (kingasarokbanlepes == 5){
        document.querySelector('#kingasarokban #d4').src = feherkiraly;
        document.querySelector('#kingasarokban #c3').src = fehsemmi;    
    }
    if (kingasarokbanlepes == 6){
        document.querySelector('#kingasarokban #e5').src = fehsemmi;    
        document.querySelector('#kingasarokban #d4').src = feherkiraly;
    }
    if (kingasarokbanlepes == 7){
        document.querySelector('#kingasarokban #e5').src = feherkiraly;
        document.querySelector('#kingasarokban #d4').src = fehsemmi;    
    }
    if (kingasarokbanlepes == 8){
        document.querySelector('#kingasarokban f65').src = fehsemmi;    
        document.querySelector('#kingasarokban #d4').src = feherkiraly;
    }
    if (kingasarokbanlepes == 9){
        document.querySelector('#kingasarokban #f6').src = feherkiraly;
        document.querySelector('#kingasarokban #d4').src = fehsemmi;    
    }
}
function kingasarokbanValt(){
    document.getElementById('kingasarokbanszam').innerHTML = kingasarokbanlepes
}