import express from "express";

import headlineController from "./headline.controller";

const router = express.Router();

router.use("/headline", headlineController);


export default router;
