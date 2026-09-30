"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=o(function(P,v){
function g(e,r,a,n){var i,u,t,s;for(i=r.data,u=r.accessors[0],t=n,s=0;s<e;s++){if(u(i,t))return s;t+=a}return-1}v.exports=g
});var c=o(function(R,x){
var p=require('@stdlib/array-base-arraylike2object/dist'),O=f();function h(e,r,a,n){var i,u,t;if(e<=0)return-1;if(u=p(r),u.accessorProtocol)return O(e,u,a,n);for(i=n,t=0;t<e;t++){if(r[i])return t;i+=a}return-1}x.exports=h
});var d=o(function(w,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),T=c();function b(e,r,a){return T(e,r,a,l(e,a))}y.exports=b
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),k=c();j(q,"ndarray",k);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
