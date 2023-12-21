"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[41713],{25747:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>h,metadata:()=>c,toc:()=>o});var i=s(85893),t=s(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"parse-namestring"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"parse-namestring"})," ",(0,i.jsx)(n.em,{children:"thing"})," &optional ",(0,i.jsx)(n.em,{children:"host default-pathname"})," &key ",(0,i.jsx)(n.em,{children:"start end junk-allowed \u2192 pathname, position"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"thing"}),"\u2014a ",(0,i.jsx)(n.em,{children:"string"}),", a ",(0,i.jsx)(n.em,{children:"pathname"}),", or a ",(0,i.jsx)(n.em,{children:"stream associated with a file"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"host"}),"\u2014a ",(0,i.jsx)(n.em,{children:"valid pathname host"}),", a ",(0,i.jsx)(n.em,{children:"logical host"}),", or ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"default-pathname"}),"\u2014a ",(0,i.jsx)(n.em,{children:"pathname designator"})," . The default is the ",(0,i.jsx)(n.em,{children:"value"})," of"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"*default-pathname-defaults*"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"parse-namestring"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"start"}),", ",(0,i.jsx)(n.em,{children:"end"}),"\u2014",(0,i.jsx)(n.em,{children:"bounding index designators"})," of ",(0,i.jsx)(n.em,{children:"thing"}),". The defaults for ",(0,i.jsx)(n.em,{children:"start"})," and ",(0,i.jsx)(n.em,{children:"end"})," are 0 and ",(0,i.jsx)(n.strong,{children:"nil"}),", respectively."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"junk-allowed"}),"\u2014a ",(0,i.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,i.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"pathname"}),"\u2014a ",(0,i.jsx)(n.em,{children:"pathname"}),", or ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"position"}),"\u2014a ",(0,i.jsx)(n.em,{children:"bounding index designator"})," for ",(0,i.jsx)(n.em,{children:"thing"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Converts ",(0,i.jsx)(n.em,{children:"thing"})," into a ",(0,i.jsx)(n.em,{children:"pathname"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"host"})," supplies a host name with respect to which the parsing occurs."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"thing"})," is a ",(0,i.jsx)(n.em,{children:"stream associated with a file"}),", processing proceeds as if the ",(0,i.jsx)(n.em,{children:"pathname"})," used to open that ",(0,i.jsx)(n.em,{children:"file"})," had been supplied instead."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"thing"})," is a ",(0,i.jsx)(n.em,{children:"pathname"}),", the ",(0,i.jsx)(n.em,{children:"host"})," and the host component of ",(0,i.jsx)(n.em,{children:"thing"})," are compared. If they match, two values are immediately returned: ",(0,i.jsx)(n.em,{children:"thing"})," and ",(0,i.jsx)(n.em,{children:"start"}),"; otherwise (if they do not match), an error is signaled."]}),"\n",(0,i.jsxs)(n.p,{children:["Otherwise (if ",(0,i.jsx)(n.em,{children:"thing"})," is a ",(0,i.jsx)(n.em,{children:"string"}),"), ",(0,i.jsx)(n.strong,{children:"parse-namestring"})," parses the name of a ",(0,i.jsx)(n.em,{children:"file"})," within the substring of ",(0,i.jsx)(n.em,{children:"thing"})," bounded by ",(0,i.jsx)(n.em,{children:"start"})," and ",(0,i.jsx)(n.em,{children:"end"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"thing"})," is a ",(0,i.jsx)(n.em,{children:"string"})," then the substring of ",(0,i.jsx)(n.em,{children:"thing bounded"})," by ",(0,i.jsx)(n.em,{children:"start"})," and ",(0,i.jsx)(n.em,{children:"end"})," is parsed into a ",(0,i.jsx)(n.em,{children:"pathname"})," as follows:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2022"})," If ",(0,i.jsx)(n.em,{children:"host"})," is a ",(0,i.jsx)(n.em,{children:"logical host"})," then ",(0,i.jsx)(n.em,{children:"thing"})," is parsed as a ",(0,i.jsx)(n.em,{children:"logical pathname namestring"})," on the ",(0,i.jsx)(n.em,{children:"host"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2022"})," If ",(0,i.jsx)(n.em,{children:"host"})," is ",(0,i.jsx)(n.strong,{children:"nil"})," and ",(0,i.jsx)(n.em,{children:"thing"})," is a syntactically valid ",(0,i.jsx)(n.em,{children:"logical pathname namestring"})," containing an explicit host, then it is parsed as a ",(0,i.jsx)(n.em,{children:"logical pathname namestring"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2022"})," If ",(0,i.jsx)(n.em,{children:"host"})," is ",(0,i.jsx)(n.strong,{children:"nil"}),", ",(0,i.jsx)(n.em,{children:"default-pathname"})," is a ",(0,i.jsx)(n.em,{children:"logical pathname"}),", and ",(0,i.jsx)(n.em,{children:"thing"})," is a syntactically valid ",(0,i.jsx)(n.em,{children:"logical pathname namestring"})," without an explicit host, then it is parsed as a ",(0,i.jsx)(n.em,{children:"logical pathname namestring"})," on the host that is the host component of ",(0,i.jsx)(n.em,{children:"default-pathname"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2022"})," Otherwise, the parsing of ",(0,i.jsx)(n.em,{children:"thing"})," is ",(0,i.jsx)(n.em,{children:"implementation-defined"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the first of these cases, the host portion of the ",(0,i.jsx)(n.em,{children:"logical pathname"})," namestring and its following ",(0,i.jsx)(n.em,{children:"colon"})," are optional."]}),"\n",(0,i.jsxs)(n.p,{children:["If the host portion of the namestring and ",(0,i.jsx)(n.em,{children:"host"})," are both present and do not match, an error is signaled."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"junk-allowed"})," is ",(0,i.jsx)(n.em,{children:"true"}),", then the ",(0,i.jsx)(n.em,{children:"primary value"})," is the ",(0,i.jsx)(n.em,{children:"pathname"})," parsed or, if no syntactically correct ",(0,i.jsx)(n.em,{children:"pathname"})," was seen, ",(0,i.jsx)(n.strong,{children:"nil"}),". If ",(0,i.jsx)(n.em,{children:"junk-allowed"})," is ",(0,i.jsx)(n.em,{children:"false"}),", then the entire substring is scanned, and the ",(0,i.jsx)(n.em,{children:"primary value"})," is the ",(0,i.jsx)(n.em,{children:"pathname"})," parsed."]}),"\n",(0,i.jsxs)(n.p,{children:["In either case, the ",(0,i.jsx)(n.em,{children:"secondary value"})," is the index into ",(0,i.jsx)(n.em,{children:"thing"})," of the delimiter that terminated the"]}),"\n",(0,i.jsxs)(n.p,{children:["parse, or the index beyond the substring if the parse terminated at the end of the substring (as will always be the case if ",(0,i.jsx)(n.em,{children:"junk-allowed"})," is ",(0,i.jsx)(n.em,{children:"false"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["Parsing a ",(0,i.jsx)(n.em,{children:"null string"})," always succeeds, producing a ",(0,i.jsx)(n.em,{children:"pathname"})," with all components (except the host) equal to ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"thing"})," contains an explicit host name and no explicit device name, then it is ",(0,i.jsx)(n.em,{children:"implementation defined"})," whether ",(0,i.jsx)(n.strong,{children:"parse-namestring"})," will supply the standard default device for that host as the device component of the resulting ",(0,i.jsx)(n.em,{children:"pathname"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'\n(setq q (parse-namestring "test")) \n\u2192 #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" \n\t\t:TYPE NIL :VERSION NIL) \n(pathnamep q) \u2192 true \n(parse-namestring "test") \n\u2192 #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" \n\t\t:TYPE NIL :VERSION NIL), 4 \n(setq s (open *xxx*)) \u2192 #<Input File Stream...> \n(parse-namestring s) \n\u2192 #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME *xxx* \n\t\t:TYPE NIL :VERSION NIL), 0 \n(parse-namestring "test" nil nil :start 2 :end 4 ) \n\u2192 #S(PATHNAME ...), 15 \n(parse-namestring "foo.lisp") \n\u2192 #P"foo.lisp" \n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"junk-allowed"})," is ",(0,i.jsx)(n.em,{children:"false"}),", an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"parse-error"})," is signaled if ",(0,i.jsx)(n.em,{children:"thing"})," does not consist entirely of the representation of a ",(0,i.jsx)(n.em,{children:"pathname"}),", possibly surrounded on either side by ",(0,i.jsx)(n.em,{children:"whitespace"}),(0,i.jsx)("sub",{children:"1"})," characters if that is appropriate to the cultural conventions of the implementation."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"host"})," is supplied and not ",(0,i.jsx)(n.strong,{children:"nil"}),", and ",(0,i.jsx)(n.em,{children:"thing"})," contains a manifest host name, an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"error"})," is signaled if the hosts do not match."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"thing"})," is a ",(0,i.jsx)(n.em,{children:"logical pathname"})," namestring and if the host portion of the namestring and ",(0,i.jsx)(n.em,{children:"host"})," are both present and do not match, an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"error"})," is signaled."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"pathname"}),", ",(0,i.jsx)(n.strong,{children:"logical-pathname"}),", Section 20.1 (File System Concepts), Section 19.2.2.2.3 (",":UNSPE"," CIFIC as a Component Value), Section 19.1.2 (Pathnames as Filenames)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"wild-pathname-p"})})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}const h={title:"parse-namestring"},l="parse-namestring",c={id:"chap-19/bj-e-dictionary/parse-namestring_function",title:"parse-namestring",description:"Expanded Reference: parse-namestring",source:"@site/docs/chap-19/bj-e-dictionary/parse-namestring_function.md",sourceDirName:"chap-19/bj-e-dictionary",slug:"/chap-19/bj-e-dictionary/parse-namestring_function",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/parse-namestring_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-19/bj-e-dictionary/parse-namestring_function.md",tags:[],version:"current",frontMatter:{title:"parse-namestring"},sidebar:"tutorialSidebar",previous:{title:"namestring, file-namestring, directory-namestring, host-namestring, enough-namestring",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/namestring_file-namestring_directory-namestring_host-namestring_enough-namestring_function"},next:{title:"pathname-match-p",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/pathname-match-p_function"}},d={},o=[{value:"Expanded Reference: parse-namestring",id:"expanded-reference-parse-namestring",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"parse-namestring",children:"parse-namestring"}),"\n","\n","\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-parse-namestring",children:"Expanded Reference: parse-namestring"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(parse-namestring )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>h,a:()=>a});var i=s(67294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);