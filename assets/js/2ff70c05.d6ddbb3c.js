"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[99386],{92789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>m,toc:()=>l});var r=t(85893),s=t(11151);function a(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"make-two-way-stream"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"make-two-way-stream"})," ",(0,r.jsx)(n.em,{children:"input-stream output-stream \u2192 two-way-stream"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"input-stream"}),"\u2014a ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"output-stream"}),"\u2014a ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"two-way-stream"}),"\u2014a ",(0,r.jsx)(n.em,{children:"two-way stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns a ",(0,r.jsx)(n.em,{children:"two-way stream"})," that gets its input from ",(0,r.jsx)(n.em,{children:"input-stream"})," and sends its output to ",(0,r.jsx)(n.em,{children:"output-stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(with-output-to-string (out) \n\n\n\n(with-input-from-string (in "input...") \n\n\n\n(let ((two (make-two-way-stream in out))) \n\n\n\n(format two "output...") \n\n\n\n(setq what-is-read (read two))))) *\u2192* "output..." \n\n\n\nwhat-is-read *\u2192* INPUT... \n\n\n\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"input-stream"})," is not an ",(0,r.jsx)(n.em,{children:"input stream"}),". Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"output-stream"})," is not an ",(0,r.jsx)(n.em,{children:"output stream"}),"."]}),"\n",(0,r.jsxs)("b",{children:[(0,r.jsx)("sup",{children:"two-way-stream-input-stream, two-way-stream"})," output-stream"]}),"\n",(0,r.jsx)("i",{children:"Function"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"two-way-stream-input-stream"})," ",(0,r.jsx)(n.em,{children:"two-way-stream \u2192 input-stream"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"two-way-stream-output-stream"})," ",(0,r.jsx)(n.em,{children:"two-way-stream \u2192 output-stream"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"two-way-stream"}),"\u2014a ",(0,r.jsx)(n.em,{children:"two-way stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"input-stream"}),"\u2014an ",(0,r.jsx)(n.em,{children:"input stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"output-stream"}),"\u2014an ",(0,r.jsx)(n.em,{children:"output stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"two-way-stream-input-stream"})," returns the ",(0,r.jsx)(n.em,{children:"stream"})," from which ",(0,r.jsx)(n.em,{children:"two-way-stream"})," receives input. ",(0,r.jsx)(n.strong,{children:"two-way-stream-output-stream"})," returns the ",(0,r.jsx)(n.em,{children:"stream"})," to which ",(0,r.jsx)(n.em,{children:"two-way-stream"})," sends output."]}),"\n",(0,r.jsxs)("b",{children:[(0,r.jsx)("sup",{children:"echo-stream-input-stream, echo-stream-output"})," stream"]}),"\n",(0,r.jsx)("i",{children:"Function"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"echo-stream-input-stream"})," ",(0,r.jsx)(n.em,{children:"echo-stream \u2192 input-stream"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"echo-stream-output-stream"})," ",(0,r.jsx)(n.em,{children:"echo-stream \u2192 output-stream"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"echo-stream"}),"\u2014an ",(0,r.jsx)(n.em,{children:"echo stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"input-stream"}),"\u2014an ",(0,r.jsx)(n.em,{children:"input stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"output-stream"}),"\u2014an ",(0,r.jsx)(n.em,{children:"output stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"echo-stream-input-stream"})," returns the ",(0,r.jsx)(n.em,{children:"input stream"})," from which ",(0,r.jsx)(n.em,{children:"echo-stream"})," receives input. ",(0,r.jsx)(n.strong,{children:"echo-stream-output-stream"})," returns the ",(0,r.jsx)(n.em,{children:"output stream"})," to which ",(0,r.jsx)(n.em,{children:"echo-stream"})," sends output."]})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}const c={},o="make-two-way-stream",m={id:"chap-21/cb-c-dictionary/maketwowaystream",title:"make-two-way-stream",description:"Expanded Reference: make-two-way-stream",source:"@site/docs/chap-21/cb-c-dictionary/maketwowaystream.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/maketwowaystream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/maketwowaystream",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/maketwowaystream.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"make-synonym-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/makesynonymstream"},next:{title:"make-two-way-stream**, **two-way-stream-input-stream**, **two-way-stream-output-stream input-stream-p, output-stream-p",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/maketwowaystreamaa"}},d={},l=[{value:"Expanded Reference: make-two-way-stream",id:"expanded-reference-make-two-way-stream",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"make-two-way-stream",children:"make-two-way-stream"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-make-two-way-stream",children:"Expanded Reference: make-two-way-stream"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(make-two-way-stream )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(67294);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);