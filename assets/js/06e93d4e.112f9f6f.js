"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[43999],{30894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=t(85893),r=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"translate-pathname"})," ",(0,a.jsx)(n.em,{children:"Function"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"translate-pathname"})," ",(0,a.jsx)(n.em,{children:"source from-wildcard to-wildcard"})," &key"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"\u2192 translated-pathname"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"source"}),"\u2014a ",(0,a.jsx)(n.em,{children:"pathname designator"})," ."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"from-wildcard"}),"\u2014a ",(0,a.jsx)(n.em,{children:"pathname designator"})," ."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"to-wildcard"}),"\u2014a ",(0,a.jsx)(n.em,{children:"pathname designator"})," ."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"translated-pathname"}),"\u2014a ",(0,a.jsx)(n.em,{children:"pathname"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"translate-pathname"})," translates ",(0,a.jsx)(n.em,{children:"source"})," (that matches ",(0,a.jsx)(n.em,{children:"from-wildcard"}),") into a corresponding ",(0,a.jsx)(n.em,{children:"pathname"})," that matches ",(0,a.jsx)(n.em,{children:"to-wildcard"}),", and returns the corresponding ",(0,a.jsx)(n.em,{children:"pathname"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The resulting ",(0,a.jsx)(n.em,{children:"pathname"})," is ",(0,a.jsx)(n.em,{children:"to-wildcard"})," with each wildcard or missing field replaced by a portion of ",(0,a.jsx)(n.em,{children:"source"}),". A \u201cwildcard field\u201d is a ",(0,a.jsx)(n.em,{children:"pathname"})," component with a value of ",":wild",", a ",":wild"," element of a ",(0,a.jsx)(n.em,{children:"list"}),"-valued directory component, or an ",(0,a.jsx)(n.em,{children:"implementation-defined"}),' portion of a component, such as the "*" in the complex wildcard string "foo*bar" that some implementations support. An implementation that adds other wildcard features, such as regular expressions, must define how ',(0,a.jsx)(n.strong,{children:"translate-pathname"})," extends to those features. A \u201cmissing field\u201d is a ",(0,a.jsx)(n.em,{children:"pathname"})," component with a value of ",(0,a.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The portion of ",(0,a.jsx)(n.em,{children:"source"})," that is copied into the resulting ",(0,a.jsx)(n.em,{children:"pathname"})," is ",(0,a.jsx)(n.em,{children:"implementation-defined"}),". Typically it is determined by the user interface conventions of the file systems involved. Usually it is the portion of ",(0,a.jsx)(n.em,{children:"source"})," that matches a wildcard field of ",(0,a.jsx)(n.em,{children:"from-wildcard"})," that is in the same position as the wildcard or missing field of ",(0,a.jsx)(n.em,{children:"to-wildcard"}),". If there is no wildcard field in ",(0,a.jsx)(n.em,{children:"from-wildcard"})," at that position, then usually it is the entire corresponding ",(0,a.jsx)(n.em,{children:"pathname"})," component of ",(0,a.jsx)(n.em,{children:"source"}),", or in the case of a ",(0,a.jsx)(n.em,{children:"list"}),"-valued directory component, the entire corresponding ",(0,a.jsx)(n.em,{children:"list"})," element."]}),"\n",(0,a.jsxs)(n.p,{children:["During the copying of a portion of ",(0,a.jsx)(n.em,{children:"source"})," into the resulting ",(0,a.jsx)(n.em,{children:"pathname"}),", additional ",(0,a.jsx)(n.em,{children:"implementation defined"})," translations of ",(0,a.jsx)(n.em,{children:"case"})," or file naming conventions might occur, especially when ",(0,a.jsx)(n.em,{children:"from-wildcard"})," and ",(0,a.jsx)(n.em,{children:"to-wildcard"})," are for different hosts."]}),"\n",(0,a.jsxs)(n.p,{children:["It is valid for ",(0,a.jsx)(n.em,{children:"source"})," to be a wild ",(0,a.jsx)(n.em,{children:"pathname"}),"; in general this will produce a wild result. It is valid for ",(0,a.jsx)(n.em,{children:"from-wildcard"})," and/or ",(0,a.jsx)(n.em,{children:"to-wildcard"})," to be non-wild ",(0,a.jsx)(n.em,{children:"pathnames"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"translate-pathname"})}),"\n",(0,a.jsxs)(n.p,{children:["There are no specified keyword arguments for ",(0,a.jsx)(n.strong,{children:"translate-pathname"}),", but implementations are permitted to extend it by adding keyword arguments."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"translate-pathname"})," maps customary case in ",(0,a.jsx)(n.em,{children:"source"})," into customary case in the output ",(0,a.jsx)(n.em,{children:"pathname"}),". ",(0,a.jsx)(n.strong,{children:"Examples:"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n;; The results of the following five forms are all implementation-dependent. \n\n\n\n;; The second item in particular is shown with multiple results just to \n\n\n\n;; emphasize one of many particular variations which commonly occurs. \n\n\n\n(pathname-name (translate-pathname "foobar" "foo\\*" "\\*baz")) *\u2192* "barbaz" \n\n\n\n(pathname-name (translate-pathname "foobar" "foo\\*" "\\*")) \n\n\n\n*\u2192* "foobar" \n\n\n\n<i><sup>or</sup>\u2192</i> "bar" \n\n\n\n(pathname-name (translate-pathname "foobar" "\\*" "foo\\*")) *\u2192* "foofoobar" \n\n\n\n(pathname-name (translate-pathname "bar" "\\*" "foo\\*")) *\u2192* "foobar" \n\n\n\n(pathname-name (translate-pathname "foobar" "foo\\*" "baz\\*")) *\u2192* "bazbar" \n\n\n\n(defun translate-logical-pathname-1 (pathname rules) \n\n\n\n(let ((rule (assoc pathname rules :test #\u2019pathname-match-p))) \n\n\n\n(unless rule (error "No translation rule for ~A" pathname)) \n\n\n\n(translate-pathname pathname (first rule) (second rule)))) \n\n\n\n(translate-logical-pathname-1 "FOO:CODE;BASIC.LISP" \n\n\n\n\u2019(("FOO:DOCUMENTATION;" "MY-UNIX:/doc/foo/") \n\n\n\n("FOO:CODE;" "MY-UNIX:/lib/foo/") \n\n\n\n("FOO:PATCHES;\\*;" "MY-UNIX:/lib/foo/patch/\\*/"))) \n\n\n\n*\u2192* #P"MY-UNIX:/lib/foo/basic.l" \n\n\n\n;;;This example assumes one particular set of wildcard conventions \n\n\n\n;;;Not all file systems will run this example exactly as written \n\n\n\n(defun rename-files (from to) \n\n\n\n(dolist (file (directory from)) \n\n\n\n(rename-file file (translate-pathname file from to)))) \n\n\n\n(rename-files "/usr/me/\\*.lisp" "/dev/her/\\*.l") \n\n\n\n;Renames /usr/me/init.lisp to /dev/her/init.l \n\n\n\n(rename-files "/usr/me/pcl\\*/\\*" "/sys/pcl/\\*/") \n\n\n\n;Renames /usr/me/pcl-5-may/low.lisp to /sys/pcl/pcl-5-may/low.lisp \n\n\n\n;In some file systems the result might be /sys/pcl/5-may/low.lisp \n\n\n\n(rename-files "/usr/me/pcl\\*/\\*" "/sys/library/\\*/") \n\n\n\n;Renames /usr/me/pcl-5-may/low.lisp to /sys/library/pcl-5-may/low.lisp \n\n\n\n;In some file systems the result might be /sys/library/5-may/low.lisp \n\n\n\n(rename-files "/usr/me/foo.bar" "/usr/me2/") \n\n\n\n;Renames /usr/me/foo.bar to /usr/me2/foo.bar \n\n\n\n(rename-files "/usr/joe/\\*-recipes.text" "/usr/jim/cookbook/joe\u2019s-\\*-rec.text") ;Renames /usr/joe/lamb-recipes.text to /usr/jim/cookbook/joe\u2019s-lamb-rec.text \n\n\n\n;Renames /usr/joe/pork-recipes.text to /usr/jim/cookbook/joe\u2019s-pork-rec.text \n\n\n\n\n\n\n\n \n\n\n\n \n\n\n\n;Renames /usr/joe/veg-recipes.text to /usr/jim/cookbook/joe\u2019s-veg-rec.text \n\n\n\n\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,a.jsxs)(n.p,{children:["If any of ",(0,a.jsx)(n.em,{children:"source"}),", ",(0,a.jsx)(n.em,{children:"from-wildcard"}),", or ",(0,a.jsx)(n.em,{children:"to-wildcard"})," is not a ",(0,a.jsx)(n.em,{children:"pathname"}),", a ",(0,a.jsx)(n.em,{children:"string"}),", or a ",(0,a.jsx)(n.em,{children:"stream associated with a file"})," an error of ",(0,a.jsx)(n.em,{children:"type"})," ",(0,a.jsx)(n.strong,{children:"type-error"})," is signaled."]}),"\n",(0,a.jsxs)(n.p,{children:["(pathname-match-p ",(0,a.jsx)(n.em,{children:"source from-wildcard"}),") must be true or an error of ",(0,a.jsx)(n.em,{children:"type"})," ",(0,a.jsx)(n.strong,{children:"error"})," is signaled."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"namestring"}),", ",(0,a.jsx)(n.strong,{children:"pathname-host"}),", ",(0,a.jsx)(n.strong,{children:"pathname"}),", ",(0,a.jsx)(n.strong,{children:"logical-pathname"}),", Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames)"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,a.jsxs)(n.p,{children:["The exact behavior of ",(0,a.jsx)(n.strong,{children:"translate-pathname"})," cannot be dictated by the Common Lisp language and must be allowed to vary, depending on the user interface conventions of the file systems involved."]}),"\n",(0,a.jsxs)(n.p,{children:["The following is an implementation guideline. One file system performs this operation by examining each piece of the three ",(0,a.jsx)(n.em,{children:"pathnames"})," in turn, where a piece is a ",(0,a.jsx)(n.em,{children:"pathname"})," component or a ",(0,a.jsx)(n.em,{children:"list"})," element of a structured component such as a hierarchical directory. Hierarchical directory elements in ",(0,a.jsx)(n.em,{children:"from-wildcard"})," and ",(0,a.jsx)(n.em,{children:"to-wildcard"})," are matched by whether they are wildcards, not by depth in the directory hierarchy. If the piece in ",(0,a.jsx)(n.em,{children:"to-wildcard"})," is present and not wild, it is copied into the result. If the piece in ",(0,a.jsx)(n.em,{children:"to-wildcard"})," is ",":wild"," or ",(0,a.jsx)(n.strong,{children:"nil"}),", the piece in ",(0,a.jsx)(n.em,{children:"source"})," is copied into the result. Otherwise, the piece in ",(0,a.jsx)(n.em,{children:"to-wildcard"}),' might be a complex wildcard such as "foo*bar" and the piece in ',(0,a.jsx)(n.em,{children:"from-wildcard"})," should be wild; the portion of the piece in ",(0,a.jsx)(n.em,{children:"source"})," that matches the wildcard portion of the piece in ",(0,a.jsx)(n.em,{children:"from-wildcard"})," replaces the wildcard portion of the piece in ",(0,a.jsx)(n.em,{children:"to-wildcard"})," and the value produced is used in the result."]})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}const o={},l="translate-pathname",c={id:"chap-19/bj-e-dictionary/translatepathname",title:"translate-pathname",description:"Expanded Reference: translate-pathname",source:"@site/docs/chap-19/bj-e-dictionary/translatepathname.md",sourceDirName:"chap-19/bj-e-dictionary",slug:"/chap-19/bj-e-dictionary/translatepathname",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/translatepathname",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-19/bj-e-dictionary/translatepathname.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"translate-logical-pathname",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/translatelogicalpathname"},next:{title:"wild-pathname-p",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/wildpathnamep"}},d={},h=[{value:"Expanded Reference: translate-pathname",id:"expanded-reference-translate-pathname",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"translate-pathname",children:"translate-pathname"}),"\n","\n","\n",(0,a.jsx)(i,{}),"\n",(0,a.jsx)(n.h2,{id:"expanded-reference-translate-pathname",children:"Expanded Reference: translate-pathname"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:"(translate-pathname )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);