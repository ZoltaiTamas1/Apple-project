// friedLiver //
let friedLiverlepes = 0
function friedLiverVissza(){
    friedLiverlepes -= 1
}
function friedLiverTovabb(){
    friedLiverlepes += 1
}
function friedLiverMegny(){
    if (friedLiverlepes < 0){
        friedLiverlepes = 0
    }
    if (friedLiverlepes == 0){
        document.querySelector('#friedLiver #e2').src = fehergyalog;    
        document.querySelector('#friedLiver #e4').src = feksemmi;
    }
    if (friedLiverlepes == 1){
        document.querySelector('#friedLiver #e4').src = fehergyalog;    
        document.querySelector('#friedLiver #e2').src = feksemmi;
        document.querySelector('#friedLiver #e7').src = feketegyalog;    
        document.querySelector('#friedLiver #e5').src = fehsemmi;
    }
    if (friedLiverlepes == 2){
        document.querySelector('#friedLiver #e5').src = feketegyalog;    
        document.querySelector('#friedLiver #e7').src = fehsemmi;
        document.querySelector('#friedLiver #f3').src = feksemmi;    
        document.querySelector('#friedLiver #g1').src = feherhuszar;
    }
    if (friedLiverlepes == 3){
        document.querySelector('#friedLiver #f3').src = feherhuszar;    
        document.querySelector('#friedLiver #g1').src = fehsemmi;
        document.querySelector('#friedLiver #c6').src = feksemmi;    
        document.querySelector('#friedLiver #b8').src = feketehuszar;
    }
    if (friedLiverlepes == 4){
        document.querySelector('#friedLiver #c6').src = feketehuszar;    
        document.querySelector('#friedLiver #b8').src = fehsemmi;
        document.querySelector('#friedLiver #c4').src = feksemmi;    
        document.querySelector('#friedLiver #f1').src = feherfuto;
    }
    if (friedLiverlepes == 5){
        document.querySelector('#friedLiver #c4').src = feherfuto;    
        document.querySelector('#friedLiver #f1').src = feksemmi;
        document.querySelector('#friedLiver #f6').src = fehsemmi;    
        document.querySelector('#friedLiver #g8').src = feketehuszar;
    }
    if (friedLiverlepes == 6){
        document.querySelector('#friedLiver #f6').src = feketehuszar;    
        document.querySelector('#friedLiver #g8').src = feksemmi;
        document.querySelector('#friedLiver #f3').src = feherhuszar;    
        document.querySelector('#friedLiver #g5').src = fehsemmi;
    }
    if (friedLiverlepes == 7){
        document.querySelector('#friedLiver #g5').src = feherhuszar;    
        document.querySelector('#friedLiver #f3').src = feksemmi;
    }
    if(friedLiverlepes == 7){
        document.querySelector('#friedLiver #d7').src = feketegyalog;    
        document.querySelector('#friedLiver #d5').src = feksemmi;
    }
    if(friedLiverlepes == 8){
        document.querySelector('#friedLiver #d5').src = feketegyalog;    
        document.querySelector('#friedLiver #d7').src = feksemmi;
        document.querySelector('#friedLiver #e4').src = fehergyalog;
    }
    if(friedLiverlepes == 9){
        document.querySelector('#friedLiver #d5').src = fehergyalog;    
        document.querySelector('#friedLiver #e4').src = feksemmi;
        document.querySelector('#friedLiver #f6').src = feketehuszar;

    }
    if (document.getElementById('friedLiverlinekulonvalaszto').value == 'eloreAKiralyt'){
          
        if(friedLiverlepes == 9){
            document.querySelector('#friedLiver #f6').src = feketehuszar;
        }
        if(friedLiverlepes == 10){
            document.querySelector('#friedLiver #d5').src = feketehuszar;    
            document.querySelector('#friedLiver #f6').src = fehsemmi;
            document.querySelector('#friedLiver #g5').src = feherhuszar;  
            document.querySelector('#friedLiver #f7').src = feketegyalog;
        }
        if(friedLiverlepes == 11){
            document.querySelector('#friedLiver #f7').src = feherhuszar;
            document.querySelector('#friedLiver #g5').src = fehsemmi;  
            document.querySelector('#friedLiver #e8').src = feketekiraly;

        }
        if(friedLiverlepes == 12){
            document.querySelector('#friedLiver #f7').src = feketekiraly;
            document.querySelector('#friedLiver #e8').src = feksemmi;    
            document.querySelector('#friedLiver #d1').src = feherkiralyno;
            document.querySelector('#friedLiver #f3').src = feksemmi; 
        }
        if(friedLiverlepes == 13){
            document.querySelector('#friedLiver #f3').src = feherkiralyno;
            document.querySelector('#friedLiver #d1').src = feksemmi;    
            document.querySelector('#friedLiver #e6').src = feksemmi;
            document.querySelector('#friedLiver #f7').src = feketekiraly; 
        }
        if(friedLiverlepes == 14){
            document.querySelector('#friedLiver #e6').src = feketekiraly;
            document.querySelector('#friedLiver #f7').src = feksemmi;    
            document.querySelector('#friedLiver #c3').src = fehsemmi;
            document.querySelector('#friedLiver #b1').src = feherhuszar;  
        }
        if(friedLiverlepes == 15){
            document.querySelector('#friedLiver #c3').src = feherhuszar;
            document.querySelector('#friedLiver #b1').src = feksemmi; 
            document.querySelector('#friedLiver #b4').src = fehsemmi;
            document.querySelector('#friedLiver #c6').src = feketehuszar;   
        }
        if(friedLiverlepes == 16){
            document.querySelector('#friedLiver #b4').src = feketehuszar;
            document.querySelector('#friedLiver #c6').src = feksemmi;    

            document.querySelector('#friedLiver #g1').src = fehsemmi;
            document.querySelector('#friedLiver #e1').src = feherkiraly;  
            document.querySelector('#friedLiver #f1').src = feksemmi;
            document.querySelector('#friedLiver #h1').src = feherbastya;  
        }
        if(friedLiverlepes == 17){
            document.querySelector('#friedLiver #g1').src = feherkiraly;
            document.querySelector('#friedLiver #e1').src = fehsemmi;    
            document.querySelector('#friedLiver #h1').src = feksemmi;
            document.querySelector('#friedLiver #f1').src = feherbastya; 

            document.querySelector('#friedLiver #c6').src = feksemmi;
            document.querySelector('#friedLiver #c7').src = feketegyalog; 
            document.querySelector('#friedLiverTovabb').innerHTML = "Tovább"

        }
        if(friedLiverlepes == 18){
            document.querySelector('#friedLiver #c6').src = feketegyalog;
            document.querySelector('#friedLiver #c7').src = fehsemmi; 
            document.querySelector('#friedLiverTovabb').innerHTML = "Vissza az elejére"
        }
        if(friedLiverlepes == 19){
            friedLiverlepes = 0
            document.querySelector('#friedLiverTovabb').innerHTML = "Tovább"
            document.querySelector('#friedLiver #a1').src = feherbastya
            document.querySelector('#friedLiver #b1').src = feherhuszar
            document.querySelector('#friedLiver #c1').src = feherfuto
            document.querySelector('#friedLiver #d1').src = feherkiralyno
            document.querySelector('#friedLiver #e1').src = feherkiraly
            document.querySelector('#friedLiver #f1').src = feherfuto
            document.querySelector('#friedLiver #h1').src = feherbastya
            document.querySelector('#friedLiver #g1').src = feherhuszar
            document.querySelector('#friedLiver #c2').src = fehergyalog
            document.querySelector('#friedLiver #d2').src = fehergyalog     
            document.querySelector('#friedLiver #e2').src = fehergyalog
            document.querySelector('#friedLiver #f2').src = fehergyalog
            document.querySelector('#friedLiver #d4').src = fehsemmi
            document.querySelector('#friedLiver #b4').src = fehsemmi
            document.querySelector('#friedLiver #c4').src = feksemmi
            document.querySelector('#friedLiver #f3').src = feksemmi

            document.querySelector('#friedLiver #b8').src = feketehuszar
            document.querySelector('#friedLiver #c8').src = feketefuto
            document.querySelector('#friedLiver #d8').src = feketekiralyno
            document.querySelector('#friedLiver #e8').src = feketekiraly
            document.querySelector('#friedLiver #f8').src = feketefuto
            document.querySelector('#friedLiver #g8').src = feketehuszar
            document.querySelector('#friedLiver #h8').src = feketebastya
            document.querySelector('#friedLiver #c7').src = feketegyalog
            document.querySelector('#friedLiver #d7').src = feketegyalog     
            document.querySelector('#friedLiver #e7').src = feketegyalog
            document.querySelector('#friedLiver #h7').src = feketegyalog
            document.querySelector('#friedLiver #f7').src = feketegyalog
            document.querySelector('#friedLiver #c3').src = fehsemmi
            document.querySelector('#friedLiver #e3').src = fehsemmi
            document.querySelector('#friedLiver #f4').src = fehsemmi
            document.querySelector('#friedLiver #e5').src = fehsemmi
            document.querySelector('#friedLiver #c5').src = fehsemmi
            document.querySelector('#friedLiver #d3').src = feksemmi
            document.querySelector('#friedLiver #d5').src = feksemmi
            document.querySelector('#friedLiver #e6').src = feksemmi
            document.querySelector('#friedLiver #h6').src = fehsemmi
            document.querySelector('#friedLiver #c6').src = feksemmi
        }
    }
        if (document.getElementById('friedLiverlinekulonvalaszto').value == 'gyalogaldozat'){
            
            if(friedLiverlepes == 9){
                document.querySelector('#friedLiver #b7').src = feketegyalog;
                document.querySelector('#friedLiver #b5').src = feksemmi; 
            }
            if(friedLiverlepes == 10){
                document.querySelector('#friedLiver #b5').src = feketegyalog;
                document.querySelector('#friedLiver #b7').src = feksemmi; 
                document.querySelector('#friedLiver #f1').src = feksemmi;
                document.querySelector('#friedLiver #c4').src = feherfuto;  
            }
            if(friedLiverlepes == 11){
                document.querySelector('#friedLiver #f1').src = feherfuto;
                document.querySelector('#friedLiver #c4').src = feksemmi; 
                document.querySelector('#friedLiver #d4').src = fehsemmi; 
                document.querySelector('#friedLiver #c6').src = feketehuszar;
            } 
            if(friedLiverlepes == 12){
                document.querySelector('#friedLiver #d4').src = feketehuszar; 
                document.querySelector('#friedLiver #c6').src = feksemmi;
                document.querySelector('#friedLiver #c3').src = fehsemmi;
                document.querySelector('#friedLiver #c2').src = fehergyalog;
            } 
            if(friedLiverlepes == 13){
                document.querySelector('#friedLiver #c3').src = fehergyalog;
                document.querySelector('#friedLiver #c2').src = feksemmi;
                document.querySelector('#friedLiver #d5').src = fehergyalog;
                document.querySelector('#friedLiver #f6').src = feketehuszar;  
            } 
            if(friedLiverlepes == 14){
                document.querySelector('#friedLiver #d5').src = feketehuszar;
                document.querySelector('#friedLiver #f6').src = fehsemmi; 
                document.querySelector('#friedLiver #d4').src = feketehuszar;
                document.querySelector('#friedLiver #c3').src = fehergyalog; 
            } 
            if(friedLiverlepes == 15){
                document.querySelector('#friedLiver #d4').src = fehergyalog;
                document.querySelector('#friedLiver #c3').src = fehsemmi; 
                document.querySelector('#friedLiver #g5').src = feherhuszar;
                document.querySelector('#friedLiver #d8').src = feketekiralyno;
            } 
            if(friedLiverlepes == 16){
                document.querySelector('#friedLiver #g5').src = feketekiralyno;
                document.querySelector('#friedLiver #d8').src = fehsemmi; 
                document.querySelector('#friedLiver #b5').src = feketegyalog;
                document.querySelector('#friedLiver #f1').src = feherfuto; 
            }
            if(friedLiverlepes == 17){
                document.querySelector('#friedLiver #b5').src = feherfuto;
                document.querySelector('#friedLiver #f1').src = feksemmi; 
                document.querySelector('#friedLiver #d8').src = fehsemmi;
                document.querySelector('#friedLiver #e8').src = feketekiraly; 
            }
            if(friedLiverlepes == 18){
                document.querySelector('#friedLiver #d8').src = feketekiraly;
                document.querySelector('#friedLiver #e8').src = feksemmi; 

                document.querySelector('#friedLiver #e1').src = feherkiraly;
                document.querySelector('#friedLiver #g1').src = fehsemmi;    
                document.querySelector('#friedLiver #f1').src = feksemmi;
                document.querySelector('#friedLiver #h1').src = feherbastya;
            } 
            if(friedLiverlepes == 19){
                document.querySelector('#friedLiver #g1').src = feherkiraly;
                document.querySelector('#friedLiver #e1').src = fehsemmi;    
                document.querySelector('#friedLiver #h1').src = feksemmi;
                document.querySelector('#friedLiver #f1').src = feherbastya;

                document.querySelector('#friedLiver #c8').src = feketefuto;
                document.querySelector('#friedLiver #b7').src = feksemmi;
            } 
            if(friedLiverlepes == 20){
                document.querySelector('#friedLiver #b7').src = feketefuto;
                document.querySelector('#friedLiver #c8').src = feksemmi;
                document.querySelector('#friedLiver #f3').src = feksemmi;
                document.querySelector('#friedLiver #d1').src = feherkiralyno;
            } 
            if(friedLiverlepes == 21){
                document.querySelector('#friedLiver #f3').src = feherkiralyno;
                document.querySelector('#friedLiver #d1').src = feksemmi;
                document.querySelector('#friedLiver #a8').src = feketebastya;
                document.querySelector('#friedLiver #b8').src = fehsemmi;
            }
            if(friedLiverlepes == 22){
                document.querySelector('#friedLiver #a8').src = feksemmi;
                document.querySelector('#friedLiver #b8').src = feketebastya;
                document.querySelector('#friedLiver #d4').src = fehergyalog;
                document.querySelector('#friedLiver #e5').src = feketegyalog;
            }
            if(friedLiverlepes == 23){
                document.querySelector('#friedLiver #d4').src = fehsemmi;
                document.querySelector('#friedLiver #e5').src = fehergyalog;
                document.querySelector('#friedLiver #d5').src = feketehuszar;
                document.querySelector('#friedLiver #e3').src = fehsemmi;
            } 
            if(friedLiverlepes == 24){
                document.querySelector('#friedLiver #d5').src = feksemmi;
                document.querySelector('#friedLiver #e3').src = feketehuszar;
                document.querySelector('#friedLiver #f3').src = feherkiralyno;
                document.querySelector('#friedLiver #h3').src = feksemmi;
            } 
            if(friedLiverlepes == 25){
                document.querySelector('#friedLiver #f3').src = feksemmi;
                document.querySelector('#friedLiver #h3').src = feherkiralyno;
                document.querySelector('#friedLiver #g2').src = fehergyalog;
                document.querySelector('#friedLiver #g5').src = feketekiralyno;
            }
            if(friedLiverlepes == 26){
                document.querySelector('#friedLiver #g2').src = feketekiralyno;
                document.querySelector('#friedLiver #g5').src = fehsemmi;
                document.querySelector('#friedLiver #h3').src = feherkiralyno;
            } 
            if(friedLiverlepes == 27){
                document.querySelector('#friedLiver #g2').src = feherkiralyno;
                document.querySelector('#friedLiver #h3').src = feksemmi;
                document.querySelector('#friedLiver #e3').src = feketehuszar;
            } 
            if(friedLiverlepes == 28){
                document.querySelector('#friedLiver #g2').src = feketehuszar;
                document.querySelector('#friedLiver #e3').src = fehsemmi;
                document.querySelector('#friedLiver #d4').src = fehsemmi;
                document.querySelector('#friedLiver #d2').src = fehergyalog;
                document.querySelector('#friedLiverTovabb').innerHTML = "Tovább"
            } 
            if(friedLiverlepes == 29){
                document.querySelector('#friedLiver #d4').src = fehergyalog;
                document.querySelector('#friedLiver #d2').src = fehsemmi;
                document.querySelector('#friedLiverTovabb').innerHTML = "Vissza az elejére"
            }
            if(friedLiverlepes == 30){
                friedLiverlepes = 0
                document.querySelector('#friedLiverTovabb').innerHTML = "Tovább"
                document.querySelector('#friedLiver #a1').src = feherbastya
                document.querySelector('#friedLiver #b1').src = feherhuszar
                document.querySelector('#friedLiver #c1').src = feherfuto
                document.querySelector('#friedLiver #d1').src = feherkiralyno
                document.querySelector('#friedLiver #e1').src = feherkiraly
                document.querySelector('#friedLiver #f1').src = feherfuto
                document.querySelector('#friedLiver #g1').src = feherhuszar
                document.querySelector('#friedLiver #h1').src = feherbastya
                document.querySelector('#friedLiver #a2').src = fehergyalog
                document.querySelector('#friedLiver #b2').src = fehergyalog
                document.querySelector('#friedLiver #c2').src = fehergyalog
                document.querySelector('#friedLiver #d2').src = fehergyalog     
                document.querySelector('#friedLiver #e2').src = fehergyalog
                document.querySelector('#friedLiver #f2').src = fehergyalog
                document.querySelector('#friedLiver #g2').src = fehergyalog
                document.querySelector('#friedLiver #h2').src = fehergyalog
                document.querySelector('#friedLiver #d4').src = fehsemmi
                document.querySelector('#friedLiver #b4').src = fehsemmi
                document.querySelector('#friedLiver #c4').src = feksemmi
                document.querySelector('#friedLiver #f3').src = feksemmi
                document.querySelector('#friedLiver #b5').src = feksemmi

    
                document.querySelector('#friedLiver #a8').src = feketebastya
                document.querySelector('#friedLiver #b8').src = feketehuszar
                document.querySelector('#friedLiver #c8').src = feketefuto
                document.querySelector('#friedLiver #d8').src = feketekiralyno
                document.querySelector('#friedLiver #e8').src = feketekiraly
                document.querySelector('#friedLiver #f8').src = feketefuto
                document.querySelector('#friedLiver #g8').src = feketehuszar
                document.querySelector('#friedLiver #h8').src = feketebastya
                document.querySelector('#friedLiver #c7').src = feketegyalog
                document.querySelector('#friedLiver #a7').src = feketegyalog
                document.querySelector('#friedLiver #b7').src = feketegyalog
                document.querySelector('#friedLiver #c7').src = feketegyalog
                document.querySelector('#friedLiver #d7').src = feketegyalog     
                document.querySelector('#friedLiver #e7').src = feketegyalog
                document.querySelector('#friedLiver #f7').src = feketegyalog
                document.querySelector('#friedLiver #g7').src = feketegyalog
                document.querySelector('#friedLiver #h7').src = feketegyalog
                document.querySelector('#friedLiver #c3').src = fehsemmi
                document.querySelector('#friedLiver #e3').src = fehsemmi
                document.querySelector('#friedLiver #f4').src = fehsemmi
                document.querySelector('#friedLiver #e5').src = fehsemmi
                document.querySelector('#friedLiver #c5').src = fehsemmi
                document.querySelector('#friedLiver #d3').src = feksemmi
                document.querySelector('#friedLiver #d5').src = feksemmi
                document.querySelector('#friedLiver #e6').src = feksemmi
                document.querySelector('#friedLiver #h6').src = fehsemmi
                document.querySelector('#friedLiver #c6').src = feksemmi
            } 
        }
        if (document.getElementById('friedLiverlinekulonvalaszto').value == 'fovonal'){
            if(friedLiverlepes == 9){
                document.querySelector('#friedLiver #a5').src = fehsemmi;
                document.querySelector('#friedLiver #c6').src = feketehuszar;
            }
            if(friedLiverlepes == 10){
                document.querySelector('#friedLiver #a5').src = feketehuszar;
                document.querySelector('#friedLiver #c6').src = feksemmi;
                document.querySelector('#friedLiver #b5').src = feksemmi;
                document.querySelector('#friedLiver #c4').src = feherfuto;
            }
            if(friedLiverlepes == 11){
                document.querySelector('#friedLiver #b5').src = feherfuto;
                document.querySelector('#friedLiver #c4').src = feksemmi;
                document.querySelector('#friedLiver #c7').src = feketegyalog;
                document.querySelector('#friedLiver #c6').src = feksemmi;
            }
            if(friedLiverlepes == 12){
                document.querySelector('#friedLiver #c6').src = feketegyalog;
                document.querySelector('#friedLiver #c7').src = fehsemmi;
                document.querySelector('#friedLiver #d5').src = fehergyalog;
            }
            if(friedLiverlepes == 13){
                document.querySelector('#friedLiver #c6').src = fehergyalog;
                document.querySelector('#friedLiver #d5').src = feksemmi;
                document.querySelector('#friedLiver #b7').src = feketegyalog;
            }
            if(friedLiverlepes == 14){
                document.querySelector('#friedLiver #c6').src = feketegyalog;
                document.querySelector('#friedLiver #b7').src = feksemmi;
                document.querySelector('#friedLiver #d3').src = feksemmi;
                document.querySelector('#friedLiver #b5').src = feherfuto;
            }
            if(friedLiverlepes == 15){
                document.querySelector('#friedLiver #d3').src = feherfuto;
                document.querySelector('#friedLiver #b5').src = feksemmi;
                document.querySelector('#friedLiver #d5').src = feksemmi;
                document.querySelector('#friedLiver #f6').src = feketehuszar;
            }
            if(friedLiverlepes == 16){
                document.querySelector('#friedLiver #d5').src = feketehuszar;
                document.querySelector('#friedLiver #f6').src = fehsemmi;
                document.querySelector('#friedLiver #f3').src = feksemmi;
                document.querySelector('#friedLiver #g5').src = feherhuszar;
            }
            if(friedLiverlepes == 17){
                document.querySelector('#friedLiver #f3').src = feherhuszar;
                document.querySelector('#friedLiver #g5').src = fehsemmi;
                document.querySelector('#friedLiver #d6').src = fehsemmi;
                document.querySelector('#friedLiver #f8').src = feketefuto;
            }
            if(friedLiverlepes == 18){
                document.querySelector('#friedLiver #d6').src = feketefuto;
                document.querySelector('#friedLiver #f8').src = fehsemmi;
                
                document.querySelector('#friedLiver #e1').src = feherkiraly;
                document.querySelector('#friedLiver #g1').src = fehsemmi;    
                document.querySelector('#friedLiver #f1').src = feksemmi;
                document.querySelector('#friedLiver #h1').src = feherbastya;
            } 
            if(friedLiverlepes == 19){
                document.querySelector('#friedLiver #g1').src = feherkiraly;
                document.querySelector('#friedLiver #e1').src = fehsemmi;    
                document.querySelector('#friedLiver #h1').src = feksemmi;
                document.querySelector('#friedLiver #f1').src = feherbastya;

                document.querySelector('#friedLiver #e8').src = feketekiraly;
                document.querySelector('#friedLiver #g8').src = feksemmi;    
                document.querySelector('#friedLiver #f8').src = fehsemmi;
                document.querySelector('#friedLiver #h8').src = feketebastya;
                document.querySelector('#friedLiverTovabb').innerHTML = "Tovább"
            }
            if(friedLiverlepes == 20){
                document.querySelector('#friedLiver #g8').src = feketekiraly;
                document.querySelector('#friedLiver #e8').src = feksemmi;    
                document.querySelector('#friedLiver #h8').src = fehsemmi;
                document.querySelector('#friedLiver #f8').src = feketebastya;   
                document.querySelector('#friedLiverTovabb').innerHTML = "Vissza az elejére"
            }
            if(friedLiverlepes == 21){
                friedLiverlepes = 0
                document.querySelector('#friedLiverTovabb').innerHTML = "Tovább"
                document.querySelector('#friedLiver #a1').src = feherbastya
                document.querySelector('#friedLiver #b1').src = feherhuszar
                document.querySelector('#friedLiver #c1').src = feherfuto
                document.querySelector('#friedLiver #d1').src = feherkiralyno
                document.querySelector('#friedLiver #e1').src = feherkiraly
                document.querySelector('#friedLiver #f1').src = feherfuto
                document.querySelector('#friedLiver #g1').src = feherhuszar
                document.querySelector('#friedLiver #h1').src = feherbastya
                document.querySelector('#friedLiver #a2').src = fehergyalog
                document.querySelector('#friedLiver #b2').src = fehergyalog
                document.querySelector('#friedLiver #c2').src = fehergyalog
                document.querySelector('#friedLiver #d2').src = fehergyalog     
                document.querySelector('#friedLiver #e2').src = fehergyalog
                document.querySelector('#friedLiver #f2').src = fehergyalog
                document.querySelector('#friedLiver #g2').src = fehergyalog
                document.querySelector('#friedLiver #h2').src = fehergyalog
                document.querySelector('#friedLiver #d4').src = fehsemmi
                document.querySelector('#friedLiver #b4').src = fehsemmi
                document.querySelector('#friedLiver #c4').src = feksemmi
                document.querySelector('#friedLiver #f3').src = feksemmi
                document.querySelector('#friedLiver #b5').src = feksemmi

    
                document.querySelector('#friedLiver #a8').src = feketebastya
                document.querySelector('#friedLiver #b8').src = feketehuszar
                document.querySelector('#friedLiver #c8').src = feketefuto
                document.querySelector('#friedLiver #d8').src = feketekiralyno
                document.querySelector('#friedLiver #e8').src = feketekiraly
                document.querySelector('#friedLiver #f8').src = feketefuto
                document.querySelector('#friedLiver #g8').src = feketehuszar
                document.querySelector('#friedLiver #h8').src = feketebastya
                document.querySelector('#friedLiver #c7').src = feketegyalog
                document.querySelector('#friedLiver #a7').src = feketegyalog
                document.querySelector('#friedLiver #b7').src = feketegyalog
                document.querySelector('#friedLiver #c7').src = feketegyalog
                document.querySelector('#friedLiver #d7').src = feketegyalog     
                document.querySelector('#friedLiver #e7').src = feketegyalog
                document.querySelector('#friedLiver #f7').src = feketegyalog
                document.querySelector('#friedLiver #g7').src = feketegyalog
                document.querySelector('#friedLiver #h7').src = feketegyalog
                document.querySelector('#friedLiver #c3').src = fehsemmi
                document.querySelector('#friedLiver #e3').src = fehsemmi
                document.querySelector('#friedLiver #f4').src = fehsemmi
                document.querySelector('#friedLiver #e5').src = fehsemmi
                document.querySelector('#friedLiver #c5').src = fehsemmi
                document.querySelector('#friedLiver #d3').src = feksemmi
                document.querySelector('#friedLiver #d5').src = feksemmi
                document.querySelector('#friedLiver #e6').src = feksemmi
                document.querySelector('#friedLiver #h6').src = fehsemmi
                document.querySelector('#friedLiver #c6').src = feksemmi
                document.querySelector('#friedLiver #a5').src = fehsemmi
                document.querySelector('#friedLiver #d6').src = fehsemmi


            }
    }


}
function friedLiverValt(){
    document.getElementById('friedLiverszam').innerHTML = friedLiverlepes
}