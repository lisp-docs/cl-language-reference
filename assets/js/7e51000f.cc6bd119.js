"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[43117],{60399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var r=t(85893),d=t(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components},{ClLinks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"function-keywords"})," ",(0,r.jsx)(n.em,{children:"Standard Generic Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{styled:!0,term:"function-keywords",children:(0,r.jsx)("b",{children:"function-keywords"})})," ",(0,r.jsx)(n.em,{children:"method \u2192 keys, allow-other-keys-p"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Method Signatures:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{styled:!0,term:"function-keywords",children:(0,r.jsx)("b",{children:"function-keywords"})})," (",(0,r.jsx)(t,{styled:!0,term:"method",children:(0,r.jsx)("i",{children:"method"})})," ",(0,r.jsx)(t,{styled:!0,term:"standard-method",children:(0,r.jsx)("b",{children:"standard-method"})}),")"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{styled:!0,term:"method",children:(0,r.jsx)("i",{children:"method"})}),"\u2014a ",(0,r.jsx)(t,{styled:!0,term:"method",children:(0,r.jsx)("i",{children:"method"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{styled:!0,term:"key",children:(0,r.jsx)("i",{children:"keys"})}),"\u2014a ",(0,r.jsx)(t,{styled:!0,term:"list",children:(0,r.jsx)("i",{children:"list"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"allow-other-keys-p"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns the keyword parameter specifiers for a ",(0,r.jsx)(t,{styled:!0,term:"method",children:(0,r.jsx)("i",{children:"method"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Two values are returned: a ",(0,r.jsx)(t,{styled:!0,term:"list",children:(0,r.jsx)("i",{children:"list"})})," of the explicitly named keywords and a ",(0,r.jsx)(n.em,{children:"generalized boolean"})," that states whether ",(0,r.jsx)(n.strong,{children:"&allow-other-keys"})," had been specified in the ",(0,r.jsx)(t,{styled:!0,term:"method",children:(0,r.jsx)("i",{children:"method"})})," definition."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"\n(defmethod gf1 ((a integer) &optional (b 2) \n\t\t&key (c 3) ((:dee d) 4) e ((eff f))) \n    (list a b c d e f)) \n\u2192 #<STANDARD-METHOD GF1 (INTEGER) 36324653> \n(find-method #\u2019gf1 \u2019() (list (find-class \u2019integer))) \n\u2192 #<STANDARD-METHOD GF1 (INTEGER) 36324653> \n(function-keywords \\*) \n\u2192 (:C :DEE :E EFF), *false* \n(defmethod gf2 ((a integer)) \n    (list a b c d e f)) \n\u2192 #<STANDARD-METHOD GF2 (INTEGER) 42701775> \n(function-keywords (find-method #\u2019gf1 \u2019() (list (find-class \u2019integer)))) \n\u2192 (), *false* \n(defmethod gf3 ((a integer) &key b c d &allow-other-keys) \n    (list a b c d e f)) \n(function-keywords \\*) \n\u2192 (:B :C :D), *true* \n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(t,{styled:!0,term:"defmethod",children:(0,r.jsx)("b",{children:"defmethod"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(t,{styled:!0,term:"defmethod",children:(0,r.jsx)("b",{children:"defmethod"})})]})}function s(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={title:"function-keywords"},o="function-keywords",l={id:"chap-7/h-h-dictionary/function-keywords_standard-generic-function",title:"function-keywords",description:"Expanded Reference: function-keywords",source:"@site/docs/chap-7/h-h-dictionary/function-keywords_standard-generic-function.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/function-keywords_standard-generic-function",permalink:"/cl-language-reference/chap-7/h-h-dictionary/function-keywords_standard-generic-function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/function-keywords_standard-generic-function.md",tags:[],version:"current",frontMatter:{title:"function-keywords"},sidebar:"tutorialSidebar",previous:{title:"find-method",permalink:"/cl-language-reference/chap-7/h-h-dictionary/find-method_standard-generic-function"},next:{title:"initialize-instance",permalink:"/cl-language-reference/chap-7/h-h-dictionary/initialize-instance_standard-generic-function"}},a={},h=[{value:"Expanded Reference: function-keywords",id:"expanded-reference-function-keywords",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"function-keywords",children:"function-keywords"}),"\n","\n","\n",(0,r.jsx)(s,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-function-keywords",children:"Expanded Reference: function-keywords"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(function-keywords )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var r=t(67294);const d={},i=r.createContext(d);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);