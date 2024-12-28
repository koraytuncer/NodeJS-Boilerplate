import {CronJob} from "cron";

const CronMission = async () => {
   
};




const job = new CronJob("0 0 * * *", async () => {
   await CronMission();
}); // Her gün gece yarısı çalışacak şekilde zamanlanmış görevi oluşturun

job.start(); // Zamanlanmış görevi başlatın
