type BaseResponse<T extends object | Array = unknown> = {
  status: number;
  message: string;
  data: T;
};
