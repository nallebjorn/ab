import axios from "axios";

export default class {
    __apiBase = "http://localhost:2031/api";

    getUser = async user => {
        const body = await axios.post(`${this.__apiBase}/user`, user);
        return body.data;
    };

    addUser = async user => {
        const body = await axios.post(`${this.__apiBase}/user`, user);
        return body.data;
    };

    addProvider = async provider => {
        const body = await axios.post(`${this.__apiBase}/provider`, provider);
        return body.data;
    };

    getUsers = async () => {
        const body = await axios.get(`${this.__apiBase}/user`);
        return body.data;
    };
}
