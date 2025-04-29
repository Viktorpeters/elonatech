let users = "model coming from the mongodb model";

const findByEmail = async (email) => {
  // first check if the email exists

  const userExists = await users.find({ email: email });

  try {
    // if user exists

    if (userExists) {
      // return a sucessful response
    }
  } catch (error) {
    //    if user does not exists, return an error response
  }
};
