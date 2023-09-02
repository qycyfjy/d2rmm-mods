const pettypeFilename = 'global\\excel\\pettype.txt';
const pettype = D2RMM.readTsv(pettypeFilename);
const skillFilename = 'global\\excel\\skills.txt';
const skill = D2RMM.readTsv(skillFilename);

let golem_row = pettype.rows.find((row, i, o) => row['pet type'] == 'golem');
let clone1 = { ...golem_row };
let clone2 = { ...golem_row };
let clone3 = { ...golem_row };

let modify_pettype = function (row, pet_type, mclass1, micon1) {
    row['pet type'] = pet_type;
    row['mclass1'] = mclass1;
    row['micon1'] = micon1;
    for (let i = 2; i < 5; i++) {
        row['mclass' + i] = '';
        row['micon' + i] = '';
    }
};
modify_pettype(golem_row, 'golem', '291', 'metalgolumicon');
modify_pettype(clone1, 'bloodgolem', '290', 'bloodgolumicon');
modify_pettype(clone2, 'claygolem', '289', 'earthgolumicon');
modify_pettype(clone3, 'firegolem', '292', 'firegolumicon');

let modify_skill = function (skill_name, pet_type) {
    let row = skill.rows.find((r, i, o) => {
        return r['skill'] == skill_name;
    });
    row['pettype'] = pet_type;
};
modify_skill('Clay Golem', 'claygolem');
modify_skill('BloodGolem', 'bloodgolem');
modify_skill('IronGolem', 'golem');
modify_skill('FireGolem', 'firegolem');
pettype.rows.push(clone1);
pettype.rows.push(clone2);
pettype.rows.push(clone3);

D2RMM.writeTsv(pettypeFilename, pettype);
D2RMM.writeTsv(skillFilename, skill);
