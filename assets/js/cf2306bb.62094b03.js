"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[79555],{9885:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=i(85893),a=i(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"special"})," ",(0,r.jsx)(i,{styled:!0,term:"declaration",children:(0,r.jsx)("i",{children:"Declaration"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:["(special ",(0,r.jsx)(n.em,{children:"{var}"}),"*)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"var"}),"\u2014a ",(0,r.jsx)(i,{styled:!0,term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valid Context:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"declaration",children:(0,r.jsx)("i",{children:"declaration"})})," or ",(0,r.jsx)(i,{styled:!0,term:"proclamation",children:(0,r.jsx)("i",{children:"proclamation"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Binding Types Aected:"})}),"\n",(0,r.jsx)(i,{styled:!0,term:"variable",children:(0,r.jsx)("i",{children:"variable"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifies that all of the ",(0,r.jsx)(n.em,{children:"vars"})," named are dynamic. This specifier a\u21b5ects variable ",(0,r.jsx)(i,{styled:!0,term:"binding",children:(0,r.jsx)("i",{children:"bindings"})})," and a\u21b5ects references. All variable ",(0,r.jsx)(i,{styled:!0,term:"binding",children:(0,r.jsx)("i",{children:"bindings"})})," a\u21b5ected are made to be dynamic ",(0,r.jsx)(i,{styled:!0,term:"binding",children:(0,r.jsx)("i",{children:"bindings"})}),", and a\u21b5ected variable references refer to the current dynamic ",(0,r.jsx)(i,{styled:!0,term:"binding",children:(0,r.jsx)("i",{children:"binding"})}),". For example:"]}),"\n",(0,r.jsx)(n.p,{children:"(defun hack (thing *mod*) ;The binding of the parameter"}),"\n",(0,r.jsx)(n.p,{children:"(declare (special *mod*)) ; *mod* is visible to hack1,"}),"\n",(0,r.jsx)(n.p,{children:"(hack1 (car thing))) ; but not that of thing."}),"\n",(0,r.jsx)(n.p,{children:"(defun hack1 (arg)"}),"\n",(0,r.jsx)(n.p,{children:"(declare (special *mod*)) ;Declare references to *mod*"}),"\n",(0,r.jsx)(n.p,{children:";within hack1 to be special."}),"\n",(0,r.jsx)(n.p,{children:"(if (atom arg) *mod*"}),"\n",(0,r.jsx)(n.p,{children:"(cons (hack1 (car arg)) (hack1 (cdr arg)))))"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(i,{styled:!0,term:"special",children:(0,r.jsx)("b",{children:"special"})})," declaration does not a\u21b5ect inner ",(0,r.jsx)(i,{styled:!0,term:"binding",children:(0,r.jsx)("i",{children:"bindings"})})," of a ",(0,r.jsx)(n.em,{children:"var"}),"; the inner ",(0,r.jsx)(i,{styled:!0,term:"binding",children:(0,r.jsx)("i",{children:"bindings"})})," implicitly shadow a ",(0,r.jsx)(i,{styled:!0,term:"special",children:(0,r.jsx)("b",{children:"special"})})," declaration and must be explicitly re-declared to be ",(0,r.jsx)(i,{styled:!0,term:"special",children:(0,r.jsx)("b",{children:"special"})}),". ",(0,r.jsx)(i,{styled:!0,term:"special",children:(0,r.jsx)("b",{children:"special"})})," declarations never apply to function ",(0,r.jsx)(i,{styled:!0,term:"binding",children:(0,r.jsx)("i",{children:"bindings"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"special",children:(0,r.jsx)("b",{children:"special"})})," declarations can be either ",(0,r.jsx)(n.em,{children:"bound declarations"}),", a\u21b5ecting both a binding and references, or ",(0,r.jsx)(n.em,{children:"free declarations"}),", a\u21b5ecting only references, depending on whether the declaration is attached to a variable binding."]}),"\n",(0,r.jsxs)(n.p,{children:["When used in a ",(0,r.jsx)(i,{styled:!0,term:"proclamation",children:(0,r.jsx)("i",{children:"proclamation"})}),", a ",(0,r.jsx)(i,{styled:!0,term:"special",children:(0,r.jsx)("b",{children:"special"})})," ",(0,r.jsx)(n.em,{children:"declaration specifier"})," applies to all ",(0,r.jsx)(i,{styled:!0,term:"binding",children:(0,r.jsx)("i",{children:"bindings"})})," as well as to all references of the mentioned variables. For example, after"]}),"\n",(0,r.jsx)(n.p,{children:"(declaim (special x))"}),"\n",(0,r.jsx)(n.p,{children:"Evaluation and"}),"\n",(0,r.jsx)(i,{styled:!0,term:"special",children:(0,r.jsx)("b",{children:"special"})}),"\n",(0,r.jsx)(n.p,{children:"then in a function definition such as"}),"\n",(0,r.jsx)(n.p,{children:"(defun example (x) ...)"}),"\n",(0,r.jsx)(n.p,{children:"the parameter x is bound as a dynamic variable rather than as a lexical variable."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"\n(defun declare-eg (y) ;this y is special \n  (declare (special y)) \n  (let ((y t)) ;this y is lexical \n    (list y \n\t  (locally (declare (special y)) y)))) ;this y refers to the \n\t\t\t\t\t;special binding of y \n*!* DECLARE-EG \n(declare-eg nil) *!* (T NIL) \n(setf (symbol-value \u2019x) 6) \n(defun foo (x) ;a lexical binding of x \n  (print x) \n  (let ((x (1+ x))) ;a special binding of x \n    (declare (special x)) ;and a lexical reference \n    (bar)) \n  (1+ x)) \n(defun bar () \n  (print (locally (declare (special x)) \n\t   x))) \n(foo 10) \n\u25b7 10 \n\u25b7 11 \n*!* 11 \n(setf (symbol-value \u2019x) 6) \n(defun bar (x y) ;[1] 1st occurrence of x \n  (let ((old-x x) ;[2] 2nd occurrence of x \u2013 same as 1st occurrence \n\t(x y)) ;[3] 3rd occurrence of x \n    (declare (special x)) \n    (list old-x x))) \n(bar \u2019first \u2019second) *!* (FIRST SECOND) \n(defun few (x &optional (y \\*foo\\*)) \n  (declare (special \\*foo\\*)) \n  ...) \nThe reference to \\*foo\\* in the first line of this example is not **special** even though there is a **special** declaration in the second line. \n(declaim (special prosp)) *! implementation-dependent* \n\n\n\n(setq prosp 1 reg 1) *!* 1 \n(let ((prosp 2) (reg 2)) ;the binding of prosp is special \n  (set \u2019prosp 3) (set \u2019reg 3) ;due to the preceding proclamation, \n  (list prosp reg)) ;whereas the variable reg is lexical \n*!* (3 2) \n(list prosp reg) *!* (1 3) \n(declaim (special x)) ;x is always special. \n(defun example (x y) \n  (declare (special y)) \n  (let ((y 3) (x (\\* x 2))) \n    (print (+ y (locally (declare (special y)) y))) \n    (let ((y 4)) (declare (special y)) (foo x)))) *!* EXAMPLE \nIn the contorted code above, the outermost and innermost *bindings* of y are dynamic, but the middle binding is lexical. The two arguments to + are di\u21b5erent, one being the value, which is 3, of the lexical variable y, and the other being the value of the dynamic variable named y (a *binding* of which happens, coincidentally, to lexically surround it at an outer level). All the *bindings* of x and references to x are dynamic, however, because of the proclamation that x is always **special**. \n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"defparameter",children:(0,r.jsx)("b",{children:"defparameter"})}),", ",(0,r.jsx)(i,{styled:!0,term:"defvar",children:(0,r.jsx)("b",{children:"defvar"})})]})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}const s={title:"special"},t="special",d={id:"chap-3/d-i-dictionary/special_declaration",title:"special",description:"Expanded Reference: special",source:"@site/docs/chap-3/d-i-dictionary/special_declaration.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/special_declaration",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/special_declaration",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/special_declaration.md",tags:[],version:"current",frontMatter:{title:"special"},sidebar:"tutorialSidebar",previous:{title:"special-operator-p",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/special-operator-p_function"},next:{title:"symbol-macrolet",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/symbol-macrolet_special-operator"}},o={},p=[{value:"Expanded Reference: special",id:"expanded-reference-special",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"special",children:"special"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-special",children:"Expanded Reference: special"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(special )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>c});var r=i(67294);const a={},l=r.createContext(a);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);