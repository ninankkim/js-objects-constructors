function Person (name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

Person.prototype.hello = function(hello) {
    console.log(`Hello, my name is ${this.name}, my email is: ${this.email}, and my phone number is: ${this.phone}.`);
}

const Friends = [
    new Person ('Sonny', 'sonny@hotmail.com', '483-485-4948'),
    new Person ('Jordan', 'jordan@aol.com', '495-586-3456')
]

console.log(Friends);

Friends[0].greet(Friends[1])
Friends[1].greet(Friends[0])

Friends.forEach((person) => {
    person.hello();
})
