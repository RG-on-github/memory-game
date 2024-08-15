const food_items = {
    1: "burger",
    2: "fries",
    3: "hotdog",
    4: "ice_cream",
    5: "milkshake",
    6: "chicken",
};

let array = [1, 2, 3, 4, 5, 6];
let c = score = counter = 0;
let list = [];

function reset1(){
    location.reload();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function food(x) {
    if (c == 0) {
        x1 = x - 1;
    }
    if (c == 1) {
        x2 = x - 1;
    }
    if (c < 2) {
        let y = document.getElementById(`tin-${x}`);
        y.style.display = 'none';
    }
    c++;
    if (c == 2) {
        if (list[x1] == list[x2]) {
            score++;
            if(score<=6){
                h2.innerHTML = `YOUR SCORE:(${score}/6)`;
            }
        }else{
            score--;
            if (score<=6){
                h2.innerHTML = `YOUR SCORE:(${score}/6)`;
            }
        }
        c = 0;
    }
}

function display_item() {
    for (let i = 1; i <= 12; i++) {
        let tin = document.getElementById(`tin-${i}`);
        tin.style.display = 'block';
    }

}

function display() {
    for (let i = 1; i <= 12; i++) {
        let tin = document.getElementById(`tin-${i}`);
        tin.style.display = 'none';
    }
    interval = setTimeout(display_item, 15000);
}

let heading = document.createElement("header");
heading.className = "heading";
document.body.appendChild(heading);

let h2 = document.createElement("h2");
h2.innerHTML = `YOUR SCORE:(${score}/6)`;
heading.appendChild(h2);

let parent_div = document.createElement("div");
parent_div.className = "container";
document.body.appendChild(parent_div);

shuffleArray(array);
for (let i = 1, j = 0; i <= 12 && j < array.length; i++, j++) {
    if (i == 1 || i == 7) {
        shuffleArray(array);
    }
    let child_div = document.createElement("div");
    child_div.className = "box";
    child_div.id = "box-" + i;
    parent_div.appendChild(child_div);
    
    child_div.style.backgroundImage = `url("${food_items[array[j]]}.webp")`;
    child_div.style.backgroundSize = "100% 100%";
    child_div.style.backgroundPosition = "center";
    child_div.style.backgroundRepeat = "no-repeat";
    child_div.style.gridArea = `b-${i}`;
    child_div.style.display = 'block';

    let grandchild_div = document.createElement("div");
    grandchild_div.className = "tin";
    grandchild_div.id = "tin-" + i;
    child_div.appendChild(grandchild_div);
    
    grandchild_div.style.backgroundImage = 'url("cover.webp")';
    grandchild_div.style.backgroundSize = "100% 100%";
    grandchild_div.style.backgroundPosition = "center";
    grandchild_div.style.gridArea = `t-${i}`;
    grandchild_div.style.display = 'block';

    list.push(food_items[array[j]]);

    child_div.setAttribute("onclick", `food(${i})`);
    
    if (j == 5) {
        j = -1;
    }
}

let start = document.createElement("button");
start.className = "start";
document.body.appendChild(start);
start.innerHTML = "Start";

start.setAttribute("onclick",'display()');

let reset = document.createElement("button");
reset.className = "reset";
document.body.appendChild(reset);
reset.innerHTML = "Reset";

reset.setAttribute("onclick",'reset1()');