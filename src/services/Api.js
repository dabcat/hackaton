const basePort = '3000';
const baseApi = `http://localhost:${basePort}`;

export default function Api() {

    function login(email) {
        return fetch(`${baseApi}/login`, postMethod({ email: email }))
            .then(val => handleResults(val))
            .catch((err) => handleError(err))
    }

    function postMethod(payload) {
        return {
            method: 'POST',
            body: JSON.stringify(payload),
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
        login: login
    }
}