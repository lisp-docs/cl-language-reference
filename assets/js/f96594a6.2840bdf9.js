"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[72477],{58208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var i=t(85893),a=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dynamic-extent"})," ",(0,i.jsx)(n.em,{children:"Declaration"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:["(dynamic-extent [[ ",(0,i.jsx)(n.em,{children:"{var}"}),"* | (",(0,i.jsx)(n.strong,{children:"function"})," ",(0,i.jsx)(n.em,{children:"fn"}),")* ]])"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"var"}),"\u2014a ",(0,i.jsx)(n.em,{children:"variable name"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"fn"}),"\u2014a ",(0,i.jsx)(n.em,{children:"function name"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Valid Context:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"declaration"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Binding Types Aected:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"variable"}),", ",(0,i.jsx)(n.em,{children:"function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["In some containing ",(0,i.jsx)("i",{children:"form"}),", ",(0,i.jsx)("i",{children:"F"}),", this declaration asserts for each ",(0,i.jsxs)("i",{children:["var",(0,i.jsx)("sub",{children:"i"})]})," (which need not be bound by ",(0,i.jsx)("i",{children:"F"}),"), and for each ",(0,i.jsxs)("i",{children:["value v",(0,i.jsx)("sub",{children:"ij"})]})," that ",(0,i.jsxs)("i",{children:["var",(0,i.jsx)("sub",{children:"i"})]})," takes on, and for each ",(0,i.jsxs)("i",{children:["object x",(0,i.jsx)("sub",{children:"ijk"})]})," that is an ",(0,i.jsx)("i",{children:"otherwise inaccessible part"})," of ",(0,i.jsxs)("i",{children:["v",(0,i.jsx)("sub",{children:"ij"})]})," at any time when ",(0,i.jsxs)("i",{children:["v",(0,i.jsx)("sub",{children:"ij"})]})," becomes the value of ",(0,i.jsxs)("i",{children:["var",(0,i.jsx)("sub",{children:"i"})]}),", that just after the execution of ",(0,i.jsx)("i",{children:"F"})," terminates, ",(0,i.jsxs)("i",{children:["x",(0,i.jsx)("sub",{children:"ijk"})]})," is either ",(0,i.jsx)("i",{children:"inaccessible"})," (if ",(0,i.jsx)("i",{children:"F"})," established a ",(0,i.jsx)("i",{children:"binding"})," for ",(0,i.jsxs)("i",{children:["var",(0,i.jsx)("sub",{children:"i"})]}),") or still an ",(0,i.jsx)("i",{children:"otherwise inaccessible part"})," of the current value of ",(0,i.jsxs)("i",{children:["var",(0,i.jsx)("sub",{children:"i"})]})," (if ",(0,i.jsx)("i",{children:"F"})," did not establish a ",(0,i.jsx)("i",{children:"binding"})," for ",(0,i.jsxs)("i",{children:["var",(0,i.jsx)("sub",{children:"i"})]}),"). The same relation holds for each ",(0,i.jsxs)("i",{children:["fn",(0,i.jsx)("sub",{children:"i"})]}),", except that the ",(0,i.jsx)("i",{children:"bindings"})," are in the ",(0,i.jsx)("i",{children:"function namespace"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Evaluation and"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"dynamic-extent"})}),"\n",(0,i.jsxs)(n.p,{children:["The compiler is permitted to use this information in any way that is appropriate to the ",(0,i.jsx)(n.em,{children:"implementation"})," and that does not conflict with the semantics of Common Lisp."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dynamic-extent"})," declarations can be ",(0,i.jsx)(n.em,{children:"free declarations"})," or ",(0,i.jsx)(n.em,{children:"bound declarations"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"vars"})," and ",(0,i.jsx)(n.em,{children:"fns"})," named in a ",(0,i.jsx)(n.strong,{children:"dynamic-extent"})," declaration must not refer to ",(0,i.jsx)(n.em,{children:"symbol macro"})," or ",(0,i.jsx)(n.em,{children:"macro"})," bindings."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'Since stack allocation of the initial value entails knowing at the *object*\u2019s creation time that the *object* can be *stack-allocated*, it is not generally useful to make a **dynamic-extent** *declaration* for *variables* which have no lexically apparent initial value. For example, it is probably useful to write: \n(defun f () \n  (let ((x (list 1 2 3))) \n    (declare (dynamic-extent x)) \n    ...)) \nThis would permit those compilers that wish to do so to *stack allocate* the list held by the local variable x. It is permissible, but in practice probably not as useful, to write: \n(defun g (x) (declare (dynamic-extent x)) ...) \n(defun f () (g (list 1 2 3))) \nMost compilers would probably not *stack allocate* the *argument* to g in f because it would be a modularity violation for the compiler to assume facts about g from within f. Only an implementation that was willing to be responsible for recompiling f if the definition of g changed incompatibly could legitimately *stack allocate* the *list* argument to g in f. \nHere is another example: \n(declaim (inline g)) \n(defun g (x) (declare (dynamic-extent x)) ...) \n(defun f () (g (list 1 2 3))) \n(defun f () \n  (flet ((g (x) (declare (dynamic-extent x)) ...)) \n    (g (list 1 2 3)))) \nIn the previous example, some compilers might determine that optimization was possible and others might not. \nA variant of this is the so-called \u201cstack allocated rest list\u201d that can be achieved (in implementations supporting the optimization) by: \n(defun f (&rest x) \n  (declare (dynamic-extent x)) \n  \n  \n  **dynamic-extent** \n  ...) \nNote that although the initial value of x is not explicit, the f function is responsible for assembling the list x from the passed arguments, so the f function can be optimized by the compiler to construct a *stack-allocated* list instead of a heap-allocated list in implementations that support such. \nIn the following example, \n(let ((x (list \u2019a1 \u2019b1 \u2019c1)) \n      (y (cons \u2019a2 (cons \u2019b2 (cons \u2019c2 nil))))) \n  (declare (dynamic-extent x y)) \n  ...) \nThe *otherwise inaccessible parts* of x are three *conses*, and the *otherwise inaccessible parts* of y are three other *conses*. None of the symbols a1, b1, c1, a2, b2, c2, or **nil** is an *otherwise inaccessible part* of x or y because each is *interned* and hence *accessible* by the *package* (or *packages*) in which it is *interned*. However, if a freshly allocated *uninterned symbol* had been used, it would have been an *otherwise inaccessible part* of the *list* which contained it. \n;; In this example, the implementation is permitted to *stack allocate* \n;; the list that is bound to X. \n(let ((x (list 1 2 3))) \n  (declare (dynamic-extent x)) \n  (print x) \n  :done) \n\u25b7 (1 2 3) \n\u2192 :DONE \n;; In this example, the list to be bound to L can be *stack-allocated*. \n(defun zap (x y z) \n  (do ((l (list x y z) (cdr l))) \n      ((null l)) \n    (declare (dynamic-extent l)) \n    (prin1 (car l)))) \u2192 ZAP \n(zap 1 2 3) \n\u25b7 123 \n\u2192 NIL \n;; Some implementations might open-code LIST-ALL-PACKAGES in a way \n;; that permits using *stack allocation* of the list to be bound to L. \n(do ((l (list-all-packages) (cdr l))) \n    ((null l)) \n  (declare (dynamic-extent l)) \n  (let ((name (package-name (car l)))) \n    (when (string-search "COMMON-LISP" name) (print name)))) \n\u25b7 "COMMON-LISP" \nEvaluation and \n\n\n\u25b7 "COMMON-LISP-USER" \n\u2192 NIL \n;; Some implementations might have the ability to *stack allocate* \n;; rest lists. A declaration such as the following should be a cue \n;; to such implementations that stack-allocation of the rest list \n;; would be desirable. \n(defun add (&rest x) \n  (declare (dynamic-extent x)) \n  (apply #\u2019+ x)) \u2192 ADD \n(add 1 2 3) \u2192 6 \n(defun zap (n m) \n  ;; Computes (RANDOM (+ M 1)) at relative speed of roughly O(N). \n  ;; It may be slow, but with a good compiler at least it \n  ;; doesn\u2019t waste much heap storage. :-\\} \n  (let ((a (make-array n))) \n    (declare (dynamic-extent a)) \n    (dotimes (i n) \n      (declare (dynamic-extent i)) \n      (setf (aref a i) (random (+ i 1)))) \n    (aref a m))) \u2192 ZAP \n(< (zap 5 3) 3) \u2192  true \nThe following are in error, since the value of x is used outside of its *extent*: \n(length (list (let ((x (list 1 2 3))) ; Invalid \n\t\t(declare (dynamic-extent x)) \n\t\tx))) \n(progn (let ((x (list 1 2 3))) ; Invalid \n\t (declare (dynamic-extent x)) \n\t x) \n       nil) \n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"declare"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["The most common optimization is to ",(0,i.jsx)(n.em,{children:"stack allocate"})," the initial value of the ",(0,i.jsx)(n.em,{children:"objects"})," named by the ",(0,i.jsx)(n.em,{children:"vars"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It is permissible for an implementation to simply ignore this declaration."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"type"})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const l={},r="dynamic-extent",o={id:"chap-3/d-i-dictionary/dynamicextent",title:"dynamic-extent",description:"Expanded Reference: dynamic-extent",source:"@site/docs/chap-3/d-i-dictionary/dynamicextent.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/dynamicextent",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/dynamicextent",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/dynamicextent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"defmacro",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/defmacro"},next:{title:"eval",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/eval"}},d={},h=[{value:"Expanded Reference: dynamic-extent",id:"expanded-reference-dynamic-extent",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dynamic-extent",children:"dynamic-extent"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-dynamic-extent",children:"Expanded Reference: dynamic-extent"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(dynamic-extent )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var i=t(67294);const a={},s=i.createContext(a);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);