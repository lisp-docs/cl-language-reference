"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[55475],{79217:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>j,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var c=n(85893),t=n(11151);function i(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:n,GlossaryTerm:i}=r;return n||l("ClLinks",!0),i||l("GlossaryTerm",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"coerce"})," ",(0,c.jsx)(n,{term:"function",children:(0,c.jsx)("i",{children:"Function"})})]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(n,{term:"coerce",children:(0,c.jsx)("b",{children:"coerce"})})," ",(0,c.jsx)(r.em,{children:"object result-type \u2192 result"})]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})}),"\u2014an ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})}),"."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"result-type"}),"\u2014a ",(0,c.jsx)(i,{styled:!0,term:"type specifier",children:(0,c.jsx)("i",{children:"type specifier"})})," ."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"result"}),"\u2014an ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})}),", of ",(0,c.jsx)(r.em,{children:"type result-type"})," except in situations described in Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals)."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(n,{term:"coerce",children:(0,c.jsx)("i",{children:"Coerces"})})," the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," to ",(0,c.jsx)(r.em,{children:"type result-type"}),"."]}),"\n",(0,c.jsxs)(r.p,{children:["If ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is already of ",(0,c.jsx)(r.em,{children:"type result-type"}),", the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," itself is returned, regardless of whether it would have been possible in general to coerce an ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," of some other ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," to ",(0,c.jsx)(r.em,{children:"result-type"}),"."]}),"\n",(0,c.jsxs)(r.p,{children:["Otherwise, the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is ",(0,c.jsx)(r.em,{children:"coerced"})," to ",(0,c.jsx)(r.em,{children:"type result-type"})," according to the following rules:"]}),"\n",(0,c.jsx)(n,{term:"coerce",children:(0,c.jsx)("b",{children:"coerce"})}),"\n",(0,c.jsx)(n,{term:"sequence",children:(0,c.jsx)("b",{children:"sequence"})}),"\n",(0,c.jsxs)(r.p,{children:["If the ",(0,c.jsx)(r.em,{children:"result-type"})," is a ",(0,c.jsx)(i,{styled:!0,term:"recognizable subtype",children:(0,c.jsx)("i",{children:"recognizable subtype"})})," of ",(0,c.jsx)(n,{term:"list",children:(0,c.jsx)("b",{children:"list"})}),", and the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is a ",(0,c.jsx)(r.em,{children:"sequence"}),", then the ",(0,c.jsx)(r.em,{children:"result"})," is a ",(0,c.jsx)(n,{term:"list",children:(0,c.jsx)("i",{children:"list"})})," that has the ",(0,c.jsx)(r.em,{children:"same elements"})," as ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})}),"."]}),"\n",(0,c.jsxs)(r.p,{children:["If the ",(0,c.jsx)(r.em,{children:"result-type"})," is a ",(0,c.jsx)(i,{styled:!0,term:"recognizable subtype",children:(0,c.jsx)("i",{children:"recognizable subtype"})})," of ",(0,c.jsx)(n,{term:"vector",children:(0,c.jsx)("b",{children:"vector"})}),", and the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is a ",(0,c.jsx)(r.em,{children:"sequence"}),", then the ",(0,c.jsx)(r.em,{children:"result"})," is a ",(0,c.jsx)(n,{term:"vector",children:(0,c.jsx)("i",{children:"vector"})})," that has the ",(0,c.jsx)(r.em,{children:"same elements"})," as ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})}),". If ",(0,c.jsx)(r.em,{children:"result-type"})," is a specialized ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})}),", the ",(0,c.jsx)(r.em,{children:"result"})," has an ",(0,c.jsx)(i,{styled:!0,term:"actual array element type",children:(0,c.jsx)("i",{children:"actual array element type"})})," that is the result of ",(0,c.jsx)(r.em,{children:"upgrading"})," the element type part of that ",(0,c.jsx)(r.em,{children:"specialized type"}),". If no element type is specified, the element type defaults to ",(0,c.jsx)(n,{term:"t",children:(0,c.jsx)("b",{children:"t"})}),". If the ",(0,c.jsx)(n,{term:"implementation",children:(0,c.jsx)("i",{children:"implementation"})})," cannot determine the element type, an error is signaled."]}),"\n",(0,c.jsx)(n,{term:"character",children:(0,c.jsx)("b",{children:"character"})}),"\n",(0,c.jsxs)(r.p,{children:["If the ",(0,c.jsx)(r.em,{children:"result-type"})," is ",(0,c.jsx)(n,{term:"character",children:(0,c.jsx)("b",{children:"character"})})," and the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is a ",(0,c.jsx)(i,{styled:!0,term:"character designator",children:(0,c.jsx)("i",{children:"character designator"})})," , the ",(0,c.jsx)(r.em,{children:"result"})," is the ",(0,c.jsx)(n,{term:"character",children:(0,c.jsx)("i",{children:"character"})})," it denotes."]}),"\n",(0,c.jsx)(n,{term:"complex",children:(0,c.jsx)("b",{children:"complex"})}),"\n",(0,c.jsxs)(r.p,{children:["If the ",(0,c.jsx)(r.em,{children:"result-type"})," is ",(0,c.jsx)(n,{term:"complex",children:(0,c.jsx)("b",{children:"complex"})})," and the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is a ",(0,c.jsx)(r.em,{children:"real"}),", then the ",(0,c.jsx)(r.em,{children:"result"})," is obtained by constructing a ",(0,c.jsx)(n,{term:"complex",children:(0,c.jsx)("i",{children:"complex"})})," whose real part is the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," and whose imaginary part is the result of ",(0,c.jsx)(r.em,{children:"coercing"})," an ",(0,c.jsx)(r.em,{children:"integer"})," zero to the ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," of the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," (using ",(0,c.jsx)(n,{term:"coerce",children:(0,c.jsx)("b",{children:"coerce"})}),"). (If the real part is a ",(0,c.jsx)(n,{term:"rational",children:(0,c.jsx)("i",{children:"rational"})}),", however, then the result must be represented as a ",(0,c.jsx)(n,{term:"rational",children:(0,c.jsx)("i",{children:"rational"})})," rather than a ",(0,c.jsx)(n,{term:"complex",children:(0,c.jsx)("i",{children:"complex"})})," ; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). So, for example, (coerce 3 \u2019complex) is permissible, but will return 3, which is not a ",(0,c.jsx)(n,{term:"complex",children:(0,c.jsx)("i",{children:"complex"})})," .)"]}),"\n",(0,c.jsx)(n,{term:"float",children:(0,c.jsx)("b",{children:"float"})}),"\n",(0,c.jsxs)(r.p,{children:["If the ",(0,c.jsx)(r.em,{children:"result-type"})," is any of ",(0,c.jsx)(n,{term:"float",children:(0,c.jsx)("b",{children:"float"})}),", ",(0,c.jsx)(n,{term:"short-float",children:(0,c.jsx)("b",{children:"short-float"})}),", ",(0,c.jsx)(n,{term:"single-float",children:(0,c.jsx)("b",{children:"single-float"})}),", ",(0,c.jsx)(n,{term:"double-float",children:(0,c.jsx)("b",{children:"double-float"})}),", ",(0,c.jsx)(n,{term:"long-float",children:(0,c.jsx)("b",{children:"long-float"})}),", and the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is a ",(0,c.jsx)(r.em,{children:"real"}),", then the ",(0,c.jsx)(r.em,{children:"result"})," is a ",(0,c.jsx)(n,{term:"float",children:(0,c.jsx)("i",{children:"float"})})," of ",(0,c.jsx)(r.em,{children:"type result-type"})," which is equal in sign and magnitude to the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," to whatever degree of representational precision is permitted by that ",(0,c.jsx)(n,{term:"float",children:(0,c.jsx)("i",{children:"float"})})," representation. (If the ",(0,c.jsx)(r.em,{children:"result-type"})," is ",(0,c.jsx)(n,{term:"float",children:(0,c.jsx)("b",{children:"float"})})," and ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is not already a ",(0,c.jsx)(n,{term:"float",children:(0,c.jsx)("i",{children:"float"})}),", then the ",(0,c.jsx)(r.em,{children:"result"})," is a ",(0,c.jsx)(i,{styled:!0,term:"single float",children:(0,c.jsx)("i",{children:"single float"})}),".)"]}),"\n",(0,c.jsx)(n,{term:"function",children:(0,c.jsx)("b",{children:"function"})}),"\n",(0,c.jsxs)(r.p,{children:["If the ",(0,c.jsx)(r.em,{children:"result-type"})," is ",(0,c.jsx)(n,{term:"function",children:(0,c.jsx)("b",{children:"function"})}),", and ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is any ",(0,c.jsx)(i,{styled:!0,term:"function name",children:(0,c.jsx)("i",{children:"function name"})})," that is ",(0,c.jsx)(n,{term:"fbound",children:(0,c.jsx)("i",{children:"fbound"})})," but that is globally defined neither as a ",(0,c.jsx)(i,{styled:!0,term:"macro name",children:(0,c.jsx)("i",{children:"macro name"})})," nor as a ",(0,c.jsx)(i,{styled:!0,term:"special operator",children:(0,c.jsx)("i",{children:"special operator"})})," , then the ",(0,c.jsx)(r.em,{children:"result"})," is the ",(0,c.jsx)(i,{styled:!0,term:"functional value",children:(0,c.jsx)("i",{children:"functional value"})})," of ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})}),"."]}),"\n",(0,c.jsxs)(r.p,{children:["If the ",(0,c.jsx)(r.em,{children:"result-type"})," is ",(0,c.jsx)(n,{term:"function",children:(0,c.jsx)("b",{children:"function"})}),", and ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is a ",(0,c.jsx)(i,{styled:!0,term:"lambda expression",children:(0,c.jsx)("i",{children:"lambda expression"})}),", then the ",(0,c.jsx)(r.em,{children:"result"})," is a ",(0,c.jsx)(n,{term:"closure",children:(0,c.jsx)("i",{children:"closure"})})," of ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," in the ",(0,c.jsx)(i,{styled:!0,term:"null lexical environment",children:(0,c.jsx)("i",{children:"null lexical environment"})}),"."]}),"\n",(0,c.jsx)(n,{term:"t",children:(0,c.jsx)("b",{children:"t"})}),"\n",(0,c.jsxs)(r.p,{children:["Any ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," can be ",(0,c.jsx)(r.em,{children:"coerced"})," to an ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," of ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," ",(0,c.jsx)(n,{term:"t",children:(0,c.jsx)("b",{children:"t"})}),". In this case, the ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is simply returned."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-lisp",children:'(coerce \u2019(a b c) \u2019vector) \u2192 #(A B C)  \n(coerce \u2019a \u2019character) \u2192 #\\A \n(coerce 4.56 \u2019complex) \u2192 #C(4.56 0.0) \n(coerce 4.5s0 \u2019complex) \u2192 #C(4.5s0 0.0s0) \n(coerce 7/2 \u2019complex) \u2192 7/2 \n(coerce 0 \u2019short-float) \u2192 0.0s0 \n(coerce 3.5L0 \u2019float) \u2192 3.5L0 \n(coerce 7/2 \u2019float) \u2192 3.5 \n(coerce (cons 1 2) t) \u2192 (1 . 2) \nAll the following *forms* should signal an error: \n(coerce \u2019(a b c) \u2019(vector \\* 4)) \n(coerce #(a b c) \u2019(vector \\* 4)) \n(coerce \u2019(a b c) \u2019(vector \\* 2)) \n(coerce #(a b c) \u2019(vector \\* 2)) \n(coerce "foo" \u2019(string 2)) \n(coerce #(#\\a #\\b #\\c) \u2019(string 2)) \n(coerce \u2019(0 1) \u2019(simple-bit-vector 3)) \n'})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,c.jsxs)(r.p,{children:["If a coercion is not possible, an error of ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," ",(0,c.jsx)(n,{term:"type-error",children:(0,c.jsx)("b",{children:"type-error"})})," is signaled."]}),"\n",(0,c.jsxs)(r.p,{children:["(coerce x \u2019nil) always signals an error of ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," ",(0,c.jsx)(n,{term:"type-error",children:(0,c.jsx)("b",{children:"type-error"})}),"."]}),"\n",(0,c.jsxs)(r.p,{children:["An error of ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," ",(0,c.jsx)(n,{term:"error",children:(0,c.jsx)("b",{children:"error"})})," is signaled if the ",(0,c.jsx)(r.em,{children:"result-type"})," is ",(0,c.jsx)(n,{term:"function",children:(0,c.jsx)("b",{children:"function"})})," but ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is a ",(0,c.jsx)(n,{term:"symbol",children:(0,c.jsx)("i",{children:"symbol"})})," that is not ",(0,c.jsx)(n,{term:"fbound",children:(0,c.jsx)("i",{children:"fbound"})})," or if the ",(0,c.jsx)(n,{term:"symbol",children:(0,c.jsx)("i",{children:"symbol"})})," names a ",(0,c.jsx)(n,{term:"macro",children:(0,c.jsx)("i",{children:"macro"})})," or a ",(0,c.jsx)(i,{styled:!0,term:"special operator",children:(0,c.jsx)("i",{children:"special operator"})})," ."]}),"\n",(0,c.jsxs)(r.p,{children:["An error of ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," ",(0,c.jsx)(n,{term:"type-error",children:(0,c.jsx)("b",{children:"type-error"})})," should be signaled if ",(0,c.jsx)(r.em,{children:"result-type"})," specifies the number of elements and ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is of a different length."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(n,{term:"rational",children:(0,c.jsx)("b",{children:"rational"})}),", ",(0,c.jsx)(n,{term:"floor",children:(0,c.jsx)("b",{children:"floor"})}),", ",(0,c.jsx)(n,{term:"char-code",children:(0,c.jsx)("b",{children:"char-code"})}),", ",(0,c.jsx)(n,{term:"char-int",children:(0,c.jsx)("b",{children:"char-int"})})]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,c.jsxs)(r.p,{children:["Coercions from ",(0,c.jsx)(n,{term:"float",children:(0,c.jsx)("i",{children:"floats"})})," to ",(0,c.jsx)(n,{term:"rational",children:(0,c.jsx)("i",{children:"rationals"})})," and from ",(0,c.jsx)(n,{term:"ratio",children:(0,c.jsx)("i",{children:"ratios"})})," to ",(0,c.jsx)(r.em,{children:"integers"})," are not provided because of rounding problems."]}),"\n",(0,c.jsxs)(r.p,{children:["(coerce x \u2019t) ",(0,c.jsx)(r.em,{children:"\u2261"})," (identity x) ",(0,c.jsx)(r.em,{children:"\u2261"})," x"]}),"\n",(0,c.jsx)(n,{term:"deftype",children:(0,c.jsx)("b",{children:"deftype"})})]})}function s(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}function l(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"coerce"},d="coerce",h={id:"chap-4/e-e-dictionary/coerce_function",title:"coerce",description:"Expanded Reference: coerce",source:"@site/docs/chap-4/e-e-dictionary/coerce_function.md",sourceDirName:"chap-4/e-e-dictionary",slug:"/chap-4/e-e-dictionary/coerce_function",permalink:"/cl-language-reference/chap-4/e-e-dictionary/coerce_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-4/e-e-dictionary/coerce_function.md",tags:[],version:"current",frontMatter:{title:"coerce"},sidebar:"tutorialSidebar",previous:{title:"class",permalink:"/cl-language-reference/chap-4/e-e-dictionary/class_system-class"},next:{title:"compiled-function",permalink:"/cl-language-reference/chap-4/e-e-dictionary/compiled-function_type"}},j={},x=[{value:"Expanded Reference: coerce",id:"expanded-reference-coerce",level:2}];function a(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h1,{id:"coerce",children:"coerce"}),"\n","\n","\n",(0,c.jsx)(s,{}),"\n",(0,c.jsx)(r.h2,{id:"expanded-reference-coerce",children:"Expanded Reference: coerce"}),"\n",(0,c.jsx)(r.admonition,{type:"tip",children:(0,c.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-lisp",children:"(coerce )\n"})})]})}function m(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>s});var c=n(67294);const t={},i=c.createContext(t);function s(e){const r=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(i.Provider,{value:r},e.children)}}}]);