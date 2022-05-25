import axios from "axios";

class ProductService {
  constructor() {
    this.base_URL = "http://localhost:5000";
    this.loading = false;
  }

  async getAllProducts() {
    this.loading = true;
    const result = await axios.get(`${this.base_URL}/products`);
    this.loading = false;
    return result;
  }
}

export default new ProductService();
