"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2 = require(".");
var test$2;
(function (test$2) {
    const inferred = test(box);
})(test$2 || (test$2 = {}));
var test$3;
(function (test$3) {
    const inferred = test(box);
})(test$3 || (test$3 = {}));
var test$4;
(function (test$4) {
    const inferred = asVoid(box);
})(test$4 || (test$4 = {}));
// Tests extracting and lifting generic parameters
var test$5;
(function (test$5) {
    function duplicate(fa, extract, lift) {
        const a = extract(fa);
        return lift([a, a]);
    }
    const result = duplicate(box, fb => fb.value, Box);
})(test$5 || (test$5 = {}));
// Tests static-land typeclass inference
var test$6;
(function (test$6) {
    const BoxFunctor = {
        map(box, f) {
            return Box(f(box.value));
        }
    };
    function map(functor, fa, f) {
        return functor.map(functor.map(functor.map(fa, x => x), f), x => x);
    }
    const mapped = map(BoxFunctor, box, _ => parseInt(_, 10));
})(test$6 || (test$6 = {}));
// Tests kinds * -> * -> *
var test$7;
(function (test$7) {
    class Pair {
        constructor(_0, _1) {
            this._0 = _0;
            this._1 = _1;
        }
        map(_f) {
            return this;
        }
        swap() {
            return new Pair(this._1, this._0);
        }
    }
    _2.Generic.Type1, _2.Generic.Type2;
    const inF = map(x => x, pair).swap();
    const f = pair.map(x => undefined).swap();
    const inferred = infer(pair);
    const asV = asVoid(pair);
    const x = infer2(pair);
})(test$7 || (test$7 = {}));
