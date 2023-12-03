"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[58512],{18089:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=s(85893),i=s(11151);function c(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"intern"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"intern"})," ",(0,r.jsx)(n.em,{children:"string"})," &optional ",(0,r.jsx)(n.em,{children:"package \u2192 symbol, status"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"string"}),"\u2014a ",(0,r.jsx)(n.em,{children:"string"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"package"}),"\u2014a ",(0,r.jsx)(n.em,{children:"package designator"})," . The default is the ",(0,r.jsx)(n.em,{children:"current package"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,r.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"status"}),"\u2014one of ",":inherited",", ",":external",", ",":internal",", or ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"intern"})," enters a ",(0,r.jsx)(n.em,{children:"symbol"})," named ",(0,r.jsx)(n.em,{children:"string"})," into ",(0,r.jsx)(n.em,{children:"package"}),". If a ",(0,r.jsx)(n.em,{children:"symbol"})," whose name is the same as ",(0,r.jsx)(n.em,{children:"string"})," is already ",(0,r.jsx)(n.em,{children:"accessible"})," in ",(0,r.jsx)(n.em,{children:"package"}),", it is returned. If no such ",(0,r.jsx)(n.em,{children:"symbol"})," is ",(0,r.jsx)(n.em,{children:"accessible"})," in ",(0,r.jsx)(n.em,{children:"package"}),", a new ",(0,r.jsx)(n.em,{children:"symbol"})," with the given name is created and entered into ",(0,r.jsx)(n.em,{children:"package"})," as an ",(0,r.jsx)(n.em,{children:"internal symbol"}),", or as an ",(0,r.jsx)(n.em,{children:"external symbol"})," if the ",(0,r.jsx)(n.em,{children:"package"})," is the KEYWORD ",(0,r.jsx)(n.em,{children:"package"}),"; ",(0,r.jsx)(n.em,{children:"package"})," becomes the ",(0,r.jsx)(n.em,{children:"home package"})," of the created ",(0,r.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The first value returned by ",(0,r.jsx)(n.strong,{children:"intern"}),", ",(0,r.jsx)(n.em,{children:"symbol"}),", is the ",(0,r.jsx)(n.em,{children:"symbol"})," that was found or created. The meaning of the ",(0,r.jsx)(n.em,{children:"secondary value"}),", ",(0,r.jsx)(n.em,{children:"status"}),", is as follows:"]}),"\n",(0,r.jsx)(n.p,{children:":internal"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"symbol"})," was found and is ",(0,r.jsx)(n.em,{children:"present"})," in ",(0,r.jsx)(n.em,{children:"package"})," as an ",(0,r.jsx)(n.em,{children:"internal symbol"}),"."]}),"\n",(0,r.jsx)(n.p,{children:":external"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"symbol"})," was found and is ",(0,r.jsx)(n.em,{children:"present"})," as an ",(0,r.jsx)(n.em,{children:"external symbol"}),"."]}),"\n",(0,r.jsx)(n.p,{children:":inherited"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"symbol"})," was found and is inherited via ",(0,r.jsx)(n.strong,{children:"use-package"})," (which implies that the ",(0,r.jsx)(n.em,{children:"symbol"})," is internal)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"nil"})}),"\n",(0,r.jsxs)(n.p,{children:["No pre-existing ",(0,r.jsx)(n.em,{children:"symbol"})," was found, so one was created."]}),"\n",(0,r.jsxs)(n.p,{children:["It is ",(0,r.jsx)(n.em,{children:"implementation-dependent"})," whether the ",(0,r.jsx)(n.em,{children:"string"})," that becomes the new ",(0,r.jsx)(n.em,{children:"symbol"}),"\u2019s ",(0,r.jsx)(n.em,{children:"name"})," is the given ",(0,r.jsx)(n.em,{children:"string"})," or a copy of it. Once a ",(0,r.jsx)(n.em,{children:"string"})," has been given as the ",(0,r.jsx)(n.em,{children:"string argument"})," to ",(0,r.jsx)(n.em,{children:"intern"})," in this situation where a new ",(0,r.jsx)(n.em,{children:"symbol"})," is created, the consequences are undefined if a subsequent attempt is made to alter that ",(0,r.jsx)(n.em,{children:"string"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsxs)(n.p,{children:['(in-package "COMMON-LISP-USER") ',(0,r.jsx)(n.em,{children:"\u2192"}),' #<PACKAGE "COMMON-LISP-USER">']}),"\n",(0,r.jsxs)(n.p,{children:['(intern "Never-Before") ',(0,r.jsx)(n.em,{children:"\u2192"})," |Never-Before|, NIL"]}),"\n",(0,r.jsxs)(n.p,{children:['(intern "Never-Before") ',(0,r.jsx)(n.em,{children:"\u2192"})," |Never-Before|, ",":INTERNAL"]}),"\n",(0,r.jsxs)(n.p,{children:['(intern "NEVER-BEFORE" "KEYWORD") ',(0,r.jsx)(n.em,{children:"\u2192"})," ",":NEVER-BEFORE",", NIL"]}),"\n",(0,r.jsxs)(n.p,{children:['(intern "NEVER-BEFORE" "KEYWORD") ',(0,r.jsx)(n.em,{children:"\u2192"})," ",":NEVER-BEFORE",", ",":EXTERNAL"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"find-symbol"}),", ",(0,r.jsx)(n.strong,{children:"read"}),", ",(0,r.jsx)(n.strong,{children:"symbol"}),", ",(0,r.jsx)(n.strong,{children:"unintern"}),", Section 2.3.4 (Symbols as Tokens)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"intern"})," does not need to do any name conflict checking because it never creates a new ",(0,r.jsx)(n.em,{children:"symbol"})," if there is already an ",(0,r.jsx)(n.em,{children:"accessible symbol"})," with the name given."]})]})}function t(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const l={},a="intern",d={id:"chap-11/bb-c-dictionary/intern",title:"intern",description:"Expanded Reference: intern",source:"@site/docs/chap-11/bb-c-dictionary/intern.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/intern",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/intern",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/intern.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"in-package",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/inpackage"},next:{title:"list-all-packages",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/listallpackages"}},h={},o=[{value:"Expanded Reference: intern",id:"expanded-reference-intern",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"intern",children:"intern"}),"\n","\n","\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-intern",children:"Expanded Reference: intern"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(intern )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var r=s(67294);const i={},c=r.createContext(i);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);