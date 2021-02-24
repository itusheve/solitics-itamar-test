export interface IDataType {
  course: ICourse;
  isDynamic?: boolean;
  isAllList?: boolean;
  state: IState;
}

export interface IState {
  active?: number;
  blocked?: number;
  new?: number;
  removed?: number;
  stopped?: number;
  total?: number;
}

export interface  ICourse {
  name: string;
  date: string;
}
