const express = require("express");
const router = express.Router();

const {
  getData,
  postData,
  getSingleData,
  updateSingleData,
  deleteData,
} = require("../controllers/controller");

router.route("/").get(getData).post(postData);
router
  .route("/:id")
  .get(getSingleData)
  .patch(updateSingleData)
  .delete(deleteData);

module.exports = router;
