 webiopi().ready(function() {
        		webiopi().setFunction(2,"out");
        		webiopi().setFunction(17,"out");
        		    
        		
        		var content, button;
        		content = $("#content");
        		
        		button = webiopi().createGPIOButton(2,"Relay 1");
        		content.append(button);
        		
        		button = webiopi().createGPIOButton(17,"Relay 2");
        		content.append(button);   		
        		
   });