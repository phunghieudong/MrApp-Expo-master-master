import instance from "../instance";

export const getUserManual = async () => {
  try {
    const res = await instance.get("/catalogue/user-manual");
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
