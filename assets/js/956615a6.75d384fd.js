"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[32937],{74037:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var t=r(85893),i=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"defmacro"})," ",(0,t.jsx)(r,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"Macro"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"defmacro",children:(0,t.jsx)("b",{children:"defmacro"})})," ",(0,t.jsx)(n.em,{children:"name lambda-list"})," [[ ",(0,t.jsx)(r,{styled:!0,term:"declaration",children:(0,t.jsx)("i",{children:"{declaration}"})}),"* ",(0,t.jsx)(n.em,{children:"| documentation"})," ]] ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"{form}"})}),"*"]}),"\n",(0,t.jsx)(n.p,{children:"\u2192 name"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"name",children:(0,t.jsx)("i",{children:"name"})}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"lambda-list"}),"\u2014a ",(0,t.jsx)(n.em,{children:"macro lambda list"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"declaration",children:(0,t.jsx)("i",{children:"declaration"})}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"declare",children:(0,t.jsx)("b",{children:"declare"})})," ",(0,t.jsx)(r,{styled:!0,term:"expression",children:(0,t.jsx)("i",{children:"expression"})}),"; not evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"documentation"}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"string",children:(0,t.jsx)("i",{children:"string"})}),"; not evaluated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),"."]}),"\n",(0,t.jsx)(r,{styled:!0,term:"defmacro",children:(0,t.jsx)("b",{children:"defmacro"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Defines ",(0,t.jsx)(r,{styled:!0,term:"name",children:(0,t.jsx)("i",{children:"name"})})," as a ",(0,t.jsx)(r,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"macro"})})," by associating a ",(0,t.jsx)(n.em,{children:"macro function"})," with that ",(0,t.jsx)(r,{styled:!0,term:"name",children:(0,t.jsx)("i",{children:"name"})})," in the global environment. The ",(0,t.jsx)(n.em,{children:"macro function"})," is defined in the same ",(0,t.jsx)(n.em,{children:"lexical environment"})," in which the ",(0,t.jsx)(r,{styled:!0,term:"defmacro",children:(0,t.jsx)("b",{children:"defmacro"})})," ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," appears."]}),"\n",(0,t.jsxs)(n.p,{children:["The parameter variables in ",(0,t.jsx)(n.em,{children:"lambda-list"})," are bound to destructured portions of the macro call."]}),"\n",(0,t.jsxs)(n.p,{children:["The expansion function accepts two arguments, a ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," and an ",(0,t.jsx)(r,{styled:!0,term:"environment",children:(0,t.jsx)("i",{children:"environment"})}),". The expansion function returns a ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),". The body of the expansion function is specified by ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})}),". ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"Forms"})})," are executed in order. The value of the last ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," executed is returned as the expansion of the ",(0,t.jsx)(r,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"macro"})}),". The body ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})})," of the expansion function (but not the ",(0,t.jsx)(n.em,{children:"lambda-list"}),") are implicitly enclosed in a ",(0,t.jsx)(r,{styled:!0,term:"block",children:(0,t.jsx)("i",{children:"block"})})," whose name is ",(0,t.jsx)(r,{styled:!0,term:"name",children:(0,t.jsx)("i",{children:"name"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"lambda-list"})," conforms to the requirements described in Section 3.4.4 (Macro Lambda Lists)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Documentation"})," is attached as a ",(0,t.jsx)(n.em,{children:"documentation string"})," to ",(0,t.jsx)(r,{styled:!0,term:"name",children:(0,t.jsx)("i",{children:"name"})})," (as kind ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("b",{children:"function"})}),") and to the ",(0,t.jsx)(n.em,{children:"macro function"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"defmacro",children:(0,t.jsx)("b",{children:"defmacro"})})," can be used to redefine a ",(0,t.jsx)(r,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"macro"})})," or to replace a ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," definition with a ",(0,t.jsx)(r,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"macro"})})," definition."]}),"\n",(0,t.jsxs)(n.p,{children:["Recursive expansion of the ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," returned must terminate, including the expansion of other ",(0,t.jsx)(r,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"macros"})})," which are ",(0,t.jsx)(r,{styled:!0,term:"subform",children:(0,t.jsx)("i",{children:"subforms"})})," of other ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"forms"})})," returned."]}),"\n",(0,t.jsxs)(n.p,{children:["The consequences are undefined if the result of fully macroexpanding a ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," contains any ",(0,t.jsx)(n.em,{children:"circular list structure"})," except in ",(0,t.jsx)(n.em,{children:"literal objects"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If a ",(0,t.jsx)(r,{styled:!0,term:"defmacro",children:(0,t.jsx)("b",{children:"defmacro"})})," ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," appears as a ",(0,t.jsx)(n.em,{children:"top level form"}),", the ",(0,t.jsx)(r,{styled:!0,term:"compiler",children:(0,t.jsx)("i",{children:"compiler"})})," must store the ",(0,t.jsx)(r,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"macro"})})," definition at compile time, so that occurrences of the macro later on in the file can be expanded correctly. Users must ensure that the body of the ",(0,t.jsx)(r,{styled:!0,term:"macro",children:(0,t.jsx)("i",{children:"macro"})})," can be evaluated at compile time if it is referenced within the ",(0,t.jsx)(r,{styled:!0,term:"file",children:(0,t.jsx)("i",{children:"file"})})," being ",(0,t.jsx)(n.em,{children:"compiled"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'\n(defmacro mac1 (a b) "Mac1 multiplies and adds" \n\t  \u2018(+ ,a (\\* ,b 3))) \u2192 MAC1 \n(mac1 4 5) \u2192 19 \n(documentation \u2019mac1 \u2019function) \u2192 "Mac1 multiplies and adds" \n(defmacro mac2 (&optional (a 2 b) (c 3 d) &rest x) \u2018\u2019(,a ,b ,c ,d ,x)) \u2192 MAC2 (mac2 6) \u2192 (6 T 3 NIL NIL) \n(mac2 6 3 8) \u2192 (6 T 3 T (8)) \n(defmacro mac3 (&whole r a &optional (b 3) &rest x &key c (d a)) \n  \u2018\u2019(,r ,a ,b ,c ,d ,x)) \u2192 MAC3 \n(mac3 1 6 :d 8 :c 9 :d 10) \u2192 ((MAC3 1 6 :D 8 :C 9 :D 10) 1 6 9 8 (:D 8 :C 9 :D 10)) \nThe stipulation that an embedded *destructuring lambda list* is permitted only where *ordinary lambda list* syntax would permit a parameter name but not a *list* is made to prevent ambiguity. For example, the following is not valid:  \n\n**defmacro** \n(defmacro loser (x &optional (a b &rest c) &rest z) \n  ...) \nbecause *ordinary lambda list* syntax does permit a *list* following &optional; the list (a b &rest c) would be interpreted as describing an optional parameter named a whose default value is that of the form b, with a supplied-p parameter named **&rest** (not valid), and an extraneous symbol c in the list (also not valid). An almost correct way to express this is \n(defmacro loser (x &optional ((a b &rest c)) &rest z) \n  ...) \nThe extra set of parentheses removes the ambiguity. However, the definition is now incorrect because a macro call such as (loser (car pool)) would not provide any argument form for the lambda list (a b &rest c), and so the default value against which to match the *lambda list* would be **nil** because no explicit default value was specified. The consequences of this are unspecified since the empty list, **nil**, does not have *forms* to satisfy the parameters a and b. The fully correct definition would be either \n(defmacro loser (x &optional ((a b &rest c) \u2019(nil nil)) &rest z) \n  ...) \nor \n(defmacro loser (x &optional ((&optional a b &rest c)) &rest z) \n  ...) \nThese differ slightly: the first requires that if the macro call specifies a explicitly then it must also specify b explicitly, whereas the second does not have this requirement. For example, \n(loser (car pool) ((+ x 1))) \nwould be a valid call for the second definition but not for the first. \n(defmacro dm1a (&whole x) \u2018\u2019,x) \n(macroexpand \u2019(dm1a)) \u2192 (QUOTE (DM1A)) \n(macroexpand \u2019(dm1a a)) is an error. \n(defmacro dm1b (&whole x a &optional b) \u2018\u2019(,x ,a ,b)) \n(macroexpand \u2019(dm1b)) is an error. \n(macroexpand \u2019(dm1b q)) \u2192 (QUOTE ((DM1B Q) Q NIL)) \n(macroexpand \u2019(dm1b q r)) \u2192 (QUOTE ((DM1B Q R) Q R)) \n(macroexpand \u2019(dm1b q r s)) is an error. \n(defmacro dm2a (&whole form a b) \u2018\u2019(form ,form a ,a b ,b)) \n(macroexpand \u2019(dm2a x y)) \u2192 (QUOTE (FORM (DM2A X Y) A X B Y)) \n(dm2a x y) \u2192 (FORM (DM2A X Y) A X B Y) \n(defmacro dm2b (&whole form a (&whole b (c . d) &optional (e 5)) \n\t\t&body f &environment env)  \n\n  \u201c(,\u2019,form \u201ea ,\u2019,b ,\u2019,(macroexpand c env) ,\u2019,d ,\u2019,e ,\u2019,f)) \n\t\t\t\t\t;Note that because backquote is involved, implementations may differ \n\t\t\t\t\t;slightly in the nature (though not the functionality) of the expansion. \n(macroexpand \u2019(dm2b x1 (((incf x2) x3 x4)) x5 x6)) \n\u2192 (LIST\\* \u2019(DM2B X1 (((INCF X2) X3 X4)) \n\t\t   X5 X6) \n\t     X1 \n\t     \u2019((((INCF X2) X3 X4)) (SETQ X2 (+ X2 1)) (X3 X4) 5 (X5 X6))), \nT \n(let ((x1 5)) \n  (macrolet ((segundo (x) \u2018(cadr ,x))) \n    (dm2b x1 (((segundo x2) x3 x4)) x5 x6))) \n\u2192 ((DM2B X1 (((SEGUNDO X2) X3 X4)) X5 X6) \n     5 (((SEGUNDO X2) X3 X4)) (CADR X2) (X3 X4) 5 (X5 X6)) \n\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"define-compiler-macro",children:(0,t.jsx)("b",{children:"define-compiler-macro"})}),", ",(0,t.jsx)(r,{styled:!0,term:"destructuring-bind",children:(0,t.jsx)("b",{children:"destructuring-bind"})}),", ",(0,t.jsx)(n.strong,{children:"documentation"}),", ",(0,t.jsx)(r,{styled:!0,term:"macroexpand",children:(0,t.jsx)("b",{children:"macroexpand"})}),","]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"*macroexpand-hook*"}),", ",(0,t.jsx)(r,{styled:!0,term:"macrolet",children:(0,t.jsx)("b",{children:"macrolet"})}),", ",(0,t.jsx)(r,{styled:!0,term:"macro-function",children:(0,t.jsx)("b",{children:"macro-function"})}),", Section 3.1 (Evaluation), Section 3.2 (Compilation), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations)"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const a={title:"defmacro"},d="defmacro",o={id:"chap-3/d-i-dictionary/defmacro_macro",title:"defmacro",description:"Expanded Reference: defmacro",source:"@site/docs/chap-3/d-i-dictionary/defmacro_macro.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/defmacro_macro",permalink:"/cl-language-reference/chap-3/d-i-dictionary/defmacro_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/defmacro_macro.md",tags:[],version:"current",frontMatter:{title:"defmacro"},sidebar:"tutorialSidebar",previous:{title:"define-symbol-macro",permalink:"/cl-language-reference/chap-3/d-i-dictionary/define-symbol-macro_macro"},next:{title:"dynamic-extent",permalink:"/cl-language-reference/chap-3/d-i-dictionary/dynamic-extent_declaration"}},l={},m=[{value:"Expanded Reference: defmacro",id:"expanded-reference-defmacro",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"defmacro",children:"defmacro"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-defmacro",children:"Expanded Reference: defmacro"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(defmacro )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var t=r(67294);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);