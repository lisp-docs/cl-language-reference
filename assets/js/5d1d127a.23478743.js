"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[25951],{58867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var c=t(85893),r=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"nth"})," ",(0,c.jsx)(n.em,{children:"Accessor"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"nth"})," ",(0,c.jsx)(n.em,{children:"n list \u2192 object"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"(setf (nth"})," ",(0,c.jsx)(n.em,{children:"n list"}),"**)** ",(0,c.jsx)(n.em,{children:"new-object"}),"**)**"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"n"}),"\u2014a non-negative ",(0,c.jsx)(n.em,{children:"integer"})," ."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"list"}),"\u2014a ",(0,c.jsx)(n.em,{children:"list"}),", which might be a ",(0,c.jsx)(n.em,{children:"dotted list"})," or a ",(0,c.jsx)(n.em,{children:"circular list"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"object"}),"\u2014an ",(0,c.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"new-object"}),"\u2014an ",(0,c.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"nth"})," locates the ",(0,c.jsx)(n.em,{children:"n"}),"th element of ",(0,c.jsx)(n.em,{children:"list"}),", where the ",(0,c.jsx)(n.em,{children:"car"})," of the ",(0,c.jsx)(n.em,{children:"list"})," is the \u201czeroth\u201d element. Specifically, (nth ",(0,c.jsx)(n.em,{children:"n list"}),") ",(0,c.jsx)(n.em,{children:"\u2261"})," (car (nthcdr ",(0,c.jsx)(n.em,{children:"n list"}),"))"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"nth"})," may be used to specify a ",(0,c.jsx)(n.em,{children:"place"})," to ",(0,c.jsx)(n.strong,{children:"setf"}),". Specifically,"]}),"\n",(0,c.jsxs)(n.p,{children:["(setf (nth ",(0,c.jsx)(n.em,{children:"n list"}),") ",(0,c.jsx)(n.em,{children:"new-object"}),") ",(0,c.jsx)(n.em,{children:"\u2261"})," (setf (car (nthcdr ",(0,c.jsx)(n.em,{children:"n list"}),")) ",(0,c.jsx)(n.em,{children:"new-object"}),")"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:'\n(nth 0 \u2019(foo bar baz)) \u2192 FOO \n(nth 1 \u2019(foo bar baz)) \u2192 BAR \n(nth 3 \u2019(foo bar baz)) \u2192 NIL \n(setq 0-to-3 (list 0 1 2 3)) \u2192 (0 1 2 3) \n(setf (nth 2 0-to-3) "two") \u2192 "two" \n0-to-3 \u2192 (0 1 "two" 3) \n\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"elt"}),", ",(0,c.jsx)(n.strong,{children:"first"}),", ",(0,c.jsx)(n.strong,{children:"nthcdr"})]})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(s,{...e})}):s(e)}const l={title:"nth"},o="nth",d={id:"chap-14/be-c-dictionary/nth_accessor",title:"nth",description:"Expanded Reference: nth",source:"@site/docs/chap-14/be-c-dictionary/nth_accessor.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/nth_accessor",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/nth_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/nth_accessor.md",tags:[],version:"current",frontMatter:{title:"nth"},sidebar:"tutorialSidebar",previous:{title:"nconc",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/nconc_function"},next:{title:"nthcdr",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/nthcdr_function"}},h={},a=[{value:"Expanded Reference: nth",id:"expanded-reference-nth",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"nth",children:"nth"}),"\n","\n","\n",(0,c.jsx)(i,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-nth",children:"Expanded Reference: nth"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(nth )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var c=t(67294);const r={},s=c.createContext(r);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);