const toggleOpen = ({ currentTarget }) => {
  currentTarget.classList.toggle('image-gallery__panel--status--open');
};

const toggleOpenActive = event => {
  if (!event.propertyName.includes('flex')) {
    return;
  }
  console.log(event.propertyName.includes('flex'));
  event.currentTarget.classList.toggle('image-gallery__panel--status--open-active');
};

const panels = document.querySelectorAll('.image-gallery__panel');
panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleOpenActive);
});
