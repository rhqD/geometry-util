import angleToRadian from "../../common/angleToRadian";
import { IVector } from "../../interfaces";
import rotateVectorWithRadian from "./rotateVectorWithRadian";

const rotateVector = (vector: IVector, angle: number) => {
  return rotateVectorWithRadian(vector, angleToRadian(angle));
}

export default rotateVector;