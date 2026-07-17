    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("Spongebob");
const user2 = new User("patrick");

console.log(user1.username);
console.log(user2.username);

console.log(User.userCount);