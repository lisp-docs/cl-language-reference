"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[51717],{95366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=t(85893),l=t(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"list-length"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"list-length"})," ",(0,s.jsx)(n.em,{children:"list \u2192 length"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"list"}),"\u2014a ",(0,s.jsx)(n.em,{children:"proper list"})," or a ",(0,s.jsx)(n.em,{children:"circular list"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"length"}),"\u2014a non-negative ",(0,s.jsx)(n.em,{children:"integer"})," , or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns the ",(0,s.jsx)(n.em,{children:"length"})," of ",(0,s.jsx)(n.em,{children:"list"})," if ",(0,s.jsx)(n.em,{children:"list"})," is a ",(0,s.jsx)(n.em,{children:"proper list"}),". Returns ",(0,s.jsx)(n.strong,{children:"nil"})," if ",(0,s.jsx)(n.em,{children:"list"})," is a ",(0,s.jsx)(n.em,{children:"circular list"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(list-length \u2019(a b c d)) \u2192 4 \n(list-length \u2019(a (b c) d)) \u2192 3 \n(list-length \u2019()) \u2192 0 \n(list-length nil) \u2192 0 \n(defun circular-list (&rest elements) \n  (let ((cycle (copy-list elements))) \n    (nconc cycle cycle))) \n(list-length (circular-list \u2019a \u2019b)) \u2192 NIL \n(list-length (circular-list \u2019a)) \u2192 NIL \n(list-length (circular-list)) \u2192 0 \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"list"})," is not a ",(0,s.jsx)(n.em,{children:"proper list"})," or a ",(0,s.jsx)(n.em,{children:"circular list"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"length"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"list-length"})," could be implemented as follows:"]}),"\n",(0,s.jsx)(n.p,{children:"(defun list-length (x)"}),"\n",(0,s.jsx)(n.p,{children:"(do ((n 0 (+ n 2)) ;Counter."}),"\n",(0,s.jsx)(n.p,{children:"(fast x (cddr fast)) ;Fast pointer: leaps by 2."}),"\n",(0,s.jsx)(n.p,{children:"(slow x (cdr slow))) ;Slow pointer: leaps by 1."}),"\n",(0,s.jsx)(n.p,{children:"(nil)"}),"\n",(0,s.jsx)(n.p,{children:";; If fast pointer hits the end, return the count."}),"\n",(0,s.jsx)(n.p,{children:"(when (endp fast) (return n))"}),"\n",(0,s.jsx)(n.p,{children:"(when (endp (cdr fast)) (return (+ n 1)))"}),"\n",(0,s.jsx)(n.p,{children:";; If fast pointer eventually equals slow pointer,"}),"\n",(0,s.jsx)(n.p,{children:";; then we must be stuck in a circular list."}),"\n",(0,s.jsx)(n.p,{children:";; (A deeper property is the converse: if we are"}),"\n",(0,s.jsx)(n.p,{children:";; stuck in a circular list, then eventually the"}),"\n",(0,s.jsx)(n.p,{children:";; fast pointer will equal the slow pointer."}),"\n",(0,s.jsx)(n.p,{children:";; That fact justifies this implementation.)"}),"\n",(0,s.jsx)(n.p,{children:"(when (and (eq fast slow) (> n 0)) (return nil))))"})]})}function r(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const c={},d="list-length",o={id:"chap-14/be-c-dictionary/listlength",title:"list-length",description:"Expanded Reference: list-length",source:"@site/docs/chap-14/be-c-dictionary/listlength.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/listlength",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/listlength",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/listlength.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"list, list",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/list_list_function"},next:{title:"listp",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/listp"}},h={},a=[{value:"Expanded Reference: list-length",id:"expanded-reference-list-length",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"list-length",children:"list-length"}),"\n","\n","\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-list-length",children:"Expanded Reference: list-length"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(list-length )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);