"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[36082],{78261:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var t=n(85893),i=n(11151);function r(e){const s={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"sublis, nsublis"})," ",(0,t.jsx)(s.em,{children:"Function"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"sublis"})," ",(0,t.jsx)(s.em,{children:"alist tree"})," &key ",(0,t.jsx)(s.em,{children:"key test test-not \u2192 new-tree"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nsublis"})," ",(0,t.jsx)(s.em,{children:"alist tree"})," &key ",(0,t.jsx)(s.em,{children:"key test test-not \u2192 new-tree"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"alist"}),"\u2014an ",(0,t.jsx)(s.em,{children:"association list"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"tree"}),"\u2014a ",(0,t.jsx)(s.em,{children:"tree"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"test"}),"\u2014a ",(0,t.jsx)(s.em,{children:"designator"})," for a ",(0,t.jsx)(s.em,{children:"function"})," of two ",(0,t.jsx)(s.em,{children:"arguments"})," that returns a ",(0,t.jsx)(s.em,{children:"generalized boolean"}),". ",(0,t.jsx)(s.em,{children:"test-not"}),"\u2014a ",(0,t.jsx)(s.em,{children:"designator"})," for a ",(0,t.jsx)(s.em,{children:"function"})," of two ",(0,t.jsx)(s.em,{children:"arguments"})," that returns a ",(0,t.jsx)(s.em,{children:"generalized boolean"}),". ",(0,t.jsx)(s.em,{children:"key"}),"\u2014a ",(0,t.jsx)(s.em,{children:"designator"})," for a ",(0,t.jsx)(s.em,{children:"function"})," of one argument, or ",(0,t.jsx)(s.strong,{children:"nil"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"new-tree"}),"\u2014a ",(0,t.jsx)(s.em,{children:"tree"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"sublis, nsublis"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"sublis"})," makes substitutions for ",(0,t.jsx)(s.em,{children:"objects"})," in ",(0,t.jsx)(s.em,{children:"tree"})," (a structure of ",(0,t.jsx)(s.em,{children:"conses"}),"). ",(0,t.jsx)(s.strong,{children:"nsublis"})," is like ",(0,t.jsx)(s.strong,{children:"sublis"})," but destructively modifies the relevant parts of the ",(0,t.jsx)(s.em,{children:"tree"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"sublis"})," looks at all subtrees and leaves of ",(0,t.jsx)(s.em,{children:"tree"}),"; if a subtree or leaf appears as a key in ",(0,t.jsx)(s.em,{children:"alist"})," (that is, the key and the subtree or leaf ",(0,t.jsx)(s.em,{children:"satisfy the test"}),"), it is replaced by the ",(0,t.jsx)(s.em,{children:"object"})," with which that key is associated. This operation is non-destructive. In effect, ",(0,t.jsx)(s.strong,{children:"sublis"})," can perform several ",(0,t.jsx)(s.strong,{children:"subst"})," operations simultaneously."]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.strong,{children:"sublis"})," succeeds, a new copy of ",(0,t.jsx)(s.em,{children:"tree"})," is returned in which each occurrence of such a subtree or leaf is replaced by the ",(0,t.jsx)(s.em,{children:"object"})," with which it is associated. If no changes are made, the original tree is returned. The original ",(0,t.jsx)(s.em,{children:"tree"})," is left unchanged, but the result tree may share cells with it."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nsublis"})," is permitted to modify ",(0,t.jsx)(s.em,{children:"tree"})," but otherwise returns the same values as ",(0,t.jsx)(s.strong,{children:"sublis"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lisp",children:'\n(sublis \u2019((x . 100) (z . zprime)) \n\t \u2019(plus x (minus g z x p) 4 . x)) \n\u2192 (PLUS 100 (MINUS G ZPRIME 100 P) 4 . 100) \n(sublis \u2019(((+ x y) . (- x y)) ((- x y) . (+ x y))) \n\t \u2019(\\* (/ (+ x y) (+ x p)) (- x y)) \n\t :test #\u2019equal) \n\u2192 (\\* (/ (- X Y) (+ X P)) (+ X Y)) \n(setq tree1 \u2019(1 (1 2) ((1 2 3)) (((1 2 3 4))))) \n\u2192 (1 (1 2) ((1 2 3)) (((1 2 3 4)))) \n(sublis \u2019((3 . "three")) tree1) \n\u2192 (1 (1 2) ((1 2 "three")) (((1 2 "three" 4)))) \n(sublis \u2019((t . "string")) \n\t (sublis \u2019((1 . "") (4 . 44)) tree1) \n\t :key #\u2019stringp) \n\u2192 ("string" ("string" 2) (("string" 2 3)) ((("string" 2 3 44)))) \ntree1 \u2192 (1 (1 2) ((1 2 3)) (((1 2 3 4)))) \n(setq tree2 \u2019("one" ("one" "two") (("one" "Two" "three")))) \n\u2192 ("one" ("one" "two") (("one" "Two" "three"))) \n(sublis \u2019(("two" . 2)) tree2) \n\u2192 ("one" ("one" "two") (("one" "Two" "three"))) \ntree2 \u2192 ("one" ("one" "two") (("one" "Two" "three"))) \n(sublis \u2019(("two" . 2)) tree2 :test \u2019equal) \n\u2192 ("one" ("one" 2) (("one" "Two" "three"))) \n(nsublis \u2019((t . \u2019temp)) \n\t  tree1 \n\t  :key #\u2019(lambda (x) (or (atom x) (< (list-length x) 3)))) \n\u2192 ((QUOTE TEMP) (QUOTE TEMP) QUOTE TEMP) \n\n\n\n\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nsublis"})," modifies ",(0,t.jsx)(s.em,{children:"tree"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"subst"}),", Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects)"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",":test-not"," parameter is deprecated."]}),"\n",(0,t.jsxs)(s.p,{children:["Because the side-effecting variants (",(0,t.jsx)(s.em,{children:"e.g."}),", ",(0,t.jsx)(s.strong,{children:"nsublis"}),") potentially change the path that is being traversed, their effects in the presence of shared or circular structure structure may vary in surprising ways when compared to their non-side-effecting alternatives. To see this, consider the following side-effect behavior, which might be exhibited by some implementations:"]}),"\n",(0,t.jsx)(s.p,{children:"(defun test-it (fn)"}),"\n",(0,t.jsx)(s.p,{children:"(let* ((shared-piece (list \u2019a \u2019b))"}),"\n",(0,t.jsx)(s.p,{children:"(data (list shared-piece shared-piece)))"}),"\n",(0,t.jsx)(s.p,{children:"(funcall fn \u2019((a . b) (b . a)) data)))"}),"\n",(0,t.jsx)(s.p,{children:"(test-it #\u2019sublis) \u2192 ((B A) (B A))"}),"\n",(0,t.jsx)(s.p,{children:"(test-it #\u2019nsublis) \u2192 ((A B) (A B))"})]})}function l(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}const c={title:"sublis, nsublis"},o="sublis, nsublis",a={id:"chap-14/be-c-dictionary/sublis_nsublis_function",title:"sublis, nsublis",description:"Expanded Reference: sublis, nsublis",source:"@site/docs/chap-14/be-c-dictionary/sublis_nsublis_function.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/sublis_nsublis_function",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/sublis_nsublis_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/sublis_nsublis_function.md",tags:[],version:"current",frontMatter:{title:"sublis, nsublis"},sidebar:"tutorialSidebar",previous:{title:"set-exclusive-or, nset-exclusive-or",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/set-exclusive-or_nset-exclusive-or_function"},next:{title:"subsetp",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/subsetp_function"}},d={},h=[{value:"Expanded Reference: sublis, nsublis",id:"expanded-reference-sublis-nsublis",level:2}];function u(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"sublis-nsublis",children:"sublis, nsublis"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(s.h2,{id:"expanded-reference-sublis-nsublis",children:"Expanded Reference: sublis, nsublis"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lisp",children:"(sublis, nsublis )\n"})})]})}function x(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>l});var t=n(67294);const i={},r=t.createContext(i);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);