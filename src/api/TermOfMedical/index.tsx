
import instance from "../instance";

export const getTermOfMedical = async (params: {
  pageIndex: number;
  pageSize: number;
}) => {
  try {
    const res = await instance.get("/catalogue/medical-examination-process", {
      params: { ...params },
    });
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
