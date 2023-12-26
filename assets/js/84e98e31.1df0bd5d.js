"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[44016],{55818:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>x});var l=i(85893),r=i(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{DictionaryLink:i,GlossaryTerm:t}=n;return i||o("DictionaryLink",!0),t||o("GlossaryTerm",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"inline, notinline"})," ",(0,l.jsx)(t,{term:"declaration",children:(0,l.jsx)("i",{children:"Declaration"})})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,l.jsxs)(n.p,{children:["(inline ",(0,l.jsx)(n.em,{children:"{function-name}"}),"*)"]}),"\n",(0,l.jsxs)(n.p,{children:["(notinline ",(0,l.jsx)(n.em,{children:"{function-name}"}),"*)"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"function-name"}),"\u2014a ",(0,l.jsx)(t,{styled:!0,term:"function name",children:(0,l.jsx)("i",{children:"function name"})}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Valid Context:"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(t,{term:"declaration",children:(0,l.jsx)("i",{children:"declaration"})})," or ",(0,l.jsx)(t,{term:"proclamation",children:(0,l.jsx)("i",{children:"proclamation"})})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Binding Types Aected:"})}),"\n",(0,l.jsx)(t,{term:"function",children:(0,l.jsx)("i",{children:"function"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Description:"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(i,{term:"inline",children:(0,l.jsx)("b",{children:"inline"})})," specifies that it is desirable for the compiler to produce inline calls to the ",(0,l.jsx)(t,{term:"function",children:(0,l.jsx)("i",{children:"functions"})})," named by ",(0,l.jsx)(n.em,{children:"function-names"}),"; that is, the code for a specified ",(0,l.jsx)(n.em,{children:"function-name"})," should be integrated into the calling routine, appearing \u201cin line\u201d in place of a procedure call. A compiler is free to ignore this declaration. ",(0,l.jsx)(i,{term:"inline",children:(0,l.jsx)("b",{children:"inline"})})," declarations never apply to variable ",(0,l.jsx)(t,{term:"binding",children:(0,l.jsx)("i",{children:"bindings"})}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["If one of the ",(0,l.jsx)(t,{term:"function",children:(0,l.jsx)("i",{children:"functions"})})," mentioned has a lexically apparent local definition (as made by ",(0,l.jsx)(i,{term:"flet",children:(0,l.jsx)("b",{children:"flet"})})," or ",(0,l.jsx)(i,{term:"labels",children:(0,l.jsx)("b",{children:"labels"})}),"), then the declaration applies to that local definition and not to the global function definition."]}),"\n",(0,l.jsx)(i,{styled:!0,term:"inline, notinline",children:(0,l.jsx)("b",{children:"inline, notinline"})}),"\n",(0,l.jsxs)(n.p,{children:["While no ",(0,l.jsx)(t,{styled:!0,term:"conforming implementation",children:(0,l.jsx)("i",{children:"conforming implementation"})})," is required to perform inline expansion of user-defined functions, those ",(0,l.jsx)(t,{term:"implementation",children:(0,l.jsx)("i",{children:"implementations"})})," that do attempt to recognize the following paradigm:"]}),"\n",(0,l.jsxs)(n.p,{children:["To define a ",(0,l.jsx)(t,{term:"function",children:(0,l.jsx)("i",{children:"function"})})," f that is not ",(0,l.jsx)(i,{term:"inline",children:(0,l.jsx)("b",{children:"inline"})})," by default but for which (declare (inline f)) will make ",(0,l.jsx)(n.em,{children:"f"})," be locally inlined, the proper definition sequence is:"]}),"\n",(0,l.jsx)(n.p,{children:"(declaim (inline f))"}),"\n",(0,l.jsx)(n.p,{children:"(defun f ...)"}),"\n",(0,l.jsx)(n.p,{children:"(declaim (notinline f))"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(i,{term:"inline",children:(0,l.jsx)("b",{children:"inline"})})," proclamation preceding the ",(0,l.jsx)(i,{term:"defun",children:(0,l.jsx)("b",{children:"defun"})})," ",(0,l.jsx)(t,{term:"form",children:(0,l.jsx)("i",{children:"form"})})," ensures that the ",(0,l.jsx)(t,{term:"compiler",children:(0,l.jsx)("i",{children:"compiler"})})," has the opportunity save the information necessary for inline expansion, and the ",(0,l.jsx)(i,{term:"notinline",children:(0,l.jsx)("b",{children:"notinline"})})," proclamation following the ",(0,l.jsx)(i,{term:"defun",children:(0,l.jsx)("b",{children:"defun"})})," ",(0,l.jsx)(t,{term:"form",children:(0,l.jsx)("i",{children:"form"})})," prevents f from being expanded inline everywhere."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(i,{term:"notinline",children:(0,l.jsx)("b",{children:"notinline"})})," specifies that it is undesirable to compile the ",(0,l.jsx)(t,{term:"function",children:(0,l.jsx)("i",{children:"functions"})})," named by ",(0,l.jsx)(n.em,{children:"function-names"})," in-line. A compiler is not free to ignore this declaration; calls to the specified functions must be implemented as out-of-line subroutine calls."]}),"\n",(0,l.jsxs)(n.p,{children:["If one of the ",(0,l.jsx)(t,{term:"function",children:(0,l.jsx)("i",{children:"functions"})})," mentioned has a lexically apparent local definition (as made by ",(0,l.jsx)(i,{term:"flet",children:(0,l.jsx)("b",{children:"flet"})})," or ",(0,l.jsx)(i,{term:"labels",children:(0,l.jsx)("b",{children:"labels"})}),"), then the declaration applies to that local definition and not to the global function definition."]}),"\n",(0,l.jsxs)(n.p,{children:["In the presence of a ",(0,l.jsx)(t,{styled:!0,term:"compiler macro",children:(0,l.jsx)("i",{children:"compiler macro"})})," definition for ",(0,l.jsx)(n.em,{children:"function-name"}),", a ",(0,l.jsx)(i,{term:"notinline",children:(0,l.jsx)("b",{children:"notinline"})})," declaration prevents that ",(0,l.jsx)(t,{styled:!0,term:"compiler macro",children:(0,l.jsx)("i",{children:"compiler macro"})})," from being used. An ",(0,l.jsx)(i,{term:"inline",children:(0,l.jsx)("b",{children:"inline"})})," declaration may be used to encourage use of ",(0,l.jsx)(t,{styled:!0,term:"compiler macro",children:(0,l.jsx)("i",{children:"compiler macro"})})," definitions. ",(0,l.jsx)(i,{term:"inline",children:(0,l.jsx)("b",{children:"inline"})})," and ",(0,l.jsx)(i,{term:"notinline",children:(0,l.jsx)("b",{children:"notinline"})})," declarations otherwise have no e\u21b5ect when the lexically visible definition of ",(0,l.jsx)(n.em,{children:"function-name"})," is a ",(0,l.jsx)(t,{term:"macro",children:(0,l.jsx)("i",{children:"macro"})})," definition."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(i,{term:"inline",children:(0,l.jsx)("b",{children:"inline"})})," and ",(0,l.jsx)(i,{term:"notinline",children:(0,l.jsx)("b",{children:"notinline"})})," declarations can be ",(0,l.jsx)(t,{styled:!0,term:"free declaration",children:(0,l.jsx)("i",{children:"free declarations"})})," or ",(0,l.jsx)(t,{styled:!0,term:"bound declaration",children:(0,l.jsx)("i",{children:"bound declarations"})}),". ",(0,l.jsx)(i,{term:"inline",children:(0,l.jsx)("b",{children:"inline"})})," and ",(0,l.jsx)(i,{term:"notinline",children:(0,l.jsx)("b",{children:"notinline"})})," declarations of functions that appear before the body of a ",(0,l.jsx)(i,{term:"flet",children:(0,l.jsx)("b",{children:"flet"})})," or ",(0,l.jsx)(i,{term:"labels",children:(0,l.jsx)("b",{children:"labels"})})," ",(0,l.jsx)(t,{term:"form",children:(0,l.jsx)("i",{children:"form"})})," that defines that function are ",(0,l.jsx)(t,{styled:!0,term:"bound declaration",children:(0,l.jsx)("i",{children:"bound declarations"})}),". Such declarations in other contexts are ",(0,l.jsx)(t,{styled:!0,term:"free declaration",children:(0,l.jsx)("i",{children:"free declarations"})}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lisp",children:";; The globally defined function DISPATCH should be open-coded, \n;; if the implementation supports inlining, unless a NOTINLINE \n;; declaration overrides this effect. \n(declaim (inline dispatch)) \n(defun dispatch (x) (funcall (get (car x) \u2019dispatch) x)) \n;; Here is an example where inlining would be encouraged. \n(defun top-level-1 () (dispatch (read-command))) \n;; Here is an example where inlining would be prohibited. \n(defun top-level-2 () \n  (declare (notinline dispatch)) \n  (dispatch (read-command))) \n;; Here is an example where inlining would be prohibited. \n(declaim (notinline dispatch)) \n(defun top-level-3 () (dispatch (read-command))) \n;; Here is an example where inlining would be encouraged. \nEvaluation and \n\n(defun top-level-4 () \n  (declare (inline dispatch)) \n  (dispatch (read-command))) \n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(i,{term:"declare",children:(0,l.jsx)("b",{children:"declare"})}),", ",(0,l.jsx)(i,{term:"declaim",children:(0,l.jsx)("b",{children:"declaim"})}),", ",(0,l.jsx)(i,{term:"proclaim",children:(0,l.jsx)("b",{children:"proclaim"})})]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"inline, notinline"},s="inline, notinline",a={id:"chap-3/d-i-dictionary/inline_notinline_declaration",title:"inline, notinline",description:"Expanded Reference: inline, notinline",source:"@site/docs/chap-3/d-i-dictionary/inline_notinline_declaration.md",sourceDirName:"chap-3/d-i-dictionary",slug:"/chap-3/d-i-dictionary/inline_notinline_declaration",permalink:"/cl-language-reference/chap-3/d-i-dictionary/inline_notinline_declaration",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-i-dictionary/inline_notinline_declaration.md",tags:[],version:"current",frontMatter:{title:"inline, notinline"},sidebar:"tutorialSidebar",previous:{title:"ignore, ignorable",permalink:"/cl-language-reference/chap-3/d-i-dictionary/ignore_ignorable_declaration"},next:{title:"lambda",permalink:"/cl-language-reference/chap-3/d-i-dictionary/lambda_macro"}},h={},x=[{value:"Expanded Reference: inline, notinline",id:"expanded-reference-inline-notinline",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"inline-notinline",children:"inline, notinline"}),"\n","\n","\n",(0,l.jsx)(c,{}),"\n",(0,l.jsx)(n.h2,{id:"expanded-reference-inline-notinline",children:"Expanded Reference: inline, notinline"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lisp",children:"(inline, notinline )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var l=i(67294);const r={},t=l.createContext(r);function c(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);