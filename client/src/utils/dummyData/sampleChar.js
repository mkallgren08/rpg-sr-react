let race = { race_id: "03d3eb84-5ff6-11e9-9efc-0e3bd9a570ee",
race_name: "Elf",
min_bod: 1,
max_bod: 6,
min_agi: 2,
max_agi: 7,
min_rea: 1,
max_rea: 6,
min_str: 1,
max_str: 6,
min_wil: 1,
max_wil: 6,
min_log: 1,
max_log: 6,
min_int: 1,
max_int: 6,
min_cha: 3,
max_cha: 8,
min_edg: 1,
max_edg: 6,
essence: 6,
initiative: "Rea+Int",
traits: {
  traits: [
    "Low-Light Vision"
  ]
}}

module.exports = {
  techno: {
    name: "Technomancer",
    id: '071fb640-653d-11e9-bb3b-5d4463aaa874',
    race: race,
    attrs: {
      bod: 3,
      agi: 6,
      rea: 5,
      str: 3,
      wil: 2,
      log: 6,
      int: 3,
      cha: 5,
      edg: 2,
      res: 6,
      mag: 0,
      ess: 6
    }
  },
  mage: {
    name: "Mage",
    id: '253af7b0-653e-11e9-9048-f56209f9866c',
    race: race,
    attrs: {
      bod: 3,
      agi: 6,
      rea: 5,
      str: 3,
      wil: 2,
      log: 6,
      int: 3,
      cha: 5,
      edg: 2,
      res: 0,
      mag: 6,
      ess: 6
    }
  },
  adept: {
    name: "Adept",
    id: '253af7b1-653e-11e9-9048-f56209f9866c',
    race: race,
    attrs: {
      bod: 3,
      agi: 6,
      rea: 5,
      str: 3,
      wil: 2,
      log: 6,
      int: 3,
      cha: 5,
      edg: 2,
      res: 0,
      mag: 6,
      ess: 6
    }
  },

};