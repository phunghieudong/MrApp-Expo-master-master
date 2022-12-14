import { settings } from "@/config";
import { RegisterProps } from "@/navigation/types/Auth";
import { RegisterData } from "@/types/Auth";
import { getOTPPhone, registerUser } from "@/api/Auth";
import { Container, Content, Form, Text, Toast, View } from "native-base";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import {
  StyleSheet,
  InteractionManager,
  TouchableWithoutFeedback,
} from "react-native";
import {
  DateTimePickerBlock,
  HeaderAuth,
  HeadingAuth,
  InputBlock,
  Loading,
  ModalLoading,
  PickerBlock,
} from "@/components";
import {
  CityData,
  CountryData,
  DistrictData,
  JobData,
  NationData,
  WardData,
} from "@/types/base";
import {
  getCities,
  getCountries,
  getDistricts,
  getJobs,
  getNations,
  getWards,
} from "@/api/Catalogue";
import AnimatedLottieView from "lottie-react-native";
import { Modalize } from "react-native-modalize";

const { padding, mainColor, mainColorText, dangerColor, blueColor } =
  settings.styles;
const { genders } = settings.defaultData;

type keyRequired =
  | "userFullName"
  | "phone"
  | "email"
  | "identityCardNo"
  | "password"
  | "confirmPassword"
  | "userName";

