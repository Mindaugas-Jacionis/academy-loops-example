const output = document.querySelector("#output");

document.querySelector("#triangle").addEventListener("click", () => {
  let shape = "";

  for (let floor = 1; floor <= 6; floor++) {
    for (let flat = 0; flat < floor; flat++) {
      shape = shape + "*";
    }

    shape = shape + "<br />";
  }

  output.innerHTML = shape;
});

// document.querySelector("#pyramid").addEventListener("click", () => {
//   const maxFloors = 7;
//   let shape = "";

//   for (let floor = 1; floor <= maxFloors; floor++) {
//     for (let spaces = 0; spaces < maxFloors - floor; spaces++) {
//       shape = shape + "&nbsp;";
//     }

//     for (let flat = 0; flat < floor; flat++) {
//       shape = shape + "*&nbsp;";
//     }

//     shape = shape + "<br />";
//   }

//   output.innerHTML = shape;
// });

document.querySelector("#pyramid").addEventListener("click", () => {
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

  output.innerHTML = shape;
});

document.querySelector("#reverse-pyramid").addEventListener("click", () => {
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

  output.innerHTML = shape;
});

document.querySelector("#clear").addEventListener("click", () => {
  output.innerHTML = null;
});
