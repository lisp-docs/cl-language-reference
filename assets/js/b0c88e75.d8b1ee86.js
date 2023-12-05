"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[74336],{9489:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var t=r(85893),s=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"make-string-input-stream"})," ",(0,t.jsx)(n.em,{children:"Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"make-string-input-stream"})," ",(0,t.jsx)(n.em,{children:"string"})," &optional ",(0,t.jsx)(n.em,{children:"start end \u2192 string-stream"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"string"}),"\u2014a ",(0,t.jsx)(n.em,{children:"string"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"start"}),", ",(0,t.jsx)(n.em,{children:"end"}),"\u2014",(0,t.jsx)(n.em,{children:"bounding index designators"})," of ",(0,t.jsx)(n.em,{children:"string"}),". The defaults for ",(0,t.jsx)(n.em,{children:"start"})," and ",(0,t.jsx)(n.em,{children:"end"})," are 0 and ",(0,t.jsx)(n.strong,{children:"nil"}),", respectively."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"string-stream"}),"\u2014an ",(0,t.jsx)(n.em,{children:"input string stream"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns an ",(0,t.jsx)(n.em,{children:"input string stream"}),". This ",(0,t.jsx)(n.em,{children:"stream"})," will supply, in order, the ",(0,t.jsx)(n.em,{children:"characters"})," in the substring of ",(0,t.jsx)(n.em,{children:"string bounded"})," by ",(0,t.jsx)(n.em,{children:"start"})," and ",(0,t.jsx)(n.em,{children:"end"}),". After the last ",(0,t.jsx)(n.em,{children:"character"})," has been supplied, the ",(0,t.jsx)(n.em,{children:"string stream"})," will then be at ",(0,t.jsx)(n.em,{children:"end of file"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(let ((string-stream (make-string-input-stream "1 one "))) \n\n\n\n(list (read string-stream nil nil) \n\n\n\n(read string-stream nil nil) \n\n\n\n(read string-stream nil nil))) \n\n\n\n*\u2192* (1 ONE NIL) \n\n\n\n(read (make-string-input-stream "prefixtargetsuffix" 6 12)) *\u2192* TARGET \n\n\n\n\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"with-input-from-string"})})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const c={},d="make-string-input-stream",l={id:"chap-21/cb-c-dictionary/makestringinputstream",title:"make-string-input-stream",description:"Expanded Reference: make-string-input-stream",source:"@site/docs/chap-21/cb-c-dictionary/makestringinputstream.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/makestringinputstream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/makestringinputstream",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/makestringinputstream.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"make-echo-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/makeechostream"},next:{title:"make-string-output-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/makestringoutputstream"}},o={},m=[{value:"Expanded Reference: make-string-input-stream",id:"expanded-reference-make-string-input-stream",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"make-string-input-stream",children:"make-string-input-stream"}),"\n","\n","\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-make-string-input-stream",children:"Expanded Reference: make-string-input-stream"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(make-string-input-stream )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>a});var t=r(67294);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);