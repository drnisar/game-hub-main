import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fb952b14c37e40fea458f4635d972fbb",
  },
});
