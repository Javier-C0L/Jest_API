import axios from "axios";

function getPokesdata(params) {
    
    try {
        let url = `${process.env.REACT_APP_POKES_URL}/${params?.num}`;
        const result = await axios.get(url);
        const data = await result.data;
        return data;
    } catch (error) {
        console.error("problema con la info de pokes ",error);
    }

  };

export default getPokesdata; 