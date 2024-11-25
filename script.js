document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    const cursorTrail = document.querySelector('.cursor-trail');

    // Set cursor position
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    console.log(e.clientX);


    // Set cursor trail position with delay
    cursorTrail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');

document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorTrail.classList.add('hover');
    });

    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorTrail.classList.remove('hover');
    });
});

