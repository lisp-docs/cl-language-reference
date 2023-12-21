"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[44141],{811:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var i=c(85893),o=c(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"compiled-function-p"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"compiled-function-p"})," ",(0,i.jsx)(n.em,{children:"object \u2192 generalized-boolean"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"object"}),"\u2014an ",(0,i.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns ",(0,i.jsx)(n.em,{children:"true"})," if ",(0,i.jsx)(n.em,{children:"object"})," is of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"compiled-function"}),"; otherwise, returns ",(0,i.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"\n(defun f (x) x) \u2192 F \n(compiled-function-p #\u2019f) \n\u2192 false \n<i><sup>or</sup>\u2192 true</i> \n(compiled-function-p \u2019f) \u2192 false \n(compile \u2019f) \u2192 F \n(compiled-function-p #\u2019f) \u2192 true \n(compiled-function-p \u2019f) \u2192 false \n(compiled-function-p (compile nil \u2019(lambda (x) x))) \n\u2192 true \n(compiled-function-p #\u2019(lambda (x) x)) \n\u2192 false \n<i><sup>or</sup>\u2192 true</i> \n(compiled-function-p \u2019(lambda (x) x)) \u2192 false \n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"compile"}),", ",(0,i.jsx)(n.strong,{children:"compile-file"}),", ",(0,i.jsx)(n.strong,{children:"compiled-function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["(compiled-function-p ",(0,i.jsx)(n.em,{children:"object"}),") ",(0,i.jsx)(n.em,{children:"\u2261"})," (typep ",(0,i.jsx)(n.em,{children:"object"})," \u2019compiled-function)"]})]})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const l={title:"compiled-function-p"},d="compiled-function-p",s={id:"chap-5/f-d-dictionary/compiled-function-p_function",title:"compiled-function-p",description:"Expanded Reference: compiled-function-p",source:"@site/docs/chap-5/f-d-dictionary/compiled-function-p_function.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/compiled-function-p_function",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/compiled-function-p_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/compiled-function-p_function.md",tags:[],version:"current",frontMatter:{title:"compiled-function-p"},sidebar:"tutorialSidebar",previous:{title:"catch",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/catch_special-operator"},next:{title:"complement",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/complement_function"}},p={},a=[{value:"Expanded Reference: compiled-function-p",id:"expanded-reference-compiled-function-p",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"compiled-function-p",children:"compiled-function-p"}),"\n","\n","\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-compiled-function-p",children:"Expanded Reference: compiled-function-p"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(compiled-function-p )\n"})})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>l,a:()=>r});var i=c(67294);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);