import axios from "axios";
import { BACKEND_BASE_URL } from "../common/Environment";

class BannerService {
  constructor() {
    this.backend_URL = BACKEND_BASE_URL;
    this.loading = false;
  }

  async getAllBanners() {
    this.loading = true;
    const result = await axios.get(`${this.backend_URL}/banners`);
    this.loading = false;
    return result;
  }
}
export default new BannerService();
