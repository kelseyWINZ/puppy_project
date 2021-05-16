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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Z1bmN0aW9uYWwvY29uZmlnL2xvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTJEO0FBRTNELE1BQWEsWUFBWTs7QUFBekIsb0NBV0M7QUFWUSwwQkFBYSxHQUFHLHNCQUFZLENBQUM7SUFDbEMsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsZ0JBQU0sQ0FBQyxNQUFNLEVBQUU7SUFDdkIsVUFBVSxFQUFFO1FBQ1Ysb0VBQW9FO1FBQ3BFLElBQUksb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUM7UUFDakQseURBQXlEO1FBQ3pELElBQUksb0JBQVUsQ0FBQyxPQUFPLEVBQUU7S0FDekI7Q0FDRixDQUFDLENBQUMifQ==