"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[77217],{83587:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var i=n(85893),s=n(11151);function t(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"ignore-errors"})," ",(0,i.jsx)(n,{styled:!0,term:"macro",children:(0,i.jsx)("i",{children:"Macro"})})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{styled:!0,term:"ignore-errors",children:(0,i.jsx)("b",{children:"ignore-errors"})})," ",(0,i.jsx)(n,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"{form}"})}),"* \u2192 {result}*"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"forms"})}),"\u2014an ",(0,i.jsx)(r.em,{children:"implicit progn"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"results"}),"\u2014In the normal situation, the ",(0,i.jsx)(n,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"values"})})," of the ",(0,i.jsx)(n,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"forms"})})," are returned; in the exceptional situation, two values are returned: ",(0,i.jsx)(n,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," and the ",(0,i.jsx)(n,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"condition"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{styled:!0,term:"ignore-errors",children:(0,i.jsx)("b",{children:"ignore-errors"})})," is used to prevent ",(0,i.jsx)(n,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"conditions"})})," of ",(0,i.jsx)(n,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{styled:!0,term:"error",children:(0,i.jsx)("b",{children:"error"})})," from causing entry into the debugger."]}),"\n",(0,i.jsxs)(r.p,{children:["Specifically, ",(0,i.jsx)(n,{styled:!0,term:"ignore-errors",children:(0,i.jsx)("b",{children:"ignore-errors"})})," ",(0,i.jsx)(r.em,{children:"executes forms"})," in a ",(0,i.jsx)(r.em,{children:"dynamic environment"})," where a ",(0,i.jsx)(n,{styled:!0,term:"handler",children:(0,i.jsx)("i",{children:"handler"})})," for ",(0,i.jsx)(n,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"conditions"})})," of ",(0,i.jsx)(n,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{styled:!0,term:"error",children:(0,i.jsx)("b",{children:"error"})})," has been established; if invoked, it ",(0,i.jsx)(n,{styled:!0,term:"handle",children:(0,i.jsx)("i",{children:"handles"})})," such ",(0,i.jsx)(n,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"conditions"})})," by returning two ",(0,i.jsx)(n,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"values"})}),", ",(0,i.jsx)(n,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," and the ",(0,i.jsx)(n,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"condition"})})," that was ",(0,i.jsx)(r.em,{children:"signaled"}),", from the ",(0,i.jsx)(n,{styled:!0,term:"ignore-errors",children:(0,i.jsx)("b",{children:"ignore-errors"})})," ",(0,i.jsx)(n,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"form"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["If a ",(0,i.jsx)(r.em,{children:"normal return"})," from the ",(0,i.jsx)(n,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"forms"})})," occurs, any ",(0,i.jsx)(n,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"values"})})," returned are returned by ",(0,i.jsx)(n,{styled:!0,term:"ignore-errors",children:(0,i.jsx)("b",{children:"ignore-errors"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:'\n(defun load-init-file (program) \n  (let ((win nil)) \n    (ignore-errors ;if this fails, don\u2019t enter debugger \n      (load (merge-pathnames (make-pathname :name program :type :lisp) \n\t\t\t     (user-homedir-pathname))) \n      (setq win t)) \n    (unless win (format t "~&Init file failed to load.~%")) \n    win)) \n\n\n\n(load-init-file "no-such-program") \n\u25b7 Init file failed to load. \nNIL \n\n'})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{styled:!0,term:"handler-case",children:(0,i.jsx)("b",{children:"handler-case"})}),", Section 9.1 (Condition System Concepts)"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(r.p,{children:["(ignore-errors . ",(0,i.jsx)(n,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"forms"})}),")"]}),"\n",(0,i.jsx)(r.p,{children:"is equivalent to:"}),"\n",(0,i.jsxs)(r.p,{children:["(handler-case (progn . ",(0,i.jsx)(n,{styled:!0,term:"form",children:(0,i.jsx)("i",{children:"forms"})}),")"]}),"\n",(0,i.jsx)(r.p,{children:"(error (condition) (values nil condition)))"}),"\n",(0,i.jsxs)(r.p,{children:["Because the second return value is a ",(0,i.jsx)(n,{styled:!0,term:"condition",children:(0,i.jsx)("i",{children:"condition"})})," in the exceptional case, it is common (but not required) to arrange for the second return value in the normal case to be missing or ",(0,i.jsx)(n,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," so that the two situations can be distinguished."]})]})}function o(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const d={title:"ignore-errors"},c="ignore-errors",l={id:"chap-9/j-c-dictionary/ignore-errors_macro",title:"ignore-errors",description:"Expanded Reference: ignore-errors",source:"@site/docs/chap-9/j-c-dictionary/ignore-errors_macro.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/ignore-errors_macro",permalink:"/cl-language-reference/chap-9/j-c-dictionary/ignore-errors_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/ignore-errors_macro.md",tags:[],version:"current",frontMatter:{title:"ignore-errors"},sidebar:"tutorialSidebar",previous:{title:"handler-case",permalink:"/cl-language-reference/chap-9/j-c-dictionary/handler-case_macro"},next:{title:"invalid-method-error",permalink:"/cl-language-reference/chap-9/j-c-dictionary/invalid-method-error_function"}},a={},h=[{value:"Expanded Reference: ignore-errors",id:"expanded-reference-ignore-errors",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"ignore-errors",children:"ignore-errors"}),"\n","\n","\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(r.h2,{id:"expanded-reference-ignore-errors",children:"Expanded Reference: ignore-errors"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:"(ignore-errors )\n"})})]})}function j(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>o});var i=n(67294);const s={},t=i.createContext(s);function o(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);