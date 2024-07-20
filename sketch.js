const container = document.querySelector(".container");
const options = document.querySelector(".options");
let height = 16;
let width = 16;

function createGrid(height,width){
    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            const row = document.createElement("div");
            row.className = 'gridbox';
            row.style.border = '1px solid black'
            row.style.height = (500 / height) + 'px';
            row.style.width = (500 / width) + 'px';
            row.style.boxSizing = "border-box";
            container.appendChild(row);
        }
    }
}

createGrid(height,width);

const reset = document.createElement("button");
const resize = document.createElement("button");
resize.textContent = 'ReSize Grid';
reset.textContent = 'Reset Grid';
options.appendChild(resize);
options.appendChild(reset);

container.addEventListener("mouseover", function(grids){
    if (grids.target.className == 'gridbox'){
        grids.target.style.backgroundColor = 'black';
    }

});

reset.addEventListener("click", function(){
    document.querySelectorAll(".gridbox").forEach(gridbox => {
        gridbox.style.backgroundColor = 'white';
    })
})

resize.addEventListener("click", function(){
    let dimensions = parseInt(prompt("Pick you dimensions"));
    document.querySelectorAll(".gridbox").forEach(gridbox => {gridbox.remove()})
    if (!isNaN(dimensions) && dimensions > 0 && dimensions <= 100){
        height = dimensions;
        width = dimensions;
        createGrid(height, width);
    }
    else{
        alert("Invalid dimensions entered")
    }
})