export const TOKEN = "VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn";
const PROXY_SERVER = "https://cors-anywhere.herokuapp.com/";

const isDev = import.meta.env.MODE === 'development';

export const BASE_URL = isDev ? "/api" : `${PROXY_SERVER}https://live.devnimble.com/api/v1/`
