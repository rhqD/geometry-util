import angleToRadian from "../../common/angleToRadian";
import { IDirection, IVector } from "../../interfaces";
import rotateVectorWithRadianAroundDirection from "./rotateVectorWithRadianAroundDirection";

const rotateVectorAroundDirection = (vector: IVector, direction: IDirection, angle: number) => {
  return rotateVectorWithRadianAroundDirection(vector, direction, angleToRadian(angle));
}

export default rotateVectorAroundDirection;