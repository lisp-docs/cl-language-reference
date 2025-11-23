Some <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> have functional interfaces, such as `abort`, `continue`, `muffle-warning`, `store-value`, and `use-value`. They are ordinary functions that use <DictionaryLink styled={true} term={"find-restart"}><b>find-restart</b></DictionaryLink> and <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink> internally, that have the same name as the <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> they manipulate, and that are provided simply for notational convenience.

Figure 9–6 shows <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> relating to <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm>.

| **abort invoke-restart-interactively store-value compute-restarts muffle-warning use-value** | **continue restart-bind with-simple-restart find-restart restart-case** | **invoke-restart restart-name** |
|:---|:---|:---|

**Figure 9–6. Defined names relating to restarts.**



