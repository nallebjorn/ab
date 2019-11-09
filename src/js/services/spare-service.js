import axios from "axios";
import __apibase from "./__base";

export default class {
    addSpare = async spare => {
        const body = await axios.post(`${__apibase}/spares`, spare);
        return body.data;
    };
}
