const feketehuszar = "figurák/feketehuszar.png";
const feketebastya = "figurák/feketebastya.png";
const feketefuto = "figurák/feketefuto.png";
const feketegyalog = "figurák/feketegyalog.png";
const feketekiraly = "figurák/feketekiraly.png";
const feketekiralyno = "figurák/feketekiralyno.png";
const feherhuszar = "figurák/feherhuszar.png";
const feherbastya = "figurák/feherbastya.png";
const feherfuto = "figurák/feherfuto.png";
const fehergyalog = "figurák/fehergyalog.png";
const feherkiraly = "figurák/feherkiraly.png";
const feherkiralyno = "figurák/feherkiralyno.png";
const fehsemmi = "figurák/fehersemmi.png"
const feksemmi = "figurák/feketesemmi.png"


function click(){
    alert("vejbh")
};
// Jelszó //


function RejtettOldalonBtn(){
    alert('Eljutottál az első lépéshez a pénthez jutás felé.')
};
function passwordBeolvasas(){
    var password = document.getElementById('jelszo').value;
    if (password === 'GyereGaborSakkozniVPingpong.03'){
        document.getElementById('tartalom').style.visibility = 'visible';
        document.getElementById('nav-itemek').style.pointerEvents = 'all';
    }
    else{
        document.getElementById('tartalom').style.visibility = 'hidden';
        document.getElementById('nav-itemek').style.pointerEvents = 'none';
        alert('Ne próbálkozz, nem fog menni')
    }
}
// fehérrel rövidsánc: 
    // document.querySelector('#xxxxxxxxxxxx #e8').src = feketekiraly;
    // document.querySelector('#xxxxxxxxxxxx #g8').src = feksemmi;    
    // document.querySelector('#xxxxxxxxxxxx #f8').src = fehsemmi;
    // document.querySelector('#xxxxxxxxxxxx #h8').src = feketebastya;
    // document.querySelector('#xxxxxxxxxxxx #g8').src = feketekiraly;
    // document.querySelector('#xxxxxxxxxxxx #e8').src = feksemmi;    
    // document.querySelector('#xxxxxxxxxxxx #h8').src = fehsemmi;
    // document.querySelector('#xxxxxxxxxxxx #f8').src = feketebastya;
// feketével rövidsánc: 
    // document.querySelector('#xxxxxxxxxxxx #e8').src = feketekiraly;
    // document.querySelector('#xxxxxxxxxxxx #g8').src = feksemmi;    
    // document.querySelector('#xxxxxxxxxxxx #f8').src = fehsemmi;
    // document.querySelector('#xxxxxxxxxxxx #h8').src = feketebastya;
    // document.querySelector('#xxxxxxxxxxxx #g8').src = feketekiraly;
    // document.querySelector('#xxxxxxxxxxxx #e8').src = feksemmi;    
    // document.querySelector('#xxxxxxxxxxxx #h8').src = fehsemmi;
    // document.querySelector('#xxxxxxxxxxxx #f8').src = feketebastya;