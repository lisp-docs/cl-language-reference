 



When constructing a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> from components, conforming programs must follow these rules: 



*•* Any component can be <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> in the host might mean a default host rather than an actual <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> in some implementations. 



*•* The host, device, directory, name, and type can be <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>. There are *implementation dependent* limits on the number and type of <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> in these <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>. 



*•* The directory can be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. There are <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> limits on the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>’s length and contents. 



*•* The version can be :newest. 



*•* Any component can be taken from the corresponding component of another <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. When the two <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> are for different file systems (in implementations that support multiple file systems), an appropriate translation occurs. If no meaningful translation is possible, an error is signaled. The definitions of “appropriate” and “meaningful” are <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



*•* An implementation might support other values for some components, but a portable program cannot use those values. A conforming program can use <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> values but this can make it non-portable; for example, it might work only with Unix file systems. 



