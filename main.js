let coin = {
    state: 0,
    flip: function () {
        this.state = Math.floor(Math.random() * 2)

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        if (this.state === 1) {
            return "Heads"
        } 
        else  {
            return "Tails"
        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 1) {
            image.src = "./images/head.png"
        }
        else {
            image.src = "./images/tail.jpg"
        }


        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

coin.flip()
console.log(coin.state)
console.log(coin.toString())
console.log(coin.toHTML())

let images = document.createElement('div')
images.append(coin.toHTML())
document.body.append(images)

function display20flips() {
    for (let i = 0; i <= 20; i++) {
        coin.flip()
        let li = document.createElement('li')
        li.innerHTML = (coin.toString())
        document.body.appendChild(li)
    }
    
}
display20flips()

function display20images() {
    for (let i = 1; i <= 20; i++) {
        coin.flip()
        document.body.appendChild(coin.toHTML())
    }
}
display20images()
