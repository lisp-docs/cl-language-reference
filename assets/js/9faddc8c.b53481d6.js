"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[10336],{52704:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=s(85893),a=s(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"gethash"})," ",(0,t.jsx)(n.em,{children:"Accessor"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"gethash"})," ",(0,t.jsx)(n.em,{children:"key hash-table"})," &optional ",(0,t.jsx)(n.em,{children:"default \u2192 value, present-p"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"(setf (gethash"})," ",(0,t.jsx)(n.em,{children:"key hash-table"})," &optional ",(0,t.jsx)(n.em,{children:"default"}),"**)** ",(0,t.jsx)(n.em,{children:"new-value"}),"**)**"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"key"}),"\u2014an ",(0,t.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"hash-table"}),"\u2014a ",(0,t.jsx)(n.em,{children:"hash table"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"default"}),"\u2014an ",(0,t.jsx)(n.em,{children:"object"}),". The default is ",(0,t.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"value"}),"\u2014an ",(0,t.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"present-p"}),"\u2014a ",(0,t.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Value"})," is the ",(0,t.jsx)(n.em,{children:"object"})," in ",(0,t.jsx)(n.em,{children:"hash-table"})," whose ",(0,t.jsx)(n.em,{children:"key"})," is the ",(0,t.jsx)(n.em,{children:"same"})," as ",(0,t.jsx)(n.em,{children:"key"})," under the ",(0,t.jsx)(n.em,{children:"hash-table"}),"\u2019s equivalence test. If there is no such entry, ",(0,t.jsx)(n.em,{children:"value"})," is the ",(0,t.jsx)(n.em,{children:"default"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Present-p"})," is ",(0,t.jsx)(n.em,{children:"true"})," if an entry is found; otherwise, it is ",(0,t.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"setf"})," may be used with ",(0,t.jsx)(n.strong,{children:"gethash"})," to modify the ",(0,t.jsx)(n.em,{children:"value"})," associated with a given ",(0,t.jsx)(n.em,{children:"key"}),", or to add a new entry. When a ",(0,t.jsx)(n.strong,{children:"gethash"})," ",(0,t.jsx)(n.em,{children:"form"})," is used as a ",(0,t.jsx)(n.strong,{children:"setf"})," ",(0,t.jsx)(n.em,{children:"place"}),", any ",(0,t.jsx)(n.em,{children:"default"})," which is supplied is evaluated according to normal left-to-right evaluation rules, but its ",(0,t.jsx)(n.em,{children:"value"})," is ignored."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'\n(setq table (make-hash-table)) \u2192 #<HASH-TABLE EQL 0/120 32206334> \n(gethash 1 table) \u2192 NIL, *false* \n(gethash 1 table 2) \u2192 2, *false* \n(setf (gethash 1 table) "one") \u2192 "one" \n(setf (gethash 2 table "two") "two") \u2192 "two" \n(gethash 1 table) \u2192 "one", *true* \n(gethash 2 table) \u2192 "two", *true* \n(gethash nil table) \u2192 NIL, *false* \n(setf (gethash nil table) nil) \u2192 NIL \n(gethash nil table) \u2192 NIL, *true* \n(defvar \\*counters\\* (make-hash-table)) \u2192 \\*COUNTERS\\* \n(gethash \u2019foo \\*counters\\*) \u2192 NIL, *false* \n(gethash \u2019foo \\*counters\\* 0) \u2192 0, *false* \n\n\n\n(defmacro how-many (obj) \u2018(values (gethash ,obj \\*counters\\* 0))) \u2192 HOW-MANY \n(defun count-it (obj) (incf (how-many obj))) \u2192 COUNT-IT \n(dolist (x \u2019(bar foo foo bar bar baz)) (count-it x)) \n(how-many \u2019foo) \u2192 2 \n(how-many \u2019bar) \u2192 3 \n(how-many \u2019quux) \u2192 0 \n\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"remhash"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"secondary value"}),", ",(0,t.jsx)(n.em,{children:"present-p"}),", can be used to distinguish the absence of an entry from the presence of an entry that has a value of ",(0,t.jsx)(n.em,{children:"default"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}const c={title:"gethash"},i="gethash",l={id:"chap-18/bi-c-dictionary/gethash_accessor",title:"gethash",description:"Expanded Reference: gethash",source:"@site/docs/chap-18/bi-c-dictionary/gethash_accessor.md",sourceDirName:"chap-18/bi-c-dictionary",slug:"/chap-18/bi-c-dictionary/gethash_accessor",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/gethash_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-18/bi-c-dictionary/gethash_accessor.md",tags:[],version:"current",frontMatter:{title:"gethash"},sidebar:"tutorialSidebar",previous:{title:"clrhash",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/clrhash_function"},next:{title:"hash-table-count",permalink:"/cl-language-reference/docs/chap-18/bi-c-dictionary/hash-table-count_function"}},o={},d=[{value:"Expanded Reference: gethash",id:"expanded-reference-gethash",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"gethash",children:"gethash"}),"\n","\n","\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-gethash",children:"Expanded Reference: gethash"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(gethash )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>h});var t=s(67294);const a={},r=t.createContext(a);function h(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:h(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);