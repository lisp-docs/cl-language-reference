"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[88389],{77390:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var t=s(85893),i=s(11151);function c(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"copy-list"})," ",(0,t.jsx)(n.em,{children:"Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"copy-list"})," ",(0,t.jsx)(n.em,{children:"list \u2192 copy"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"list"}),"\u2014a ",(0,t.jsx)(n.em,{children:"proper list"})," or a ",(0,t.jsx)(n.em,{children:"dotted list"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"copy"}),"\u2014a ",(0,t.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns a ",(0,t.jsx)(n.em,{children:"copy"})," of ",(0,t.jsx)(n.em,{children:"list"}),". If ",(0,t.jsx)(n.em,{children:"list"})," is a ",(0,t.jsx)(n.em,{children:"dotted list"}),", the resulting ",(0,t.jsx)(n.em,{children:"list"})," will also be a ",(0,t.jsx)(n.em,{children:"dotted list"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Only the ",(0,t.jsx)(n.em,{children:"list structure"})," of ",(0,t.jsx)(n.em,{children:"list"})," is copied; the ",(0,t.jsx)(n.em,{children:"elements"})," of the resulting list are the ",(0,t.jsx)(n.em,{children:"same"})," as the corresponding ",(0,t.jsx)(n.em,{children:"elements"})," of the given ",(0,t.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:' \n\n(setq lst (list 1 (list 2 3))) \u2192 (1 (2 3)) \n\n(setq slst lst) \u2192 (1 (2 3)) \n\n(setq clst (copy-list lst)) \u2192 (1 (2 3)) \n\n(eq slst lst) \u2192 true \n\n(eq clst lst) \u2192 false \n\n(equal clst lst) \u2192 true \n\n(rplaca lst "one") \u2192 ("one" (2 3)) \n\nslst \u2192 ("one" (2 3)) \n\nclst \u2192 (1 (2 3)) \n\n(setf (caadr lst) "two") \u2192 "two" \n\nlst \u2192 ("one" ("two" 3)) \n\nslst \u2192 ("one" ("two" 3)) \n\nclst \u2192 (1 ("two" 3)) \n\n\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["The consequences are undefined if ",(0,t.jsx)(n.em,{children:"list"})," is a ",(0,t.jsx)(n.em,{children:"circular list"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"copy-alist"}),", ",(0,t.jsx)(n.strong,{children:"copy-seq"}),", ",(0,t.jsx)(n.strong,{children:"copy-tree"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["The copy created is ",(0,t.jsx)(n.strong,{children:"equal"})," to ",(0,t.jsx)(n.em,{children:"list"}),", but not ",(0,t.jsx)(n.strong,{children:"eq"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"list, list"}),(0,t.jsx)(n.em,{children:"\u2217"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"list, list"}),(0,t.jsx)(n.em,{children:"\u2217 Function"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"list"})," &rest ",(0,t.jsx)(n.em,{children:"objects \u2192 list"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"list*"})," &rest ",(0,t.jsx)(n.em,{children:"objects"}),(0,t.jsx)("sup",{children:"+"})," \u2192 result"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"object"}),"\u2014an ",(0,t.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"list"}),"\u2014a ",(0,t.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"result"}),"\u2014an ",(0,t.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"list"})," returns a ",(0,t.jsx)(n.em,{children:"list"})," containing the supplied ",(0,t.jsx)(n.em,{children:"objects"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"list*"})," is like ",(0,t.jsx)(n.strong,{children:"list"})," except that the last ",(0,t.jsx)(n.em,{children:"argument"})," to ",(0,t.jsx)(n.strong,{children:"list"})," becomes the ",(0,t.jsx)(n.em,{children:"car"})," of the last ",(0,t.jsx)(n.em,{children:"cons"})," constructed, while the last ",(0,t.jsx)(n.em,{children:"argument"})," to ",(0,t.jsx)(n.strong,{children:"list*"})," becomes the ",(0,t.jsx)(n.em,{children:"cdr"})," of the last ",(0,t.jsx)(n.em,{children:"cons"})," constructed. Hence, any given call to ",(0,t.jsx)(n.strong,{children:"list*"})," always produces one fewer ",(0,t.jsx)(n.em,{children:"conses"})," than a call to ",(0,t.jsx)(n.strong,{children:"list"})," with the same number of arguments."]}),"\n",(0,t.jsxs)(n.p,{children:["If the last ",(0,t.jsx)(n.em,{children:"argument"})," to ",(0,t.jsx)(n.strong,{children:"list*"})," is a ",(0,t.jsx)(n.em,{children:"list"}),", the effect is to construct a new ",(0,t.jsx)(n.em,{children:"list"})," which is similar, but which has additional elements added to the front corresponding to the preceding ",(0,t.jsx)(n.em,{children:"arguments"})," of ",(0,t.jsx)(n.strong,{children:"list*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.strong,{children:"list*"})," receives only one ",(0,t.jsx)(n.em,{children:"object"}),", that ",(0,t.jsx)(n.em,{children:"object"})," is returned, regardless of whether or not it is a ",(0,t.jsx)(n.em,{children:"list"}),". ",(0,t.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:" \n\n(list 1) \u2192 (1) \n\n(list\\* 1) \u2192 1 \n\n(setq a 1) \u2192 1 \n\n(list a 2) \u2192 (1 2) \n\n\u2019(a 2) \u2192 (A 2) \n\n(list \u2019a 2) \u2192 (A 2) \n\n(list\\* a 2) \u2192 (1 . 2) \n\n(list) \u2192 NIL ;*i.e.*, () \n\n(setq a \u2019(1 2)) \u2192 (1 2) \n\n(eq a (list\\* a)) \u2192 true \n\n(list 3 4 \u2019a (car \u2019(b . c)) (+ 6 -2)) \u2192 (3 4 A B 4) \n\n(list\\* \u2019a \u2019b \u2019c \u2019d) *\u2261* (cons \u2019a (cons \u2019b (cons \u2019c \u2019d))) \u2192 (A B C . D) \n\n(list\\* \u2019a \u2019b \u2019c \u2019(d e f)) \u2192 (A B C D E F) \n\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"cons"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["(list* ",(0,t.jsx)(n.em,{children:"x"}),") ",(0,t.jsx)(n.em,{children:"\u2261 x"})]})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const l={},o="copy-list",d={id:"chap-14/be-c-dictionary/copylist",title:"copy-list",description:"Expanded Reference: copy-list",source:"@site/docs/chap-14/be-c-dictionary/copylist.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/copylist",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/copylist",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/copylist.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"copy-alist",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/copyalist"},next:{title:"copy-tree",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/copytree"}},h={},a=[{value:"Expanded Reference: copy-list",id:"expanded-reference-copy-list",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"copy-list",children:"copy-list"}),"\n","\n","\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-copy-list",children:"Expanded Reference: copy-list"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(copy-list )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(67294);const i={},c=t.createContext(i);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);