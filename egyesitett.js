let listaszam = 0
let ar = 0
const lista1 = document.getElementById('lista1')
const lista2 = document.getElementById('lista2')
const lista3 = document.getElementById('lista3')
const lista4 = document.getElementById('lista4')
const lista5 = document.getElementById('lista5')
const lista6 = document.getElementById('lista6')



function vasarlas1(){
    let item = document.getElementById('segitsegselectiphone14').value
    if (item == 'iphone 14 Pro Max'){
        ar += 629990;
    }
    if (item == 'iphone 14 Pro'){
        ar += 569990;
    }
    if (item == 'iphone 14 Plus'){
        ar += 499990;
    }
    if (item == 'iphone 14'){
        ar += 499990;
    }
    
    listaszam += 1
    if (listaszam == 1){
        lista1.style.visibility = 'visible'
        lista1.innerHTML = item
    }
    if (listaszam == 2){
        lista2.style.visibility = 'visible'
        lista2.innerHTML = item
    }
    if (listaszam == 3){
        lista3.style.visibility = 'visible'
        lista3.innerHTML = item
    }
    if (listaszam == 4){
        lista4.style.visibility = 'visible'
        lista4.innerHTML = item
    }
    if (listaszam == 5){
        lista5.style.visibility = 'visible'
        lista5.innerHTML = item
    }
    if (listaszam == 6){
        lista6.style.visibility = 'visible'
        lista6.innerHTML = item
        listaszam = 0
    }
    console.log(listaszam)
    document.getElementById('osszesar').innerHTML = 'Ár: ' + ar
}
function vasarlas2(){
    let item = document.getElementById('segitsegselectiphone13').value
    if (item == 'iphone 13 Pro'){
        ar += 359000;
    }
    if (item == 'iphone 13 Mini'){
        ar += 329000;
    }
    if (item == 'iphone 13'){
        ar += 389000;
    }
    
    listaszam += 1
    if (listaszam == 1){
        lista1.style.visibility = 'visible'
        lista1.innerHTML = item
    }
    if (listaszam == 2){
        lista2.style.visibility = 'visible'
        lista2.innerHTML = item
    }
    if (listaszam == 3){
        lista3.style.visibility = 'visible'
        lista3.innerHTML = item
    }
    if (listaszam == 4){
        lista4.style.visibility = 'visible'
        lista4.innerHTML = item
    }
    if (listaszam == 5){
        lista5.style.visibility = 'visible'
        lista5.innerHTML = item
    }
    if (listaszam == 6){
        lista6.style.visibility = 'visible'
        lista6.innerHTML = item
        listaszam = 0
    }
    console.log(listaszam)
    document.getElementById('osszesar').innerHTML = 'Ár: ' + ar
}
function vasarlas3(){
    let item = document.getElementById('segitsegselectipadpro').value;

    if (item == '11 huvelykes' || item == '11 hüvelykes') {
        ar += 469990;
        item = '11 hüvelykes';
    } else if (item == '12.9 huvelykes' || item == '12.9 hüvelykes') {
        ar += 649990;
        item = '12.9 hüvelykes';
    }
    listaszam += 1
    if (listaszam == 1){
        lista1.style.visibility = 'visible'
        lista1.innerHTML = item
    }
    if (listaszam == 2){
        lista2.style.visibility = 'visible'
        lista2.innerHTML = item
    }
    if (listaszam == 3){
        lista3.style.visibility = 'visible'
        lista3.innerHTML = item
    }
    if (listaszam == 4){
        lista4.style.visibility = 'visible'
        lista4.innerHTML = item
    }
    if (listaszam == 5){
        lista5.style.visibility = 'visible'
        lista5.innerHTML = item
    }
    if (listaszam == 6){
        lista6.style.visibility = 'visible'
        lista6.innerHTML = item
        listaszam = 0
    }
    console.log(listaszam)
    document.getElementById('osszesar').innerHTML = 'Ár: ' + ar
}
function vasarlas4(){
    let item = document.getElementById('segitsegselectipadair').value;

    if (item == '10.9 huvelykes' || item == '10.9 hüvelykes') {
        ar += 469990;
        item = '10.9 hüvelykes';
    }
    if (item == '12 huvelykes' || item == '12 hüvelykes') {
        ar += 469990;
        item = '12 hüvelykes';
    }
    listaszam += 1
    if (listaszam == 1){
        lista1.style.visibility = 'visible'
        lista1.innerHTML = item
    }
    if (listaszam == 2){
        lista2.style.visibility = 'visible'
        lista2.innerHTML = item
    }
    if (listaszam == 3){
        lista3.style.visibility = 'visible'
        lista3.innerHTML = item
    }
    if (listaszam == 4){
        lista4.style.visibility = 'visible'
        lista4.innerHTML = item
    }
    if (listaszam == 5){
        lista5.style.visibility = 'visible'
        lista5.innerHTML = item
    }
    if (listaszam == 6){
        lista6.style.visibility = 'visible'
        lista6.innerHTML = item
        listaszam = 0
    }
    console.log(listaszam)
    document.getElementById('osszesar').innerHTML = 'Ár: ' + ar
}
function vasarlas5(){
    let item = document.getElementById('segitsegselectipad').value;
    alert(item)
    if (item == '10.9 huvelykes' || item == '10.9 hüvelykes') {
        ar += 259990;
        item = '10.9 hüvelykes';
    }
    if (item == '12 huvelykes' || item == '12 hüvelykes') {
        ar += 399990;
        item = '12 hüvelykes';
    }
    listaszam += 1
    if (listaszam == 1){
        lista1.style.visibility = 'visible'
        lista1.innerHTML = item
    }
    if (listaszam == 2){
        lista2.style.visibility = 'visible'
        lista2.innerHTML = item
    }
    if (listaszam == 3){
        lista3.style.visibility = 'visible'
        lista3.innerHTML = item
    }
    if (listaszam == 4){
        lista4.style.visibility = 'visible'
        lista4.innerHTML = item
    }
    if (listaszam == 5){
        lista5.style.visibility = 'visible'
        lista5.innerHTML = item
    }
    if (listaszam == 6){
        lista6.style.visibility = 'visible'
        lista6.innerHTML = item
        listaszam = 0
    }
    console.log(listaszam)
    document.getElementById('osszesar').innerHTML = 'Ár: ' + ar
}
function vasarlas6(){
    let item = document.getElementById('segitsegselectmacair').value;
    if (item == 'Macbook air M1') {
        ar += 499990;
    }
    if (item == 'Macbook air M2') {
        ar += 599990;
    }
    listaszam += 1
    if (listaszam == 1){
        lista1.style.visibility = 'visible'
        lista1.innerHTML = item
    }
    if (listaszam == 2){
        lista2.style.visibility = 'visible'
        lista2.innerHTML = item
    }
    if (listaszam == 3){
        lista3.style.visibility = 'visible'
        lista3.innerHTML = item
    }
    if (listaszam == 4){
        lista4.style.visibility = 'visible'
        lista4.innerHTML = item
    }
    if (listaszam == 5){
        lista5.style.visibility = 'visible'
        lista5.innerHTML = item
    }
    if (listaszam == 6){
        lista6.style.visibility = 'visible'
        lista6.innerHTML = item
        listaszam = 0
    }
    console.log(listaszam)
    document.getElementById('osszesar').innerHTML = 'Ár: ' + ar
}
function vasarlas7(){
    let item = document.getElementById('segitsegselectmacpro').value;
    if (item == '13 huvelykes') {
        ar += 649990;
    }
    if (item == '14 huvelykes') {
        ar += 999990;
    }
    listaszam += 1
    if (listaszam == 1){
        lista1.style.visibility = 'visible'
        lista1.innerHTML = item
    }
    if (listaszam == 2){
        lista2.style.visibility = 'visible'
        lista2.innerHTML = item
    }
    if (listaszam == 3){
        lista3.style.visibility = 'visible'
        lista3.innerHTML = item
    }
    if (listaszam == 4){
        lista4.style.visibility = 'visible'
        lista4.innerHTML = item
    }
    if (listaszam == 5){
        lista5.style.visibility = 'visible'
        lista5.innerHTML = item
    }
    if (listaszam == 6){
        lista6.style.visibility = 'visible'
        lista6.innerHTML = item
        listaszam = 0
    }
    console.log(listaszam)
    document.getElementById('osszesar').innerHTML = 'Ár: ' + ar
}

function vasarlas8(){
    let item = document.getElementById('segitsegselectwatch1').value;
    if (item == 'Watch Ultra') {
        ar += 419990;
    }
    if (item == 'Watch SE') {
        ar += 129990;
    }
    listaszam += 1
    if (listaszam == 1){
        lista1.style.visibility = 'visible'
        lista1.innerHTML = item
    }
    if (listaszam == 2){
        lista2.style.visibility = 'visible'
        lista2.innerHTML = item
    }
    if (listaszam == 3){
        lista3.style.visibility = 'visible'
        lista3.innerHTML = item
    }
    if (listaszam == 4){
        lista4.style.visibility = 'visible'
        lista4.innerHTML = item
    }
    if (listaszam == 5){
        lista5.style.visibility = 'visible'
        lista5.innerHTML = item
    }
    if (listaszam == 6){
        lista6.style.visibility = 'visible'
        lista6.innerHTML = item
        listaszam = 0
    }
    console.log(listaszam)
    document.getElementById('osszesar').innerHTML = 'Ár: ' + ar
} 
