import readlineSync from "readline-sync";

export default userName = () => { 
    readlineSync.question('May I have your name? '); 
    console.log('Hi ' + userName + '!');
};
