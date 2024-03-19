class User{

   constructor(name,email){
    this.name = name;
    this.email = email;
   }

    viewData(){
        console.log("Website Data");
    }
}

class Admin extends User{
    editData(){

    }
}

let stu1 = new User("Jatin","gargjatin519@gmail.com");