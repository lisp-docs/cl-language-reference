"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[53645],{42056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>h,metadata:()=>c,toc:()=>m});var l=n(85893),d=n(11151);function s(e){const t={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components},{ClLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"call-method, make-method"})," ",(0,l.jsx)(t.em,{children:"Local Macro"})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Syntax:"})}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(n,{styled:!0,term:"call-method",children:(0,l.jsx)("b",{children:"call-method"})})," ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})})," &optional ",(0,l.jsx)(t.em,{children:"next-method-list \u2192 {result}"}),"*"]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(n,{styled:!0,term:"make-method",children:(0,l.jsx)("b",{children:"make-method"})})," ",(0,l.jsx)(t.em,{children:"form \u2192 method-object"})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Arguments and Values:"})}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})}),"\u2014a ",(0,l.jsx)(t.em,{children:"method object"}),", or a ",(0,l.jsx)(n,{styled:!0,term:"list",children:(0,l.jsx)("i",{children:"list"})})," (see below); not evaluated."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.em,{children:"method-object"}),"\u2014a ",(0,l.jsx)(t.em,{children:"method object"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.em,{children:"next-method-list"}),"\u2014a ",(0,l.jsx)(n,{styled:!0,term:"list",children:(0,l.jsx)("i",{children:"list"})})," of ",(0,l.jsx)(t.em,{children:"method objects"}),"; not evaluated."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.em,{children:"results"}),"\u2014the ",(0,l.jsx)(n,{styled:!0,term:"value",children:(0,l.jsx)("i",{children:"values"})})," returned by the ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})})," invocation."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Description:"})}),"\n",(0,l.jsxs)(t.p,{children:["The macro ",(0,l.jsx)(n,{styled:!0,term:"call-method",children:(0,l.jsx)("b",{children:"call-method"})})," is used in method combination. It hides the ",(0,l.jsx)(n,{styled:!0,term:"implementation-dependent",children:(0,l.jsx)("i",{children:"implementation-dependent"})})," details of how ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"methods"})})," are called. The macro ",(0,l.jsx)(n,{styled:!0,term:"call-method",children:(0,l.jsx)("b",{children:"call-method"})})," has ",(0,l.jsx)(t.em,{children:"lexical scope"})," and can only be used within an ",(0,l.jsx)(t.em,{children:"effective method form"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["Whether or not ",(0,l.jsx)(n,{styled:!0,term:"call-method",children:(0,l.jsx)("b",{children:"call-method"})})," is ",(0,l.jsx)(n,{styled:!0,term:"fbound",children:(0,l.jsx)("i",{children:"fbound"})})," in the ",(0,l.jsx)(t.em,{children:"global environment"})," is ",(0,l.jsx)(n,{styled:!0,term:"implementation-dependent",children:(0,l.jsx)("i",{children:"implementation-dependent"})}),"; however, the restrictions on redefinition and ",(0,l.jsx)(t.em,{children:"shadowing"})," of ",(0,l.jsx)(n,{styled:!0,term:"call-method",children:(0,l.jsx)("b",{children:"call-method"})})," are the same as for ",(0,l.jsx)(n,{styled:!0,term:"symbol",children:(0,l.jsx)("i",{children:"symbols"})})," in the COMMON-LISP ",(0,l.jsx)(n,{styled:!0,term:"package",children:(0,l.jsx)("i",{children:"package"})})," which are ",(0,l.jsx)(n,{styled:!0,term:"fbound",children:(0,l.jsx)("i",{children:"fbound"})})," in the ",(0,l.jsx)(t.em,{children:"global environment"}),". The consequences of attempting to use ",(0,l.jsx)(n,{styled:!0,term:"call-method",children:(0,l.jsx)("b",{children:"call-method"})})," outside of an ",(0,l.jsx)(t.em,{children:"effective method form"})," are undefined."]}),"\n",(0,l.jsxs)(t.p,{children:["The macro ",(0,l.jsx)(n,{styled:!0,term:"call-method",children:(0,l.jsx)("b",{children:"call-method"})})," invokes the specified ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})}),", supplying it with arguments and with definitions for ",(0,l.jsx)(n,{styled:!0,term:"call-next-method",children:(0,l.jsx)("b",{children:"call-next-method"})})," and for ",(0,l.jsx)(n,{styled:!0,term:"next-method-p",children:(0,l.jsx)("b",{children:"next-method-p"})}),". If the invocation of ",(0,l.jsx)(n,{styled:!0,term:"call-method",children:(0,l.jsx)("b",{children:"call-method"})})," is lexically inside of a ",(0,l.jsx)(n,{styled:!0,term:"make-method",children:(0,l.jsx)("b",{children:"make-method"})}),", the arguments are those that were supplied to that method. Otherwise the arguments are those that were supplied to the generic function. The definitions of ",(0,l.jsx)(n,{styled:!0,term:"call-next-method",children:(0,l.jsx)("b",{children:"call-next-method"})})," and ",(0,l.jsx)(n,{styled:!0,term:"next-method-p",children:(0,l.jsx)("b",{children:"next-method-p"})})," rely on the specified ",(0,l.jsx)(t.em,{children:"next-method-list"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["If ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})})," is a ",(0,l.jsx)(n,{styled:!0,term:"list",children:(0,l.jsx)("i",{children:"list"})}),", the first element of the ",(0,l.jsx)(n,{styled:!0,term:"list",children:(0,l.jsx)("i",{children:"list"})})," must be the symbol ",(0,l.jsx)(n,{styled:!0,term:"make-method",children:(0,l.jsx)("b",{children:"make-method"})})," and the second element must be a ",(0,l.jsx)(n,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"form"})}),". Such a ",(0,l.jsx)(n,{styled:!0,term:"list",children:(0,l.jsx)("i",{children:"list"})})," specifies a ",(0,l.jsx)(t.em,{children:"method object"})," whose ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})})," function has a body that is the given ",(0,l.jsx)(n,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"form"})}),"."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.em,{children:"Next-method-list"})," can contain ",(0,l.jsx)(t.em,{children:"method objects"})," or ",(0,l.jsx)(n,{styled:!0,term:"list",children:(0,l.jsx)("i",{children:"lists"})}),", the first element of which must be the symbol ",(0,l.jsx)(n,{styled:!0,term:"make-method",children:(0,l.jsx)("b",{children:"make-method"})})," and the second element of which must be a ",(0,l.jsx)(n,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"form"})}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["Those are the only two places where ",(0,l.jsx)(n,{styled:!0,term:"make-method",children:(0,l.jsx)("b",{children:"make-method"})})," can be used. The ",(0,l.jsx)(n,{styled:!0,term:"form",children:(0,l.jsx)("i",{children:"form"})})," used with ",(0,l.jsx)(n,{styled:!0,term:"make-method",children:(0,l.jsx)("b",{children:"make-method"})})," is evaluated in the ",(0,l.jsx)(t.em,{children:"null lexical environment"})," augmented with a local macro definition for ",(0,l.jsx)(n,{styled:!0,term:"call-method",children:(0,l.jsx)("b",{children:"call-method"})})," and with bindings named by symbols not ",(0,l.jsx)(n,{styled:!0,term:"accessible",children:(0,l.jsx)("i",{children:"accessible"})})," from the COMMON-LISP-USER ",(0,l.jsx)(n,{styled:!0,term:"package",children:(0,l.jsx)("i",{children:"package"})}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(n,{styled:!0,term:"call-next-method",children:(0,l.jsx)("b",{children:"call-next-method"})})," function available to ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})})," will call the first ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})})," in ",(0,l.jsx)(t.em,{children:"next-method-list"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(n,{styled:!0,term:"call-next-method",children:(0,l.jsx)("b",{children:"call-next-method"})})," function available in that ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})}),", in turn, will call the second ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})})," in ",(0,l.jsx)(t.em,{children:"next-method-list"}),", and so on, until the list of next ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"methods"})})," is exhausted."]}),"\n",(0,l.jsxs)(t.p,{children:["If ",(0,l.jsx)(t.em,{children:"next-method-list"})," is not supplied, the ",(0,l.jsx)(n,{styled:!0,term:"call-next-method",children:(0,l.jsx)("b",{children:"call-next-method"})})," function available to ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})})," signals an error of ",(0,l.jsx)(n,{styled:!0,term:"type",children:(0,l.jsx)("i",{children:"type"})})," ",(0,l.jsx)(n,{styled:!0,term:"control-error",children:(0,l.jsx)("b",{children:"control-error"})})," and the ",(0,l.jsx)(n,{styled:!0,term:"next-method-p",children:(0,l.jsx)("b",{children:"next-method-p"})})," function available to ",(0,l.jsx)(n,{styled:!0,term:"method",children:(0,l.jsx)("i",{children:"method"})})," returns ",(0,l.jsx)(n,{styled:!0,term:"nil",children:(0,l.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-lisp",children:"\n\n"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"See Also:"})}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(n,{styled:!0,term:"call-next-method",children:(0,l.jsx)("b",{children:"call-next-method"})}),", ",(0,l.jsx)(n,{styled:!0,term:"define-method-combination",children:(0,l.jsx)("b",{children:"define-method-combination"})}),", ",(0,l.jsx)(n,{styled:!0,term:"next-method-p",children:(0,l.jsx)("b",{children:"next-method-p"})})]})]})}function i(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}const h={title:"call-method, make-method"},r="call-method, make-method",c={id:"chap-7/h-h-dictionary/call-method_make-method_local-macro",title:"call-method, make-method",description:"Expanded Reference: call-method, make-method",source:"@site/docs/chap-7/h-h-dictionary/call-method_make-method_local-macro.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/call-method_make-method_local-macro",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/call-method_make-method_local-macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/call-method_make-method_local-macro.md",tags:[],version:"current",frontMatter:{title:"call-method, make-method"},sidebar:"tutorialSidebar",previous:{title:"allocate-instance",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/allocate-instance_standard-generic-function"},next:{title:"call-next-method",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/call-next-method_local-function"}},o={},m=[{value:"Expanded Reference: call-method, make-method",id:"expanded-reference-call-method-make-method",level:2}];function a(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"call-method-make-method",children:"call-method, make-method"}),"\n","\n","\n",(0,l.jsx)(i,{}),"\n",(0,l.jsx)(t.h2,{id:"expanded-reference-call-method-make-method",children:"Expanded Reference: call-method, make-method"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-lisp",children:"(call-method, make-method )\n"})})]})}function x(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>h,a:()=>i});var l=n(67294);const d={},s=l.createContext(d);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);