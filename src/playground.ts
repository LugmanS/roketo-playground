import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello from roketo playground");
});


export { router as playgroundRouter };