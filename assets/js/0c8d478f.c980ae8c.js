"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[64376],{31297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var s=t(85893),r=t(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"apply"})," ",(0,s.jsx)(t,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"Function"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"apply",children:(0,s.jsx)("b",{children:"apply"})})," ",(0,s.jsx)(t,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"function"})})," &rest ",(0,s.jsx)(n.em,{children:"args"}),(0,s.jsx)("sup",{children:"+"})," \u2192 {result}*"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"function"})}),"\u2014a ",(0,s.jsx)(n.em,{children:"function designator"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"args"}),"\u2014a ",(0,s.jsx)(n.em,{children:"spreadable argument list designator"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"results"}),"\u2014the ",(0,s.jsx)(t,{styled:!0,term:"value",children:(0,s.jsx)("i",{children:"values"})})," returned by ",(0,s.jsx)(t,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"function"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Applies"})," the ",(0,s.jsx)(t,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"function"})})," to the ",(0,s.jsx)(n.em,{children:"args"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(t,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"function"})})," receives its arguments via ",(0,s.jsx)(n.strong,{children:"&rest"}),", it is permissible (but not required) for the ",(0,s.jsx)(t,{styled:!0,term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})})," to ",(0,s.jsx)(t,{styled:!0,term:"bind",children:(0,s.jsx)("i",{children:"bind"})})," the ",(0,s.jsx)(n.em,{children:"rest parameter"})," to an ",(0,s.jsx)(t,{styled:!0,term:"object",children:(0,s.jsx)("i",{children:"object"})})," that shares structure with the last argument to ",(0,s.jsx)(t,{styled:!0,term:"apply",children:(0,s.jsx)("b",{children:"apply"})}),". Because a ",(0,s.jsx)(t,{styled:!0,term:"function",children:(0,s.jsx)("i",{children:"function"})})," can neither detect whether it was called via ",(0,s.jsx)(t,{styled:!0,term:"apply",children:(0,s.jsx)("b",{children:"apply"})})," nor whether (if so) the last argument to ",(0,s.jsx)(t,{styled:!0,term:"apply",children:(0,s.jsx)("b",{children:"apply"})})," was a ",(0,s.jsx)(t,{styled:!0,term:"constant",children:(0,s.jsx)("i",{children:"constant"})}),", ",(0,s.jsx)(n.em,{children:"conforming programs"})," must neither rely on the ",(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})})," structure of a ",(0,s.jsx)(n.em,{children:"rest list"})," to be freshly consed, nor modify that ",(0,s.jsx)(t,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})})," structure."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"setf",children:(0,s.jsx)("b",{children:"setf"})})," can be used with ",(0,s.jsx)(t,{styled:!0,term:"apply",children:(0,s.jsx)("b",{children:"apply"})})," in certain circumstances; see Section 5.1.2.5 (APPLY Forms as Places)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"\n(setq f \u2019+) \u2192 + \n(apply f \u2019(1 2)) \u2192 3 \n(setq f #\u2019-) \u2192 #<FUNCTION -> \n(apply f \u2019(1 2)) \u2192 -1 \n(apply #\u2019max 3 5 \u2019(2 7 3)) \u2192 7 \n(apply \u2019cons \u2019((+ 2 3) 4)) \u2192 ((+ 2 3) . 4) \n(apply #\u2019+ \u2019()) \u2192 0 \n(defparameter \\*some-list\\* \u2019(a b c)) \n(defun strange-test (&rest x) (eq x \\*some-list\\*)) \n(apply #\u2019strange-test \\*some-list\\*) \u2192 implementation-dependent \n(defun bad-boy (&rest x) (rplacd x \u2019y)) \n(bad-boy \u2019a \u2019b \u2019c) has undefined consequences. \n(apply #\u2019bad-boy \\*some-list\\*) has undefined consequences. \n(defun foo (size &rest keys &key double &allow-other-keys) \n  (let ((v (apply #\u2019make-array size :allow-other-keys t keys))) \n    (if double (concatenate (type-of v) v v) v))) \n(foo 4 :initial-contents \u2019(a b c d) :double t) \n\n\n\n\u2192 #(A B C D A B C D) \n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{styled:!0,term:"funcall",children:(0,s.jsx)("b",{children:"funcall"})}),", ",(0,s.jsx)(t,{styled:!0,term:"fdefinition",children:(0,s.jsx)("b",{children:"fdefinition"})}),", ",(0,s.jsx)(t,{styled:!0,term:"function",children:(0,s.jsx)("b",{children:"function"})}),", Section 3.1 (Evaluation), Section 5.1.2.5 (APPLY Forms as Places)"]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const c={title:"apply"},d="apply",a={id:"chap-5/f-d-dictionary/apply_function",title:"apply",description:"Expanded Reference: apply",source:"@site/docs/chap-5/f-d-dictionary/apply_function.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/apply_function",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/apply_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/apply_function.md",tags:[],version:"current",frontMatter:{title:"apply"},sidebar:"tutorialSidebar",previous:{title:"and",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/and_macro"},next:{title:"block",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/block_special-operator"}},o={},p=[{value:"Expanded Reference: apply",id:"expanded-reference-apply",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"apply",children:"apply"}),"\n","\n","\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-apply",children:"Expanded Reference: apply"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(apply )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var s=t(67294);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);