const texts = ["Hey, I am Prince Suresh V S", "I love coding", "Welcome to my Webpage"];
let currentIndex = 0;
const element = document.getElementById("animate-text");

function typeWriter(text, i, callback) {
    if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        setTimeout(() => typeWriter(text, i + 1, callback), 100);
    } else if (callback) {
        setTimeout(callback, 1000); // Delay before starting next text
    }
}

function startTextAnimation() {
    typeWriter(texts[currentIndex], 0, () => {
        currentIndex++;
        if (currentIndex >= texts.length) {
            currentIndex = 0; // Reset to loop the text sequence
        }
        setTimeout(startTextAnimation, 1000); // Delay between each animation cycle
    });
}

window.onload = () => {
    console.log("Window loaded, starting animation...");
    typeWriter("Welcome to my Webpage", 0, () => {
        setTimeout(startTextAnimation, 1000); // Delay before starting the first new text
    });
};

// Project Navigation
document.addEventListener('DOMContentLoaded', function () {
    const projectContainer = document.querySelector('.projects');
    const projectBoxes = document.querySelectorAll('.project-box');
    const leftControl = document.querySelector('.control.left');
    const rightControl = document.querySelector('.control.right');
    const projectWidth = projectBoxes[0].offsetWidth + 20; // Width of project box + margin

    let currentIndex = 0;

    function updateProjects() {
        projectBoxes.forEach(function (box, index) {
            if (index === currentIndex) {
                box.classList.add('visible');
            } else {
                box.classList.remove('visible');
            }
        });
    }

    leftControl.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateProjects();
        }
    });

    rightControl.addEventListener('click', function () {
        if (currentIndex < projectBoxes.length - 1) {
            currentIndex++;
            updateProjects();
        }
    });

    // Initialize projects
    projectBoxes.forEach((box, index) => {
        if (index === 0) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
});
