"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[51612],{38006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>p,metadata:()=>a,toc:()=>o});var r=t(85893),i=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["\u2217",(0,r.jsx)(t,{styled:!0,term:"print-pretty",children:(0,r.jsx)("b",{children:(0,r.jsx)(n.em,{children:"print-pretty"})})}),"\u2217 Variable"]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,r.jsxs)(n.p,{children:["a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{styled:!0,term:"implementation-dependent",children:(0,r.jsx)("i",{children:"implementation-dependent"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Controls whether the ",(0,r.jsx)(n.em,{children:"Lisp printer"})," calls the ",(0,r.jsx)(n.em,{children:"pretty printer"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:["If it is ",(0,r.jsx)(t,{styled:!0,term:"false",children:(0,r.jsx)("i",{children:"false"})}),", the ",(0,r.jsx)(n.em,{children:"pretty printer"})," is not used and a minimum of ",(0,r.jsx)(t,{styled:!0,term:"whitespace",children:(0,r.jsx)("i",{children:"whitespace"})}),(0,r.jsx)("sub",{children:"1"})," is output when printing an expression."]}),"\n",(0,r.jsxs)(n.p,{children:["If it is ",(0,r.jsx)(t,{styled:!0,term:"true",children:(0,r.jsx)("i",{children:"true"})}),", the ",(0,r.jsx)(n.em,{children:"pretty printer"})," is used, and the ",(0,r.jsx)(n.em,{children:"Lisp printer"})," will endeavor to insert extra ",(0,r.jsx)(t,{styled:!0,term:"whitespace",children:(0,r.jsx)("i",{children:"whitespace"})}),(0,r.jsx)("sub",{children:"1"})," where appropriate to make ",(0,r.jsx)(t,{styled:!0,term:"expression",children:(0,r.jsx)("i",{children:"expressions"})})," more readable."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{styled:!0,term:"print-pretty",children:(0,r.jsx)("b",{children:"*print-pretty*"})})," has an effect even when the ",(0,r.jsx)(t,{styled:!0,term:"value",children:(0,r.jsx)("i",{children:"value"})})," of ",(0,r.jsx)(t,{styled:!0,term:"print-escape",children:(0,r.jsx)("b",{children:"*print-escape*"})})," is ",(0,r.jsx)(t,{styled:!0,term:"false",children:(0,r.jsx)("i",{children:"false"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'(setq \\*print-pretty\\* \u2019nil) \u2192 NIL \n(progn (write \u2019(let ((a 1) (b 2) (c 3)) (+ a b c))) nil) \n\u25b7 (LET ((A 1) (B 2) (C 3)) (+ A B C)) \n\u2192 NIL \n(let ((\\*print-pretty\\* t)) \n  (progn (write \u2019(let ((a 1) (b 2) (c 3)) (+ a b c))) nil)) \n\u25b7 (LET ((A 1) \n\t\u25b7 (B 2) \n\t\u25b7 (C 3)) \n    \u25b7 (+ A B C)) \n\u2192 NIL \n;; Note that the first two expressions printed by this next form \n;; differ from the second two only in whether escape characters are printed. ;; In all four cases, extra whitespace is inserted by the pretty printer. \n(flet ((test (x) \n\t (let ((\\*print-pretty\\* t)) \n\t   (print x) \n\t   (format t "~%~S " x) \n\t   (terpri) (princ x) (princ " ") \n\t   (format t "~%~A " x)))) \n  (test \u2019#\u2019(lambda () (list "a" # \u2019c #\u2019d)))) \n\u25b7 #\u2019(LAMBDA () \n      \u25b7 (LIST "a" # \u2019C #\u2019D)) \n\u25b7 #\u2019(LAMBDA () \n      \u25b7 (LIST "a" # \u2019C #\u2019D)) \n\u25b7 #\u2019(LAMBDA () \n      \u25b7 (LIST a b \u2019C #\u2019D)) \n\u25b7 #\u2019(LAMBDA () \n      \u25b7 (LIST a b \u2019C #\u2019D)) \n\u2192 NIL \n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(t,{styled:!0,term:"write",children:(0,r.jsx)("b",{children:"write"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const p={title:"print-pretty"},l="*print-pretty*",a={id:"chap-22/cc-e-dictionary/print-pretty_variable",title:"print-pretty",description:"Expanded Reference: \\print-pretty\\",source:"@site/docs/chap-22/cc-e-dictionary/print-pretty_variable.md",sourceDirName:"chap-22/cc-e-dictionary",slug:"/chap-22/cc-e-dictionary/print-pretty_variable",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/print-pretty_variable",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-e-dictionary/print-pretty_variable.md",tags:[],version:"current",frontMatter:{title:"print-pretty"},sidebar:"tutorialSidebar",previous:{title:"print-pprint-dispatch",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/print-pprint-dispatch_variable"},next:{title:"print-radix",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/print-radix_variable"}},d={},o=[{value:"Expanded Reference: *print-pretty*",id:"expanded-reference-print-pretty",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"print-pretty",children:"*print-pretty*"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-print-pretty",children:"Expanded Reference: *print-pretty*"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"*print-pretty*\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>p,a:()=>c});var r=t(67294);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);