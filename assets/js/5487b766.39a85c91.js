"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[54216],{65823:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>m,metadata:()=>i,toc:()=>l});var r=s(85893),t=s(11151);function a(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"make-synonym-stream"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"make-synonym-stream"})," ",(0,r.jsx)(n.em,{children:"symbol \u2192 synonym-stream"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,r.jsx)(n.em,{children:"symbol"})," that names a ",(0,r.jsx)(n.em,{children:"dynamic variable"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"synonym-stream"}),"\u2014a ",(0,r.jsx)(n.em,{children:"synonym stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns a ",(0,r.jsx)(n.em,{children:"synonym stream"})," whose ",(0,r.jsx)(n.em,{children:"synonym stream symbol"})," is ",(0,r.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'(setq a-stream (make-string-input-stream "a-stream") \n      b-stream (make-string-input-stream "b-stream")) \n\u2192 #\\<String Input Stream\\> \n(setq s-stream (make-synonym-stream \u2019c-stream)) \n\u2192 #<SYNONYM-STREAM for C-STREAM> \n(setq c-stream a-stream) \n\u2192 #\\<String Input Stream\\> \n(read s-stream) \u2192 A-STREAM \n(setq c-stream b-stream) \n\u2192 #\\<String Input Stream\\> \n(read s-stream) \u2192 B-STREAM \n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal ",(0,r.jsx)(n.strong,{children:"type-error"})," if its argument is not a ",(0,r.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 21.1 (Stream Concepts)"})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}const m={},o="make-synonym-stream",i={id:"chap-21/cb-c-dictionary/makesynonymstream",title:"make-synonym-stream",description:"Expanded Reference: make-synonym-stream",source:"@site/docs/chap-21/cb-c-dictionary/makesynonymstream.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/makesynonymstream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/makesynonymstream",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/makesynonymstream.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"make-string-output-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/makestringoutputstream"},next:{title:"make-two-way-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/maketwowaystream"}},d={},l=[{value:"Expanded Reference: make-synonym-stream",id:"expanded-reference-make-synonym-stream",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"make-synonym-stream",children:"make-synonym-stream"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-make-synonym-stream",children:"Expanded Reference: make-synonym-stream"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(make-synonym-stream )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>m,a:()=>c});var r=s(67294);const t={},a=r.createContext(t);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);