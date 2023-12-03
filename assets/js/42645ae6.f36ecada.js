"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[26365],{93325:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>j,contentTitle:()=>x,default:()=>v,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var s=n(85893),t=n(11151);function r(e){return(0,s.jsx)(s.Fragment,{})}function o(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(r,{...e})}):r()}function a(e){const i={em:"em",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["When an <i>object O</i> is being considered iteratively against each <i>element E<sub>i</sub></i> of a <i>sequence S</i> by an <i>operator F</i> listed in Figure 17\u20132, it is sometimes useful to control the way in which the presence of <i>O</i> is tested in <i>S</i> is tested by <i>F</i>. This control is offered on the basis of a <i>function</i> designated with either a ",":test"," or ",":test-not"," <i>argument</i>."]}),"\n",(0,s.jsx)(i.table,{children:(0,s.jsx)(i.thead,{children:(0,s.jsx)(i.tr,{children:(0,s.jsxs)(i.th,{style:{textAlign:"left"},children:["<p>",(0,s.jsx)(i.strong,{children:"adjoin nset-exclusive-or search"})," </p><p>",(0,s.jsx)(i.strong,{children:"assoc nsublis set-difference count nsubst set-exclusive-or delete nsubstitute sublis"})," </p><p>",(0,s.jsx)(i.strong,{children:"find nunion subsetp"})," </p><p>",(0,s.jsx)(i.strong,{children:"intersection position subst"})," </p><p>",(0,s.jsx)(i.strong,{children:"member pushnew substitute"})," </p><p>",(0,s.jsx)(i.strong,{children:"mismatch rassoc tree-equal"})," </p><p>",(0,s.jsx)(i.strong,{children:"nintersection remove union"})," </p><p>",(0,s.jsx)(i.strong,{children:"nset-difference remove-duplicates"}),"</p>"]})})})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Figure 17\u20132. Operators that have Two-Argument Tests to be Satisfied"})}),"\n",(0,s.jsxs)(i.p,{children:["The object <i>O</i> might not be compared directly to <i>E<sub>i</sub></i>. If a ",":key"," <i>argument</i> is provided, it is a <i>designator</i> for a <i>function</i> of one <i>argument</i> to be called with each <i>E<sub>i</sub></i> as an <i>argument</i>, and <i>yielding</i> an <i>object Z<sub>i</sub></i> to be used for comparison. (If there is no ",":key"," <i>argument</i>, <i>Z<sub>i</sub></i>is <i>E<sub>i</sub></i>.)"]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.em,{children:"function"})," designated by the ",":key"," ",(0,s.jsx)(i.em,{children:"argument"})," is never called on ",(0,s.jsx)(i.em,{children:"O"})," itself. However, if the function operates on multiple sequences (",(0,s.jsx)(i.em,{children:"e.g."}),", as happens in ",(0,s.jsx)(i.strong,{children:"set-difference"}),"), ",(0,s.jsx)(i.em,{children:"O"})," will be the result of calling the ",":key"," function on an ",(0,s.jsx)(i.em,{children:"element"})," of the other sequence."]}),"\n",(0,s.jsxs)(i.p,{children:["A ",":test"," <i>argument</i>, if supplied to <i>F</i>, is a <i>designator</i> for a <i>function</i> of two <i>arguments</i>, <i>O</i> and <i>Z<sub>i</sub></i>. An <i>E<sub>i</sub></i>is said (or, sometimes, an <i>O</i> and an <i>E<sub>i</sub></i> are said) to <i>satisfy the test</i> if this ",":test"," <i>function</i> returns a <i>generalized boolean</i> representing <i>true</i>."]}),"\n",(0,s.jsxs)(i.p,{children:["A ",":test-not"," <i>argument</i>, if supplied to <i>F</i>, is <i>designator</i> for a <i>function</i> of two <i>arguments</i>, <i>O</i> and <i>Z<sub>i</sub></i>. An <i>E<sub>i</sub></i>is said (or, sometimes, an <i>O</i> and an <i>E<sub>i</sub></i> are said) to <i>satisfy the test</i> if this ",":test-not"," <i>function</i> returns a <i>generalized boolean</i> representing <i>false</i>."]}),"\n",(0,s.jsxs)(i.p,{children:["If neither a ",":test"," nor a ",":test-not"," ",(0,s.jsx)(i.em,{children:"argument"})," is supplied, it is as if a ",":test"," argument of #\u2019eql was supplied."]}),"\n",(0,s.jsxs)(i.p,{children:["The consequences are unspecified if both a ",":test"," and a ",":test-not"," ",(0,s.jsx)(i.em,{children:"argument"})," are supplied in the same ",(0,s.jsx)(i.em,{children:"call"})," to ",(0,s.jsx)(i.em,{children:"F"}),"."]})]})}function c(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function l(e){const i={em:"em",p:"p",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:['(remove "FOO" \u2019(foo bar "FOO" "BAR" "foo" "bar") ',":test"," #\u2019equal)"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"}),' (foo bar "BAR" "foo" "bar")']}),"\n",(0,s.jsxs)(i.p,{children:['(remove "FOO" \u2019(foo bar "FOO" "BAR" "foo" "bar") ',":test"," #\u2019equalp)"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"}),' (foo bar "BAR" "bar")']}),"\n",(0,s.jsxs)(i.p,{children:['(remove "FOO" \u2019(foo bar "FOO" "BAR" "foo" "bar") ',":test"," #\u2019string-equal)"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"}),' (bar "BAR" "bar")']}),"\n",(0,s.jsxs)(i.p,{children:['(remove "FOO" \u2019(foo bar "FOO" "BAR" "foo" "bar") ',":test"," #\u2019string=)"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"}),' (BAR "BAR" "foo" "bar")']}),"\n",(0,s.jsxs)(i.p,{children:["(remove 1 \u2019(1 1.0 #C(1.0 0.0) 2 2.0 #C(2.0 0.0)) ",":test-not"," #\u2019eql)"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"})," (1)"]}),"\n",(0,s.jsxs)(i.p,{children:["(remove 1 \u2019(1 1.0 #C(1.0 0.0) 2 2.0 #C(2.0 0.0)) ",":test-not"," #\u2019=)"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"})," (1 1.0 #C(1.0 0.0))"]}),"\n",(0,s.jsxs)(i.p,{children:["(remove 1 \u2019(1 1.0 #C(1.0 0.0) 2 2.0 #C(2.0 0.0)) ",":test"," (complement #\u2019=))"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"})," (1 1.0 #C(1.0 0.0))"]}),"\n",(0,s.jsxs)(i.p,{children:["(count 1 \u2019((one 1) (uno 1) (two 2) (dos 2)) ",":key"," #\u2019cadr) ",(0,s.jsx)(i.em,{children:"\u2192"})," 2"]}),"\n",(0,s.jsxs)(i.p,{children:["(count 2.0 \u2019(1 2 3) ",":test"," #\u2019eql ",":key"," #\u2019float) ",(0,s.jsx)(i.em,{children:"\u2192"})," 1"]}),"\n",(0,s.jsxs)(i.p,{children:['(count "FOO" (list (make-pathname ',":name",' "FOO" ',":type",' "X")']}),"\n",(0,s.jsxs)(i.p,{children:["(make-pathname ",":name",' "FOO" ',":type",' "Y"))']}),"\n",(0,s.jsxs)(i.p,{children:[":key"," #\u2019pathname-name"]}),"\n",(0,s.jsxs)(i.p,{children:[":test"," #\u2019equal)"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"})," 2"]})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}function d(e){const i={em:"em",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["When using one of the ",(0,s.jsx)(i.em,{children:"functions"})," in Figure 17\u20133, the elements ",(0,s.jsx)(i.em,{children:"E"})," of a ",(0,s.jsx)(i.em,{children:"sequence S"})," are filtered not on the basis of the presence or absence of an object ",(0,s.jsx)(i.em,{children:"O"})," under a two ",(0,s.jsx)(i.em,{children:"argument predicate"}),", as with the ",(0,s.jsx)(i.em,{children:"functions"})," described in Section 17.2.1 (Satisfying a Two-Argument Test), but rather on the basis of a one ",(0,s.jsx)(i.em,{children:"argument predicate"}),"."]}),"\n",(0,s.jsx)(i.table,{children:(0,s.jsx)(i.thead,{children:(0,s.jsx)(i.tr,{children:(0,s.jsxs)(i.th,{style:{textAlign:"left"},children:["<p>",(0,s.jsx)(i.strong,{children:"assoc-if member-if rassoc-if"})," </p><p>",(0,s.jsx)(i.strong,{children:"assoc-if-not member-if-not rassoc-if-not"})," </p><p>",(0,s.jsx)(i.strong,{children:"count-if nsubst-if remove-if"})," </p><p>",(0,s.jsx)(i.strong,{children:"count-if-not nsubst-if-not remove-if-not"})," </p><p>",(0,s.jsx)(i.strong,{children:"delete-if nsubstitute-if subst-if"})," </p><p>",(0,s.jsx)(i.strong,{children:"delete-if-not nsubstitute-if-not subst-if-not"})," </p><p>",(0,s.jsx)(i.strong,{children:"find-if position-if substitute-if"})," </p><p>",(0,s.jsx)(i.strong,{children:"find-if-not position-if-not substitute-if-not"}),"</p>"]})})})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Figure 17\u20133. Operators that have One-Argument Tests to be Satisfied"})}),"\n",(0,s.jsxs)(i.p,{children:["The element <i>E<sub>i</sub></i> might not be considered directly. If a ",":key"," <i>argument</i> is provided, it is a <i>designator</i> for a <i>function</i> of one <i>argument</i> to be called with each <i>E<sub>i</sub></i> as an <i>argument</i>, and <i>yielding</i> an <i>object Z<sub>i</sub></i> to be used for comparison. (If there is no ",":key"," <i>argument</i>, <i>Z<sub>i</sub></i>is <i>E<sub>i</sub></i>.)"]}),"\n",(0,s.jsxs)(i.p,{children:["<i>Functions</i> defined in this specification and having a name that ends in \u201c-if\u201d accept a first <i>argument</i> that is a <i>designator</i> for a <i>function</i> of one <i>argument</i>, <i>Z<sub>i</sub></i>. An <i>E<sub>i</sub></i>is said to <i>satisfy the test</i> if this ",":test"," <i>function</i> returns a <i>generalized boolean</i> representing <i>true</i>."]}),"\n",(0,s.jsxs)(i.p,{children:["<i>Functions</i> defined in this specification and having a name that ends in \u201c-if-not\u201d accept a first <i>argument</i> that is a <i>designator</i> for a <i>function</i> of one <i>argument</i>, <i>Z<sub>i</sub></i>. An <i>E<sub>i</sub></i>is said to <i>satisfy the test</i> if this ",":test"," <i>function</i> returns a <i>generalized boolean</i> representing <i>false</i>."]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function f(e){const i={em:"em",p:"p",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["(count-if #\u2019zerop \u2019(1 #C(0.0 0.0) 0 0.0d0 0.0s0 3)) ",(0,s.jsx)(i.em,{children:"\u2192"})," 4"]}),"\n",(0,s.jsx)(i.p,{children:"(remove-if-not #\u2019symbolp \u2019(0 1 2 3 4 5 6 7 8 9 A B C D E F))"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"})," (A B C D E F)"]}),"\n",(0,s.jsx)(i.p,{children:"(remove-if (complement #\u2019symbolp) \u2019(0 1 2 3 4 5 6 7 8 9 A B C D E F))"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"})," (A B C D E F)"]}),"\n",(0,s.jsxs)(i.p,{children:['(count-if #\u2019zerop \u2019("foo" "" "bar" "" "" "baz" "quux") ',":key"," #\u2019length)"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"\u2192"})," 3"]})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}const m={title:"17.2 Rules about Test Functions"},x="17.2 Rules about Test Functions",b={id:"chap-17/bh-c-rules-about-test-functions",title:"17.2 Rules about Test Functions",description:"17.2.1 Satisfying a Two",source:"@site/docs/chap-17/bh-c-rules-about-test-functions.md",sourceDirName:"chap-17",slug:"/chap-17/bh-c-rules-about-test-functions",permalink:"/cl-language-reference/docs/chap-17/bh-c-rules-about-test-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-17/bh-c-rules-about-test-functions.md",tags:[],version:"current",frontMatter:{title:"17.2 Rules about Test Functions"},sidebar:"tutorialSidebar",previous:{title:"17.1 Sequence Concepts",permalink:"/cl-language-reference/docs/chap-17/bh-b-sequence-concepts"},next:{title:"17.3 Sequences Dictionary",permalink:"/cl-language-reference/docs/category/173-sequences-dictionary"}},j={},g=[{value:"17.2.1 Satisfying a Two",id:"1721-satisfying-a-two",level:2},{value:"17.2.1.1 Examples of Satisfying a Two",id:"17211-examples-of-satisfying-a-two",level:3},{value:"17.2.2 Satisfying a One",id:"1722-satisfying-a-one",level:2},{value:"17.2.2.1 Examples of Satisfying a One",id:"17221-examples-of-satisfying-a-one",level:3}];function y(e){const i={h1:"h1",h2:"h2",h3:"h3",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"172-rules-about-test-functions",children:"17.2 Rules about Test Functions"}),"\n","\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(i.h2,{id:"1721-satisfying-a-two",children:"17.2.1 Satisfying a Two"}),"\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(i.h3,{id:"17211-examples-of-satisfying-a-two",children:"17.2.1.1 Examples of Satisfying a Two"}),"\n","\n",(0,s.jsx)(u,{}),"\n",(0,s.jsx)(i.h2,{id:"1722-satisfying-a-one",children:"17.2.2 Satisfying a One"}),"\n","\n",(0,s.jsx)(h,{}),"\n",(0,s.jsx)(i.h3,{id:"17221-examples-of-satisfying-a-one",children:"17.2.2.1 Examples of Satisfying a One"}),"\n","\n","\n",(0,s.jsx)(p,{})]})}function v(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>o});var s=n(67294);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);