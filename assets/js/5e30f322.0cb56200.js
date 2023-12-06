"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[56421],{85840:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var t=n(85893),r=n(11151);function i(e){const s={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not"})," ",(0,t.jsx)(s.em,{children:"Function"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"subst"})," ",(0,t.jsx)(s.em,{children:"new old tree"})," &key ",(0,t.jsx)(s.em,{children:"key test test-not \u2192 new-tree"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"subst-if"})," ",(0,t.jsx)(s.em,{children:"new predicate tree"})," &key ",(0,t.jsx)(s.em,{children:"key \u2192 new-tree"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"subst-if-not"})," ",(0,t.jsx)(s.em,{children:"new predicate tree"})," &key ",(0,t.jsx)(s.em,{children:"key \u2192 new-tree"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nsubst"})," ",(0,t.jsx)(s.em,{children:"new old tree"})," &key ",(0,t.jsx)(s.em,{children:"key test test-not \u2192 new-tree"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nsubst-if"})," ",(0,t.jsx)(s.em,{children:"new predicate tree"})," &key ",(0,t.jsx)(s.em,{children:"key \u2192 new-tree"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nsubst-if-not"})," ",(0,t.jsx)(s.em,{children:"new predicate tree"})," &key ",(0,t.jsx)(s.em,{children:"key \u2192 new-tree"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"new"}),"\u2014an ",(0,t.jsx)(s.em,{children:"object"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"old"}),"\u2014an ",(0,t.jsx)(s.em,{children:"object"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"subst, subst-if, subst-if-not, nsubst, nsubst-if,"})," ",(0,t.jsx)(s.em,{children:". . ."})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"predicate"}),"\u2014a ",(0,t.jsx)(s.em,{children:"symbol"})," that names a ",(0,t.jsx)(s.em,{children:"function"}),", or a ",(0,t.jsx)(s.em,{children:"function"})," of one argument that returns a ",(0,t.jsx)(s.em,{children:"generalized boolean"})," value."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"tree"}),"\u2014a ",(0,t.jsx)(s.em,{children:"tree"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"test"}),"\u2014a ",(0,t.jsx)(s.em,{children:"designator"})," for a ",(0,t.jsx)(s.em,{children:"function"})," of two ",(0,t.jsx)(s.em,{children:"arguments"})," that returns a ",(0,t.jsx)(s.em,{children:"generalized boolean"}),". ",(0,t.jsx)(s.em,{children:"test-not"}),"\u2014a ",(0,t.jsx)(s.em,{children:"designator"})," for a ",(0,t.jsx)(s.em,{children:"function"})," of two ",(0,t.jsx)(s.em,{children:"arguments"})," that returns a ",(0,t.jsx)(s.em,{children:"generalized boolean"}),". ",(0,t.jsx)(s.em,{children:"key"}),"\u2014a ",(0,t.jsx)(s.em,{children:"designator"})," for a ",(0,t.jsx)(s.em,{children:"function"})," of one argument, or ",(0,t.jsx)(s.strong,{children:"nil"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"new-tree"}),"\u2014a ",(0,t.jsx)(s.em,{children:"tree"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"subst"}),", ",(0,t.jsx)(s.strong,{children:"subst-if"}),", and ",(0,t.jsx)(s.strong,{children:"subst-if-not"})," perform substitution operations on ",(0,t.jsx)(s.em,{children:"tree"}),". Each function searches ",(0,t.jsx)(s.em,{children:"tree"})," for occurrences of a particular ",(0,t.jsx)(s.em,{children:"old"})," item of an element or subexpression that ",(0,t.jsx)(s.em,{children:"satisfies the test"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nsubst"}),", ",(0,t.jsx)(s.strong,{children:"nsubst-if"}),", and ",(0,t.jsx)(s.strong,{children:"nsubst-if-not"})," are like ",(0,t.jsx)(s.strong,{children:"subst"}),", ",(0,t.jsx)(s.strong,{children:"subst-if"}),", and ",(0,t.jsx)(s.strong,{children:"subst-if-not"})," respectively, except that the original ",(0,t.jsx)(s.em,{children:"tree"})," is modified."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"subst"})," makes a copy of ",(0,t.jsx)(s.em,{children:"tree"}),", substituting ",(0,t.jsx)(s.em,{children:"new"})," for every subtree or leaf of ",(0,t.jsx)(s.em,{children:"tree"})," (whether the subtree or leaf is a ",(0,t.jsx)(s.em,{children:"car"})," or a ",(0,t.jsx)(s.em,{children:"cdr"})," of its parent) such that ",(0,t.jsx)(s.em,{children:"old"})," and the subtree or leaf ",(0,t.jsx)(s.em,{children:"satisfy the test"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nsubst"})," is a destructive version of ",(0,t.jsx)(s.strong,{children:"subst"}),". The list structure of ",(0,t.jsx)(s.em,{children:"tree"})," is altered by destructively replacing with ",(0,t.jsx)(s.em,{children:"new"})," each leaf of the ",(0,t.jsx)(s.em,{children:"tree"})," such that ",(0,t.jsx)(s.em,{children:"old"})," and the leaf ",(0,t.jsx)(s.em,{children:"satisfy the test"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For ",(0,t.jsx)(s.strong,{children:"subst"}),", ",(0,t.jsx)(s.strong,{children:"subst-if"}),", and ",(0,t.jsx)(s.strong,{children:"subst-if-not"}),", if the functions succeed, a new copy of the tree is returned in which each occurrence of such an element is replaced by the ",(0,t.jsx)(s.em,{children:"new"})," element or subexpression. If no changes are made, the original ",(0,t.jsx)(s.em,{children:"tree"})," may be returned. The original ",(0,t.jsx)(s.em,{children:"tree"})," is left unchanged, but the result tree may share storage with it."]}),"\n",(0,t.jsxs)(s.p,{children:["For ",(0,t.jsx)(s.strong,{children:"nsubst"}),", ",(0,t.jsx)(s.strong,{children:"nsubst-if"}),", and ",(0,t.jsx)(s.strong,{children:"nsubst-if-not"})," the original ",(0,t.jsx)(s.em,{children:"tree"})," is modified and returned as the function result, but the result may not be ",(0,t.jsx)(s.strong,{children:"eq"})," to ",(0,t.jsx)(s.em,{children:"tree"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lisp",children:' \n\n(setq tree1 \u2019(1 (1 2) (1 2 3) (1 2 3 4))) \u2192 (1 (1 2) (1 2 3) (1 2 3 4)) \n\n(subst "two" 2 tree1) \u2192 (1 (1 "two") (1 "two" 3) (1 "two" 3 4)) \n\n(subst "five" 5 tree1) \u2192 (1 (1 2) (1 2 3) (1 2 3 4)) \n\n(eq tree1 (subst "five" 5 tree1)) \u2192 implementation-dependent \n\n(subst \u2019tempest \u2019hurricane \n\n\u2019(shakespeare wrote (the hurricane))) \n\n\u2192 (SHAKESPEARE WROTE (THE TEMPEST)) \n\n(subst \u2019foo \u2019nil \u2019(shakespeare wrote (twelfth night))) \n\n\u2192 (SHAKESPEARE WROTE (TWELFTH NIGHT . FOO) . FOO) \n\n(subst \u2019(a . cons) \u2019(old . pair) \n\n\u2019((old . spice) ((old . shoes) old . pair) (old . pair)) \n\n\n\n \n\n \n\n:test #\u2019equal) \n\n\u2192 ((OLD . SPICE) ((OLD . SHOES) A . CONS) (A . CONS)) \n\n(subst-if 5 #\u2019listp tree1) \u2192 5 \n\n(subst-if-not \u2019(x) #\u2019consp tree1) \n\n\u2192 (1 X) \n\ntree1 \u2192 (1 (1 2) (1 2 3) (1 2 3 4)) \n\n(nsubst \u2019x 3 tree1 :key #\u2019(lambda (y) (and (listp y) (third y)))) \n\n\u2192 (1 (1 2) X X) \n\ntree1 \u2192 (1 (1 2) X X) \n\n\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"nsubst"}),", ",(0,t.jsx)(s.strong,{children:"nsubst-if"}),", and ",(0,t.jsx)(s.strong,{children:"nsubst-if-not"})," might alter the ",(0,t.jsx)(s.em,{children:"tree structure"})," of ",(0,t.jsx)(s.em,{children:"tree"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"substitute"}),", ",(0,t.jsx)(s.strong,{children:"nsubstitute"}),", Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects)"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",":test-not"," parameter is deprecated."]}),"\n",(0,t.jsxs)(s.p,{children:["The functions ",(0,t.jsx)(s.strong,{children:"subst-if-not"})," and ",(0,t.jsx)(s.strong,{children:"nsubst-if-not"})," are deprecated."]}),"\n",(0,t.jsxs)(s.p,{children:["One possible definition of ",(0,t.jsx)(s.strong,{children:"subst"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"(defun subst (old new tree &rest x &key test test-not key)"}),"\n",(0,t.jsxs)(s.p,{children:["(cond ((satisfies-the-test old tree ",":test"," test"]}),"\n",(0,t.jsxs)(s.p,{children:[":test-not"," test-not ",":key"," key)"]}),"\n",(0,t.jsx)(s.p,{children:"new)"}),"\n",(0,t.jsx)(s.p,{children:"((atom tree) tree)"}),"\n",(0,t.jsx)(s.p,{children:"(t (let ((a (apply #\u2019subst old new (car tree) x))"}),"\n",(0,t.jsx)(s.p,{children:"(d (apply #\u2019subst old new (cdr tree) x)))"}),"\n",(0,t.jsx)(s.p,{children:"(if (and (eql a (car tree))"}),"\n",(0,t.jsx)(s.p,{children:"(eql d (cdr tree)))"}),"\n",(0,t.jsx)(s.p,{children:"tree"}),"\n",(0,t.jsx)(s.p,{children:"(cons a d))))))"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"tree-equal"})})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const d={},o="subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not",l={id:"chap-14/be-c-dictionary/subst",title:"subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not",description:"Expanded Reference: subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not",source:"@site/docs/chap-14/be-c-dictionary/subst.md",sourceDirName:"chap-14/be-c-dictionary",slug:"/chap-14/be-c-dictionary/subst",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/subst",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-14/be-c-dictionary/subst.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"subsetp",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/subsetp"},next:{title:"tree-equal",permalink:"/cl-language-reference/docs/chap-14/be-c-dictionary/treeequal"}},h={},a=[{value:"Expanded Reference: subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not",id:"expanded-reference-subst-subst-if-subst-if-not-nsubst-nsubst-if-nsubst-if-not",level:2}];function u(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"subst-subst-if-subst-if-not-nsubst-nsubst-if-nsubst-if-not",children:"subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(s.h2,{id:"expanded-reference-subst-subst-if-subst-if-not-nsubst-nsubst-if-nsubst-if-not",children:"Expanded Reference: subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lisp",children:"(subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not )\n"})})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>c});var t=n(67294);const r={},i=t.createContext(r);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);