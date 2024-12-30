import express from "express"
import UserRoute from "./UserRoutes.js"




const router = express.Router();

const routes= [
    {path: "/users", route: UserRoute}
    //Yeni route gelirse buraya eklenecek
]




// Route'ları dinamik olarak yükle
routes.forEach(route => {
    router.use(route.path, route.route);
 });
 
 export default router;
 