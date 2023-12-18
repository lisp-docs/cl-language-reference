"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[55755],{80827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var i=t(85893),s=t(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ldiff, tailp"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ldiff"})," ",(0,i.jsx)(n.em,{children:"list object \u2192 result-list"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"tailp"})," ",(0,i.jsx)(n.em,{children:"object list \u2192 generalized-boolean"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"list"}),"\u2014a ",(0,i.jsx)(n.em,{children:"list"}),", which might be a ",(0,i.jsx)(n.em,{children:"dotted list"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"object"}),"\u2014an ",(0,i.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"result-list"}),"\u2014a ",(0,i.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"ldiff, tailp"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"object"})," is the ",(0,i.jsx)(n.em,{children:"same"})," as some ",(0,i.jsx)(n.em,{children:"tail"})," of ",(0,i.jsx)(n.em,{children:"list"}),", ",(0,i.jsx)(n.strong,{children:"tailp"})," returns ",(0,i.jsx)(n.em,{children:"true"}),"; otherwise, it returns ",(0,i.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"object"})," is the ",(0,i.jsx)(n.em,{children:"same"})," as some ",(0,i.jsx)(n.em,{children:"tail"})," of ",(0,i.jsx)(n.em,{children:"list"}),", ",(0,i.jsx)(n.strong,{children:"ldiff"})," returns a ",(0,i.jsx)(n.em,{children:"fresh list"})," of the ",(0,i.jsx)(n.em,{children:"elements"})," of ",(0,i.jsx)(n.em,{children:"list"})," that precede ",(0,i.jsx)(n.strong,{children:"object"})," in the ",(0,i.jsx)(n.em,{children:"list structure"})," of ",(0,i.jsx)(n.em,{children:"list"}),"; otherwise, it returns a ",(0,i.jsx)(n.em,{children:"copy"}),(0,i.jsx)("sub",{children:"2"})," of ",(0,i.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'(let ((lists \u2019#((a b c) (a b c . d)))) \n  (dotimes (i (length lists)) () \n\t   (let ((list (aref lists i))) \n\t     (format t "~2&list=~S ~21T(tailp object list)~ \n~44T(ldiff list object)~%" list) \n\t     (let ((objects (vector list (cddr list) (copy-list (cddr list)) \n\t\t\t\t    \u2019(f g h) \u2019() \u2019d \u2019x))) \n\t       (dotimes (j (length objects)) () \n\t\t\t(let ((object (aref objects j))) \n\t\t\t  (format t "~& object=~S ~21T~S ~44T~S" \n\t\t\t\t  object (tailp object list) (ldiff list object)))))))) \n\u25b7 \n\u25b7 list=(A B C) (tailp object list) (ldiff list object) \n\u25b7 object=(A B C) T NIL \n\u25b7 object=(C) T (A B) \n\u25b7 object=(C) NIL (A B C) \n\u25b7 object=(F G H) NIL (A B C) \n\u25b7 object=NIL T (A B C) \n\u25b7 object=D NIL (A B C) \n\u25b7 object=X NIL (A B C) \n\u25b7 \n\u25b7 list=(A B C . D) (tailp object list) (ldiff list object) \n\u25b7 object=(A B C . D) T NIL \n\u25b7 object=(C . D) T (A B) \n\u25b7 object=(C . D) NIL (A B C . D) \n\u25b7 object=(F G H) NIL (A B C . D) \n\u25b7 object=NIL NIL (A B C . D) \n\u25b7 object=D T (A B C) \n\u25b7 object=X NIL (A B C . D) \n\u2192 NIL \n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,i.jsxs)(n.p,{children:["Neither ",(0,i.jsx)(n.strong,{children:"ldiff"})," nor ",(0,i.jsx)(n.strong,{children:"tailp"})," modifies either of its ",(0,i.jsx)(n.em,{children:"arguments"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should be prepared to signal an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"type-error"})," if ",(0,i.jsx)(n.em,{children:"list"})," is not a ",(0,i.jsx)(n.em,{children:"proper list"})," or a ",(0,i.jsx)(n.em,{children:"dotted list"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"set-difference"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"list"})," is a ",(0,i.jsx)(n.em,{children:"circular list"}),", ",(0,i.jsx)(n.strong,{children:"tailp"})," will reliably ",(0,i.jsx)(n.em,{children:"yield"})," a ",(0,i.jsx)(n.em,{children:"value"})," only if the given ",(0,i.jsx)(n.em,{children:"object"})," is in fact a ",(0,i.jsx)(n.em,{children:"tail"})," of ",(0,i.jsx)(n.em,{children:"list"}),". Otherwise, the consequences are unspecified: a given ",(0,i.jsx)(n.em,{children:"implementation"})," which detects the circularity must return ",(0,i.jsx)(n.em,{children:"false"}),", but since an ",(0,i.jsx)(n.em,{children:"implementation"})," is not obliged to detect such a ",(0,i.jsx)(n.em,{children:"situation"}),", ",(0,i.jsx)(n.strong,{children:"tailp"})," might just loop indefinitely without returning in that case."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"tailp"})," could be defined as follows:"]}),"\n",(0,i.jsx)(n.p,{children:"(defun tailp (object list)"}),"\n",(0,i.jsx)(n.p,{children:"(do ((list list (cdr list)))"}),"\n",(0,i.jsx)(n.p,{children:"((atom list) (eql list object))"}),"\n",(0,i.jsx)(n.p,{children:"(if (eql object list)"}),"\n",(0,i.jsx)(n.p,{children:"(return t))))"}),"\n",(0,i.jsxs)(n.p,{children:["and ",(0,i.jsx)(n.strong,{children:"ldiff"})," could be defined by:"]}),"\n",(0,i.jsx)(n.p,{children:"(defun ldiff (list object)"}),"\n",(0,i.jsx)(n.p,{children:"(do ((list list (cdr list))"}),"\n",(0,i.jsx)(n.p,{children:"(r \u2019() (cons (car list) r)))"}),"\n",(0,i.jsx)(n.p,{children:"((atom list)"}),"\n",(0,i.jsx)(n.p,{children:"(if (eql list object) (nreverse r) (nreconc r list)))"}),"\n",(0,i.jsx)(n.p,{children:"(when (eql object list)"}),"\n",(0,i.jsx)(n.p,{children:"(return (nreverse r)))))"})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}const c={},d="ldiff, tailp",o={id:"chap-14/be-c-dictionary/ldiff",title:"ldiff, tailp",description:"Expanded Reference: ldiff, tailp",source:"@site/docs/chap-14/be-c-dictionary/ldiff.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/ldiff",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/ldiff",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/ldiff.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"last",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/last"},next:{title:"list",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/list"}},a={},h=[{value:"Expanded Reference: ldiff, tailp",id:"expanded-reference-ldiff-tailp",level:2}];function j(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ldiff-tailp",children:"ldiff, tailp"}),"\n","\n","\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-ldiff-tailp",children:"Expanded Reference: ldiff, tailp"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(ldiff, tailp )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);