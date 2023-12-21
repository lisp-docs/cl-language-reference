"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[21263],{79094:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var r=s(85893),o=s(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," ",(0,r.jsx)(n.em,{children:"Special Operator"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," (",(0,r.jsx)(n.em,{children:"{"}),"(",(0,r.jsx)(n.em,{children:"symbol expansion"}),")",(0,r.jsx)(n.em,{children:"}"}),"*) ",(0,r.jsx)(n.em,{children:"{declaration}"}),"* ",(0,r.jsx)(n.em,{children:"{form}"}),"*"]}),"\n",(0,r.jsx)(n.p,{children:"\u2192 {result}*"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,r.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"expansion"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"declaration"}),"\u2014a ",(0,r.jsx)(n.strong,{children:"declare"})," ",(0,r.jsx)(n.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,r.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"results"}),"\u2014the ",(0,r.jsx)(n.em,{children:"values"})," returned by the ",(0,r.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," provides a mechanism for affecting the ",(0,r.jsx)(n.em,{children:"macro expansion"})," environment for ",(0,r.jsx)(n.em,{children:"symbols"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," lexically establishes expansion functions for each of the ",(0,r.jsx)(n.em,{children:"symbol macros"})," named by ",(0,r.jsx)(n.em,{children:"symbols"}),". The only guaranteed property of an expansion ",(0,r.jsx)(n.em,{children:"function"})," for a ",(0,r.jsx)(n.em,{children:"symbol macro"})," is that when it is applied to the ",(0,r.jsx)(n.em,{children:"form"})," and the ",(0,r.jsx)(n.em,{children:"environment"})," it returns the correct expansion. (In particular, it is ",(0,r.jsx)(n.em,{children:"implementation-dependent"})," whether the expansion is conceptually stored in the expansion function, the ",(0,r.jsx)(n.em,{children:"environment"}),", or both.)"]}),"\n",(0,r.jsxs)(n.p,{children:["Each reference to ",(0,r.jsx)(n.em,{children:"symbol"})," as a variable within the lexical ",(0,r.jsx)(n.em,{children:"scope"})," of ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a symbol macro is subject to further macro expansion in the same lexical environment as the symbol macro invocation, exactly analogous to normal ",(0,r.jsx)(n.em,{children:"macros"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Exactly the same ",(0,r.jsx)(n.em,{children:"declarations"})," are allowed as for ",(0,r.jsx)(n.strong,{children:"let"})," with one exception: ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," signals an error if a ",(0,r.jsx)(n.strong,{children:"special"})," declaration names one of the ",(0,r.jsx)(n.em,{children:"symbols"})," being defined by ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.em,{children:"forms"})," of the ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," form are expanded, any use of ",(0,r.jsx)(n.strong,{children:"setq"})," to set the value of one of the specified variables is treated as if it were a ",(0,r.jsx)(n.strong,{children:"setf"}),". ",(0,r.jsx)(n.strong,{children:"psetq"})," of a ",(0,r.jsx)(n.em,{children:"symbol"})," defined as a symbol macro is treated as if it were a ",(0,r.jsx)(n.strong,{children:"psetf"}),", and ",(0,r.jsx)(n.strong,{children:"multiple-value-setq"})," is treated as if it were a ",(0,r.jsx)(n.strong,{children:"setf"})," of ",(0,r.jsx)(n.strong,{children:"values"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The use of ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," can be shadowed by ",(0,r.jsx)(n.strong,{children:"let"}),". In other words, ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," only substitutes for occurrences of ",(0,r.jsx)(n.em,{children:"symbol"})," that would be in the ",(0,r.jsx)(n.em,{children:"scope"})," of a lexical binding of ",(0,r.jsx)(n.em,{children:"symbol"})," surrounding the ",(0,r.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:" \n;;; The following is equivalent to \n;;; (list \u2019foo (let ((x \u2019bar)) x)), \n \n \n;;; not \n;;; (list \u2019foo (let ((\u2019foo \u2019bar)) \u2019foo)) \n(symbol-macrolet ((x \u2019foo)) \n(list x (let ((x \u2019bar)) x))) \n*!* (foo bar) \n*not* \n*!* (foo foo) \n(symbol-macrolet ((x \u2019(foo x))) \n(list x)) \n*!* ((FOO X)) \n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["If an attempt is made to bind a ",(0,r.jsx)(n.em,{children:"symbol"})," that is defined as a ",(0,r.jsx)(n.em,{children:"global variable"}),", an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"program-error"})," is signaled."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"declaration"})," contains a ",(0,r.jsx)(n.strong,{children:"special"})," declaration that names one of the ",(0,r.jsx)(n.em,{children:"symbols"})," being bound by ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"}),", an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"program-error"})," is signaled."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"with-slots"}),", ",(0,r.jsx)(n.strong,{children:"macroexpand"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The special form ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," is the basic mechanism that is used to implement ",(0,r.jsx)(n.strong,{children:"with-slots"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If a ",(0,r.jsx)(n.strong,{children:"symbol-macrolet"})," ",(0,r.jsx)(n.em,{children:"form"})," is a ",(0,r.jsx)(n.em,{children:"top level form"}),", the ",(0,r.jsx)(n.em,{children:"forms"})," are also processed as ",(0,r.jsx)(n.em,{children:"top level forms"}),". See Section 3.2.3 (File Compilation)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u21e4"}),(0,r.jsx)(n.strong,{children:"macroexpand-hook"}),(0,r.jsx)(n.em,{children:"\u21e4 Variable"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,r.jsxs)(n.p,{children:["a ",(0,r.jsx)(n.em,{children:"designator"})," for a ",(0,r.jsx)(n.em,{children:"function"})," of three ",(0,r.jsx)(n.em,{children:"arguments"}),": a ",(0,r.jsx)(n.em,{children:"macro function"}),", a ",(0,r.jsx)(n.em,{children:"macro form"}),", and an ",(0,r.jsx)(n.em,{children:"environment object"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,r.jsxs)(n.p,{children:["a ",(0,r.jsx)(n.em,{children:"designator"})," for a function that is equivalent to the ",(0,r.jsx)(n.em,{children:"function"})," ",(0,r.jsx)(n.strong,{children:"funcall"}),", but that might have additional ",(0,r.jsx)(n.em,{children:"implementation-dependent"})," side-e\u21b5ects."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Used as the expansion interface hook by ",(0,r.jsx)(n.strong,{children:"macroexpand-1"})," to control the ",(0,r.jsx)(n.em,{children:"macro expansion"})," process. When a ",(0,r.jsx)(n.em,{children:"macro form"})," is to be expanded, this ",(0,r.jsx)(n.em,{children:"function"})," is called with three arguments: the ",(0,r.jsx)(n.em,{children:"macro function"}),", the ",(0,r.jsx)(n.em,{children:"macro form"}),", and the ",(0,r.jsx)(n.em,{children:"environment"})," in which the ",(0,r.jsx)(n.em,{children:"macro form"})," is to be expanded. The ",(0,r.jsx)(n.em,{children:"environment object"})," has ",(0,r.jsx)(n.em,{children:"dynamic extent"}),"; the consequences are undefined if the ",(0,r.jsx)(n.em,{children:"environment object"})," is referred to outside the ",(0,r.jsx)(n.em,{children:"dynamic extent"})," of the macro expansion function."]}),"\n",(0,r.jsx)(n.p,{children:"Evaluation and"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(defun hook (expander form env) \n  (format t "Now expanding: ~S~%" form) \n  (funcall expander form env)) *!* HOOK \n(defmacro machook (x y) \u2018(/ (+ ,x ,y) 2)) *!* MACHOOK \n(macroexpand \u2019(machook 1 2)) *!* (/ (+ 1 2) 2), *true* \n(let ((\\*macroexpand-hook\\* #\u2019hook)) (macroexpand \u2019(machook 1 2))) \n\u25b7 Now expanding (MACHOOK 1 2) \n*!* (/ (+ 1 2) 2), *true* \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"macroexpand"}),", ",(0,r.jsx)(n.strong,{children:"macroexpand-1"}),", ",(0,r.jsx)(n.strong,{children:"funcall"}),", Section 3.1 (Evaluation)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The net e\u21b5ect of the chosen initial value is to just invoke the ",(0,r.jsx)(n.em,{children:"macro function"}),", giving it the ",(0,r.jsx)(n.em,{children:"macro form"})," and ",(0,r.jsx)(n.em,{children:"environment"})," as its two arguments."]}),"\n",(0,r.jsxs)(n.p,{children:["Users or user programs can ",(0,r.jsx)(n.em,{children:"assign"})," this ",(0,r.jsx)(n.em,{children:"variable"})," to customize or trace the ",(0,r.jsx)(n.em,{children:"macro expansion"})," mechanism. Note, however, that this ",(0,r.jsx)(n.em,{children:"variable"})," is a global resource, potentially shared by multiple ",(0,r.jsx)(n.em,{children:"programs"}),"; as such, if any two ",(0,r.jsx)(n.em,{children:"programs"})," depend for their correctness on the setting of this ",(0,r.jsx)(n.em,{children:"variable"}),", those ",(0,r.jsx)(n.em,{children:"programs"})," may not be able to run in the same ",(0,r.jsx)(n.em,{children:"Lisp image"}),". For this reason, it is frequently best to confine its uses to debugging situations."]}),"\n",(0,r.jsxs)(n.p,{children:["Users who put their own function into ",(0,r.jsx)(n.strong,{children:"*macroexpand-hook*"})," should consider saving the previous value of the hook, and calling that value from their own."]})]})}function t(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const l={title:"symbol-macrolet"},c="symbol-macrolet",a={id:"chap-3/d-i-dictionary/symbol-macrolet_special-operator",title:"symbol-macrolet",description:"Expanded Reference: symbol-macrolet",source:"@site/docs/chap-3/d-i-dictionary/symbol-macrolet_special-operator.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/symbol-macrolet_special-operator",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/symbol-macrolet_special-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/symbol-macrolet_special-operator.md",tags:[],version:"current",frontMatter:{title:"symbol-macrolet"},sidebar:"tutorialSidebar",previous:{title:"special",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/special_declaration"},next:{title:"the",permalink:"/cl-language-reference/docs/chap-3/d-i-dictionary/the_special-operator"}},d={},h=[{value:"Expanded Reference: symbol-macrolet",id:"expanded-reference-symbol-macrolet",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"symbol-macrolet",children:"symbol-macrolet"}),"\n","\n","\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-symbol-macrolet",children:"Expanded Reference: symbol-macrolet"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(symbol-macrolet )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var r=s(67294);const o={},i=r.createContext(o);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);