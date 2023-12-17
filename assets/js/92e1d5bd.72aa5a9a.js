"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[72263],{86556:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=r(85893),t=r(11151);function s(e){const n={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2217"}),(0,i.jsx)(n.strong,{children:"print-readably"}),(0,i.jsx)(n.em,{children:"\u2217 Variable"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,i.jsxs)(n.p,{children:["a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2217"}),(0,i.jsx)(n.strong,{children:"print-readably"}),(0,i.jsx)(n.em,{children:"\u2217"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.strong,{children:"*print-readably*"})," is ",(0,i.jsx)(n.em,{children:"true"}),", some special rules for printing ",(0,i.jsx)(n.em,{children:"objects"})," go into effect. Specifically, printing any ",(0,i.jsx)(n.em,{children:"object O"}),(0,i.jsx)("sub",{children:"1"})," produces a printed representation that, when seen by the ",(0,i.jsx)(n.em,{children:"Lisp reader"})," while the ",(0,i.jsx)(n.em,{children:"standard readtable"})," is in effect, will produce an ",(0,i.jsx)(n.em,{children:"object O"}),(0,i.jsx)("sub",{children:"2"})," that is ",(0,i.jsx)(n.em,{children:"similar"})," to ",(0,i.jsx)(n.em,{children:"O"}),(0,i.jsx)("sub",{children:"1"}),". The printed representation produced might or might not be the same as the printed representation produced when ",(0,i.jsx)(n.strong,{children:"*print-readably*"})," is ",(0,i.jsx)(n.em,{children:"false"}),". If printing an ",(0,i.jsx)(n.em,{children:"object readably"})," is not possible, an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"print-not-readable"})," is signaled rather than using a syntax (",(0,i.jsx)(n.em,{children:"e.g."}),", the \u201c#<\u201d syntax) that would not be readable by the same ",(0,i.jsx)(n.em,{children:"implementation"}),". If the ",(0,i.jsx)(n.em,{children:"value"})," of some other ",(0,i.jsx)(n.em,{children:"printer control variable"})," is such that these requirements would be violated, the ",(0,i.jsx)(n.em,{children:"value"})," of that other ",(0,i.jsx)(n.em,{children:"variable"})," is ignored."]}),"\n",(0,i.jsxs)(n.p,{children:["Specifically, if ",(0,i.jsx)(n.strong,{children:"*print-readably*"})," is ",(0,i.jsx)(n.em,{children:"true"}),", printing proceeds as if ",(0,i.jsx)(n.strong,{children:"*print-escape*"}),", ",(0,i.jsx)(n.strong,{children:"*print-array*"}),", and ",(0,i.jsx)(n.strong,{children:"*print-gensym*"})," were also ",(0,i.jsx)(n.em,{children:"true"}),", and as if ",(0,i.jsx)(n.strong,{children:"*print-length*"}),", ",(0,i.jsx)(n.strong,{children:"*print-level*"}),", and ",(0,i.jsx)(n.strong,{children:"*print-lines*"})," were ",(0,i.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.strong,{children:"*print-readably*"})," is ",(0,i.jsx)(n.em,{children:"false"}),", the normal rules for printing and the normal interpretations of other ",(0,i.jsx)(n.em,{children:"printer control variables"})," are in effect."]}),"\n",(0,i.jsxs)(n.p,{children:["Individual ",(0,i.jsx)(n.em,{children:"methods"})," for ",(0,i.jsx)(n.strong,{children:"print-object"}),", including user-defined ",(0,i.jsx)(n.em,{children:"methods"}),", are responsible for implementing these requirements."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.strong,{children:"*read-eval*"})," is ",(0,i.jsx)(n.em,{children:"false"})," and ",(0,i.jsx)(n.strong,{children:"*print-readably*"})," is ",(0,i.jsx)(n.em,{children:"true"}),", any such method that would output a reference to the \u201c#.\u201d ",(0,i.jsx)(n.em,{children:"reader macro"})," will either output something else or will signal an error (as described above)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.p,{children:'(let ((x (list "a" \u2019\\a (gensym) \u2019((a (b (c))) d e f g)))'}),"\n",(0,i.jsx)(n.p,{children:"(*print-escape* nil)"}),"\n",(0,i.jsx)(n.p,{children:"(*print-gensym* nil)"}),"\n",(0,i.jsx)(n.p,{children:"(*print-level* 3)"}),"\n",(0,i.jsx)(n.p,{children:"(*print-length* 3))"}),"\n",(0,i.jsx)(n.p,{children:"(write x)"}),"\n",(0,i.jsx)(n.p,{children:"(let ((*print-readably* t))"}),"\n",(0,i.jsx)(n.p,{children:"(terpri)"}),"\n",(0,i.jsx)(n.p,{children:"(write x)"}),"\n",(0,i.jsxs)(n.p,{children:[":done","))"]}),"\n",(0,i.jsx)(n.p,{children:"\u25b7 (a a G4581 ((A #) D E ...))"}),"\n",(0,i.jsxs)(n.p,{children:['\u25b7 ("a" |a| #',":G4581"," ((A (B (C))) D E F G))"]}),"\n",(0,i.jsxs)(n.p,{children:["\u2192 ",":DONE"]}),"\n",(0,i.jsx)(n.p,{children:";; This is setup code is shared between the examples"}),"\n",(0,i.jsx)(n.p,{children:";; of three hypothetical implementations which follow."}),"\n",(0,i.jsx)(n.p,{children:"(setq table (make-hash-table)) \u2192 #<HASH-TABLE EQL 0/120 32005763>"}),"\n",(0,i.jsx)(n.p,{children:"(setf (gethash table 1) \u2019one) \u2192 ONE"}),"\n",(0,i.jsx)(n.p,{children:"(setf (gethash table 2) \u2019two) \u2192 TWO"}),"\n",(0,i.jsx)(n.p,{children:";; Implementation A"}),"\n",(0,i.jsx)(n.p,{children:"(let ((*print-readably* t)) (print table))"}),"\n",(0,i.jsx)(n.p,{children:"Error: Can\u2019t print #<HASH-TABLE EQL 0/120 32005763> readably."}),"\n",(0,i.jsx)(n.p,{children:";; Implementation B"}),"\n",(0,i.jsx)(n.p,{children:";; No standardized #S notation for hash tables is defined,"}),"\n",(0,i.jsx)(n.p,{children:";; but there might be an implementation-defined notation."}),"\n",(0,i.jsx)(n.p,{children:"(let ((*print-readably* t)) (print table))"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b7 #S(HASH-TABLE ",":TEST"," EQL ",":SIZE"," 120 ",":CONTENTS"," (1 ONE 2 TWO))"]}),"\n",(0,i.jsx)(n.p,{children:"\u2192 #<HASH-TABLE EQL 0/120 32005763>"}),"\n",(0,i.jsx)(n.p,{children:";; Implementation C"}),"\n",(0,i.jsx)(n.p,{children:";; Note that #. notation can only be used if *READ-EVAL* is true."}),"\n",(0,i.jsx)(n.p,{children:";; If *READ-EVAL* were false, this same implementation might have to"}),"\n",(0,i.jsx)(n.p,{children:";; signal an error unless it had yet another printing strategy to fall"}),"\n",(0,i.jsx)(n.p,{children:";; back on."}),"\n",(0,i.jsx)(n.p,{children:"(let ((*print-readably* t)) (print table))"}),"\n",(0,i.jsx)(n.p,{children:"\u25b7 #.(LET ((HASH-TABLE (MAKE-HASH-TABLE)))"}),"\n",(0,i.jsx)(n.p,{children:"\u25b7 (SETF (GETHASH 1 HASH-TABLE) ONE)"}),"\n",(0,i.jsx)(n.p,{children:"\u25b7 (SETF (GETHASH 2 HASH-TABLE) TWO)"}),"\n",(0,i.jsx)(n.p,{children:"\u25b7 HASH-TABLE)"}),"\n",(0,i.jsx)(n.p,{children:"\u2192 #<HASH-TABLE EQL 0/120 32005763>"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"write"}),", ",(0,i.jsx)(n.strong,{children:"print-unreadable-object"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["The rules for \u201c",(0,i.jsx)(n.em,{children:"similarity"}),"\u201d imply that #A or #( syntax cannot be used for ",(0,i.jsx)(n.em,{children:"arrays"})," of ",(0,i.jsx)(n.em,{children:"element type"})," other than ",(0,i.jsx)(n.strong,{children:"t"}),". An implementation will have to use another syntax or signal an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"print-not-readable"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const a={},d="*print-readably*",c={id:"chap-22/cc-e-dictionary/print-readably_variable",title:"\\*print-readably\\*",description:"Expanded Reference: \\print-readably\\",source:"@site/docs/chap-22/cc-e-dictionary/print-readably_variable.md",sourceDirName:"chap-22/cc-e-dictionary",slug:"/chap-22/cc-e-dictionary/print-readably_variable",permalink:"/cl-language-reference/docs/chap-22/cc-e-dictionary/print-readably_variable",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-e-dictionary/print-readably_variable.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\\*print-radix\\*",permalink:"/cl-language-reference/docs/chap-22/cc-e-dictionary/print-radix_variable"},next:{title:"\\*print-right-margin\\*",permalink:"/cl-language-reference/docs/chap-22/cc-e-dictionary/print-right-margin_variable"}},h={},o=[{value:"Expanded Reference: *print-readably*",id:"expanded-reference-print-readably",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"print-readably",children:"*print-readably*"}),"\n","\n","\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-print-readably",children:"Expanded Reference: *print-readably*"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"*print-readably*\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var i=r(67294);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);