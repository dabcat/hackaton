const basePort = '9000';
const baseApi = `http://10.1.200.199:${basePort}`;

export default function Api() {

    function login(email) {
        return fetch(`${baseApi}/login`).then(val => handleResults(val))
    }

    function handleResults(val) {
        return val.json();
    }

    return {
        login: login
    }
}