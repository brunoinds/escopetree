const escope = require('escope');
const esprima = require('esprima');


class EscopeTree{
    static analyze(code){
        const ast = esprima.parse(code);
        const scopeManager = escope.analyze(ast);
        return scopeManager.acquire(ast);
    }
}
if (window){
    window.EscopeTree = EscopeTree;
}
exports.EscopeTree = EscopeTree;