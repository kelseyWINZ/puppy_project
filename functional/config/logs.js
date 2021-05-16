"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const winston_1 = require("winston");
class CustomLogger {
}
exports.CustomLogger = CustomLogger;
CustomLogger.loggerDetails = winston_1.createLogger({
    level: "info",
    format: winston_1.format.simple(),
    transports: [
        // - Write to all logs with level `info` and above to `combined.log`
        new winston_1.transports.File({ filename: "testLogs.log" }),
        // - Write all logs error (and above) to Console/terminal
        new winston_1.transports.Console(),
    ],
});
