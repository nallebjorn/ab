import axios from "axios";
import __apiBase from './__base'


export default class {
    // __apiBase = "http://yy4ndexuser-001-site1.ctempurl.com/api";

    authenticateUser = async user => {
        const body = await axios.post(`${__apiBase}/users`, user);
        return body.data;
    };

    addUser = async user => {
        const body = await axios.post(`${__apiBase}/users`, user);
        return body.data;
    };

    updateUser = async (username, user) => {
        const body = await axios.put(`${__apiBase}/users?username=${username}`, user);
        return body.data;
    };

    getUsers = async () => {
        const body = await axios.get(`${__apiBase}/users`);
        return body.data;
    };

    getUser = async username => {
        const body = await axios.get(
            `${__apiBase}/users?username=${username}`
        );
        return body.data;
    };

    deleteUser = async username => {
        const body = await axios.delete(
            `${__apiBase}/users?username=${username}`
        );
        return body.data;
    };
}
