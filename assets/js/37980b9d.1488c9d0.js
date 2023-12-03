"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[36988],{65635:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>a});var s=r(85893),c=r(11151);function t(e){const n={em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"coerce"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"coerce"})," ",(0,s.jsx)(n.em,{children:"object result-type \u2192 result"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"object"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"result-type"}),"\u2014a ",(0,s.jsx)(n.em,{children:"type specifier"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"result"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),", of ",(0,s.jsx)(n.em,{children:"type result-type"})," except in situations described in Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Coerces"})," the ",(0,s.jsx)(n.em,{children:"object"})," to ",(0,s.jsx)(n.em,{children:"type result-type"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"object"})," is already of ",(0,s.jsx)(n.em,{children:"type result-type"}),", the ",(0,s.jsx)(n.em,{children:"object"})," itself is returned, regardless of whether it would have been possible in general to coerce an ",(0,s.jsx)(n.em,{children:"object"})," of some other ",(0,s.jsx)(n.em,{children:"type"})," to ",(0,s.jsx)(n.em,{children:"result-type"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Otherwise, the ",(0,s.jsx)(n.em,{children:"object"})," is ",(0,s.jsx)(n.em,{children:"coerced"})," to ",(0,s.jsx)(n.em,{children:"type result-type"})," according to the following rules:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"coerce"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"sequence"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"result-type"})," is a ",(0,s.jsx)(n.em,{children:"recognizable subtype"})," of ",(0,s.jsx)(n.strong,{children:"list"}),", and the ",(0,s.jsx)(n.em,{children:"object"})," is a ",(0,s.jsx)(n.em,{children:"sequence"}),", then the ",(0,s.jsx)(n.em,{children:"result"})," is a ",(0,s.jsx)(n.em,{children:"list"})," that has the ",(0,s.jsx)(n.em,{children:"same elements"})," as ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"result-type"})," is a ",(0,s.jsx)(n.em,{children:"recognizable subtype"})," of ",(0,s.jsx)(n.strong,{children:"vector"}),", and the ",(0,s.jsx)(n.em,{children:"object"})," is a ",(0,s.jsx)(n.em,{children:"sequence"}),", then the ",(0,s.jsx)(n.em,{children:"result"})," is a ",(0,s.jsx)(n.em,{children:"vector"})," that has the ",(0,s.jsx)(n.em,{children:"same elements"})," as ",(0,s.jsx)(n.em,{children:"object"}),". If ",(0,s.jsx)(n.em,{children:"result-type"})," is a specialized ",(0,s.jsx)(n.em,{children:"type"}),", the ",(0,s.jsx)(n.em,{children:"result"})," has an ",(0,s.jsx)(n.em,{children:"actual array element type"})," that is the result of ",(0,s.jsx)(n.em,{children:"upgrading"})," the element type part of that ",(0,s.jsx)(n.em,{children:"specialized type"}),". If no element type is specified, the element type defaults to ",(0,s.jsx)(n.strong,{children:"t"}),". If the ",(0,s.jsx)(n.em,{children:"implementation"})," cannot determine the element type, an error is signaled."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"character"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"result-type"})," is ",(0,s.jsx)(n.strong,{children:"character"})," and the ",(0,s.jsx)(n.em,{children:"object"})," is a ",(0,s.jsx)(n.em,{children:"character designator"})," , the ",(0,s.jsx)(n.em,{children:"result"})," is the ",(0,s.jsx)(n.em,{children:"character"})," it denotes."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"complex"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"result-type"})," is ",(0,s.jsx)(n.strong,{children:"complex"})," and the ",(0,s.jsx)(n.em,{children:"object"})," is a ",(0,s.jsx)(n.em,{children:"real"}),", then the ",(0,s.jsx)(n.em,{children:"result"})," is obtained by constructing a ",(0,s.jsx)(n.em,{children:"complex"})," whose real part is the ",(0,s.jsx)(n.em,{children:"object"})," and whose imaginary part is the result of ",(0,s.jsx)(n.em,{children:"coercing"})," an ",(0,s.jsx)(n.em,{children:"integer"})," zero to the ",(0,s.jsx)(n.em,{children:"type"})," of the ",(0,s.jsx)(n.em,{children:"object"})," (using ",(0,s.jsx)(n.strong,{children:"coerce"}),"). (If the real part is a ",(0,s.jsx)(n.em,{children:"rational"}),", however, then the result must be represented as a ",(0,s.jsx)(n.em,{children:"rational"})," rather than a ",(0,s.jsx)(n.em,{children:"complex"})," ; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). So, for example, (coerce 3 \u2019complex) is permissible, but will return 3, which is not a ",(0,s.jsx)(n.em,{children:"complex"})," .)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"float"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"result-type"})," is any of ",(0,s.jsx)(n.strong,{children:"float"}),", ",(0,s.jsx)(n.strong,{children:"short-float"}),", ",(0,s.jsx)(n.strong,{children:"single-float"}),", ",(0,s.jsx)(n.strong,{children:"double-float"}),", ",(0,s.jsx)(n.strong,{children:"long-float"}),", and the ",(0,s.jsx)(n.em,{children:"object"})," is a ",(0,s.jsx)(n.em,{children:"real"}),", then the ",(0,s.jsx)(n.em,{children:"result"})," is a ",(0,s.jsx)(n.em,{children:"float"})," of ",(0,s.jsx)(n.em,{children:"type result-type"})," which is equal in sign and magnitude to the ",(0,s.jsx)(n.em,{children:"object"})," to whatever degree of representational precision is permitted by that ",(0,s.jsx)(n.em,{children:"float"})," representation. (If the ",(0,s.jsx)(n.em,{children:"result-type"})," is ",(0,s.jsx)(n.strong,{children:"float"})," and ",(0,s.jsx)(n.em,{children:"object"})," is not already a ",(0,s.jsx)(n.em,{children:"float"}),", then the ",(0,s.jsx)(n.em,{children:"result"})," is a ",(0,s.jsx)(n.em,{children:"single float"}),".)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"function"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"result-type"})," is ",(0,s.jsx)(n.strong,{children:"function"}),", and ",(0,s.jsx)(n.em,{children:"object"})," is any ",(0,s.jsx)(n.em,{children:"function name"})," that is ",(0,s.jsx)(n.em,{children:"fbound"})," but that is globally defined neither as a ",(0,s.jsx)(n.em,{children:"macro name"})," nor as a ",(0,s.jsx)(n.em,{children:"special operator"})," , then the ",(0,s.jsx)(n.em,{children:"result"})," is the ",(0,s.jsx)(n.em,{children:"functional value"})," of ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"result-type"})," is ",(0,s.jsx)(n.strong,{children:"function"}),", and ",(0,s.jsx)(n.em,{children:"object"})," is a ",(0,s.jsx)(n.em,{children:"lambda expression"}),", then the ",(0,s.jsx)(n.em,{children:"result"})," is a ",(0,s.jsx)(n.em,{children:"closure"})," of ",(0,s.jsx)(n.em,{children:"object"})," in the ",(0,s.jsx)(n.em,{children:"null lexical environment"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"t"})}),"\n",(0,s.jsxs)(n.p,{children:["Any ",(0,s.jsx)(n.em,{children:"object"})," can be ",(0,s.jsx)(n.em,{children:"coerced"})," to an ",(0,s.jsx)(n.em,{children:"object"})," of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"t"}),". In this case, the ",(0,s.jsx)(n.em,{children:"object"})," is simply returned. ",(0,s.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce \u2019(a b c) \u2019vector) ",(0,s.jsx)(n.em,{children:"\u2192"})," #(A B C)"]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce \u2019a \u2019character) ",(0,s.jsx)(n.em,{children:"\u2192"})," #\\A"]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce 4.56 \u2019complex) ",(0,s.jsx)(n.em,{children:"\u2192"})," #C(4.56 0.0)"]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce 4.5s0 \u2019complex) ",(0,s.jsx)(n.em,{children:"\u2192"})," #C(4.5s0 0.0s0)"]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce 7/2 \u2019complex) ",(0,s.jsx)(n.em,{children:"\u2192"})," 7/2"]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce 0 \u2019short-float) ",(0,s.jsx)(n.em,{children:"\u2192"})," 0.0s0"]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce 3.5L0 \u2019float) ",(0,s.jsx)(n.em,{children:"\u2192"})," 3.5L0"]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce 7/2 \u2019float) ",(0,s.jsx)(n.em,{children:"\u2192"})," 3.5"]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce (cons 1 2) t) ",(0,s.jsx)(n.em,{children:"\u2192"})," (1 . 2)"]}),"\n",(0,s.jsxs)(n.p,{children:["All the following ",(0,s.jsx)(n.em,{children:"forms"})," should signal an error:"]}),"\n",(0,s.jsx)(n.p,{children:"(coerce \u2019(a b c) \u2019(vector * 4))"}),"\n",(0,s.jsx)(n.p,{children:"(coerce #(a b c) \u2019(vector * 4))"}),"\n",(0,s.jsx)(n.p,{children:"(coerce \u2019(a b c) \u2019(vector * 2))"}),"\n",(0,s.jsx)(n.p,{children:"(coerce #(a b c) \u2019(vector * 2))"}),"\n",(0,s.jsx)(n.p,{children:'(coerce "foo" \u2019(string 2))'}),"\n",(0,s.jsx)(n.p,{children:"(coerce #(#\\a #\\b #\\c) \u2019(string 2))"}),"\n",(0,s.jsx)(n.p,{children:"(coerce \u2019(0 1) \u2019(simple-bit-vector 3))"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["If a coercion is not possible, an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," is signaled."]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce x \u2019nil) always signals an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"error"})," is signaled if the ",(0,s.jsx)(n.em,{children:"result-type"})," is ",(0,s.jsx)(n.strong,{children:"function"})," but ",(0,s.jsx)(n.em,{children:"object"})," is a ",(0,s.jsx)(n.em,{children:"symbol"})," that is not ",(0,s.jsx)(n.em,{children:"fbound"})," or if the ",(0,s.jsx)(n.em,{children:"symbol"})," names a ",(0,s.jsx)(n.em,{children:"macro"})," or a ",(0,s.jsx)(n.em,{children:"special operator"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:["An error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," should be signaled if ",(0,s.jsx)(n.em,{children:"result-type"})," specifies the number of elements and ",(0,s.jsx)(n.em,{children:"object"})," is of a different length."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"rational"}),", ",(0,s.jsx)(n.strong,{children:"floor"}),", ",(0,s.jsx)(n.strong,{children:"char-code"}),", ",(0,s.jsx)(n.strong,{children:"char-int"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["Coercions from ",(0,s.jsx)(n.em,{children:"floats"})," to ",(0,s.jsx)(n.em,{children:"rationals"})," and from ",(0,s.jsx)(n.em,{children:"ratios"})," to ",(0,s.jsx)(n.em,{children:"integers"})," are not provided because of rounding problems."]}),"\n",(0,s.jsxs)(n.p,{children:["(coerce x \u2019t) ",(0,s.jsx)(n.em,{children:"\u2261"})," (identity x) ",(0,s.jsx)(n.em,{children:"\u2261"})," x"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"deftype"})})]})}function i(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const l={},o="coerce",h={id:"chap-4/e-e-dictionary/coerce",title:"coerce",description:"Expanded Reference: coerce",source:"@site/docs/chap-4/e-e-dictionary/coerce.md",sourceDirName:"chap-4/e-e-dictionary",slug:"/chap-4/e-e-dictionary/coerce",permalink:"/cl-language-reference/docs/chap-4/e-e-dictionary/coerce",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-4/e-e-dictionary/coerce.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"class",permalink:"/cl-language-reference/docs/chap-4/e-e-dictionary/class"},next:{title:"compiled-function",permalink:"/cl-language-reference/docs/chap-4/e-e-dictionary/compiledfunction"}},d={},a=[{value:"Expanded Reference: coerce",id:"expanded-reference-coerce",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"coerce",children:"coerce"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-coerce",children:"Expanded Reference: coerce"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(coerce )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var s=r(67294);const c={},t=s.createContext(c);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);