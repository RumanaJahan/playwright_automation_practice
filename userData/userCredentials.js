export const credentials = {
   validUser: {
    email: process.env.VALID_USER_EMAIL || 'example@local.test',
    password: process.env.VALID_USER_PASSWORD || 'local-password',
    username: process.env.VALID_USER_USERNAME || 'local-user'
  },

  invalidUser: {
    email: "invalid@yahoo.com",
    password: "invalidpassword"
  },

  emptyUser: {
    email: "",
    password: ""
  },

   missingAt: { 
    email: "test",
    password: "test123"
  },

  missingDomain: { 
    email: "test@",
    password: "test123"
  }
};
