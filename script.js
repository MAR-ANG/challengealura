const  ingresoTexto = document.getElementById("ingresoTexto");

const  botonEncriptar = document.getElementById("botonEncriptar");

const  botonDesencriptar = document.getElementById("botonDesencriptar");

const  botonCopia = document.getElementById("botonCopia");

const  mensajeFinal = document.getElementById("mensajeFinal");

const munheco = document.getElementById("munheco");

const derInfo = document.getElementById("derInfo");

const derInfo2 = document.getElementById("derInfo2");


let remplazar =[
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],


]

const rempla =(nuevoValor)=> {

    mensajeFinal.innerHTML = nuevoValor;

    munheco.style.display ="none";
    derInfo.style.display ="none";
    derInfo2.style.display ="none";
}


botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function encriptar(newText){
        for (let i =0; i < remplazar.length; i++)
        {
            if(newText.includes(remplazar[i][0]))
            {
                newText = newText.replaceAll(remplazar[i][0], remplazar [i][1]);
            };


        };
            return newText;
    }

    //const textoEncriptado = encriptar(texto);


    rempla(encriptar(texto));

}) 

    botonDesencriptar .addEventListener("click", ()=>{

        const texto= ingresoTexto.value.toLowerCase();
        function desencriptar(newText)
        {
            for (let i = 0; i < remplazar.length; i++)
            {
                if(newText.includes(remplazar[i][1]))
                {
                    newText = newText.replaceAll(remplazar[i][1], remplazar [i][0]);
                };

            };
         return newText;
        }
        rempla(desencriptar(texto));
    })
   
    botonCopia.addEventListener("click", () => {

        let texto = mensajeFinal;
        navigator.clipboard.writeText(texto.value);

    })






