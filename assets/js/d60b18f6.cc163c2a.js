"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[3201],{69723:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var r=s(85893),t=s(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"stream-external-format"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"stream-external-format"})," ",(0,r.jsx)(n.em,{children:"stream \u2192 format"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"stream"}),"\u2014a ",(0,r.jsx)(n.em,{children:"file stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"format"}),"\u2014an ",(0,r.jsx)(n.em,{children:"external file format"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns an ",(0,r.jsx)(n.em,{children:"external file format designator"})," for the ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:' \n(with-open-file (stream "test" :direction :output) \n\n \n \n(stream-external-format stream)) \n\u2192 :DEFAULT \n<i><sup>or</sup>\u2192</i> :ISO8859/1-1987 \n<i><sup>or</sup>\u2192</i> (:ASCII :SAIL) \n<i><sup>or</sup>\u2192</i> ACME::PROPRIETARY-FILE-FORMAT-17 \n<i><sup>or</sup>\u2192</i> #<FILE-FORMAT :ISO646-1983 2343673> \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:["the ",":external-format"," ",(0,r.jsx)(n.em,{children:"argument"})," to the ",(0,r.jsx)(n.em,{children:"function"})," ",(0,r.jsx)(n.strong,{children:"open"})," and the ",(0,r.jsx)(n.strong,{children:"with-open-file"})," ",(0,r.jsx)(n.em,{children:"macro"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"format"})," returned is not necessarily meaningful to other ",(0,r.jsx)(n.em,{children:"implementations"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"with-open-file"})," ",(0,r.jsx)(n.em,{children:"macro"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"with-open-file"})," (",(0,r.jsx)(n.em,{children:"stream filespec &#123;options&#125;"}),"*) ",(0,r.jsx)(n.em,{children:"&#123;declaration&#125;"}),"* ",(0,r.jsx)(n.em,{children:"&#123;form&#125;"}),"*"]}),"\n",(0,r.jsx)(n.p,{children:"\u2192 results"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"stream"})," \u2013 a variable."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"filespec"}),"\u2014a ",(0,r.jsx)(n.em,{children:"pathname designator"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"options"})," \u2013 ",(0,r.jsx)(n.em,{children:"forms"}),"; evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"declaration"}),"\u2014a ",(0,r.jsx)(n.strong,{children:"declare"})," ",(0,r.jsx)(n.em,{children:"expression"}),"; not evaluated."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"forms"}),"\u2014an ",(0,r.jsx)(n.em,{children:"implicit progn"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"results"}),"\u2014the ",(0,r.jsx)(n.em,{children:"values"})," returned by the ",(0,r.jsx)(n.em,{children:"forms"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"with-open-file"})," uses ",(0,r.jsx)(n.strong,{children:"open"})," to create a ",(0,r.jsx)(n.em,{children:"file stream"})," to ",(0,r.jsx)(n.em,{children:"file"})," named by ",(0,r.jsx)(n.em,{children:"filespec"}),". ",(0,r.jsx)(n.em,{children:"Filespec"})," is the name of the file to be opened. ",(0,r.jsx)(n.em,{children:"Options"})," are used as keyword arguments to ",(0,r.jsx)(n.strong,{children:"open"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"stream object"})," to which the ",(0,r.jsx)(n.em,{children:"stream variable"})," is ",(0,r.jsx)(n.em,{children:"bound"})," has ",(0,r.jsx)(n.em,{children:"dynamic extent"}),"; its ",(0,r.jsx)(n.em,{children:"extent"})," ends when the ",(0,r.jsx)(n.em,{children:"form"})," is exited."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"with-open-file"})," evaluates the ",(0,r.jsx)(n.em,{children:"forms"})," as an ",(0,r.jsx)(n.em,{children:"implicit progn"})," with ",(0,r.jsx)(n.em,{children:"stream"})," bound to the value returned by ",(0,r.jsx)(n.strong,{children:"open"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When control leaves the body, either normally or abnormally (such as by use of ",(0,r.jsx)(n.strong,{children:"throw"}),"), the file is automatically closed. If a new output file is being written, and control leaves abnormally, the file is aborted and the file system is left, so far as possible, as if the file had never been opened."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"with-open-file"})}),"\n",(0,r.jsxs)(n.p,{children:["It is possible by the use of ",":if-exists"," nil or ",":if-does-not-exist"," nil for ",(0,r.jsx)(n.em,{children:"stream"})," to be bound to ",(0,r.jsx)(n.strong,{children:"nil"}),". Users of ",":if-does-not-exist"," nil should check for a valid ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The consequences are undefined if an attempt is made to ",(0,r.jsx)(n.em,{children:"assign"})," the ",(0,r.jsx)(n.em,{children:"stream variable"}),". The compiler may choose to issue a warning if such an attempt is detected."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:'\n(setq p (merge-pathnames "test")) \n\u2192 #\\<PATHNAME :HOST NIL :DEVICE *device-name* :DIRECTORY *directory-name* \n:NAME "test" :TYPE NIL :VERSION :NEWEST> \n(with-open-file (s p :direction :output :if-exists :supersede) \n  (format s "Here are a couple&#126;%of test data lines&#126;%")) \u2192 NIL \n(with-open-file (s p) \n  (do ((l (read-line s) (read-line s nil \u2019eof))) \n      ((eq l \u2019eof) "Reached end of file.") \n    (format t "&#126;&amp;\\*\\*\\* &#126;A&#126;%" l))) \n\u25b7 \\*\\*\\* Here are a couple \n\u25b7 \\*\\*\\* of test data lines \n\u2192 "Reached end of file." \n;; Normally one would not do this intentionally because it is \n;; not perspicuous, but beware when using :IF-DOES-NOT-EXIST NIL \n;; that this doesn\u2019t happen to you accidentally... \n(with-open-file (foo "no-such-file" :if-does-not-exist nil) \n  (read foo)) \n\u25b7 hello? \n\u2192 HELLO? ;This value was read from the terminal, not a file! \n;; Here\u2019s another bug to avoid... \n(with-open-file (foo "no-such-file" :direction :output :if-does-not-exist nil) (format foo "Hello")) \n\u2192 "Hello" ;FORMAT got an argument of NIL! \n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,r.jsxs)(n.p,{children:["Creates a ",(0,r.jsx)(n.em,{children:"stream"})," to the ",(0,r.jsx)(n.em,{children:"file"})," named by ",(0,r.jsx)(n.em,{children:"filename"})," (upon entry), and closes the ",(0,r.jsx)(n.em,{children:"stream"})," (upon exit). In some ",(0,r.jsx)(n.em,{children:"implementations"}),", the ",(0,r.jsx)(n.em,{children:"file"})," might be locked in some way while it is open. If the ",(0,r.jsx)(n.em,{children:"stream"})," is an ",(0,r.jsx)(n.em,{children:"output stream"}),", a ",(0,r.jsx)(n.em,{children:"file"})," might be created."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(n.p,{children:"The host computer\u2019s file system."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.em,{children:"function"})," ",(0,r.jsx)(n.strong,{children:"open"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const a={},o="stream-external-format",c={id:"chap-21/cb-c-dictionary/streamexternalformat",title:"stream-external-format",description:"Expanded Reference: stream-external-format",source:"@site/docs/chap-21/cb-c-dictionary/streamexternalformat.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/streamexternalformat",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/streamexternalformat",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/streamexternalformat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stream-error-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/streamerrorstream"},next:{title:"streamp",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/streamp"}},d={},h=[{value:"Expanded Reference: stream-external-format",id:"expanded-reference-stream-external-format",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"stream-external-format",children:"stream-external-format"}),"\n","\n","\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-stream-external-format",children:"Expanded Reference: stream-external-format"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(stream-external-format )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>l});var r=s(67294);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);