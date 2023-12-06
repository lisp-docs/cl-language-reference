"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[43478],{75970:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=s(85893),i=s(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"with-package-iterator"})," ",(0,r.jsx)(n.em,{children:"Macro"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"with-package-iterator"})," (",(0,r.jsx)(n.em,{children:"name package-list-form"})," &rest ",(0,r.jsx)(n.em,{children:"symbol-types"}),") ",(0,r.jsx)(n.em,{children:"{declaration}"}),"* ",(0,r.jsx)(n.em,{children:"{form}"}),"* \u2192 {result}*"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"name"}),"\u2014a ",(0,r.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"package-list-form"}),"\u2014a ",(0,r.jsx)(n.em,{children:"form"}),"; evaluated once to produce a ",(0,r.jsx)(n.em,{children:"package-list"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"package-list"}),"\u2014a ",(0,r.jsx)(n.em,{children:"designator"})," for a list of ",(0,r.jsx)(n.em,{children:"package designators"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"symbol-type"}),"\u2014one of the ",(0,r.jsx)(n.em,{children:"symbols"})," ",":internal",", ",":external",", or ",":inherited","."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"declaration"}),"\u2014a ",(0,r.jsx)(n.strong,{children:"declare"})," ",(0,r.jsx)(n.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,r.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"results"}),"\u2014the ",(0,r.jsx)(n.em,{children:"values"})," of the ",(0,r.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Within the lexical scope of the body ",(0,r.jsx)(n.em,{children:"forms"}),", the ",(0,r.jsx)(n.em,{children:"name"})," is defined via ",(0,r.jsx)(n.strong,{children:"macrolet"})," such that successive invocations of (",(0,r.jsx)(n.em,{children:"name"}),") will return the ",(0,r.jsx)(n.em,{children:"symbols"}),", one by one, from the ",(0,r.jsx)(n.em,{children:"packages"})," in ",(0,r.jsx)(n.em,{children:"package-list"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["It is unspecified whether ",(0,r.jsx)(n.em,{children:"symbols"})," inherited from multiple ",(0,r.jsx)(n.em,{children:"packages"})," are returned more than once. The order of ",(0,r.jsx)(n.em,{children:"symbols"})," returned does not necessarily reflect the order of ",(0,r.jsx)(n.em,{children:"packages"})," in ",(0,r.jsx)(n.em,{children:"package-list"}),". When ",(0,r.jsx)(n.em,{children:"package-list"})," has more than one element, it is unspecified whether duplicate ",(0,r.jsx)(n.em,{children:"symbols"})," are returned once or more than once."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Symbol-types"})," controls which ",(0,r.jsx)(n.em,{children:"symbols"})," that are ",(0,r.jsx)(n.em,{children:"accessible"})," in a ",(0,r.jsx)(n.em,{children:"package"})," are returned as follows:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"with-package-iterator"})}),"\n",(0,r.jsx)(n.p,{children:":internal"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"symbols"})," that are ",(0,r.jsx)(n.em,{children:"present"})," in the ",(0,r.jsx)(n.em,{children:"package"}),", but that are not ",(0,r.jsx)(n.em,{children:"exported"}),"."]}),"\n",(0,r.jsx)(n.p,{children:":external"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"symbols"})," that are ",(0,r.jsx)(n.em,{children:"present"})," in the ",(0,r.jsx)(n.em,{children:"package"})," and are ",(0,r.jsx)(n.em,{children:"exported"}),"."]}),"\n",(0,r.jsx)(n.p,{children:":inherited"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"symbols"})," that are ",(0,r.jsx)(n.em,{children:"exported"})," by used ",(0,r.jsx)(n.em,{children:"packages"})," and that are not ",(0,r.jsx)(n.em,{children:"shadowed"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When more than one argument is supplied for ",(0,r.jsx)(n.em,{children:"symbol-types"}),", a ",(0,r.jsx)(n.em,{children:"symbol"})," is returned if its ",(0,r.jsx)(n.em,{children:"accessibility"})," matches any one of the ",(0,r.jsx)(n.em,{children:"symbol-types"})," supplied. Implementations may extend this syntax by recognizing additional symbol accessibility types."]}),"\n",(0,r.jsxs)(n.p,{children:["An invocation of (",(0,r.jsx)(n.em,{children:"name"}),") returns four values as follows:"]}),"\n",(0,r.jsxs)(n.p,{children:["1. A flag that indicates whether a ",(0,r.jsx)(n.em,{children:"symbol"})," is returned (true means that a ",(0,r.jsx)(n.em,{children:"symbol"})," is returned). 2. A ",(0,r.jsx)(n.em,{children:"symbol"})," that is ",(0,r.jsx)(n.em,{children:"accessible"})," in one the indicated ",(0,r.jsx)(n.em,{children:"packages"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["3. The accessibility type for that ",(0,r.jsx)(n.em,{children:"symbol"}),"; ",(0,r.jsx)(n.em,{children:"i.e."}),", one of the symbols ",":internal",", ",":external",", or ",":inherited","."]}),"\n",(0,r.jsxs)(n.p,{children:["4. The ",(0,r.jsx)(n.em,{children:"package"})," from which the ",(0,r.jsx)(n.em,{children:"symbol"})," was obtained. The ",(0,r.jsx)(n.em,{children:"package"})," is one of the ",(0,r.jsx)(n.em,{children:"packages"})," present or named in ",(0,r.jsx)(n.em,{children:"package-list"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["After all ",(0,r.jsx)(n.em,{children:"symbols"})," have been returned by successive invocations of (",(0,r.jsx)(n.em,{children:"name"}),"), then only one value is returned, namely ",(0,r.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The meaning of the second, third, and fourth ",(0,r.jsx)(n.em,{children:"values"})," is that the returned ",(0,r.jsx)(n.em,{children:"symbol"})," is ",(0,r.jsx)(n.em,{children:"accessible"})," in the returned ",(0,r.jsx)(n.em,{children:"package"})," in the way indicated by the second return value as follows:"]}),"\n",(0,r.jsx)(n.p,{children:":internal"}),"\n",(0,r.jsxs)(n.p,{children:["Means ",(0,r.jsx)(n.em,{children:"present"})," and not ",(0,r.jsx)(n.em,{children:"exported"}),"."]}),"\n",(0,r.jsx)(n.p,{children:":external"}),"\n",(0,r.jsxs)(n.p,{children:["Means ",(0,r.jsx)(n.em,{children:"present"})," and ",(0,r.jsx)(n.em,{children:"exported"}),"."]}),"\n",(0,r.jsx)(n.p,{children:":inherited"}),"\n",(0,r.jsxs)(n.p,{children:["Means not ",(0,r.jsx)(n.em,{children:"present"})," (thus not ",(0,r.jsx)(n.em,{children:"shadowed"}),") but inherited from some used ",(0,r.jsx)(n.em,{children:"package"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["It is unspecified what happens if any of the implicit interior state of an iteration is returned outside the dynamic extent of the ",(0,r.jsx)(n.strong,{children:"with-package-iterator"})," form such as by returning some ",(0,r.jsx)(n.em,{children:"closure"})," over the invocation ",(0,r.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Any number of invocations of ",(0,r.jsx)(n.strong,{children:"with-package-iterator"})," can be nested, and the body of the innermost one can invoke all of the locally ",(0,r.jsx)(n.em,{children:"established macros"}),", provided all those ",(0,r.jsx)(n.em,{children:"macros"})," have distinct names."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"with-package-iterator"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:' \n\nThe following function should return **t** on any *package*, and signal an error if the usage of **with-package-iterator** does not agree with the corresponding usage of **do-symbols**. \n\n(defun test-package-iterator (package) \n\n(unless (packagep package) \n\n(setq package (find-package package))) \n\n(let ((all-entries \u2019()) \n\n(generated-entries \u2019())) \n\n(do-symbols (x package) \n\n(multiple-value-bind (symbol accessibility) \n\n(find-symbol (symbol-name x) package) \n\n(push (list symbol accessibility) all-entries))) \n\n(with-package-iterator (generator-fn package \n\n:internal :external :inherited) \n\n(loop \n\n(multiple-value-bind (more? symbol accessibility pkg) \n\n(generator-fn) \n\n(unless more? (return)) \n\n(let ((l (multiple-value-list (find-symbol (symbol-name symbol) \n\npackage)))) \n\n(unless (equal l (list symbol accessibility)) \n\n(error "Symbol &#126;S not found as &#126;S in package &#126;A [&#126;S]" \n\nsymbol accessibility (package-name package) l)) \n\n(push l generated-entries))))) \n\n(unless (and (subsetp all-entries generated-entries :test #\u2019equal) \n\n(subsetp generated-entries all-entries :test #\u2019equal)) \n\n(error "Generated entries and Do-Symbols entries don\u2019t correspond")) \n\nt)) \n\nThe following function prints out every *present symbol* (possibly more than once): \n\n(defun print-all-symbols () \n\n(with-package-iterator (next-symbol (list-all-packages) \n\n:internal :external) \n\n(loop \n\n(multiple-value-bind (more? symbol) (next-symbol) \n\n(if more? \n\n(print symbol) \n\n(return)))))) \n\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"with-package-iterator"})," signals an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"program-error"})," if no ",(0,r.jsx)(n.em,{children:"symbol-types"})," are supplied or if a ",(0,r.jsx)(n.em,{children:"symbol-type"})," is not recognized by the implementation is supplied."]}),"\n",(0,r.jsxs)(n.p,{children:["The consequences are undefined if the local function named ",(0,r.jsx)(n.em,{children:"name established"})," by"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"with-package-iterator"})," is called after it has returned ",(0,r.jsx)(n.em,{children:"false"})," as its ",(0,r.jsx)(n.em,{children:"primary value"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 3.6 (Traversal Rules and Side Effects)"})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}const c={},l="with-package-iterator",o={id:"chap-11/bb-c-dictionary/withpackageiterator",title:"with-package-iterator",description:"Expanded Reference: with-package-iterator",source:"@site/docs/chap-11/bb-c-dictionary/withpackageiterator.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/withpackageiterator",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/withpackageiterator",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/withpackageiterator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"use-package",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/usepackage"},next:{title:"12. Numbers",permalink:"/cl-language-reference/docs/category/12-numbers"}},d={},h=[{value:"Expanded Reference: with-package-iterator",id:"expanded-reference-with-package-iterator",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"with-package-iterator",children:"with-package-iterator"}),"\n","\n","\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-with-package-iterator",children:"Expanded Reference: with-package-iterator"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(with-package-iterator )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var r=s(67294);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);