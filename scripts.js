window.onload = function(){
    document.getElementById("nav").onmouseover = function(event){

        var target = event.target;
        if(target.className == 'menu-item'){
            var s = target.getElementsByClassName('submenu');
            closeMenu();
            s[0].style.display = 'block';
        }
    }
    
    document.onmouseover = function(event){
        var target = event.target;
        console.log(event.target);
        if(target.className != 'menu-item' && target.className != 'submenu'){
            closeMenu();
        }
    }
    
    function closeMenu(){
        var menu = document.getElementById('nav');
        var subm = document.getElementsByClassName('submenu');
        for(var i = 0; i < subm.length; i++){
            subm[i].style.display = "none";
        }
    }


    let tab = document.getElementsByClassName("tab");
    let tabContent = document.getElementsByClassName("content");

    hideTabsContent(1);
    
    function hideTabsContent(a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('whiteborder');
        }
    }
    document.getElementById("tabs").onclick = function(e){
        let target = e.target;
        if(target.className=='tab'){
            for(let i=0; i<tab.length; i++){
                if(target==tab[i]){
                    showTabsContent(i);
                    break;
                }
            }
        }
    }
    function showTabsContent(b){
        if(tabContent[b].classList.contains('hide')){
            hideTabsContent(0);
            tab[b].classList.add('whiteborder');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }



    let modal = document.getElementById("myModal");
    let btn = document.getElementById("btnModal");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function(){
        modal.style.display = "block";
    }
    span.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(e){
        if(e.target == modal){
            modal.style.display = "none";
        }
    }
    
   
}
function myMove(){
    let elem = document.getElementById('myAnimation');
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame(){
        if(pos == 350){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function rangeFun(){
    let rng = document.getElementById('rng');
    let rngText = document.getElementById('rngtext');
    let inputLine = document.getElementById('inputline');
    inputLine.style.width = rng.value + 'px';
    rngtext.innerText = rng.value + '%';
}

function borderFun(){
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbl = document.getElementById('rbl').value;
    let rbr = document.getElementById('rbr').value;

    let ttl = document.getElementById('ttl');
    let ttr = document.getElementById('ttr');
    let tbl = document.getElementById('tbl');
    let tbr = document.getElementById('tbr');

    let block = document.getElementById('borderBlock');

    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbl + 'px ' + rbr + 'px';
}

function checkFun(){
    let chbox = document.getElementById('check');
    if(chbox.checked){
        alert('Checked!');
    }else{
        alert('Unchecked!');
    }
}

function radioFun(){
    let radio = document.getElementsByName('r');
    for( let i = 0; i < radio.length; i++ ){
        if (radio[i].checked){
            alert('Element ' +i+ ' is checked!');
        }
    }
}

// let slideIndex = 0;
// showSlides(slideIndex);

// function plusSlides(n){
//     showSlides(slideIndex+=n);
// }

// function currentSlide(n){
//     showSlides(slideIndex=n);
// }

// function showSlides(n){
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");

//     if(n>slides.length){
//         slideIndex=0;
//     }
//     if(n>1){
//         slideIndex=slides.length;
//     }

//     for (i=0; i<slides.length; i++){
//         slides[i].style.display = 'none';
//     }
//     for (i=0; i<dots.length; i++){
//         dots[i].className =  dots[i].className.replace("active","");
//     }
//     slides[slides.length-1].style.display = "block";
//     dots[slides.length-1].className = " active";
// }

function listFun(){
    let input, filter, ul, li, a, i;
    input = document.getElementById('listInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUl');
    li = ul.getElementsByTagName('li');

    for (i=0; i<li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}
function plus(){
    let num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}
function minus(){
    let num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}
function multiply(){
    let num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById('out').innerHTML = result;
}
function split(){
    let num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 / num2;

    document.getElementById('out').innerHTML = result;
}

let modalImg1 = document.getElementById('modalImg1');
let myImg = document.getElementById('myImg');
let img01 = document.getElementById('img01');
let captionText = document.getElementById('caption');

myImg.onclick = function(){
    this.style.display = 'none';
    modalImg1.style.display = 'block';
    img01.src = this.src;
    captionText.innerHTML = this.alt;
}

let closeX = document.getElementsByClassName('close-x')[0];
closeX.onclick = function(){
    modalImg1.style.display = 'none';
    myImg.style.display = 'block';
}
function progress(){
    let elem = document.getElementById("myBar");
    let width = 10;
    let id = setInterval(frame1, 10);
    function frame1(){
        if(width>=100){
            clearInterval(id);
        }else{
            width++;
            elem.style.width = width + '%';
            document.getElementById("lbl").innerHTML = width*1 + '%';
        }
    }
}
function popupText(){
    let popup = document.getElementById('popupText');
    popup.classList.toggle('showPopup');
}

let acc = document.getElementsByClassName("accordion");
for(let i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("showPanel");
    }
}

