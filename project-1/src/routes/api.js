const express=require('express');
const profileController = require("../controller/profileController");
const authVerifyMiddleware = require("../middleware/authVerifyMiddleware");
const toDoListController = require("../controller/toDoListController");


const  router=express.Router();
router.post("/CreateProfile",profileController.CreateProfile)
router.post("/userLogin",profileController.UserLogin)



router.get("/SelectProfile",authVerifyMiddleware, profileController.selectProfile);
router.post("/UpdateProfile",authVerifyMiddleware, profileController.UpdateProfile);



router.post("/CreateToDo",authVerifyMiddleware,toDoListController.CreateToDo);
router.get("/SelectToDo",authVerifyMiddleware,toDoListController.SelectToDo);
router.post("/UpdateToDo",authVerifyMiddleware,toDoListController.UpdateToDo);
router.post("/UpdateStatusToDo",authVerifyMiddleware,toDoListController.UpdateStatusToDo);
router.post("/RemoveToDo",authVerifyMiddleware,toDoListController.RemoveToDo);
router.post("/SelectToDoByStatus",authVerifyMiddleware,toDoListController.SelectToDoByStatus);
router.post("/SelectToDoByDate",authVerifyMiddleware,toDoListController.SelectToDoByDate);





module.exports=router;