"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[2557],{3496:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var s=r(85893),t=r(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"rest"})," ",(0,s.jsx)(r,{styled:!0,term:"accessor",children:(0,s.jsx)("i",{children:"Accessor"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{styled:!0,term:"rest",children:(0,s.jsx)("b",{children:"rest"})})," ",(0,s.jsx)(n.em,{children:"list \u2192 tail"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"(setf (rest"})," ",(0,s.jsx)(n.em,{children:"list"}),"**)** ",(0,s.jsx)(n.em,{children:"new-tail"}),"**)**"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),"\u2014a ",(0,s.jsx)(r,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),", which might be a ",(0,s.jsx)(n.em,{children:"dotted list"})," or a ",(0,s.jsx)(n.em,{children:"circular list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{styled:!0,term:"tail",children:(0,s.jsx)("i",{children:"tail"})}),"\u2014an ",(0,s.jsx)(r,{styled:!0,term:"object",children:(0,s.jsx)("i",{children:"object"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{styled:!0,term:"rest",children:(0,s.jsx)("b",{children:"rest"})})," performs the same operation as ",(0,s.jsx)(r,{styled:!0,term:"cdr",children:(0,s.jsx)("b",{children:"cdr"})}),", but mnemonically complements ",(0,s.jsx)(r,{styled:!0,term:"first",children:(0,s.jsx)("b",{children:"first"})}),". Specifically,"]}),"\n",(0,s.jsxs)(n.p,{children:["(rest ",(0,s.jsx)(r,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),") ",(0,s.jsx)(n.em,{children:"\u2261"})," (cdr ",(0,s.jsx)(r,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["(setf (rest ",(0,s.jsx)(r,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),") ",(0,s.jsx)(n.em,{children:"new-tail"}),") ",(0,s.jsx)(n.em,{children:"\u2261"})," (setf (cdr ",(0,s.jsx)(r,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})}),") ",(0,s.jsx)(n.em,{children:"new-tail"}),")"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:'\n(rest \u2019(1 2)) \u2192 (2) \n\n\n\n(rest \u2019(1 . 2)) \u2192 2 \n(rest \u2019(1)) \u2192 NIL \n(setq \\*cons\\* \u2019(1 . 2)) \u2192 (1 . 2) \n(setf (rest \\*cons\\*) "two") \u2192 "two" \n\\*cons\\* \u2192 (1 . "two") \n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{styled:!0,term:"cdr",children:(0,s.jsx)("b",{children:"cdr"})}),", ",(0,s.jsx)(r,{styled:!0,term:"nthcdr",children:(0,s.jsx)("b",{children:"nthcdr"})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(r,{styled:!0,term:"rest",children:(0,s.jsx)("b",{children:"rest"})})," is often preferred stylistically over ",(0,s.jsx)(r,{styled:!0,term:"cdr",children:(0,s.jsx)("b",{children:"cdr"})})," when the argument is to being subjectively viewed as a ",(0,s.jsx)(r,{styled:!0,term:"list",children:(0,s.jsx)("i",{children:"list"})})," rather than as a ",(0,s.jsx)(r,{styled:!0,term:"cons",children:(0,s.jsx)("i",{children:"cons"})}),"."]})]})}function i(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}const l={title:"rest"},d="rest",o={id:"chap-14/be-c-dictionary/rest_accessor",title:"rest",description:"Expanded Reference: rest",source:"@site/docs/chap-14/be-c-dictionary/rest_accessor.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/rest_accessor",permalink:"/cl-language-reference/chap-14/be-c-dictionary/rest_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/rest_accessor.md",tags:[],version:"current",frontMatter:{title:"rest"},sidebar:"tutorialSidebar",previous:{title:"remf",permalink:"/cl-language-reference/chap-14/be-c-dictionary/remf_macro"},next:{title:"revappend, nreconc",permalink:"/cl-language-reference/chap-14/be-c-dictionary/revappend_nreconc_function"}},a={},h=[{value:"Expanded Reference: rest",id:"expanded-reference-rest",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"rest",children:"rest"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-rest",children:"Expanded Reference: rest"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(rest )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var s=r(67294);const t={},c=s.createContext(t);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);