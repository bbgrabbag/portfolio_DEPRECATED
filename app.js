
const cube = document.getElementById("cube");


const panels = document.querySelectorAll(".clickable");

const positions = [
    {
        name: "default",
        setting: `translate3d(0, 0, -125px)rotate3d(1, 5, 0, 15deg)`,
    },
    {
        name: "top",
        setting: `translate3d(0, 0, -125px)rotate3d(1, 5, 0, 15deg) rotateX(-90deg)`,
    },
    {
        name: "bottom",
        setting: `translate3d(0, 0, -125px)rotate3d(1, 5, 0, 15deg) rotateX(90deg)`,
    },
    {
        name: "left",
        setting: `translate3d(0, 0, -125px)rotate3d(1, 5, 0, 15deg) rotateY(90deg)`,
    },
    {
        name: "right",
        setting: `translate3d(0, 0, -125px)rotate3d(1, 5, 0, 15deg) rotateY(-90deg)`,
    },
    {
        name: "back",
        setting: `translate3d(0, 0, -125px)rotate3d(1, 5, 0, 15deg) rotateX(180deg)`,
    }
]
let currentPosition = positions[0];

const toggleDisable = (elem, shouldDisable) => {
    if (!elem) return;
    if (shouldDisable)
        elem.classList.add("disabled");
    else
        elem.classList.remove("disabled");
}

const clickPanel = function (e) {

    //is it a current click or <a> click
    const name = (this.attributes[0].value);

    if (name !== currentPosition.name) {
        //disable previous tag
        toggleDisable(document.querySelector(`[name='${currentPosition.name}']`).querySelector("a"), true);

        //enable current tag
        toggleDisable(this.querySelector("a"), false);

        //set new position
        currentPosition = positions.filter(pos => pos.name === name)[0];
        cube.style.transform = currentPosition.setting;

    } else {
        // do stuff on the current panel
    }

}

panels.forEach(panel => panel.addEventListener("click", clickPanel));