// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "input", "symbols": ["value"]},
    {"name": "value", "symbols": ["number"]},
    {"name": "value", "symbols": ["boolean"]},
    {"name": "value", "symbols": ["myNull"]},
    {"name": "value", "symbols": ["string"]},
    {"name": "value", "symbols": ["array"]},
    {"name": "array", "symbols": [{"literal":"["}, "array_items", {"literal":"]"}]},
    {"name": "array", "symbols": [{"literal":"["}, {"literal":"]"}]},
    {"name": "array_items", "symbols": ["value"]},
    {"name": "array_items", "symbols": ["value", {"literal":","}, "array_items"]},
    {"name": "string", "symbols": [{"literal":"\""}, "characters", {"literal":"\""}]},
    {"name": "characters", "symbols": ["character"]},
    {"name": "characters", "symbols": ["character", "characters"]},
    {"name": "character", "symbols": [/[^\"]/]},
    {"name": "myNull$string$1", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "myNull", "symbols": ["myNull$string$1"]},
    {"name": "boolean$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$1"]},
    {"name": "boolean$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$2"]},
    {"name": "number", "symbols": ["digits", {"literal":"."}, "digits"]},
    {"name": "number", "symbols": ["digits"]},
    {"name": "digits", "symbols": ["digit"]},
    {"name": "digits", "symbols": ["digit", "digits"]},
    {"name": "digit", "symbols": [/[0-9]/]}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
