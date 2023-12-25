"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[94773],{80263:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>x,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=r(85893),i=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"exp, expt"})," ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"exp",children:(0,t.jsx)("b",{children:"exp"})})," ",(0,t.jsx)(n.em,{children:"number \u2192 result"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"expt",children:(0,t.jsx)("b",{children:"expt"})})," ",(0,t.jsx)(n.em,{children:"base-number power-number \u2192 result"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"number",children:(0,t.jsx)("i",{children:"number"})}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"number",children:(0,t.jsx)("i",{children:"number"})})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"base-number"}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"number",children:(0,t.jsx)("i",{children:"number"})})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"power-number"}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"number",children:(0,t.jsx)("i",{children:"number"})})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"result"}),"\u2014a ",(0,t.jsx)(r,{styled:!0,term:"number",children:(0,t.jsx)("i",{children:"number"})})," ."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"exp",children:(0,t.jsx)("b",{children:"exp"})})," and ",(0,t.jsx)(r,{styled:!0,term:"expt",children:(0,t.jsx)("b",{children:"expt"})})," perform exponentiation."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"exp",children:(0,t.jsx)("b",{children:"exp"})})," returns ",(0,t.jsx)(n.em,{children:"e"})," raised to the power ",(0,t.jsx)(r,{styled:!0,term:"number",children:(0,t.jsx)("i",{children:"number"})}),", where ",(0,t.jsx)(n.em,{children:"e"})," is the base of the natural logarithms. ",(0,t.jsx)(r,{styled:!0,term:"exp",children:(0,t.jsx)("b",{children:"exp"})})," has no branch cut."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"expt",children:(0,t.jsx)("b",{children:"expt"})})," returns ",(0,t.jsx)(n.em,{children:"base-number"})," raised to the power ",(0,t.jsx)(n.em,{children:"power-number"}),". If the ",(0,t.jsx)(n.em,{children:"base-number"})," is a ",(0,t.jsx)(r,{styled:!0,term:"rational",children:(0,t.jsx)("i",{children:"rational"})})," and ",(0,t.jsx)(n.em,{children:"power-number"})," is an ",(0,t.jsx)(n.em,{children:"integer"})," , the calculation is exact and the result will be of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"rational",children:(0,t.jsx)("b",{children:"rational"})}),"; otherwise a floating-point approximation might result. For ",(0,t.jsx)(r,{styled:!0,term:"expt",children:(0,t.jsx)("b",{children:"expt"})})," of a ",(0,t.jsx)(n.em,{children:"complex rational"})," to an ",(0,t.jsx)(n.em,{children:"integer"})," power, the calculation must be exact and the result is of type (or rational (complex rational))."]}),"\n",(0,t.jsxs)(n.p,{children:["The result of ",(0,t.jsx)(r,{styled:!0,term:"expt",children:(0,t.jsx)("b",{children:"expt"})})," can be a ",(0,t.jsx)(r,{styled:!0,term:"complex",children:(0,t.jsx)("i",{children:"complex"})})," , even when neither argument is a ",(0,t.jsx)(r,{styled:!0,term:"complex",children:(0,t.jsx)("i",{children:"complex"})})," , if ",(0,t.jsx)(n.em,{children:"base-number"})," is negative and ",(0,t.jsx)(n.em,{children:"power-number"})," is not an ",(0,t.jsx)(n.em,{children:"integer"})," . The result is always the ",(0,t.jsx)(n.em,{children:"principal complex value"}),". For example, (expt -8 1/3) is not permitted to return -2, even though -2 is one of the cube roots of -8. The ",(0,t.jsx)(r,{styled:!0,term:"principal",children:(0,t.jsx)("i",{children:"principal"})})," cube root is a ",(0,t.jsx)(r,{styled:!0,term:"complex",children:(0,t.jsx)("i",{children:"complex"})})," approximately equal to #C(1.0 1.73205), not -2."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("b",{children:"expt"})," is defined as ",(0,t.jsxs)("i",{children:["b",(0,t.jsx)("sup",{children:"x"})," = e",(0,t.jsx)("sup",{children:"xlogb"})]}),". This defines the ",(0,t.jsx)("i",{children:"principal values"})," precisely. The range of ",(0,t.jsx)("b",{children:"expt"})," is the entire complex plane. Regarded as a function of ",(0,t.jsx)("i",{children:"x"}),", with ",(0,t.jsx)("i",{children:"b"})," fixed, there is no branch cut. Regarded as a function of ",(0,t.jsx)("i",{children:"b"}),", with ",(0,t.jsx)("i",{children:"x"})," fixed, there is in general a branch cut along the negative real axis, continuous with quadrant II. The domain excludes the origin. By definition, 0",(0,t.jsx)("sup",{children:"0"}),"=1. If ",(0,t.jsx)("i",{children:"b"}),"=0 and the real part of ",(0,t.jsx)("i",{children:"x"})," is strictly positive, then ",(0,t.jsxs)("i",{children:["b",(0,t.jsx)("sup",{children:"x"})]}),"=0. For all other values of ",(0,t.jsx)("i",{children:"x"}),", 0",(0,t.jsx)("i",{children:(0,t.jsx)("sup",{children:"x"})}),"is an error."]}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.em,{children:"power-number"})," is an ",(0,t.jsx)(n.em,{children:"integer"})," 0, then the result is always the value one in the ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," of ",(0,t.jsx)(n.em,{children:"base-number"}),", even if the ",(0,t.jsx)(n.em,{children:"base-number"})," is zero (of any ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})}),"). That is:"]}),"\n",(0,t.jsxs)(n.p,{children:["(expt x 0) ",(0,t.jsx)(n.em,{children:"\u2261"})," (coerce 1 (type-of x))"]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"power-number"})," is a zero of any other ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})}),", then the result is also the value one, in the ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," of the arguments after the application of the contagion rules in Section 12.1.1.2 (Contagion in Numeric Operations), with one exception: the consequences are undefined if ",(0,t.jsx)(n.em,{children:"base-number"})," is zero when ",(0,t.jsx)(n.em,{children:"power-number"})," is zero and not of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"integer",children:(0,t.jsx)("b",{children:"integer"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(exp 0) \u2192 1.0 \n(exp 1) \u2192 2.718282 \n(exp (log 5)) \u2192 5.0 \n(expt 2 8) \u2192 256 \n(expt 4 .5) \u2192 2.0 \n(expt #c(0 1) 2) \u2192 -1 \n(expt #c(2 2) 3) \u2192 #C(-16 16) \n(expt #c(2 2) 4) \u2192 -64 \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"log",children:(0,t.jsx)("b",{children:"log"})}),", Section 12.1.3.3 (Rule of Float Substitutability)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["Implementations of ",(0,t.jsx)(r,{styled:!0,term:"expt",children:(0,t.jsx)("b",{children:"expt"})})," are permitted to use different algorithms for the cases of a ",(0,t.jsx)(n.em,{children:"power-number"})," of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"rational",children:(0,t.jsx)("b",{children:"rational"})})," and a ",(0,t.jsx)(n.em,{children:"power-number"})," of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"float",children:(0,t.jsx)("b",{children:"float"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that by the following logic, (sqrt (expt ",(0,t.jsx)(n.em,{children:"x"})," 3)) is not equivalent to (expt ",(0,t.jsx)(n.em,{children:"x"})," 3/2)."]}),"\n",(0,t.jsx)(n.p,{children:"(setq x (exp (/ (* 2 pi #c(0 1)) 3))) ;exp(2.pi.i/3)"}),"\n",(0,t.jsx)(n.p,{children:"(expt x 3) \u2192 1 ;except for round-off error"}),"\n",(0,t.jsx)(n.p,{children:"(sqrt (expt x 3)) \u2192 1 ;except for round-off error"}),"\n",(0,t.jsx)(n.p,{children:"(expt x 3/2) \u2192 -1 ;except for round-off error"})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const c={title:"exp, expt"},x="exp, expt",d={id:"chap-12/bc-c-dictionary/exp_expt_function",title:"exp, expt",description:"Expanded Reference: exp, expt",source:"@site/docs/chap-12/bc-c-dictionary/exp_expt_function.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/exp_expt_function",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/exp_expt_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/exp_expt_function.md",tags:[],version:"current",frontMatter:{title:"exp, expt"},sidebar:"tutorialSidebar",previous:{title:"evenp, oddp",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/evenp_oddp_function"},next:{title:"fixnum",permalink:"/cl-language-reference/chap-12/bc-c-dictionary/fixnum_type"}},o={},h=[{value:"Expanded Reference: exp, expt",id:"expanded-reference-exp-expt",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"exp-expt",children:"exp, expt"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-exp-expt",children:"Expanded Reference: exp, expt"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(exp, expt )\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var t=r(67294);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);