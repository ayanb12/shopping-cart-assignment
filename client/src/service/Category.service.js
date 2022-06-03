import axios from "axios";
import { BACKEND_BASE_URL } from "../common/Environment";

class CategoryService {
  constructor() {
    this.backend_URL = BACKEND_BASE_URL;
    this.loading = false;
  }

  async getAllCategories() {
    this.loading = true;
    const result = await axios.get(`${this.backend_URL}/categories`);
    this.loading = false;
    return result;
  }
}
export default new CategoryService();