const RegisterScreen = (props: RegisterProps) => {
  // navigation
  const { navigation } = props;

  // checkbox
  const [checkbox, setCheckbox] = useState(false);
  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
    if (checkbox) {
      setValue("agreement", false);
    } else {
      setValue("agreement", true);
    }
    trigger("agreement");
  };

  // ++ countries
  const [ready, setReady] = useState(0);
  const [countries, setCountries] = useState<Array<CountryData>>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getCountries();
        setCountries([...res.Data]);
        setReady((prev) => prev + 1);
      } catch (error) {
        throw new Error("Error fetch countries data !");
      }
    })();
  }, []);

  // jobs
  const [jobs, setJobs] = useState<Array<JobData>>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getJobs();
        setJobs([...res.Data]);
        setReady((prev) => prev + 1);
      } catch (error) {
        throw new Error("Error fetch jobs data !");
      }
    })();
  }, []);

  // ++ nations / cities / districts / wards
  const [nations, setNations] = useState<Array<NationData>>([]);
  const [cities, setCities] = useState<Array<CityData>>([]);
  const [districts, setDistricts] = useState<Array<DistrictData>>([]);
  const [wards, setWards] = useState<Array<WardData>>([]);

  const refreshValueNationAndCity = useCallback(() => {
    setValue("nationId", null);
    setValue("cityId", null);
  }, []);

  const getDataNationsAndCities = useCallback(async (countryId: number) => {
    const countriesData = await getCities(countryId);
    setCities(countriesData.Data);
    const nationsData = await getNations(countryId);
    setNations(nationsData.Data);
  }, []);

  const refreshValueDistrict = useCallback(() => {
    setValue("districtId", null);
  }, []);

  const getDataDistricts = useCallback(async (cityId: number) => {
    const res = await getDistricts(cityId);
    setDistricts(res.Data);
  }, []);

  const refreshValueWard = useCallback(() => {
    setValue("wardId", null);
  }, []);

  const getDataWards = useCallback(async (districtId: number) => {
    const res = await getWards(districtId);
    setWards([...res.Data]);
  }, []);

  const [refresh, setRefresh] = useState({
    num: 0,
    toggle: true,
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const { num } = refresh;
      try {
        setLoading(true);
        if (num === 1) {
          await Promise.all([
            Promise.resolve(refreshValueNationAndCity()),
            (async () => {
              const countryId = watch("countryId");
              if (countryId) getDataNationsAndCities(countryId);
            })(),
          ]);
        } else if (num === 2) {
          await Promise.all([
            Promise.resolve(refreshValueDistrict()),
            (async () => {
              const cityId = watch("cityId");
              if (cityId) getDataDistricts(cityId);
            })(),
          ]);
        } else if (num === 3) {
          await Promise.all([
            Promise.resolve(refreshValueWard()),
            (async () => {
              const districtId = watch("districtId");
              if (districtId) getDataWards(districtId);
            })(),
          ]);
        }
      } catch (error) {
        throw new Error("ERROR FETCHING DATA...");
      } finally {
        setLoading(false);
      }
    })();
  }, [refresh.toggle]);

  // react hook form
  const {
    register,
    setValue,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<RegisterData>();

  useEffect(() => {
    register("identityCardNo", {
      required: true,
      minLength: 9,
      pattern: new RegExp("^[0-9]+$"),
    });
    register("email", {
      required: true,
      pattern: new RegExp("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
    });
    register("userFullName", {
      required: true,
      minLength: 6,
      pattern: new RegExp(
        "^[a-zA-Z ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????]+$"
      ),
    });
    register("phone", {
      required: true,
      minLength: 9,
      maxLength: 11,
      pattern: new RegExp("^[0-9]+$"),
    });
    register("userName", {
      required: true,
      validate: (value) => value === watch("phone"),
    });
    register("password", {
      required: true,
      minLength: 8,
      maxLength: 128,
      pattern: new RegExp("^[a-zA-Z0-9_.-]+$"),
    });
    register("confirmPassword", {
      required: true,
      minLength: 8,
      maxLength: 128,
      validate: (value) => value === watch("password"),
      pattern: new RegExp("^[a-zA-Z0-9_.-]+$"),
    });
    register("countryId", {
      required: true,
    });
    register("nationId", {
      required: true,
      validate: (val) => val !== null,
    });
    register("cityId", {
      required: true,
      validate: (val) => val !== null,
    });
    register("districtId", {
      required: true,
      validate: (val) => val !== null,
    });
    register("wardId", {
      required: true,
      validate: (val) => val !== null,
    });
    register("jobId", {
      required: true,
    });
    register("gender", {
      required: true,
    });
    register("agreement", { required: true });
  }, [register]);

  const onValueChange = (
    k: keyRequired,
    v,
    callBack_k?: keyRequired,
    callBack_v?,
    type?: number
  ) => {
    setValue(k, v);
    if (callBack_k && callBack_v) {
      setValue(callBack_k, callBack_v);
    }
    if (type) {
      setRefresh((prev) => ({ num: type, toggle: !prev.toggle }));
    }
  };

  const onTrigger = (k: keyRequired) => {
    trigger(k);
  };

  const _onPress = async (data: RegisterData) => {
    setLoading(true);
    registerUser(data)
      .then(() => getOTPPhone(data.phone))
      .then(() => new Promise((resolve) => setTimeout(resolve, 2000)))
      .then(() =>
        navigation.navigate("ConfirmOTP", {
          phone: data.phone,
          type: "phone",
          email: null,
        })
      )
      .catch((err) => Toast.show({ text: err.response.data.ResultMessage }))
      .finally(() => {
        setLoading(false);
      });
  };

  const _onError = () => {
    Toast.show({
      text: "Vui l??ng ??i???n ?????y ????? th??ng tin",
    });
  };

  return (
    <Container style={styles.container}>
      <HeaderAuth />
      <Content style={styles.body}>
        <HeadingAuth text="????NG K?? NGAY" align="left" />
        <Form style={styles.frmcontrol}>
          <InputBlock
            owner="userFullName"
            placeholder="H??? V?? T??N"
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.userFullName}
            errorMess={{
              required: "H??? v?? t??n kh??ng ???????c b??? tr???ng",
              minLength: "H??? v?? t??n ph???i ??t nh???t 6 k?? t???",
              pattern: "H??? v?? t??n kh??ng h???p l???",
            }}
          />
          <InputBlock
            userName
            keyboardType="numeric"
            owner="phone"
            placeholder="S??? ??I???N THO???I"
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.phone}
            errorMess={{
              required: "S??? ??i???n tho???i kh??ng ???????c ????? tr???ng",
              minLength: "S??? ??i???n tho???i ph???i t??? 9 ?????n 11 k?? t???",
              maxLength: "S??? ??i???n tho???i ph???i t??? 9 ?????n 11 k?? t???",
              pattern: "S??? ??i???n tho???i kh??ng h???p l???",
            }}
          />
          <InputBlock
            owner="email"
            placeholder="EMAIL"
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.email}
            errorMess={{
              required: "Email kh??ng ???????c b??? tr???ng",
              validate: "Email kh??ng h???p l???",
            }}
          />
          <InputBlock
            keyboardType="numeric"
            owner="identityCardNo"
            placeholder="CMND / CCCD"
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.identityCardNo}
            errorMess={{
              required: "CMND / CCCD kh??ng ???????c b??? tr???ng",
              minLength: "CMND / CCCD ph???i ??t nh???t 9 k?? t???",
              pattern: "CMND / CCCD kh??ng h???p l???",
            }}
          />
          <DateTimePickerBlock
            owner="birthDate"
            placeholder="NG??Y SINH"
            errors={errors.birthDate}
            errorMess={{ required: "Vui l??ng ch???n ng??y sinh" }}
            onTrigger={onTrigger}
            onValueChange={onValueChange}
            maximumDate={new Date()}
          />
          <PickerBlock
            refresh={0}
            data={genders}
            picker
            placeholder="GI???I T??NH"
            item={{
              itemOwner: "gender",
              itemLabel: "Name",
              itemValue: "Id",
            }}
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.gender}
            errorMess={{ required: "VUI L??NG CH???N GI???I T??NH" }}
          />
          <PickerBlock
            data={jobs}
            refresh={0}
            search="Nh???p ngh??? nghi???p"
            placeholder="NGH??? NGHI???P"
            item={{
              itemOwner: "jobId",
              itemLabel: "Name",
              itemValue: "Id",
            }}
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.jobId}
            errorMess={{
              required: "VUI L??NG CH???N NGH??? NGHI???P",
            }}
          />
          <PickerBlock
            data={countries}
            refresh={1}
            search="Nh???p qu???c gia"
            placeholder="QU???C GIA"
            item={{
              itemOwner: "countryId",
              itemLabel: "Name",
              itemValue: "Id",
            }}
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.countryId}
            errorMess={{ required: "VUI L??NG CH???N QU???C GIA" }}
          />
          <PickerBlock
            data={nations}
            refresh={0}
            search="Nh???p d??n t???c"
            placeholder="D??N T???C"
            item={{
              itemOwner: "nationId",
              itemLabel: "Name",
              itemValue: "Id",
            }}
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.nationId}
            errorMess={{
              required: "VUI L??NG CH???N D??N T???C",
            }}
          />
          <PickerBlock
            data={cities}
            refresh={2}
            search="Nh???p t???nh / th??nh ph???"
            placeholder="T???NH / TH??NH PH???"
            item={{
              itemOwner: "cityId",
              itemLabel: "Name",
              itemValue: "Id",
            }}
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.cityId}
            errorMess={{
              required: "VUI L??NG CH???N T???NH TH??NH PH???",
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <PickerBlock
                data={districts}
                refresh={3}
                search="Nh???p qu???n / huy???n"
                placeholder="QU???N / HUY???N"
                item={{
                  itemOwner: "districtId",
                  itemLabel: "Name",
                  itemValue: "Id",
                }}
                onValueChange={onValueChange}
                onTrigger={onTrigger}
                errors={errors.districtId}
                errorMess={{
                  required: "VUI L??NG CH???N QU???N / HUY???N",
                }}
              />
            </View>
            <View style={{ width: padding }} />
            <View style={{ flex: 1 }}>
              <PickerBlock
                data={wards}
                refresh={0}
                search="Nh???p ph?????ng x??"
                placeholder="PH?????NG / X??"
                item={{
                  itemOwner: "wardId",
                  itemLabel: "Name",
                  itemValue: "Id",
                }}
                onValueChange={onValueChange}
                onTrigger={onTrigger}
                errors={errors.wardId}
                errorMess={{
                  required: "VUI L??NG CH???N PH?????NG X??",
                }}
              />
            </View>
          </View>
          <InputBlock
            owner="address"
            placeholder="?????A CH???"
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.address}
            errorMess={{
              required: "?????A CH??? KH??NG ???????C B??? TR???NG",
              minLength: "?????A CH??? PH???I T??? 8 ?????N 128 K?? T???",
              maxLength: "?????A CH??? PH???I T??? 8 ?????N 128 K?? T???",
              pattern: "?????A CH??? KH??NG ???????C C?? K?? T??? ?????C BI???T",
            }}
          />
          <InputBlock
            hide
            owner="password"
            placeholder="M???T KH???U"
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.password}
            errorMess={{
              required: "M???t kh???u kh??ng ???????c b??? tr???ng",
              minLength: "M???t kh???u ph???i t??? 8 ?????n 128 k?? t???",
              maxLength: "M???t kh???u ph???i t??? 8 ?????n 128 k?? t???",
              pattern: "M???t kh???u kh??ng ???????c c?? k?? t??? ?????c bi???t",
            }}
          />
          <InputBlock
            hide
            owner="confirmPassword"
            placeholder="NH???P L???I M???T KH???U"
            onValueChange={onValueChange}
            onTrigger={onTrigger}
            errors={errors.confirmPassword}
            errorMess={{
              required: "M???t kh???u kh??ng ???????c b??? tr???ng",
              minLength: "M???t kh???u ph???i t??? 8 ?????n 128 k?? t???",
              maxLength: "M???t kh???u ph???i t??? 8 ?????n 128 k?? t???",
              pattern: "M???t kh???u kh??ng ???????c c?? k?? t??? ?????c bi???t",
              validate: "Vui l??ng nh???p gi???ng m???t kh???u tr??n",
            }}
          />
          <View style={styles.commit}>
            <View style={{ flexDirection: "row" }}>
              {!checkbox && (
                <TouchableWithoutFeedback onPress={toggleCheckbox}>
                  <View style={styles.commitcheckboxoff} />
                </TouchableWithoutFeedback>
              )}
              {checkbox && (
                <TouchableWithoutFeedback onPress={toggleCheckbox}>
                  <AnimatedLottieView
                    progress={1}
                    source={require("@/assets/icons/checkbox")}
                    style={styles.commitcheckboxon}
                  />
                </TouchableWithoutFeedback>
              )}
              <Text style={styles.committext}>
                T??i ????ng ?? v???i{" "}
                <Text style={styles.commitlink}>??i???u kho???n s??? d???ng</Text> &{" "}
                <Text style={styles.commitlink}>ch??nh s??ch b???o m???t</Text>
              </Text>
            </View>
            {errors.agreement && (
              <Text style={styles.error}>
                Vui l??ng ?????ng ?? v???i ??i???u kho???n v?? ch??nh s??ch c???a ch??ng t??i
              </Text>
            )}
          </View>
          <TouchableWithoutFeedback
            onPress={loading ? undefined : handleSubmit(_onPress, _onError)}
          >
            <View style={styles.submit}>
              <Text style={styles.submittext}>????ng k??</Text>
            </View>
          </TouchableWithoutFeedback>
        </Form>
      </Content>
      <ModalLoading visible={loading} />
    </Container>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    paddingHorizontal: padding,
  },
  register: {
    fontSize: 36,
    lineHeight: 40,
    fontFamily: "SFProDisplay-Bold",
    color: mainColorText,
  },
  frmcontrol: {},
  error: {
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
    color: dangerColor,
    fontFamily: "SFProDisplay-Regular",
  },
  commit: {
    marginTop: 20,
    alignItems: "flex-start",
  },
  commitcheckboxoff: {
    width: 20,
    height: 20,
    borderRadius: 28,
    borderWidth: 1.4,
    borderColor: "#8794BE",
    marginRight: 9,
    top: 2,
  },
  commitcheckboxon: {
    position: "relative",
    left: -2,
    width: 29,
    height: 29,
  },
  committext: {
    fontSize: 16,
    lineHeight: 21,
    color: mainColorText,
    fontFamily: "SFProDisplay-Regular",
    flex: 1,
    letterSpacing: 1.25,
  },
  commitlink: {
    fontFamily: "SFProDisplay-Semibold",
    fontSize: 16,
    lineHeight: 21,
    color: blueColor,
  },
  submit: {
    elevation: 4,
    backgroundColor: blueColor,
    alignSelf: "flex-end",
    marginVertical: 24,
    paddingHorizontal: 57,
    paddingTop: 15,
    paddingBottom: 17,
    borderRadius: 100,
  },
  submittext: {
    fontSize: 16,
    letterSpacing: 1.25,
    color: "#fff",
    fontFamily: "SFProDisplay-Semibold",
  },
  loading: {
    ...(StyleSheet.absoluteFill as {}),
    backgroundColor: "#ffffff3a",
  },
  modalinner: {
    backgroundColor: "#fff",
    alignSelf: "center",
    padding: 12,
    borderRadius: 2,
    width: "80%",
  },
  modalicon: {},
  modaltext: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "SFProDisplay-Regular",
    textAlign: "center",
    color: mainColorText,
  },
});

export default RegisterScreen;
