 

When constructing a *pathname* from components, conforming programs must follow these rules: 

*•* Any component can be **nil**. **nil** in the host might mean a default host rather than an actual **nil** in some implementations. 

*•* The host, device, directory, name, and type can be *strings*. There are *implementation dependent* limits on the number and type of *characters* in these *strings*. 

*•* The directory can be a *list* of *strings* and *symbols*. There are *implementation-dependent* limits on the *list*’s length and contents. 

*•* The version can be :newest. 

*•* Any component can be taken from the corresponding component of another *pathname*. When the two *pathnames* are for different file systems (in implementations that support multiple file systems), an appropriate translation occurs. If no meaningful translation is possible, an error is signaled. The definitions of “appropriate” and “meaningful” are *implementation-dependent*. 

*•* An implementation might support other values for some components, but a portable program cannot use those values. A conforming program can use *implementation-dependent* values but this can make it non-portable; for example, it might work only with Unix file systems. 

