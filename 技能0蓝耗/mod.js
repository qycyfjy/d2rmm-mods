const skillFilename = 'global\\excel\\skills.txt';
const skill = D2RMM.readTsv(skillFilename);

skill.rows.map((r, i, a) => 
{
    r['startmana'] = '0';
    r['minmana'] = '0';
    r['manashift'] = '0';
    r['mana'] = '0';
    r['lvlmana'] = '0';
});

D2RMM.writeTsv(skillFilename, skill);
