import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      email: "aggelos@admin.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      email: "user@example.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],
};

export default sampleData;
