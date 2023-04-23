// London //
let Londonlepes = 0
function londonVissza(){
    Londonlepes -= 1
}
function londonTovabb(){
    Londonlepes += 1
}
function LondonValt(){
    document.getElementById('londonszam').innerHTML = Londonlepes
}
function londonMegny(){
    if (Londonlepes < 0){
        Londonlepes = 0
    }
    if (Londonlepes == 0){
        document.querySelector('#london #d4').src = fehsemmi
        document.querySelector('#london #d2').src = fehergyalog;    
    }
    if (Londonlepes == 1){
        document.querySelector('#london #d4').src = fehergyalog
        document.querySelector('#london #d2').src = fehsemmi
        document.querySelector('#london #d5').src = feksemmi
        document.querySelector('#london #d7').src = feketegyalog 
    } 
    if (Londonlepes == 2){
        document.querySelector('#london #d5').src = feketegyalog
        document.querySelector('#london #d7').src = feksemmi
        document.querySelector('#london #f4').src = fehsemmi
        document.querySelector('#london #c1').src = feherfuto
    } 
    if (Londonlepes == 3){
        document.querySelector('#london #f4').src = feherfuto
        document.querySelector('#london #c1').src = fehsemmi
        document.querySelector('#london #f6').src = fehsemmi
        document.querySelector('#london #g8').src = feketehuszar
    } 
    if (Londonlepes == 4){
        document.querySelector('#london #f6').src = feketehuszar
        document.querySelector('#london #g8').src = feksemmi
        document.querySelector('#london #e3').src = fehsemmi
        document.querySelector('#london #e2').src = fehergyalog
    } 
    if (Londonlepes == 5){
        document.querySelector('#london #e3').src = fehergyalog
        document.querySelector('#london #e2').src = feksemmi
        document.querySelector('#london #c5').src = fehsemmi
        document.querySelector('#london #c7').src = feketegyalog
    } 
    if (Londonlepes == 6){
        document.querySelector('#london #c5').src = feketegyalog
        document.querySelector('#london #c7').src = fehsemmi
        document.querySelector('#london #f3').src = feksemmi
        document.querySelector('#london #g1').src = feherhuszar
    } 
    if (Londonlepes == 7){
        document.querySelector('#london #f3').src = feherhuszar
        document.querySelector('#london #g1').src = fehsemmi
        document.querySelector('#london #b8').src = feketehuszar
        document.querySelector('#london #c6').src = feksemmi
    } 
    if (Londonlepes == 8){
        document.querySelector('#london #b8').src = fehsemmi
        document.querySelector('#london #c6').src = feketehuszar   
        document.querySelector('#london #d2').src = fehsemmi
        document.querySelector('#london #b1').src = feherhuszar
    } 
    if (Londonlepes == 9){
        document.querySelector('#london #d2').src = feherhuszar
        document.querySelector('#london #b1').src = feksemmi
        document.querySelector('#london #e6').src = feksemmi
        document.querySelector('#london #e7').src = feketegyalog 
    } 
    if (Londonlepes == 10){
        document.querySelector('#london #e6').src = feketegyalog
        document.querySelector('#london #e7').src = fehsemmi
        document.querySelector('#london #c2').src = fehergyalog
        document.querySelector('#london #c3').src = fehsemmi
    }    
    if (Londonlepes == 11){
        document.querySelector('#london #c3').src = fehergyalog
        document.querySelector('#london #c2').src = feksemmi
        document.querySelector('#london #e7').src = fehsemmi
        document.querySelector('#london #f8').src = feketefuto 
    }    
    if (Londonlepes == 12){
        document.querySelector('#london #e7').src = feketefuto
        document.querySelector('#london #f8').src = fehsemmi
        document.querySelector('#london #d3').src = feksemmi
        document.querySelector('#london #f1').src = feherfuto 
    }    
    if (Londonlepes == 13){
        document.querySelector('#london #d3').src = feherfuto
        document.querySelector('#london #f1').src = feksemmi

        document.querySelector('#london #g8').src = feksemmi
        document.querySelector('#london #e8').src = feketekiraly
        document.querySelector('#london #h8').src = feketebastya
        document.querySelector('#london #f8').src = fehsemmi
    }    
    if (Londonlepes == 14){
        document.querySelector('#london #e8').src = feksemmi
        document.querySelector('#london #g8').src = feketekiraly
        document.querySelector('#london #f8').src = feketebastya
        document.querySelector('#london #h8').src = fehsemmi
        document.querySelector('#london #f3').src = feherhuszar
        document.querySelector('#london #e5').src = fehsemmi
    }    
    if (Londonlepes == 15){
        document.querySelector('#london #e5').src = feherhuszar
        document.querySelector('#london #f3').src = feksemmi
        document.querySelector('#london #c6').src = feketehuszar
    }    
    if (Londonlepes == 16){
        document.querySelector('#london #c6').src = feksemmi
        document.querySelector('#london #e5').src = fehsemmi
        document.querySelector('#london #e5').src = feketehuszar
        document.querySelector('#london #d4').src = fehergyalog
    }    
    if (Londonlepes == 17){
        document.querySelector('#london #e5').src = fehergyalog
        document.querySelector('#london #d4').src = fehsemmi
        document.querySelector('#london #d7').src = feksemmi
        document.querySelector('#london #f6').src = feketehuszar
    }
    if (Londonlepes == 18){
        document.querySelector('#london #d7').src = feketehuszar
        document.querySelector('#london #f6').src = fehsemmi
        document.querySelector('#london #c2').src = feksemmi
        document.querySelector('#london #d1').src = feherkiralyno
    }
    if (Londonlepes == 19){
        document.querySelector('#london #c2').src = feherkiralyno
        document.querySelector('#london #d1').src = feksemmi
        document.querySelector('#london #h7').src = feketegyalog
        document.querySelector('#london #h6').src = feksemmi
    }
    if (Londonlepes == 20){
        document.querySelector('#london #h7').src = feksemmi
        document.querySelector('#london #h6').src = feketegyalog

        document.querySelector('#london #e1').src = feherkiraly
        document.querySelector('#london #c1').src = fehsemmi
        document.querySelector('#london #a1').src = feherbastya
        document.querySelector('#london #d1').src = feksemmi
        document.querySelector('#londonTovabb').innerHTML = "Tovább"
    }
    if (Londonlepes == 21){
        document.querySelector('#london #e1').src = fehsemmi
        document.querySelector('#london #c1').src = feherkiraly
        document.querySelector('#london #a1').src = fehsemmi
        document.querySelector('#london #d1').src = feherbastya
        document.querySelector('#londonTovabb').innerHTML = "Vissza az elejére"

    }
    if (Londonlepes == 22){
        document.querySelector('#londonTovabb').innerHTML = "Tovább"
        document.querySelector('#london #a1').src = feherbastya
        document.querySelector('#london #b1').src = feherhuszar
        document.querySelector('#london #c1').src = feherfuto
        document.querySelector('#london #d1').src = feherkiralyno
        document.querySelector('#london #e1').src = feherkiraly
        document.querySelector('#london #f1').src = feherfuto
        document.querySelector('#london #g1').src = feherhuszar
        document.querySelector('#london #c2').src = fehergyalog
        document.querySelector('#london #d2').src = fehergyalog     
        document.querySelector('#london #e2').src = fehergyalog

        document.querySelector('#london #b8').src = feketehuszar
        document.querySelector('#london #c8').src = feketefuto
        document.querySelector('#london #d8').src = feketekiralyno
        document.querySelector('#london #e8').src = feketekiraly
        document.querySelector('#london #f8').src = feketefuto
        document.querySelector('#london #g8').src = feketehuszar
        document.querySelector('#london #h8').src = feketebastya
        document.querySelector('#london #c7').src = feketegyalog
        document.querySelector('#london #d7').src = feketegyalog     
        document.querySelector('#london #e7').src = feketegyalog
        document.querySelector('#london #c3').src = fehsemmi
        document.querySelector('#london #e3').src = fehsemmi
        document.querySelector('#london #f4').src = fehsemmi
        document.querySelector('#london #e5').src = fehsemmi
        document.querySelector('#london #c5').src = fehsemmi
        document.querySelector('#london #d3').src = feksemmi
        document.querySelector('#london #d5').src = feksemmi
        document.querySelector('#london #e6').src = feksemmi
        document.querySelector('#london #h7').src = feketegyalog
        document.querySelector('#london #h6').src = feksemmi

        Londonlepes = 0
    }
}