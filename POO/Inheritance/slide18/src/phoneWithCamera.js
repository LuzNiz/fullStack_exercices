"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PhoneWithCamera = void 0;
var phone_1 = require("./phone");
var PhoneWithCamera = /** @class */ (function (_super) {
    __extends(PhoneWithCamera, _super);
    //CONSTRUCTOR
    function PhoneWithCamera() {
        var _this = _super.call(this) || this;
        _this.recording = false;
        _this.buttonPhoto = false;
        return _this;
    }
    //SPECIFIC METHODS
    PhoneWithCamera.prototype.takePhoto = function () {
        this.buttonPhoto = !this.buttonPhoto;
        if (this.buttonPhoto) {
            console.log("Taking photograph...");
            this.buttonPhoto = !this.buttonPhoto;
        }
    };
    PhoneWithCamera.prototype.startEndRecording = function (type) {
        this.recording = !this.recording;
        if (this.recording) {
            this.recordVideo(type);
        }
    };
    PhoneWithCamera.prototype.recordVideo = function (type) {
        var duration = 0.00;
        var durationMax = 0;
        if (type === "short") {
            durationMax = 0.25;
        }
        else if (type === "long") {
            durationMax = 600;
        }
        while (this.recording && duration < durationMax) {
            console.log("Recording video...");
            duration += 0.01;
        }
        console.log("Finished video. ".concat(duration.toFixed(2), " seg. video"));
    };
    return PhoneWithCamera;
}(phone_1.Phone));
exports.PhoneWithCamera = PhoneWithCamera;
