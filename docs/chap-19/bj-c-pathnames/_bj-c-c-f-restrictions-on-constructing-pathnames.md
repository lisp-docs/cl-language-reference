 



When constructing a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> from components, conforming programs must follow these rules: 



*•* Any component can be <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> in the host might mean a default host rather than an actual <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> in some implementations. 



*•* The host, device, directory, name, and type can be <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>. There are *implementation dependent* limits on the number and type of <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> in these <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>. 



*•* The directory can be a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks> and <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. There are <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> limits on the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>’s length and contents. 



*•* The version can be :newest. 



*•* Any component can be taken from the corresponding component of another <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. When the two <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> are for different file systems (in implementations that support multiple file systems), an appropriate translation occurs. If no meaningful translation is possible, an error is signaled. The definitions of “appropriate” and “meaningful” are <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*•* An implementation might support other values for some components, but a portable program cannot use those values. A conforming program can use <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> values but this can make it non-portable; for example, it might work only with Unix file systems. 



