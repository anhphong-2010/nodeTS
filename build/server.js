"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Todo_1 = require("./@data/entity/Todo");
typeorm_1.createConnection()
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.get("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const todo = new Todo_1.Todo();
        todo.name = "A Todo";
        yield connection.manager.save(todo);
        res.send(todo);
    }));
    app.get("/read", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const todos = yield connection.manager.find(Todo_1.Todo);
        res.send(todos);
    }));
    app.listen(3000, () => console.log("Example app listening on port 3000!"));
}))
    .catch((error) => console.log(error));
//# sourceMappingURL=server.js.map