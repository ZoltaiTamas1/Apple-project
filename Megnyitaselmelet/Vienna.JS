// vienna //
let viennalepes = 0
function viennaVissza(){
    viennalepes -= 1
}
function viennaTovabb(){
    viennalepes += 1
}
function viennaMegny(){
    if (viennalepes < 0){
        viennalepes = 0
    }
    if (viennalepes == 0){
        document.querySelector('#vienna #e2').src = fehergyalog;    
        document.querySelector('#vienna #e4').src = feksemmi;
    }
    if (viennalepes == 1){
        document.querySelector('#vienna #e4').src = fehergyalog;    
        document.querySelector('#vienna #e2').src = feksemmi;
        document.querySelector('#vienna #e7').src = feketegyalog;    
        document.querySelector('#vienna #e5').src = fehsemmi;
    }
    if (viennalepes == 2){
        document.querySelector('#vienna #e5').src = feketegyalog;    
        document.querySelector('#vienna #e7').src = fehsemmi;
        document.querySelector('#vienna #c3').src = fehsemmi;    
        document.querySelector('#vienna #b1').src = feherhuszar;
    }
    if (viennalepes == 3){
        document.querySelector('#vienna #c3').src = feherhuszar;    
        document.querySelector('#vienna #b1').src = feksemmi;
        document.querySelector('#vienna #f6').src = fehsemmi;    
        document.querySelector('#vienna #g8').src = feketehuszar;
    }
    if (viennalepes == 4){
        document.querySelector('#vienna #f6').src = feketehuszar;    
        document.querySelector('#vienna #g8').src = feksemmi;
        document.querySelector('#vienna #f4').src = fehsemmi;    
        document.querySelector('#vienna #f2').src = fehergyalog;
    }
    if (viennalepes == 5){
        document.querySelector('#vienna #f4').src = fehergyalog;    
        document.querySelector('#vienna #f2').src = fehsemmi;
        document.querySelector('#vienna #e5').src = feketegyalog;    

    }
    if (viennalepes == 6){
        document.querySelector('#vienna #f4').src = feketegyalog;    
        document.querySelector('#vienna #e5').src = fehsemmi;
        document.querySelector('#vienna #e4').src = fehergyalog;    
        document.querySelector('#vienna #e5').src = fehsemmi;
    }
    if (viennalepes == 7){
        document.querySelector('#vienna #e5').src = fehergyalog;    
        document.querySelector('#vienna #e4').src = feksemmi;
        document.querySelector('#vienna #f6').src = feketehuszar;    
        document.querySelector('#vienna #g8').src = feksemmi;
    }
    if (viennalepes == 8){
        document.querySelector('#vienna #f6').src = fehsemmi;    
        document.querySelector('#vienna #g8').src = feketehuszar;
        document.querySelector('#vienna #d7').src = feketegyalog;
        document.querySelector('#vienna #d6').src = fehsemmi;
    }
    if (viennalepes == 9){
        document.querySelector('#vienna #d6').src = feketegyalog;
        document.querySelector('#vienna #d7').src = feksemmi;   
        document.querySelector('#vienna #d2').src = fehergyalog;    
        document.querySelector('#vienna #d4').src = fehsemmi; 
    }
    if (viennalepes == 10){
        document.querySelector('#vienna #d4').src = fehergyalog;    
        document.querySelector('#vienna #d2').src = fehsemmi;
        document.querySelector('#vienna #d6').src = feketegyalog;  
        document.querySelector('#vienna #e5').src = fehergyalog;
    }
    if (viennalepes == 11){
        document.querySelector('#vienna #e5').src = feketegyalog;    
        document.querySelector('#vienna #d6').src = fehsemmi;
        document.querySelector('#vienna #e2').src = feksemmi;    
        document.querySelector('#vienna #d1').src = feherkiralyno;
    }
    if (viennalepes == 12){
        document.querySelector('#vienna #e2').src = feherkiralyno;    
        document.querySelector('#vienna #d1').src = feksemmi;
        document.querySelector('#vienna #b4').src = fehsemmi;    
        document.querySelector('#vienna #f8').src = feketefuto;
    }
    if (viennalepes == 13){
        document.querySelector('#vienna #b4').src = feketefuto;    
        document.querySelector('#vienna #f8').src = fehsemmi;
        document.querySelector('#vienna #e2').src = feherkiralyno;    
        document.querySelector('#vienna #e5').src = feketegyalog;
    }
    if (viennalepes == 14){
        document.querySelector('#vienna #e5').src = feherkiralyno;    
        document.querySelector('#vienna #e2').src = feksemmi;
        document.querySelector('#vienna #e7').src = fehsemmi;    
        document.querySelector('#vienna #d8').src = feketekiralyno;
    }
    if (viennalepes == 15){
        document.querySelector('#vienna #d8').src = fehsemmi;    
        document.querySelector('#vienna #e7').src = feketekiralyno;
        document.querySelector('#vienna #f4').src = feketegyalog;
        document.querySelector('#vienna #c1').src = feherfuto; 
        document.querySelector('#viennaTovabb').innerHTML = "Tovább"
    }
    if (viennalepes == 16){
        document.querySelector('#vienna #f4').src = feherfuto;
        document.querySelector('#vienna #c1').src = fehsemmi;    
        document.querySelector('#viennaTovabb').innerHTML = "Vissza az elejére"
    }
    if (viennalepes == 17){
        document.querySelector('#viennaTovabb').innerHTML = "Tovább"
        document.querySelector('#vienna #a1').src = feherbastya
        document.querySelector('#vienna #b1').src = feherhuszar
        document.querySelector('#vienna #c1').src = feherfuto
        document.querySelector('#vienna #d1').src = feherkiralyno
        document.querySelector('#vienna #e1').src = feherkiraly
        document.querySelector('#vienna #f1').src = feherfuto
        document.querySelector('#vienna #g1').src = feherhuszar
        document.querySelector('#vienna #c2').src = fehergyalog
        document.querySelector('#vienna #d2').src = fehergyalog     
        document.querySelector('#vienna #e2').src = fehergyalog
        document.querySelector('#vienna #f2').src = fehergyalog
        document.querySelector('#vienna #d4').src = fehsemmi
        document.querySelector('#vienna #b4').src = fehsemmi

        document.querySelector('#vienna #b8').src = feketehuszar
        document.querySelector('#vienna #c8').src = feketefuto
        document.querySelector('#vienna #d8').src = feketekiralyno
        document.querySelector('#vienna #e8').src = feketekiraly
        document.querySelector('#vienna #f8').src = feketefuto
        document.querySelector('#vienna #g8').src = feketehuszar
        document.querySelector('#vienna #h8').src = feketebastya
        document.querySelector('#vienna #c7').src = feketegyalog
        document.querySelector('#vienna #d7').src = feketegyalog     
        document.querySelector('#vienna #e7').src = feketegyalog
        document.querySelector('#vienna #f7').src = feketegyalog
        document.querySelector('#vienna #c3').src = fehsemmi
        document.querySelector('#vienna #e3').src = fehsemmi
        document.querySelector('#vienna #f4').src = fehsemmi
        document.querySelector('#vienna #e5').src = fehsemmi
        document.querySelector('#vienna #c5').src = fehsemmi
        document.querySelector('#vienna #d3').src = feksemmi
        document.querySelector('#vienna #d5').src = feksemmi
        document.querySelector('#vienna #e6').src = feksemmi
        document.querySelector('#vienna #h7').src = feketegyalog
        document.querySelector('#vienna #h6').src = fehsemmi

        viennalepes = 0
    }
}
function viennaValt(){
    document.getElementById('viennaszam').innerHTML = viennalepes
}