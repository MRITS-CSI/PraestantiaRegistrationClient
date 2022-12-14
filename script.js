document.getElementById('player2').style.display = 'flex';
let isTeam = false;
document.getElementById('game').value = 'team';
class Player {
	constructor(name, branch, yearOfStudy, section, rollNo, phoneNo, email) {
		this.name = name;
		this.branch = branch;
		this.yearOfStudy = yearOfStudy;
		this.section = section;
		this.rollNo = rollNo;
		this.phoneNo = phoneNo;
		this.email = email;
	}
}

document.getElementById('game').addEventListener('change', function () {
	if (this.value == 'team') {
		document.getElementById('player2').style.display = 'flex';
		isTeam = true;
	} else {
		document.getElementById('player2').style.display = 'none';
		isTeam = false;
	}
});

document.getElementById('submit').addEventListener('click', function () {
	submit();
});

console.log(JSON.stringify([new Player('n', 'b', '1', 's', 'r', 'p', 'e')]));

function submit() {
	let player1 = new Player(
		document.getElementById('name1').value,
		document.getElementById('branch1').value,
		document.getElementById('year1').value,
		document.getElementById('section1').value,
		document.getElementById('htno1').value,
		document.getElementById('phoneno1').value,
		document.getElementById('email1').value
	);
	let player2 = isTeam
		? new Player(
				document.getElementById('name2').value,
				document.getElementById('branch2').value,
				document.getElementById('year2').value,
				document.getElementById('section2').value,
				document.getElementById('htno2').value,
				document.getElementById('phoneno2').value,
				document.getElementById('email2').value
		  )
		: null;

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://csi-mrits.tech/api/v1/user/signup');
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.status);
			console.log(xhr.responseText);
			document.getElementById('teamNumber').innerText =
				'Team number: ' + JSON.parse(xhr.responseText).msg.teamNo;
			document.getElementById('password').innerText =
				'Password: ' + JSON.parse(xhr.responseText).password;
		}
	};

	let data =
		isTeam && player2
			? JSON.stringify([player1, player2])
			: JSON.stringify([player1]);

	let jsondata = `{"players":${data}}`;

	xhr.send(jsondata);
	console.log('sent');
	document.getElementById('name1').value = '';
	document.getElementById('branch1').value = '';
	document.getElementById('year1').value = '';
	document.getElementById('section1').value = 'A';
	document.getElementById('htno1').value = '';
	document.getElementById('phoneno1').value = '';
	document.getElementById('email1').value = '';

	document.getElementById('name2').value = '';
	document.getElementById('branch2').value = '';
	document.getElementById('year2').value = '';
	document.getElementById('section2').value = 'A';
	document.getElementById('htno2').value = '';
	document.getElementById('phoneno2').value = '';
	document.getElementById('email2').value = '';
}

// function generatePlayerField(n) {
//     // create a textbox named "name" with id "name1"
//     var name = document.createElement("input");
//     name.setAttribute("type", "text");
//     name.setAttribute("name", "name");
//     name.setAttribute("id", `name${n}`);
//     name.setAttribute("placeholder", "Name");

//     //create a select named "branch" with values "CSE", "CS", "DS", "IT, "ECE", "IOT", "AIML", "Networks" in alphabetic order
//     var branch = document.createElement("select");
//     branch.setAttribute("name", "branch");
//     branch.setAttribute("id", `branch${n}`);
//     var options = ["CSE", "CS", "DS", "IT", "ECE", "IOT", "AIML", "Networks"];
//     for (var i = 0; i < options.length; i++) {
//         var opt = document.createElement("option");
//         opt.setAttribute("value", options[i]);
//         opt.innerHTML = options[i];
//         branch.appendChild(opt);
//     }

//     // add select with options 1 2 3 4 named "year" with id `year${n}`
//     var year = document.createElement("select");
//     year.setAttribute("name", "year");
//     year.setAttribute("id", `year${n}`);
//     var options = [1, 2, 3, 4];
//     for (var i = 0; i < options.length; i++) {
//         var opt = document.createElement("option");
//         opt.setAttribute("value", options[i]);
//         opt.innerHTML = options[i];
//         year.appendChild(opt);
//     }

//     //add select named

// }
