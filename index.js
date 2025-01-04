let students = [
    {
        firstName: "Khaled",
        lastName: "Dalwan",
        age: 32,
        year: "1992",

        printFullName: function(){
            console.log(this.firstName + " " + this.lastName);
            
        }
    },
    {
        firstName: "Belal",
        lastName: "Dalwan",
        age: 31,
        year: "1993",

        printFullName: function(){
            console.log(this.firstName + " " + this.lastName);
            
        }
    },
    {
        firstName: "Hassaan",
        lastName: "Dalwan",
        age: 29,
        year: "1995",

        printFullName: function(){
            console.log(this.firstName + " " + this.lastName);
            
        }
    },
    {
        firstName: "Huthaifa",
        lastName: "Dalwan",
        age: 26,
        year: "1998",

        printFullName: function(){
            console.log(this.firstName + " " + this.lastName);
            
        }
    },
    {
        firstName: "Moaz",
        lastName: "Dalwan",
        age: 23,
        year: "2001",

        printFullName: function(){
            console.log(this.firstname + " " + this.lastName);
            
        }
    }

]

for (st of students){
    let content = `<tr> 
                        <td> ${st.firstName} </td> 
                        <td> ${st.age} </td> 
                        <td> ${st.year} </td> 
                    </tr>`
    document.getElementById("students").innerHTML += content
}