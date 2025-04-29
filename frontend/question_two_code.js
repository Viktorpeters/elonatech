const reactFunctionTomanageApi = async () => {
  try {
    // the api is assumed to be a get api
    const response = await fetch("api goes here");

    return response;
  } catch (error) {
    // if error
    // toast a response
  }
};

// if the code is to run on specific conditions, then use useEffect

useEffect(() => {
  reactFunctionTomanageApi();
}, ["dpendency goes here "]);
