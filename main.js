let coin = {
    state: 0,
    flip: function() {
this.state = Math.floor(Math.random() * 2)

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
if (this.state === 1){
    return "Heads"
} else if (this.state === 0){
    return "Tails"
}

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
if (this.state === 1){
    image.src = "./images/coin.jpg"
} else if (this.state === 0){
    image.src ="./images/tail.jpg"
}


        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

function display20flips(){
    for(let i = 0; i <  20; i ++){
        coin.flip()
        
        
        // Li.innerHTML=coin.toString(li)
    }
}


function display20images() {
    for (let i = 1; i < 20; i++){
        // coin.flip()
        document.body.append(coin.toHTML(image))
    }
}









coin.flip()
console.log(coin.state)
console.log(coin.toString())
console.log(coin.toHTML)
display20flips()