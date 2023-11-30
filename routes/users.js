import express from 'express';
import people from "../controllers/people.controllers.js";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data;

        if (id) {
            data = await people.findOne(parseInt(id));
        } else {
            data = await people.findAll();
        }

        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        let newUser = req.body;
        let data = await people.addOne(newUser);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let updatedUser = req.body;
        let data = await people.updateOne(id, updatedUser);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data = await people.removeOne(id);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

export default router;