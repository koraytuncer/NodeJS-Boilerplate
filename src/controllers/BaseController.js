import httpStatus from "http-status";

class BaseController {
   constructor(service, logger) {
      this.service = service;
      this.logger = logger;
   }

   // Tüm Kayıtları Listele
   getAll = (req, res) => {
      try {
         const items = this.service.getAll();

         if (!items || items.length === 0) {
            return res.status(httpStatus.NOT_FOUND).send({message: "Kayıt bulunamadı."});
         }

         res.status(httpStatus.OK).send(items);
      } catch (err) {
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            message: "Kayıtlar getirilirken bir hata oluştu.",
            details: err.message,
         });
      }
   };

   // ID ile Tek Kayıt Getir
   getById = (req, res) => {
      try {
         const {id} = req.params;
         const item = this.service.getById(id);

         res.status(httpStatus.OK).send(item);
      } catch (err) {
         res.status(err.message === "Record not found" ? httpStatus.NOT_FOUND : httpStatus.INTERNAL_SERVER_ERROR).send({
            message: err.message || "Kayıt getirilirken bir hata oluştu.",
         });
      }
   };

   // Yeni Kayıt Oluştur
   create = (req, res) => {
      try {
         const newItem = this.service.create(req.body);

         res.status(httpStatus.CREATED).send({
            message: "Kayıt başarıyla oluşturuldu.",
            data: newItem,
         });

         // Loglama
         if (this.logger) {
            this.logger.log({
               level: "info",
               message: {
                  action: "create",
                  message: "Kayıt başarıyla oluşturuldu.",
                  data: newItem,
               },
            });
         }
      } catch (err) {
         console.error("Create method error:", err);
         res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            message: "Kayıt oluşturulurken bir hata oluştu.",
            details: err.message,
         });
      }
   };

   // Kayıt Güncelle
   update = (req, res) => {
      try {
         const {id} = req.params;
         const updatedItem = this.service.update(id, req.body);

         res.status(httpStatus.OK).send({
            message: "Kayıt başarıyla güncellendi.",
            data: updatedItem,
         });

         // Loglama
         if (this.logger) {
            this.logger.log({
               level: "info",
               message: {
                  action: "update",
                  message: "Kayıt başarıyla güncellendi.",
                  data: updatedItem,
               },
            });
         }
      } catch (err) {
         res.status(err.message === "Record not found" ? httpStatus.NOT_FOUND : httpStatus.INTERNAL_SERVER_ERROR).send({
            message: err.message || "Kayıt güncellenirken bir hata oluştu.",
         });
      }
   };

   // Kayıt Sil (Soft Delete)
   delete = (req, res) => {
      try {
         const {id} = req.params;
         this.service.delete(id);

         res.status(httpStatus.OK).send({message: "Kayıt başarıyla silindi."});

         // Loglama
         if (this.logger) {
            this.logger.log({
               level: "info",
               message: {
                  action: "delete",
                  message: "Kayıt başarıyla silindi.",
                  data: {id},
               },
            });
         }
      } catch (err) {
         res.status(err.message === "Record not found" ? httpStatus.NOT_FOUND : httpStatus.INTERNAL_SERVER_ERROR).send({
            message: err.message || "Kayıt silinirken bir hata oluştu.",
         });
      }
   };
}

export default BaseController;
