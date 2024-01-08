import axios from "axios";


export class BooksAPI {
  static baseURL: string = "localhost:3006";

  static async fetchAllBooks() {
    const result = await axios.get("http://" + this.baseURL + "/books");
    console.log(result);
    return result.data;
  }
  catch(error: any) {
    console.log("error", error);
  }
}
