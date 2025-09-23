// contactUsData.js
export const contactUsInput = {
  validData: {
    name: "John Doe",
    email: "john.doe@example.com",
    subject: "Inquiry about services",
    message: "Hello, I would like to know more about your services.",
    filePath: "../rumautomation/userData/contactus.txt"
  },
  missingEmail: {
    name: "Jane Doe",
    email: "",
    subject: "Missing email case",
    message: "Testing contact form with missing email.",
    filePath: "../rumautomation/userData/contactus.txt"
  },
  missingAt: {
    name: "Jane Doe",
    email: "test",
    subject: "Invalid email case",
    message: "Testing contact form with missing @ in email.",
    filePath: "../rumautomation/userData/contactus.txt"
  },
  missingDomain: {
    name: "Mark Smith",
    email: "test@",
    subject: "No message provided",
    message: "Testing contact form with missing domain in email.",
    filePath: "../rumautomation/userData/contactus.txt"
  }
};
