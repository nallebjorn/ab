import axios from "axios";
import __apiBase from "./__base";

export default async (url) => {
    const body = await axios.get(`${__apiBase}/${url}`);
    return body.data;
};
