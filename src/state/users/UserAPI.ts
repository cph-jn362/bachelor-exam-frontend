import axios from "axios";
import { UserEntity } from "./UserEntity";

export class UserAPI{
  static baseURL: string = "localhost:3006";
  
  static async signup(user: UserEntity){
    try{
        const result = await axios.post(
            "http://" + this.baseURL + "/users/signup",
            user
        );
        console.log("back from server", result.data);
        return result.data;
    } catch (error){}
  }
}