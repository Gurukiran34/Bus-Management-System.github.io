export class User{
    public userId:number=0;
    public userName:string;
    public userPassword:string;
    public userEmail:string;
    public dob:Date;
    public about:string;
    public role:string;
  
    constructor(userId:any,userName:any,userPassword:any,email:any, dob:any, about:any, role:any)
    {
     this.userId=userId;
      this.userName=userName;
      this.userEmail=email;
      this.userPassword=userPassword;
      this.dob=dob;
      this.about=about;
      this.role=role;
    }
}