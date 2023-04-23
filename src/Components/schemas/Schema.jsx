import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const LoginSchema = Yup.object({
  username: Yup.string().min(2).required("please enter your Username"),

  password: Yup.string().min(6).required("please enter your Password"),
});

export const PersonalInformationSchema = Yup.object({
  firstname: Yup.string().min(2).required("please enter your firstname"),
  lastname: Yup.string().min(2).required("please enter your lastname"),
  dob: Yup.string().required(),
  phone: Yup.string().required("please enter your mobile number"),
  emailid: Yup.string().email().required("please enter your mail-id"),
  address: Yup.string().required("please enter your address"),
  // passport:Yup.string().required("")
});
