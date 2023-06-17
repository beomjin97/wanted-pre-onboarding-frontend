export interface TodoRequest {
  todo: string;
}

export interface TodoUdateRequest extends TodoRequest {
  isCompleted: boolean;
}

export interface TodoResponse extends TodoUdateRequest {
  id: number;
  userId: number;
}
