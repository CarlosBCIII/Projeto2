import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { get } from "mongoose";
import { deleteAllNotifications, deleteNotification, getNotifications } from "../controller/notification.controller.js";

const router = express.Router();

router.get('/', protectRoute, getNotifications);
router.delete('/', protectRoute, deleteAllNotifications);
router.delete('/:id', protectRoute, deleteNotification);

export default router;




