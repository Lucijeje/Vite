export const radio = [
    { 
      name: "Evropa 2",
      frequency: "88.6 FM",
      description: "Evropa 2 je nejposlouchanější česká komerční rádio mezi mladými posluchači. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.",
      link: "/evropa2.html",
    },
    { 
      name: "Frekvence 1",
      frequency: "102.1 FM",
      description: "Frekvence 1 je česká soukromá rozhlasová stanice, která vysílá od roku 1991. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.",
      link: "/frekvence1.html",
    },
    { 
      name: "Radiožurnál",
      frequency: "92.6 FM",
      description: "Radiožurnál je česká rozhlasová stanice Českého rozhlasu. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.",
      link: "/radiozurnal.html",
    },      
  ];

  export const renderNavigation = () => {
    const navigace = document.querySelector("header");
    radio.forEach((rad)=> {
        navigace.innerHTML += 
       ` <li><a href="${rad.link}">${rad.name}</a></li>`
    })
    }

    export const renderStation = (index) => {

        document.body.innerHTML += `
        
        <h1> ${radio[index].name}</h1>
        <p>${radio[index].description} </p>
        <p>${radio[index].frequency} </p>
        `
        }