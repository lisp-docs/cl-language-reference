"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[81003],{16613:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(85893),a=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"make-broadcast-stream"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"make-broadcast-stream"})," &rest ",(0,r.jsx)(n.em,{children:"streams \u2192 broadcast-stream"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"stream"}),"\u2014an ",(0,r.jsx)(n.em,{children:"output stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"broadcast-stream"}),"\u2014a ",(0,r.jsx)(n.em,{children:"broadcast stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns a ",(0,r.jsx)(n.em,{children:"broadcast stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:' \n\n(setq a-stream (make-string-output-stream) \n\nb-stream (make-string-output-stream)) \u2192 #\\<String Output Stream\\> \n\n(format (make-broadcast-stream a-stream b-stream) \n\n"this will go to both streams") \u2192 NIL \n\n(get-output-stream-string a-stream) \u2192 "this will go to both streams" \n\n\n\n \n\n \n\n(get-output-stream-string b-stream) \u2192 "this will go to both streams" \n\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if any ",(0,r.jsx)(n.em,{children:"stream"})," is not an ",(0,r.jsx)(n.em,{children:"output stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"broadcast-stream-streams"})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const o={},i="make-broadcast-stream",d={id:"chap-21/cb-c-dictionary/makebroadcaststream",title:"make-broadcast-stream",description:"Expanded Reference: make-broadcast-stream",source:"@site/docs/chap-21/cb-c-dictionary/makebroadcaststream.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/makebroadcaststream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/makebroadcaststream",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/makebroadcaststream.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"listen",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/listen"},next:{title:"make-concatenated-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/makeconcatenatedstream"}},m={},l=[{value:"Expanded Reference: make-broadcast-stream",id:"expanded-reference-make-broadcast-stream",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"make-broadcast-stream",children:"make-broadcast-stream"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-make-broadcast-stream",children:"Expanded Reference: make-broadcast-stream"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(make-broadcast-stream )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(67294);const a={},s=r.createContext(a);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);