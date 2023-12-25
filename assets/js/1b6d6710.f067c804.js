"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[96389],{33329:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=n(85893),s=n(11151);function i(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"remprop"})," ",(0,t.jsx)(n,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{styled:!0,term:"remprop",children:(0,t.jsx)("b",{children:"remprop"})})," ",(0,t.jsx)(r.em,{children:"symbol indicator \u2192 generalized-boolean"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})}),"\u2014a ",(0,t.jsx)(n,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{styled:!0,term:"indicator",children:(0,t.jsx)("i",{children:"indicator"})}),"\u2014an ",(0,t.jsx)(n,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"generalized-boolean"}),"\u2014a ",(0,t.jsx)(r.em,{children:"generalized boolean"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{styled:!0,term:"remprop",children:(0,t.jsx)("b",{children:"remprop"})})," removes from the ",(0,t.jsx)(r.em,{children:"property list"})," ",(0,t.jsx)("sub",{children:"2"})," of ",(0,t.jsx)(n,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})})," a ",(0,t.jsx)(n,{styled:!0,term:"property",children:(0,t.jsx)("i",{children:"property"})}),(0,t.jsx)("sub",{children:"1"})," with a ",(0,t.jsx)(r.em,{children:"property indicator identical"})," to ",(0,t.jsx)(n,{styled:!0,term:"indicator",children:(0,t.jsx)("i",{children:"indicator"})}),". If there are multiple ",(0,t.jsx)(r.em,{children:"properties"}),(0,t.jsx)("sub",{children:"1"})," with the ",(0,t.jsx)(n,{styled:!0,term:"identical",children:(0,t.jsx)("i",{children:"identical"})})," key, ",(0,t.jsx)(n,{styled:!0,term:"remprop",children:(0,t.jsx)("b",{children:"remprop"})})," only removes the first such ",(0,t.jsx)(n,{styled:!0,term:"property",children:(0,t.jsx)("i",{children:"property"})}),". ",(0,t.jsx)(n,{styled:!0,term:"remprop",children:(0,t.jsx)("b",{children:"remprop"})})," returns ",(0,t.jsx)(n,{styled:!0,term:"false",children:(0,t.jsx)("i",{children:"false"})})," if no such ",(0,t.jsx)(n,{styled:!0,term:"property",children:(0,t.jsx)("i",{children:"property"})})," was found, or ",(0,t.jsx)(n,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})})," if a property was found."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.em,{children:"property indicator"})," and the corresponding ",(0,t.jsx)(r.em,{children:"property value"})," are removed in an undefined order by destructively splicing the property list. The permissible side-effects correspond to those permitted for ",(0,t.jsx)(n,{styled:!0,term:"remf",children:(0,t.jsx)("b",{children:"remf"})}),", such that:"]}),"\n",(0,t.jsxs)(r.p,{children:["(remprop ",(0,t.jsx)(r.em,{children:"x y"}),") ",(0,t.jsx)(r.em,{children:"\u2261"})," (remf (symbol-plist ",(0,t.jsx)(r.em,{children:"x"}),") ",(0,t.jsx)(r.em,{children:"y"}),")"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:'\n(setq test (make-symbol "PSEUDO-PI")) \u2192 #:PSEUDO-PI \n(symbol-plist test) \u2192 () \n(setf (get test \u2019constant) t) \u2192 T \n(setf (get test \u2019approximation) 3.14) \u2192 3.14 \n(setf (get test \u2019error-range) \u2019noticeable) \u2192 NOTICEABLE \n(symbol-plist test) \n\u2192 (ERROR-RANGE NOTICEABLE APPROXIMATION 3.14 CONSTANT T) \n(setf (get test \u2019approximation) nil) \u2192 NIL \n(symbol-plist test) \n\u2192 (ERROR-RANGE NOTICEABLE APPROXIMATION NIL CONSTANT T) \n(get test \u2019approximation) \u2192 NIL \n\n\n\n(remprop test \u2019approximation) \u2192 true \n(get test \u2019approximation) \u2192 NIL \n(symbol-plist test) \n\u2192 (ERROR-RANGE NOTICEABLE CONSTANT T) \n(remprop test \u2019approximation) \u2192 NIL \n(symbol-plist test) \n\u2192 (ERROR-RANGE NOTICEABLE CONSTANT T) \n(remprop test \u2019error-range) \u2192 true \n(setf (get test \u2019approximation) 3) \u2192 3 \n(symbol-plist test) \n\u2192 (APPROXIMATION 3 CONSTANT T) \n\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.em,{children:"property list"})," of ",(0,t.jsx)(n,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})})," is modified."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(r.p,{children:["Should signal an error of ",(0,t.jsx)(n,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(n,{styled:!0,term:"type-error",children:(0,t.jsx)("b",{children:"type-error"})})," if ",(0,t.jsx)(n,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})})," is not a ",(0,t.jsx)(n,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{styled:!0,term:"remf",children:(0,t.jsx)("b",{children:"remf"})}),", ",(0,t.jsx)(n,{styled:!0,term:"symbol-plist",children:(0,t.jsx)("b",{children:"symbol-plist"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(n,{styled:!0,term:"number",children:(0,t.jsx)("i",{children:"Numbers"})})," and ",(0,t.jsx)(n,{styled:!0,term:"character",children:(0,t.jsx)("i",{children:"characters"})})," are not recommended for use as ",(0,t.jsx)(n,{styled:!0,term:"indicator",children:(0,t.jsx)("i",{children:"indicators"})})," in portable code since ",(0,t.jsx)(n,{styled:!0,term:"remprop",children:(0,t.jsx)("b",{children:"remprop"})})," tests with ",(0,t.jsx)(n,{styled:!0,term:"eq",children:(0,t.jsx)("b",{children:"eq"})})," rather than ",(0,t.jsx)(n,{styled:!0,term:"eql",children:(0,t.jsx)("b",{children:"eql"})}),", and consequently the effect of using such ",(0,t.jsx)(n,{styled:!0,term:"indicator",children:(0,t.jsx)("i",{children:"indicators"})})," is ",(0,t.jsx)(n,{styled:!0,term:"implementation-dependent",children:(0,t.jsx)("i",{children:"implementation-dependent"})}),". Of course, if you\u2019ve gotten as far as needing to remove such a ",(0,t.jsx)(n,{styled:!0,term:"property",children:(0,t.jsx)("i",{children:"property"})}),", you don\u2019t have much choice\u2014the time to have been thinking about this was when you used ",(0,t.jsx)(n,{styled:!0,term:"setf",children:(0,t.jsx)("b",{children:"setf"})})," of ",(0,t.jsx)(n,{styled:!0,term:"get",children:(0,t.jsx)("b",{children:"get"})})," to establish the ",(0,t.jsx)(n,{styled:!0,term:"property",children:(0,t.jsx)("i",{children:"property"})}),"."]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const c={title:"remprop"},o="remprop",d={id:"chap-10/ba-c-dictionary/remprop_function",title:"remprop",description:"Expanded Reference: remprop",source:"@site/docs/chap-10/ba-c-dictionary/remprop_function.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/remprop_function",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/remprop_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/remprop_function.md",tags:[],version:"current",frontMatter:{title:"remprop"},sidebar:"tutorialSidebar",previous:{title:"makunbound",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/makunbound_function"},next:{title:"set",permalink:"/cl-language-reference/chap-10/ba-c-dictionary/set_function"}},p={},h=[{value:"Expanded Reference: remprop",id:"expanded-reference-remprop",level:2}];function a(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"remprop",children:"remprop"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(r.h2,{id:"expanded-reference-remprop",children:"Expanded Reference: remprop"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(remprop )\n"})})]})}function m(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>l});var t=n(67294);const s={},i=t.createContext(s);function l(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);