var show = document.querySelector('.num')
var count = 0
// function changecount(n){
//     count += n;
//     document.querySelector('.num').innerHTML = count;
// }

function addnum(){
    count += 1
    show.innerHTML = count
}

function subnum(){

    if(count > 0){
        count -= 1 
    }

    show.innerHTML = count
}