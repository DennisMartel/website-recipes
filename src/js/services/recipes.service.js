import { httpRequest } from "../utils/httpRequest";

class RecipeService {
  async getRecipesDataAsync() {
    const response = await httpRequest.get("/recipes");
    return response.data;
  }
}

export default new RecipeService();