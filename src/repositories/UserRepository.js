import BaseRepository from './BaseRepository.js';
import UserModel  from '../models/UserModel.js';

class UserRepository extends BaseRepository {
  constructor() {
    super(UserModel);
  }

  // Özel iş mantığı için metotlar ekleyebilirsiniz.
  async login(email, password) {
   
  }
}

export default new UserRepository();
