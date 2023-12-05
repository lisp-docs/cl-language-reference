"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[2591],{58292:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=i(85893),c=i(11151);function a(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"define-compiler-macro"})," ",(0,r.jsx)(e.em,{children:"Macro"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"define-compiler-macro"})," ",(0,r.jsx)(e.em,{children:"name lambda-list"})," [[ ",(0,r.jsx)(e.em,{children:"&#123;declaration&#125;"}),"* ",(0,r.jsx)(e.em,{children:"| documentation"})," ]] ",(0,r.jsx)(e.em,{children:"&#123;form&#125;"}),"* ",(0,r.jsx)(e.em,{children:"\u2192 name"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"name"}),"\u2014a ",(0,r.jsx)(e.em,{children:"function name"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"lambda-list"}),"\u2014a ",(0,r.jsx)(e.em,{children:"macro lambda list"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"declaration"}),"\u2014a ",(0,r.jsx)(e.strong,{children:"declare"})," ",(0,r.jsx)(e.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"documentation"}),"\u2014a ",(0,r.jsx)(e.em,{children:"string"}),"; not evaluated."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"form"}),"\u2014a ",(0,r.jsx)(e.em,{children:"form"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(e.p,{children:["This is the normal mechanism for defining a ",(0,r.jsx)(e.em,{children:"compiler macro function"}),". Its manner of definition is the same as for ",(0,r.jsx)(e.strong,{children:"defmacro"}),"; the only differences are:"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u2022"})," The ",(0,r.jsx)(e.em,{children:"name"})," can be a ",(0,r.jsx)(e.em,{children:"function name"})," naming any ",(0,r.jsx)(e.em,{children:"function"})," or ",(0,r.jsx)(e.em,{children:"macro"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u2022"})," The expander function is installed as a ",(0,r.jsx)(e.em,{children:"compiler macro function"})," for the ",(0,r.jsx)(e.em,{children:"name"}),", rather than as a ",(0,r.jsx)(e.em,{children:"macro function"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u2022"})," The ",(0,r.jsx)(e.strong,{children:"&whole"})," argument is bound to the form argument that is passed to the ",(0,r.jsx)(e.em,{children:"compiler macro function"}),". The remaining lambda-list parameters are specified as if this form contained the function name in the ",(0,r.jsx)(e.em,{children:"car"})," and the actual arguments in the ",(0,r.jsx)(e.em,{children:"cdr"})," , but if the ",(0,r.jsx)(e.em,{children:"car"})," of the actual form is the symbol ",(0,r.jsx)(e.strong,{children:"funcall"}),", then the destructuring of the arguments is actually performed using its ",(0,r.jsx)(e.em,{children:"cddr"})," instead."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u2022 Documentation"})," is attached as a ",(0,r.jsx)(e.em,{children:"documentation string"})," to ",(0,r.jsx)(e.em,{children:"name"})," (as kind ",(0,r.jsx)(e.strong,{children:"compiler-macro"}),") and to the ",(0,r.jsx)(e.em,{children:"compiler macro function"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"define-compiler-macro"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u2022"})," Unlike an ordinary ",(0,r.jsx)(e.em,{children:"macro"}),", a ",(0,r.jsx)(e.em,{children:"compiler macro"})," can decline to provide an expansion merely by returning a form that is the ",(0,r.jsx)(e.em,{children:"same"})," as the original (which can be obtained by using ",(0,r.jsx)(e.strong,{children:"&whole"}),")."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lisp",children:" \n\n\n\n(defun square (x) (expt x 2)) *\u2192* SQUARE \n\n\n\n(define-compiler-macro square (&whole form arg) \n\n\n\n(if (atom arg) \n\n\n\n\u2018(expt ,arg 2) \n\n\n\n(case (car arg) \n\n\n\n(square (if (= (length arg) 2) \n\n\n\n\u2018(expt ,(nth 1 arg) 4) \n\n\n\nform)) \n\n\n\n(expt (if (= (length arg) 3) \n\n\n\n(if (numberp (nth 2 arg)) \n\n\n\n\u2018(expt ,(nth 1 arg) ,(\\* 2 (nth 2 arg))) \n\n\n\n\u2018(expt ,(nth 1 arg) (\\* 2 ,(nth 2 arg)))) \n\n\n\nform)) \n\n\n\n(otherwise \u2018(expt ,arg 2))))) *\u2192* SQUARE \n\n\n\n(square (square 3)) *\u2192* 81 \n\n\n\n(macroexpand \u2019(square x)) *\u2192* (SQUARE X), *false* \n\n\n\n(funcall (compiler-macro-function \u2019square) \u2019(square x) nil) \n\n\n\n*\u2192* (EXPT X 2) \n\n\n\n(funcall (compiler-macro-function \u2019square) \u2019(square (square x)) nil) \n\n\n\n*\u2192* (EXPT X 4) \n\n\n\n(funcall (compiler-macro-function \u2019square) \u2019(funcall #\u2019square x) nil) \n\n\n\n*\u2192* (EXPT X 2) \n\n\n\n(defun distance-positional (x1 y1 x2 y2) \n\n\n\n(sqrt (+ (expt (- x2 x1) 2) (expt (- y2 y1) 2)))) \n\n\n\n*\u2192* DISTANCE-POSITIONAL \n\n\n\n(defun distance (&key (x1 0) (y1 0) (x2 x1) (y2 y1)) \n\n\n\n(distance-positional x1 y1 x2 y2)) \n\n\n\n*\u2192* DISTANCE \n\n\n\n(define-compiler-macro distance (&whole form \n\n\n\n&rest key-value-pairs \n\n\n\n&key (x1 0 x1-p) \n\n\n\n(y1 0 y1-p) \n\n\n\n(x2 x1 x2-p) \n\n\n\n(y2 y1 y2-p) \n\n\n\n&allow-other-keys \n\n\n\n&environment env) \n\n\n\n(flet ((key (n) (nth (\\* n 2) key-value-pairs)) \n\n\n\n(arg (n) (nth (1+ (\\* n 2)) key-value-pairs)) \n\n\n\n(simplep (x)  \n\n\n\n\n\n\n\n**define-compiler-macro** \n\n\n\n(let ((expanded-x (macroexpand x env))) \n\n\n\n(or (constantp expanded-x env) \n\n\n\n(symbolp expanded-x))))) \n\n\n\n(let ((n (/ (length key-value-pairs) 2))) \n\n\n\n(multiple-value-bind (x1s y1s x2s y2s others) \n\n\n\n(loop for (key) on key-value-pairs by #\u2019cddr \n\n\n\ncount (eq key \u2019:x1) into x1s \n\n\n\ncount (eq key \u2019:y1) into y1s \n\n\n\ncount (eq key \u2019:x2) into x2s \n\n\n\ncount (eq key \u2019:y1) into y2s \n\n\n\ncount (not (member key \u2019(:x1 :x2 :y1 :y2))) \n\n\n\ninto others \n\n\n\nfinally (return (values x1s y1s x2s y2s others))) \n\n\n\n(cond ((and (= n 4) \n\n\n\n(eq (key 0) :x1) \n\n\n\n(eq (key 1) :y1) \n\n\n\n(eq (key 2) :x2) \n\n\n\n(eq (key 3) :y2)) \n\n\n\n\u2018(distance-positional ,x1 ,y1 ,x2 ,y2)) \n\n\n\n((and (if x1-p (and (= x1s 1) (simplep x1)) t) \n\n\n\n(if y1-p (and (= y1s 1) (simplep y1)) t) \n\n\n\n(if x2-p (and (= x2s 1) (simplep x2)) t) \n\n\n\n(if y2-p (and (= y2s 1) (simplep y2)) t) \n\n\n\n(zerop others)) \n\n\n\n\u2018(distance-positional ,x1 ,y1 ,x2 ,y2)) \n\n\n\n((and (< x1s 2) (< y1s 2) (< x2s 2) (< y2s 2) \n\n\n\n(zerop others)) \n\n\n\n(let ((temps (loop repeat n collect (gensym)))) \n\n\n\n\u2018(let ,(loop for i below n \n\n\n\ncollect (list (nth i temps) (arg i))) \n\n\n\n(distance \n\n\n\n,@(loop for i below n \n\n\n\nappend (list (key i) (nth i temps))))))) \n\n\n\n(t form)))))) \n\n\n\n*\u2192* DISTANCE \n\n\n\n(dolist (form \n\n\n\n\u2019((distance :x1 (setq x 7) :x2 (decf x) :y1 (decf x) :y2 (decf x)) (distance :x1 (setq x 7) :y1 (decf x) :x2 (decf x) :y2 (decf x)) \n\n\n\n(distance :x1 (setq x 7) :y1 (incf x)) \n\n\n\n(distance :x1 (setq x 7) :y1 (incf x) :x1 (incf x)) \n\n\n\n(distance :x1 a1 :y1 b1 :x2 a2 :y2 b2) \n\n\n\n(distance :x1 a1 :x2 a2 :y1 b1 :y2 b2) \n\n\n\n(distance :x1 a1 :y1 b1 :z1 c1 :x2 a2 :y2 b2 :z2 c2))) \n\n\n\n(print (funcall (compiler-macro-function \u2019distance) form nil))) \n\n\n\n\u25b7 (LET ((#:G6558 (SETQ X 7))  \n\n\n\n\n\n\n\n\u25b7 (#:G6559 (DECF X)) \n\n\n\n\u25b7 (#:G6560 (DECF X)) \n\n\n\n\u25b7 (#:G6561 (DECF X))) \n\n\n\n\u25b7 (DISTANCE :X1 #:G6558 :X2 #:G6559 :Y1 #:G6560 :Y2 #:G6561)) \n\n\n\n\u25b7 (DISTANCE-POSITIONAL (SETQ X 7) (DECF X) (DECF X) (DECF X)) \n\n\n\n\u25b7 (LET ((#:G6567 (SETQ X 7)) \n\n\n\n\u25b7 (#:G6568 (INCF X))) \n\n\n\n\u25b7 (DISTANCE :X1 #:G6567 :Y1 #:G6568)) \n\n\n\n\u25b7 (DISTANCE :X1 (SETQ X 7) :Y1 (INCF X) :X1 (INCF X)) \n\n\n\n\u25b7 (DISTANCE-POSITIONAL A1 B1 A2 B2) \n\n\n\n\u25b7 (DISTANCE-POSITIONAL A1 B1 A2 B2) \n\n\n\n\u25b7 (DISTANCE :X1 A1 :Y1 B1 :Z1 C1 :X2 A2 :Y2 B2 :Z2 C2) \n\n\n\n*\u2192* NIL \n\n\n\n\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"compiler-macro-function"}),", ",(0,r.jsx)(e.strong,{children:"defmacro"}),", ",(0,r.jsx)(e.strong,{children:"documentation"}),", Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations)"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(e.p,{children:["The consequences of writing a ",(0,r.jsx)(e.em,{children:"compiler macro"})," definition for a function in the COMMON-LISP ",(0,r.jsx)(e.em,{children:"package"})," are undefined; it is quite possible that in some ",(0,r.jsx)(e.em,{children:"implementations"})," such an attempt would override an equivalent or equally important definition. In general, it is recommended that a programmer only write ",(0,r.jsx)(e.em,{children:"compiler macro"})," definitions for ",(0,r.jsx)(e.em,{children:"functions"})," he or she personally maintains\u2013writing a ",(0,r.jsx)(e.em,{children:"compiler macro"})," definition for a function maintained elsewhere is normally considered a violation of traditional rules of modularity and data abstraction."]})]})}function o(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}const s={},t="define-compiler-macro",l={id:"chap-3/d-i-dictionary/definecompilermacro",title:"define-compiler-macro",description:"Expanded Reference: define-compiler-macro",source:"@site/docs/chap-3/d-i-dictionary/definecompilermacro.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/definecompilermacro",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/definecompilermacro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/definecompilermacro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"compiler-macro-function",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/compilermacrofunction"},next:{title:"define-symbol-macro",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/definesymbolmacro"}},d={},m=[{value:"Expanded Reference: define-compiler-macro",id:"expanded-reference-define-compiler-macro",level:2}];function x(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"define-compiler-macro",children:"define-compiler-macro"}),"\n","\n","\n",(0,r.jsx)(o,{}),"\n",(0,r.jsx)(e.h2,{id:"expanded-reference-define-compiler-macro",children:"Expanded Reference: define-compiler-macro"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lisp",children:"(define-compiler-macro )\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>o});var r=i(67294);const c={},a=r.createContext(c);function o(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);