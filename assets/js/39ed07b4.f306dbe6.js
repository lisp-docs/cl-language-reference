"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[53832],{26173:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=i(85893),o=i(11151);function r(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...n.components},{ClLinks:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"make-condition"})," ",(0,t.jsx)(i,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(i,{styled:!0,term:"make-condition",children:(0,t.jsx)("b",{children:"make-condition"})})," ",(0,t.jsx)(i,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," &rest ",(0,t.jsx)(e.em,{children:"slot-initializations \u2192 condition"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(i,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})}),"\u2014a ",(0,t.jsx)(e.em,{children:"type specifier"})," (for a ",(0,t.jsx)(i,{styled:!0,term:"subtype",children:(0,t.jsx)("i",{children:"subtype"})})," of ",(0,t.jsx)(i,{styled:!0,term:"condition",children:(0,t.jsx)("b",{children:"condition"})}),")."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"slot-initializations"}),"\u2014an ",(0,t.jsx)(e.em,{children:"initialization argument list"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(i,{styled:!0,term:"condition",children:(0,t.jsx)("i",{children:"condition"})}),"\u2014a ",(0,t.jsx)(i,{styled:!0,term:"condition",children:(0,t.jsx)("i",{children:"condition"})}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(e.p,{children:["Constructs and returns a ",(0,t.jsx)(i,{styled:!0,term:"condition",children:(0,t.jsx)("i",{children:"condition"})})," of type ",(0,t.jsx)(i,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," using ",(0,t.jsx)(e.em,{children:"slot-initializations"})," for the initial values of the slots. The newly created ",(0,t.jsx)(i,{styled:!0,term:"condition",children:(0,t.jsx)("i",{children:"condition"})})," is returned."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lisp",children:'\n(defvar \\*oops-count\\* 0) \n(setq a (make-condition \u2019simple-error \n\t\t\t :format-control "This is your ~:R error." \n\t\t\t :format-arguments (list (incf \\*oops-count\\*)))) \n\u2192 #<SIMPLE-ERROR 32245104> \n(format t "~&~A~%" a) \n\u25b7 This is your first error. \n\u2192 NIL \n(error a) \n\u25b7 Error: This is your first error. \n\u25b7 To continue, type :CONTINUE followed by an option number: \n\u25b7 1: Return to Lisp Toplevel. \n\u25b7 Debug> \n\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(e.p,{children:["The set of defined ",(0,t.jsx)(e.em,{children:"condition types"}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(i,{styled:!0,term:"define-condition",children:(0,t.jsx)("b",{children:"define-condition"})}),", Section 9.1 (Condition System Concepts)"]})]})}function c(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(r,{...n})}):r(n)}const s={title:"make-condition"},d="make-condition",l={id:"chap-9/j-c-dictionary/make-condition_function",title:"make-condition",description:"Expanded Reference: make-condition",source:"@site/docs/chap-9/j-c-dictionary/make-condition_function.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/make-condition_function",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/make-condition_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/make-condition_function.md",tags:[],version:"current",frontMatter:{title:"make-condition"},sidebar:"tutorialSidebar",previous:{title:"invoke-restart",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/invoke-restart_function"},next:{title:"method-combination-error",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/method-combination-error_function"}},a={},p=[{value:"Expanded Reference: make-condition",id:"expanded-reference-make-condition",level:2}];function h(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"make-condition",children:"make-condition"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(e.h2,{id:"expanded-reference-make-condition",children:"Expanded Reference: make-condition"}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lisp",children:"(make-condition )\n"})})]})}function m(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>c});var t=i(67294);const o={},r=t.createContext(o);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);