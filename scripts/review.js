let reviews = Number(localStorage.getItem("reviews-ls")) || 0;

reviews++;

localStorage.setItem("reviews-ls", reviews);

const displayCount = document.querySelector(".review");
if (displayCount) {
    displayCount.textContent = reviews;
}

displayCount.textContent = `Total Reviews Completed: ${reviews}!`
