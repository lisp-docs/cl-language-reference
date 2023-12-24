"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[34291],{22014:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>m});var r=i(85893),d=i(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"define-modify-macro"})," ",(0,r.jsx)(i,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"Macro"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"define-modify-macro",children:(0,r.jsx)("b",{children:"define-modify-macro"})})," ",(0,r.jsx)(n.em,{children:"name lambda-list function"})," [",(0,r.jsx)(n.em,{children:"documentation"}),"] ",(0,r.jsx)(n.em,{children:"! name"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})}),"\u2014a ",(0,r.jsx)(i,{styled:!0,term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"lambda-list"}),"\u2014a ",(0,r.jsx)(n.em,{children:"define-modify-macro lambda list"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})}),"\u2014a ",(0,r.jsx)(i,{styled:!0,term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"documentation"}),"\u2014a ",(0,r.jsx)(i,{styled:!0,term:"string",children:(0,r.jsx)("i",{children:"string"})}),"; not evaluated."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"define-modify-macro",children:(0,r.jsx)("b",{children:"define-modify-macro"})})," defines a ",(0,r.jsx)(i,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"macro"})})," named ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," to ",(0,r.jsx)(i,{styled:!0,term:"read",children:(0,r.jsx)("i",{children:"read"})})," and ",(0,r.jsx)(i,{styled:!0,term:"write",children:(0,r.jsx)("i",{children:"write"})})," a ",(0,r.jsx)(i,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The arguments to the new ",(0,r.jsx)(i,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"macro"})})," are a ",(0,r.jsx)(i,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})}),", followed by the arguments that are supplied in ",(0,r.jsx)(n.em,{children:"lambda-list"}),". ",(0,r.jsx)(i,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"Macros"})})," defined with ",(0,r.jsx)(i,{styled:!0,term:"define-modify-macro",children:(0,r.jsx)("b",{children:"define-modify-macro"})})," correctly pass the ",(0,r.jsx)(n.em,{children:"environment parameter"})," to ",(0,r.jsx)(i,{styled:!0,term:"get-setf-expansion",children:(0,r.jsx)("b",{children:"get-setf-expansion"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(i,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"macro"})})," is invoked, ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," is applied to the old contents of the ",(0,r.jsx)(i,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})})," and the ",(0,r.jsx)(n.em,{children:"lambda-list"})," arguments to obtain the new value, and the ",(0,r.jsx)(i,{styled:!0,term:"place",children:(0,r.jsx)("i",{children:"place"})})," is updated to contain the result."]}),"\n",(0,r.jsxs)(n.p,{children:["Except for the issue of avoiding multiple evaluation (see below), the expansion of a ",(0,r.jsx)(i,{styled:!0,term:"define-modify-macro",children:(0,r.jsx)("b",{children:"define-modify-macro"})})," is equivalent to the following:"]}),"\n",(0,r.jsxs)(n.p,{children:["(defmacro ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," (reference . ",(0,r.jsx)(n.em,{children:"lambda-list"}),")"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"documentation"})}),"\n",(0,r.jsx)(n.p,{children:"\u2018(setf ,reference"}),"\n",(0,r.jsxs)(n.p,{children:["(",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("i",{children:"function"})})," ,reference ,",(0,r.jsx)(n.em,{children:"arg1"})," ,",(0,r.jsx)(n.em,{children:"arg2"})," ...)))"]}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.em,{children:"arg1"}),", ",(0,r.jsx)(n.em,{children:"arg2"}),", ..., are the parameters appearing in ",(0,r.jsx)(n.em,{children:"lambda-list"}),"; appropriate provision is made for a ",(0,r.jsx)(n.em,{children:"rest parameter"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(i,{styled:!0,term:"subform",children:(0,r.jsx)("i",{children:"subforms"})})," of the macro calls defined by ",(0,r.jsx)(i,{styled:!0,term:"define-modify-macro",children:(0,r.jsx)("b",{children:"define-modify-macro"})})," are evaluated as specified in Section 5.1.1.1 (Evaluation of Subforms to Places)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Documentation"})," is attached as a ",(0,r.jsx)(n.em,{children:"documentation string"})," to ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})})," (as kind ",(0,r.jsx)(i,{styled:!0,term:"function",children:(0,r.jsx)("b",{children:"function"})}),") and to the ",(0,r.jsx)(n.em,{children:"macro function"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If a ",(0,r.jsx)(i,{styled:!0,term:"define-modify-macro",children:(0,r.jsx)("b",{children:"define-modify-macro"})})," ",(0,r.jsx)(i,{styled:!0,term:"form",children:(0,r.jsx)("i",{children:"form"})})," appears as a ",(0,r.jsx)(n.em,{children:"top level form"}),", the ",(0,r.jsx)(i,{styled:!0,term:"compiler",children:(0,r.jsx)("i",{children:"compiler"})})," must store the ",(0,r.jsx)(i,{styled:!0,term:"macro",children:(0,r.jsx)("i",{children:"macro"})})," definition at compile time, so that occurrences of the macro later on in the file can be expanded correctly."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(define-modify-macro appendf (&rest args) \n  append "Append onto list") *!* APPENDF \n(setq x \u2019(a b c) y x) *!* (A B C) \n(appendf x \u2019(d e f) \u2019(1 2 3)) *!* (A B C D E F 1 2 3) \nx *!* (A B C D E F 1 2 3) \ny *!* (A B C) \n(define-modify-macro new-incf (&optional (delta 1)) +) \n(define-modify-macro unionf (other-set &rest keywords) union) \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Eects:"})}),"\n",(0,r.jsxs)(n.p,{children:["A macro definition is assigned to ",(0,r.jsx)(i,{styled:!0,term:"name",children:(0,r.jsx)("i",{children:"name"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{styled:!0,term:"defsetf",children:(0,r.jsx)("b",{children:"defsetf"})}),", ",(0,r.jsx)(i,{styled:!0,term:"define-setf-expander",children:(0,r.jsx)("b",{children:"define-setf-expander"})}),", ",(0,r.jsx)(n.strong,{children:"documentation"}),", Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations)"]})]})}function c(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const t={title:"define-modify-macro"},o="define-modify-macro",l={id:"chap-5/f-d-dictionary/define-modify-macro_macro",title:"define-modify-macro",description:"Expanded Reference: define-modify-macro",source:"@site/docs/chap-5/f-d-dictionary/define-modify-macro_macro.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/define-modify-macro_macro",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/define-modify-macro_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/define-modify-macro_macro.md",tags:[],version:"current",frontMatter:{title:"define-modify-macro"},sidebar:"tutorialSidebar",previous:{title:"defconstant",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/defconstant_macro"},next:{title:"define-setf-expander",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/define-setf-expander_macro"}},a={},m=[{value:"Expanded Reference: define-modify-macro",id:"expanded-reference-define-modify-macro",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"define-modify-macro",children:"define-modify-macro"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-define-modify-macro",children:"Expanded Reference: define-modify-macro"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(define-modify-macro )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>c});var r=i(67294);const d={},s=r.createContext(d);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);