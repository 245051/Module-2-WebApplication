class Employee1{
    private fname:string;
    private mname:string;
    private lname:string;
    constructor(fname:string,mname:string,lname:string)
    {
        this.fname=fname;
        this.mname=mname;
        this.lname=lname;
    }
    getMname():string{
        return this.mname;
    }
    
}
let e1 = new Employee1('a','b','c');
console.log(e1.getMname());



class Employee{
    private  readonly empno:number;
    private ename:string;
    private sal:number;
    private attendance:any;
    
    public getEmpno():number{
        return this.empno;
    }
    public getEname():string{
                return this.ename;
    }
    public getsal():number{
        return this.sal;
    }
    public getattendance():number{
        return this.attendance;
    }
    // constructor(){
    //     this.empno =101;
    //     this.ename="abc";
    //     this.sal=2000;
    //     this.attendance=16;
    

    // }
    constructor(empno:number,ename:string,sal:number,attendance:any){
        this.empno =empno;
        this.ename=ename;
        this.sal=sal;
        this.attendance=attendance;
    }
    print():void{
        console.log(this.empno,this.ename,this.sal,this.attendance);
    }
    

}
/*
var emp = new Employee();
var emp1 = new Employee();
    emp1.empno=102;
var emp2 = new Employee();
emp2.empno=103;*/
let emp= new Employee(1,'abc',3000,20);
let emp1=new Employee(2,'bbc',2000,30);
let emp2 = new Employee(3,'cde',3500,25);
emp.print();
emp2.print();
var emparray:Employee[]=[emp,emp1,emp2];
emparray.forEach((ar)=>{
    console.log(ar);
});