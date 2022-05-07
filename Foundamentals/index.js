const visibleItem = 1;

//1
if (visibleItem === 1) {
	let a = { x: 1 };
	let b = a;
	a.x = 2;
	// console.log(b.x) //?
}

// <--------------------------------------------------------------------------->

//2
if (visibleItem === 2) {
	console.log("start");
	Promise.resolve().then(() => console.log("promise 1"));
	setTimeout(() => console.log("setTimeout"));
	Promise.resolve().then(() => console.log("promise 2"));
	console.log("end");
}

// <--------------------------------------------------------------------------->

//3
if (visibleItem === 3) {
	var fullName = "Karimi";
	const person = {
		fullName: "Neymar",
		prop: {
			fullName: "Ronaldo",
			setName: (name) => {
				this.fullName = name;
			},
			getName() {
				return this.fullName;
			},
		},
	};

	const getName = person.prop.getName;
	person.prop.setName("Messi");
	console.log(person.prop.getName());
	console.log(getName());
	console.log(person.fullName);
	console.log(fullName);
}

// <--------------------------------------------------------------------------->

//4
if (visibleItem === 4) {
	const c = [1, 2, 3];
	const d = [1, 2, 3];
	console.log(c == d);
	console.log(c === d);
}

// <--------------------------------------------------------------------------->

//5
if (visibleItem === 5) {
	const print = {
		name: "Amirreza",
		print1: function () {
			console.log(this.name);
		},
		print2: () => {
			console.log(this.name);
		},
	};
}

// <--------------------------------------------------------------------------->

//6
if (visibleItem === 6) {
	const obj = {};
	obj.name = "Ali";
	console.log(obj);
}

// <--------------------------------------------------------------------------->

//7
if (visibleItem === 7) {

  if([]) {
    console.log("True");
  } else {
    console.log("False");
  }

  console.log(Boolean([]));

  console.log([].toString());

  console.log("");

  console.log(Boolean(""));

  console.log([] == []);

}
