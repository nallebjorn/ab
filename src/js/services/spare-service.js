import axios from "axios";
import __apibase from "./__base";

export default class {
    addSpare = async spare => {
        const body = await axios.post(`${__apibase}/spares`, spare);
        return body.data;
    };

    getSpare = async id => {
        const body = await axios.get(`${__apibase}/spares/${id}`);
        return body.data;
    }
    
    getProviderSpares = async providerId => {
        const body = await axios.get(`${__apibase}/spares?providerId=${providerId}`);
        return body.data;
    }
    
    getSpares = async () => {
        const body = await axios.get(`${__apibase}/spares`);
        return body.data;
    }
}
