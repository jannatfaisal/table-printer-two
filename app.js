
        function Printtable(){
            let tableNum= document.getElementById('numtoprint').value;
            let minilength=document.getElementById('minilength').value;
            let maxlength=document.getElementById('maxlenght').value;

            for(let i = minilength; i<= maxlength; i++){

               
                
                document.getElementById('visible').innerHTML += `${tableNum }X ${i}= ${tableNum*i} <br>`;
            }

        }

       


        function Refresh(){
            document.getElementById('numtoprint').value ="";
            document.getElementById('minilength').value ="";
            document.getElementById('maxlenght').value ="";
            document.getElementById('visible').innerHTML ="";
        }



        
        
