const picture = document.getElementById('change-img');
const original = {
    src: picture.src,
    alt: picture.alt,
}

const lowAButton = document.getElementById('low-a');
const lowBButton = document.getElementById('low-b');
const lowCButton = document.getElementById('low-c');
const lowDButton = document.getElementById('low-d');
const lowEButton = document.getElementById('low-e');
const lowFButton = document.getElementById('low-f');
const gButton = document.getElementById('g');
const upAButton = document.getElementById('up-a');
const upBButton = document.getElementById('up-b');
const upCButton = document.getElementById('up-c');
const upDButton = document.getElementById('up-d');
const upEButton = document.getElementById('up-e');
const upFButton = document.getElementById('up-f');
const defaultButton = document.getElementById('default');

function changeImage(image, alternate) {
    picture.src = image;
    picture.alt = alternate;
}

lowAButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-lower-a.jpg", "ocarina diagram with 12 holes covered");
});
lowBButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-lower-b.jpg", "ocarina diagram with 11 holes covered");
});
lowCButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-lower-c.jpg", "ocarina diagram with 10 holes covered");
});
lowDButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-lower-d.jpg", "ocarina diagram with 9 holes covered");
});
lowEButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-lower-e.jpg", "ocarina diagram with 8 holes covered");
});
lowFButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-lower-f.jpg", "ocarina diagram with 7 holes covered");
});
gButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-g.jpg", "ocarina diagram with 6 holes covered");
});
upAButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-upper-a.jpg", "ocarina diagram with 5 holes covered");
});
upBButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-upper-b.jpg", "ocarina diagram with 4 holes covered");
});
upCButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-upper-c.jpg", "ocarina diagram with 3 holes covered");
});
upDButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-upper-d.jpg", "ocarina diagram with 2 holes covered");
});
upEButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-upper-e.jpg", "ocarina diagram with 1 hole covered");
});
upFButton.addEventListener("click", () => {
    changeImage("images/ocarina-note-upper-f.jpg", "ocarina diagram with no holes covered");
});
defaultButton.addEventListener("click", () => {
    changeImage(original.src, original.alt);
});