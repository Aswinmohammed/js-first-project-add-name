
        function addName(){

            var firstName = document.getElementById("first_name")

            var lastName =  document.getElementById("last_name")
            
            var displayName =  document.getElementById("full_name")

            displayName.innerHTML = firstName.value + "  " + lastName.value
        
        }