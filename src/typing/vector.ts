export interface IPoint {
  x: number;
  y: number;
  z: number;
}

export interface IVector {
  IPoint
}

export interface IDirection {
  IVector
}

export interface ILineSegment {
  start: IPoint;
  end: IPoint;
}

export interface ILine {
  ILineSegment
}