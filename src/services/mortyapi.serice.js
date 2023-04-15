import axios from "axios";

const getMortysdata = async (num) => {
  try {
    let url = `${process.env.REACT_APP_MORTYS_URL}/${num}`;
  } catch (error) {
    console.error("problema con la info de mortys ", error);
  }
};

export default getMortysdata;
