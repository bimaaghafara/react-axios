import axios from "axios";

const http = axios.create({
  baseURL: "https://petronasdemo.aa.assetdata.xyz/api/v1",
  headers: {
      "Content-type": "application/json"
  }
});


// Add a request interceptor
http.interceptors.request.use( config => {
  const token = localStorage.getItem('token');
  if (token) {
    // add token to request headersif exist
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor
http.interceptors.response.use(
  // Do something with response success
  function (response) {
    // console.log({interceptors: response});
    // save token if exist
    const token = response && response.data && response.data.token;
    if (token) localStorage.setItem('token', token);
    return response.data;
  },
  // Do something with response error
  function (error) {
    if (window && window.toast) {
      // see primereact toast for documentations
      const errorData = error && error.response && error.response.data;
      const errorCode = errorData && errorData.code;
      const errorMessage = errorData && errorData.message;
      window.toast.current.show({
        life: 3000,
        severity: 'error',
        summary: `Error: ${errorCode}`,
        detail: errorMessage
      });
    }
    // const errorCode = error && error.response && error.response.data && error.response.data.code;
    // if (errorCode == 401) {
    //   Router.push('/login');
    // }
    console.log({interceptors: error.response });  
    return Promise.reject(error.response);
  }
);

export default http
