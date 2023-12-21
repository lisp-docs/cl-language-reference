"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[11841],{4431:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var s=r(85893),t=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2217"}),(0,s.jsx)(n.strong,{children:"read-suppress"}),(0,s.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["This variable is intended primarily to support the operation of the read-time conditional notations #+ and #-. It is important for the ",(0,s.jsx)(n.em,{children:"reader macros"})," which implement these notations to be able to skip over the printed representation of an ",(0,s.jsx)(n.em,{children:"expression"})," despite the possibility that the syntax of the skipped ",(0,s.jsx)(n.em,{children:"expression"})," may not be entirely valid for the current implementation, since #+ and #- exist in order to allow the same program to be shared among several Lisp implementations (including dialects other than Common Lisp) despite small incompatibilities of syntax."]}),"\n",(0,s.jsxs)(n.p,{children:["If it is ",(0,s.jsx)(n.em,{children:"false"}),", the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," operates normally."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*read-suppress*"})," is ",(0,s.jsx)(n.em,{children:"true"}),", ",(0,s.jsx)(n.strong,{children:"read"}),", ",(0,s.jsx)(n.strong,{children:"read-preserving-whitespace"}),", ",(0,s.jsx)(n.strong,{children:"read-delimited-list"}),", and ",(0,s.jsx)(n.strong,{children:"read-from-string"})," all return a ",(0,s.jsx)(n.em,{children:"primary value"})," of ",(0,s.jsx)(n.strong,{children:"nil"})," when they complete successfully; however, they continue to parse the representation of an ",(0,s.jsx)(n.em,{children:"object"})," in the normal way, in order to skip over the ",(0,s.jsx)(n.em,{children:"object"}),", and continue to indicate ",(0,s.jsx)(n.em,{children:"end of file"})," in the normal way. Except as noted below, any ",(0,s.jsx)(n.em,{children:"standardized reader macro"}),(0,s.jsx)("sub",{children:"2"})," that is defined to ",(0,s.jsx)(n.em,{children:"read"})," ",(0,s.jsx)("sub",{children:"2"})," a following ",(0,s.jsx)(n.em,{children:"object"})," or ",(0,s.jsx)(n.em,{children:"token"})," will do so, but not signal an error if the ",(0,s.jsx)(n.em,{children:"object"})," read is not of an appropriate type or syntax. The ",(0,s.jsx)(n.em,{children:"standard syntax"})," and its associated ",(0,s.jsx)(n.em,{children:"reader macros"})," will not construct any new ",(0,s.jsx)(n.em,{children:"objects"})," (",(0,s.jsx)(n.em,{children:"e.g."}),", when reading the representation of a ",(0,s.jsx)(n.em,{children:"symbol"}),", no ",(0,s.jsx)(n.em,{children:"symbol"})," will be constructed or interned)."]}),"\n",(0,s.jsx)(n.p,{children:"Extended tokens"}),"\n",(0,s.jsxs)(n.p,{children:["All extended tokens are completely uninterpreted. Errors such as those that might otherwise be signaled due to detection of invalid ",(0,s.jsx)(n.em,{children:"potential numbers"}),", invalid patterns of ",(0,s.jsx)(n.em,{children:"package markers"}),", and invalid uses of the ",(0,s.jsx)(n.em,{children:"dot"})," character are suppressed."]}),"\n",(0,s.jsxs)(n.p,{children:["Dispatching macro characters (including ",(0,s.jsx)(n.em,{children:"sharpsign"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Dispatching macro characters"})," continue to parse an infix numerical argument, and invoke the dispatch function. The ",(0,s.jsx)(n.em,{children:"standardized sharpsign reader macros"})," do not enforce any constraints on either the presence of or the value of the numerical argument."]}),"\n",(0,s.jsx)(n.p,{children:"#="}),"\n",(0,s.jsxs)(n.p,{children:["The #= notation is totally ignored. It does not read a following ",(0,s.jsx)(n.em,{children:"object"}),". It produces no ",(0,s.jsx)(n.em,{children:"object"}),", but is treated as ",(0,s.jsx)(n.em,{children:"whitespace"}),(0,s.jsx)("sub",{children:"2"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"##"}),"\n",(0,s.jsxs)(n.p,{children:["The ## notation always produces ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["No matter what the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*read-suppress*"}),", parentheses still continue to delimit and construct ",(0,s.jsx)(n.em,{children:"lists"}),"; the #( notation continues to delimit ",(0,s.jsx)(n.em,{children:"vectors"}),"; and comments, ",(0,s.jsx)(n.em,{children:"strings"}),", and the ",(0,s.jsx)(n.em,{children:"single-quote"})," and ",(0,s.jsx)(n.em,{children:"backquote"})," notations continue to be interpreted properly. Such situations as \u2019), #<, #), and #",(0,s.jsx)(n.em,{children:"\u27e8Space\u27e9"})," continue to signal errors."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:'\n(let ((\\*read-suppress\\* t)) \n  (mapcar #\u2019read-from-string \n\t    \u2019("#(foo bar baz)" "#P(:type :lisp)" "#c1.2" \n\t\t\t       "#.(PRINT \u2019FOO)" "#3AHELLO" "#S(INTEGER)" \n\t\t\t       "#\\*ABC" "#\\GARBAGE" "#RALPHA" "#3R444"))) \n\u2192 (NIL NIL NIL NIL NIL NIL NIL NIL NIL NIL) \n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read"}),", Chapter 2 (Syntax)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Programmers"})," and ",(0,s.jsx)(n.em,{children:"implementations"})," that define additional ",(0,s.jsx)(n.em,{children:"macro characters"})," are strongly encouraged to make them respect ",(0,s.jsx)(n.strong,{children:"*read-suppress*"})," just as ",(0,s.jsx)(n.em,{children:"standardized macro characters"})," do. That is, when the ",(0,s.jsx)(n.em,{children:"value"})," of ",(0,s.jsx)(n.strong,{children:"*read-suppress*"})," is ",(0,s.jsx)(n.em,{children:"true"}),", they should ignore type errors when reading a following ",(0,s.jsx)(n.em,{children:"object"})," and the ",(0,s.jsx)(n.em,{children:"functions"})," that implement ",(0,s.jsx)(n.em,{children:"dispatching macro characters"})," should tolerate ",(0,s.jsx)(n.strong,{children:"nil"})," as their infix ",(0,s.jsx)(n.em,{children:"parameter"})," value even if a numeric value would ordinarily be required."]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const d={title:"read-suppress"},c="*read-suppress*",o={id:"chap-23/cd-c-dictionary/read-suppress_variable",title:"read-suppress",description:"Expanded Reference: \\read-suppress\\",source:"@site/docs/chap-23/cd-c-dictionary/read-suppress_variable.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/read-suppress_variable",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/read-suppress_variable",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/read-suppress_variable.md",tags:[],version:"current",frontMatter:{title:"read-suppress"},sidebar:"tutorialSidebar",previous:{title:"read-from-string",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/read-from-string_function"},next:{title:"read, read-preserving-whitespace",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/read_read-preserving-whitespace_function"}},l={},h=[{value:"Expanded Reference: *read-suppress*",id:"expanded-reference-read-suppress",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"read-suppress",children:"*read-suppress*"}),"\n","\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-read-suppress",children:"Expanded Reference: *read-suppress*"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"*read-suppress*\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>a});var s=r(67294);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);