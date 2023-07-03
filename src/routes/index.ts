import { Router } from "express";
import { readdirSync } from "fs";

export const router = Router();

const PATH_ROUTER = `${__dirname}`;

const cleanFile = (fileName: String) => {
    const file = fileName.split(".").shift();
    return file;
};

readdirSync(PATH_ROUTER).filter(fileName => {
    const name = cleanFile(fileName);

    if (name !== "index") {
        try {
            import(`./${fileName}`).then(moduleRouter => {
                router.use(`/${name}`, moduleRouter.router);
            });
            console.log(`✔ Load router --> ${name}`);
        } catch (e) {
            console.log(`❌Error load router --> ${name}`);
        }
    }
});
