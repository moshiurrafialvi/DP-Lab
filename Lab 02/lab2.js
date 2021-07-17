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
var Decorator = /** @class */ (function () {
    function Decorator(inputText) {
        this.inputText = inputText;
    }
    Decorator.prototype.decorate = function () {
        return this.inputText.decorate();
    };
    return Decorator;
}());
var UserInput = /** @class */ (function () {
    function UserInput(text) {
        this.text = text;
    }
    UserInput.prototype.decorate = function () {
        return this.text;
    };
    return UserInput;
}());
var BoldDecorator = /** @class */ (function (_super) {
    __extends(BoldDecorator, _super);
    function BoldDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoldDecorator.prototype.decorate = function () {
        return _super.prototype.decorate.call(this).bold();
    };
    return BoldDecorator;
}(Decorator));
var ItalicDecorator = /** @class */ (function (_super) {
    __extends(ItalicDecorator, _super);
    function ItalicDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItalicDecorator.prototype.decorate = function () {
        return _super.prototype.decorate.call(this).italics();
    };
    return ItalicDecorator;
}(Decorator));
var StrikeDecorator = /** @class */ (function (_super) {
    __extends(StrikeDecorator, _super);
    function StrikeDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StrikeDecorator.prototype.decorate = function () {
        return _super.prototype.decorate.call(this).strike();
    };
    return StrikeDecorator;
}(Decorator));
var text = new UserInput("Hello World");
console.log("Plain word: ", text.decorate());
var decorator1 = new BoldDecorator(text);
console.log("Bold word: ", decorator1.decorate());
var decorator2 = new ItalicDecorator(decorator1);
console.log("Bold and Italic word: ", decorator2.decorate());
var decorator3 = new StrikeDecorator(decorator2);
console.log("Bold, Italic and Strike word: ", decorator3.decorate());
