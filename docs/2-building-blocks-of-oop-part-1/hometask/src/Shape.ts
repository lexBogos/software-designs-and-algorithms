import { Point } from "./Point";

export abstract class Shape {

  protected color: string;
  protected filled: boolean;
  protected points:  Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color?: string, filled?: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error("A shape must have at least 3 points.");
    }
    this.points = points;
    this.color = color ?? "green";
    this.filled = filled ?? true;
  }

  toString(): string {
    const filledString = this.filled ? "filled" : "not filled";
    const pointsString = this.points.map(p => `(${p.x}, ${p.y})`).join(", ");
    return `A Shape with color of ${this.color} and ${filledString}. Points: ${pointsString}.`;
  }

  getPerimeter(): number {

    let perimeter = 0;
    for (let i = 0; i < this.points.length - 1; i++) {
      perimeter += this.points[i].distance(this.points[i+1].x, this.points[i+1].y);
    }
    perimeter += this.points[this.points.length - 1].distance(this.points[0].x, this.points[0].y);
    return perimeter;
  }
}
