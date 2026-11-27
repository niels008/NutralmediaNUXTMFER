import projects from "~/data/projects.json";

// A case name is a key of data/projects.json, so a name that has no entry
// there fails the type check instead of the page.
export type CaseName = keyof typeof projects;

// The cases in the order the Cases grid on Home lists them.
// Home's grid and the "More cases" section at the end of each case both read this list.
export const CASE_ORDER: CaseName[] = [
  "Youforce",
  "Visma",
  // "VismaRaet",
  "Agrovision",
  "VSMAutomatisering",
  "ESports",
  "SMCLaren",
  "GoodlookingCooking",
  "SNSBank",
];
