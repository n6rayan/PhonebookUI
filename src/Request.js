import axios from 'axios';

export class Request {
    getData = async () => {
        try {
            return await axios.get("http://www.mocky.io/v2/581335f71000004204abaf83");
        }
        catch (error) {
            throw error;
        }
    }
}