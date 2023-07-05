import { Request } from "express";
import multer, { diskStorage } from "multer";

/*
 * File of users
 * @returns
 * */
const PATH_STORAGE_USER = `${process.cwd()}${process.env.ROUTE_PROFILE}`;

const storageUser = diskStorage({
    destination(req: Request, file: Express.Multer.File, cb: any) {
        cb(null, PATH_STORAGE_USER);
    },
    filename(req: Request, file: Express.Multer.File, cb: any) {
        const ext = file.originalname.split(".").pop();
        const fileNameRamdon = `image-${Date.now()}.${ext}`;
        cb(null, fileNameRamdon);
    }
});

export const uploadImgUser = multer({ storage: storageUser });

/*
 * File of project
 * @returns
 * */
const PATH_STORAGE_PROJECT = `${process.cwd()}${process.env.ROUTE_PROJECT}`;

const storageProject = diskStorage({
    destination(req: Request, file: Express.Multer.File, cb: any) {
        cb(null, PATH_STORAGE_PROJECT);
    },
    filename(req: Request, file: Express.Multer.File, cb: any) {
        const ext = file.originalname.split(".").pop();
        const fileNameRamdon = `image-${Date.now()}.${ext}`;
        cb(null, fileNameRamdon);
    }
});

export const uploadImgProject = multer({ storage: storageProject });
