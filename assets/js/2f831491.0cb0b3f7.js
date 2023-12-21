"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[70680],{84518:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>h,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var i=s(85893),t=s(11151);function r(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"with-slots"})," ",(0,i.jsx)(e.em,{children:"Macro"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"with-slots"})," (",(0,i.jsx)(e.em,{children:"{slot-entry}"}),"*) ",(0,i.jsx)(e.em,{children:"instance-form {declaration}"}),"* ",(0,i.jsx)(e.em,{children:"{form}"}),"*"]}),"\n",(0,i.jsx)(e.p,{children:"\u2192 {result}*"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"slot-entry::"}),"=",(0,i.jsx)(e.em,{children:"slot-name |"})," (",(0,i.jsx)(e.em,{children:"variable-name slot-name"}),")"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"slot-name"}),"\u2014a ",(0,i.jsx)(e.em,{children:"slot name"}),"; not evaluated."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"variable-name"}),"\u2014a ",(0,i.jsx)(e.em,{children:"variable name"}),"; not evaluated."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"instance-form"}),"\u2014a ",(0,i.jsx)(e.em,{children:"form"}),"; evaluted to produce ",(0,i.jsx)(e.em,{children:"instance"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"instance"}),"\u2014an ",(0,i.jsx)(e.em,{children:"object"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"declaration"}),"\u2014a ",(0,i.jsx)(e.strong,{children:"declare"})," ",(0,i.jsx)(e.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"forms"}),"\u2014an ",(0,i.jsx)(e.em,{children:"implicit progn"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"results"}),"\u2014the ",(0,i.jsx)(e.em,{children:"values"})," returned by the ",(0,i.jsx)(e.em,{children:"forms"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(e.p,{children:["The macro ",(0,i.jsx)(e.strong,{children:"with-slots"})," ",(0,i.jsx)(e.em,{children:"establishes"})," a ",(0,i.jsx)(e.em,{children:"lexical environment"})," for referring to the ",(0,i.jsx)(e.em,{children:"slots"})," in the ",(0,i.jsx)(e.em,{children:"instance"})," named by the given ",(0,i.jsx)(e.em,{children:"slot-names"})," as though they were ",(0,i.jsx)(e.em,{children:"variables"}),". Within such a context the value of the ",(0,i.jsx)(e.em,{children:"slot"})," can be specified by using its slot name, as if it were a lexically bound variable. Both ",(0,i.jsx)(e.strong,{children:"setf"})," and ",(0,i.jsx)(e.strong,{children:"setq"})," can be used to set the value of the ",(0,i.jsx)(e.em,{children:"slot"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["The macro ",(0,i.jsx)(e.strong,{children:"with-slots"})," translates an appearance of the slot name as a ",(0,i.jsx)(e.em,{children:"variable"})," into a call to ",(0,i.jsx)(e.strong,{children:"slot-value"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:'\n(defclass thing () \n\n  \n  \n  **with-slots** \n  ((x :initarg :x :accessor thing-x) \n   (y :initarg :y :accessor thing-y))) \n\u2192 #<STANDARD-CLASS THING 250020173> \n(defmethod (setf thing-x) :before (new-x (thing thing)) \n\t   (format t "~&Changing X from ~D to ~D in ~S.~%" \n\t\t   (thing-x thing) new-x thing)) \n(setq thing (make-instance \u2019thing :x 0 :y 1)) \u2192 #<THING 62310540> \n(with-slots (x y) thing (incf x) (incf y)) \u2192 2 \n(values (thing-x thing) (thing-y thing)) \u2192 1, 2 \n(setq thing1 (make-instance \u2019thing :x 1 :y 2)) \u2192 #<THING 43135676> \n(setq thing2 (make-instance \u2019thing :x 7 :y 8)) \u2192 #<THING 43147374> \n(with-slots ((x1 x) (y1 y)) \n    thing1 \n  (with-slots ((x2 x) (y2 y)) \n      thing2 \n    (list (list x1 (thing-x thing1) y1 (thing-y thing1) \n\t\tx2 (thing-x thing2) y2 (thing-y thing2)) \n\t  (setq x1 (+ y1 x2)) \n\t  (list x1 (thing-x thing1) y1 (thing-y thing1) \n\t\tx2 (thing-x thing2) y2 (thing-y thing2)) \n\t  (setf (thing-x thing2) (list x1)) \n\t  (list x1 (thing-x thing1) y1 (thing-y thing1) \n\t\tx2 (thing-x thing2) y2 (thing-y thing2))))) \n\u25b7 Changing X from 7 to (9) in #<THING 43147374>. \n\u2192 ((1 1 2 2 7 7 8 8) \n     9 \n     (9 9 2 2 7 7 8 8) \n     (9) \n     (9 9 2 2 (9) (9) 8 8)) \n\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Affected By:"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"defclass"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(e.p,{children:["The consequences are undefined if any ",(0,i.jsx)(e.em,{children:"slot-name"})," is not the name of a ",(0,i.jsx)(e.em,{children:"slot"})," in the ",(0,i.jsx)(e.em,{children:"instance"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"with-accessors"}),", ",(0,i.jsx)(e.strong,{children:"slot-value"}),", ",(0,i.jsx)(e.strong,{children:"symbol-macrolet"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.strong,{children:"with-slots"})," expression of the form:"]}),"\n",(0,i.jsxs)(e.p,{children:["(with-slots (",(0,i.jsx)("i",{children:"slot-entry"}),(0,i.jsx)("sub",{children:"1"}),(0,i.jsxs)("i",{children:[". . . slot-entry",(0,i.jsx)("sub",{children:"n"})]}),") ",(0,i.jsx)("i",{children:"instance-form form"}),(0,i.jsx)("sub",{children:"1"}),(0,i.jsxs)("i",{children:[". . . form",(0,i.jsx)("sub",{children:"k"})]}),")"]}),"\n",(0,i.jsx)(e.p,{children:"expands into the equivalent of"}),"\n",(0,i.jsxs)(e.p,{children:["(let ((",(0,i.jsx)(e.em,{children:"in instance-form"}),"))"]}),"\n",(0,i.jsxs)(e.p,{children:["(symbol-macrolet (",(0,i.jsx)("i",{children:"Q"}),(0,i.jsx)("sub",{children:"1"}),(0,i.jsxs)("i",{children:[". . . Q",(0,i.jsx)("sub",{children:"n"})]}),") ",(0,i.jsx)("i",{children:"form"}),(0,i.jsx)("sub",{children:"1"}),(0,i.jsxs)("i",{children:[". . . form",(0,i.jsx)("sub",{children:"k"})]}),"))"]}),"\n",(0,i.jsxs)(e.p,{children:["where ",(0,i.jsxs)("i",{children:["Q",(0,i.jsx)("sub",{children:"i"})]}),"is"]}),"\n",(0,i.jsxs)(e.p,{children:["(",(0,i.jsxs)("i",{children:["slot-entry",(0,i.jsx)("sub",{children:"i"})]}),"() (slot-value ",(0,i.jsx)("i",{children:"in"})," \u2019",(0,i.jsxs)("i",{children:["slot-entry",(0,i.jsx)("sub",{children:"i"})]}),"))"]}),"\n",(0,i.jsxs)(e.p,{children:["if ",(0,i.jsxs)("i",{children:["slot-entry",(0,i.jsx)("sub",{children:"i"})]}),"is a ",(0,i.jsx)("i",{children:"symbol"})," and is"]}),"\n",(0,i.jsxs)(e.p,{children:["(",(0,i.jsxs)("i",{children:["variable-name",(0,i.jsx)("sub",{children:"i"})]})," () (slot-value ",(0,i.jsx)("i",{children:"in"})," \u2019",(0,i.jsxs)("i",{children:["slot-name",(0,i.jsx)("sub",{children:"i"})]}),"))"]}),"\n",(0,i.jsxs)(e.p,{children:["if ",(0,i.jsxs)("i",{children:["slot-entry",(0,i.jsx)("sub",{children:"i"})]}),"is of the form"]}),"\n",(0,i.jsxs)(e.p,{children:["(",(0,i.jsxs)("i",{children:["variable-name",(0,i.jsx)("sub",{children:"i"})," slot-name",(0,i.jsx)("sub",{children:"i"})]}),")"]})]})}function l(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}const c={title:"with-slots"},h="with-slots",o={id:"chap-7/h-h-dictionary/with-slots_macro",title:"with-slots",description:"Expanded Reference: with-slots",source:"@site/docs/chap-7/h-h-dictionary/with-slots_macro.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/with-slots_macro",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/with-slots_macro",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/with-slots_macro.md",tags:[],version:"current",frontMatter:{title:"with-slots"},sidebar:"tutorialSidebar",previous:{title:"with-accessors",permalink:"/cl-language-reference/docs/chap-7/h-h-dictionary/with-accessors_macro"},next:{title:"8. Structures",permalink:"/cl-language-reference/docs/category/8-structures"}},d={},a=[{value:"Expanded Reference: with-slots",id:"expanded-reference-with-slots",level:2}];function x(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"with-slots",children:"with-slots"}),"\n","\n","\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(e.h2,{id:"expanded-reference-with-slots",children:"Expanded Reference: with-slots"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:"(with-slots )\n"})})]})}function j(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>l});var i=s(67294);const t={},r=i.createContext(t);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);