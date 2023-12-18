"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[79187],{36129:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=r(85893),o=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"cerror"})," ",(0,t.jsx)(n.em,{children:"Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"cerror"})," ",(0,t.jsx)(n.em,{children:"continue-format-control datum"})," &rest ",(0,t.jsx)(n.em,{children:"arguments \u2192"})," ",(0,t.jsx)(n.strong,{children:"nil"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Continue-format-control"}),"\u2014a ",(0,t.jsx)(n.em,{children:"format control"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"datum"}),", ",(0,t.jsx)(n.em,{children:"arguments"}),"\u2014",(0,t.jsx)(n.em,{children:"designators"})," for a ",(0,t.jsx)(n.em,{children:"condition"})," of default type ",(0,t.jsx)(n.strong,{children:"simple-error"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"cerror"})," effectively invokes ",(0,t.jsx)(n.strong,{children:"error"})," on the ",(0,t.jsx)(n.em,{children:"condition"})," named by ",(0,t.jsx)(n.em,{children:"datum"}),". As with any function that implicitly calls ",(0,t.jsx)(n.strong,{children:"error"}),", if the ",(0,t.jsx)(n.em,{children:"condition"})," is not handled, (invoke-debugger ",(0,t.jsx)(n.em,{children:"condition"}),") is executed. While signaling is going on, and while in the debugger if it is reached, it is possible to continue code execution (",(0,t.jsx)(n.em,{children:"i.e."}),", to return from ",(0,t.jsx)(n.strong,{children:"cerror"}),") using the ",(0,t.jsx)(n.strong,{children:"continue"})," ",(0,t.jsx)(n.em,{children:"restart"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"datum"})," is a ",(0,t.jsx)(n.em,{children:"condition"}),", ",(0,t.jsx)(n.em,{children:"arguments"})," can be supplied, but are used only in conjunction with the ",(0,t.jsx)(n.em,{children:"continue-format-control"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'(defun real-sqrt (n) \n  (when (minusp n) \n    (setq n (- n)) \n    \n    \n    **cerror** \n    (cerror "Return sqrt(~D) instead." "Tried to take sqrt(-~D)." n)) (sqrt n)) \n(real-sqrt 4) \n\u2192 2.0 \n(real-sqrt -9) \n\u25b7 Correctable error in REAL-SQRT: Tried to take sqrt(-9). \n\u25b7 Restart options: \n\u25b7 1: Return sqrt(9) instead. \n\u25b7 2: Top level. \n\u25b7 Debug> :continue 1 \n\u2192 3.0 \n(define-condition not-a-number (error) \n  ((argument :reader not-a-number-argument :initarg :argument)) (:report (lambda (condition stream) \n\t\t\t\t\t\t\t\t\t   (format stream "~S is not a number." \n\t\t\t\t\t\t\t\t\t\t   (not-a-number-argument condition))))) \n(defun assure-number (n) \n  (loop (when (numberp n) (return n)) \n   (cerror "Enter a number." \n\t   \u2019not-a-number :argument n) \n   (format t "~&Type a number: ") \n   (setq n (read)) \n   (fresh-line))) \n(assure-number \u2019a) \n\u25b7 Correctable error in ASSURE-NUMBER: A is not a number. \n\u25b7 Restart options: \n\u25b7 1: Enter a number. \n\u25b7 2: Top level. \n\u25b7 Debug> :continue 1 \n\u25b7 Type a number: 1/2 \n\u2192 1/2 \n(defun assure-large-number (n) \n  (loop (when (and (numberp n) (> n 73)) (return n)) \n   (cerror "Enter a number~:[~; a bit larger than ~D~]." \n\t   "~\\*~A is not a large number." \n\t   (numberp n) n) \n   (format t "~&Type a large number: ") \n   (setq n (read)) \n   (fresh-line))) \n\n**cerror** \n(assure-large-number 10000) \n\u2192 10000 \n(assure-large-number \u2019a) \n\u25b7 Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. \n\u25b7 Restart options: \n\u25b7 1: Enter a number. \n\u25b7 2: Top level. \n\u25b7 Debug> :continue 1 \n\u25b7 Type a large number: 88 \n\u2192 88 \n(assure-large-number 37) \n\u25b7 Correctable error in ASSURE-LARGE-NUMBER: 37 is not a large number. \n\u25b7 Restart options: \n\u25b7 1: Enter a number a bit larger than 37. \n\u25b7 2: Top level. \n\u25b7 Debug> :continue 1 \n\u25b7 Type a large number: 259 \n\u2192 259 \n(define-condition not-a-large-number (error) \n  ((argument :reader not-a-large-number-argument :initarg :argument)) \n  (:report (lambda (condition stream) \n\t     (format stream "~S is not a large number." \n\t\t     (not-a-large-number-argument condition))))) \n(defun assure-large-number (n) \n  (loop (when (and (numberp n) (> n 73)) (return n)) \n   (cerror "Enter a number~3\\*~:[~; a bit larger than ~\\*~D~]." \n\t   \u2019not-a-large-number \n\t   :argument n \n\t   :ignore (numberp n) \n\t   :ignore n \n\t   :allow-other-keys t) \n   (format t "~&Type a large number: ") \n   (setq n (read)) \n   (fresh-line))) \n(assure-large-number \u2019a) \n\u25b7 Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. \n\u25b7 Restart options: \n\u25b7 1: Enter a number. \n\n\u25b7 2: Top level. \n\u25b7 Debug> :continue 1 \n\u25b7 Type a large number: 88 \n\u2192 88 \n(assure-large-number 37) \n\u25b7 Correctable error in ASSURE-LARGE-NUMBER: A is not a large number. \n\u25b7 Restart options: \n\u25b7 1: Enter a number a bit larger than 37. \n\u25b7 2: Top level. \n\u25b7 Debug> :continue 1 \n\u25b7 Type a large number: 259 \n\u2192 259 \n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"*break-on-signals*"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Existing handler bindings."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"error"}),", ",(0,t.jsx)(n.strong,{children:"format"}),", ",(0,t.jsx)(n.strong,{children:"handler-bind"}),", ",(0,t.jsx)(n.strong,{children:"*break-on-signals*"}),", ",(0,t.jsx)(n.strong,{children:"simple-type-error"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"datum"})," is a ",(0,t.jsx)(n.em,{children:"condition type"})," rather than a ",(0,t.jsx)(n.em,{children:"string"}),", the ",(0,t.jsx)(n.strong,{children:"format"})," directive ~* may be especially useful in the ",(0,t.jsx)(n.em,{children:"continue-format-control"})," in order to ignore the ",(0,t.jsx)(n.em,{children:"keywords"})," in the ",(0,t.jsx)(n.em,{children:"initialization argument list"}),". For example:"]}),"\n",(0,t.jsx)(n.p,{children:'(cerror "enter a new value to replace ~*~s"'}),"\n",(0,t.jsx)(n.p,{children:"\u2019not-a-number"}),"\n",(0,t.jsxs)(n.p,{children:[":argument"," a)"]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const a={},c="cerror",l={id:"chap-9/j-c-dictionary/cerror",title:"cerror",description:"Expanded Reference: cerror",source:"@site/docs/chap-9/j-c-dictionary/cerror.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/cerror",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/cerror",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/cerror.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cell-error-name",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/cellerrorname"},next:{title:"check-type",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/checktype"}},d={},u=[{value:"Expanded Reference: cerror",id:"expanded-reference-cerror",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cerror",children:"cerror"}),"\n","\n","\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-cerror",children:"Expanded Reference: cerror"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(cerror )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(67294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);