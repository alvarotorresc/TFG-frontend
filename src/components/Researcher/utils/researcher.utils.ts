
// eslint-disable-next-line
enum Rol {
  admin = "admin",
  researcher = "researcher",
}

export const urlImages = [
  "https://semantic-ui.com/images/avatar/large/steve.jpg",
  "https://semantic-ui.com/images/avatar/large/helen.jpg",
  "https://semantic-ui.com/images/avatar/large/elliot.jpg",
  "https://semantic-ui.com/images/avatar2/large/kristy.png",
  "https://semantic-ui.com/images/avatar2/large/matthew.png",
  "https://semantic-ui.com/images/avatar/large/veronika.jpg",
];

export function sortedAscendant(a: any, b: any) {
  const firstNameA = a.firstName.toUpperCase();
  const firstNameB = b.firstName.toUpperCase();

  let comparison = 0;
  if (firstNameA > firstNameB) {
    comparison = 1;
  } else if (firstNameA < firstNameB) {
    comparison = -1;
  }
  return comparison;
}

export function sortedAscendantDate(a: any, b: any) {
  const firstNameA = a.description.toUpperCase();
  const firstNameB = b.description.toUpperCase();

  let comparison = 0;
  if (firstNameA > firstNameB) {
    comparison = 1;
  } else if (firstNameA < firstNameB) {
    comparison = -1;
  }
  return comparison;
}

export function sortedDescendant(a: any, b: any) {
  const firstNameA = a.firstName.toUpperCase();
  const firstNameB = b.firstName.toUpperCase();

  let comparison = 0;
  if (firstNameA < firstNameB) {
    comparison = 1;
  } else if (firstNameA > firstNameB) {
    comparison = -1;
  }
  return comparison;
}
