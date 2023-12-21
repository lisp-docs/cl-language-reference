"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[80749],{50410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var s=t(85893),i=t(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"floatp"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"floatp"})," ",(0,s.jsx)(n.em,{children:"object"})]}),"\n",(0,s.jsx)(n.p,{children:"generalized-boolean"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"object"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.em,{children:"true"})," if ",(0,s.jsx)(n.em,{children:"object"})," is of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"float"}),"; otherwise, returns ",(0,s.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"\n(floatp 1.2d2) *! true* \n(floatp 1.212) *! true* \n(floatp 1.2s2) *! true* \n(floatp (expt 2 130)) *! false* \n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["(floatp ",(0,s.jsx)(n.em,{children:"object"}),") ",(0,s.jsx)(n.em,{children:"\u2318"})," (typep ",(0,s.jsx)(n.em,{children:"object"})," \u2019float)"]}),"\n",(0,s.jsx)("b",{children:"most-positive-short-float, least-positive-short-float,"}),"\n",(0,s.jsx)("i",{children:"..."}),"\n",(0,s.jsxs)("b",{children:[(0,s.jsx)("sup",{children:"most-positive-short-float, least-positive-short float, least-positive-normalized-short-float, most"})," positive-double-float, least-positive-double-float, ",(0,s.jsx)("sup",{children:"least-positive-normalized-double-float, most positive-long-float, least-positive-long-float, least positive-normalized-long-float, most-positive single-float, least-positive-single-float, least positive-normalized-single-float, most-negative short-float, least-negative-short-float, least negative-normalized-short-float, most-negative single-float, least-negative-single-float, least negative-normalized-single-float, most-negative double-float, least-negative-double-float, least negative-normalized-double-float, most-negative long-float, least-negative-long-float, least-negative"})," normalized-long-float"]}),"\n",(0,s.jsx)("i",{children:"Constant Variable"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constant Value:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["These ",(0,s.jsx)(n.em,{children:"constant variables"})," provide a way for programs to examine the ",(0,s.jsx)(n.em,{children:"implementation-defined"})," limits for the various float formats."]}),"\n",(0,s.jsxs)(n.p,{children:["Of these ",(0,s.jsx)(n.em,{children:"variables"}),", each which has \u201c-normalized\u201d in its ",(0,s.jsx)(n.em,{children:"name"})," must have a ",(0,s.jsx)(n.em,{children:"value"})," which is a ",(0,s.jsx)(n.em,{children:"normalized float"}),", and each which does not have \u201c-normalized\u201d in its name may have a ",(0,s.jsx)(n.em,{children:"value"})," which is either a ",(0,s.jsx)(n.em,{children:"normalized float"})," or a ",(0,s.jsx)(n.em,{children:"denormalized float"}),", as appropriate."]}),"\n",(0,s.jsxs)(n.p,{children:["Of these ",(0,s.jsx)(n.em,{children:"variables"}),", each which has \u201cshort-float\u201d in its name must have a ",(0,s.jsx)(n.em,{children:"value"})," which is a ",(0,s.jsx)(n.em,{children:"short float"}),", each which has \u201csingle-float\u201d in its name must have a ",(0,s.jsx)(n.em,{children:"value"})," which is a ",(0,s.jsx)(n.em,{children:"single float"}),", each which has \u201cdouble-float\u201d in its name must have a ",(0,s.jsx)(n.em,{children:"value"})," which is a ",(0,s.jsx)(n.em,{children:"double float"}),", and each which has \u201clong-float\u201d in its name must have a ",(0,s.jsx)(n.em,{children:"value"})," which is a ",(0,s.jsx)(n.em,{children:"long float"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," ",(0,s.jsx)(n.strong,{children:"most-positive-short-float"}),", ",(0,s.jsx)(n.strong,{children:"most-positive-single-float"}),","]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"most-positive-double-float"}),", ",(0,s.jsx)(n.strong,{children:"most-positive-long-float"})]}),"\n",(0,s.jsxs)(n.p,{children:["Each of these ",(0,s.jsx)(n.em,{children:"constant variables"})," has as its ",(0,s.jsx)(n.em,{children:"value"})," the positive ",(0,s.jsx)(n.em,{children:"float"})," of the largest magnitude"]}),"\n",(0,s.jsx)(n.p,{children:"(closest in value to, but not equal to, positive infinity) for the float format implied by its name."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," ",(0,s.jsx)(n.strong,{children:"least-positive-short-float"}),", ",(0,s.jsx)(n.strong,{children:"least-positive-normalized-short-float"}),","]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"least-positive-single-float"}),", ",(0,s.jsx)(n.strong,{children:"least-positive-normalized-single-float"}),","]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"least-positive-double-float"}),", ",(0,s.jsx)(n.strong,{children:"least-positive-normalized-double-float"}),","]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"least-positive-long-float"}),", ",(0,s.jsx)(n.strong,{children:"least-positive-normalized-long-float"})]}),"\n",(0,s.jsxs)(n.p,{children:["Each of these ",(0,s.jsx)(n.em,{children:"constant variables"})," has as its ",(0,s.jsx)(n.em,{children:"value"})," the smallest positive (nonzero) ",(0,s.jsx)(n.em,{children:"float"})," for the float format implied by its name."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," ",(0,s.jsx)(n.strong,{children:"least-negative-short-float"}),", ",(0,s.jsx)(n.strong,{children:"least-negative-normalized-short-float"}),","]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"least-negative-single-float"}),", ",(0,s.jsx)(n.strong,{children:"least-negative-normalized-single-float"}),","]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"least-negative-double-float"}),", ",(0,s.jsx)(n.strong,{children:"least-negative-normalized-double-float"}),","]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"least-negative-long-float"}),", ",(0,s.jsx)(n.strong,{children:"least-negative-normalized-long-float"})]}),"\n",(0,s.jsxs)(n.p,{children:["Each of these ",(0,s.jsx)(n.em,{children:"constant variables"})," has as its ",(0,s.jsx)(n.em,{children:"value"})," the negative (nonzero) ",(0,s.jsx)(n.em,{children:"float"})," of the smallest magnitude for the float format implied by its name. (If an implementation supports minus zero as a ",(0,s.jsx)(n.em,{children:"di\u21b5erent object"})," from positive zero, this value must not be minus zero.)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," ",(0,s.jsx)(n.strong,{children:"most-negative-short-float"}),", ",(0,s.jsx)(n.strong,{children:"most-negative-single-float"}),","]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"most-negative-double-float"}),", ",(0,s.jsx)(n.strong,{children:"most-negative-long-float"})]}),"\n",(0,s.jsxs)(n.p,{children:["Each of these ",(0,s.jsx)(n.em,{children:"constant variables"})," has as its ",(0,s.jsx)(n.em,{children:"value"})," the negative ",(0,s.jsx)(n.em,{children:"float"})," of the largest magnitude (closest in value to, but not equal to, negative infinity) for the float format implied by its name."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}const a={title:"floatp"},r="floatp",c={id:"chap-12/bc-c-dictionary/floatp_function",title:"floatp",description:"Expanded Reference: floatp",source:"@site/docs/chap-12/bc-c-dictionary/floatp_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/floatp_function",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/floatp_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/floatp_function.md",tags:[],version:"current",frontMatter:{title:"floatp"},sidebar:"tutorialSidebar",previous:{title:"floating-point-underflow",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/floating-point-underflow_condition-type"},next:{title:"floor, ffloor, ceiling, fceiling, truncate, ftruncate, round, fround",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/floor_ffloor_ceiling_fceiling_truncate_ftruncate_round_fround_function"}},d={},h=[{value:"Expanded Reference: floatp",id:"expanded-reference-floatp",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"floatp",children:"floatp"}),"\n","\n","\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-floatp",children:"Expanded Reference: floatp"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(floatp )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const i={},l=s.createContext(i);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);