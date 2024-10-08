class UserStorage {
    constructor(){
        this.storage = {};
        this.id = 0;
        this.email = "";
        this.age = 0;
        this.bio = null;

        this.addUser({ firstName: "Fede", lastName: "Doe", email: "john.doe@example.com", age: 30, bio: "Software developer" });
        this.addUser({ firstName: "Fede", lastName: "Smith", email: "jane.smith@example.com", age: 25, bio: "Graphic designer" });
        this.addUser({ firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com", age: 28, bio: "Project manager" });
    }

    addUser({firstName, lastName, email, age, bio}){
        
        const id = this.id;
        this.storage[id] = {id, firstName, lastName, email, age, bio};
        this.id++;
    }

    getUsers(){
        return Object.values(this.storage);
    }

    getUser(id){
        return this.storage[id];
    }

    updateUser(id, {firstName, lastName, email, age, bio}){
        this.storage[id] = {id, firstName, lastName, email, age, bio};
    }

    deleteUser(id){
        delete this.storage[id];
    }
    
}

module.exports = new UserStorage();