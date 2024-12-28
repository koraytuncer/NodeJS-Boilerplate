export default class BaseRepository {
   constructor(model) {
      this.model = model;
   }

   getAll = (where = {}, options = {}) => {
      return this.model.findAll({where, ...options});
   };

   getById = (id, options = {}) => {
      return this.model.findByPk(id, options);
   };

   create = (data, options = {}) => {
      return this.model.create(data, options);
   };

   update = (id, data, options = {}) => {
      const record = this.model.findByPk(id, options);
      if (!record) {
         return null;
      }
      return record.update(data, options);
   };

   delete = async (id, options = {}) => {
      const record = await this.model.findByPk(id, options);
      if (!record) {
         return false;
      }
      await record.destroy();
      return true;
   };

   findOne = (where, options = {}) => {
      return this.model.findOne({where, ...options});
   };

   findAndCountAll = (where, options = {}) => {
      return this.model.findAndCountAll({where, ...options});
   };
}
