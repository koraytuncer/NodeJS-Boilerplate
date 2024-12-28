import BaseController from "./BaseController.js";
import UserService from "../services/UserService.js";
import logger from "../logger/UserLogger.js";

class UserController extends BaseController {
   constructor() {
      super(UserService, logger);

   }

   // Özel iş mantığı için metotlar ekleyebilirsiniz.
   async login(req, res) {}
}

export default new UserController();
