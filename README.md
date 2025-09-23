🧪 Playwright Automation for AutomationExercise.com

This project uses Playwright
 with JavaScript to automate user journeys on Automation Exercise
, a demo e-commerce website.

✅ Test Scenarios Covered

🔐 User Signup

🔓 User Login and Logout

🔍 Product Search

🛒 Add to Cart & Purchase

🧪 Test Case Page Validation

📁 Project Structure
playwright-automation-exercise/
├── pageObject/                # Page Object files for each page
├── tests/                     # Test cases grouped by feature
├── utils/                     # Shared setup (e.g., baseTest.js)
├── .env                       # Environment variables (credentials)
├── playwright.config.js       # Playwright configuration
├── package.json
└── README.md                  # You're here!

🚀 Getting Started
1. Install Dependencies
npm install

2. Run All Tests
npx playwright test

3. Run a Specific Test
npx playwright test tests/page/verifyTestCasesPage.test.js

4. View HTML Test Report
npx playwright show-report

5. Environment Variables

Create a .env file in the project root:

VALID_USER_EMAIL=your_email@example.com
VALID_USER_PASSWORD="your_password"
VALID_USER_USERNAME="Your Name"


🧪 Example Test Usage

Example: tests/page/verifyTestCasesPage.test.js
This test reuses functions from pageObject/productPage.js.

🛠 Commands Cheat Sheet
Command	Description
npx playwright test	Run all tests
npx playwright test <file>	Run specific test
npx playwright show-report	View test report in browser
npx playwright codegen <url>	Generate code via Codegen
npx playwright install	Install necessary browsers


🔧 Improvements to Consider

Add GitHub Actions workflow for CI/CD

Integrate with Allure or HTML report plugin

Run cross-browser and parallel testing

Data-driven testing (e.g., signup with multiple users)

Add visual regression or accessibility checks

👩‍💻 Author

Rumana Jahan
8+ years of QA experience | Currently building Playwright + JS automation

GitHub Portfolio: RumanaJahan/playwright_automation_project