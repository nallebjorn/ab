import axios from "axios";

export default class {
    __apiBase = "http://localhost:2031/api";

    authenticateUser = async user => {
        const body = await axios.post(`${this.__apiBase}/users`, user);
        return body.data;
    };

    addUser = async user => {
        const body = await axios.post(`${this.__apiBase}/users`, user);
        return body.data;
    };

    getUsers = async () => {
        const body = await axios.get(`${this.__apiBase}/users`);
        return body.data;
    };

    deleteUser = async (username) => {
        const body = await axios.delete(`${this.__apiBase}/users?username=${username}`);
        return body.data;
    }
}
