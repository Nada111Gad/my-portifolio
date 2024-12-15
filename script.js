

let hom = document.getElementById('hom');
let togg= document.getElementById('togg')
function showmenu()
{
    hom.classList.add('show');
}
if(togg)
{
    togg.addEventListener('click',showmenu)
}   
function toggleMenu()
{
    hom.classList.toggle('active');
}
