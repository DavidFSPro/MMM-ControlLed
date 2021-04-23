/*  Magic Mirror
    Node Helper: MMM-ControlLed
     
    David / FabLab LabHidouille by Familles Solidaires

    Created : 22-04-2021
    Revised : 23-04-2021

    MIT Licensed.
*/

var NodeHelper = require("node_helper")

module.exports = NodeHelper.create
({

    start: function() //la fonction démarre en même temps que le module
    {
        console.log("Helper ControlLed Started");
    },

    socketNotificationReceived: function(notification, payload) 
    {
        switch(notification) 
        {
            case "ALLUME_LED":
                console.log("reçu allume_led");
                this.sendSocketNotification("Led_ON", "Allumé");
            break;
            case "ETEINT_LED":
                console.log("reçu éteint_led");
                this.sendSocketNotification("Led_OFF", "Eteinte");
            break;
        }
    },
})
