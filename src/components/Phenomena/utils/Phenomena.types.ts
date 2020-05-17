
export enum Types {
  APPARITION = "APPARITION",
  PSYCHOPHONY = "PSYCHOPHONY",
  HAUNTED_HOUSE = "HAUNTED_HOUSE",
  REINCARNATION = "REINCARNATION",
  TELEPATHY = "TELEPATHY",
  TELEKINESIS = "TELEKINESIS",
  UFOLOGY = "UFOLOGY",
}


export function sortedAscendant(a: any, b: any) {
  const firstNameA = a.title.toUpperCase();
  const firstNameB = b.title.toUpperCase();

  let comparison = 0;
  if (firstNameA > firstNameB) {
    comparison = 1;
  } else if (firstNameA < firstNameB) {
    comparison = -1;
  }
  return comparison;
}

export function sortedDescendant(a: any, b: any) {
  const firstNameA = a.title.toUpperCase();
  const firstNameB = b.title.toUpperCase();

  let comparison = 0;
  if (firstNameA < firstNameB) {
    comparison = 1;
  } else if (firstNameA > firstNameB) {
    comparison = -1;
  }
  return comparison;
}