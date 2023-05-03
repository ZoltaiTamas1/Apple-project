let hatterszam = 0  
function Szinvaltas1(){
    hatterszam += 1
    if (hatterszam == 4){
        hatterszam = 0
    }
}
function Szinvaltas2(){
    if (hatterszam == 0){
        document.body.style.backgroundImage = "url('pics/Hatterkepek/bg-4.jpg')";
    }
    if (hatterszam == 1){
        document.body.style.backgroundImage = "url('pics/Hatterkepek/bg-5.jpg')";
    }
    if (hatterszam == 2){
        document.body.style.backgroundImage = "url('pics/Hatterkepek/bg-6.jpg')";
    }
    if (hatterszam == 3){
        document.body.style.backgroundImage = "url('pics/Hatterkepek/bg-7.jpg')";
    }
    console.log(hatterszam)
}
