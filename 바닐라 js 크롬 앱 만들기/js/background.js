const images = [
    "0.jpeg","1.jpeg","2.jpeg"
];

const ramdomImages = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img") 

bgImages.src = `img/${ramdomImages}`;

document.body.appendChild(bgImages);