const express = require("express");
const router = express.Router();
const {
  getPrediction,
  sendDashboardData,
  getAllDemandNotices,
  createDemandNotice,
  updateDemandNotice,
  getDemandNoticeById,
  deleteDemandNotice,
} = require("../controllers/demandController");

//demand notice
router.get("/demandnotice", getAllDemandNotices);
router.get("/demandnotice/:id", getDemandNoticeById);
router.post("/demandnotice", createDemandNotice);
router.put("/demandnotice/:id", updateDemandNotice);
router.delete("/demandnotice/:id", deleteDemandNotice);

//get
router.get("/dashboard", sendDashboardData);
router.get("/:id", getPrediction);

module.exports = router;
