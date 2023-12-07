"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[38888],{18608:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var i=r(85893),s=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"max, min"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"max"})," &rest ",(0,i.jsx)(n.em,{children:"reals"}),(0,i.jsx)("sup",{children:"+"})," \u2192 max-real"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"max, min"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"min"})," &rest ",(0,i.jsx)(n.em,{children:"reals"}),(0,i.jsx)("sup",{children:"+"})," \u2192 min-real"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"real"}),"\u2014a ",(0,i.jsx)(n.em,{children:"real"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"max-real"}),", ",(0,i.jsx)(n.em,{children:"min-real"}),"\u2014a ",(0,i.jsx)(n.em,{children:"real"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"max"})," returns the ",(0,i.jsx)(n.em,{children:"real"})," that is greatest (closest to positive infinity). ",(0,i.jsx)(n.strong,{children:"min"})," returns the ",(0,i.jsx)(n.em,{children:"real"})," that is least (closest to negative infinity)."]}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.strong,{children:"max"}),", the implementation has the choice of returning the largest argument as is or applying the rules of floating-point ",(0,i.jsx)(n.em,{children:"contagion"}),", taking all the arguments into consideration for ",(0,i.jsx)(n.em,{children:"contagion"})," purposes. Also, if one or more of the arguments are ",(0,i.jsx)(n.strong,{children:"="}),", then any one of them may be chosen as the value to return. For example, if the ",(0,i.jsx)(n.em,{children:"reals"})," are a mixture of ",(0,i.jsx)(n.em,{children:"rationals"})," and ",(0,i.jsx)(n.em,{children:"floats"}),", and the largest argument is a ",(0,i.jsx)(n.em,{children:"rational"}),", then the implementation is free to produce either that ",(0,i.jsx)(n.em,{children:"rational"})," or its ",(0,i.jsx)(n.em,{children:"float"})," approximation; if the largest argument is a ",(0,i.jsx)(n.em,{children:"float"})," of a smaller format than the largest format of any ",(0,i.jsx)(n.em,{children:"float"})," argument, then the implementation is free to return the argument in its given format or expanded to the larger format. Similar remarks apply to ",(0,i.jsx)(n.strong,{children:"min"})," (replacing \u201clargest argument\u201d by \u201csmallest argument\u201d)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"\n(max 3) \u2192 3 \n(min 3) \u2192 3 \n(max 6 12) \u2192 12 \n(min 6 12) \u2192 6 \n(max -6 -12) \u2192 -6 \n(min -6 -12) \u2192 -12 \n(max 1 3 2 -7) \u2192 3 \n(min 1 3 2 -7) \u2192 -7 \n(max -2 3 0 7) \u2192 7 \n(min -2 3 0 7) \u2192 -2 \n(max 5.0 2) \u2192 5.0 \n(min 5.0 2) \n\u2192 2 \n<i><sup>or</sup>\u2192</i> 2.0 \n(max 3.0 7 1) \n\u2192 7 \n<i><sup>or</sup>\u2192</i> 7.0 \n(min 3.0 7 1) \n\u2192 1 \n<i><sup>or</sup>\u2192</i> 1.0 \n(max 1.0s0 7.0d0) \u2192 7.0d0 \n\n\n\n(min 1.0s0 7.0d0) \n\u2192 1.0s0 \n<i><sup>or</sup>\u2192</i> 1.0d0 \n(max 3 1 1.0s0 1.0d0) \n\u2192 3 \n<i><sup>or</sup>\u2192</i> 3.0d0 \n(min 3 1 1.0s0 1.0d0) \n\u2192 1 \n<i><sup>or</sup>\u2192</i> 1.0s0 \n<i><sup>or</sup>\u2192</i> 1.0d0 \n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"type-error"})," if any ",(0,i.jsx)(n.em,{children:"number"})," is not a ",(0,i.jsx)(n.em,{children:"real"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const c={},o="max, min",l={id:"chap-12/bc-c-dictionary/max",title:"max, min",description:"Expanded Reference: max, min",source:"@site/docs/chap-12/bc-c-dictionary/max.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/max",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/max",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/max.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mask-field",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/maskfield"},next:{title:"minusp, plusp",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/minusp"}},m={},d=[{value:"Expanded Reference: max, min",id:"expanded-reference-max-min",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"max-min",children:"max, min"}),"\n","\n","\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-max-min",children:"Expanded Reference: max, min"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(max, min )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>a});var i=r(67294);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);