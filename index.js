const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git')

const FILE_Path = './data.json';

const DATE = moment().format();

const data = {
    date: DATE
}

jsonfile.writeFile(FILE_Path, data);
simpleGit().add([FILE_Path]).commit(Date, { '--date': DATE }).push();