function testName(str){
	return /^((\\+|00)[1-9]\\d{0,3}|0 ?[1-9]|\\(00? ?[1-9][\\d ]*\\))[\\d\\-/ ]*$/.test(str);
}
console.log(testName("Michael"));	
console.log(testName("Ab Cd"));
console.log(testName("Michael Gfeller"));
console.log(testName("Michael Michael Gfeller"));
console.log(testName("Michael Michael Michael Gfeller"));