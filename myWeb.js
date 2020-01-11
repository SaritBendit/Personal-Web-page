let buttons = [ "About Me" , "CV"  , "Projects" ];

let CreateButtons = () =>{

    for (const button of buttons) {
        let newElement = `<a>${button}</a>`;
        $(".side-bar").append(newElement);
       $(".side-bar>a").addClass("link");

          
    }
}
CreateButtons();