"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[61883],{48776:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var i=s(85893),c=s(11151);function t(e){const n={em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"make-instance"})," ",(0,i.jsx)(n.em,{children:"Standard Generic Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"make-instance"})," ",(0,i.jsx)(n.em,{children:"class"})," &rest ",(0,i.jsx)(n.em,{children:"initargs"})," &key &allow-other-keys \u2192 instance"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Method Signatures:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"make-instance"})," (",(0,i.jsx)(n.em,{children:"class"})," ",(0,i.jsx)(n.strong,{children:"standard-class"}),") &rest ",(0,i.jsx)(n.em,{children:"initargs"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"make-instance"})," (",(0,i.jsx)(n.em,{children:"class"})," ",(0,i.jsx)(n.strong,{children:"symbol"}),") &rest ",(0,i.jsx)(n.em,{children:"initargs"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"class"}),"\u2014a ",(0,i.jsx)(n.em,{children:"class"}),", or a ",(0,i.jsx)(n.em,{children:"symbol"})," that names a ",(0,i.jsx)(n.em,{children:"class"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"initargs"}),"\u2014an ",(0,i.jsx)(n.em,{children:"initialization argument list"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"instance"}),"\u2014a ",(0,i.jsx)(n.em,{children:"fresh instance"})," of ",(0,i.jsx)(n.em,{children:"class class"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"generic function"})," ",(0,i.jsx)(n.strong,{children:"make-instance"})," creates and returns a new ",(0,i.jsx)(n.em,{children:"instance"})," of the given ",(0,i.jsx)(n.em,{children:"class"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If the second of the above ",(0,i.jsx)(n.em,{children:"methods"})," is selected, that ",(0,i.jsx)(n.em,{children:"method"})," invokes ",(0,i.jsx)(n.strong,{children:"make-instance"})," on the arguments (find-class ",(0,i.jsx)(n.em,{children:"class"}),") and ",(0,i.jsx)(n.em,{children:"initargs"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The initialization arguments are checked within ",(0,i.jsx)(n.strong,{children:"make-instance"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"generic function"})," ",(0,i.jsx)(n.strong,{children:"make-instance"})," may be used as described in Section 7.1 (Object Creation and Initialization)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["If any of the initialization arguments has not been declared as valid, an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"error"})," is signaled."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"defclass"}),", ",(0,i.jsx)(n.strong,{children:"class-of"}),", ",(0,i.jsx)(n.strong,{children:"allocate-instance"}),", ",(0,i.jsx)(n.strong,{children:"initialize-instance"}),", Section 7.1 (Object Creation and Initialization)"]})]})}function r(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const a={},l="make-instance",d={id:"chap-7/h-h-dictionary/makeinstance",title:"make-instance",description:"Expanded Reference: make-instance",source:"@site/docs/chap-7/h-h-dictionary/makeinstance.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/makeinstance",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/makeinstance",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/makeinstance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"initialize-instance",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/initializeinstance"},next:{title:"make-instances-obsolete",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/makeinstancesobsolete"}},o={},h=[{value:"Expanded Reference: make-instance",id:"expanded-reference-make-instance",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"make-instance",children:"make-instance"}),"\n","\n","\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-make-instance",children:"Expanded Reference: make-instance"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(make-instance )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var i=s(67294);const c={},t=i.createContext(c);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);