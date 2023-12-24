"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[56697],{2650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=t(85893),r=t(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"constantp"})," ",(0,s.jsx)(t,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"Function"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"constantp",children:(0,s.jsx)("b",{children:"constantp"})})," ",(0,s.jsx)(t,{styled:!0,term:"form",children:(0,s.jsx)("i",{children:"form"})})," &optional ",(0,s.jsx)(n.em,{children:"environment ! generalized-boolean"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"form",children:(0,s.jsx)("i",{children:"form"})}),"\u2014a ",(0,s.jsx)(t,{styled:!0,term:"form",children:(0,s.jsx)("i",{children:"form"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"environment",children:(0,s.jsx)("i",{children:"environment"})}),"\u2014an ",(0,s.jsx)(n.em,{children:"environment object"}),". The default is ",(0,s.jsx)(t,{styled:!0,term:"nil",children:(0,s.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(t,{styled:!0,term:"true",children:(0,s.jsx)("i",{children:"true"})})," if ",(0,s.jsx)(t,{styled:!0,term:"form",children:(0,s.jsx)("i",{children:"form"})})," can be determined by the ",(0,s.jsx)(t,{styled:!0,term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})})," to be a ",(0,s.jsx)(n.em,{children:"constant form"})," in the indicated ",(0,s.jsx)(t,{styled:!0,term:"environment",children:(0,s.jsx)("i",{children:"environment"})}),"; otherwise, it returns ",(0,s.jsx)(t,{styled:!0,term:"false",children:(0,s.jsx)("i",{children:"false"})})," indicating either that the ",(0,s.jsx)(t,{styled:!0,term:"form",children:(0,s.jsx)("i",{children:"form"})})," is not a ",(0,s.jsx)(n.em,{children:"constant form"})," or that it cannot be determined whether or not ",(0,s.jsx)(t,{styled:!0,term:"form",children:(0,s.jsx)("i",{children:"form"})})," is a ",(0,s.jsx)(n.em,{children:"constant form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The following kinds of ",(0,s.jsx)(t,{styled:!0,term:"form",children:(0,s.jsx)("i",{children:"forms"})})," are considered ",(0,s.jsx)(n.em,{children:"constant forms"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022 Self-evaluating objects"})," (such as ",(0,s.jsx)(t,{styled:!0,term:"number",children:(0,s.jsx)("i",{children:"numbers"})}),", ",(0,s.jsx)(t,{styled:!0,term:"character",children:(0,s.jsx)("i",{children:"characters"})}),", and the various kinds of ",(0,s.jsx)(t,{styled:!0,term:"array",children:(0,s.jsx)("i",{children:"arrays"})}),") are always considered ",(0,s.jsx)(n.em,{children:"constant forms"})," and must be recognized as such by ",(0,s.jsx)(t,{styled:!0,term:"constantp",children:(0,s.jsx)("b",{children:"constantp"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022 Constant variables"}),", such as ",(0,s.jsx)(t,{styled:!0,term:"keyword",children:(0,s.jsx)("i",{children:"keywords"})}),", symbols defined by Common Lisp as constant (such as ",(0,s.jsx)(t,{styled:!0,term:"nil",children:(0,s.jsx)("b",{children:"nil"})}),", ",(0,s.jsx)(t,{styled:!0,term:"t",children:(0,s.jsx)("b",{children:"t"})}),", and ",(0,s.jsx)(n.strong,{children:"pi"}),"), and symbols declared as constant by the user in the indicated ",(0,s.jsx)(t,{styled:!0,term:"environment",children:(0,s.jsx)("i",{children:"environment"})})," using ",(0,s.jsx)(t,{styled:!0,term:"defconstant",children:(0,s.jsx)("b",{children:"defconstant"})})," are always considered ",(0,s.jsx)(n.em,{children:"constant forms"})," and must be recognized as such by ",(0,s.jsx)(t,{styled:!0,term:"constantp",children:(0,s.jsx)("b",{children:"constantp"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," ",(0,s.jsx)(t,{styled:!0,term:"quote",children:(0,s.jsx)("b",{children:"quote"})})," ",(0,s.jsx)(t,{styled:!0,term:"form",children:(0,s.jsx)("i",{children:"forms"})})," are always considered ",(0,s.jsx)(n.em,{children:"constant forms"})," and must be recognized as such by ",(0,s.jsx)(t,{styled:!0,term:"constantp",children:(0,s.jsx)("b",{children:"constantp"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," An ",(0,s.jsx)(t,{styled:!0,term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})})," is permitted, but not required, to detect additional ",(0,s.jsx)(n.em,{children:"constant forms"}),". If it does, it is also permitted, but not required, to make use of information in the ",(0,s.jsx)(t,{styled:!0,term:"environment",children:(0,s.jsx)("i",{children:"environment"})}),". Examples of ",(0,s.jsx)(n.em,{children:"constant forms"})," for which ",(0,s.jsx)(t,{styled:!0,term:"constantp",children:(0,s.jsx)("b",{children:"constantp"})})," might or might not return ",(0,s.jsx)(t,{styled:!0,term:"true",children:(0,s.jsx)("i",{children:"true"})})," are: (sqrt pi), (+ 3 2), (length \u2019(a b c)), and (let ((x 7)) (zerop x))."]}),"\n",(0,s.jsxs)(n.p,{children:["If an ",(0,s.jsx)(t,{styled:!0,term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})})," chooses to make use of the ",(0,s.jsx)(t,{styled:!0,term:"environment",children:(0,s.jsx)("i",{children:"environment"})})," information, such actions as expanding ",(0,s.jsx)(t,{styled:!0,term:"macro",children:(0,s.jsx)("i",{children:"macros"})})," or performing function inlining are permitted to be used, but not required; however, expanding ",(0,s.jsx)(n.em,{children:"compiler macros"})," is not permitted."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:'\n(constantp 1) *! true* \n(constantp \u2019temp) *! false* \n(constantp \u201dtemp)) *! true* \n(defconstant this-is-a-constant \u2019never-changing) *!* THIS-IS-A-CONSTANT \nEvaluation and \n\n\n**constantp** \n(constantp \u2019this-is-a-constant) *! true* \n(constantp "temp") *! true* \n(setq a 6) *!* 6 \n(constantp a) *! true* \n(constantp \u2019(sin pi)) *! implementation-dependent* \n(constantp \u2019(car \u2019(x))) *! implementation-dependent* \n(constantp \u2019(eql x x)) *! implementation-dependent* \n(constantp \u2019(typep x \u2019nil)) *! implementation-dependent* \n(constantp \u2019(typep x \u2019t)) *! implementation-dependent* \n(constantp \u2019(values this-is-a-constant)) *! implementation-dependent* \n(constantp \u2019(values \u2019x \u2019y)) *! implementation-dependent* \n(constantp \u2019(let ((a \u2019(a b c))) (+ (length a) 6))) *! implementation-dependent* \n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Aected By:"})}),"\n",(0,s.jsxs)(n.p,{children:["The state of the global environment (",(0,s.jsx)(n.em,{children:"e.g."}),", which ",(0,s.jsx)(t,{styled:!0,term:"symbol",children:(0,s.jsx)("i",{children:"symbols"})})," have been declared to be the ",(0,s.jsx)(t,{styled:!0,term:"name",children:(0,s.jsx)("i",{children:"names"})})," of ",(0,s.jsx)(n.em,{children:"constant variables"}),")."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(t,{styled:!0,term:"defconstant",children:(0,s.jsx)("b",{children:"defconstant"})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const d={title:"constantp"},o="constantp",l={id:"chap-3/d-i-dictionary/constantp_function",title:"constantp",description:"Expanded Reference: constantp",source:"@site/docs/chap-3/d-i-dictionary/constantp_function.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/constantp_function",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/constantp_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/constantp_function.md",tags:[],version:"current",frontMatter:{title:"constantp"},sidebar:"tutorialSidebar",previous:{title:"compiler-macro-function",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/compiler-macro-function_accessor"},next:{title:"declaim",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/declaim_macro"}},a={},h=[{value:"Expanded Reference: constantp",id:"expanded-reference-constantp",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"constantp",children:"constantp"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-constantp",children:"Expanded Reference: constantp"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(constantp )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var s=t(67294);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);