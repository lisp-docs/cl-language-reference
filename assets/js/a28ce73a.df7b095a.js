"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[8330],{55743:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=r(85893),c=r(11151);function o(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...n.components},{ClLinks:r,DictionaryLink:o,GlossaryTerm:t}=e;return r||s("ClLinks",!0),o||s("DictionaryLink",!0),t||s("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"macro-function"})," ",(0,i.jsx)(r,{term:"accessor",children:(0,i.jsx)("i",{children:"Accessor"})})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(r,{term:"macro-function",children:(0,i.jsx)("b",{children:"macro-function"})})," ",(0,i.jsx)(r,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," &optional ",(0,i.jsx)(e.em,{children:"environment \u2192 function"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"(setf (macro-function"})," ",(0,i.jsx)(e.em,{children:"symbol"})," &optional ",(0,i.jsx)(e.em,{children:"environment"}),"**)** ",(0,i.jsx)(e.em,{children:"new-function"}),"**)**"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(r,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),"\u2014a ",(0,i.jsx)(r,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(r,{term:"environment",children:(0,i.jsx)("i",{children:"environment"})}),"\u2014an ",(0,i.jsx)(t,{styled:!0,term:"environment object",children:(0,i.jsx)("i",{children:"environment object"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(r,{term:"function",children:(0,i.jsx)("i",{children:"function"})}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"macro function",children:(0,i.jsx)("i",{children:"macro function"})})," or ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"new-function"}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"macro function",children:(0,i.jsx)("i",{children:"macro function"})}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(e.p,{children:["Determines whether ",(0,i.jsx)(r,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," has a function definition as a macro in the specified ",(0,i.jsx)(r,{term:"environment",children:(0,i.jsx)("i",{children:"environment"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["If so, the macro expansion function, a function of two arguments, is returned. If ",(0,i.jsx)(r,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," has no function definition in the lexical environment ",(0,i.jsx)(r,{term:"environment",children:(0,i.jsx)("i",{children:"environment"})}),", or its definition is not a ",(0,i.jsx)(r,{term:"macro",children:(0,i.jsx)("i",{children:"macro"})}),", ",(0,i.jsx)(r,{term:"macro-function",children:(0,i.jsx)("b",{children:"macro-function"})})," returns ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["It is possible for both ",(0,i.jsx)(r,{term:"macro-function",children:(0,i.jsx)("b",{children:"macro-function"})})," and ",(0,i.jsx)(r,{term:"special-operator-p",children:(0,i.jsx)("b",{children:"special-operator-p"})})," to return ",(0,i.jsx)(r,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," of ",(0,i.jsx)(r,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})}),". The ",(0,i.jsx)(r,{term:"macro",children:(0,i.jsx)("i",{children:"macro"})})," definition must be available for use by programs that understand only the standard Common Lisp ",(0,i.jsx)(t,{styled:!0,term:"special form",children:(0,i.jsx)("i",{children:"special forms"})}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:"(defmacro macfun (x) \u2019(macro-function \u2019macfun)) \u2192 MACFUN \n(not (macro-function \u2019macfun)) \u2192 false \n(macrolet ((foo (&environment env) \n\t     (if (macro-function \u2019bar env) \n\t\t \u201dyes \n\t\t  \u201dno))) \n  (list (foo) \n\t(macrolet ((bar () :beep)) \n\t  (foo)))) \n\u2192 (NO YES) \n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(e.p,{children:["(setf macro-function), ",(0,i.jsx)(r,{term:"defmacro",children:(0,i.jsx)("b",{children:"defmacro"})}),", and ",(0,i.jsx)(r,{term:"macrolet",children:(0,i.jsx)("b",{children:"macrolet"})}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(e.p,{children:["The consequences are undefined if ",(0,i.jsx)(r,{term:"environment",children:(0,i.jsx)("i",{children:"environment"})})," is ",(0,i.jsx)(r,{term:"non-nil",children:(0,i.jsx)("i",{children:"non-nil"})})," in a use of ",(0,i.jsx)(r,{term:"setf",children:(0,i.jsx)("b",{children:"setf"})})," of ",(0,i.jsx)(r,{term:"macro-function",children:(0,i.jsx)("b",{children:"macro-function"})}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(r,{term:"defmacro",children:(0,i.jsx)("b",{children:"defmacro"})}),", Section 3.1 (Evaluation)"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(r,{term:"setf",children:(0,i.jsx)("b",{children:"setf"})})," can be used with ",(0,i.jsx)(r,{term:"macro-function",children:(0,i.jsx)("b",{children:"macro-function"})})," to install a ",(0,i.jsx)(r,{term:"macro",children:(0,i.jsx)("i",{children:"macro"})})," as a symbol\u2019s global function definition: (setf (macro-function symbol) fn)"]}),"\n",(0,i.jsxs)(e.p,{children:["The value installed must be a ",(0,i.jsx)(r,{term:"function",children:(0,i.jsx)("i",{children:"function"})})," that accepts two arguments, the entire macro call and an ",(0,i.jsx)(r,{term:"environment",children:(0,i.jsx)("i",{children:"environment"})}),", and computes the expansion for that call. Performing this operation causes ",(0,i.jsx)(r,{term:"symbol",children:(0,i.jsx)("i",{children:"symbol"})})," to have only that macro definition as its global function definition; any previous definition, whether as a ",(0,i.jsx)(r,{term:"macro",children:(0,i.jsx)("i",{children:"macro"})})," or as a ",(0,i.jsx)(r,{term:"function",children:(0,i.jsx)("i",{children:"function"})}),", is lost."]}),"\n",(0,i.jsx)(o,{styled:!0,term:"macroexpand, macroexpand-1",children:(0,i.jsx)("b",{children:"macroexpand, macroexpand-1"})})]})}function t(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}function s(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"macro-function"},a="macro-function",d={id:"chap-3/d-i-dictionary/macro-function_accessor",title:"macro-function",description:"Expanded Reference: macro-function",source:"@site/docs/chap-3/d-i-dictionary/macro-function_accessor.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/macro-function_accessor",permalink:"/cl-language-reference/chap-3/d-i-dictionary/macro-function_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/macro-function_accessor.md",tags:[],version:"current",frontMatter:{title:"macro-function"},sidebar:"tutorialSidebar",previous:{title:"locally",permalink:"/cl-language-reference/chap-3/d-i-dictionary/locally_special-operator"},next:{title:"macroexpand, macroexpand-1",permalink:"/cl-language-reference/chap-3/d-i-dictionary/macroexpand_macroexpand-1_function"}},m={},h=[{value:"Expanded Reference: macro-function",id:"expanded-reference-macro-function",level:2}];function x(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"macro-function",children:"macro-function"}),"\n","\n","\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(e.h2,{id:"expanded-reference-macro-function",children:"Expanded Reference: macro-function"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:"(macro-function )\n"})})]})}function j(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>s,a:()=>t});var i=r(67294);const c={},o=i.createContext(c);function t(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);