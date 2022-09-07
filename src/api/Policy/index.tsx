

import instance from "../instance";

export const getPolicy = async (params: {
  pageIndex: number;
  pageSize: number;
}) => {
  try {
    const res = await instance.get("/catalogue/app-policy", {
      params: { ...params },
    });
    return res.data;



  } catch (error) {
    return Promise.reject(error);
  }
};
