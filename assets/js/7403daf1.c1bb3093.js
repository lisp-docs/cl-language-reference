"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[15124],{22194:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var t=a(85893),i=a(11151);function s(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"load-logical-pathname-translations"})," ",(0,t.jsx)(e.em,{children:"Function"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"load-logical-pathname-translations"})," ",(0,t.jsx)(e.em,{children:"host \u2192 just-loaded"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"host"}),"\u2014a ",(0,t.jsx)(e.em,{children:"string"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"just-loaded"}),"\u2014a ",(0,t.jsx)(e.em,{children:"generalized boolean"}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(e.p,{children:["Searches for and loads the definition of a ",(0,t.jsx)(e.em,{children:"logical host"})," named ",(0,t.jsx)(e.em,{children:"host"}),", if it is not already defined. The specific nature of the search is ",(0,t.jsx)(e.em,{children:"implementation-defined"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["If the ",(0,t.jsx)(e.em,{children:"host"})," is already defined, no attempt to find or load a definition is attempted, and ",(0,t.jsx)(e.em,{children:"false"})," is returned. If the ",(0,t.jsx)(e.em,{children:"host"})," is not already defined, but a definition is successfully found and loaded, ",(0,t.jsx)(e.em,{children:"true"})," is returned. Otherwise, an error is signaled."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lisp",children:' \n\n\n\n(translate-logical-pathname "hacks:weather;barometer.lisp.newest") \n\n\n\n\u25b7 Error: The logical host HACKS is not defined. \n\n\n\n(load-logical-pathname-translations "HACKS") \n\n\n\n\u25b7 ;; Loading SYS:SITE;HACKS.TRANSLATIONS \n\n\n\n\u25b7 ;; Loading done. \n\n\n\n*\u2192 true* \n\n\n\n(translate-logical-pathname "hacks:weather;barometer.lisp.newest") \n\n\n\n*\u2192* #P"HELIUM:[SHARED.HACKS.WEATHER]BAROMETER.LSP;0" \n\n\n\n(load-logical-pathname-translations "HACKS") \n\n\n\n*\u2192 false* \n\n\n\n\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(e.p,{children:["If no definition is found, an error of ",(0,t.jsx)(e.em,{children:"type"})," ",(0,t.jsx)(e.strong,{children:"error"})," is signaled."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"logical-pathname"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"Logical pathname"})," definitions will be created not just by ",(0,t.jsx)(e.em,{children:"implementors"})," but also by ",(0,t.jsx)(e.em,{children:"programmers"}),". As such, it is important that the search strategy be documented. For example, an ",(0,t.jsx)(e.em,{children:"implementation"})," might define that the definition of a ",(0,t.jsx)(e.em,{children:"host"})," is to be found in a file called \u201c",(0,t.jsx)(e.em,{children:"host"}),".translations\u201d in some specifically named directory."]})]})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(s,{...n})}):s(n)}const r={},o="load-logical-pathname-translations",c={id:"chap-19/bj-e-dictionary/loadlogicalpathnametranslations",title:"load-logical-pathname-translations",description:"Expanded Reference: load-logical-pathname-translations",source:"@site/docs/chap-19/bj-e-dictionary/loadlogicalpathnametranslations.md",sourceDirName:"chap-19/bj-e-dictionary",slug:"/chap-19/bj-e-dictionary/loadlogicalpathnametranslations",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/loadlogicalpathnametranslations",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-19/bj-e-dictionary/loadlogicalpathnametranslations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"19.4 Filenames Dictionary",permalink:"/cl-language-reference/docs/category/194-filenames-dictionary"},next:{title:"logical-pathname",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/logicalpathname"}},d={},h=[{value:"Expanded Reference: load-logical-pathname-translations",id:"expanded-reference-load-logical-pathname-translations",level:2}];function p(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"load-logical-pathname-translations",children:"load-logical-pathname-translations"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(e.h2,{id:"expanded-reference-load-logical-pathname-translations",children:"Expanded Reference: load-logical-pathname-translations"}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lisp",children:"(load-logical-pathname-translations )\n"})})]})}function m(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>r,a:()=>l});var t=a(67294);const i={},s=t.createContext(i);function l(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);