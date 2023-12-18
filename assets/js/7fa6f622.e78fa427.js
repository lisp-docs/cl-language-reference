"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[2591],{58292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=t(85893),i=t(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"define-compiler-macro"})," ",(0,r.jsx)(n.em,{children:"Macro"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"define-compiler-macro"})," ",(0,r.jsx)(n.em,{children:"name lambda-list"})," [[ ",(0,r.jsx)(n.em,{children:"{declaration}"}),"* ",(0,r.jsx)(n.em,{children:"| documentation"})," ]] ",(0,r.jsx)(n.em,{children:"{form}"}),"* \u2192 name"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"name"}),"\u2014a ",(0,r.jsx)(n.em,{children:"function name"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"lambda-list"}),"\u2014a ",(0,r.jsx)(n.em,{children:"macro lambda list"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"declaration"}),"\u2014a ",(0,r.jsx)(n.strong,{children:"declare"})," ",(0,r.jsx)(n.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"documentation"}),"\u2014a ",(0,r.jsx)(n.em,{children:"string"}),"; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"form"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["This is the normal mechanism for defining a ",(0,r.jsx)(n.em,{children:"compiler macro function"}),". Its manner of definition is the same as for ",(0,r.jsx)(n.strong,{children:"defmacro"}),"; the only differences are:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u2022"})," The ",(0,r.jsx)(n.em,{children:"name"})," can be a ",(0,r.jsx)(n.em,{children:"function name"})," naming any ",(0,r.jsx)(n.em,{children:"function"})," or ",(0,r.jsx)(n.em,{children:"macro"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u2022"})," The expander function is installed as a ",(0,r.jsx)(n.em,{children:"compiler macro function"})," for the ",(0,r.jsx)(n.em,{children:"name"}),", rather than as a ",(0,r.jsx)(n.em,{children:"macro function"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u2022"})," The ",(0,r.jsx)(n.strong,{children:"&whole"})," argument is bound to the form argument that is passed to the ",(0,r.jsx)(n.em,{children:"compiler macro function"}),". The remaining lambda-list parameters are specified as if this form contained the function name in the ",(0,r.jsx)(n.em,{children:"car"})," and the actual arguments in the ",(0,r.jsx)(n.em,{children:"cdr"})," , but if the ",(0,r.jsx)(n.em,{children:"car"})," of the actual form is the symbol ",(0,r.jsx)(n.strong,{children:"funcall"}),", then the destructuring of the arguments is actually performed using its ",(0,r.jsx)(n.em,{children:"cddr"})," instead."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u2022 Documentation"})," is attached as a ",(0,r.jsx)(n.em,{children:"documentation string"})," to ",(0,r.jsx)(n.em,{children:"name"})," (as kind ",(0,r.jsx)(n.strong,{children:"compiler-macro"}),") and to the ",(0,r.jsx)(n.em,{children:"compiler macro function"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"define-compiler-macro"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u2022"})," Unlike an ordinary ",(0,r.jsx)(n.em,{children:"macro"}),", a ",(0,r.jsx)(n.em,{children:"compiler macro"})," can decline to provide an expansion merely by returning a form that is the ",(0,r.jsx)(n.em,{children:"same"})," as the original (which can be obtained by using ",(0,r.jsx)(n.strong,{children:"&whole"}),")."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(defun square (x) (expt x 2)) \u2192 SQUARE \n(define-compiler-macro square (&whole form arg) \n  (if (atom arg) \n      \u2018(expt ,arg 2) \n       (case (car arg) \n\t (square (if (= (length arg) 2) \n\t\t     \u2018(expt ,(nth 1 arg) 4) \n\t\t      form)) \n\t (expt (if (= (length arg) 3) \n\t\t   (if (numberp (nth 2 arg)) \n\t\t       \u2018(expt ,(nth 1 arg) ,(\\* 2 (nth 2 arg))) \n\t\t\t\u2018(expt ,(nth 1 arg) (\\* 2 ,(nth 2 arg)))) \n\t\t   form)) \n\t (otherwise \u2018(expt ,arg 2))))) \u2192 SQUARE \n(square (square 3)) \u2192 81 \n(macroexpand \u2019(square x)) \u2192 (SQUARE X), *false* \n(funcall (compiler-macro-function \u2019square) \u2019(square x) nil) \n\u2192 (EXPT X 2) \n(funcall (compiler-macro-function \u2019square) \u2019(square (square x)) nil) \n\u2192 (EXPT X 4) \n(funcall (compiler-macro-function \u2019square) \u2019(funcall #\u2019square x) nil) \n\u2192 (EXPT X 2) \n(defun distance-positional (x1 y1 x2 y2) \n  (sqrt (+ (expt (- x2 x1) 2) (expt (- y2 y1) 2)))) \n\u2192 DISTANCE-POSITIONAL \n(defun distance (&key (x1 0) (y1 0) (x2 x1) (y2 y1)) \n  (distance-positional x1 y1 x2 y2)) \n\u2192 DISTANCE \n(define-compiler-macro distance (&whole form \n\t\t\t\t\t&rest key-value-pairs \n\t\t\t\t\t&key (x1 0 x1-p) \n\t\t\t\t\t(y1 0 y1-p) \n\t\t\t\t\t(x2 x1 x2-p) \n\t\t\t\t\t(y2 y1 y2-p) \n\t\t\t\t\t&allow-other-keys \n\t\t\t\t\t&environment env) \n  (flet ((key (n) (nth (\\* n 2) key-value-pairs)) \n\t (arg (n) (nth (1+ (\\* n 2)) key-value-pairs)) \n\t (simplep (x)  \n\t   **define-compiler-macro** \n\t   (let ((expanded-x (macroexpand x env))) \n\t     (or (constantp expanded-x env) \n\t\t (symbolp expanded-x))))) \n    (let ((n (/ (length key-value-pairs) 2))) \n      (multiple-value-bind (x1s y1s x2s y2s others) \n\t  (loop for (key) on key-value-pairs by #\u2019cddr \n\t\tcount (eq key \u2019:x1) into x1s \n\t\tcount (eq key \u2019:y1) into y1s \n\t\tcount (eq key \u2019:x2) into x2s \n\t\tcount (eq key \u2019:y1) into y2s \n\t\tcount (not (member key \u2019(:x1 :x2 :y1 :y2))) \n\t\tinto others \n\t\tfinally (return (values x1s y1s x2s y2s others))) \n\t(cond ((and (= n 4) \n\t\t    (eq (key 0) :x1) \n\t\t    (eq (key 1) :y1) \n\t\t    (eq (key 2) :x2) \n\t\t    (eq (key 3) :y2)) \n\t       \u2018(distance-positional ,x1 ,y1 ,x2 ,y2)) \n\t      ((and (if x1-p (and (= x1s 1) (simplep x1)) t) \n\t\t    (if y1-p (and (= y1s 1) (simplep y1)) t) \n\t\t    (if x2-p (and (= x2s 1) (simplep x2)) t) \n\t\t    (if y2-p (and (= y2s 1) (simplep y2)) t) \n\t\t    (zerop others)) \n\t       \u2018(distance-positional ,x1 ,y1 ,x2 ,y2)) \n\t      ((and (< x1s 2) (< y1s 2) (< x2s 2) (< y2s 2) \n\t\t    (zerop others)) \n\t       (let ((temps (loop repeat n collect (gensym)))) \n\t\t \u2018(let ,(loop for i below n \n\t\t\t      collect (list (nth i temps) (arg i))) \n\t\t    (distance \n\t\t     ,@(loop for i below n \n\t\t\t     append (list (key i) (nth i temps))))))) \n\t      (t form)))))) \n\u2192 DISTANCE \n(dolist (form \n\t  \u2019((distance :x1 (setq x 7) :x2 (decf x) :y1 (decf x) :y2 (decf x)) (distance :x1 (setq x 7) :y1 (decf x) :x2 (decf x) :y2 (decf x)) \n\t    (distance :x1 (setq x 7) :y1 (incf x)) \n\t    (distance :x1 (setq x 7) :y1 (incf x) :x1 (incf x)) \n\t    (distance :x1 a1 :y1 b1 :x2 a2 :y2 b2) \n\t    (distance :x1 a1 :x2 a2 :y1 b1 :y2 b2) \n\t    (distance :x1 a1 :y1 b1 :z1 c1 :x2 a2 :y2 b2 :z2 c2))) \n  (print (funcall (compiler-macro-function \u2019distance) form nil))) \n\u25b7 (LET ((#:G6558 (SETQ X 7))  \n\t\u25b7 (#:G6559 (DECF X)) \n\t\u25b7 (#:G6560 (DECF X)) \n\t\u25b7 (#:G6561 (DECF X))) \n    \u25b7 (DISTANCE :X1 #:G6558 :X2 #:G6559 :Y1 #:G6560 :Y2 #:G6561)) \n\u25b7 (DISTANCE-POSITIONAL (SETQ X 7) (DECF X) (DECF X) (DECF X)) \n\u25b7 (LET ((#:G6567 (SETQ X 7)) \n\t\u25b7 (#:G6568 (INCF X))) \n    \u25b7 (DISTANCE :X1 #:G6567 :Y1 #:G6568)) \n\u25b7 (DISTANCE :X1 (SETQ X 7) :Y1 (INCF X) :X1 (INCF X)) \n\u25b7 (DISTANCE-POSITIONAL A1 B1 A2 B2) \n\u25b7 (DISTANCE-POSITIONAL A1 B1 A2 B2) \n\u25b7 (DISTANCE :X1 A1 :Y1 B1 :Z1 C1 :X2 A2 :Y2 B2 :Z2 C2) \n\u2192 NIL \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"compiler-macro-function"}),", ",(0,r.jsx)(n.strong,{children:"defmacro"}),", ",(0,r.jsx)(n.strong,{children:"documentation"}),", Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The consequences of writing a ",(0,r.jsx)(n.em,{children:"compiler macro"})," definition for a function in the COMMON-LISP ",(0,r.jsx)(n.em,{children:"package"})," are undefined; it is quite possible that in some ",(0,r.jsx)(n.em,{children:"implementations"})," such an attempt would override an equivalent or equally important definition. In general, it is recommended that a programmer only write ",(0,r.jsx)(n.em,{children:"compiler macro"})," definitions for ",(0,r.jsx)(n.em,{children:"functions"})," he or she personally maintains\u2013writing a ",(0,r.jsx)(n.em,{children:"compiler macro"})," definition for a function maintained elsewhere is normally considered a violation of traditional rules of modularity and data abstraction."]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const s={},o="define-compiler-macro",l={id:"chap-3/d-i-dictionary/definecompilermacro",title:"define-compiler-macro",description:"Expanded Reference: define-compiler-macro",source:"@site/docs/chap-3/d-i-dictionary/definecompilermacro.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/definecompilermacro",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/definecompilermacro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/definecompilermacro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"declare",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/declare"},next:{title:"define-symbol-macro",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/definesymbolmacro"}},d={},m=[{value:"Expanded Reference: define-compiler-macro",id:"expanded-reference-define-compiler-macro",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"define-compiler-macro",children:"define-compiler-macro"}),"\n","\n","\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-define-compiler-macro",children:"Expanded Reference: define-compiler-macro"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(define-compiler-macro )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(67294);const i={},c=r.createContext(i);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);