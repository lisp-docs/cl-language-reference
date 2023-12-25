"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[85676],{56936:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=i(85893),r=i(11151);function l(e){const n={em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"pprint-pop"})," ",(0,t.jsx)(n.em,{children:"Local Macro"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})})," ",(0,t.jsx)(n.em,{children:"\u27e8no arguments\u27e9 \u2192 object"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"\u2014an ",(0,t.jsx)(i,{styled:!0,term:"element",children:(0,t.jsx)("i",{children:"element"})})," of the ",(0,t.jsx)(i,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," being printed in the ",(0,t.jsx)(n.em,{children:"lexically current logical block"})," , or ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Pops one ",(0,t.jsx)(i,{styled:!0,term:"element",children:(0,t.jsx)("i",{children:"element"})})," from the ",(0,t.jsx)(i,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," being printed in the ",(0,t.jsx)(n.em,{children:"lexically current logical block"})," , obeying ",(0,t.jsx)(i,{styled:!0,term:"print-length",children:(0,t.jsx)("b",{children:"*print-length*"})})," and ",(0,t.jsx)(i,{styled:!0,term:"print-circle",children:(0,t.jsx)("b",{children:"*print-circle*"})})," as described below."]}),"\n",(0,t.jsxs)(n.p,{children:["Each time ",(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})})," is called, it pops the next value off the ",(0,t.jsx)(i,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," passed to the ",(0,t.jsx)(n.em,{children:"lexically current logical block"})," and returns it. However, before doing this, it performs three tests:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," If the remaining \u2018list\u2019 is not a ",(0,t.jsx)(i,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})}),", \u201c. \u201d is printed followed by the remaining \u2018list.\u2019 (This makes it easier to write printing functions that are robust in the face of malformed arguments.)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," If ",(0,t.jsx)(i,{styled:!0,term:"print-length",children:(0,t.jsx)("b",{children:"*print-length*"})})," is ",(0,t.jsx)(i,{styled:!0,term:"non-nil",children:(0,t.jsx)("i",{children:"non-nil"})}),", and ",(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})})," has already been called ",(0,t.jsx)(i,{styled:!0,term:"print-length",children:(0,t.jsx)("b",{children:"*print-length*"})})," times within the immediately containing logical block, \u201c...\u201d is printed. (This makes it easy to write printing functions that properly handle ",(0,t.jsx)(i,{styled:!0,term:"print-length",children:(0,t.jsx)("b",{children:"*print-length*"})}),".)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," If ",(0,t.jsx)(i,{styled:!0,term:"print-circle",children:(0,t.jsx)("b",{children:"*print-circle*"})})," is ",(0,t.jsx)(i,{styled:!0,term:"non-nil",children:(0,t.jsx)("i",{children:"non-nil"})}),", and the remaining list is a circular (or shared) reference, then \u201c. \u201d is printed followed by an appropriate \u201c#",(0,t.jsx)(n.em,{children:"n"}),"#\u201d marker. (This catches instances of ",(0,t.jsx)(i,{styled:!0,term:"cdr",children:(0,t.jsx)("i",{children:"cdr"})})," circularity and sharing in lists.)"]}),"\n",(0,t.jsxs)(n.p,{children:["If either of the three conditions above occurs, the indicated output is printed on the ",(0,t.jsx)(n.em,{children:"pretty printing stream"})," created by the immediately containing ",(0,t.jsx)(i,{styled:!0,term:"pprint-logical-block",children:(0,t.jsx)("b",{children:"pprint-logical-block"})})," and the execution of the immediately containing ",(0,t.jsx)(i,{styled:!0,term:"pprint-logical-block",children:(0,t.jsx)("b",{children:"pprint-logical-block"})})," is terminated except for the printing of the suffix."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(i,{styled:!0,term:"pprint-logical-block",children:(0,t.jsx)("b",{children:"pprint-logical-block"})})," is given a \u2018list\u2019 argument of ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),"\u2014because it is not processing a list\u2014 ",(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})})," can still be used to obtain support for ",(0,t.jsx)(i,{styled:!0,term:"print-length",children:(0,t.jsx)("b",{children:"*print-length*"})}),". In this situation, the first and third tests above are disabled and ",(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})})," always returns ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),". See Section 22.2.2 (Examples of using the Pretty Printer)\u2014specifically, the ",(0,t.jsx)(n.strong,{children:"pprint-vector"})," example."]}),"\n",(0,t.jsxs)(n.p,{children:["Whether or not ",(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})})," is ",(0,t.jsx)(i,{styled:!0,term:"fbound",children:(0,t.jsx)("i",{children:"fbound"})})," in the ",(0,t.jsx)(n.em,{children:"global environment"})," is ",(0,t.jsx)(i,{styled:!0,term:"implementation-dependent",children:(0,t.jsx)("i",{children:"implementation-dependent"})}),"; however, the restrictions on redefinition and ",(0,t.jsx)(n.em,{children:"shadowing"})," of ",(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})})," are the same as for ",(0,t.jsx)(i,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbols"})})," in the COMMON-LISP ",(0,t.jsx)(i,{styled:!0,term:"package",children:(0,t.jsx)("i",{children:"package"})})," which are ",(0,t.jsx)(i,{styled:!0,term:"fbound",children:(0,t.jsx)("i",{children:"fbound"})})," in the ",(0,t.jsx)(n.em,{children:"global environment"}),". The consequences of attempting to use ",(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})})," outside of ",(0,t.jsx)(i,{styled:!0,term:"pprint-logical-block",children:(0,t.jsx)("b",{children:"pprint-logical-block"})})," are undefined."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(n.p,{children:["Might cause output to the ",(0,t.jsx)(n.em,{children:"pretty printing stream"})," associated with the lexically current logical block."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"print-length",children:(0,t.jsx)("b",{children:"*print-length*"})}),", ",(0,t.jsx)(i,{styled:!0,term:"print-circle",children:(0,t.jsx)("b",{children:"*print-circle*"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["An error is signaled (either at macro expansion time or at run time) if a usage of ",(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})})," occurs where there is no lexically containing ",(0,t.jsx)(i,{styled:!0,term:"pprint-logical-block",children:(0,t.jsx)("b",{children:"pprint-logical-block"})})," ",(0,t.jsx)(i,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The consequences are undefined if ",(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})})," is executed outside of the ",(0,t.jsx)(n.em,{children:"dynamic extent"})," of this ",(0,t.jsx)(i,{styled:!0,term:"pprint-logical-block",children:(0,t.jsx)("b",{children:"pprint-logical-block"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"pprint-exit-if-list-exhausted",children:(0,t.jsx)("b",{children:"pprint-exit-if-list-exhausted"})}),", ",(0,t.jsx)(i,{styled:!0,term:"pprint-logical-block",children:(0,t.jsx)("b",{children:"pprint-logical-block"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["It is frequently a good idea to call ",(0,t.jsx)(i,{styled:!0,term:"pprint-exit-if-list-exhausted",children:(0,t.jsx)("b",{children:"pprint-exit-if-list-exhausted"})})," before calling ",(0,t.jsx)(i,{styled:!0,term:"pprint-pop",children:(0,t.jsx)("b",{children:"pprint-pop"})}),"."]})]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}const c={title:"pprint-pop"},p="pprint-pop",d={id:"chap-22/cc-e-dictionary/pprint-pop_local-macro",title:"pprint-pop",description:"Expanded Reference: pprint-pop",source:"@site/docs/chap-22/cc-e-dictionary/pprint-pop_local-macro.md",sourceDirName:"chap-22/cc-e-dictionary",slug:"/chap-22/cc-e-dictionary/pprint-pop_local-macro",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-pop_local-macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-e-dictionary/pprint-pop_local-macro.md",tags:[],version:"current",frontMatter:{title:"pprint-pop"},sidebar:"tutorialSidebar",previous:{title:"pprint-newline",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-newline_function"},next:{title:"pprint-tab",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-tab_function"}},o={},h=[{value:"Expanded Reference: pprint-pop",id:"expanded-reference-pprint-pop",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pprint-pop",children:"pprint-pop"}),"\n","\n","\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-pprint-pop",children:"Expanded Reference: pprint-pop"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(pprint-pop )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var t=i(67294);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);