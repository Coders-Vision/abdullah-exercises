export interface ResponseError<T> {
  status: string;
  error: {
    code: number;
    message: string | T;
    details: any;
  };
  timestamp: Date;
}

export interface ResponseSuccess<T = {}> {
  status: string;
  data?: T;
  metadata?:  Metadata;
  message: string;
  timestamp: Date;
}

export interface Metadata {
  pagination: Pagination;
}

export interface Pagination {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}