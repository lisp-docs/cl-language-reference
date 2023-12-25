"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[26906],{18488:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=r(85893),t=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"eq"})," ",(0,s.jsx)(r,{term:"function",children:(0,s.jsx)("i",{children:"Function"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{term:"eq",children:(0,s.jsx)("b",{children:"eq"})})," ",(0,s.jsx)(n.em,{children:"x y \u2192 generalized-boolean"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"x"}),"\u2014an ",(0,s.jsx)(r,{term:"object",children:(0,s.jsx)("i",{children:"object"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"y"}),"\u2014an ",(0,s.jsx)(r,{term:"object",children:(0,s.jsx)("i",{children:"object"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(r,{term:"true",children:(0,s.jsx)("i",{children:"true"})})," if its ",(0,s.jsx)(r,{term:"argument",children:(0,s.jsx)("i",{children:"arguments"})})," are the same, identical ",(0,s.jsx)(r,{term:"object",children:(0,s.jsx)("i",{children:"object"})}),"; otherwise, returns ",(0,s.jsx)(r,{term:"false",children:(0,s.jsx)("i",{children:"false"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:'(eq \u2019a \u2019b) \u2192 false \n(eq \u2019a \u2019a) \u2192 true \n(eq 3 3) \n\u2192 true \n<i><sup>or</sup>\u2192 false</i> \n(eq 3 3.0) \u2192 false \n(eq 3.0 3.0) \n\u2192 true \n<i><sup>or</sup>\u2192 false</i> \n\n**eq** \n(eq #c(3 -4) #c(3 -4)) \n\u2192 true \n<i><sup>or</sup>\u2192 false</i> \n(eq #c(3 -4.0) #c(3 -4)) \u2192 false \n(eq (cons \u2019a \u2019b) (cons \u2019a \u2019c)) \u2192 false \n(eq (cons \u2019a \u2019b) (cons \u2019a \u2019b)) \u2192 false \n(eq \u2019(a . b) \u2019(a . b)) \n\u2192 true \n<i><sup>or</sup>\u2192 false</i> \n(progn (setq x (cons \u2019a \u2019b)) (eq x x)) \u2192 true \n(progn (setq x \u2019(a . b)) (eq x x)) \u2192 true \n(eq #\\A #\\A) \n\u2192 true \n<i><sup>or</sup>\u2192 false</i> \n(let ((x "Foo")) (eq x x)) \u2192 true \n(eq "Foo" "Foo") \n\u2192 true \n<i><sup>or</sup>\u2192 false</i> \n(eq "Foo" (copy-seq "Foo")) \u2192 false \n(eq "FOO" "foo") \u2192 false \n(eq "string-seq" (copy-seq "string-seq")) \u2192 false \n(let ((x 5)) (eq x x)) \n\u2192 true \n<i><sup>or</sup>\u2192 false</i> \n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{term:"eql",children:(0,s.jsx)("b",{children:"eql"})}),", ",(0,s.jsx)(r,{term:"equal",children:(0,s.jsx)("b",{children:"equal"})}),", ",(0,s.jsx)(r,{term:"equalp",children:(0,s.jsx)("b",{children:"equalp"})}),", ",(0,s.jsx)(r,{term:"=",children:(0,s.jsx)("b",{children:"="})}),", Section 3.2 (Compilation)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{term:"object",children:(0,s.jsx)("i",{children:"Objects"})})," that appear the same when printed are not necessarily ",(0,s.jsx)(r,{term:"eq",children:(0,s.jsx)("b",{children:"eq"})})," to each other. ",(0,s.jsx)(r,{term:"symbol",children:(0,s.jsx)("i",{children:"Symbols"})})," that print the same usually are ",(0,s.jsx)(r,{term:"eq",children:(0,s.jsx)("b",{children:"eq"})})," to each other because of the use of the ",(0,s.jsx)(r,{term:"intern",children:(0,s.jsx)("b",{children:"intern"})})," function. However, ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"numbers"})})," with the same value need not be ",(0,s.jsx)(r,{term:"eq",children:(0,s.jsx)("b",{children:"eq"})}),", and two similar ",(0,s.jsx)(r,{term:"list",children:(0,s.jsx)("i",{children:"lists"})})," are usually not ",(0,s.jsx)(r,{term:"identical",children:(0,s.jsx)("i",{children:"identical"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An implementation is permitted to make \u201ccopies\u201d of ",(0,s.jsx)(r,{term:"character",children:(0,s.jsx)("i",{children:"characters"})})," and ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"numbers"})})," at any time. The effect is that Common Lisp makes no guarantee that ",(0,s.jsx)(r,{term:"eq",children:(0,s.jsx)("b",{children:"eq"})})," is true even when both its arguments are \u201cthe same thing\u201d if that thing is a ",(0,s.jsx)(r,{term:"character",children:(0,s.jsx)("i",{children:"character"})})," or ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})})," ."]}),"\n",(0,s.jsxs)(n.p,{children:["Most Common Lisp ",(0,s.jsx)(r,{term:"operator",children:(0,s.jsx)("i",{children:"operators"})})," use ",(0,s.jsx)(r,{term:"eql",children:(0,s.jsx)("b",{children:"eql"})})," rather than ",(0,s.jsx)(r,{term:"eq",children:(0,s.jsx)("b",{children:"eq"})})," to compare objects, or else they default to ",(0,s.jsx)(r,{term:"eql",children:(0,s.jsx)("b",{children:"eql"})})," and only use ",(0,s.jsx)(r,{term:"eq",children:(0,s.jsx)("b",{children:"eq"})})," if specifically requested to do so. However, the following ",(0,s.jsx)(r,{term:"operator",children:(0,s.jsx)("i",{children:"operators"})})," are defined to use ",(0,s.jsx)(r,{term:"eq",children:(0,s.jsx)("b",{children:"eq"})})," rather than ",(0,s.jsx)(r,{term:"eql",children:(0,s.jsx)("b",{children:"eql"})})," in a way that cannot be overridden by the ",(0,s.jsx)(r,{term:"code",children:(0,s.jsx)("i",{children:"code"})})," which employs them:"]}),"\n",(0,s.jsx)(n.p,{children:"Data and Control"}),"\n",(0,s.jsxs)(n.p,{children:["|",(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"catch getf throw"})," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.strong,{children:"get remf"})," "]}),(0,s.jsx)("p",{children:(0,s.jsx)(n.strong,{children:"get-properties remprop"})}),"|"]}),"\n",(0,s.jsx)(n.p,{children:"| :- |"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Figure 5\u201311. Operators that always prefer EQ over EQL"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const l={title:"eq"},o="eq",d={id:"chap-5/f-d-dictionary/eq_function",title:"eq",description:"Expanded Reference: eq",source:"@site/docs/chap-5/f-d-dictionary/eq_function.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/eq_function",permalink:"/cl-language-reference/chap-5/f-d-dictionary/eq_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/eq_function.md",tags:[],version:"current",frontMatter:{title:"eq"},sidebar:"tutorialSidebar",previous:{title:"destructuring-bind",permalink:"/cl-language-reference/chap-5/f-d-dictionary/destructuring-bind_macro"},next:{title:"eql",permalink:"/cl-language-reference/chap-5/f-d-dictionary/eql_function"}},a={},h=[{value:"Expanded Reference: eq",id:"expanded-reference-eq",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"eq",children:"eq"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-eq",children:"Expanded Reference: eq"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(eq )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var s=r(67294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);