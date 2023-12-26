 



These rules define the congruence of a set of <GlossaryTerm styled={true} term={"lambda list"}><i>lambda lists</i></GlossaryTerm>, including the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of each method for a given generic function and the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> specified for the generic function itself, if given. 



1\. Each <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> must have the same number of required parameters. 



2\. Each <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> must have the same number of optional parameters. Each method can supply its own default for an optional parameter. 



3\. If any <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> mentions **&amp;rest** or **&amp;key**, each <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> must mention one or both of them. 







 



 



4\. If the <GlossaryTerm styled={true} term={"generic function lambda list"}><i>generic function lambda list</i></GlossaryTerm> mentions **&amp;key**, each method must accept all of the keyword names mentioned after **&amp;key**, either by accepting them explicitly, by specifying **&amp;allow-other-keys**, or by specifying **&amp;rest** but not **&amp;key**. Each method can accept additional keyword arguments of its own. The checking of the validity of keyword names is done in the generic function, not in each method. A method is invoked as if the keyword argument pair whose name is :allow-other-keys and whose value is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> were supplied, though no such argument pair will be passed. 



5\. The use of **&amp;allow-other-keys** need not be consistent across <GlossaryTerm styled={true} term={"lambda list"}><i>lambda lists</i></GlossaryTerm>. If **&amp;allow-other-keys** is mentioned in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of any applicable <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> or of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, any keyword arguments may be mentioned in the call to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



6\. The use of **&amp;aux** need not be consistent across methods. 



If a <GlossaryTerm styled={true} term={"method-defining operator"}><i>method-defining operator</i></GlossaryTerm> that cannot specify <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> options creates a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, and if the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> for the method mentions keyword arguments, the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the generic function will mention **&amp;key** (but no keyword arguments). 



