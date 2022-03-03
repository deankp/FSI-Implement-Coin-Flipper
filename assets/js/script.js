// TODO: Declare any global variables we need
let headsRoll = 0
let tailsRoll = 0

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', () => {
        // Flip Button Click Handler use Math.random() to get 50%
        let flippedHeads = Math.random() < 0.5
        
        // TODO: Update image and status message in the DOM
        if (flippedHeads) {
            document.getElementById('penny-image').src = "assets/images/penny-heads.jpg"
            document.getElementById('message').textContent = 'You Flipped Heads!'
            
            // Add one to the heads count
            headsRoll += 1
        }
        else {
            // Display image and message as tails
            document.getElementById('penny-image').src = "assets/images/penny-tails.jpg"
            document.getElementById('message').textContent = "You Flipped Tails!"

            // Add one to the tails count
            tailsRoll += 1
        }
        // Update the scorboard

        // Calculate the total number of rolls
        let total = headsRoll + tailsRoll

        // Make variables to track the percentages of heads and tails
        let percentHeads= 0
        let percentTails= 0

        // TODO: Use the calculated total to calculate the percentages, make sure total is not zero
        if (total > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((headsRoll / total) * 100)
            percentTails = Math.round((tailsRoll / total) * 100)
        }

        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headsRoll
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRoll
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    // Clear Button Click Handler
    document.getElementById('clear').addEventListener('click', () => {
        //Reset count to zero
        let headsRoll = 0
        let tailsRoll = 0

        // Update message center
        document.getElementById('message').textContent = "Let's Get Rolling!"

        // Update scoreboard

        // Calculate total number of rolls
        let total = headsRoll + tailsRoll

        // Reset global variables to 0
        let percentHeads = 0
        let percentTails = 0

        // Divide making sure total is not equal zero
        if (total > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((headsRoll / total) * 100)
            percentTails = Math.round((tailsRoll / total) * 100)
        }

        // TODO: Update the scoreboard (same logic as in flip button click handler)
        document.getElementById('heads').textContent = headsRoll
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRoll
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})