// declare namespace Express {
//     interface Request {
//         doesExist?: boolean;
//     }
// }
import { Request } from "express";
export interface checkExistingCoinRequest extends Request {
    doesExist?: boolean;
}
