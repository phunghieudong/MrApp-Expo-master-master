//@ts-nocheck
import { HeaderRoot, Loading } from "@/components";
import { settings } from "@/config";
import { ProfileProps } from "@/navigation/types/Profile";
import { useAppDispatch } from "@/store/hook";
import { changeRoute } from "@/store/reducers/RouteSlice";
import { logout } from "@/store/reducers/UserSlice";
import _format from "@/utils/Base";
import { Container, Content, Text, Toast, View } from "native-base";
import React, { FC } from "react";
import { FlatList, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Path,
  Rect,
} from "react-native-svg";
import { MenuItem } from "../../Block/Menu";

const { padding, mainColorText } = settings.styles;

const MenuScreen: FC<ProfileProps> = ({ navigation }) => {
  // redux
  const dispatch = useAppDispatch();

  // toast
  const showToast = () => {
    Toast.show({
      text: "Chức năng còn đang phát triển",
    });
  };

  // menu
  const menuLeft = [
    {
      svg: (
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Defs>
            <ClipPath id="clipPath">
              <Rect
                id="Rectangle_933"
                data-name="Rectangle 933"
                width="20"
                height="20"
                transform="translate(37 132)"
                fill="#219ebc"
                stroke="#707070"
                strokeWidth="1"
              />
            </ClipPath>
          </Defs>
          <G
            id="Mask_Group_341"
            data-name="Mask Group 341"
            transform="translate(-37 -132)"
            clipPath="url(#clipPath)"
          >
            <G
              id="user_12_"
              data-name="user (12)"
              transform="translate(37 132)"
            >
              <G id="Group_928" data-name="Group 928">
                <Path
                  id="Path_2246"
                  data-name="Path 2246"
                  d="M19.949,17.138a.781.781,0,0,0-1.53.318.816.816,0,0,1-.165.684.794.794,0,0,1-.625.3H2.371a.794.794,0,0,1-.625-.3.816.816,0,0,1-.165-.684,8.632,8.632,0,0,1,8.212-6.835q.1,0,.207,0t.208,0a8.594,8.594,0,0,1,6.941,3.815.781.781,0,1,0,1.3-.87,10.162,10.162,0,0,0-5.266-4,5.312,5.312,0,1,0-6.359,0A10.161,10.161,0,0,0,.051,17.138,2.373,2.373,0,0,0,2.371,20H17.629a2.374,2.374,0,0,0,2.32-2.862ZM6.25,5.313a3.75,3.75,0,1,1,3.94,3.745l-.19,0-.189,0A3.755,3.755,0,0,1,6.25,5.313Z"
                  fill="#219ebc"
                />
              </G>
            </G>
          </G>
        </Svg>
      ),
      text: "Hồ sơ\ncá nhân",
      navigate: () => navigation.navigate("PatientProfile"),
    },
    {
      svg: (
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Defs>
            <ClipPath id="clipPath">
              <Rect
                id="Rectangle_1064"
                data-name="Rectangle 1064"
                width="20"
                height="20"
                transform="translate(37 206)"
                fill="#219ebc"
                stroke="#707070"
                strokeWidth="1"
              />
            </ClipPath>
          </Defs>
          <G
            id="Mask_Group_346"
            data-name="Mask Group 346"
            transform="translate(-37 -206)"
            clipPath="url(#clipPath)"
          >
            <G
              id="Layer_2"
              data-name="Layer 2"
              transform="translate(36.333 205.333)"
            >
              <Path
                id="Path_2254"
                data-name="Path 2254"
                d="M17.153.667H4.18A2.187,2.187,0,0,0,2,2.847v15.64a2.187,2.187,0,0,0,2.18,2.18H9.653a2.873,2.873,0,0,0,2.173-1l6.667-7.76a3.4,3.4,0,0,0,.84-2.267V2.847a2.187,2.187,0,0,0-2.18-2.18Zm-5.82,17.507v-5.46a1.38,1.38,0,0,1,1.373-1.38h4.507Z"
                fill="#219ebc"
              />
            </G>
          </G>
        </Svg>
      ),
      text: "Hướng dẫn\nsử dụng",
      navigate: () => Toast.show({ text: "Tính năng còn đang phát triển" }),
    },
    {
      svg: (
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Defs>
            <ClipPath id="clipPath">
              <Rect
                id="Rectangle_1065"
                data-name="Rectangle 1065"
                width="20"
                height="20"
                transform="translate(136 142)"
                fill="#fff"
                stroke="#707070"
                strokeWidth="1"
              />
            </ClipPath>
          </Defs>
          <G
            id="Mask_Group_314"
            data-name="Mask Group 314"
            transform="translate(-136 -142)"
            clipPath="url(#clipPath)"
          >
            <G
              id="Layer_2"
              data-name="Layer 2"
              transform="translate(136 144.415)"
            >
              <Path
                id="Path_2167"
                data-name="Path 2167"
                d="M10.4,8.968H5.066a.667.667,0,1,0,0,1.333H10.4a.667.667,0,1,0,0-1.333Z"
                transform="translate(-1.067 -3.645)"
                fill="#fff"
              />
              <Path
                id="Path_2168"
                data-name="Path 2168"
                d="M10.4,13.031H5.066a.667.667,0,1,0,0,1.333H10.4a.667.667,0,1,0,0-1.333Z"
                transform="translate(-1.067 -4.014)"
                fill="#fff"
              />
              <Path
                id="Path_2169"
                data-name="Path 2169"
                d="M21.312,3.676a2.053,2.053,0,0,0-2.827,0L13.9,8.283a1.14,1.14,0,0,0-.34.813v1.187a1.16,1.16,0,0,0,1.16,1.16H15.9a1.187,1.187,0,0,0,.82-.34l4.566-4.573a2,2,0,0,0,0-2.827Z"
                transform="translate(-1.899 -3.112)"
                fill="#fff"
              />
              <Path
                id="Path_2170"
                data-name="Path 2170"
                d="M20.066,8.88a.667.667,0,0,0-.667.667v6.7a.747.747,0,0,1-.753.753H2.82a.747.747,0,0,1-.753-.753V5.753A.747.747,0,0,1,2.82,5H14.006a.667.667,0,0,0,0-1.333H2.82A2.087,2.087,0,0,0,.733,5.753V16.246A2.087,2.087,0,0,0,2.82,18.333H18.646a2.087,2.087,0,0,0,2.087-2.087V9.58a.667.667,0,0,0-.667-.7Z"
                transform="translate(-0.733 -3.163)"
                fill="#fff"
              />
            </G>
          </G>
        </Svg>
      ),
      text: "Hồ sơ\nbệnh án",
      navigate: () => navigation.navigate("ServiceAccount"),
    },
    {
      svg: (
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Defs>
            <ClipPath id="clipPath">
              <Rect
                id="Rectangle_1066"
                data-name="Rectangle 1066"
                width="20"
                height="20"
                transform="translate(37 354)"
                fill="#219ebc"
                stroke="#707070"
                strokeWidth="1"
              />
            </ClipPath>
          </Defs>
          <G
            id="Mask_Group_347"
            data-name="Mask Group 347"
            transform="translate(-37 -354)"
            clipPath="url(#clipPath)"
          >
            <G id="setting-lines" transform="translate(37 354)">
              <Path
                id="Path_2255"
                data-name="Path 2255"
                d="M4.274,3.48H.588a.588.588,0,0,1,0-1.176H4.274a.588.588,0,0,1,0,1.176Z"
                fill="#219ebc"
              />
              <Path
                id="Path_2256"
                data-name="Path 2256"
                d="M6.38,5.586A2.694,2.694,0,1,1,9.074,2.892,2.7,2.7,0,0,1,6.38,5.586Zm0-4.212A1.518,1.518,0,1,0,7.9,2.892,1.52,1.52,0,0,0,6.38,1.374Z"
                fill="#219ebc"
              />
              <Path
                id="Path_2257"
                data-name="Path 2257"
                d="M19.412,3.48H10.62a.588.588,0,0,1,0-1.176h8.792a.588.588,0,0,1,0,1.176Z"
                fill="#219ebc"
              />
              <Path
                id="Path_2258"
                data-name="Path 2258"
                d="M14.278,12.694A2.694,2.694,0,1,1,16.972,10,2.7,2.7,0,0,1,14.278,12.694Zm0-4.212A1.518,1.518,0,1,0,15.8,10,1.519,1.519,0,0,0,14.278,8.482Z"
                fill="#219ebc"
              />
              <Path
                id="Path_2259"
                data-name="Path 2259"
                d="M10.038,10.588H.588a.588.588,0,0,1,0-1.176h9.45a.588.588,0,0,1,0,1.176Z"
                fill="#219ebc"
              />
              <Path
                id="Path_2260"
                data-name="Path 2260"
                d="M19.412,10.588H16.384a.588.588,0,1,1,0-1.176h3.028a.588.588,0,0,1,0,1.176Z"
                fill="#219ebc"
              />
              <Path
                id="Path_2261"
                data-name="Path 2261"
                d="M5.722,19.8a2.694,2.694,0,1,1,2.694-2.695A2.7,2.7,0,0,1,5.722,19.8Zm0-4.212A1.518,1.518,0,1,0,7.24,17.108,1.519,1.519,0,0,0,5.722,15.59Z"
                fill="#219ebc"
              />
              <Path
                id="Path_2262"
                data-name="Path 2262"
                d="M19.412,17.7H9.962a.588.588,0,0,1,0-1.176h9.45a.588.588,0,0,1,0,1.176Z"
                fill="#219ebc"
              />
              <Path
                id="Path_2263"
                data-name="Path 2263"
                d="M3.616,17.7H.588a.588.588,0,0,1,0-1.177H3.616a.588.588,0,0,1,0,1.177Z"
                fill="#219ebc"
              />
            </G>
          </G>
        </Svg>
      ),
      text: "Cài đặt",
      navigate: () => Toast.show({ text: "Tính năng còn đang phát triển" }),
    },
    {
      svg: (
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Defs>
            <ClipPath id="clipPath">
              <Rect
                id="Rectangle_1067"
                data-name="Rectangle 1067"
                width="20"
                height="20"
                transform="translate(37 412)"
                fill="#219ebc"
                stroke="#707070"
                strokeWidth="1"
              />
            </ClipPath>
          </Defs>
          <G
            id="Mask_Group_342"
            data-name="Mask Group 342"
            transform="translate(-37 -412)"
            clipPath="url(#clipPath)"
          >
            <Path
              id="video-camera-2"
              d="M19.743,5.122a.586.586,0,0,0-.546-.059L13.724,7.252V5.607a1.843,1.843,0,0,0-1.841-1.841H1.841A1.843,1.843,0,0,0,0,5.607v8.786a1.843,1.843,0,0,0,1.841,1.841H11.883a1.843,1.843,0,0,0,1.841-1.841V12.748L19.2,14.937a.586.586,0,0,0,.8-.544V5.607a.586.586,0,0,0-.257-.485Zm-7.19,9.272a.67.67,0,0,1-.669.669H1.841a.67.67,0,0,1-.669-.669V5.607a.67.67,0,0,1,.669-.669H11.883a.67.67,0,0,1,.669.669Zm6.276-.865-5.1-2.042V8.514l5.1-2.042Z"
              transform="translate(37 412)"
              fill="#219ebc"
            />
          </G>
        </Svg>
      ),
      text: "Tư vấn khám\ntrực tiếp",
      navigate: () => Toast.show({ text: "Tính năng còn đang phát triển" }),
    },
    {
      svg: (
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Defs>
            <ClipPath id="clipPath">
              <Rect
                id="Rectangle_1065"
                data-name="Rectangle 1065"
                width="20"
                height="20"
                transform="translate(136 142)"
                fill="#219ebc"
                stroke="#707070"
                strokeWidth="1"
              />
            </ClipPath>
          </Defs>
          <G
            id="Mask_Group_314"
            data-name="Mask Group 314"
            transform="translate(-136 -142)"
            clipPath="url(#clipPath)"
          >
            <G
              id="Layer_2"
              data-name="Layer 2"
              transform="translate(136 144.415)"
            >
              <Path
                id="Path_2167"
                data-name="Path 2167"
                d="M10.4,8.968H5.066a.667.667,0,1,0,0,1.333H10.4a.667.667,0,1,0,0-1.333Z"
                transform="translate(-1.067 -3.645)"
                fill="#219ebc"
              />
              <Path
                id="Path_2168"
                data-name="Path 2168"
                d="M10.4,13.031H5.066a.667.667,0,1,0,0,1.333H10.4a.667.667,0,1,0,0-1.333Z"
                transform="translate(-1.067 -4.014)"
                fill="#219ebc"
              />
              <Path
                id="Path_2169"
                data-name="Path 2169"
                d="M21.312,3.676a2.053,2.053,0,0,0-2.827,0L13.9,8.283a1.14,1.14,0,0,0-.34.813v1.187a1.16,1.16,0,0,0,1.16,1.16H15.9a1.187,1.187,0,0,0,.82-.34l4.566-4.573a2,2,0,0,0,0-2.827Z"
                transform="translate(-1.899 -3.112)"
                fill="#219ebc"
              />
              <Path
                id="Path_2170"
                data-name="Path 2170"
                d="M20.066,8.88a.667.667,0,0,0-.667.667v6.7a.747.747,0,0,1-.753.753H2.82a.747.747,0,0,1-.753-.753V5.753A.747.747,0,0,1,2.82,5H14.006a.667.667,0,0,0,0-1.333H2.82A2.087,2.087,0,0,0,.733,5.753V16.246A2.087,2.087,0,0,0,2.82,18.333H18.646a2.087,2.087,0,0,0,2.087-2.087V9.58a.667.667,0,0,0-.667-.7Z"
                transform="translate(-0.733 -3.163)"
                fill="#219ebc"
              />
            </G>
          </G>
        </Svg>
      ),
      text: "Câu hỏi\nthường gặp",
      navigate: () => Toast.show({ text: "Tính năng còn đang phát triển" }),
    },
    {
      svg: (
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Defs>
            <ClipPath id="clipPath">
              <Rect
                id="Rectangle_1069"
                data-name="Rectangle 1069"
                width="20"
                height="20"
                transform="translate(37 560)"
                fill="#219ebc"
                stroke="#707070"
                strokeWidth="1"
              />
            </ClipPath>
          </Defs>
          <G
            id="Mask_Group_343"
            data-name="Mask Group 343"
            transform="translate(-37 -560)"
            clipPath="url(#clipPath)"
          >
            <G id="lock_1_" data-name="lock (1)" transform="translate(37 560)">
              <G id="Group_929" data-name="Group 929">
                <Path
                  id="Path_2247"
                  data-name="Path 2247"
                  d="M17.083,7.5h-1.25V5.833a5.833,5.833,0,1,0-11.667,0V7.5H2.917a.416.416,0,0,0-.417.417V18.333A1.668,1.668,0,0,0,4.167,20H15.833A1.668,1.668,0,0,0,17.5,18.333V7.917A.416.416,0,0,0,17.083,7.5Zm-5.836,8.7a.417.417,0,0,1-.414.463H9.167a.417.417,0,0,1-.414-.463l.263-2.364a1.648,1.648,0,0,1-.682-1.34,1.667,1.667,0,0,1,3.333,0,1.648,1.648,0,0,1-.682,1.34Zm2.086-8.7H6.667V5.833a3.333,3.333,0,1,1,6.667,0Z"
                  fill="#219ebc"
                />
              </G>
            </G>
          </G>
        </Svg>
      ),
      text: "Chính sách",
      navigate: () => navigation.navigate("PrivacyPolicy"),
    },
    {
      svg: (
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Defs>
            <ClipPath id="clipPath">
              <Rect
                id="Rectangle_1070"
                data-name="Rectangle 1070"
                width="20"
                height="20"
                transform="translate(37 618)"
                fill="#219ebc"
                stroke="#707070"
                strokeWidth="1"
              />
            </ClipPath>
          </Defs>
          <G
            id="Mask_Group_344"
            data-name="Mask Group 344"
            transform="translate(-37 -618)"
            clipPath="url(#clipPath)"
          >
            <G
              id="Layer_2"
              data-name="Layer 2"
              transform="translate(35.571 616.571)"
            >
              <Path
                id="Path_2248"
                data-name="Path 2248"
                d="M20,2.857H8.571a1.429,1.429,0,0,0,0,2.857H20a1.429,1.429,0,1,0,0-2.857Z"
                fill="#219ebc"
              />
              <Circle
                id="Ellipse_146"
                data-name="Ellipse 146"
                cx="1.429"
                cy="1.429"
                r="1.429"
                transform="translate(1.429 2.857)"
                fill="#219ebc"
              />
              <Path
                id="Path_2249"
                data-name="Path 2249"
                d="M20,10H8.571a1.429,1.429,0,0,0,0,2.857H20A1.429,1.429,0,1,0,20,10Z"
                fill="#219ebc"
              />
              <Circle
                id="Ellipse_147"
                data-name="Ellipse 147"
                cx="1.429"
                cy="1.429"
                r="1.429"
                transform="translate(1.429 10)"
                fill="#219ebc"
              />
              <Path
                id="Path_2250"
                data-name="Path 2250"
                d="M20,17.143H8.571a1.429,1.429,0,0,0,0,2.857H20a1.429,1.429,0,1,0,0-2.857Z"
                fill="#219ebc"
              />
              <Circle
                id="Ellipse_148"
                data-name="Ellipse 148"
                cx="1.429"
                cy="1.429"
                r="1.429"
                transform="translate(1.429 17.143)"
                fill="#219ebc"
              />
            </G>
          </G>
        </Svg>
      ),
      text: "Quy trình\nkhám bệnh",
      navigate: () => Toast.show({ text: "Tính năng còn đang phát triển" }),
    },
    {
      svg: (
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Defs>
            <ClipPath id="clipPath">
              <Rect
                id="Rectangle_1071"
                data-name="Rectangle 1071"
                width="20"
                height="20"
                transform="translate(37 692)"
                fill="#219ebc"
                stroke="#707070"
                strokeWidth="1"
              />
            </ClipPath>
          </Defs>
          <G
            id="Mask_Group_345"
            data-name="Mask Group 345"
            transform="translate(-37 -692)"
            clipPath="url(#clipPath)"
          >
            <G
              id="Layer_2"
              data-name="Layer 2"
              transform="translate(36.333 691.333)"
            >
              <Path
                id="Path_2251"
                data-name="Path 2251"
                d="M14.873,20.667H9.787a1.853,1.853,0,0,1-1.24-.473L2.613,14.86A1.86,1.86,0,0,1,2,13.507V2.46A1.793,1.793,0,0,1,3.793.667h11.08A1.793,1.793,0,0,1,16.667,2.46V18.873a1.793,1.793,0,0,1-1.793,1.793ZM3.793,2a.46.46,0,0,0-.46.46V13.507a.527.527,0,0,0,.173.393L9.44,19.233a.52.52,0,0,0,.347.133h5.087a.46.46,0,0,0,.46-.46V2.46a.46.46,0,0,0-.46-.46Z"
                fill="#219ebc"
              />
              <Path
                id="Path_2252"
                data-name="Path 2252"
                d="M10,19.627H8.667V14.833a.127.127,0,0,0-.127-.127H2.667V13.373H8.54A1.46,1.46,0,0,1,10,14.833Z"
                fill="#219ebc"
              />
              <Rect
                id="Rectangle_1152"
                data-name="Rectangle 1152"
                width="6.667"
                height="1.333"
                rx="0.667"
                transform="translate(5.78 6.873)"
                fill="#219ebc"
              />
              <Rect
                id="Rectangle_1153"
                data-name="Rectangle 1153"
                width="2.667"
                height="1.333"
                rx="0.667"
                transform="translate(5.78 4)"
                fill="#219ebc"
              />
              <Path
                id="Path_2253"
                data-name="Path 2253"
                d="M17.667,17.767a1.694,1.694,0,0,1-.333-.033l-1.433-.24.22-1.333,1.46.247a.353.353,0,0,0,.307-.06.333.333,0,0,0,.127-.26V5.233a.34.34,0,0,0-.407-.327l-1.507.2-.173-1.333,1.46-.193a1.62,1.62,0,0,1,1.333.347,1.66,1.66,0,0,1,.613,1.307V16.1a1.673,1.673,0,0,1-1.667,1.667Z"
                fill="#219ebc"
              />
            </G>
          </G>
        </Svg>
      ),
      text: "Tin tức",
      navigate: () => navigation.navigate("News"),
    },
    {
      svg: (
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Defs>
            <ClipPath id="clipPath">
              <Rect
                id="Rectangle_815"
                data-name="Rectangle 815"
                width="20"
                height="20"
                transform="translate(30 1211)"
                fill="#e85d04"
                stroke="#707070"
                strokeWidth="1"
              />
            </ClipPath>
          </Defs>
          <G
            id="Mask_Group_235"
            data-name="Mask Group 235"
            transform="translate(-30 -1211)"
            clipPath="url(#clipPath)"
          >
            <G id="layer1" transform="translate(28 110.484)">
              <Path
                id="path52"
                d="M11.989,1100.516a1,1,0,0,0-.99,1.016v8.038a1,1,0,1,0,2,0v-8.038a1,1,0,0,0-1.012-1.016Zm5.835,2.015c-.033,0-.065,0-.1,0a1.006,1.006,0,0,0-.555,1.773,8,8,0,1,1-10.372.029,1.008,1.008,0,0,0,.111-1.417,1,1,0,0,0-1.41-.112,10.075,10.075,0,0,0,6.5,17.708,10.074,10.074,0,0,0,6.46-17.738,1,1,0,0,0-.641-.247Z"
                fill="#e85d04"
              />
            </G>
          </G>
        </Svg>
      ),
      text: "Đăng xuất",
      navigate: async () => {
        await dispatch(changeRoute({ route: "auth", initialRoute: "SignIn" }));
        await dispatch(logout());
      },
    },
  ];

  const menuRight = [
    {
      svg: (

        <Svg width="36" height="36" viewBox="0 0 36 36">

          <Image
            source={require("../../../../assets/images/mhsbv.png")}
            style={{ height: 36, width: 36 }}
          />
        </Svg>
      ),

      text: "Mã hồ sơ\nbệnh viện",
      navigate: () => navigation.navigate("HospitalCode"),
    },
    {
      svg: (
        <Svg width="36" height="36" viewBox="0 0 36 36">
        <Image
            source={require("../../../../assets/images/ha.png")}
            style={{ height: 36, width: 36 }}
          />
        </Svg>
      ),
      text: "Hình ảnh",
      navigate: () => navigation.navigate("Folder"),
    },
    {
      svg: (
        <Svg width="36" height="36" viewBox="0 0 36 36">
         <Image
            source={require("../../../../assets/images/kqxn.png")}
            style={{ height: 36, width: 36 }}
          />
        </Svg>
      ),
      text: "Kết quả\nxét nghiệm",
      navigate: () => navigation.navigate("TestResult"),
    },
    {
      svg: (
        <Svg width="36" height="36" viewBox="0 0 36 36">
       <Image
            source={require("../../../../assets/images/lstc.png")}
            style={{ height: 36, width: 36 }}
          />
        </Svg>
      ),
      text: "Lịch tiêm chủng",
      navigate: () => navigation.navigate("Vaccination"),
    },
    {
      svg: (
        <Svg width="36" height="36" viewBox="0 0 36 36">
   <Image
            source={require("../../../../assets/images/TT.png")}
            style={{ height: 36, width: 36 }}
          />
        </Svg>
      ),
      text: "Toa thuốc",
      navigate: () => navigation.navigate("Prescription"),
    },
    {
      svg: (
        <Svg width="36" height="36" viewBox="0 0 36 36">
        <Image
            source={require("../../../../assets/images/du.png")}
            style={{ height: 36, width: 36 }}
          />
        </Svg>
      ),
      text: "Dị ứng",
      navigate: () => navigation.navigate("Allergy", {}),
    },
    {
      svg: (
        <Svg width="36" height="36" viewBox="0 0 36 36">
  <Image
            source={require("../../../../assets/images/Tk.png")}
            style={{ height: 36, width: 36 }}
          />
        </Svg>
      ),
      text: "Thai kì",
      navigate: () => navigation.navigate("Pregnancy"),
    },
    {
      svg: (
        <Svg width="36" height="36" viewBox="0 0 36 36">
       <Image
            source={require("../../../../assets/images/lskb.png")}
            style={{ height: 36, width: 36 }}
          />
        </Svg>
      ),
      text: "Lịch sử\nkhám bệnh",
      navigate: () => navigation.navigate("MedicalHistoryDetail"),
    },
  ];

  return (
    <Container style={styles.container}>
      <HeaderRoot
        title="Menu"
        hideRoute
        logo
        previous={() => navigation.goBack()}
      />
      <View style={styles.body}>
        <View style={styles.left}>
          <FlatList
            data={menuLeft}
            keyExtractor={(item) => item.text}
            renderItem={({ item, index }) => {
              let last = false;
              let active = false;
              if (index === 2) active = true;
              if (index >= 10) last = true;
              return <MenuItem item={item} last={last} active={active} />;
            }}
          />
        </View>
        <Content contentContainerStyle={styles.right}>
          <View style={styles.profile}>
            <Text style={styles.name}>Nguyễn Văn A</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("MedicalStory", {})}
            >
              <View style={{ alignSelf: "flex-start" }}>
                <View style={styles.icon}>
                  <Svg width="36" height="36" viewBox="0 0 36 36">
                    <Defs>
                      <ClipPath id="clip-path">
                        <Rect
                          id="Rectangle_786"
                          data-name="Rectangle 786"
                          width="36"
                          height="36"
                          transform="translate(123 170)"
                          fill="#142977"
                          stroke="#707070"
                          strokeWidth="1"
                        />
                      </ClipPath>
                    </Defs>
                    <G
                      id="Mask_Group_387"
                      data-name="Mask Group 387"
                      transform="translate(-123 -170)"
                      clipPath="url(#clip-path)"
                    >
                      <G id="stethoscope-2" transform="translate(123 170)">
                        <G id="Group_1013" data-name="Group 1013">
                          <G id="Group_1006" data-name="Group 1006">
                            <G id="Group_1005" data-name="Group 1005">
                              <G id="Group_1004" data-name="Group 1004">
                                <G id="Group_1003" data-name="Group 1003">
                                  <G id="Group_1002" data-name="Group 1002">
                                    <Path
                                      id="Path_2346"
                                      data-name="Path 2346"
                                      d="M15.369,36a3.713,3.713,0,0,1-3.709-3.708V25.109a.7.7,0,0,1,1.406,0v7.183a2.3,2.3,0,0,0,4.605,0V24.123a2.562,2.562,0,0,1,5.123,0v4.195a3.067,3.067,0,0,0,6.134,0V16.347a.7.7,0,1,1,1.406,0V28.318a4.473,4.473,0,0,1-8.946,0V24.123a1.155,1.155,0,0,0-2.311,0v8.169A3.713,3.713,0,0,1,15.369,36Z"
                                      fill="#142977"
                                    />
                                  </G>
                                </G>
                              </G>
                            </G>
                          </G>
                          <G id="Group_1012" data-name="Group 1012">
                            <G id="Group_1011" data-name="Group 1011">
                              <G id="Group_1010" data-name="Group 1010">
                                <G id="Group_1009" data-name="Group 1009">
                                  <G id="Group_1008" data-name="Group 1008">
                                    <G id="Group_1007" data-name="Group 1007">
                                      <Ellipse
                                        id="Ellipse_159"
                                        data-name="Ellipse 159"
                                        cx="2.129"
                                        cy="2.128"
                                        rx="2.129"
                                        ry="2.128"
                                        transform="translate(10.234 21.56)"
                                        fill="#b2f0fb"
                                      />
                                    </G>
                                  </G>
                                </G>
                              </G>
                            </G>
                          </G>
                        </G>
                        <G id="Group_1026" data-name="Group 1026">
                          <Path
                            id="Path_2347"
                            data-name="Path 2347"
                            d="M22.341,7.293H21.63V1.739a.7.7,0,0,0-.7-.7H17.007V.7A.7.7,0,0,0,15.6.7V2.774a.7.7,0,0,0,1.406,0V2.442h3.216V7.293h-.711a.7.7,0,0,0-.7.7v3.342a6.446,6.446,0,0,1-12.892,0V8a.7.7,0,0,0-.7-.7H4.5V2.442H7.719v.332a.7.7,0,0,0,1.406,0V.7A.7.7,0,0,0,7.719.7v.333H3.8a.7.7,0,0,0-.7.7V7.293H2.385a.7.7,0,0,0-.7.7v3.342a10.682,10.682,0,0,0,21.363,0V8a.7.7,0,0,0-.7-.7Zm-.7,4.045a9.275,9.275,0,0,1-18.551,0V8.7H4.511v2.639a7.852,7.852,0,0,0,15.7,0V8.7h1.423Z"
                            fill="#142977"
                          />
                          <G id="Group_1019" data-name="Group 1019">
                            <G id="Group_1018" data-name="Group 1018">
                              <G id="Group_1017" data-name="Group 1017">
                                <G id="Group_1016" data-name="Group 1016">
                                  <G id="Group_1015" data-name="Group 1015">
                                    <G id="Group_1014" data-name="Group 1014">
                                      <Ellipse
                                        id="Ellipse_160"
                                        data-name="Ellipse 160"
                                        cx="4.687"
                                        cy="4.685"
                                        rx="4.687"
                                        ry="4.685"
                                        transform="translate(24.945 7.306)"
                                        fill="#b2f0fb"
                                      />
                                    </G>
                                  </G>
                                </G>
                              </G>
                            </G>
                          </G>
                          <G id="Group_1025" data-name="Group 1025">
                            <G id="Group_1024" data-name="Group 1024">
                              <G id="Group_1023" data-name="Group 1023">
                                <G id="Group_1022" data-name="Group 1022">
                                  <G id="Group_1021" data-name="Group 1021">
                                    <G id="Group_1020" data-name="Group 1020">
                                      <Path
                                        id="Path_2348"
                                        data-name="Path 2348"
                                        d="M29.632,14.241a2.25,2.25,0,1,1,2.25-2.25A2.252,2.252,0,0,1,29.632,14.241Zm0-3.093a.843.843,0,1,0,.844.843A.845.845,0,0,0,29.632,11.148Z"
                                        fill="#142977"
                                      />
                                    </G>
                                  </G>
                                </G>
                              </G>
                            </G>
                          </G>
                        </G>
                      </G>
                    </G>
                  </Svg>
                </View>
                <Text style={styles.story}>Tiểu sử bệnh án</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.menu}>
            <Text style={styles.date}>
              {_format.getShortVNDate(new Date())} - Ngày hiện tại
            </Text>
            <View style={styles.list}>
              {menuRight.map((item) => (
                <TouchableWithoutFeedback
                  key={item.text}
                  onPress={item.navigate}
                >
                  <View style={styles.item}>
                    {item.svg}
                    <Text style={styles.itemtext}>{item.text}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </View>
          </View>
        </Content>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    flexDirection: "row",
  },
  left: {
    backgroundColor: "#EAEAEA",
  },
  right: {},
  profile: {
    paddingHorizontal: padding,
    paddingTop: 10,
  },
  name: {
    fontSize: 16,
    letterSpacing: 0.25,
    fontFamily: "SFProDisplay-Semibold",
    marginBottom: 12,
  },
  icon: {
    alignSelf: "center",
  },
  story: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: "SFProDisplay-Semibold",
    color: mainColorText,
  },
  menu: {
    marginTop: 20,
  },
  date: {
    fontSize: 14,
    fontFamily: "SFProDisplay-Regular",
    lineHeight: 18,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    paddingHorizontal: padding,
    paddingBottom: 8,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "33.33333%",
    alignItems: "center",
    marginTop: 26,
  },
  itemtext: {
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 6,
  },
});

export default MenuScreen;
