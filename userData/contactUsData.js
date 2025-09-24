// contactUsData.js
import path from 'path';

// Resolve the file path relative to project root
const contactUsFile = path.resolve('userData/contactus.txt'); // adjust if your folder is different

export const contactUsInput = {
  validData: {
    name: "John Doe",
    email: "john.doe@example.com",
    subject: "Inquiry about services",
    message: "Hello, I would like to know more about your services.",
    filePath: contactUsFile
  },
  missingEmail: {
    name: "Jane Doe",
    email: "",
    subject: "Missing email case",
    message: "Testing contact form with missing email.",
    filePath: contactUsFile
  },
  missingAt: {
    name: "Jane Doe",
    email: "test",
    subject: "Invalid email case",
    message: "Testing contact form with missing @ in email.",
    filePath: contactUsFile
  },
  missingDomain: {
    name: "Mark Smith",
    email: "test@",
    subject: "No message provided",
    message: "Testing contact form with missing domain in email.",
    filePath: contactUsFile
  }
};
