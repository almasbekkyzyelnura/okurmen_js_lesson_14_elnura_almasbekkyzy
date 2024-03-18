document.addEventListener('DOMContentLoaded', () => {
    // const timeot = setInterval(() => {
    //   alert('hello, world!')
    //}, 1000);       //1000 ms = 1s


    // let counter = 0;

    //const interval = setInterval(function (){
    //  counter++;
    //console.log(`Counter is now: ${counter}`);
    //if (counter >= 5) {
    // clearInterval(interval);
    //}
    //}, 5000);     //5000ms =5s

    /*
        const timeot = setTimeout(function () {
            alert('I am timeot');
        }, 3000);     //3000ms = 3s */


    const btn = document.querySelector('.button');
    const item = document.querySelector('.item');
    const container = document.querySelector('.container');

    btn.addEventListener('click', (e) => {
       btn.style.background = 'blue';
       alert('I am button');
       // e.stopPropagation();
    });

    item.addEventListener('click', (e) => {
       item.style.background = 'yellow';
       alert('I am item');
    });

    container.addEventListener('click', (e) => {
        container.style.background = 'gray';
        alert('I am container');
    });
}); 