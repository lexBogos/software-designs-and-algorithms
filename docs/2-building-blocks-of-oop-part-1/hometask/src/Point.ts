export class Point {

    public x: number;
    public y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
      this.x = x ?? 0;
      this.y = y ?? 0;
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    public distance(): number;
    public distance(other: Point): number;
    public distance(x: number, y: number): number;
    public distance(arg1?: Point | number, arg2?: number): number {
      let x2: number, y2: number;
  
      if (typeof arg1 === "number" && typeof arg2 === "number") {
        x2 = arg1;
        y2 = arg2;
      } else if (arg1 instanceof Point) {
        x2 = arg1.x;
        y2 = arg1.y;
      } else {
        x2 = 0;
        y2 = 0;
      }
  
      const dx = this.x - x2;
      const dy = this.y - y2;
  
      return Number(Math.sqrt(dx * dx + dy * dy).toFixed(2));
    }
}