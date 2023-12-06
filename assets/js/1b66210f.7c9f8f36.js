"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[39868],{2363:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=c(85893),i=c(11151);function t(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"nconc"})," ",(0,s.jsx)(e.em,{children:"Function"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"nconc"})," &rest ",(0,s.jsx)(e.em,{children:"lists \u2192 concatenated-list"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"list"}),"\u2014each but the last must be a ",(0,s.jsx)(e.em,{children:"list"})," (which might be a ",(0,s.jsx)(e.em,{children:"dotted list"})," but must not be a ",(0,s.jsx)(e.em,{children:"circular list"}),"); the last ",(0,s.jsx)(e.em,{children:"list"})," may be any ",(0,s.jsx)(e.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"concatenated-list"}),"\u2014a ",(0,s.jsx)(e.em,{children:"list"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(e.p,{children:["Returns a ",(0,s.jsx)(e.em,{children:"list"})," that is the concatenation of ",(0,s.jsx)(e.em,{children:"lists"}),". If no ",(0,s.jsx)(e.em,{children:"lists"})," are supplied, (nconc) returns ",(0,s.jsx)(e.strong,{children:"nil"}),". ",(0,s.jsx)(e.strong,{children:"nconc"})," is defined using the following recursive relationship:"]}),"\n",(0,s.jsx)(e.p,{children:"(nconc) \u2192 ()"}),"\n",(0,s.jsxs)(e.p,{children:["(nconc nil . ",(0,s.jsx)(e.em,{children:"lists"}),") ",(0,s.jsx)(e.em,{children:"\u2261"})," (nconc . ",(0,s.jsx)(e.em,{children:"lists"}),")"]}),"\n",(0,s.jsxs)(e.p,{children:["(nconc ",(0,s.jsx)(e.em,{children:"list"}),") \u2192 list"]}),"\n",(0,s.jsxs)(e.p,{children:["(nconc ",(0,s.jsx)(e.em,{children:"list-1 list-2"}),") ",(0,s.jsx)(e.em,{children:"\u2261"})," (progn (rplacd (last ",(0,s.jsx)(e.em,{children:"list-1"}),") ",(0,s.jsx)(e.em,{children:"list-2"}),") ",(0,s.jsx)(e.em,{children:"list-1"}),")"]}),"\n",(0,s.jsxs)(e.p,{children:["(nconc ",(0,s.jsx)(e.em,{children:"list-1 list-2"})," . ",(0,s.jsx)(e.em,{children:"lists"}),") ",(0,s.jsx)(e.em,{children:"\u2261"})," (nconc (nconc ",(0,s.jsx)(e.em,{children:"list-1 list-2"}),") . ",(0,s.jsx)(e.em,{children:"lists"}),")"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:" \n\n(nconc) \u2192 NIL \n\n(setq x \u2019(a b c)) \u2192 (A B C) \n\n(setq y \u2019(d e f)) \u2192 (D E F) \n\n(nconc x y) \u2192 (A B C D E F) \n\nx \u2192 (A B C D E F) \n\nNote, in the example, that the value of x is now different, since its last *cons* has been **rplacd**\u2019d to the value of y. If (nconc x y) were evaluated again, it would yield a piece of a *circular list*, whose printed representation would be (A B C D E F D E F D E F ...), repeating forever; if the **\\*print-circle\\*** switch were *non-nil*, it would be printed as (A B C . #1=(D E F . #1#)). \n\n(setq foo (list \u2019a \u2019b \u2019c \u2019d \u2019e) \n\nbar (list \u2019f \u2019g \u2019h \u2019i \u2019j) \n\nbaz (list \u2019k \u2019l \u2019m)) \u2192 (K L M) \n\n(setq foo (nconc foo bar baz)) \u2192 (A B C D E F G H I J K L M) \n\nfoo \u2192 (A B C D E F G H I J K L M) \n\nbar \u2192 (F G H I J K L M) \n\nbaz \u2192 (K L M) \n\n(setq foo (list \u2019a \u2019b \u2019c \u2019d \u2019e) \n\nbar (list \u2019f \u2019g \u2019h \u2019i \u2019j) \n\nbaz (list \u2019k \u2019l \u2019m)) \u2192 (K L M) \n\n(setq foo (nconc nil foo bar nil baz)) \u2192 (A B C D E F G H I J K L M) \n\nfoo \u2192 (A B C D E F G H I J K L M) \n\nbar \u2192 (F G H I J K L M) \n\nbaz \u2192 (K L M) \n\n\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.em,{children:"lists"})," are modified rather than copied."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"append"}),", ",(0,s.jsx)(e.strong,{children:"concatenate"})]})]})}function r(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}const l={},o="nconc",d={id:"chap-14/be-c-dictionary/nconc",title:"nconc",description:"Expanded Reference: nconc",source:"@site/docs/chap-14/be-c-dictionary/nconc.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/nconc",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/nconc",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/nconc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"member, member-if, member-if-not",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/member"},next:{title:"nth",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/nth"}},a={},h=[{value:"Expanded Reference: nconc",id:"expanded-reference-nconc",level:2}];function p(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"nconc",children:"nconc"}),"\n","\n","\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(e.h2,{id:"expanded-reference-nconc",children:"Expanded Reference: nconc"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:"(nconc )\n"})})]})}function x(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},11151:(n,e,c)=>{c.d(e,{Z:()=>l,a:()=>r});var s=c(67294);const i={},t=s.createContext(i);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);