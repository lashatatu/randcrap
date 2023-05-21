const clearBtn = document.querySelector("#clear");

function onClear(e) {
  const liEl = document.querySelectorAll("li");

  liEl.forEach((li) => {
    li.remove();
  });
  // e.stopPropagation();
  // e.preventDefault();
}

// clearBtn.addEventListener("click", function (e) {
//   console.log("clearBtn clicked");
//   // e.stopPropagation();
//   // e.preventDefault();
// });

clearBtn.addEventListener("click", onClear);
