"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[57442],{81282:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>f});var t=n(85893),a=n(11151);function o(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"\u2217"}),(0,t.jsx)(r.strong,{children:"read-default-float-format"}),(0,t.jsx)(r.em,{children:"\u2217 Variable"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Value Type:"})}),"\n",(0,t.jsxs)(r.p,{children:["one of the ",(0,t.jsx)(r.em,{children:"atomic type specifiers"})," ",(0,t.jsx)(r.strong,{children:"short-float"}),", ",(0,t.jsx)(r.strong,{children:"single-float"}),", ",(0,t.jsx)(r.strong,{children:"double-float"}),", or ",(0,t.jsx)(r.strong,{children:"long-float"}),", or else some other ",(0,t.jsx)(r.em,{children:"type specifier"})," defined by the ",(0,t.jsx)(r.em,{children:"implementation"})," to be acceptable."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Initial Value:"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.em,{children:"symbol"})," ",(0,t.jsx)(r.strong,{children:"single-float"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:["Controls the floating-point format that is to be used when reading a floating-point number that has no ",(0,t.jsx)(r.em,{children:"exponent marker"})," or that has e or E for an ",(0,t.jsx)(r.em,{children:"exponent marker"})," . Other ",(0,t.jsx)(r.em,{children:"exponent markers"})," explicitly prescribe the floating-point format to be used."]}),"\n",(0,t.jsxs)(r.p,{children:["The printer uses ",(0,t.jsx)(r.strong,{children:"*read-default-float-format*"})," to guide the choice of ",(0,t.jsx)(r.em,{children:"exponent markers"})," when printing floating-point numbers."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:'\n(let ((\\*read-default-float-format\\* \u2019double-float)) \n  (read-from-string "(1.0 1.0e0 1.0s0 1.0f0 1.0d0 1.0L0)")) \n\u2192 (1.0 1.0 1.0 1.0 1.0 1.0) ;Implementation has float format F. \n\u2192 (1.0 1.0 1.0s0 1.0 1.0 1.0) ;Implementation has float formats S and F. \u2192 (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0d0) ;Implementation has float formats F and D. \u2192 (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0d0) ;Implementation has float formats S, F, D. \u2192 (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0L0) ;Implementation has float formats F, D, L. \u2192 (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0L0) ;Implementation has formats S, F, D, L. \n*\u2217***read-eval***\u2217 Variable* \n\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Value Type:"})}),"\n",(0,t.jsxs)(r.p,{children:["a ",(0,t.jsx)(r.em,{children:"generalized boolean"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Initial Value:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"true"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:["If it is ",(0,t.jsx)(r.em,{children:"true"}),", the #. ",(0,t.jsx)(r.em,{children:"reader macro"})," has its normal effect. Otherwise, that ",(0,t.jsx)(r.em,{children:"reader macro"})," signals an error of ",(0,t.jsx)(r.em,{children:"type"})," ",(0,t.jsx)(r.strong,{children:"reader-error"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"*print-readably*"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(r.p,{children:["If ",(0,t.jsx)(r.strong,{children:"*read-eval*"})," is ",(0,t.jsx)(r.em,{children:"false"})," and ",(0,t.jsx)(r.strong,{children:"*print-readably*"})," is ",(0,t.jsx)(r.em,{children:"true"}),", any ",(0,t.jsx)(r.em,{children:"method"})," for ",(0,t.jsx)(r.strong,{children:"print-object"})," that would output a reference to the #. ",(0,t.jsx)(r.em,{children:"reader macro"})," either outputs something different or signals an error of ",(0,t.jsx)(r.em,{children:"type"})," ",(0,t.jsx)(r.strong,{children:"print-not-readable"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}const l={title:"read-default-float-format"},s="*read-default-float-format*",i={id:"chap-23/cd-c-dictionary/read-default-float-format_variable",title:"read-default-float-format",description:"Expanded Reference: \\read-default-float-format\\",source:"@site/docs/chap-23/cd-c-dictionary/read-default-float-format_variable.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/read-default-float-format_variable",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/read-default-float-format_variable",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/read-default-float-format_variable.md",tags:[],version:"current",frontMatter:{title:"read-default-float-format"},sidebar:"tutorialSidebar",previous:{title:"make-dispatch-macro-character",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/make-dispatch-macro-character_function"},next:{title:"read-delimited-list",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/read-delimited-list_function"}},c={},f=[{value:"Expanded Reference: *read-default-float-format*",id:"expanded-reference-read-default-float-format",level:2}];function h(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"read-default-float-format",children:"*read-default-float-format*"}),"\n","\n","\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(r.h2,{id:"expanded-reference-read-default-float-format",children:"Expanded Reference: *read-default-float-format*"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"*read-default-float-format*\n"})})]})}function m(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>d});var t=n(67294);const a={},o=t.createContext(a);function d(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);