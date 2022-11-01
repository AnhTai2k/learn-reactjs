import axiosClient from "./axiosClient";

const productApi = {
    getAll(params) {
        const url = '/products';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/categories';
        return axiosClient.get(url, data);
    },

    update(data) {
        const url = `/categories/${data.id}`;
        return axiosClient.patch(url);
    },

    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    },
};
export default productApi;