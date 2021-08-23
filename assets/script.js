let yourName = "Kevin H Park"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

let displayGB = document.querySelector("#qty-gb")
let displayCC = document.querySelector("#qty-cc")
let displaySugar = document.querySelector("#qty-sugar")
let displayTotal = document.querySelector("#qty-total")

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

//Ginger Bread
document.getElementById('add-gb').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    gb++
    displayGB.textContent = gb
    console.log("Gingerbread count is " + gb)
    displayTotal.textContent = gb + cc + sugar
})

document.getElementById('minus-gb').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    if (gb === 0){

    } else {
        gb--
    }
    displayGB.textContent = gb
    console.log("Gingerbread count is " + gb)
    displayTotal.textContent = gb + cc + sugar
})

//Chocolate CHip
document.getElementById('add-cc').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    cc++
    displayCC.textContent = cc
    console.log("Chocolate Chip count is " + cc)
    displayTotal.textContent = gb + cc + sugar
})

document.getElementById('minus-cc').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    if (cc === 0){

    } else {
        cc--
    }
    displayCC.textContent = cc
    console.log("Chocolate Chip count is " + cc)
    displayTotal.textContent = gb + cc + sugar
})

//Sugar
document.getElementById('add-sugar').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    sugar++
    displaySugar.textContent = sugar
    console.log("Sugar count is " + sugar)
    displayTotal.textContent = gb + cc + sugar
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    if (sugar === 0){

    } else {
        sugar--
    }
    displaySugar.textContent = sugar
    console.log("Sugar count is " + sugar)
    displayTotal.textContent = gb + cc + sugar
})

