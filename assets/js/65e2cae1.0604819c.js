"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[7978],{73987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=t(85893),c=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"check-type"})," ",(0,r.jsx)(n.em,{children:"Macro"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"check-type"})," ",(0,r.jsx)(n.em,{children:"place typespec"})," [",(0,r.jsx)(n.em,{children:"string"}),"] \u2192 ",(0,r.jsx)(n.strong,{children:"nil"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"place"}),"\u2014a ",(0,r.jsx)(n.em,{children:"place"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"typespec"}),"\u2014a ",(0,r.jsx)(n.em,{children:"type specifier"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"string"}),"\u2014a ",(0,r.jsx)(n.em,{children:"string"}),"; evaluated."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"check-type"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"check-type"})," signals a ",(0,r.jsx)(n.em,{children:"correctable error"})," of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if the contents of ",(0,r.jsx)(n.em,{children:"place"})," are not of the type ",(0,r.jsx)(n.em,{children:"typespec"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"check-type"})," can return only if the ",(0,r.jsx)(n.strong,{children:"store-value"})," ",(0,r.jsx)(n.em,{children:"restart"})," is invoked, either explicitly from a handler or implicitly as one of the options offered by the debugger. If the ",(0,r.jsx)(n.strong,{children:"store-value"})," ",(0,r.jsx)(n.em,{children:"restart"})," is invoked, ",(0,r.jsx)(n.strong,{children:"check-type"})," stores the new value that is the argument to the ",(0,r.jsx)(n.em,{children:"restart"})," invocation (or that is prompted for interactively by the debugger) in ",(0,r.jsx)(n.em,{children:"place"})," and starts over, checking the type of the new value and signaling another error if it is still not of the desired ",(0,r.jsx)(n.em,{children:"type"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The first time ",(0,r.jsx)(n.em,{children:"place"})," is ",(0,r.jsx)(n.em,{children:"evaluated"}),", it is ",(0,r.jsx)(n.em,{children:"evaluated"})," by normal evaluation rules. It is later ",(0,r.jsx)(n.em,{children:"evaluated"})," as a ",(0,r.jsx)(n.em,{children:"place"})," if the type check fails and the ",(0,r.jsx)(n.strong,{children:"store-value"})," ",(0,r.jsx)(n.em,{children:"restart"})," is used; see Section 5.1.1.1 (Evaluation of Subforms to Places)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"string"})," should be an English description of the type, starting with an indefinite article (\u201ca\u201d or \u201can\u201d). If ",(0,r.jsx)(n.em,{children:"string"})," is not supplied, it is computed automatically from ",(0,r.jsx)(n.em,{children:"typespec"}),". The automatically generated message mentions ",(0,r.jsx)(n.em,{children:"place"}),", its contents, and the desired type. An implementation may choose to generate a somewhat differently worded error message if it recognizes that ",(0,r.jsx)(n.em,{children:"place"})," is of a particular form, such as one of the arguments to the function that called ",(0,r.jsx)(n.strong,{children:"check-type"}),". ",(0,r.jsx)(n.em,{children:"string"})," is allowed because some applications of ",(0,r.jsx)(n.strong,{children:"check-type"})," may require a more specific description of what is wanted than can be generated automatically from ",(0,r.jsx)(n.em,{children:"typespec"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(setq aardvarks \u2019(sam harry fred)) \n\u2192 (SAM HARRY FRED) \n(check-type aardvarks (array \\* (3))) \n\u25b7 Error: The value of AARDVARKS, (SAM HARRY FRED), \n\u25b7 is not a 3-long array. \n\u25b7 To continue, type :CONTINUE followed by an option number: \n\u25b7 1: Specify a value to use instead. \n\u25b7 2: Return to Lisp Toplevel. \n\u25b7 Debug> :CONTINUE 1 \n\u25b7 Use Value: #(SAM FRED HARRY) \n\u2192 NIL \naardvarks \n\u2192 #<ARRAY-T-3 13571> \n(map \u2019list #\u2019identity aardvarks) \n\u2192 (SAM FRED HARRY) \n(setq aardvark-count \u2019foo) \n\u2192 FOO \n(check-type aardvark-count (integer 0 \\*) "A positive integer") \n\u25b7 Error: The value of AARDVARK-COUNT, FOO, is not a positive integer. \n\u25b7 To continue, type :CONTINUE followed by an option number: \n\u25b7 1: Specify a value to use instead. \n\u25b7 2: Top level. \n\n\n\n**check-type** \n\u25b7 Debug> :CONTINUE 2 \n(defmacro define-adder (name amount) \n  (check-type name (and symbol (not null)) "a name for an adder function") (check-type amount integer) \n  \u2018(defun ,name (x) (+ x ,amount))) \n(macroexpand \u2019(define-adder add3 3)) \n\u2192 (defun add3 (x) (+ x 3)) \n(macroexpand \u2019(define-adder 7 7)) \n\u25b7 Error: The value of NAME, 7, is not a name for an adder function. \u25b7 To continue, type :CONTINUE followed by an option number: \n\u25b7 1: Specify a value to use instead. \n\u25b7 2: Top level. \n\u25b7 Debug> :Continue 1 \n\u25b7 Specify a value to use instead. \n\u25b7 Type a form to be evaluated and used instead: \u2019ADD7 \n\u2192 (defun add7 (x) (+ x 7)) \n(macroexpand \u2019(define-adder add5 something)) \n\u25b7 Error: The value of AMOUNT, SOMETHING, is not an integer. \n\u25b7 To continue, type :CONTINUE followed by an option number: \n\u25b7 1: Specify a value to use instead. \n\u25b7 2: Top level. \n\u25b7 Debug> :Continue 1 \n\u25b7 Type a form to be evaluated and used instead: 5 \n\u2192 (defun add5 (x) (+ x 5)) \nControl is transferred to a handler. \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsx)(n.p,{children:"The debugger might be entered."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"*break-on-signals*"})}),"\n",(0,r.jsx)(n.p,{children:"The implementation."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 9.1 (Condition System Concepts)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["(check-type ",(0,r.jsx)(n.em,{children:"place typespec"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u2261"})," (assert (typep ",(0,r.jsx)(n.em,{children:"place"})," \u2019",(0,r.jsx)(n.em,{children:"typespec"}),") (",(0,r.jsx)(n.em,{children:"place"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["\u2019type-error ",":datum"," ",(0,r.jsx)(n.em,{children:"place"})," ",":expected-type"," \u2019",(0,r.jsx)(n.em,{children:"typespec"}),")"]})]})}function i(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const a={title:"check-type"},o="check-type",d={id:"chap-9/j-c-dictionary/check-type_macro",title:"check-type",description:"Expanded Reference: check-type",source:"@site/docs/chap-9/j-c-dictionary/check-type_macro.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/check-type_macro",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/check-type_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/check-type_macro.md",tags:[],version:"current",frontMatter:{title:"check-type"},sidebar:"tutorialSidebar",previous:{title:"cerror",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/cerror_function"},next:{title:"compute-restarts",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/compute-restarts_function"}},l={},p=[{value:"Expanded Reference: check-type",id:"expanded-reference-check-type",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"check-type",children:"check-type"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-check-type",children:"Expanded Reference: check-type"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(check-type )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const c={},s=r.createContext(c);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);