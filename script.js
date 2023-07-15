let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee => {
        if(employee.profession == "developer"){
            console.log(employee);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee=>{
        if(employee.profession == "developer"){
            console.log(employee);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(employee => employee.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const arr2 = [
        { id: 4, name: "vsp", age: "22", profession: "designer" },
        { id: 5, name: "dsp", age: "24", profession: "engineer" },
        { id: 6, name: "bsp", age: "21", profession: "analyst" }
      ];

      const newarr = arr.concat(arr2);
      console.log(newarr);

  }