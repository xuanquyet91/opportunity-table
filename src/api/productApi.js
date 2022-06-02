import axiosClient from "./axiosClient";

// api/productApi.js
const productApi = {
  getAll: (params) => {
    const url = '/product';
    return axiosClient.get(url, { params });
  },
  // get(id) {
  //   const url = `/products/${id}/`;
  //   return axiosClient.get(url);
  // },
  // add(data) {
  //     const url = `/products/`;
  //     return axiosClient.post(url, data);
  // },
  // update(data) {
  //     const url = `/products/${data.id}/`;
  //     return axiosClient.patch(url, data);
  // },
  remove(id) {
      const url = `/product/${id}/`;
      return axiosClient.delete(url);
  }
}

  
  export default productApi;