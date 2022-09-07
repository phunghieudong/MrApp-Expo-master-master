//@ts-nocheck
import { ProfileParamList } from "./profile";
import { RouteProp, NavigatorScreenParams } from "@react-navigation/core";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { HomeParamList } from "./home";

export type RootStackParamList = {
  // nơi khai báo screen và params
  Home: NavigatorScreenParams<HomeParamList>;
  Chat: undefined;
  Advise: undefined;
  Contact: undefined;
  Taikhoan :undefined;
  Profile: NavigatorScreenParams<ProfileParamList>;
  Notification: undefined;
  UserManual:undefined;
  Policy:undefined;
  TermOfMedical:undefined;
  RegularProblems:undefined;
  Department:undefined;
};

// nơi khai báo props
// ++ home
type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "Home"
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
export type HomeProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

// ++ profile
type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "Profile"
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;
export type ProfileProps = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

// ++ notification
type NotificationScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "Notification"
>;
type NotificationScreenRouteProp = RouteProp<
  RootStackParamList,
  "Notification"
>;
export type NotificationProps = {
  navigation: NotificationScreenNavigationProp;
  route: NotificationScreenRouteProp;
};


// ++ UserManual
type UserManualScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "UserManual"
>;
type UserManualRouteProp = RouteProp<
  RootStackParamList,
  "UserManual"
>;
export type UserManualProps = {
  navigation: UserManualScreenNavigationProp;
  route: UserManualScreenRouteProp;
};



// ++ Policy
type PolicyScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "Policy"
>;
type PolicyRouteProp = RouteProp<
  RootStackParamList,
  "Policy"
>;
export type PolicyProps = {
  navigation: PolicyScreenNavigationProp;
  route: PolicyScreenRouteProp;
};



// ++ TermOfMedical
type TermOfMedicalScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "TermOfMedical"
>;
type TermOfMedicalRouteProp = RouteProp<
  RootStackParamList,
  "TermOfMedical"
>;
export type TermOfMedicalProps = {
  navigation: TermOfMedicalScreenNavigationProp;
  route: TermOfMedicalScreenRouteProp;
};




// ++ RegularProblems
type RegularProblemsScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "RegularProblems"
>;
type RegularProblemsRouteProp = RouteProp<
  RootStackParamList,
  "RegularProblems"
>;
export type RegularProblemsProps = {
  navigation: RegularProblemsScreenNavigationProp;
  route: RegularProblemsScreenRouteProp;
};




// ++ Department
type DepartmentScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "Department"
>;
type DepartmentRouteProp = RouteProp<
  RootStackParamList,
  "Department"
>;
export type DepartmentProps = {
  navigation: DepartmentScreenNavigationProp;
  route: DepartmentScreenRouteProp;
};



