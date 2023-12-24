"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[64626],{18715:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var c=r(85893),a=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"name-char"})," ",(0,c.jsx)(r,{styled:!0,term:"function",children:(0,c.jsx)("i",{children:"Function"})})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(r,{styled:!0,term:"name-char",children:(0,c.jsx)("b",{children:"name-char"})})," ",(0,c.jsx)(n.em,{children:"name \u2192 char-p"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(r,{styled:!0,term:"name",children:(0,c.jsx)("i",{children:"name"})}),"\u2014a ",(0,c.jsx)(n.em,{children:"string designator"})," ."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"char-p"}),"\u2014a ",(0,c.jsx)(r,{styled:!0,term:"character",children:(0,c.jsx)("i",{children:"character"})})," or ",(0,c.jsx)(r,{styled:!0,term:"nil",children:(0,c.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:["Returns the ",(0,c.jsx)(n.em,{children:"character object"})," whose ",(0,c.jsx)(r,{styled:!0,term:"name",children:(0,c.jsx)("i",{children:"name"})})," is ",(0,c.jsx)(r,{styled:!0,term:"name",children:(0,c.jsx)("i",{children:"name"})})," (as determined by ",(0,c.jsx)(n.strong,{children:"string-equal"}),"\u2014",(0,c.jsx)(n.em,{children:"i.e."}),", lookup is not case sensitive). If such a ",(0,c.jsx)(r,{styled:!0,term:"character",children:(0,c.jsx)("i",{children:"character"})})," does not exist, ",(0,c.jsx)(r,{styled:!0,term:"nil",children:(0,c.jsx)("b",{children:"nil"})})," is returned."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:'\n(name-char \u2019space) \u2192 #\\Space \n(name-char "space") \u2192 #\\Space \n(name-char "Space") \u2192 #\\Space \n(let ((x (char-name #\\a))) \n  (or (not x) (eql (name-char x) #\\a))) \u2192 true \n\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,c.jsxs)(n.p,{children:["Should signal an error of ",(0,c.jsx)(r,{styled:!0,term:"type",children:(0,c.jsx)("i",{children:"type"})})," ",(0,c.jsx)(r,{styled:!0,term:"type-error",children:(0,c.jsx)("b",{children:"type-error"})})," if ",(0,c.jsx)(r,{styled:!0,term:"name",children:(0,c.jsx)("i",{children:"name"})})," is not a ",(0,c.jsx)(n.em,{children:"string designator"})," ."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsx)(r,{styled:!0,term:"char-name",children:(0,c.jsx)("b",{children:"char-name"})})]})}function s(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}const i={title:"name-char"},d="name-char",l={id:"chap-13/bd-c-dictionary/name-char_function",title:"name-char",description:"Expanded Reference: name-char",source:"@site/docs/chap-13/bd-c-dictionary/name-char_function.md",sourceDirName:"chap-13/bd-c-dictionary",slug:"/chap-13/bd-c-dictionary/name-char_function",permalink:"/cl-language-reference/docs/chap-13/bd-c-dictionary/name-char_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-13/bd-c-dictionary/name-char_function.md",tags:[],version:"current",frontMatter:{title:"name-char"},sidebar:"tutorialSidebar",previous:{title:"graphic-char-p",permalink:"/cl-language-reference/docs/chap-13/bd-c-dictionary/graphic-char-p_function"},next:{title:"standard-char-p",permalink:"/cl-language-reference/docs/chap-13/bd-c-dictionary/standard-char-p_function"}},o={},h=[{value:"Expanded Reference: name-char",id:"expanded-reference-name-char",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"name-char",children:"name-char"}),"\n","\n","\n",(0,c.jsx)(s,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-name-char",children:"Expanded Reference: name-char"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(name-char )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var c=r(67294);const a={},t=c.createContext(a);function s(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);