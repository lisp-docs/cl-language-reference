"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[14710],{4345:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>x});var i=r(85893),t=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:r,GlossaryTerm:s}=n;return r||d("ClLinks",!0),s||d("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"with-input-from-string"})," ",(0,i.jsx)(r,{term:"macro",children:(0,i.jsx)("i",{children:"Macro"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"with-input-from-string",children:(0,i.jsx)("b",{children:"with-input-from-string"})})," (",(0,i.jsx)(n.em,{children:"var string"})," &key ",(0,i.jsx)(n.em,{children:"index start end"}),") ",(0,i.jsx)(n.em,{children:"{declaration}"}),"* ",(0,i.jsx)(r,{term:"form",children:(0,i.jsx)("i",{children:"{form}"})}),"*"]}),"\n",(0,i.jsx)(n.p,{children:"\u2192 {result}*"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"var"}),"\u2014a ",(0,i.jsx)(n.em,{children:"variable name"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),"\u2014a ",(0,i.jsx)(r,{term:"form",children:(0,i.jsx)("i",{children:"form"})}),"; evaluated to produce a ",(0,i.jsx)(r,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"index"}),"\u2014a ",(0,i.jsx)(r,{term:"place",children:(0,i.jsx)("i",{children:"place"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"start"}),", ",(0,i.jsx)(n.em,{children:"end"}),"\u2014",(0,i.jsx)(s,{styled:!0,term:"bounding index designator",children:(0,i.jsx)("i",{children:"bounding index designators"})})," of ",(0,i.jsx)(r,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),". The defaults for ",(0,i.jsx)(n.em,{children:"start"})," and ",(0,i.jsx)(n.em,{children:"end"})," are 0 and ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", respectively."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"declaration",children:(0,i.jsx)("i",{children:"declaration"})}),"\u2014a ",(0,i.jsx)(r,{term:"declare",children:(0,i.jsx)("b",{children:"declare"})})," ",(0,i.jsx)(r,{term:"expression",children:(0,i.jsx)("i",{children:"expression"})}),"; not evaluated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"form",children:(0,i.jsx)("i",{children:"forms"})}),"\u2014an ",(0,i.jsx)(s,{styled:!0,term:"implicit progn",children:(0,i.jsx)("i",{children:"implicit progn"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"result"}),"\u2014the ",(0,i.jsx)(r,{term:"value",children:(0,i.jsx)("i",{children:"values"})})," returned by the ",(0,i.jsx)(r,{term:"form",children:(0,i.jsx)("i",{children:"forms"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Creates an ",(0,i.jsx)(n.em,{children:"input string stream"}),", provides an opportunity to perform operations on the ",(0,i.jsx)(r,{term:"stream",children:(0,i.jsx)("i",{children:"stream"})})," (returning zero or more ",(0,i.jsx)(r,{term:"value",children:(0,i.jsx)("i",{children:"values"})}),"), and then closes the ",(0,i.jsx)(s,{styled:!0,term:"string stream",children:(0,i.jsx)("i",{children:"string stream"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"string",children:(0,i.jsx)("i",{children:"String"})})," is evaluated first, and ",(0,i.jsx)(n.em,{children:"var"})," is bound to a character ",(0,i.jsx)(n.em,{children:"input string stream"})," that supplies ",(0,i.jsx)(r,{term:"character",children:(0,i.jsx)("i",{children:"characters"})})," from the subsequence of the resulting ",(0,i.jsx)(n.em,{children:"string bounded"})," by ",(0,i.jsx)(n.em,{children:"start"})," and ",(0,i.jsx)(n.em,{children:"end"}),". The body is executed as an ",(0,i.jsx)(s,{styled:!0,term:"implicit progn",children:(0,i.jsx)("i",{children:"implicit progn"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"input string stream"})," is automatically closed on exit from ",(0,i.jsx)(r,{term:"with-input-from-string",children:(0,i.jsx)("b",{children:"with-input-from-string"})}),", no matter whether the exit is normal or abnormal. The ",(0,i.jsx)(n.em,{children:"input string stream"})," to which the ",(0,i.jsx)(n.em,{children:"variable var"})," is ",(0,i.jsx)(r,{term:"bound",children:(0,i.jsx)("i",{children:"bound"})})," has ",(0,i.jsx)(s,{styled:!0,term:"dynamic extent",children:(0,i.jsx)("i",{children:"dynamic extent"})}),"; its ",(0,i.jsx)(r,{term:"extent",children:(0,i.jsx)("i",{children:"extent"})})," ends when the ",(0,i.jsx)(r,{term:"form",children:(0,i.jsx)("i",{children:"form"})})," is exited."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"index"})," is a pointer within the ",(0,i.jsx)(r,{term:"string",children:(0,i.jsx)("i",{children:"string"})})," to be advanced. If ",(0,i.jsx)(r,{term:"with-input-from-string",children:(0,i.jsx)("b",{children:"with-input-from-string"})})," is exited normally, then ",(0,i.jsx)(n.em,{children:"index"})," will have as its ",(0,i.jsx)(r,{term:"value",children:(0,i.jsx)("i",{children:"value"})})," the index into the ",(0,i.jsx)(r,{term:"string",children:(0,i.jsx)("i",{children:"string"})})," indicating the first character not read which is (length ",(0,i.jsx)(r,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),") if all characters were used. The place specified by ",(0,i.jsx)(n.em,{children:"index"})," is not updated as reading progresses, but only at the end of the operation."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"start"})," and ",(0,i.jsx)(n.em,{children:"index"})," may both specify the same variable, which is a pointer within the ",(0,i.jsx)(r,{term:"string",children:(0,i.jsx)("i",{children:"string"})})," to be advanced, perhaps repeatedly by some containing loop."]}),"\n",(0,i.jsxs)(n.p,{children:["The consequences are undefined if an attempt is made to ",(0,i.jsx)(r,{term:"assign",children:(0,i.jsx)("i",{children:"assign"})})," the ",(0,i.jsx)(n.em,{children:"variable var"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'(with-input-from-string (s "XXX1 2 3 4xxx" \n\t\t\t   :index ind \n\t\t\t   :start 3 :end 10) \n  (+ (read s) (read s) (read s))) \u2192 6 \nind \u2192 9 \n(with-input-from-string (s "Animal Crackers" :index j :start 6) \n  (read s)) \u2192 CRACKERS \nThe variable j is set to 15. \n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(r,{term:"value",children:(0,i.jsx)("i",{children:"value"})})," of the ",(0,i.jsx)(r,{term:"place",children:(0,i.jsx)("i",{children:"place"})})," named by ",(0,i.jsx)(n.em,{children:"index"}),", if any, is modified."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"make-string-input-stream",children:(0,i.jsx)("b",{children:"make-string-input-stream"})}),", Section 3.6 (Traversal Rules and Side Effects)"]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"with-input-from-string"},a="with-input-from-string",h={id:"chap-21/cb-c-dictionary/with-input-from-string_macro",title:"with-input-from-string",description:"Expanded Reference: with-input-from-string",source:"@site/docs/chap-21/cb-c-dictionary/with-input-from-string_macro.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/with-input-from-string_macro",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/with-input-from-string_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/with-input-from-string_macro.md",tags:[],version:"current",frontMatter:{title:"with-input-from-string"},sidebar:"tutorialSidebar",previous:{title:"unread-char",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/unread-char_function"},next:{title:"with-open-file",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/with-open-file_macro"}},o={},x=[{value:"Expanded Reference: with-input-from-string",id:"expanded-reference-with-input-from-string",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"with-input-from-string",children:"with-input-from-string"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-with-input-from-string",children:"Expanded Reference: with-input-from-string"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(with-input-from-string )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var i=r(67294);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);