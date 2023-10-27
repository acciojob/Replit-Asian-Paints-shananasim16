//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function () {
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;
    
    const gridItem = document.getElementById(blockId);

    if (gridItem) {
        // Change the background color of the selected grid item
        gridItem.style.backgroundColor = color;
    } else {
        alert("Invalid block ID. Please enter a valid ID.");
    }
});

document.getElementById("reset_button").addEventListener("click", function () {
    // Reset all grid items to transparent background
    const gridItems = document.getElementsByClassName("grid-item");
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = "transparent";
    }
});

