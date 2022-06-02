export const CNJ_FIRST_GROUP = {
  regex: /^(\d{7})/,
  replace: '$1-',
};

export const CNJ_SECOND_GROUP = {
  regex: new RegExp(/^(\d{7})(\d{2})/),
  replace: '$1-$2.',
};

export const CNJ_THIRD_GROUP = {
  regex: new RegExp(/^(\d{7})(\d{2})(\d{4})/),
  replace: '$1-$2.$3.',
};

export const CNJ_FORTH_GROUP = {
  regex: new RegExp(/^(\d{7})(\d{2})(\d{4})(\d{1})/),
  replace: '$1-$2.$3.$4.',
};

export const CNJ_FIFTH_GROUP = {
  regex: new RegExp(/^(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})/),
  replace: '$1-$2.$3.$4.$5.',
};

export const CNJ = {
  regex: new RegExp(/^(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/),
  replace: '$1-$2.$3.$4.$5.$6',
};
