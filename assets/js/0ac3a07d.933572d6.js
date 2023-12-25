"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[56697],{2650:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var r=t(85893),i=t(11151);function s(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components},{ClLinks:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"constantp"})," ",(0,r.jsx)(t,{term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(t,{term:"constantp",children:(0,r.jsx)("b",{children:"constantp"})})," ",(0,r.jsx)(t,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," &optional ",(0,r.jsx)(e.em,{children:"environment ! generalized-boolean"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(t,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),"\u2014a ",(0,r.jsx)(t,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(t,{term:"environment",children:(0,r.jsx)("i",{children:"environment"})}),"\u2014an ",(0,r.jsx)(e.em,{children:"environment object"}),". The default is ",(0,r.jsx)(t,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"generalized-boolean"}),"\u2014a ",(0,r.jsx)(e.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(e.p,{children:["Returns ",(0,r.jsx)(t,{term:"true",children:(0,r.jsx)("i",{children:"true"})})," if ",(0,r.jsx)(t,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," can be determined by the ",(0,r.jsx)(t,{term:"implementation",children:(0,r.jsx)("i",{children:"implementation"})})," to be a ",(0,r.jsx)(e.em,{children:"constant form"})," in the indicated ",(0,r.jsx)(t,{term:"environment",children:(0,r.jsx)("i",{children:"environment"})}),"; otherwise, it returns ",(0,r.jsx)(t,{term:"false",children:(0,r.jsx)("i",{children:"false"})})," indicating either that the ",(0,r.jsx)(t,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," is not a ",(0,r.jsx)(e.em,{children:"constant form"})," or that it cannot be determined whether or not ",(0,r.jsx)(t,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," is a ",(0,r.jsx)(e.em,{children:"constant form"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["The following kinds of ",(0,r.jsx)(t,{term:"form",children:(0,r.jsx)("i",{children:"forms"})})," are considered ",(0,r.jsx)(e.em,{children:"constant forms"}),":"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u2022 Self-evaluating objects"})," (such as ",(0,r.jsx)(t,{term:"number",children:(0,r.jsx)("i",{children:"numbers"})}),", ",(0,r.jsx)(t,{term:"character",children:(0,r.jsx)("i",{children:"characters"})}),", and the various kinds of ",(0,r.jsx)(t,{term:"array",children:(0,r.jsx)("i",{children:"arrays"})}),") are always considered ",(0,r.jsx)(e.em,{children:"constant forms"})," and must be recognized as such by ",(0,r.jsx)(t,{term:"constantp",children:(0,r.jsx)("b",{children:"constantp"})}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u2022 Constant variables"}),", such as ",(0,r.jsx)(t,{term:"keyword",children:(0,r.jsx)("i",{children:"keywords"})}),", symbols defined by Common Lisp as constant (such as ",(0,r.jsx)(t,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),", ",(0,r.jsx)(t,{term:"t",children:(0,r.jsx)("b",{children:"t"})}),", and ",(0,r.jsx)(e.strong,{children:"pi"}),"), and symbols declared as constant by the user in the indicated ",(0,r.jsx)(t,{term:"environment",children:(0,r.jsx)("i",{children:"environment"})})," using ",(0,r.jsx)(t,{term:"defconstant",children:(0,r.jsx)("b",{children:"defconstant"})})," are always considered ",(0,r.jsx)(e.em,{children:"constant forms"})," and must be recognized as such by ",(0,r.jsx)(t,{term:"constantp",children:(0,r.jsx)("b",{children:"constantp"})}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u2022"})," ",(0,r.jsx)(t,{term:"quote",children:(0,r.jsx)("b",{children:"quote"})})," ",(0,r.jsx)(t,{term:"form",children:(0,r.jsx)("i",{children:"forms"})})," are always considered ",(0,r.jsx)(e.em,{children:"constant forms"})," and must be recognized as such by ",(0,r.jsx)(t,{term:"constantp",children:(0,r.jsx)("b",{children:"constantp"})}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u2022"})," An ",(0,r.jsx)(t,{term:"implementation",children:(0,r.jsx)("i",{children:"implementation"})})," is permitted, but not required, to detect additional ",(0,r.jsx)(e.em,{children:"constant forms"}),". If it does, it is also permitted, but not required, to make use of information in the ",(0,r.jsx)(t,{term:"environment",children:(0,r.jsx)("i",{children:"environment"})}),". Examples of ",(0,r.jsx)(e.em,{children:"constant forms"})," for which ",(0,r.jsx)(t,{term:"constantp",children:(0,r.jsx)("b",{children:"constantp"})})," might or might not return ",(0,r.jsx)(t,{term:"true",children:(0,r.jsx)("i",{children:"true"})})," are: (sqrt pi), (+ 3 2), (length \u2019(a b c)), and (let ((x 7)) (zerop x))."]}),"\n",(0,r.jsxs)(e.p,{children:["If an ",(0,r.jsx)(t,{term:"implementation",children:(0,r.jsx)("i",{children:"implementation"})})," chooses to make use of the ",(0,r.jsx)(t,{term:"environment",children:(0,r.jsx)("i",{children:"environment"})})," information, such actions as expanding ",(0,r.jsx)(t,{term:"macro",children:(0,r.jsx)("i",{children:"macros"})})," or performing function inlining are permitted to be used, but not required; however, expanding ",(0,r.jsx)(e.em,{children:"compiler macros"})," is not permitted."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lisp",children:'(constantp 1) *! true* \n(constantp \u2019temp) *! false* \n(constantp \u201dtemp)) *! true* \n(defconstant this-is-a-constant \u2019never-changing) *!* THIS-IS-A-CONSTANT \nEvaluation and \n\n**constantp** \n(constantp \u2019this-is-a-constant) *! true* \n(constantp "temp") *! true* \n(setq a 6) *!* 6 \n(constantp a) *! true* \n(constantp \u2019(sin pi)) *! implementation-dependent* \n(constantp \u2019(car \u2019(x))) *! implementation-dependent* \n(constantp \u2019(eql x x)) *! implementation-dependent* \n(constantp \u2019(typep x \u2019nil)) *! implementation-dependent* \n(constantp \u2019(typep x \u2019t)) *! implementation-dependent* \n(constantp \u2019(values this-is-a-constant)) *! implementation-dependent* \n(constantp \u2019(values \u2019x \u2019y)) *! implementation-dependent* \n(constantp \u2019(let ((a \u2019(a b c))) (+ (length a) 6))) *! implementation-dependent* \n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Aected By:"})}),"\n",(0,r.jsxs)(e.p,{children:["The state of the global environment (",(0,r.jsx)(e.em,{children:"e.g."}),", which ",(0,r.jsx)(t,{term:"symbol",children:(0,r.jsx)("i",{children:"symbols"})})," have been declared to be the ",(0,r.jsx)(t,{term:"name",children:(0,r.jsx)("i",{children:"names"})})," of ",(0,r.jsx)(e.em,{children:"constant variables"}),")."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(t,{term:"defconstant",children:(0,r.jsx)("b",{children:"defconstant"})})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(s,{...n})}):s(n)}const o={title:"constantp"},d="constantp",a={id:"chap-3/d-i-dictionary/constantp_function",title:"constantp",description:"Expanded Reference: constantp",source:"@site/docs/chap-3/d-i-dictionary/constantp_function.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/constantp_function",permalink:"/cl-language-reference/chap-3/d-i-dictionary/constantp_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/constantp_function.md",tags:[],version:"current",frontMatter:{title:"constantp"},sidebar:"tutorialSidebar",previous:{title:"compiler-macro-function",permalink:"/cl-language-reference/chap-3/d-i-dictionary/compiler-macro-function_accessor"},next:{title:"declaim",permalink:"/cl-language-reference/chap-3/d-i-dictionary/declaim_macro"}},l={},h=[{value:"Expanded Reference: constantp",id:"expanded-reference-constantp",level:2}];function m(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"constantp",children:"constantp"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(e.h2,{id:"expanded-reference-constantp",children:"Expanded Reference: constantp"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lisp",children:"(constantp )\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(m,{...n})}):m(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>c});var r=t(67294);const i={},s=r.createContext(i);function c(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);