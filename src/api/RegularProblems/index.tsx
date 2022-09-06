
import instance from "../instance";

export const getRegularProblems = async (params: {
  pageIndex: number;
  pageSize: number;
}) => {
  try {
    const res = await instance.get("/catalogue/frequently-asked-questions", {
      params: { ...params },
    });
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
