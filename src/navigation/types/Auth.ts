import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export type AuthParamList = {
  // nơi khai báo screen và params
  Information: undefined;
  UsageRules: undefined;
  ContactLogin: undefined;
  SignIn: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ConfirmOTP: {
    phone: string | null;
    email: string | null;
    type: "email" | "phone";
  };
};

// nơi khai báo props
// ++ signin
type SignInScreenNavigationProp = StackNavigationProp<AuthParamList, "SignIn">;
type SignInScreenRouteProp = RouteProp<AuthParamList, "SignIn">;
export type SignInProps = {
  navigation: SignInScreenNavigationProp;
  route: SignInScreenRouteProp;
};

// ++ information
type InformationScreenNavigationProp = StackNavigationProp<
  AuthParamList,
  "Information"
>;
type InformationScreenRouteProp = RouteProp<AuthParamList, "Information">;
export type InformationProps = {
  navigation: InformationScreenNavigationProp;
  route: InformationScreenRouteProp;
};


// ++ information
type UsageRulesScreenNavigationProp = StackNavigationProp<
  AuthParamList,
  "UsageRules"
>;
type UsageRulesScreenRouteProp = RouteProp<AuthParamList, "UsageRules">;
export type UsageRulesProps = {
  navigation: UsageRulesScreenNavigationProp;
  route: UsageRulesScreenRouteProp;
};


// ++ information
type ContactLoginScreenNavigationProp = StackNavigationProp<
  AuthParamList,
  "ContactLogin"
>;
type ContactLoginScreenRouteProp = RouteProp<AuthParamList, "ContactLogin">;
export type ContactLoginProps = {
  navigation: ContactLoginScreenNavigationProp;
  route: ContactLoginScreenRouteProp;
};





// ++ register
type RegisterScreenNavigationProp = StackNavigationProp<
  AuthParamList,
  "Register"
>;
type RegisterScreenRouteProp = RouteProp<AuthParamList, "Register">;
export type RegisterProps = {
  navigation: RegisterScreenNavigationProp;
  route: RegisterScreenRouteProp;
};

// ++ forgot password
type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  AuthParamList,
  "ForgotPassword"
>;
type ForgotPasswordScreenRouteProp = RouteProp<AuthParamList, "ForgotPassword">;
export type ForgotPasswordProps = {
  navigation: ForgotPasswordScreenNavigationProp;
  route: ForgotPasswordScreenRouteProp;
};

// ++ confirm otp
type ConfirmOTPScreenNavigationProp = StackNavigationProp<
  AuthParamList,
  "ConfirmOTP"
>;
type ConfirmOTPScreenRouteProp = RouteProp<AuthParamList, "ConfirmOTP">;
export type ConfirmOTPProps = {
  navigation: ConfirmOTPScreenNavigationProp;
  route: ConfirmOTPScreenRouteProp;
};
