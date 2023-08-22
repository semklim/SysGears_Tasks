module.exports = imperial = {
  system: 'imperial',
  mil: {
    name: {
      singular: 'Mil',
      plural: 'Mils',
    },
    to_default: 1 / 12000,
  },
  in: {
    name: {
      singular: 'Inch',
      plural: 'Inches',
    },
    to_default: 1 / 12,
  },
  yd: {
    name: {
      singular: 'Yard',
      plural: 'Yards',
    },
    to_default: 3,
  },
  'ft-us': {
    name: {
      singular: 'US Survey Foot',
      plural: 'US Survey Feet',
    },
    to_default: 1.000002,
  },
  ft: {
    name: {
      singular: 'Foot',
      plural: 'Feet',
    },
    to_default: 1,
  },
  fathom: {
    name: {
      singular: 'Fathom',
      plural: 'Fathoms',
    },
    to_default: 6,
  },
  mi: {
    name: {
      singular: 'Mile',
      plural: 'Miles',
    },
    to_default: 5280,
  },
  nMi: {
    name: {
      singular: 'Nautical Mile',
      plural: 'Nautical Miles',
    },
    to_default: 6076.12,
  },
};