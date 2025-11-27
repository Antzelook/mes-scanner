export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Mesogeos Digital";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Digital solutions for your buisness needs ";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const defaultFormValues = {
  date: "",
  latitude: 0,
  longitude: 0,
  serialNumber: "",
  deveui: "",
  types: [],
  actions: [],
  comment: "",
};

export const defaultSignInValues = {
  email: "",
  password: "",
};
