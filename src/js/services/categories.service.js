import { httpRequest } from "../utils/httpRequest";

class CategoryService {
  async getCategoriesDataAsync() {
    const response = await httpRequest.get("/categories");
    return response.data;
  }
}

export default new CategoryService();