"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[89285],{2933:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var c=r(85893),s=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"pop"})," ",(0,c.jsx)(n.em,{children:"Macro"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"pop"})," ",(0,c.jsx)(n.em,{children:"place \u2192 element"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"place"}),"\u2014a ",(0,c.jsx)(n.em,{children:"place"}),", the ",(0,c.jsx)(n.em,{children:"value"})," of which is a ",(0,c.jsx)(n.em,{children:"list"})," (possibly, but necessarily, a ",(0,c.jsx)(n.em,{children:"dotted list"})," or ",(0,c.jsx)(n.em,{children:"circular list"}),"). ",(0,c.jsx)(n.em,{children:"element"}),"\u2014an ",(0,c.jsx)(n.em,{children:"object"})," (the ",(0,c.jsx)(n.em,{children:"car"})," of the contents of ",(0,c.jsx)(n.em,{children:"place"}),")."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"pop"})," ",(0,c.jsx)(n.em,{children:"reads"})," the ",(0,c.jsx)(n.em,{children:"value"})," of ",(0,c.jsx)(n.em,{children:"place"}),", remembers the ",(0,c.jsx)(n.em,{children:"car"})," of the ",(0,c.jsx)(n.em,{children:"list"})," which was retrieved, ",(0,c.jsx)(n.em,{children:"writes"})," the ",(0,c.jsx)(n.em,{children:"cdr"})," of the ",(0,c.jsx)(n.em,{children:"list"})," back into the ",(0,c.jsx)(n.em,{children:"place"}),", and finally ",(0,c.jsx)(n.em,{children:"yields"})," the ",(0,c.jsx)(n.em,{children:"car"})," of the originally retrieved ",(0,c.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["For information about the ",(0,c.jsx)(n.em,{children:"evaluation"})," of ",(0,c.jsx)(n.em,{children:"subforms"})," of ",(0,c.jsx)(n.em,{children:"place"}),", see Section 5.1.1.1 (Evaluation of Subforms to Places)."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:" \n\n\n\n(setq stack \u2019(a b c)) *\u2192* (A B C) \n\n\n\n(pop stack) *\u2192* A \n\n\n\nstack *\u2192* (B C) \n\n\n\n(setq llst \u2019((1 2 3 4))) *\u2192* ((1 2 3 4)) \n\n\n\n(pop (car llst)) *\u2192* 1 \n\n\n\nllst *\u2192* ((2 3 4)) \n\n\n\n\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,c.jsxs)(n.p,{children:["The contents of ",(0,c.jsx)(n.em,{children:"place"})," are modified."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"push"}),", ",(0,c.jsx)(n.strong,{children:"pushnew"}),", Section 5.1 (Generalized Reference)"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,c.jsxs)(n.p,{children:["The effect of (pop ",(0,c.jsx)(n.em,{children:"place"}),") is roughly equivalent to"]}),"\n",(0,c.jsxs)(n.p,{children:["(prog1 (car ",(0,c.jsx)(n.em,{children:"place"}),") (setf ",(0,c.jsx)(n.em,{children:"place"})," (cdr ",(0,c.jsx)(n.em,{children:"place"}),")))"]}),"\n",(0,c.jsxs)(n.p,{children:["except that the latter would evaluate any ",(0,c.jsx)(n.em,{children:"subforms"})," of ",(0,c.jsx)(n.em,{children:"place"})," three times, while ",(0,c.jsx)(n.strong,{children:"pop"})," evaluates them only once."]})]})}function t(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}const l={},o="pop",d={id:"chap-14/be-c-dictionary/pop",title:"pop",description:"Expanded Reference: pop",source:"@site/docs/chap-14/be-c-dictionary/pop.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/pop",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/pop",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/pop.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pairlis",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/pairlis"},next:{title:"push",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/push"}},a={},p=[{value:"Expanded Reference: pop",id:"expanded-reference-pop",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"pop",children:"pop"}),"\n","\n","\n",(0,c.jsx)(t,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-pop",children:"Expanded Reference: pop"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(pop )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var c=r(67294);const s={},i=c.createContext(s);function t(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);