"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[14197],{54981:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=r(85893),t=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"write-sequence"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"write-sequence"})," ",(0,s.jsx)(n.em,{children:"sequence stream"})," &key ",(0,s.jsx)(n.em,{children:"start end \u2192 sequence"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"sequence"}),"\u2014a ",(0,s.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"stream"}),"\u2014an ",(0,s.jsx)(n.em,{children:"output stream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"start"}),", ",(0,s.jsx)(n.em,{children:"end"}),"\u2014",(0,s.jsx)(n.em,{children:"bounding index designators"})," of ",(0,s.jsx)(n.em,{children:"sequence"}),". The defaults for ",(0,s.jsx)(n.em,{children:"start"})," and ",(0,s.jsx)(n.em,{children:"end"})," are 0 and ",(0,s.jsx)(n.strong,{children:"nil"}),", respectively."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"write-sequence"})," writes the ",(0,s.jsx)(n.em,{children:"elements"})," of the subsequence of ",(0,s.jsx)(n.em,{children:"sequence bounded"})," by ",(0,s.jsx)(n.em,{children:"start"})," and ",(0,s.jsx)(n.em,{children:"end"})," to ",(0,s.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:'\n(write-sequence "bookworms" \\*standard-output\\* :end 4) \n\u25b7 book \n\u2192 "bookworms" \n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(n.p,{children:["Modifies ",(0,s.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["Should be prepared to signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"sequence"})," is not a ",(0,s.jsx)(n.em,{children:"proper sequence"}),". Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"start"})," is not a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," . Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"end"})," is not a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Might signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if an ",(0,s.jsx)(n.em,{children:"element"})," of the ",(0,s.jsx)(n.em,{children:"bounded sequence"})," is not a member of the ",(0,s.jsx)(n.em,{children:"stream element type"})," of the ",(0,s.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:["Section 3.2.1 (Compiler Terminology), ",(0,s.jsx)(n.strong,{children:"read-sequence"}),", ",(0,s.jsx)(n.strong,{children:"write-string"}),", ",(0,s.jsx)(n.strong,{children:"write-line"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"write-sequence"})," is identical in effect to iterating over the indicated subsequence and writing one ",(0,s.jsx)(n.em,{children:"element"})," at a time to ",(0,s.jsx)(n.em,{children:"stream"}),", but may be more efficient than the equivalent loop. An efficient implementation is more likely to exist for the case where the ",(0,s.jsx)(n.em,{children:"sequence"})," is a ",(0,s.jsx)(n.em,{children:"vector"})," with the same ",(0,s.jsx)(n.em,{children:"element type"})," as the ",(0,s.jsx)(n.em,{children:"stream"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const d={},o="write-sequence",l={id:"chap-21/cb-c-dictionary/writesequence",title:"write-sequence",description:"Expanded Reference: write-sequence",source:"@site/docs/chap-21/cb-c-dictionary/writesequence.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/writesequence",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/writesequence",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/writesequence.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"write-char",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/writechar"},next:{title:"write-string, write-line",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/writestring"}},a={},h=[{value:"Expanded Reference: write-sequence",id:"expanded-reference-write-sequence",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"write-sequence",children:"write-sequence"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-write-sequence",children:"Expanded Reference: write-sequence"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(write-sequence )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var s=r(67294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);