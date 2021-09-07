import axios from "axios";
export const GetService = async () => {
    const response = await axios.get("https://harmovies.free.beeceptor.com/moviedetails");
    return response.data;
}