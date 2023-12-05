"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[44690],{32390:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=a(85893),s=a(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"translate-logical-pathname"})," ",(0,t.jsx)(n.em,{children:"Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"translate-logical-pathname"})," ",(0,t.jsx)(n.em,{children:"pathname"})," &key ",(0,t.jsx)(n.em,{children:"\u2192 physical-pathname"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"pathname"}),"\u2014a ",(0,t.jsx)(n.em,{children:"pathname designator"})," , or a ",(0,t.jsx)(n.em,{children:"logical pathname namestring"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"physical-pathname"}),"\u2014a ",(0,t.jsx)(n.em,{children:"physical pathname"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Translates ",(0,t.jsx)(n.em,{children:"pathname"})," to a ",(0,t.jsx)(n.em,{children:"physical pathname"}),", which it returns."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"pathname"})," is a ",(0,t.jsx)(n.em,{children:"stream"}),", the ",(0,t.jsx)(n.em,{children:"stream"})," can be either open or closed. ",(0,t.jsx)(n.strong,{children:"translate-logical-pathname"})," returns the same physical pathname after a file is closed as it did when the file was open. It is an er ror if ",(0,t.jsx)(n.em,{children:"pathname"})," is a ",(0,t.jsx)(n.em,{children:"stream"})," that is created with ",(0,t.jsx)(n.strong,{children:"make-two-way-stream"}),", ",(0,t.jsx)(n.strong,{children:"make-echo-stream"}),", ",(0,t.jsx)(n.strong,{children:"make-broadcast-stream"}),", ",(0,t.jsx)(n.strong,{children:"make-concatenated-stream"}),", ",(0,t.jsx)(n.strong,{children:"make-string-input-stream"}),", ",(0,t.jsx)(n.strong,{children:"make-string-output-stream"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"pathname"})," is a ",(0,t.jsx)(n.em,{children:"logical pathname"})," namestring, the host portion of the ",(0,t.jsx)(n.em,{children:"logical pathname"})," namestring and its following ",(0,t.jsx)(n.em,{children:"colon"})," are required."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Pathname"})," is first coerced to a ",(0,t.jsx)(n.em,{children:"pathname"}),". If the coerced ",(0,t.jsx)(n.em,{children:"pathname"})," is a physical pathname, it is returned. If the coerced ",(0,t.jsx)(n.em,{children:"pathname"})," is a ",(0,t.jsx)(n.em,{children:"logical pathname"}),", the first matching translation (according to ",(0,t.jsx)(n.strong,{children:"pathname-match-p"}),") of the ",(0,t.jsx)(n.em,{children:"logical pathname"})," host is applied, as if by calling ",(0,t.jsx)(n.strong,{children:"translate-pathname"}),". If the result is a ",(0,t.jsx)(n.em,{children:"logical pathname"}),", this process is repeated. When the result is finally a physical pathname, it is returned. If no translation matches, an error is signaled."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"translate-logical-pathname"})," might perform additional translations, typically to provide translation of file types to local naming conventions, to accomodate physical file systems with limited length names, or to deal with special character requirements such as translating hyphens to underscores or uppercase letters to lowercase. Any such additional translations are ",(0,t.jsx)(n.em,{children:"implementation-defined"}),". Some implementations do no additional translations."]}),"\n",(0,t.jsxs)(n.p,{children:["There are no specified keyword arguments for ",(0,t.jsx)(n.strong,{children:"translate-logical-pathname"}),", but implementations are permitted to extend it by adding keyword arguments."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:" \n\n\n\nSee **logical-pathname-translations**. \n\n\n\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"pathname"})," is incorrectly supplied, an error of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"type-error"})," is signaled."]}),"\n",(0,t.jsxs)(n.p,{children:["If no translation matches, an error of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"file-error"})," is signaled."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"logical-pathname"}),", ",(0,t.jsx)(n.strong,{children:"logical-pathname-translations"}),", ",(0,t.jsx)(n.strong,{children:"logical-pathname"}),", Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames)"]})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}const l={},c="translate-logical-pathname",o={id:"chap-19/bj-e-dictionary/translatelogicalpathname",title:"translate-logical-pathname",description:"Expanded Reference: translate-logical-pathname",source:"@site/docs/chap-19/bj-e-dictionary/translatelogicalpathname.md",sourceDirName:"chap-19/bj-e-dictionary",slug:"/chap-19/bj-e-dictionary/translatelogicalpathname",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/translatelogicalpathname",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-19/bj-e-dictionary/translatelogicalpathname.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pathnamep",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/pathnamep"},next:{title:"translate-pathname",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/translatepathname"}},h={},d=[{value:"Expanded Reference: translate-logical-pathname",id:"expanded-reference-translate-logical-pathname",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"translate-logical-pathname",children:"translate-logical-pathname"}),"\n","\n","\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-translate-logical-pathname",children:"Expanded Reference: translate-logical-pathname"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(translate-logical-pathname )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>i});var t=a(67294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);