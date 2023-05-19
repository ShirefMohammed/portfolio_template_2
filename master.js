// Changing Header BackGround when Scrolling Window
window.addEventListener('scroll', () => {
    document.getElementById("header").classList.toggle('main-bg', window.scrollY > 50);
});


// bars && x-mark 
document.getElementById("bars").addEventListener('click', handle_bars_and_x_mark);
document.getElementById("x-mark").addEventListener('click', handle_bars_and_x_mark);

// Adding left_hide Class to Links When Click on any Link
document.querySelectorAll("#links li a").forEach((link) => {
    link.addEventListener('click', handle_bars_and_x_mark);
});

function handle_bars_and_x_mark() {
    document.getElementById("bars").classList.toggle("d-none");
    document.getElementById("x-mark").classList.toggle("d-none");
    document.getElementById("links").classList.toggle("left_hide");
}


// Changing Active Link in Header When Scrolling Window to Section
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach((section) => {
        if (window.scrollY > section.offsetTop - 100 &&
            window.scrollY < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll("#links li a").forEach((link) => {
                link.classList.remove('active');
            });
            document.querySelector(`#links li a[href='#${section.getAttribute('id')}']`)
                .classList.add('active');
        }
    });
});