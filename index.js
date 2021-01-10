const calcy = () =>{
    let phy = document.getElementById('phy').value;
    let chem = document.getElementById('chem').value;
    let math = document.getElementById('math').value;
    let comp = document.getElementById('comp').value;
    let grades = "";
  
  
    let totalGrades = parseFloat(phy) + parseFloat(chem) + parseFloat(math) + parseFloat(comp);
    
  
    let perc = (totalGrades/400) * 100;
    
  
    debugger;
  
    if(perc <= 100  && perc >= 80){
      grades = 'A';
    }else if(perc <= 79  && perc >= 60){
       grades = 'B';
    }else if(perc <= 59  && perc >= 40){
       grades = 'C';
    }else{
       grades = 'F';
    }
  
    if(perc >= 35){
      document.getElementById('Grade').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }
    else{
      document.getElementById('Grade').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }
  
    
  }
  
  
  