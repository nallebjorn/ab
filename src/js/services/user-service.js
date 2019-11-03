import axios from "axios";

export default class {
    __apiBase = "http://localhost:2031/api";

    getUser = async user => {
        const body = await axios.post(`${this.__apiBase}/user`, user);
        return body.data;
    };
}
