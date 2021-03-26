export interface IPoint {
  [key: string]: number;
}

export interface IVector extends IPoint {
}

export interface IDirection extends IVector {
}

export interface ILineSegment {
  start: IPoint;
  end: IPoint;
}

export interface ILine extends ILineSegment {
}