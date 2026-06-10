/* Imports: */
// Note: these imports need to repeated for every file used in the document.

// Main import of the template
// This import contains the wrap-it and equate packages by default.
#import "template.typ": (
  appendix, base, chem, doubleline, equate, in-appendix-part, maketitlepage, switch-page-numbering, wrap-content,
)

// Main styling, containg the majority of typesetting including document layout, fonts, heading styling, figure styling, outline styling, etc. Some parts of the styling are customizable.
#show: base.with(
  // These first two parameters are only used for the pdf metadata.
  title: "Content Brief for Writers",
  name: "Vidura Gunawardana",
  // What is displayed at the top-right of the page. The top-left of the page displays the current chapter.
  rightheader: "National Disability Information Portal (NDIP)",
  // Main and math fonts
  main-font: "Stix Two Text",
  math-font: "Stix Two Math",
  // Colors used for internal references (figures, equations, sections) and citations
  ref-color: olive,
  cite-color: blue,
  // Language, used for correct hyphenation patterns and default word for outline title, etc.
  language: "en",
  region: "GB",
)


#maketitlepage(
  // These first arguments are self-explanatory
  title: [Content Brief for Writers],
  // subtitle: [],
  name: "Vidura Gunawardana",
  publicity-statement: [*Note* v.1.1 more to be added],
)

#outline()


// After the front matter is complete, we switch page numbering from roman to arabic numbering, and restart counting. The next chapter created afterwards starts on page 1.

#show: switch-page-numbering

#include "./pages.typ"
