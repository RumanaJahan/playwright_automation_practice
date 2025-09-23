export function generateRandomUserData() {
  const id = Math.floor(Math.random() * 1000);

  const maleUsers = ["john", "michael", "david", "ahmed"];
  const femaleUsers = ["rumana", "sara", "fatima", "linda"];

  //Randomly pick gender
  const gender = Math.random() < 0.5 ? "male" : "female";

  //Pick first name depending on gender
  const namePool = gender === "male" ? maleUsers : femaleUsers;
  const firstName = namePool[Math.floor(Math.random() * namePool.length)];

  //Some last names
  const lastNames = ["smith", "johnson", "williams", "khan", "patel", "brown"];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  //Random company
  const companies = ["TechSoft", "Innova", "GlobeCorp", "NextGen Solutions"];
  const company = companies[Math.floor(Math.random() * companies.length)];

  //Random address parts
  const streets = ["Main St", "High St", "Park Ave", "Broadway", "Market Rd"];
  const cities = ["Sydney", "Melbourne", "Delhi", "Mumbai", "New York"];
  const states = ["NSW", "VIC", "Delhi", "Maharashtra", "NY"];
  const countries = ["India","United States","Canada","Australia","Israel","New Zealand","Singapore"];

  const streetNo = Math.floor(Math.random() * 500) + 1;
  const street = streets[Math.floor(Math.random() * streets.length)];
  const address1 = `${streetNo} ${street}`;

  const city = cities[Math.floor(Math.random() * cities.length)];
  const state = states[Math.floor(Math.random() * states.length)];
  const country = countries[Math.floor(Math.random() * countries.length)];
  const zipcode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit
  const mobile = `+61${Math.floor(400000000 + Math.random() * 499999999)}`; // AU-style mobile

  // Generate random password
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  const passwordLength = Math.floor(Math.random() * 5) + 8; // random length 8–12
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return {
    // Step 1 (signup form)
    name: `${firstName}${id}`,
    email: `${firstName}${id}@example.com`,

    // Step 2 (detailed form)
    firstname: firstName,
    lastname: lastName,
    company,
    address1,
    address2: "",
    city,
    state,
    country,
    zipcode,
    mobile,
    gender,
    password
  };
}


export async function selectRandomOption(locator) 
{
  const options = await locator.locator('option').all();
  const values = await Promise.all(options.map(o => o.getAttribute('value')));
  const randomValue = values[Math.floor(Math.random() * values.length)];
  await locator.selectOption(randomValue);
  return randomValue;
}