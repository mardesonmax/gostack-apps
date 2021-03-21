"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWord = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWord(req, res) {
    var user = CreateUser_1.default({
        name: 'Mardeson',
        email: 'maxpb777@gmail.com',
        password: '123456',
        techs: ['JavaScrip', { title: 'NodeJS', experience: 100 }]
    });
    return res.json({ message: "Hello Word, " + user.name });
}
exports.helloWord = helloWord;
