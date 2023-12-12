import Link from "@docusaurus/Link";
import { ReferenceAid, getLink, DefinitionTooltips, isDefinition, isDictionaryItem } from "@lisp-docs/utils";

export default function ClLinks({ children, styled }) {
  function getLispDocsLink() {
    if (typeof children === "string" && children.endsWith("s")) {
      const trimmedTerm = children.trim();
      const singularTerm = trimmedTerm.substring(0, trimmedTerm.length - 1);
      return getLink(trimmedTerm) || getLink(singularTerm);
    } else if (typeof children === "string") {
        const trimmedTerm = children.trim();
        return getLink(trimmedTerm);
    } else return null;
  }

  function getTerm() {
      if (typeof children === "string" && children.endsWith("s")) {
          const trimmedTerm = children.trim();
          const singularTerm = trimmedTerm.substring(0, trimmedTerm.length - 1);
          if (getLink(trimmedTerm)) {
              return trimmedTerm;
          } else if (getLink(singularTerm)) {
              return singularTerm;
          } else return null;
      } else if (typeof children === "string") {
          const trimmedTerm = children.trim();
          return trimmedTerm;
      } else return null;
  }

  function getClLink() {
    const term = getTerm();
      const link = getLispDocsLink();
      console.debug(term)
      console.debug(link)
    if (link === null) {
      return <span>{children}</span>;
    } else {
      return (
        <Link to={link}>
          <DefinitionTooltips term={term}>{children}</DefinitionTooltips>
        </Link>
      );
    }
  }

    function getDisplay() {
        const term = getTerm()
        if (styled) {
            if (isDefinition(term) && isDictionaryItem(term)) {
                return <i><b>{getClLink()}</b></i>;
            } else if (isDefinition(term)) {
                return <i>{getClLink()}</i>;
            } else if (isDictionaryItem(term)) {
                return <b>{getClLink()}</b>;
            }
        }
        return getClLink();
    }

  return getDisplay();
}
