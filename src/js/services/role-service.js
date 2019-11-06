import axios from "axios";

export default class {
    __apiBase = "http://localhost:2031/api";

    getRoles = async () => {
        const body = await axios.get(`${this.__apiBase}/roles`);
        return body.data;
    }
}
