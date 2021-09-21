function getPyramid() {
  const maxFloors = 7;
  let shape = "";

  for (let floor = 1; floor <= maxFloors; floor++) {
    for (let spaces = 0; spaces < maxFloors - floor; spaces++) {
      shape = shape + "&nbsp;";
    }

    for (let flat = 0; flat < floor * 2 - 1; flat++) {
      shape = shape + "*";
    }

    shape = shape + "<br />";
  }

  return shape;
}

function getReversePyramid() {
  const maxFloors = 7;
  let shape = "";

  for (let floor = 0; floor < maxFloors; floor++) {
    for (let spaces = 0; spaces < floor; spaces++) {
      shape = shape + "&nbsp;";
    }

    for (let flat = 0; flat < maxFloors - floor; flat++) {
      shape = shape + "*&nbsp;";
    }

    shape = shape + "<br />";
  }

  return shape;
}

function getTriangle() {
  let shape = "";

  for (let floor = 1; floor <= 6; floor++) {
    for (let flat = 0; flat < floor; flat++) {
      shape = shape + "*";
    }

    shape = shape + "<br />";
  }

  return shape;
}

function getShape(name) {
  switch (name) {
    case "clear":
      return null;
    case "triangle":
      return getTriangle();
    case "pyramid":
      return getPyramid();
    case "reverse-pyramid":
      return getReversePyramid();
    default:
      return null;
  }
}

document.querySelector("#actions").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const shape = getShape(event.target.id);

    document.querySelector("#output").innerHTML = shape;
  }
});
