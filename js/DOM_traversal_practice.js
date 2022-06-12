const grandParent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const children = document.querySelectorAll(".child")


// parents[1].style.backgroundColor = "#555"


for (let i = 0; i < 2; i++) {
    const newParentBlock = document.createElement("div")
    newParentBlock.classList.add("parent")
    newParentBlock.innerHTML =
        `<div class="child"></div>
     <div class="child"></div>`
    grandParent.append(newParentBlock);
}

for (let i = 0; i < 2; i++) {
    const newChild = document.createElement("div")
    newChild.classList.add("child")
    parent.append(newChild)
}

const parents = Array.from(document.getElementsByClassName("parent"))
parents.forEach(changeColor)

function changeColor(element) {
    element.style.backgroundColor = "#555"
}
