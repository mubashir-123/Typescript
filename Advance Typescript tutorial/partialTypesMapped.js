// type partial<T> = { [P in keyof T]?: T[P] };
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// In the given class we can update any next memeber intead of all members to update by using the Partial
var State = /** @class */ (function () {
    function State(current) {
        this.current = current;
    }
    State.prototype.udpate = function (next) {
        this.current = __assign(__assign({}, this.current), next);
    };
    return State;
}());
// Usage
var state = new State({ x: 0, y: 0 });
state.udpate({ y: 123 });
console.log(state.current);
