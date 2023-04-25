"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acer = exports.asus = void 0;
const Asus_1 = __importDefault(require("./Asus"));
const Acer_1 = __importDefault(require("./Acer"));
let asus = new Asus_1.default("A456U", true, true);
exports.asus = asus;
let acer = new Acer_1.default("Swift 3", true, true);
exports.acer = acer;
