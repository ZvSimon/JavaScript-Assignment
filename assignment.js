// function sayHello(name) {
//   console.log('Hi ' + name);
// }
/**
 * This function will print a message to the console one argument is passed
 * @param name
 */
const sayHello=(name)=>{
  console.log('Hi ' + name);
}
/**
 * This function will print a message to the console no arguments are passed
 */
const sayHello1=()=>{
    console.log("Hi Simon");
}
/**
 * This function will print a message to the console two arguments are passed
 * @param sentence
 * @param name
 */
const sayHello2=(sentence,name)=>{
  console.log(sentence + name);
}

const sayHello3=(sentence = "Hi",name)=>{
    console.log(sentence + name);
}
const checkInput=(cb,...strings)=>{
    let hasEmptyText=false;
    for(const text of strings){
        if(!text){
            hasEmptyText=true;
            break;
        }
    }
    if(!hasEmptyText){
        cb();
    }

}
sayHello("Simon");
sayHello1();
sayHello2("Hi ","Simon");
sayHello3("Elie");
checkInput(()=>{console.log("All not empty")},"Hello","12","Simon");