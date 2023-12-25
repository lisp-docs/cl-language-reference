"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[12703],{30355:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var t=r(85893),l=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"return-from"})," ",(0,t.jsx)(n.em,{children:"Special Operator"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"return-from",children:(0,t.jsx)("b",{children:"return-from"})})," ",(0,t.jsx)(r,{styled:!0,term:"name",children:(0,t.jsx)("i",{children:"name"})})," [",(0,t.jsx)(n.em,{children:"result"}),"] \u2192"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"name",children:(0,t.jsx)("i",{children:"name"})}),"\u2014a ",(0,t.jsx)(n.em,{children:"block tag"}),"; not evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"result"}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),"; evaluated. The default is ",(0,t.jsx)(r,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns control and ",(0,t.jsx)(n.em,{children:"multiple values"}),(0,t.jsx)("sub",{children:"2"})," from a lexically enclosing ",(0,t.jsx)(r,{styled:!0,term:"block",children:(0,t.jsx)("i",{children:"block"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(r,{styled:!0,term:"block",children:(0,t.jsx)("b",{children:"block"})})," ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," named ",(0,t.jsx)(r,{styled:!0,term:"name",children:(0,t.jsx)("i",{children:"name"})})," must lexically enclose the occurrence of ",(0,t.jsx)(r,{styled:!0,term:"return-from",children:(0,t.jsx)("b",{children:"return-from"})}),"; any ",(0,t.jsx)(n.em,{children:"values yielded"})," by the ",(0,t.jsx)(r,{styled:!0,term:"evaluation",children:(0,t.jsx)("i",{children:"evaluation"})})," of ",(0,t.jsx)(n.em,{children:"result"})," are immediately returned from the innermost such lexically enclosing ",(0,t.jsx)(r,{styled:!0,term:"block",children:(0,t.jsx)("i",{children:"block"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The transfer of control initiated by ",(0,t.jsx)(r,{styled:!0,term:"return-from",children:(0,t.jsx)("b",{children:"return-from"})})," is performed as described in Section 5.2 (Transfer of Control to an Exit Point)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(block alpha (return-from alpha) 1) \u2192 NIL \n(block alpha (return-from alpha 1) 2) \u2192 1 \n(block alpha (return-from alpha (values 1 2)) 3) \u2192 1, 2 \n(let ((a 0)) \n  (dotimes (i 10) (incf a) (when (oddp i) (return))) \n  a) \u2192 2 \nData and Control \n\n\n**return-from** \n(defun temp (x) \n  (if x (return-from temp \u2019dummy)) \n  \\44) \u2192 TEMP \n(temp nil) \u2192 44 \n(temp t) \u2192 DUMMY \n(block out \n  (flet ((exit (n) (return-from out n))) \n    (block out (exit 1))) \n  \\2) \u2192 1 \n(block nil \n  (unwind-protect (return-from nil 1) \n    (return-from nil 2))) \n\u2192 2 \n(dolist (flag \u2019(nil t)) \n  (block nil \n    (let ((x 5)) \n      (declare (special x)) \n      (unwind-protect (return-from nil) \n\t(print x)))) \n  (print \u2019here)) \n\u25b7 5 \n\u25b7 HERE \n\u25b7 5 \n\u25b7 HERE \n\u2192 NIL \n(dolist (flag \u2019(nil t)) \n  (block nil \n    (let ((x 5)) \n      (declare (special x)) \n      (unwind-protect \n\t   (if flag (return-from nil)) \n\t(print x)))) \n  (print \u2019here)) \n\u25b7 5 \n\u25b7 HERE \n\u25b7 5 \n\u25b7 HERE \n\u2192 NIL \nThe following has undefined consequences because the **block** *form* exits normally before the **return-from** *form* is attempted. \n(funcall (block nil #\u2019(lambda () (return-from nil)))) is an error. \n\n\n\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"block",children:(0,t.jsx)("b",{children:"block"})}),", ",(0,t.jsx)(r,{styled:!0,term:"return",children:(0,t.jsx)("b",{children:"return"})}),", Section 3.1 (Evaluation)"]})]})}function o(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const c={title:"return-from"},s="return-from",d={id:"chap-5/f-d-dictionary/return-from_special-operator",title:"return-from",description:"Expanded Reference: return-from",source:"@site/docs/chap-5/f-d-dictionary/return-from_special-operator.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/return-from_special-operator",permalink:"/cl-language-reference/chap-5/f-d-dictionary/return-from_special-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/return-from_special-operator.md",tags:[],version:"current",frontMatter:{title:"return-from"},sidebar:"tutorialSidebar",previous:{title:"psetq",permalink:"/cl-language-reference/chap-5/f-d-dictionary/psetq_macro"},next:{title:"return",permalink:"/cl-language-reference/chap-5/f-d-dictionary/return_macro"}},a={},m=[{value:"Expanded Reference: return-from",id:"expanded-reference-return-from",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"return-from",children:"return-from"}),"\n","\n","\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-return-from",children:"Expanded Reference: return-from"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(return-from )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var t=r(67294);const l={},i=t.createContext(l);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);