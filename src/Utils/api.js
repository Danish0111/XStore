import axios from "axios";

const params = {
    headers: {
        Authorization: "Bearer " + "eb9ee8e2cf2bb81465f679fa8a15af246ac8f513023d083302e8244877e0f2ddb8aebf44a8ac00e9d38737100fe5eb8c009b259106905f2e1b8cd11ae348690b75305522bcdb6015ca575709ac024ba13f62ca6b6d3d6752a253770a4e456d5109d8950d970d8dd565a2e7eca0e293297bf209b7106921b1f4a476173e8df3f4"
    }
};

export const FetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get("http://localhost:1337" + url, params);
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
};

