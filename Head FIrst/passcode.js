function getSecret(file, secretPassword) {
	superSecretFile.opened = superSecretFile.opened + 1;
	
	if (secretPassword == superSecretFile.password) {
		return superSecretFile.contents;
	} else {
		return "Invalid password! No secret for you.";
	}
	
}

function setSecret(file, secretPassword, secret) {
	if (secretPassword == superSecretFile.password) {
		superSecretFile.opened = 0;
		superSecretFile.contents = secret;
	}
}

var superSecretFile = {
	level: "classified",
	opened: 0,
	password: 2,
	contents: "Dr. Evel's next meeting is in Detroit."
};
var secret = getSecret(secretPassword, file);
console.log(secret);

setSecret(secretPassword, file, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(secretPassword, file);
cconsole.log(secret);



