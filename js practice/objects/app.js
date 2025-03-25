// object factory
const robotFactory = (model, mobile) => {
    return {
        _model: model,
        _mobile: mobile,
        _energyLevel: 100,
    
        set model(name){
            if(typeof name === 'string') {
                this._model = name
            }
            else {
                console.log("Model name must be a string value!");
            }
        },
        set energyLevel(energy){
            if(typeof energy === 'number'){
                this._energyLevel = energy;
            } else {
                console.log('Energy must be a number!');
            }
        },
        get info(){
            console.log(`- Model name: ${this._model} \n- Mobile feature: ${this._mobile} \n- Energy Level: ${this._energyLevel}%`);
        }
    }
}

// object creato easy
const robotECO = robotFactory('ECO-VAI', true);
robotECO.info;

console.log();

const robotWAR = robotFactory('ReARM-4', true);
robotWAR.info;


// #############################################################################