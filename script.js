function onScroll(event) {
    if (window.scrollY <= document.querySelector('body').scrollHeight/2) {
        document.getElementById("arrowDown").removeAttribute('hidden');
        document.getElementById("arrowTop").setAttribute('hidden','null');
    }else{
        document.getElementById("arrowTop").removeAttribute('hidden');
        document.getElementById("arrowDown").setAttribute('hidden','null');
    }
}
function onScrollDown(event) {
    window.scrollTo(0, document.querySelector('body').scrollHeight);
}
function onScrollUp(event) {
    window.scrollTo(0,0);
}
document.getElementById("arrowDown").addEventListener('click',onScrollDown);
document.getElementById("arrowTop").addEventListener('click',onScrollUp);
window.addEventListener('scroll',onScroll);