/*
getter: special method that makes a property readable
setter: special method that makes a property writeable

use them to validate and modify a value when reading/writing a property
*/

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth
        } else {
            console.error("Width must be positive number")
        }

    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight
        } else {
            console.error("Width must be positive number")
        }
    }

    get width(){
        return this._width
    }

    get height(){
        return this._height
    }
}

const rectangle = new Rectangle(3, 4)

rectangle.width = 5
rectangle.height = 6

console.log(rectangle.width, rectangle.height);
