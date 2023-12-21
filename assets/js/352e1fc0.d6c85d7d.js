"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[81786],{28798:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var r=s(85893),i=s(11151);function c(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"find-class"})," ",(0,r.jsx)(n.em,{children:"Accessor"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"find-class"})," ",(0,r.jsx)(n.em,{children:"symbol"})," &optional ",(0,r.jsx)(n.em,{children:"errorp environment \u2192 class"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"(setf (find-class"})," ",(0,r.jsx)(n.em,{children:"symbol"})," &optional ",(0,r.jsx)(n.em,{children:"errorp environment"}),"**)** ",(0,r.jsx)(n.em,{children:"new-class"}),"**)**"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,r.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"errorp"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,r.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"environment"})," \u2013 same as the ",(0,r.jsx)(n.strong,{children:"&environment"})," argument to macro expansion functions and is used to distinguish between compile-time and run-time environments. The ",(0,r.jsx)(n.strong,{children:"&environment"})," argument has ",(0,r.jsx)(n.em,{children:"dynamic extent"}),"; the consequences are undefined if the ",(0,r.jsx)(n.strong,{children:"&environment"})," argument is referred to outside the ",(0,r.jsx)(n.em,{children:"dynamic extent"})," of the macro expansion function."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"class"}),"\u2014a ",(0,r.jsx)(n.em,{children:"class object"}),", or ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns the ",(0,r.jsx)(n.em,{children:"class object"})," named by the ",(0,r.jsx)(n.em,{children:"symbol"})," in the ",(0,r.jsx)(n.em,{children:"environment"}),". If there is no such ",(0,r.jsx)(n.em,{children:"class"}),", ",(0,r.jsx)(n.strong,{children:"nil"})," is returned if ",(0,r.jsx)(n.em,{children:"errorp"})," is ",(0,r.jsx)(n.em,{children:"false"}),"; otherwise, if ",(0,r.jsx)(n.em,{children:"errorp"})," is ",(0,r.jsx)(n.em,{children:"true"}),", an error is signaled."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"class"})," associated with a particular ",(0,r.jsx)(n.em,{children:"symbol"})," can be changed by using ",(0,r.jsx)(n.strong,{children:"setf"})," with ",(0,r.jsx)(n.strong,{children:"find-class"}),"; or, if the new ",(0,r.jsx)(n.em,{children:"class"})," given to ",(0,r.jsx)(n.strong,{children:"setf"})," is ",(0,r.jsx)(n.strong,{children:"nil"}),", the ",(0,r.jsx)(n.em,{children:"class"})," association is removed (but the ",(0,r.jsx)(n.em,{children:"class object"})," itself is not affected). The results are undefined if the user attempts to change or remove the ",(0,r.jsx)(n.em,{children:"class"})," associated"]}),"\n",(0,r.jsxs)(n.p,{children:["with a ",(0,r.jsx)(n.em,{children:"symbol"})," that is defined as a ",(0,r.jsx)(n.em,{children:"type specifier"})," in this standard. See Section 4.3.7 (Integrating Types and Classes)."]}),"\n",(0,r.jsxs)(n.p,{children:["When using ",(0,r.jsx)(n.strong,{children:"setf"})," of ",(0,r.jsx)(n.strong,{children:"find-class"}),", any ",(0,r.jsx)(n.em,{children:"errorp"})," argument is ",(0,r.jsx)(n.em,{children:"evaluated"})," for effect, but any ",(0,r.jsx)(n.em,{children:"values"})," it returns are ignored; the ",(0,r.jsx)(n.em,{children:"errorp parameter"})," is permitted primarily so that the ",(0,r.jsx)(n.em,{children:"environment parameter"})," can be used."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"environment"})," might be used to distinguish between a compile-time and a run-time environment."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["If there is no such ",(0,r.jsx)(n.em,{children:"class"})," and ",(0,r.jsx)(n.em,{children:"errorp"})," is ",(0,r.jsx)(n.em,{children:"true"}),", ",(0,r.jsx)(n.strong,{children:"find-class"})," signals an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"error"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"defmacro"}),", Section 4.3.7 (Integrating Types and Classes)"]})]})}function t(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const d={title:"find-class"},a="find-class",l={id:"chap-7/h-h-dictionary/find-class_accessor",title:"find-class",description:"Expanded Reference: find-class",source:"@site/docs/chap-7/h-h-dictionary/find-class_accessor.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/find-class_accessor",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/find-class_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/find-class_accessor.md",tags:[],version:"current",frontMatter:{title:"find-class"},sidebar:"tutorialSidebar",previous:{title:"ensure-generic-function",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/ensure-generic-function_function"},next:{title:"find-method",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/find-method_standard-generic-function"}},o={},h=[{value:"Expanded Reference: find-class",id:"expanded-reference-find-class",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"find-class",children:"find-class"}),"\n","\n","\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-find-class",children:"Expanded Reference: find-class"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(find-class )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var r=s(67294);const i={},c=r.createContext(i);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);