import angleToRadian from "../common/angleToRadian";
import { IPoint } from "../interfaces";
import rotatePointAroundWithRadian from "./rotatePointAroundWithRadian";

const rotatePointAround = (point: IPoint, center: IPoint, angle: number) => {
  return rotatePointAroundWithRadian(point, center, angleToRadian(angle));
}

export default rotatePointAround;