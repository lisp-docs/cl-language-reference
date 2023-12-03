"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[35783],{55248:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var s=r(85893),i=r(11151);function t(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-from-string"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-from-string"})," ",(0,s.jsx)(n.em,{children:"string"})," &optional ",(0,s.jsx)(n.em,{children:"eof-error-p eof-value"})]}),"\n",(0,s.jsxs)(n.p,{children:["&key ",(0,s.jsx)(n.em,{children:"start end preserve-whitespace"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u2192 object, position"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"string"}),"\u2014a ",(0,s.jsx)(n.em,{children:"string"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"eof-error-p"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"eof-value"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),". The default is ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"start"}),", ",(0,s.jsx)(n.em,{children:"end"}),"\u2014",(0,s.jsx)(n.em,{children:"bounding index designators"})," of ",(0,s.jsx)(n.em,{children:"string"}),". The defaults for ",(0,s.jsx)(n.em,{children:"start"})," and ",(0,s.jsx)(n.em,{children:"end"})," are 0 and ",(0,s.jsx)(n.strong,{children:"nil"}),", respectively."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"preserve-whitespace"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"object"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"})," (parsed by the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," ) or the ",(0,s.jsx)(n.em,{children:"eof-value"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"position"}),"\u2014an ",(0,s.jsx)(n.em,{children:"integer"})," greater than or equal to zero, and less than or equal to one more than the ",(0,s.jsx)(n.em,{children:"length"})," of the ",(0,s.jsx)(n.em,{children:"string"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Parses the printed representation of an ",(0,s.jsx)(n.em,{children:"object"})," from the subsequence of ",(0,s.jsx)(n.em,{children:"string bounded"})," by ",(0,s.jsx)(n.em,{children:"start"})," and ",(0,s.jsx)(n.em,{children:"end"}),", as if ",(0,s.jsx)(n.strong,{children:"read"})," had been called on an ",(0,s.jsx)(n.em,{children:"input stream"})," containing those same ",(0,s.jsx)(n.em,{children:"characters"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"preserve-whitespace"})," is ",(0,s.jsx)(n.em,{children:"true"}),", the operation will preserve ",(0,s.jsx)(n.em,{children:"whitespace"}),"<sub>2</sub> as ",(0,s.jsx)(n.strong,{children:"read-preserving-whitespace"})," would do."]}),"\n",(0,s.jsxs)(n.p,{children:["If an ",(0,s.jsx)(n.em,{children:"object"})," is successfully parsed, the ",(0,s.jsx)(n.em,{children:"primary value"}),", ",(0,s.jsx)(n.em,{children:"object"}),", is the ",(0,s.jsx)(n.em,{children:"object"})," that was parsed. If ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"false"})," and if the end of the ",(0,s.jsx)(n.em,{children:"substring"})," is reached, ",(0,s.jsx)(n.em,{children:"eof-value"})," is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"secondary value"}),", ",(0,s.jsx)(n.em,{children:"position"}),", is the index of the first ",(0,s.jsx)(n.em,{children:"character"})," in the ",(0,s.jsx)(n.em,{children:"bounded string"})," that was not read. The ",(0,s.jsx)(n.em,{children:"position"})," may depend upon the value of ",(0,s.jsx)(n.em,{children:"preserve-whitespace"}),". If the entire ",(0,s.jsx)(n.em,{children:"string"})," was read, the ",(0,s.jsx)(n.em,{children:"position"})," returned is either the ",(0,s.jsx)(n.em,{children:"length"})," of the ",(0,s.jsx)(n.em,{children:"string"})," or one greater than the ",(0,s.jsx)(n.em,{children:"length"})," of the ",(0,s.jsx)(n.em,{children:"string"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsxs)(n.p,{children:['(read-from-string " 1 3 5" t nil ',":start"," 2) ",(0,s.jsx)(n.em,{children:"\u2192"})," 3, 5"]}),"\n",(0,s.jsxs)(n.p,{children:['(read-from-string "(a b c)") ',(0,s.jsx)(n.em,{children:"\u2192"})," (A B C), 7"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["If the end of the supplied substring occurs before an ",(0,s.jsx)(n.em,{children:"object"})," can be read, an error is signaled if ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"true"}),". An error is signaled if the end of the ",(0,s.jsx)(n.em,{children:"substring"})," occurs in the middle of an incomplete ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read"}),", ",(0,s.jsx)(n.strong,{children:"read-preserving-whitespace"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["The reason that ",(0,s.jsx)(n.em,{children:"position"})," is allowed to be beyond the ",(0,s.jsx)(n.em,{children:"length"})," of the ",(0,s.jsx)(n.em,{children:"string"})," is to permit (but not require) the ",(0,s.jsx)(n.em,{children:"implementation"})," to work by simulating the effect of a trailing delimiter at the end of the ",(0,s.jsx)(n.em,{children:"bounded string"}),". When ",(0,s.jsx)(n.em,{children:"preserve-whitespace"})," is ",(0,s.jsx)(n.em,{children:"true"}),", the ",(0,s.jsx)(n.em,{children:"position"})," might count the simulated delimiter."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const c={},l="read-from-string",o={id:"chap-23/cd-c-dictionary/readfromstring",title:"read-from-string",description:"Expanded Reference: read-from-string",source:"@site/docs/chap-23/cd-c-dictionary/readfromstring.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/readfromstring",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/readfromstring",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/readfromstring.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"reader-error",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/readererror"},next:{title:"readtable",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/readtable"}},a={},h=[{value:"Expanded Reference: read-from-string",id:"expanded-reference-read-from-string",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"read-from-string",children:"read-from-string"}),"\n","\n","\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-read-from-string",children:"Expanded Reference: read-from-string"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(read-from-string )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>d});var s=r(67294);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);