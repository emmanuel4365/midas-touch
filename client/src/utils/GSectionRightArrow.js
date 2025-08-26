export function gSectionRightClick() {
  //select DOM elements
  let photos = Array.from(document.querySelectorAll(".g-section-image"));
  //   console.log(photos);

  let imageContainer = document.querySelector(
    ".gallery-section-slider-container"
  );

  let gSectionBox1 = document.querySelector(".g-section-num-stat.box1");

  //firstly, overwrite transform property for each image to reflect the current position
  photos.map((item) => {
    let num = Number(item.dataset.translate);
    let cal = num - 100;

    item.style.transform = `translateX(${cal}%)`;
    item.dataset.translate = cal;
  });

  //next, overwrite dataset.selected attribute value
  let el = photos.find((item) => item.dataset.selected === "true");

  if (el.dataset.selected === "true" && !el.nextElementSibling) {
    el.dataset.selected = "false";
    let loadedPhotos = photos.map((item, index) => {
      item.style.transform = `translateX(${index * 100}%)`;
      item.dataset.translate = `${index * 100}`;
      return item;
    });
    loadedPhotos[0].dataset.selected = "true";
    gSectionBox1.textContent = loadedPhotos[0].dataset.id;

    return;
  }

  el.dataset.selected = "false";
  gSectionBox1.textContent = el.nextElementSibling.dataset.id;

  if (!el.nextElementSibling) {
    imageContainer.firstElementChild.dataset.selected = "true";
  } else {
    el.nextElementSibling.dataset.selected = "true";
  }
}
