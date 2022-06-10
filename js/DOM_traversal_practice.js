const children = document.querySelectorAll(".child")

// children.style.backgroundColor = "#333"

children.forEach(changeColor)
function changeColor(element) {
    element.style.backgroundColor = "#999"
}

