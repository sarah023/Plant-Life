//select all images - then layer them based on z-index
const slideArea = document.querySelector('div.slides');
const images = slideArea.querySelectorAll('img');

//track which slide is selected and track z-index
let currentSlide = 0;
let zIndex = 1;

//when slideArea is clicked -> change the slide based on z-index
slideArea.addEventListener('click', () => {
  currentSlide = currentSlide + 1;

  //if we 'run out' of slides -> go back to the start
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  zIndex = zIndex + 1;

  //remove the animation style for each image
  images.forEach(image => {
    image.style.animation = '';
  });

  //select the correct image - > then re-add the animation on each image
  images[currentSlide].style.zIndex = zIndex;
  images[currentSlide].style.animation = 'fade 0.5s';
});

//loop over each image and then display in a random place
slideArea.addEventListener('mouseover', () => {
  images.forEach(image => {
    //calculate a random position for the images to be placed
    //within the constaints of the layout (don't overlap content)
    const x = 25 * Math.floor(Math.random() * 5) - 50;
    const y = 25 * Math.floor(Math.random() * 5) - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

//when mouse moves away - remove transform
slideArea.addEventListener('mouseout', () => {
  images.forEach(image => {
    image.style.transform = '';
  });
});
