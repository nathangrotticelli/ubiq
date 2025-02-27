const { v4: uuidv4, validate: validate, version: version } = require('uuid');

class Uuid {
    static generate(){
        return uuidv4();
    }
    static validate(str){
        return validate(str) && version(str) === 4;
    }
}

module.exports = {
    Uuid
}