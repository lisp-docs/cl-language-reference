"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[61515],{31989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var s=t(85893),r=t(11151);function c(e){const n={em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"concatenate"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"concatenate"})," ",(0,s.jsx)(n.em,{children:"result-type"})," &rest ",(0,s.jsx)(n.em,{children:"sequences \u2192 result-sequence"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"result-type"}),"\u2014a ",(0,s.jsx)(n.strong,{children:"sequence"})," ",(0,s.jsx)(n.em,{children:"type specifier"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"sequences"}),"\u2014a ",(0,s.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"result-sequence"}),"\u2014a ",(0,s.jsx)(n.em,{children:"proper sequence"})," of ",(0,s.jsx)(n.em,{children:"type result-type"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"concatenate"})," returns a ",(0,s.jsx)(n.em,{children:"sequence"})," that contains all the individual elements of all the ",(0,s.jsx)(n.em,{children:"sequences"})," in the order that they are supplied. The ",(0,s.jsx)(n.em,{children:"sequence"})," is of type ",(0,s.jsx)(n.em,{children:"result-type"}),", which must be a ",(0,s.jsx)(n.em,{children:"subtype"})," of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"sequence"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["All of the ",(0,s.jsx)(n.em,{children:"sequences"})," are copied from; the result does not share any structure with any of the ",(0,s.jsx)(n.em,{children:"sequences"}),". Therefore, if only one ",(0,s.jsx)(n.em,{children:"sequence"})," is provided and it is of type ",(0,s.jsx)(n.em,{children:"result-type"}),", ",(0,s.jsx)(n.strong,{children:"concatenate"})," is required to copy ",(0,s.jsx)(n.em,{children:"sequence"})," rather than simply returning it."]}),"\n",(0,s.jsxs)(n.p,{children:["It is an error if any element of the ",(0,s.jsx)(n.em,{children:"sequences"})," cannot be an element of the ",(0,s.jsx)(n.em,{children:"sequence"})," result. If the ",(0,s.jsx)(n.em,{children:"result-type"})," is a ",(0,s.jsx)(n.em,{children:"subtype"})," of ",(0,s.jsx)(n.strong,{children:"list"}),", the result will be a ",(0,s.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"result-type"})," is a ",(0,s.jsx)(n.em,{children:"subtype"})," of ",(0,s.jsx)(n.strong,{children:"vector"}),", then if the implementation can determine the element type specified for the ",(0,s.jsx)(n.em,{children:"result-type"}),", the element type of the resulting array is the result of ",(0,s.jsx)(n.em,{children:"upgrading"})," that element type; or, if the implementation can determine that the element type is unspecified (or *), the element type of the resulting array is ",(0,s.jsx)(n.strong,{children:"t"}),"; otherwise, an error is signaled."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsxs)(n.p,{children:['(concatenate \u2019string "all" " " "together" " " "now") ',(0,s.jsx)(n.em,{children:"\u2192"}),' "all together now"']}),"\n",(0,s.jsx)(n.p,{children:'(concatenate \u2019list "ABC" \u2019(d e f) #(1 2 3) #*1011)'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2192"})," (#\\A #\\B #\\C D E F 1 2 3 1 0 1 1)"]}),"\n",(0,s.jsxs)(n.p,{children:["(concatenate \u2019list) ",(0,s.jsx)(n.em,{children:"\u2192"})," NIL"]}),"\n",(0,s.jsx)(n.p,{children:'(concatenate \u2019(vector * 2) "a" "bc") should signal an error'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["An error is signaled if the ",(0,s.jsx)(n.em,{children:"result-type"})," is neither a ",(0,s.jsx)(n.em,{children:"recognizable subtype"})," of ",(0,s.jsx)(n.strong,{children:"list"}),", nor a ",(0,s.jsx)(n.em,{children:"recognizable subtype"})," of ",(0,s.jsx)(n.strong,{children:"vector"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," should be signaled if ",(0,s.jsx)(n.em,{children:"result-type"})," specifies the number of elements and the sum of ",(0,s.jsx)(n.em,{children:"sequences"})," is different from that number."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"append"})})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}const l={},a="concatenate",o={id:"chap-17/bh-d-dictionary/concatenate",title:"concatenate",description:"Expanded Reference: concatenate",source:"@site/docs/chap-17/bh-d-dictionary/concatenate.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/concatenate",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/concatenate",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/concatenate.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"17.3 Sequences Dictionary",permalink:"/cl-language-reference/docs/category/173-sequences-dictionary"},next:{title:"copy-seq",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/copyseq"}},d={},h=[{value:"Expanded Reference: concatenate",id:"expanded-reference-concatenate",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"concatenate",children:"concatenate"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-concatenate",children:"Expanded Reference: concatenate"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(concatenate )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(67294);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);