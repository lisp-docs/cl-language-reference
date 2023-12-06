"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[48228],{77773:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=s(85893),t=s(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"typecase, ctypecase, etypecase"})," ",(0,r.jsx)(n.em,{children:"Macro"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"typecase"})," ",(0,r.jsx)(n.em,{children:"keyform {\u2193normal-clause}"}),"* [",(0,r.jsx)(n.em,{children:"\u2193otherwise-clause"}),"] ",(0,r.jsx)(n.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ctypecase"})," ",(0,r.jsx)(n.em,{children:"keyplace {\u2193normal-clause}"}),"* ",(0,r.jsx)(n.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"typecase, ctypecase, etypecase"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"etypecase"})," ",(0,r.jsx)(n.em,{children:"keyform {\u2193normal-clause}"}),"* ",(0,r.jsx)(n.em,{children:"\u2192 {result}"}),"*"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"normal-clause::"}),"=(",(0,r.jsx)(n.em,{children:"type {form}"}),"*)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"otherwise-clause::"}),"=(",(0,r.jsx)(n.em,{children:"{otherwise | t} {form}"}),"*)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"clause::"}),"=",(0,r.jsx)(n.em,{children:"normal-clause | otherwise-clause"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"keyform"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"; evaluated to produce a ",(0,r.jsx)(n.em,{children:"test-key"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"keyplace"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"; evaluated initially to produce a ",(0,r.jsx)(n.em,{children:"test-key"}),". Possibly also used later as a ",(0,r.jsx)(n.em,{children:"place"})," if no ",(0,r.jsx)(n.em,{children:"types"})," match."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"test-key"}),"\u2014an object produced by evaluating ",(0,r.jsx)(n.em,{children:"keyform"})," or ",(0,r.jsx)(n.em,{children:"keyplace"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"type"}),"\u2014a ",(0,r.jsx)(n.em,{children:"type specifier"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,r.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"results"}),"\u2014the ",(0,r.jsx)(n.em,{children:"values"})," returned by the ",(0,r.jsx)(n.em,{children:"forms"})," in the matching ",(0,r.jsx)(n.em,{children:"clause"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["These ",(0,r.jsx)(n.em,{children:"macros"})," allow the conditional execution of a body of ",(0,r.jsx)(n.em,{children:"forms"})," in a ",(0,r.jsx)(n.em,{children:"clause"})," that is selected by matching the ",(0,r.jsx)(n.em,{children:"test-key"})," on the basis of its ",(0,r.jsx)(n.em,{children:"type"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"keyform"})," or ",(0,r.jsx)(n.em,{children:"keyplace"})," is ",(0,r.jsx)(n.em,{children:"evaluated"})," to produce the ",(0,r.jsx)(n.em,{children:"test-key"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Each of the ",(0,r.jsx)(n.em,{children:"normal-clauses"})," is then considered in turn. If the ",(0,r.jsx)(n.em,{children:"test-key"})," is of the ",(0,r.jsx)(n.em,{children:"type"})," given by the ",(0,r.jsx)(n.em,{children:"clauses"}),"\u2019s ",(0,r.jsx)(n.em,{children:"type"}),", the ",(0,r.jsx)(n.em,{children:"forms"})," in that ",(0,r.jsx)(n.em,{children:"clause"})," are ",(0,r.jsx)(n.em,{children:"evaluated"})," as an ",(0,r.jsx)(n.em,{children:"implicit progn"}),", and the ",(0,r.jsx)(n.em,{children:"values"})," it returns are returned as the value of the ",(0,r.jsx)(n.strong,{children:"typecase"}),", ",(0,r.jsx)(n.strong,{children:"ctypecase"}),", or ",(0,r.jsx)(n.strong,{children:"etypecase"})," ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["These ",(0,r.jsx)(n.em,{children:"macros"})," differ only in their ",(0,r.jsx)(n.em,{children:"behavior"})," when no ",(0,r.jsx)(n.em,{children:"normal-clause"})," matches; specifically:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"typecase"})}),"\n",(0,r.jsxs)(n.p,{children:["If no ",(0,r.jsx)(n.em,{children:"normal-clause"})," matches, and there is an ",(0,r.jsx)(n.em,{children:"otherwise-clause"}),", then that ",(0,r.jsx)(n.em,{children:"otherwise-clause"})," automatically matches; the ",(0,r.jsx)(n.em,{children:"forms"})," in that ",(0,r.jsx)(n.em,{children:"clause"})," are ",(0,r.jsx)(n.em,{children:"evaluated"})," as an ",(0,r.jsx)(n.em,{children:"implicit progn"}),", and the ",(0,r.jsx)(n.em,{children:"values"})," it returns are returned as the value of the ",(0,r.jsx)(n.strong,{children:"typecase"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If there is no ",(0,r.jsx)(n.em,{children:"otherwise-clause"}),", ",(0,r.jsx)(n.strong,{children:"typecase"})," returns ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"ctypecase"})}),"\n",(0,r.jsxs)(n.p,{children:["If no ",(0,r.jsx)(n.em,{children:"normal-clause"})," matches, a ",(0,r.jsx)(n.em,{children:"correctable error"})," of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," is signaled. The offending datum is the ",(0,r.jsx)(n.em,{children:"test-key"})," and the expected type is ",(0,r.jsx)(n.em,{children:"type equivalent"})," to (or ",(0,r.jsx)(n.em,{children:"type1 type2"})," ...). The ",(0,r.jsx)(n.strong,{children:"store-value"})," ",(0,r.jsx)(n.em,{children:"restart"})," can be used to correct the error."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.strong,{children:"store-value"})," ",(0,r.jsx)(n.em,{children:"restart"})," is invoked, its ",(0,r.jsx)(n.em,{children:"argument"})," becomes the new ",(0,r.jsx)(n.em,{children:"test-key"}),", and is stored Data and Control"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"typecase, ctypecase, etypecase"})}),"\n",(0,r.jsxs)(n.p,{children:["in ",(0,r.jsx)(n.em,{children:"keyplace"})," as if by (setf ",(0,r.jsx)(n.em,{children:"keyplace test-key"}),"). Then ",(0,r.jsx)(n.strong,{children:"ctypecase"})," starts over, considering each ",(0,r.jsx)(n.em,{children:"clause"})," anew."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.strong,{children:"store-value"})," ",(0,r.jsx)(n.em,{children:"restart"})," is invoked interactively, the user is prompted for a new ",(0,r.jsx)(n.em,{children:"test-key"})," to use."]}),"\n",(0,r.jsxs)(n.p,{children:["The subforms of ",(0,r.jsx)(n.em,{children:"keyplace"})," might be evaluated again if none of the cases holds."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"etypecase"})}),"\n",(0,r.jsxs)(n.p,{children:["If no ",(0,r.jsx)(n.em,{children:"normal-clause"})," matches, a ",(0,r.jsx)(n.em,{children:"non-correctable error"})," of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," is signaled. The offending datum is the ",(0,r.jsx)(n.em,{children:"test-key"})," and the expected type is ",(0,r.jsx)(n.em,{children:"type equivalent"})," to (or ",(0,r.jsx)(n.em,{children:"type1 type2"})," ...)."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that in contrast with ",(0,r.jsx)(n.strong,{children:"ctypecase"}),", the caller of ",(0,r.jsx)(n.strong,{children:"etypecase"})," may rely on the fact that ",(0,r.jsx)(n.strong,{children:"etypecase"})," does not return if a ",(0,r.jsx)(n.em,{children:"normal-clause"})," does not match."]}),"\n",(0,r.jsxs)(n.p,{children:["In all three cases, is permissible for more than one ",(0,r.jsx)(n.em,{children:"clause"})," to specify a matching ",(0,r.jsx)(n.em,{children:"type"}),", particularly if one is a ",(0,r.jsx)(n.em,{children:"subtype"})," of another; the earliest applicable ",(0,r.jsx)(n.em,{children:"clause"})," is chosen."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n;;; (Note that the parts of this example which use TYPE-OF \n\n\n\n;;; are implementation-dependent.) \n\n\n\n(defun what-is-it (x) \n\n\n\n(format t "&#126;&amp;&#126;S is &#126;A.&#126;%" \n\n\n\nx (typecase x \n\n\n\n(float "a float") \n\n\n\n(null "a symbol, boolean false, or the empty list") \n\n\n\n(list "a list") \n\n\n\n(t (format nil "a(n) &#126;(&#126;A&#126;)" (type-of x)))))) \n\n\n\n*\u2192* WHAT-IS-IT \n\n\n\n(map \u2019nil #\u2019what-is-it \u2019(nil (a b) 7.0 7 box)) \n\n\n\n\u25b7 NIL is a symbol, boolean false, or the empty list. \n\n\n\n\u25b7 (A B) is a list. \n\n\n\n\u25b7 7.0 is a float. \n\n\n\n\u25b7 7 is a(n) integer. \n\n\n\n\u25b7 BOX is a(n) symbol. \n\n\n\n*\u2192* NIL \n\n\n\n(setq x 1/3) \n\n\n\n*\u2192* 1/3 \n\n\n\n(ctypecase x \n\n\n\n(integer (\\* x 4)) \n\n\n\n(symbol (symbol-value x))) \n\n\n\n\u25b7 Error: The value of X, 1/3, is neither an integer nor a symbol. \n\n\n\n\u25b7 To continue, type :CONTINUE followed by an option number: \n\n\n\n\u25b7 1: Specify a value to use instead. \n\n\n\n\n\n\n\n \n\n\n\n \n\n\n\n\u25b7 2: Return to Lisp Toplevel. \n\n\n\n\u25b7 Debug&gt; :CONTINUE 1 \n\n\n\n\u25b7 Use value: 3.7 \n\n\n\n\u25b7 Error: The value of X, 3.7, is neither an integer nor a symbol. \n\n\n\n\u25b7 To continue, type :CONTINUE followed by an option number: \n\n\n\n\u25b7 1: Specify a value to use instead. \n\n\n\n\u25b7 2: Return to Lisp Toplevel. \n\n\n\n\u25b7 Debug&gt; :CONTINUE 1 \n\n\n\n\u25b7 Use value: 12 \n\n\n\n*!* 48 \n\n\n\nx *!* 12 \n\n\n\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Aected By:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ctypecase"})," and ",(0,r.jsx)(n.strong,{children:"etypecase"}),", since they might signal an error, are potentially a\u21b5ected by existing ",(0,r.jsx)(n.em,{children:"handlers"})," and ",(0,r.jsx)(n.strong,{children:"*debug-io*"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ctypecase"})," and ",(0,r.jsx)(n.strong,{children:"etypecase"})," signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if no ",(0,r.jsx)(n.em,{children:"normal-clause"})," matches."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"compiler"})," may choose to issue a warning of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"style-warning"})," if a ",(0,r.jsx)(n.em,{children:"clause"})," will never be selected because it is completely shadowed by earlier clauses."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"case"}),", ",(0,r.jsx)(n.strong,{children:"cond"}),", ",(0,r.jsx)(n.strong,{children:"setf"}),", Section 5.1 (Generalized Reference)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["(typecase ",(0,r.jsx)(n.em,{children:"test-key"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"{"}),"(",(0,r.jsx)(n.em,{children:"type {form}"}),"*)",(0,r.jsx)(n.em,{children:"}"}),"*)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\u2318"})}),"\n",(0,r.jsxs)(n.p,{children:["(let ((#1=#",":g0001"," ",(0,r.jsx)(n.em,{children:"test-key"}),"))"]}),"\n",(0,r.jsxs)(n.p,{children:["(cond ",(0,r.jsx)(n.em,{children:"{"}),"((typep #1# \u2019",(0,r.jsx)(n.em,{children:"type"}),") ",(0,r.jsx)(n.em,{children:"{form}"}),"*)",(0,r.jsx)(n.em,{children:"}"}),"*))"]}),"\n",(0,r.jsxs)(n.p,{children:["The specific error message used by ",(0,r.jsx)(n.strong,{children:"etypecase"})," and ",(0,r.jsx)(n.strong,{children:"ctypecase"})," can vary between implementations. In situations where control of the specific wording of the error message is important, it is better to use ",(0,r.jsx)(n.strong,{children:"typecase"})," with an ",(0,r.jsx)(n.em,{children:"otherwise-clause"})," that explicitly signals an error with an appropriate message."]})]})}function i(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const l={},a="typecase, ctypecase, etypecase",d={id:"chap-5/f-d-dictionary/typecase",title:"typecase, ctypecase, etypecase",description:"Expanded Reference: typecase, ctypecase, etypecase",source:"@site/docs/chap-5/f-d-dictionary/typecase.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/typecase",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/typecase",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/typecase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"throw",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/throw"},next:{title:"undefined-function",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/undefinedfunction"}},h={},o=[{value:"Expanded Reference: typecase, ctypecase, etypecase",id:"expanded-reference-typecase-ctypecase-etypecase",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"typecase-ctypecase-etypecase",children:"typecase, ctypecase, etypecase"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-typecase-ctypecase-etypecase",children:"Expanded Reference: typecase, ctypecase, etypecase"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(typecase, ctypecase, etypecase )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var r=s(67294);const t={},c=r.createContext(t);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);