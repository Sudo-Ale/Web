// #################################################################################################################################
const classList = {
    _classPG: {
        warrior: {
            'atk': 14,
            'def': 10
        },
        tank: {
            'atk': 10,
            'def': 16
        },        
        rogue: {
            'atk': 16,
            'def': 8
        },        
        priest: {
            'atk': 10,
            'def': 10,
            'heal power': 8
        }
    },
    set classPG(className) {
        return this._class[className];
    }
};

const character = (name, gender) => {
    return {
        _name: name,
        _gender: gender,
        _characterClass: '',

        get info(){
            console.log(`${this._name}`)
        },
        get characterClass(){
            console.log(`${this._characterClass}`)
        },
        set pickClass(className) {
            this._characterClass = classList.class = className
        }
    }
}

const warrior = character('Bob', 'M');
warrior.info;
warrior.pickClass = 'warrior';
warrior.characterClass;