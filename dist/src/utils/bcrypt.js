"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enCodePassword = enCodePassword;
const bcrypt = require("bcrypt");
function enCodePassword(rawPassword) {
    const SALT = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(rawPassword, SALT);
    return hashedPassword;
}
//# sourceMappingURL=bcrypt.js.map