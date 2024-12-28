export default class BaseService {
   constructor(repository) {
      this.repository = repository;
   }

   // Tüm kayıtları getirir
   getAll = (where = {}, options = {}) => {
      return this.repository.getAll(where, options);
   };

   // Id'ye göre kaydı getirir
   getById = (id, options = {}) => {
      const record = this.repository.getById(id, options);
      if (!record) {
         throw new Error("Record not found");
      }
      return record;
   };

   // Yeni kayıt oluşturur
   create = (data, options = {}) => {
      return this.repository.create(data, options);
   };

   // Id'ye göre kaydı günceller
   update = (id, data, options = {}) => {
      const updatedRecord = this.repository.update(id, data, options);
      if (!updatedRecord) {
         throw new Error("Record not found");
      }
      return updatedRecord;
   };

   // Id'ye göre kaydı siler
   delete = (id, options = {}) => {
      const isDeleted = this.repository.delete(id, options);
      if (!isDeleted) {
         throw new Error("Record not found");
      }
      return true;
   };
}
