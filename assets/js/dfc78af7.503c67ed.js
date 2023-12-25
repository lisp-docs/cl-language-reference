"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[96807],{42006:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>p,toc:()=>o});var t=r(85893),i=r(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"typep"})," ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"typep",children:(0,t.jsx)("b",{children:"typep"})})," ",(0,t.jsx)(n.em,{children:"object type-specifier"})," &optional ",(0,t.jsx)(n.em,{children:"environment \u2192 generalized-boolean"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"\u2014an ",(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"type-specifier"}),"\u2014any ",(0,t.jsx)(n.em,{children:"type specifier"})," except ",(0,t.jsx)(r,{styled:!0,term:"values",children:(0,t.jsx)("b",{children:"values"})}),", or a ",(0,t.jsx)(n.em,{children:"type specifier"})," list whose first element is either ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("b",{children:"function"})})," or ",(0,t.jsx)(r,{styled:!0,term:"values",children:(0,t.jsx)("b",{children:"values"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"environment",children:(0,t.jsx)("i",{children:"environment"})}),"\u2014an ",(0,t.jsx)(n.em,{children:"environment object"}),". The default is ",(0,t.jsx)(r,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})}),", denoting the ",(0,t.jsx)(n.em,{children:"null lexical environment"})," and the and current ",(0,t.jsx)(n.em,{children:"global environment"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,t.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns ",(0,t.jsx)(r,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})})," if ",(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," is of the ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," specified by ",(0,t.jsx)(n.em,{children:"type-specifier"}),"; otherwise, returns ",(0,t.jsx)(r,{styled:!0,term:"false",children:(0,t.jsx)("i",{children:"false"})}),". A ",(0,t.jsx)(n.em,{children:"type-specifier"})," of the form (satisfies fn) is handled by applying the function fn to ",(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["(typep ",(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," \u2019(array ",(0,t.jsx)(n.em,{children:"type-specifier"}),")), where ",(0,t.jsx)(n.em,{children:"type-specifier"})," is not *, returns ",(0,t.jsx)(r,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})})," if and only if ",(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," is an ",(0,t.jsx)(r,{styled:!0,term:"array",children:(0,t.jsx)("i",{children:"array"})})," that could be the result of supplying ",(0,t.jsx)(n.em,{children:"type-specifier"})," as the ",":element-type"," argument to ",(0,t.jsx)(r,{styled:!0,term:"make-array",children:(0,t.jsx)("b",{children:"make-array"})}),". (array *) refers to all ",(0,t.jsx)(r,{styled:!0,term:"array",children:(0,t.jsx)("i",{children:"arrays"})})," regardless of element type, while (array ",(0,t.jsx)(n.em,{children:"type-specifier"}),") refers only to those ",(0,t.jsx)(r,{styled:!0,term:"array",children:(0,t.jsx)("i",{children:"arrays"})})," that can result from giving ",(0,t.jsx)(n.em,{children:"type-specifier"})," as the ",":element-type"," argument to ",(0,t.jsx)(r,{styled:!0,term:"make-array",children:(0,t.jsx)("b",{children:"make-array"})}),". A similar interpretation applies to (simple-array ",(0,t.jsx)(n.em,{children:"type-specifier"}),") and (vector ",(0,t.jsx)(n.em,{children:"type-specifier"}),"). See Section 15.1.2.1 (Array Upgrading)."]}),"\n",(0,t.jsxs)(n.p,{children:["(typep ",(0,t.jsx)(r,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," \u2019(complex ",(0,t.jsx)(n.em,{children:"type-specifier"}),")) returns ",(0,t.jsx)(r,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})})," for all ",(0,t.jsx)(r,{styled:!0,term:"complex",children:(0,t.jsx)("i",{children:"complex"})})," numbers that can result from giving ",(0,t.jsx)(r,{styled:!0,term:"number",children:(0,t.jsx)("i",{children:"numbers"})})," of type ",(0,t.jsx)(n.em,{children:"type-specifier"})," to the ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," ",(0,t.jsx)(r,{styled:!0,term:"complex",children:(0,t.jsx)("b",{children:"complex"})}),", plus all other ",(0,t.jsx)(r,{styled:!0,term:"complex",children:(0,t.jsx)("i",{children:"complex"})})," numbers of the same specialized representation. Both the real and the imaginary parts of any such ",(0,t.jsx)(r,{styled:!0,term:"complex",children:(0,t.jsx)("i",{children:"complex"})})," number must satisfy:"]}),"\n",(0,t.jsx)(r,{styled:!0,term:"typep",children:(0,t.jsx)("b",{children:"typep"})}),"\n",(0,t.jsx)(n.p,{children:"(typep realpart \u2019type-specifier)"}),"\n",(0,t.jsx)(n.p,{children:"(typep imagpart \u2019type-specifier)"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," ",(0,t.jsx)(r,{styled:!0,term:"upgraded-complex-part-type",children:(0,t.jsx)("b",{children:"upgraded-complex-part-type"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(typep 12 \u2019integer) \u2192 true \n(typep (1+ most-positive-fixnum) \u2019fixnum) \u2192 false \n(typep nil t) \u2192 true \n(typep nil nil) \u2192 false \n(typep 1 \u2019(mod 2)) \u2192 true \n(typep #c(1 1) \u2019(complex (eql 1))) \u2192 true \n;; To understand this next example, you might need to refer to \n;; Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). (typep #c(0 0) \u2019(complex (eql 0))) \u2192 false \nLet A<i><sub>x</sub></i> and A<i><sub>y</sub></i> be two <i>type specifiers</i> that denote different <i>types</i>, but for which \n(upgraded-array-element-type \u2019A<i><sub>x</sub></i>) \nand \n(upgraded-array-element-type \u2019A<i><sub>y</sub></i>) \ndenote the same *type*. Notice that \n(typep (make-array 0 :element-type \u2019A<i><sub>x</sub></i>) \u2019(array A<i><sub>x</sub></i>)) <i>\u2192 true</i> \n(typep (make-array 0 :element-type \u2019A<i><sub>y</sub></i>) \u2019(array A<i><sub>y</sub></i>)) <i>\u2192 true</i> \n(typep (make-array 0 :element-type \u2019A<i><sub>x</sub></i>) \u2019(array A<i><sub>y</sub></i>)) <i>\u2192 true</i> \n(typep (make-array 0 :element-type \u2019A<i><sub>y</sub></i>) \u2019(array A<i><sub>x</sub></i>)) <i>\u2192 true</i> \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["An error of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"error",children:(0,t.jsx)("b",{children:"error"})})," is signaled if ",(0,t.jsx)(n.em,{children:"type-specifier"})," is values, or a ",(0,t.jsx)(n.em,{children:"type specifier"})," list whose first element is either ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("b",{children:"function"})})," or ",(0,t.jsx)(r,{styled:!0,term:"values",children:(0,t.jsx)("b",{children:"values"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The consequences are undefined if the ",(0,t.jsx)(n.em,{children:"type-specifier"})," is not a ",(0,t.jsx)(n.em,{children:"type specifier"})," ."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"type-of",children:(0,t.jsx)("b",{children:"type-of"})}),", ",(0,t.jsx)(r,{styled:!0,term:"upgraded-array-element-type",children:(0,t.jsx)("b",{children:"upgraded-array-element-type"})}),", ",(0,t.jsx)(r,{styled:!0,term:"upgraded-complex-part-type",children:(0,t.jsx)("b",{children:"upgraded-complex-part-type"})}),", Section 4.2.3 (Type Specifiers)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r,{styled:!0,term:"implementation",children:(0,t.jsx)("i",{children:"Implementations"})})," are encouraged to recognize and optimize the case of (typep ",(0,t.jsx)(n.em,{children:"x"})," (the class ",(0,t.jsx)(n.em,{children:"y"}),")), since it does not involve any need for expansion of ",(0,t.jsx)(r,{styled:!0,term:"deftype",children:(0,t.jsx)("b",{children:"deftype"})})," information at runtime."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const c={title:"typep"},d="typep",p={id:"chap-4/e-e-dictionary/typep_function",title:"typep",description:"Expanded Reference: typep",source:"@site/docs/chap-4/e-e-dictionary/typep_function.md",sourceDirName:"chap-4/e-e-dictionary",slug:"/chap-4/e-e-dictionary/typep_function",permalink:"/cl-language-reference/chap-4/e-e-dictionary/typep_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-4/e-e-dictionary/typep_function.md",tags:[],version:"current",frontMatter:{title:"typep"},sidebar:"tutorialSidebar",previous:{title:"type-of",permalink:"/cl-language-reference/chap-4/e-e-dictionary/type-of_function"},next:{title:"5. Data and Control Flow",permalink:"/cl-language-reference/category/5-data-and-control-flow"}},a={},o=[{value:"Expanded Reference: typep",id:"expanded-reference-typep",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"typep",children:"typep"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-typep",children:"Expanded Reference: typep"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(typep )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var t=r(67294);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);