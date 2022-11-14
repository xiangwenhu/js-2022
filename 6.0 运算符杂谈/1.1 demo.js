// 请使用code Runner或者 node 启动

let name = "let-name";
const animal = {
  name: "animal-Name",
	getName(){
  	return this.name
  }
};
const log = console.log;
const getName = animal.getName;

log('getName():',getName());
log('person.getName():', animal.getName());
log('(person.getName)():', (animal.getName)());
log('(0, person.getName)():', (0, animal.getName)());


log('this:', this) // {}