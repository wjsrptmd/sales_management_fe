import axios from "axios";

export function test() {
  return axios.get("http://localhost:5000");
}
