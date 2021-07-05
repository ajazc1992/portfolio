//setInterval(() => {
    var porcentaje;
    var tope;
    var barras = document.getElementsByClassName("progress-bar progress-bar-striped progress-bar-animated");
    for (let index = 0; index < barras.length; index++) {
        porcentaje=0;
        tope=0;
        elemento = barras[index];
        var id = elemento.id;
        switch (id) {
           case 'mysql':
                   tope = 90;            
                    break;
            case 'maria':
                    tope = 80;            
                     break;
            case 'php':
                tope = 80;            
                break;
            case 'jsp':
                    tope = 80;            
                    break;
            case 'javascript':
                 tope = 80;            
                break;
            case 'css':
              tope = 70;            
             break;
            case 'joomla':
                tope = 70;            
               break;
            case 'wordpress':
                tope = 60;            
               break;
            case 'slim':
                tope = 60;            
               break;
            case 'laravel':
                tope = 50;            
               break;
            case 'jquery':
                tope = 80;            
               break;
            case 'angular':
                tope = 50;            
               break; 
            case 'boo':
                tope = 80;            
               break;
            case 'gumby':
                tope = 70;            
               break;
            case 'GIT':
                tope = 50;            
               break;
            default:
                break;
        }
         while(porcentaje<=tope){
             elemento.style.width = `${porcentaje}%`;    
             elemento.innerHTML=porcentaje+'%';
             porcentaje++;
         }
     }
    
    //},1500);
    


    
    

