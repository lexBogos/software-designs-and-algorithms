class Rectangle {
  constructor(public width: number, public height: number) {}

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(public width: number) {
    super(width, width);
  }
}

function printArea(rectangle: Rectangle) {
  console.log(rectangle.area());
}

const rectangle = new Rectangle(5, 10);
const square = new Square(5);

printArea(rectangle); // 50
printArea(square); // 50!