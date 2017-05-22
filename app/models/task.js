"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = (function () {
    function Task(details, isCompleted) {
        if (details === void 0) { details = null; }
        if (isCompleted === void 0) { isCompleted = false; }
        this.details = details;
        this.isCompleted = isCompleted;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map