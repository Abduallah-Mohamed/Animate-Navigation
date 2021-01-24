const menuBars = document.getElementById('menu-bars');
const overLay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navs = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(dir1, dir2) {
    navs.forEach((nav, i) => {
        nav.classList.replace(`slide-${dir1}-${i+1}`, `slide-${dir2}-${i+1}`);
    });
}

// Functions 
function toggleNav() {
    console.log('i was clicked by an idot person')
    menuBars.classList.toggle('change');

    // we will use overlay-active class as a boolean value
    overLay.classList.toggle('overlay-active');
    if (overLay.classList.contains('overlay-active')) {
        //  Animate In
        overLay.classList.replace("overlay-slide-left", "overlay-slide-right");
        navAnimation('out', 'in');
    } else {
        //  Animate Out
        overLay.classList.replace('overlay-slide-right', 'overlay-slide-left');

        navAnimation('in', 'out');
    }
}


// Event Listeners
menuBars.addEventListener('click', toggleNav);
navs.forEach(nav => {
    nav.addEventListener('click', toggleNav);
})