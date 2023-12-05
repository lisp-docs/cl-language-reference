"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[62714],{9485:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>p,toc:()=>o});var c=a(85893),r=a(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"rename-package"})," ",(0,c.jsx)(n.em,{children:"Function"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"rename-package"})," ",(0,c.jsx)(n.em,{children:"package new-name"})," &optional ",(0,c.jsx)(n.em,{children:"new-nicknames \u2192 package-object"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"package"}),"\u2014a ",(0,c.jsx)(n.em,{children:"package designator"})," ."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"new-name"}),"\u2014a ",(0,c.jsx)(n.em,{children:"package designator"})," ."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"new-nicknames"}),"\u2014a ",(0,c.jsx)(n.em,{children:"list"})," of ",(0,c.jsx)(n.em,{children:"string designators"}),". The default is the ",(0,c.jsx)(n.em,{children:"empty list"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"package-object"}),"\u2014the renamed ",(0,c.jsx)(n.em,{children:"package object"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:["Replaces the name and nicknames of ",(0,c.jsx)(n.em,{children:"package"}),". The old name and all of the old nicknames of ",(0,c.jsx)(n.em,{children:"package"})," are eliminated and are replaced by ",(0,c.jsx)(n.em,{children:"new-name"})," and ",(0,c.jsx)(n.em,{children:"new-nicknames"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["The consequences are undefined if ",(0,c.jsx)(n.em,{children:"new-name"})," or any ",(0,c.jsx)(n.em,{children:"new-nickname"})," conflicts with any existing package names."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(make-package \u2019temporary :nicknames \u2019("TEMP")) *\u2192* #<PACKAGE "TEMPORARY"> \n\n\n\n(rename-package \u2019temp \u2019ephemeral) *\u2192* #<PACKAGE "EPHEMERAL"> \n\n\n\n(package-nicknames (find-package \u2019ephemeral)) *\u2192* () \n\n\n\n(find-package \u2019temporary) *\u2192* NIL \n\n\n\n(rename-package \u2019ephemeral \u2019temporary \u2019(temp fleeting)) \n\n\n\n*\u2192* #<PACKAGE "TEMPORARY"> \n\n\n\n(package-nicknames (find-package \u2019temp)) *\u2192* ("TEMP" "FLEETING") \n\n\n\n\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"make-package"})})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(s,{...e})}):s(e)}const t={},d="rename-package",p={id:"chap-11/bb-c-dictionary/renamepackage",title:"rename-package",description:"Expanded Reference: rename-package",source:"@site/docs/chap-11/bb-c-dictionary/renamepackage.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/renamepackage",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/renamepackage",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/renamepackage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"package-use-list",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/packageuselist"},next:{title:"shadow",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/shadow"}},l={},o=[{value:"Expanded Reference: rename-package",id:"expanded-reference-rename-package",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"rename-package",children:"rename-package"}),"\n","\n","\n",(0,c.jsx)(i,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-rename-package",children:"Expanded Reference: rename-package"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(rename-package )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>i});var c=a(67294);const r={},s=c.createContext(r);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);