import { mapUserToRecord } from "./maps.js";
import {baseURL, fetchSettings} from "./constants.js";
import {handleDisplayUpdate, handleDeleteView, toggleModal, modal, handleDisplayProfile, handleCreateUserView} from "./handlers.js";

// LECTURE: Restful API's

// * Make GET/POST requests to a RESTful API.
// * Parse data returned from an API
// * Understand headers and how they can affect a request.

// Explain: Restful Apis

// A type of architecture that is commonly used to handle communication between
// the backend server and the front end UI.

// They generally output JSON which is then interpreted by the UI.
// This type of architecture allows CRUD operations to be completed.

// ASK: What are these called?

// GET - Form data is in the url. Sometimes you may want this
// website.com/posts?id=3

// POST - Form Information passed silently and in the background.

// PUT / Patch - Update/Replace information,
// Patch = send only fields you want them to update

// DELETE = delete the data from the database.

// Fetching the user from the server and then mapping it to the user record.
// TODO: Add in Fetch to get the users
// TODO: Add Handlers to events

fetch(baseURL + '/user?limit=50&page=1', fetchSettings)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        // mapUserToRecord()
        document.getElementById('users').innerHTML +=
            res.data.map(mapUserToRecord).join('')

        $('.delete').on('click', handleDeleteView)
        $('.edit').on('click', handleDisplayUpdate)
        $('.user-record').on('click', handleDisplayProfile)
        $('#create').on('click', handleCreateUserView)
    })