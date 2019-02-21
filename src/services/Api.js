const baseApi = `http://hackathon.ralekhs.com`;

export default function Api() {

    function login(email) {
        return fetch(`${baseApi}/login`, postMethod({ email: email }))
            .then(val => handleResults(val))
            .catch((err) => handleError(err))
    }

    function getConnections(email) {
        return fetch(`${baseApi}/connections`, postMethod({ email: email }))
            .then(val => handleResults(val))
            .catch((err) => handleError(err))
    }

    function searchConnections(keyword) {
        return fetch(`${baseApi}/search?q=${keyword}`, postMethod({ q: keyword, email: 'test@mail.com' }))
            .then(val => handleResults(val))
            .catch((err) => handleError(err))
    }

    function connectWithUser(user) {
        const { id } = user[0];
        return fetch(`${baseApi}/connect/${id}`, postMethod({ email: 'test@mail.com' }))
            .then(val => handleResults(val))
            .catch((err) => handleError(err))
    }

    function postMethod(payload) {
        return {
            method: 'POST',
            body: JSON.stringify(payload),
            // mode: "no-cors", // no-cors, cors, *same-origin
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

    function handleResults(val) {
        return val.json();
    }

    function handleError(err) {
        console.error(`Error: ${err}`);
        return false;
    }

    return {
        login: login,
        getConnections: getConnections,
        searchConnections: searchConnections,
        connectWithUser: connectWithUser
    }
}