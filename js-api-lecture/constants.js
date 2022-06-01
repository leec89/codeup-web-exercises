import {DUMMY_APP_ID} from "../codeup-web-exercises/js/keys.js";

// this is the main url the api endpoints is pointing to
export const baseURL = "https://dummyapi.io/data/v1"

// Headers this application uses across the board.
const customHeaders = new Headers({
    "app-id": DUMMY_APP_ID,
    'Content-Type': 'application/json'
}) // required by the api to access its value!

// Defaults for fetch request
export const fetchSettings = {
    method: "GET", // or gets
    headers: customHeaders,
}

