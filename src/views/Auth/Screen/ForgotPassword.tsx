import { getOTPEmail, getOTPPhone } from "@/api/Auth";
import { HeaderAuth, HeadingAuth, ModalLoading } from "@/components";
import { settings } from "@/config";
import { ForgotPasswordProps } from "@/navigation/types/Auth";
import AnimatedLottieView from "lottie-react-native";
import {
  Container,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Text,
  Toast,
  View,
} from "native-base";
import React, { FC, useCallback, useRef, useState } from "react";
import { StyleSheet, TextInput, TouchableWithoutFeedback } from "react-native";
import { Modalize } from "react-native-modalize";
import Animated, { EasingNode, log } from "react-native-reanimated";

const {
  mainColor,
  mainColorText,
  borderColor,
  dangerColor,
  padding,
  blueColor,
  orangeColor,
  labelColor,
} = settings.styles;
const duration = 100;

const ForgotPasswordScreen: FC<ForgotPasswordProps> = ({ navigation }) => {
  // handle active when press email or phone
  const animatedEmail = useRef(new Animated.Value(-6)).current;
  const animatedPhone = useRef(new Animated.Value(-6)).current;
  const animatedLabelEmail = useRef(new Animated.Value(15)).current;
  const animatedLabelPhone = useRef(new Animated.Value(15)).current;
  const toggleAnimatedLabel = useCallback(
    (type: "email" | "phonenumber", status: "up" | "down") => {
      if (status === "up") {
        Animated.timing(
          type === "email" ? animatedLabelEmail : animatedLabelPhone,
          {
            toValue: -13,
            duration: 150,
            easing: EasingNode.ease,
          }
        ).start();
      } else {
        Animated.timing(
          type === "email" ? animatedLabelEmail : animatedLabelPhone,
          {
            toValue: 15,
            duration: 150,
            easing: EasingNode.ease,
          }
        ).start();
      }
    },
    []
  );
  const toggleAnimatedInput = useCallback(
    (type: "email" | "phonenumber", status: "up" | "down") => {
      if (status === "up") {
        Animated.timing(type === "email" ? animatedEmail : animatedPhone, {
          toValue: -32,
          duration,
          easing: EasingNode.ease,
        }).start();
      } else {
        Animated.timing(type === "email" ? animatedEmail : animatedPhone, {
          toValue: -6,
          duration,
          easing: EasingNode.ease,
        }).start();
      }
    },
    []
  );

  // checkbox
  const [checkbox, setCheckbox] = useState({
    email: false,
    phonenumber: false,
  });

  const toggleCheckbox = (name: "email" | "phonenumber") => {
    if (name === "email") {
      setCheckbox({ ...checkbox, email: true, phonenumber: false });
      toggleAnimatedInput("email", "up");
      toggleAnimatedInput("phonenumber", "down");
      toggleAnimatedLabel("email", "up");
      if (!phonenumber.length) toggleAnimatedLabel("phonenumber", "down");
    } else {
      setCheckbox({ ...checkbox, email: false, phonenumber: true });
      toggleAnimatedInput("phonenumber", "up");
      toggleAnimatedInput("email", "down");
      toggleAnimatedLabel("phonenumber", "up");
      if (!email.length) toggleAnimatedLabel("email", "down");
    }
  };

  // x??c th???c d??? li???u
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [errors, setErrors] = useState({
    email: { type: "", message: "" },
    phonenumber: { type: "", message: "" },
  });
  const trigger = (error: "email" | "phonenumber"): boolean => {
    let type = "";
    let message = "";
    let bool = true;
    if (error === "email") {
      if (!email.length) {
        type = "required";
        message = "Email kh??ng ???????c b??? tr???ng";
        bool = false;
      } else if (
        !email.match(
          new RegExp("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        )
      ) {
        type = "pattern";
        message = "Email kh??ng ????ng ?????nh d???ng";
        bool = false;
      }
      setErrors({
        ...errors,
        [error]: { type, message },
      });
    } else {
      if (!phonenumber.length) {
        type = "required";
        message = "S??? ??i???n tho???i kh??ng ???????c b??? tr???ng";
        bool = false;
      } else if (!phonenumber.match(new RegExp("^[0-9]+$"))) {
        type = "pattern";
        message = "S??? ??i???n tho???i kh??ng ????ng ?????nh d???ng";
        bool = false;
      } else if (phonenumber.length < 10) {
        type = "minLength";
        message = "S??? ??i???n tho???i ph???i ??t nh???t 10 k?? t???";
        bool = false;
      }
      setErrors({
        ...errors,
        [error]: { type, message },
      });
    }
    return bool;
  };

  // submit
  // ++ email
  const [loading, setLoading] = useState(false);
  const _onSubmitEmail = async () => {
    if (trigger("email")) {
      setLoading(true);
      getOTPEmail(email)
        .then(() =>
          navigation.navigate("ConfirmOTP", {
            email,
            phone: null,
            type: "email",
          })
        )
        .catch((err) => Toast.show({ text: err.response.data.ResultMessage }))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // ++ phone number
  const _onSubmitPhonenumber = () => {
    if (trigger("phonenumber")) {
      setLoading(true);
      getOTPPhone(phonenumber)
        .then(() =>
          navigation.navigate("ConfirmOTP", {
            phone: phonenumber,
            email: null,
            type: "phone",
          })
        )
        .catch((err) => Toast.show({ text: err.response.data.ResultMessage }))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // ++ handle submit between 2 submits
  const handleSubmit = () => {
    if (!checkbox.email && !checkbox.phonenumber) {
      Toast.show({
        text: "Vui l??ng ??i???n th??ng tin email ho???c s??? ??i???n tho???i",
      });
    } else if (checkbox.email) {
      _onSubmitEmail();
    } else {
      _onSubmitPhonenumber();
    }
  };

  return (
    <Container style={styles.container}>
      <HeaderAuth />
      <View style={styles.body}>
        <HeadingAuth text="Qu??n m???t kh???u" />
        <Text style={styles.require}>
          Vui l??ng nh???p m?? email ho???c s??? ??i???n thoa???. Ch??ng t??i s??? g???i b???n th??ng
          tin ????? t???o l???i m???t kh???u
        </Text>
        <Form style={styles.frmcontrol}>
          <View style={styles.flex}>
            <Animated.View
              style={{ transform: [{ translateY: animatedEmail }] }}
            >
              {!checkbox.email && (
                <Icon type="Feather" name="circle" style={styles.chkbox} />
              )}
              {checkbox.email && (
                <Icon
                  type="Feather"
                  name="check-circle"
                  style={[styles.chkbox, { color: orangeColor }]}
                />
              )}
            </Animated.View>
            <View
              style={[
                styles.frmgroup,
                checkbox.email && { borderColor: mainColor },
              ]}
            >
              <Animated.Text
                style={[styles.label, { top: animatedLabelEmail }]}
              >
                EMAIL
              </Animated.Text>
              <Input
                placeholderTextColor="rgba(0, 0, 0, .5)"
                style={styles.input}
                onFocus={() => toggleCheckbox("email")}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
          </View>
          <View style={styles.errorbox}>
            {checkbox.email && errors.email.type.length > 0 && (
              <Text style={styles.error}>{errors.email.message}</Text>
            )}
          </View>
          <View style={styles.flex}>
            <Animated.View
              style={{ transform: [{ translateY: animatedPhone }] }}
            >
              {!checkbox.phonenumber && (
                <Icon type="Feather" name="circle" style={styles.chkbox} />
              )}
              {checkbox.phonenumber && (
                <Icon
                  type="Feather"
                  name="check-circle"
                  style={[styles.chkbox, { color: orangeColor }]}
                />
              )}
            </Animated.View>
            <View
              style={[
                styles.frmgroup,
                checkbox.phonenumber && { borderColor: mainColor },
              ]}
            >
              <Animated.Text
                style={[styles.label, { top: animatedLabelPhone }]}
              >
                S??? ??I???N THO???I
              </Animated.Text>
              <Input
                keyboardType="numeric"
                placeholderTextColor="#rgba(0, 0, 0, .5)"
                style={styles.input}
                onFocus={() => toggleCheckbox("phonenumber")}
                onChangeText={(value) => setPhonenumber(value)}
              />
            </View>
          </View>
          <View style={styles.errorbox}>
            {checkbox.phonenumber && errors.phonenumber.type.length > 0 && (
              <Text style={styles.error}>{errors.phonenumber.message}</Text>
            )}
          </View>
          <TouchableWithoutFeedback
            onPress={loading ? undefined : handleSubmit}
          >
            <View style={styles.submit}>
              <Text style={styles.submittext}>X??C NH???N</Text>
            </View>
          </TouchableWithoutFeedback>
        </Form>
      </View>
      <ModalLoading visible={loading} />
    </Container>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    paddingHorizontal: padding,
  },
  require: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "SFProDisplay-Regular",
    color: mainColorText,
    opacity: 0.7,
    textAlign: "center",
  },
  frmcontrol: {},
  chkbox: {
    fontSize: 24,
    marginRight: 10,
    color: "#8794BE",
  },
  frmgroup: {
    width: "100%",
    height: 50,
    top: 8,
    paddingTop: 3,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderColor,
    justifyContent: "center",
    marginTop: 26,
  },
  label: {
    position: "absolute",
    fontSize: 12,
    letterSpacing: 1.5,
    fontFamily: "SFProDisplay-Regular",
    color: labelColor,
  },
  input: {
    ...(StyleSheet.absoluteFill as {}),
    fontSize: 18,
    letterSpacing: 0.5,
    fontFamily: "SFProDisplay-Regular",
    color: mainColorText,
    paddingLeft: 0,
    paddingRight: 0,
    paddingHorizontal: 0,
  },
  errorbox: {
    marginTop: 15,
  },
  error: {
    left: 36,
    fontSize: 12,
    lineHeight: 16,
    color: dangerColor,
    fontFamily: "SFProDisplay-Medium",
  },
  submit: {
    backgroundColor: blueColor,
    marginTop: 40,
    alignSelf: "center",
    paddingHorizontal: 56,
    paddingTop: 15,
    paddingBottom: 17,
    borderRadius: 100,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  submiticon: {
    height: "auto",
    marginRight: 15,
  },
  submittext: {
    letterSpacing: 1.25,
    fontSize: 16,
    fontFamily: "SFProDisplay-Bold",
    color: "#fff",
  },
  loading: {
    ...(StyleSheet.absoluteFill as {}),
    backgroundColor: "#ffffff3a",
  },
});

export default ForgotPasswordScreen;
