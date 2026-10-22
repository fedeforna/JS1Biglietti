function compra(){
    let eta;
    do{
        eta = prompt("Inserire l'eta");
        console.log(eta);
    }while(eta == "");

    if(eta != null && eta >0){
        if(eta <= 5){
            alert("Il biglietto è gratuito");
            console.log("Il biglietto è gratuito");

        }else if(eta >=18 && eta<=25){
            alert("Il biglietto costa 3.5€");
            console.log("Il biglietto costa 3.5€");

        }else if(eta >= 50 && eta <=55){
            alert("Il biglietto costa 5€");
            console.log("Il biglietto costa 5€");
        }else if(eta>5 || eta<18 && eta>25 || eta<50 && eta>55){
            alert("Il biglietto costa 8€");
            console.log("Il biglietto costa 8€");
        }
    }else{
        alert("L'eta non e valida");
        console.log("L'eta non e valida");
    }
}