import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8081/',
});

//เป็นตัวกลางของ axios request
instance.interceptors.request.use(
  (config) => {
    let customHeader: { [key: string]: string } = { 'Content-Type': 'application/json' };
    //get token from localS
    customHeader = { ...customHeader, Authorization: 'bearer token' };
    
    // eslint-disable-next-line no-param-reassign
    config.url = `${config.url}`;
    // eslint-disable-next-line no-param-reassign
    config.headers = customHeader;
    return config;
  },
  (error) => {
    //handle api common error ทึ่มีทุกเส้น
    return Promise.reject(error);
  },
);

export default instance;
