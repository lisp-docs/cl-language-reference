"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[88425],{75260:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var c=n(85893),r=n(11151);function t(e){const s={del:"del",em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"typecase, ctypecase, etypecase"})," ",(0,c.jsx)(s.em,{children:"Macro"})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"typecase"})," ",(0,c.jsx)(s.em,{children:"keyform {\u2193normal-clause}"}),"* [",(0,c.jsx)(s.em,{children:"\u2193otherwise-clause"}),"] ",(0,c.jsx)(s.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"ctypecase"})," ",(0,c.jsx)(s.em,{children:"keyplace {\u2193normal-clause}"}),"* ",(0,c.jsx)(s.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"typecase, ctypecase, etypecase"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"etypecase"})," ",(0,c.jsx)(s.em,{children:"keyform {\u2193normal-clause}"}),"* ",(0,c.jsx)(s.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"normal-clause::"}),"=(",(0,c.jsx)(s.em,{children:"type {form}"}),"*)"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"otherwise-clause::"}),"=(",(0,c.jsx)(s.em,{children:"{otherwise | t} {form}"}),"*)"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"clause::"}),"=",(0,c.jsx)(s.em,{children:"normal-clause | otherwise-clause"})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"keyform"}),"\u2014a ",(0,c.jsx)(s.em,{children:"form"}),"; evaluated to produce a ",(0,c.jsx)(s.em,{children:"test-key"}),"."]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"keyplace"}),"\u2014a ",(0,c.jsx)(s.em,{children:"form"}),"; evaluated initially to produce a ",(0,c.jsx)(s.em,{children:"test-key"}),". Possibly also used later as a ",(0,c.jsx)(s.em,{children:"place"})," if no ",(0,c.jsx)(s.em,{children:"types"})," match."]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"test-key"}),"\u2014an object produced by evaluating ",(0,c.jsx)(s.em,{children:"keyform"})," or ",(0,c.jsx)(s.em,{children:"keyplace"}),"."]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"type"}),"\u2014a ",(0,c.jsx)(s.em,{children:"type specifier"})," ."]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"forms"}),"\u2014an ",(0,c.jsx)(s.em,{children:"implicit progn"}),"."]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"results"}),"\u2014the ",(0,c.jsx)(s.em,{children:"values"})," returned by the ",(0,c.jsx)(s.em,{children:"forms"})," in the matching ",(0,c.jsx)(s.em,{children:"clause"}),"."]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(s.p,{children:["These ",(0,c.jsx)(s.em,{children:"macros"})," allow the conditional execution of a body of ",(0,c.jsx)(s.em,{children:"forms"})," in a ",(0,c.jsx)(s.em,{children:"clause"})," that is selected by matching the ",(0,c.jsx)(s.em,{children:"test-key"})," on the basis of its ",(0,c.jsx)(s.em,{children:"type"}),"."]}),"\n",(0,c.jsxs)(s.p,{children:["The ",(0,c.jsx)(s.em,{children:"keyform"})," or ",(0,c.jsx)(s.em,{children:"keyplace"})," is ",(0,c.jsx)(s.em,{children:"evaluated"})," to produce the ",(0,c.jsx)(s.em,{children:"test-key"}),"."]}),"\n",(0,c.jsxs)(s.p,{children:["Each of the ",(0,c.jsx)(s.em,{children:"normal-clauses"})," is then considered in turn. If the ",(0,c.jsx)(s.em,{children:"test-key"})," is of the ",(0,c.jsx)(s.em,{children:"type"})," given by the ",(0,c.jsx)(s.em,{children:"clauses"}),"\u2019s ",(0,c.jsx)(s.em,{children:"type"}),", the ",(0,c.jsx)(s.em,{children:"forms"})," in that ",(0,c.jsx)(s.em,{children:"clause"})," are ",(0,c.jsx)(s.em,{children:"evaluated"})," as an ",(0,c.jsx)(s.em,{children:"implicit progn"}),", and the ",(0,c.jsx)(s.em,{children:"values"})," it returns are returned as the value of the ",(0,c.jsx)(s.strong,{children:"typecase"}),", ",(0,c.jsx)(s.strong,{children:"ctypecase"}),", or ",(0,c.jsx)(s.strong,{children:"etypecase"})," ",(0,c.jsx)(s.em,{children:"form"}),"."]}),"\n",(0,c.jsxs)(s.p,{children:["These ",(0,c.jsx)(s.em,{children:"macros"})," differ only in their ",(0,c.jsx)(s.em,{children:"behavior"})," when no ",(0,c.jsx)(s.em,{children:"normal-clause"})," matches; specifically:"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"typecase"})}),"\n",(0,c.jsxs)(s.p,{children:["If no ",(0,c.jsx)(s.em,{children:"normal-clause"})," matches, and there is an ",(0,c.jsx)(s.em,{children:"otherwise-clause"}),", then that ",(0,c.jsx)(s.em,{children:"otherwise-clause"})," automatically matches; the ",(0,c.jsx)(s.em,{children:"forms"})," in that ",(0,c.jsx)(s.em,{children:"clause"})," are ",(0,c.jsx)(s.em,{children:"evaluated"})," as an ",(0,c.jsx)(s.em,{children:"implicit progn"}),", and the ",(0,c.jsx)(s.em,{children:"values"})," it returns are returned as the value of the ",(0,c.jsx)(s.strong,{children:"typecase"}),"."]}),"\n",(0,c.jsxs)(s.p,{children:["If there is no ",(0,c.jsx)(s.em,{children:"otherwise-clause"}),", ",(0,c.jsx)(s.strong,{children:"typecase"})," returns ",(0,c.jsx)(s.strong,{children:"nil"}),"."]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"ctypecase"})}),"\n",(0,c.jsxs)(s.p,{children:["If no ",(0,c.jsx)(s.em,{children:"normal-clause"})," matches, a ",(0,c.jsx)(s.em,{children:"correctable error"})," of ",(0,c.jsx)(s.em,{children:"type"})," ",(0,c.jsx)(s.strong,{children:"type-error"})," is signaled. The offending datum is the ",(0,c.jsx)(s.em,{children:"test-key"})," and the expected type is ",(0,c.jsx)(s.em,{children:"type equivalent"})," to (or ",(0,c.jsx)(s.em,{children:"type1 type2"})," ...). The ",(0,c.jsx)(s.strong,{children:"store-value"})," ",(0,c.jsx)(s.em,{children:"restart"})," can be used to correct the error."]}),"\n",(0,c.jsxs)(s.p,{children:["If the ",(0,c.jsx)(s.strong,{children:"store-value"})," ",(0,c.jsx)(s.em,{children:"restart"})," is invoked, its ",(0,c.jsx)(s.em,{children:"argument"})," becomes the new ",(0,c.jsx)(s.em,{children:"test-key"}),", and is stored Data and Control"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"typecase, ctypecase, etypecase"})}),"\n",(0,c.jsxs)(s.p,{children:["in ",(0,c.jsx)(s.em,{children:"keyplace"})," as if by (setf ",(0,c.jsx)(s.em,{children:"keyplace test-key"}),"). Then ",(0,c.jsx)(s.strong,{children:"ctypecase"})," starts over, considering each ",(0,c.jsx)(s.em,{children:"clause"})," anew."]}),"\n",(0,c.jsxs)(s.p,{children:["If the ",(0,c.jsx)(s.strong,{children:"store-value"})," ",(0,c.jsx)(s.em,{children:"restart"})," is invoked interactively, the user is prompted for a new ",(0,c.jsx)(s.em,{children:"test-key"})," to use."]}),"\n",(0,c.jsxs)(s.p,{children:["The subforms of ",(0,c.jsx)(s.em,{children:"keyplace"})," might be evaluated again if none of the cases holds."]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"etypecase"})}),"\n",(0,c.jsxs)(s.p,{children:["If no ",(0,c.jsx)(s.em,{children:"normal-clause"})," matches, a ",(0,c.jsx)(s.em,{children:"non-correctable error"})," of ",(0,c.jsx)(s.em,{children:"type"})," ",(0,c.jsx)(s.strong,{children:"type-error"})," is signaled. The offending datum is the ",(0,c.jsx)(s.em,{children:"test-key"})," and the expected type is ",(0,c.jsx)(s.em,{children:"type equivalent"})," to (or ",(0,c.jsx)(s.em,{children:"type1 type2"})," ...)."]}),"\n",(0,c.jsxs)(s.p,{children:["Note that in contrast with ",(0,c.jsx)(s.strong,{children:"ctypecase"}),", the caller of ",(0,c.jsx)(s.strong,{children:"etypecase"})," may rely on the fact that ",(0,c.jsx)(s.strong,{children:"etypecase"})," does not return if a ",(0,c.jsx)(s.em,{children:"normal-clause"})," does not match."]}),"\n",(0,c.jsxs)(s.p,{children:["In all three cases, is permissible for more than one ",(0,c.jsx)(s.em,{children:"clause"})," to specify a matching ",(0,c.jsx)(s.em,{children:"type"}),", particularly if one is a ",(0,c.jsx)(s.em,{children:"subtype"})," of another; the earliest applicable ",(0,c.jsx)(s.em,{children:"clause"})," is chosen."]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(s.p,{children:";;; (Note that the parts of this example which use TYPE-OF"}),"\n",(0,c.jsx)(s.p,{children:";;; are implementation-dependent.)"}),"\n",(0,c.jsx)(s.p,{children:"(defun what-is-it (x)"}),"\n",(0,c.jsxs)(s.p,{children:['(format t "~&~S is ',(0,c.jsx)(s.del,{children:"A."}),'%"']}),"\n",(0,c.jsx)(s.p,{children:"x (typecase x"}),"\n",(0,c.jsx)(s.p,{children:'(float "a float")'}),"\n",(0,c.jsx)(s.p,{children:'(null "a symbol, boolean false, or the empty list")'}),"\n",(0,c.jsx)(s.p,{children:'(list "a list")'}),"\n",(0,c.jsxs)(s.p,{children:['(t (format nil "a(n) ~(',(0,c.jsx)(s.del,{children:"A"}),')" (type-of x))))))']}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"\u2192"})," WHAT-IS-IT"]}),"\n",(0,c.jsx)(s.p,{children:"(map \u2019nil #\u2019what-is-it \u2019(nil (a b) 7.0 7 box))"}),"\n",(0,c.jsx)(s.p,{children:"\u25b7 NIL is a symbol, boolean false, or the empty list."}),"\n",(0,c.jsx)(s.p,{children:"\u25b7 (A B) is a list."}),"\n",(0,c.jsx)(s.p,{children:"\u25b7 7.0 is a float."}),"\n",(0,c.jsx)(s.p,{children:"\u25b7 7 is a(n) integer."}),"\n",(0,c.jsx)(s.p,{children:"\u25b7 BOX is a(n) symbol."}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"\u2192"})," NIL"]}),"\n",(0,c.jsx)(s.p,{children:"(setq x 1/3)"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"\u2192"})," 1/3"]}),"\n",(0,c.jsx)(s.p,{children:"(ctypecase x"}),"\n",(0,c.jsx)(s.p,{children:"(integer (* x 4))"}),"\n",(0,c.jsx)(s.p,{children:"(symbol (symbol-value x)))"}),"\n",(0,c.jsx)(s.p,{children:"\u25b7 Error: The value of X, 1/3, is neither an integer nor a symbol."}),"\n",(0,c.jsxs)(s.p,{children:["\u25b7 To continue, type ",":CONTINUE"," followed by an option number:"]}),"\n",(0,c.jsx)(s.p,{children:"\u25b7 1: Specify a value to use instead."})]})}function i(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}const a={},l="typecase, ctypecase, etypecase",d={id:"chap-5/f-d-dictionary/typecaseaactypecaseaaetypecase",title:"typecase, ctypecase, etypecase",description:"Expanded Reference: typecase, ctypecase, etypecase",source:"@site/docs/chap-5/f-d-dictionary/typecaseaactypecaseaaetypecase.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/typecaseaactypecaseaaetypecase",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/typecaseaactypecaseaaetypecase",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/typecaseaactypecaseaaetypecase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"throw",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/throw"},next:{title:"unwind-protect",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/unwindprotect"}},h={},o=[{value:"Expanded Reference: typecase, ctypecase, etypecase",id:"expanded-reference-typecase-ctypecase-etypecase",level:2}];function p(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"typecase-ctypecase-etypecase",children:"typecase, ctypecase, etypecase"}),"\n","\n","\n",(0,c.jsx)(i,{}),"\n",(0,c.jsx)(s.h2,{id:"expanded-reference-typecase-ctypecase-etypecase",children:"Expanded Reference: typecase, ctypecase, etypecase"}),"\n",(0,c.jsx)(s.admonition,{type:"tip",children:(0,c.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-lisp",children:"(typecase, ctypecase, etypecase )\n"})})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var c=n(67294);const r={},t=c.createContext(r);function i(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);