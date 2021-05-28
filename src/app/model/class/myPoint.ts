import {TPoint, Point} from "../interface/point";

class myPoint implements TPoint {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    translate(delta_x: number, delta_y: number) {
        this.x += delta_x;
        this.y += delta_y;
    }
}

let display = (p: Point) => {console.log(p.x, p.y)}

let point = new myPoint(3,4);
display(point);
point.translate(5, 5);
display(point);
