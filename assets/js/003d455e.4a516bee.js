"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[97258],{25987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var i=t(85893),r=t(11151);function s(e){const n={em:"em",p:"p",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:t,GlossaryTerm:s}=n;return t||l("ClLinks",!0),s||l("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"pprint-indent"})," ",(0,i.jsx)(t,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{styled:!0,term:"pprint-indent",children:(0,i.jsx)("b",{children:"pprint-indent"})})," ",(0,i.jsx)(n.em,{children:"relative-to n"})," &optional ",(0,i.jsx)(n.em,{children:"stream \u2192"})," ",(0,i.jsx)(t,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"relative-to"}),"\u2014either ",":block"," or ",":current","."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"n"}),"\u2014a ",(0,i.jsx)(n.em,{children:"real"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{styled:!0,term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),"\u2014an ",(0,i.jsx)(n.em,{children:"output stream designator"})," . The default is ",(0,i.jsx)(s,{styled:!0,term:"standard output",children:(0,i.jsx)("i",{children:"standard output"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{styled:!0,term:"pprint-indent",children:(0,i.jsx)("b",{children:"pprint-indent"})})," specifies the indentation to use in a logical block on ",(0,i.jsx)(t,{styled:!0,term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),". If ",(0,i.jsx)(t,{styled:!0,term:"stream",children:(0,i.jsx)("i",{children:"stream"})})," is a ",(0,i.jsx)(s,{styled:!0,term:"pretty printing stream",children:(0,i.jsx)("i",{children:"pretty printing stream"})})," and the ",(0,i.jsx)(t,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"value"})})," of ",(0,i.jsx)(t,{styled:!0,term:"print-pretty",children:(0,i.jsx)("b",{children:"*print-pretty*"})})," is ",(0,i.jsx)(t,{styled:!0,term:"true",children:(0,i.jsx)("i",{children:"true"})}),", ",(0,i.jsx)(t,{styled:!0,term:"pprint-indent",children:(0,i.jsx)("b",{children:"pprint-indent"})})," sets the indentation in the innermost dynamically enclosing logical block; otherwise, ",(0,i.jsx)(t,{styled:!0,term:"pprint-indent",children:(0,i.jsx)("b",{children:"pprint-indent"})})," has no effect."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"N"})," specifies the indentation in ",(0,i.jsx)(t,{styled:!0,term:"em",children:(0,i.jsx)("i",{children:"ems"})}),". If ",(0,i.jsx)(n.em,{children:"relative-to"})," is ",":block",", the indentation is set to the horizontal position of the first character in the ",(0,i.jsx)(n.em,{children:"dynamically current logical block"})," plus ",(0,i.jsx)(n.em,{children:"n ems"}),". If ",(0,i.jsx)(n.em,{children:"relative-to"})," is ",":current",", the indentation is set to the current output position plus ",(0,i.jsx)(n.em,{children:"n ems"}),". (For robustness in the face of variable-width fonts, it is advisable to use ",":current"," with an ",(0,i.jsx)(n.em,{children:"n"})," of zero whenever possible.)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"N"})," can be negative; however, the total indentation cannot be moved left of the beginning of the line or left of the end of the rightmost per-line prefix\u2014an attempt to move beyond one of these limits is treated the same as an attempt to move to that limit. Changes in indentation caused by ",(0,i.jsx)(n.em,{children:"pprint-indent"})," do not take effect until after the next line break. In addition, in miser mode all calls to ",(0,i.jsx)(t,{styled:!0,term:"pprint-indent",children:(0,i.jsx)("b",{children:"pprint-indent"})})," are ignored, forcing the lines corresponding to the logical block to line up under the first character in the block."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["An error is signaled if ",(0,i.jsx)(n.em,{children:"relative-to"})," is any ",(0,i.jsx)(t,{styled:!0,term:"object",children:(0,i.jsx)("i",{children:"object"})})," other than ",":block"," or ",":current","."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n.p,{children:"Section 22.3.5.3 (Tilde I: Indent)"})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"pprint-indent"},o="pprint-indent",a={id:"chap-22/cc-e-dictionary/pprint-indent_function",title:"pprint-indent",description:"Expanded Reference: pprint-indent",source:"@site/docs/chap-22/cc-e-dictionary/pprint-indent_function.md",sourceDirName:"chap-22/cc-e-dictionary",slug:"/chap-22/cc-e-dictionary/pprint-indent_function",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-indent_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-e-dictionary/pprint-indent_function.md",tags:[],version:"current",frontMatter:{title:"pprint-indent"},sidebar:"tutorialSidebar",previous:{title:"pprint-fill, pprint-linear, pprint-tabular",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-fill_pprint-linear_pprint-tabular_function"},next:{title:"pprint-logical-block",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-logical-block_macro"}},p={},h=[{value:"Expanded Reference: pprint-indent",id:"expanded-reference-pprint-indent",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pprint-indent",children:"pprint-indent"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-pprint-indent",children:"Expanded Reference: pprint-indent"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(pprint-indent )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var i=t(67294);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);