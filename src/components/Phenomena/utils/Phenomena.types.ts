
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

export const spainCities = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'];
