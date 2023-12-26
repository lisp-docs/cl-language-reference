"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[83217],{57117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>h,metadata:()=>o,toc:()=>m});var r=t(85893),i=t(11151);function a(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{DictionaryLink:t,GlossaryTerm:a}=n;return t||l("DictionaryLink",!0),a||l("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"with-hash-table-iterator"})," ",(0,r.jsx)(a,{term:"macro",children:(0,r.jsx)("i",{children:"Macro"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{term:"with-hash-table-iterator",children:(0,r.jsx)("b",{children:"with-hash-table-iterator"})})," (",(0,r.jsx)(n.em,{children:"name hash-table"}),") ",(0,r.jsx)(n.em,{children:"{declaration}"}),"* ",(0,r.jsx)(a,{term:"form",children:(0,r.jsx)("i",{children:"{form}"})}),"* \u2192 {result}*"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(a,{term:"name",children:(0,r.jsx)("i",{children:"name"})}),"\u2014a name suitable for the first argument to ",(0,r.jsx)(t,{term:"macrolet",children:(0,r.jsx)("b",{children:"macrolet"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"hash-table"}),"\u2014a ",(0,r.jsx)(a,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),", evaluated once, that should produce a ",(0,r.jsx)(a,{styled:!0,term:"hash table",children:(0,r.jsx)("i",{children:"hash table"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(a,{term:"declaration",children:(0,r.jsx)("i",{children:"declaration"})}),"\u2014a ",(0,r.jsx)(t,{term:"declare",children:(0,r.jsx)("b",{children:"declare"})})," ",(0,r.jsx)(a,{term:"expression",children:(0,r.jsx)("i",{children:"expression"})}),"; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(a,{term:"form",children:(0,r.jsx)("i",{children:"forms"})}),"\u2014an ",(0,r.jsx)(a,{styled:!0,term:"implicit progn",children:(0,r.jsx)("i",{children:"implicit progn"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"results"}),"\u2014the ",(0,r.jsx)(a,{term:"value",children:(0,r.jsx)("i",{children:"values"})})," returned by ",(0,r.jsx)(a,{term:"form",children:(0,r.jsx)("i",{children:"forms"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Within the lexical scope of the body, ",(0,r.jsx)(a,{term:"name",children:(0,r.jsx)("i",{children:"name"})})," is defined via ",(0,r.jsx)(t,{term:"macrolet",children:(0,r.jsx)("b",{children:"macrolet"})})," such that successive invocations of (",(0,r.jsx)(a,{term:"name",children:(0,r.jsx)("i",{children:"name"})}),") return the items, one by one, from the ",(0,r.jsx)(a,{styled:!0,term:"hash table",children:(0,r.jsx)("i",{children:"hash table"})})," that is obtained by evaluating ",(0,r.jsx)(n.em,{children:"hash-table"})," only once."]}),"\n",(0,r.jsxs)(n.p,{children:["An invocation (",(0,r.jsx)(a,{term:"name",children:(0,r.jsx)("i",{children:"name"})}),") returns three values as follows:"]}),"\n",(0,r.jsxs)(n.p,{children:["1. A ",(0,r.jsx)(a,{styled:!0,term:"generalized boolean",children:(0,r.jsx)("i",{children:"generalized boolean"})})," that is ",(0,r.jsx)(a,{term:"true",children:(0,r.jsx)("i",{children:"true"})})," if an entry is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["2. The key from the ",(0,r.jsx)(n.em,{children:"hash-table"})," entry."]}),"\n",(0,r.jsxs)(n.p,{children:["3. The value from the ",(0,r.jsx)(n.em,{children:"hash-table"})," entry."]}),"\n",(0,r.jsxs)(n.p,{children:["After all entries have been returned by successive invocations of (",(0,r.jsx)(a,{term:"name",children:(0,r.jsx)("i",{children:"name"})}),"), then only one value is returned, namely ",(0,r.jsx)(t,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["It is unspecified what happens if any of the implicit interior state of an iteration is returned outside the dynamic extent of the ",(0,r.jsx)(t,{term:"with-hash-table-iterator",children:(0,r.jsx)("b",{children:"with-hash-table-iterator"})})," ",(0,r.jsx)(a,{term:"form",children:(0,r.jsx)("i",{children:"form"})})," such as by returning some ",(0,r.jsx)(a,{term:"closure",children:(0,r.jsx)("i",{children:"closure"})})," over the invocation ",(0,r.jsx)(a,{term:"form",children:(0,r.jsx)("i",{children:"form"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Any number of invocations of ",(0,r.jsx)(t,{term:"with-hash-table-iterator",children:(0,r.jsx)("b",{children:"with-hash-table-iterator"})})," can be nested, and the body of the innermost one can invoke all of the locally ",(0,r.jsx)(n.em,{children:"established macros"}),", provided all of those ",(0,r.jsx)(a,{term:"macro",children:(0,r.jsx)("i",{children:"macros"})})," have ",(0,r.jsx)(a,{term:"distinct",children:(0,r.jsx)("i",{children:"distinct"})})," names."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'The following function should return **t** on any *hash table*, and signal an error if the usage of **with-hash-table-iterator** does not agree with the corresponding usage of **maphash**. \nHash \n\n(defun test-hash-table-iterator (hash-table) \n  (let ((all-entries \u2019()) \n\t(generated-entries \u2019()) \n\t(unique (list nil))) \n    (maphash #\u2019(lambda (key value) (push (list key value) all-entries)) \n\t       hash-table) \n    (with-hash-table-iterator (generator-fn hash-table) \n      (loop \n       (multiple-value-bind (more? key value) (generator-fn) \n\t (unless more? (return)) \n\t (unless (eql value (gethash key hash-table unique)) \n\t   (error "Key ~S not found for value ~S" key value)) \n\t (push (list key value) generated-entries)))) \n    (unless (= (length all-entries) \n\t       (length generated-entries) \n\t       (length (union all-entries generated-entries \n\t\t\t      :key #\u2019car :test (hash-table-test hash-table)))) \n      (error "Generated entries and Maphash entries don\u2019t correspond")) \n    t)) \nThe following could be an acceptable definition of **maphash**, implemented by **with-hash-table-iterator**. \n(defun maphash (function hash-table) \n  (with-hash-table-iterator (next-entry hash-table) \n    (loop (multiple-value-bind (more key value) (next-entry) \n\t    (unless more (return nil)) \n\t    (funcall function key value))))) \n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["The consequences are undefined if the local function named ",(0,r.jsx)(n.em,{children:"name established"})," by ",(0,r.jsx)(t,{term:"with-hash-table-iterator",children:(0,r.jsx)("b",{children:"with-hash-table-iterator"})})," is called after it has returned ",(0,r.jsx)(a,{term:"false",children:(0,r.jsx)("i",{children:"false"})})," as its ",(0,r.jsx)(a,{styled:!0,term:"primary value",children:(0,r.jsx)("i",{children:"primary value"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:"Section 3.6 (Traversal Rules and Side Effects)"})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const h={title:"with-hash-table-iterator"},c="with-hash-table-iterator",o={id:"chap-18/bi-c-dictionary/with-hash-table-iterator_macro",title:"with-hash-table-iterator",description:"Expanded Reference: with-hash-table-iterator",source:"@site/docs/chap-18/bi-c-dictionary/with-hash-table-iterator_macro.md",sourceDirName:"chap-18/bi-c-dictionary",slug:"/chap-18/bi-c-dictionary/with-hash-table-iterator_macro",permalink:"/cl-language-reference/chap-18/bi-c-dictionary/with-hash-table-iterator_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-18/bi-c-dictionary/with-hash-table-iterator_macro.md",tags:[],version:"current",frontMatter:{title:"with-hash-table-iterator"},sidebar:"tutorialSidebar",previous:{title:"sxhash",permalink:"/cl-language-reference/chap-18/bi-c-dictionary/sxhash_function"},next:{title:"19. Filenames",permalink:"/cl-language-reference/category/19-filenames"}},d={},m=[{value:"Expanded Reference: with-hash-table-iterator",id:"expanded-reference-with-hash-table-iterator",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"with-hash-table-iterator",children:"with-hash-table-iterator"}),"\n","\n","\n",(0,r.jsx)(s,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-with-hash-table-iterator",children:"Expanded Reference: with-hash-table-iterator"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(with-hash-table-iterator )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(67294);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);