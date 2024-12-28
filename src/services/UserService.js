import BaseService from './BaseService.js';
import UserRepository from '../repositories/UserRepository.js';

 class UserService extends BaseService {
  constructor() {
    super(UserRepository);
  }

  // Özel iş mantığı için metotlar ekleyebilirsiniz.
  async login(email, password) {

  }
}

export default new UserService();
