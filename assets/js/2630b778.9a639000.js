"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[42397],{58077:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=r(85893),t=r(11151);function i(e){const n={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"find-restart"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"find-restart"})," ",(0,s.jsx)(n.em,{children:"identifier"})," &optional ",(0,s.jsx)(n.em,{children:"condition"})]}),"\n",(0,s.jsx)(n.p,{children:"restart"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"identifier"}),"\u2014a ",(0,s.jsx)(n.em,{children:"non-nil symbol"}),", or a ",(0,s.jsx)(n.em,{children:"restart"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"condition"}),"\u2014a ",(0,s.jsx)(n.em,{children:"condition object"}),", or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"restart"}),"\u2014a ",(0,s.jsx)(n.em,{children:"restart"})," or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"find-restart"})," searches for a particular ",(0,s.jsx)(n.em,{children:"restart"})," in the current ",(0,s.jsx)(n.em,{children:"dynamic environment"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.em,{children:"condition"})," is ",(0,s.jsx)(n.em,{children:"non-nil"}),", only those ",(0,s.jsx)(n.em,{children:"restarts"})," are considered that are either explicitly associated with that ",(0,s.jsx)(n.em,{children:"condition"}),", or not associated with any ",(0,s.jsx)(n.em,{children:"condition"}),"; that is, the excluded ",(0,s.jsx)(n.em,{children:"restarts"})," are those that are associated with a non-empty set of ",(0,s.jsx)(n.em,{children:"conditions"})," of which the given ",(0,s.jsx)(n.em,{children:"condition"})," is not an ",(0,s.jsx)(n.em,{children:"element"}),". If ",(0,s.jsx)(n.em,{children:"condition"})," is ",(0,s.jsx)(n.strong,{children:"nil"}),", all ",(0,s.jsx)(n.em,{children:"restarts"})," are considered."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"identifier"})," is a ",(0,s.jsx)(n.em,{children:"symbol"}),", then the innermost (most recently established) ",(0,s.jsx)(n.em,{children:"applicable restart"})," with that ",(0,s.jsx)(n.em,{children:"name"})," is returned. ",(0,s.jsx)(n.strong,{children:"nil"})," is returned if no such restart is found."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"identifier"})," is a currently active restart, then it is returned. Otherwise, ",(0,s.jsx)(n.strong,{children:"nil"})," is returned. ",(0,s.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,s.jsx)(n.p,{children:"(restart-case"}),"\n",(0,s.jsx)(n.p,{children:"(let ((r (find-restart \u2019my-restart)))"}),"\n",(0,s.jsx)(n.p,{children:'(format t "~S is named ~S" r (restart-name r)))'}),"\n",(0,s.jsx)(n.p,{children:"(my-restart () nil))"}),"\n",(0,s.jsx)(n.p,{children:"\u25b7 #<RESTART 32307325> is named MY-RESTART"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2192"})," NIL"]}),"\n",(0,s.jsx)(n.p,{children:"(find-restart \u2019my-restart)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2192"})," NIL"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsx)(n.p,{children:"Existing restarts."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"restart-case"}),", ",(0,s.jsx)(n.strong,{children:"restart-bind"}),", ",(0,s.jsx)(n.strong,{children:"with-condition-restarts"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"compute-restarts"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["(find-restart ",(0,s.jsx)(n.em,{children:"identifier"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2261"})," (find ",(0,s.jsx)(n.em,{children:"identifier"})," (compute-restarts) ",":key"," ",":restart-name",")"]}),"\n",(0,s.jsxs)(n.p,{children:["Although anonymous restarts have a name of ",(0,s.jsx)(n.strong,{children:"nil"}),", the consequences are unspecified if ",(0,s.jsx)(n.strong,{children:"nil"})," is given as an ",(0,s.jsx)(n.em,{children:"identifier"}),". Occasionally, programmers lament that ",(0,s.jsx)(n.strong,{children:"nil"})," is not permissible as an ",(0,s.jsx)(n.em,{children:"identifier"})," argument. In most such cases, ",(0,s.jsx)(n.strong,{children:"compute-restarts"})," can probably be used to simulate the desired effect."]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const d={},a="find-restart",l={id:"chap-9/j-c-dictionary/findrestart",title:"find-restart",description:"Expanded Reference: find-restart",source:"@site/docs/chap-9/j-c-dictionary/findrestart.md",sourceDirName:"chap-9/j-c-dictionary",slug:"/chap-9/j-c-dictionary/findrestart",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/findrestart",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-9/j-c-dictionary/findrestart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"error",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/error"},next:{title:"handler-bind",permalink:"/cl-language-reference/docs/chap-9/j-c-dictionary/handlerbind"}},o={},h=[{value:"Expanded Reference: find-restart",id:"expanded-reference-find-restart",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"find-restart",children:"find-restart"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-find-restart",children:"Expanded Reference: find-restart"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(find-restart )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var s=r(67294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);