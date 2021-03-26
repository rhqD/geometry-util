import angleToRadian from "../../common/angleToRadian";
import { IVector } from "../../types";
import rotateVectorWithRadianAroundDirection from "./rotateVectorWithRadianAroundDirection";

const rotateVectorWithAngleAroundDirection = (vector: IVector, angle: number) => {
  return rotateVectorWithRadianAroundDirection(vector, angleToRadian(angle));
}

export default rotateVectorWithAngleAroundDirection;