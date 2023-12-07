"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[66455],{38099:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=r(85893),c=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"readtablep"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"readtablep"})," ",(0,s.jsx)(n.em,{children:"object \u2192 generalized-boolean"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"object"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.em,{children:"true"})," if ",(0,s.jsx)(n.em,{children:"object"})," is of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"readtable"}),"; otherwise, returns ",(0,s.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n(readtablep \\*readtable\\*) \u2192 true \n(readtablep (copy-readtable)) \u2192 true \n(readtablep \u2019\\*readtable\\*) \u2192 false \n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["(readtablep ",(0,s.jsx)(n.em,{children:"object"}),") ",(0,s.jsx)(n.em,{children:"\u2261"})," (typep ",(0,s.jsx)(n.em,{children:"object"})," \u2019readtable)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"set-dispatch-macro-character,"})," ",(0,s.jsx)(n.em,{children:". . ."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)("sup",{children:"set-dispatch-macro-character, get-dispatch-macro"})," character"]})," ",(0,s.jsx)("i",{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"get-dispatch-macro-character"})," ",(0,s.jsx)(n.em,{children:"disp-char sub-char"})," &optional ",(0,s.jsx)(n.em,{children:"readtable \u2192 function"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"set-dispatch-macro-character"})," ",(0,s.jsx)(n.em,{children:"disp-char sub-char new-function"})," &optional ",(0,s.jsx)(n.em,{children:"readtable \u2192"})," ",(0,s.jsx)(n.strong,{children:"t"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"disp-char"}),"\u2014a ",(0,s.jsx)(n.em,{children:"character"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"sub-char"}),"\u2014a ",(0,s.jsx)(n.em,{children:"character"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"readtable"}),"\u2014a ",(0,s.jsx)(n.em,{children:"readtable designator"})," . The default is the ",(0,s.jsx)(n.em,{children:"current readtable"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"function"}),"\u2014a ",(0,s.jsx)(n.em,{children:"function designator"})," or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"new-function"}),"\u2014a ",(0,s.jsx)(n.em,{children:"function designator"})," ."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"set-dispatch-macro-character"})," causes ",(0,s.jsx)(n.em,{children:"new-function"})," to be called when ",(0,s.jsx)(n.em,{children:"disp-char"})," followed by ",(0,s.jsx)(n.em,{children:"sub-char"})," is read. If ",(0,s.jsx)(n.em,{children:"sub-char"})," is a lowercase letter, it is converted to its uppercase equivalent. It is an error if ",(0,s.jsx)(n.em,{children:"sub-char"})," is one of the ten decimal digits."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"set-dispatch-macro-character"})," installs a ",(0,s.jsx)(n.em,{children:"new-function"})," to be called when a particular ",(0,s.jsx)(n.em,{children:"dispatching macro character"})," pair is read. ",(0,s.jsx)(n.em,{children:"New-function"})," is installed as the dispatch function to be called when ",(0,s.jsx)(n.em,{children:"readtable"})," is in use and when ",(0,s.jsx)(n.em,{children:"disp-char"})," is followed by ",(0,s.jsx)(n.em,{children:"sub-char"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about how the ",(0,s.jsx)(n.em,{children:"new-function"})," is invoked, see Section 2.1.4.4 (Macro Characters)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"get-dispatch-macro-character"})," retrieves the dispatch function associated with ",(0,s.jsx)(n.em,{children:"disp-char"})," and ",(0,s.jsx)(n.em,{children:"sub-char"})," in ",(0,s.jsx)(n.em,{children:"readtable"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"get-dispatch-macro-character"})," returns the macro-character function for ",(0,s.jsx)(n.em,{children:"sub-char"})," under ",(0,s.jsx)(n.em,{children:"disp char"}),", or ",(0,s.jsx)(n.strong,{children:"nil"})," if there is no function associated with ",(0,s.jsx)(n.em,{children:"sub-char"}),". If ",(0,s.jsx)(n.em,{children:"sub-char"})," is a decimal digit, ",(0,s.jsx)(n.strong,{children:"get-dispatch-macro-character"})," returns ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"\n(get-dispatch-macro-character #\\# #\\\\{) \u2192 NIL \n(set-dispatch-macro-character #\\# #\\\\{ ;dispatch on #\\{ \n\t\t\t      #\u2019(lambda(s c n) \n\t\t\t\t  (let ((list (read s nil (values) t))) ;list is object after #n\\{ \n\t\t\t\t    (when (consp list) ;return nth element of list \n\t\t\t\t      (unless (and n (< 0 n (length list))) (setq n 0)) \n\t\t\t\t      (setq list (nth n list))) \n\n\t\t\t\t    \n\t\t\t\t    \n\t\t\t\t    list))) \u2192 T \n#\\{(1 2 3 4) \u2192 1 \n#3\\{(0 1 2 3) \u2192 3 \n#\\{123 \u2192 123 \nIf it is desired that #$*foo* : as if it were (dollars *foo*). \n(defun |#$-reader| (stream subchar arg) \n  (declare (ignore subchar arg)) \n  (list \u2019dollars (read stream t nil t))) \u2192 |#$-reader| \n(set-dispatch-macro-character #\\# #\\$ #\u2019|#$-reader|) \u2192 T \n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:"Section 2.1.4.4 (Macro Characters)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"readtable"})," is modified."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"*readtable*"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["For either function, an error is signaled if ",(0,s.jsx)(n.em,{children:"disp-char"})," is not a ",(0,s.jsx)(n.em,{children:"dispatching macro character"})," in ",(0,s.jsx)(n.em,{children:"readtable"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"*readtable*"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["It is necessary to use ",(0,s.jsx)(n.strong,{children:"make-dispatch-macro-character"})," to set up the dispatch character before specifying its sub-characters."]})]})}function a(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const i={},d="readtablep",l={id:"chap-23/cd-c-dictionary/readtablep",title:"readtablep",description:"Expanded Reference: readtablep",source:"@site/docs/chap-23/cd-c-dictionary/readtablep.md",sourceDirName:"chap-23/cd-c-dictionary",slug:"/chap-23/cd-c-dictionary/readtablep",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/readtablep",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-23/cd-c-dictionary/readtablep.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readtable-case",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/readtablecase"},next:{title:"set-macro-character, get-macro-character",permalink:"/cl-language-reference/docs/chap-23/cd-c-dictionary/setmacrocharacter"}},h={},o=[{value:"Expanded Reference: readtablep",id:"expanded-reference-readtablep",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"readtablep",children:"readtablep"}),"\n","\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-readtablep",children:"Expanded Reference: readtablep"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(readtablep )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var s=r(67294);const c={},t=s.createContext(c);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);