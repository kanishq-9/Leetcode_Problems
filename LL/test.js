import LinkedListDS from "./linkedlist.js";

const l1 = new LinkedListDS();
l1.append(10);
l1.append(20);
l1.append(30);
console.log(l1.printLL());
l1.deleteLast();
console.log(l1.printLL());
l1.deleteFirst();
console.log(l1.printLL());
l1.appendStart(40);
console.log(l1.printLL());
