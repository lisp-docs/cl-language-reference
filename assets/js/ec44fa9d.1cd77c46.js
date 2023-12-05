"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[40151],{6516:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=s(85893),t=s(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"map"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"map"})," ",(0,r.jsx)(n.em,{children:"result-type function"})," &rest ",(0,r.jsx)(n.em,{children:"sequences"}),(0,r.jsx)("sup",{children:"+"})," ",(0,r.jsx)(n.em,{children:"\u2192 result"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"result-type"})," \u2013 a ",(0,r.jsx)(n.strong,{children:"sequence"})," ",(0,r.jsx)(n.em,{children:"type specifier"})," , or ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"function"}),"\u2014a ",(0,r.jsx)(n.em,{children:"function designator"})," . ",(0,r.jsx)(n.em,{children:"function"})," must take as many arguments as there are ",(0,r.jsx)(n.em,{children:"sequences"}),". ",(0,r.jsx)(n.em,{children:"sequence"}),"\u2014a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"result"}),"\u2014if ",(0,r.jsx)(n.em,{children:"result-type"})," is a ",(0,r.jsx)(n.em,{children:"type specifier"})," other than ",(0,r.jsx)(n.strong,{children:"nil"}),", then a ",(0,r.jsx)(n.em,{children:"sequence"})," of the ",(0,r.jsx)(n.em,{children:"type"})," it denotes; otherwise (if the ",(0,r.jsx)(n.em,{children:"result-type"})," is ",(0,r.jsx)(n.strong,{children:"nil"}),"), ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Applies ",(0,r.jsx)(n.em,{children:"function"})," to successive sets of arguments in which one argument is obtained from each ",(0,r.jsx)(n.em,{children:"sequence"}),". The ",(0,r.jsx)(n.em,{children:"function"})," is called first on all the elements with index 0, then on all those with index 1, and so on. The ",(0,r.jsx)(n.em,{children:"result-type"})," specifies the ",(0,r.jsx)(n.em,{children:"type"})," of the resulting ",(0,r.jsx)(n.em,{children:"sequence"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"map"})," returns ",(0,r.jsx)(n.strong,{children:"nil"})," if ",(0,r.jsx)(n.em,{children:"result-type"})," is ",(0,r.jsx)(n.strong,{children:"nil"}),". Otherwise, ",(0,r.jsx)(n.strong,{children:"map"})," returns a ",(0,r.jsx)(n.em,{children:"sequence"})," such that element j is the result of applying ",(0,r.jsx)(n.em,{children:"function"})," to element j of each of the ",(0,r.jsx)(n.em,{children:"sequences"}),". The result ",(0,r.jsx)(n.em,{children:"sequence"})," is as long as the shortest of the ",(0,r.jsx)(n.em,{children:"sequences"}),". The consequences are undefined if the result of applying ",(0,r.jsx)(n.em,{children:"function"})," to"]}),"\n",(0,r.jsxs)(n.p,{children:["the successive elements of the ",(0,r.jsx)(n.em,{children:"sequences"})," cannot be contained in a ",(0,r.jsx)(n.em,{children:"sequence"})," of the ",(0,r.jsx)(n.em,{children:"type"})," given by ",(0,r.jsx)(n.em,{children:"result-type"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"result-type"})," is a ",(0,r.jsx)(n.em,{children:"subtype"})," of ",(0,r.jsx)(n.strong,{children:"list"}),", the result will be a ",(0,r.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"result-type"})," is a ",(0,r.jsx)(n.em,{children:"subtype"})," of ",(0,r.jsx)(n.strong,{children:"vector"}),", then if the implementation can determine the element type specified for the ",(0,r.jsx)(n.em,{children:"result-type"}),", the element type of the resulting array is the result of ",(0,r.jsx)(n.em,{children:"upgrading"})," that element type; or, if the implementation can determine that the element type is unspecified (or *), the element type of the resulting array is ",(0,r.jsx)(n.strong,{children:"t"}),"; otherwise, an error is signaled."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(map \u2019string #\u2019(lambda (x y) \n\n\n\n(char "01234567890ABCDEF" (mod (+ x y) 16))) \n\n\n\n\u2019(1 2 3 4) \n\n\n\n\u2019(10 9 8 7)) *\u2192* "AAAA" \n\n\n\n(setq seq \u2019("lower" "UPPER" "" "123")) *\u2192* ("lower" "UPPER" "" "123") \n\n\n\n(map nil #\u2019nstring-upcase seq) *\u2192* NIL \n\n\n\nseq *\u2192* ("LOWER" "UPPER" "" "123") \n\n\n\n(map \u2019list #\u2019- \u2019(1 2 3 4)) *\u2192* (-1 -2 -3 -4) \n\n\n\n(map \u2019string \n\n\n\n#\u2019(lambda (x) (if (oddp x) #\\1 #\\0)) \n\n\n\n\u2019(1 2 3 4)) *\u2192* "1010" \n\n\n\n(map \u2019(vector \\* 4) #\u2019cons "abc" "de") should signal an error \n\n\n\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["An error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," must be signaled if the ",(0,r.jsx)(n.em,{children:"result-type"})," is not a ",(0,r.jsx)(n.em,{children:"recognizable subtype"})," of ",(0,r.jsx)(n.strong,{children:"list"}),", not a ",(0,r.jsx)(n.em,{children:"recognizable subtype"})," of ",(0,r.jsx)(n.strong,{children:"vector"}),", and not ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Should be prepared to signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if any ",(0,r.jsx)(n.em,{children:"sequence"})," is not a ",(0,r.jsx)(n.em,{children:"proper sequence"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["An error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," should be signaled if ",(0,r.jsx)(n.em,{children:"result-type"})," specifies the number of elements and the minimum length of the ",(0,r.jsx)(n.em,{children:"sequences"})," is different from that number."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 3.6 (Traversal Rules and Side Effects)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"map-into"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const l={},d="map",o={id:"chap-17/bh-d-dictionary/map",title:"map",description:"Expanded Reference: map",source:"@site/docs/chap-17/bh-d-dictionary/map.md",sourceDirName:"chap-17/bh-d-dictionary",slug:"/chap-17/bh-d-dictionary/map",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/map",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-d-dictionary/map.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"make-sequence",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/makesequence"},next:{title:"map-into",permalink:"/cl-language-reference/docs/chap-17/bh-d-dictionary/mapinto"}},h={},a=[{value:"Expanded Reference: map",id:"expanded-reference-map",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"map",children:"map"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-map",children:"Expanded Reference: map"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(map )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var r=s(67294);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);