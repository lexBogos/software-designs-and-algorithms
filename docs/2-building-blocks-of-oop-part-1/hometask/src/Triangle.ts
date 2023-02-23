import { Point } from "./Point";
import { Shape } from "./Shape";
export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point);
    constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean);
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        super([point1, point2, point3], color, filled);
    }
  
    toString(): string {
      const verticesString = this.points.map(p => `v${this.points.indexOf(p) + 1}=(${p.x}, ${p.y})`).join(",");
      return `Triangle[${verticesString}]`;
    }
  
    getType(): string {
      const sides = [
        this.points[0].distance(this.points[1].x, this.points[1].y),
        this.points[1].distance(this.points[2].x, this.points[2].y),
        this.points[2].distance(this.points[0].x, this.points[0].y)
      ];

      const uniqueSides = new Set(sides).size;
      if (uniqueSides === 1) {
        return "equilateral triangle";
      } else if (uniqueSides === 2) {
        return "isosceles triangle";
      } else {
        return "scalene triangle";
      }
    }
  }