 



<DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> is useful for producing nicely formatted text, producing good-looking messages, and so on. <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> can generate and return a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or output to *destination*. 



The *control-string* argument to <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> is actually a *format control*. That is, it can be either a *format string* or a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, for example a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> returned by the <DictionaryLink styled={true} term={"formatter"}><b>formatter</b></DictionaryLink> <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. 



If it is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called with the appropriate output stream as its first argument and the data arguments to <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> as its remaining arguments. The function should perform whatever output is necessary and return the unused tail of the arguments (if any). 



The compilation process performed by <DictionaryLink styled={true} term={"formatter"}><b>formatter</b></DictionaryLink> produces a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that would do with its <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> as the <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> interpreter would do with those <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. 



The remainder of this section describes what happens if the *control-string* is a *format string*. *Control-string* is composed of simple text (<GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>) and embedded directives. 



<DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> writes the simple text as is; each embedded directive specifies further text output that is to appear at the corresponding point within the simple text. Most directives use one or more elements of *args* to create their output. 



A directive consists of a *tilde*, optional prefix parameters separated by commas, optional <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm> modifiers, and a single character indicating what kind of directive this is. There is no required ordering between the <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> modifier. The <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> of the directive character is ignored. Prefix parameters are notated as signed (sign is optional) decimal numbers, or as a <GlossaryTerm styled={true} term={"single-quote"}><i>single-quote</i></GlossaryTerm> followed by a character. For example, &#126;5,’0d can be used to print an *integer* in decimal radix in five columns with leading zeros, or &#126;5,’\*d to get leading asterisks. 



In place of a prefix parameter to a directive, V (or v) can be used. In this case, <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> takes an argument from *args* as a parameter to the directive. The argument should be an *integer* or <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . If the *arg* used by a V parameter is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the effect is as if the parameter had been 



omitted. # can be used in place of a prefix parameter; it represents the number of *args* remaining to be processed. When used within a recursive format, in the context of &#126;? or &#126;\{, the # prefix parameter represents the number of *format arguments* remaining within the recursive call. 



Examples of *format strings*: 



|<p>"&#126;S" ;This is an S directive with no parameters or modifiers. "&#126;3,-4:@s" ;This is an S directive with two parameters, 3 and -4, ; and both the <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm> flags. </p><p>"&#126;,+4S" ;Here the first prefix parameter is omitted and takes ; on its default value, while the second parameter is 4.</p>|

| :-: |





**Figure 22–6. Examples of format control strings** 



<DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> sends the output to *destination*. If *destination* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> creates and returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> 



 



 



containing the output from *control-string*. If *destination* is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, it must be a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> with a *fill pointer* , a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, or the symbol <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. If *destination* is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> with a *fill pointer* , the output is added to the end of the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. If *destination* is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, the output is sent to that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. If *destination* is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, the output is sent to *standard output*. 



In the description of the directives that follows, the term *arg* in general refers to the next item of the set of *args* to be processed. The word or phrase at the beginning of each description is a mnemonic for the directive. <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> directives do not bind any of the printer control variables (**\*print-...\***) except as specified in the following descriptions. Implementations may specify the binding of new, implementation-specific printer control variables for each <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> directive, but they may neither bind any standard printer control variables not specified in description of a <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> directive nor fail to bind any standard printer control variables as specified in the description. 



