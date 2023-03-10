"use strict";
exports.__esModule = true;
exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.prototype.search = function (firstName, lastName, teachersList, studentsList) {
        if (teachersList) {
            var index = teachersList.findIndex(function (teachersList) { return teachersList.getFirstName() == firstName
                && teachersList.getLastName() == lastName; });
            return index;
        }
        else if (studentsList) {
            var index = studentsList.findIndex(function (studentsList) { return studentsList.getFirstName() == firstName
                && studentsList.getLastName() == lastName; });
            return index;
        }
        return -1;
    };
    return Util;
}());
exports.Util = Util;
