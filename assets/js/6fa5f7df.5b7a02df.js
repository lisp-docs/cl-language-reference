"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[23657],{37929:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=s(85893),t=s(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sleep"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sleep"})," ",(0,r.jsx)(n.em,{children:"seconds \u2192"})," ",(0,r.jsx)(n.strong,{children:"nil"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"seconds"}),"\u2014a non-negative ",(0,r.jsx)(n.em,{children:"real"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Causes execution to cease and become dormant for approximately the seconds of real time indicated by ",(0,r.jsx)(n.em,{children:"seconds"}),", whereupon execution is resumed."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(sleep 1) \u2192 NIL \n;; Actually, since SLEEP is permitted to use approximate timing, \n;; this might not always yield true, but it will often enough that \n;; we felt it to be a productive example of the intent. \n(let ((then (get-universal-time)) \n      (now (progn (sleep 10) (get-universal-time)))) \n  (>= (- now then) 10)) \n\u2192 true \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsx)(n.p,{children:"Causes processing to pause."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(n.p,{children:"The granularity of the scheduler."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"seconds"})," is not a non-negative ",(0,r.jsx)(n.em,{children:"real"}),"."]})]})}function i(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const l={},o="sleep",a={id:"chap-25/cf-c-dictionary/sleep",title:"sleep",description:"Expanded Reference: sleep",source:"@site/docs/chap-25/cf-c-dictionary/sleep.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/sleep",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/sleep",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/sleep.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"/, //, ///",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/slash_slashslash_slashslashslash_variable"},next:{title:"software-type, software-version",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/softwaretype"}},d={},p=[{value:"Expanded Reference: sleep",id:"expanded-reference-sleep",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"sleep",children:"sleep"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-sleep",children:"Expanded Reference: sleep"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(sleep )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var r=s(67294);const t={},c=r.createContext(t);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);