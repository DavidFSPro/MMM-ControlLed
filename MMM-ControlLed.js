/* global Module */

/*  Magic Mirror
    Module: MMM-ControlLed
   
    David / FabLab LabHidouille by Familles Solidaires

    Created : 22-04-2021
    Revised : 23-04-2021
  
  MIT Licensed.
*/

Module.register("MMM-ControlLed", 
{
    defaults: 
    {
        NameComposant: "Led",
        delaiLOn:2,
        delaiLOff:2,
        notificationMMMPins:"SWITCH_LED",
    },

    start: function () 
    {
    },

    getDom: function() 
    {
        var element = document.createElement("div");
        element.id = "EtatLed";
        element.innerHTML = "Etat : " + this.config.NameComposant ;

        return element;
    },

    // messages reçus d'autres modules et du système (PAS de votre node_helper)
	// le payload est une structure de données dépendant de la notification
    notificationReceived: function(notification,payload,sender) 
    {
        switch(notification)
        {
            case "DOM_OBJECTS_CREATED": // notif de création du dom
                
                // fonction de délai
                function sleep(ms)
                {
                    return new Promise(resolve => setTimeout(resolve,ms));
                }

                var timer = setInterval(()=>
                {
                    // appel à la fonction de délai
                    sleep(0.001 * 1000)
                        .then(()=>
                        {
                            sleep(this.config.delaiLOff * 1000).then(()=>
                            {
                                console.log("envoi allume_led");
                                this.sendSocketNotification("ALLUME_LED");
                            })
                        })
                        .then(()=>
                        {
                            sleep(this.config.delaiLOn * 1000).then(()=>
                            {
                                console.log("envoi Eteint_led");
                                this.sendSocketNotification("ETEINT_LED");
                            })
                        });
                }, (this.config.delaiLOn+this.config.delaiLOff+0.001) * 1000);
            break;
        }
    },

    // Messages reçus de votre node_helper (PAS d'autres modules ou du système).
	// le payload est une structure de données dépendant de la notification, à vous de la concevoir entre le module et le node_helper. 
    socketNotificationReceived: function(notification, payload) 
    {
        switch(notification)
        {
            case "Led_ON":
                console.log("Notif On");
                this.sendNotification(this.config.notificationMMMPins);
                var elem = document.getElementById("EtatLed");
                elem.innerHTML = "Etat : " + this.config.NameComposant + " " + payload;
            break;

            case "Led_OFF":
                console.log("Notif Off");
                this.sendNotification(this.config.notificationMMMPins);
                var elem = document.getElementById("EtatLed");
                elem.innerHTML = "Etat : " + this.config.NameComposant + " " + payload;
            break;
        }
    },
})
