"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[80115],{85003:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var t=n(85893),d=n(11151);function c(e){const r={em:"em",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"type-error-datum, type-error-expected-type"})," ",(0,t.jsx)(r.em,{children:"Function"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"type-error-datum"})," ",(0,t.jsx)(r.em,{children:"condition \u2192 datum"})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"type-error-expected-type"})," ",(0,t.jsx)(r.em,{children:"condition \u2192 expected-type"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"condition"}),"\u2014a ",(0,t.jsx)(r.em,{children:"condition"})," of ",(0,t.jsx)(r.em,{children:"type"})," ",(0,t.jsx)(r.strong,{children:"type-error"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"datum"}),"\u2014an ",(0,t.jsx)(r.em,{children:"object"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"expected-type"}),"\u2014a ",(0,t.jsx)(r.em,{children:"type specifier"})," ."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"type-error-datum"})," returns the offending datum in the ",(0,t.jsx)(r.em,{children:"situation"})," represented by the ",(0,t.jsx)(r.em,{children:"condition"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"type-error-expected-type"})," returns the expected type of the offending datum in the ",(0,t.jsx)(r.em,{children:"situation"})," represented by the ",(0,t.jsx)(r.em,{children:"condition"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(r.p,{children:"(defun fix-digits (condition)"}),"\n",(0,t.jsx)(r.p,{children:"(check-type condition type-error)"}),"\n",(0,t.jsx)(r.p,{children:"(let* ((digits \u2019(zero one two three four"}),"\n",(0,t.jsx)(r.p,{children:"five six seven eight nine))"}),"\n",(0,t.jsx)(r.p,{children:"(val (position (type-error-datum condition) digits)))"}),"\n",(0,t.jsx)(r.p,{children:"(if (and val (subtypep \u2019fixnum (type-error-expected-type condition)))"}),"\n",(0,t.jsx)(r.p,{children:"(store-value 7))))"}),"\n",(0,t.jsx)(r.p,{children:"(defun foo (x)"}),"\n",(0,t.jsx)(r.p,{children:"(handler-bind ((type-error #\u2019fix-digits))"}),"\n",(0,t.jsx)(r.p,{children:"(check-type x number)"}),"\n",(0,t.jsx)(r.p,{children:"(+ x 3)))"}),"\n",(0,t.jsx)(r.p,{children:"(foo \u2019seven)"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"\u2192"})," 10"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"type-error"}),", Chapter 9 (Conditions)"]})]})}function i(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const p={},o="type-error-datum, type-error-expected-type",s={id:"chap-4/e-e-dictionary/typeerrordatumaatypeerrorexpectedtype",title:"type-error-datum, type-error-expected-type",description:"Expanded Reference: type-error-datum, type-error-expected-type",source:"@site/docs/chap-4/e-e-dictionary/typeerrordatumaatypeerrorexpectedtype.md",sourceDirName:"chap-4/e-e-dictionary",slug:"/chap-4/e-e-dictionary/typeerrordatumaatypeerrorexpectedtype",permalink:"/cl-language-reference/docs/chap-4/e-e-dictionary/typeerrordatumaatypeerrorexpectedtype",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-4/e-e-dictionary/typeerrordatumaatypeerrorexpectedtype.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"type-error",permalink:"/cl-language-reference/docs/chap-4/e-e-dictionary/typeerror"},next:{title:"type-of",permalink:"/cl-language-reference/docs/chap-4/e-e-dictionary/typeof"}},a={},l=[{value:"Expanded Reference: type-error-datum, type-error-expected-type",id:"expanded-reference-type-error-datum-type-error-expected-type",level:2}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"type-error-datum-type-error-expected-type",children:"type-error-datum, type-error-expected-type"}),"\n","\n","\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(r.h2,{id:"expanded-reference-type-error-datum-type-error-expected-type",children:"Expanded Reference: type-error-datum, type-error-expected-type"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lisp",children:"(type-error-datum, type-error-expected-type )\n"})})]})}function h(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>p,a:()=>i});var t=n(67294);const d={},c=t.createContext(d);function i(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);