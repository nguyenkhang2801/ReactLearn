import axiosClient from "./axiosClient";

class TodoListApi {
  getTodo = (params) => {
    const url = '/todos';
    return axiosClient.get(url, { params });
  };
}

const todoListApi = new TodoListApi();

export default todoListApi;