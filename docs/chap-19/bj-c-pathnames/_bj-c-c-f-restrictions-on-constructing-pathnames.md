 



When constructing a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> from components, conforming programs must follow these rules: 



*•* Any component can be <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> in the host might mean a default host rather than an actual <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> in some implementations. 



*•* The host, device, directory, name, and type can be <ClLinks  term={"string"}><i>strings</i></ClLinks>. There are *implementation dependent* limits on the number and type of <ClLinks  term={"character"}><i>characters</i></ClLinks> in these <ClLinks  term={"string"}><i>strings</i></ClLinks>. 



*•* The directory can be a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"string"}><i>strings</i></ClLinks> and <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. There are <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> limits on the <ClLinks  term={"list"}><i>list</i></ClLinks>’s length and contents. 



*•* The version can be :newest. 



*•* Any component can be taken from the corresponding component of another <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. When the two <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> are for different file systems (in implementations that support multiple file systems), an appropriate translation occurs. If no meaningful translation is possible, an error is signaled. The definitions of “appropriate” and “meaningful” are <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*•* An implementation might support other values for some components, but a portable program cannot use those values. A conforming program can use <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> values but this can make it non-portable; for example, it might work only with Unix file systems. 



