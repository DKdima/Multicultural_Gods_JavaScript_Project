function changeContent(deity) {
    var textElement = document.getElementById('text');
    var imageElement = document.getElementById('image');

    switch (deity) {
        case 'Anu':
            textElement.textContent = 'Es el dios del cielo, “an” significa en lengua sumeria cielo. Es un dios fundamental en muchos de los panteones de toda Mesopotamia, por ser considerado como un demiurgo, es decir, el dios creador del universo.';
            imageElement.src = 'Anu.jpg';
			break;
        case 'Enlil':
            textElement.textContent = 'Este dios siempre se ha considerado como el creador de la humanidad, siendo el sustituto de ANU con el tiempo, debido a que en las escrituras se acercaba más a los hombres. En el panteón acadio era su dios principal.';
            imageElement.src = 'Enlil.jpg';
            break;
        case 'Enki':
            textElement.textContent = 'el dios de la sabiduría y las artes. Su reino se encontraba debajo de la tierra firme, por ello era considerado además el señor del agua y la fertilidad, pues tenemos que tener en cuenta que las aguas eran las que dejaban las deposiciones de limo que abonaban las laderas de los ríos, fundamental para la agricultura en Mesopotamia.';
            imageElement.src = 'Enki.jpg';
            break;
        case 'Ningirsu':
            textElement.textContent = 'Era el dios protector de la ciudad de Lagash. Era conocido por ser una deidad muy guerrera y que se encargaba de eliminar a los demonios, por otro lado, también se le asimilaban las catástrofes naturales, como los huracanes.';
            imageElement.src = 'Ningirsu.jpg';
            break;
        case 'Ninhursag':
            textElement.textContent = 'Era una de las hijas de Anu y además fue la amante de Enki. Es la diosa de la medicina y la naturaleza. Según cuenta la mitología sumeria, fue la creadora de los humanos.';
            imageElement.src = 'Ninhursag.jpg';
            break;
        case 'Enbilulu':
            textElement.textContent = 'Es el dios de los canales y los ríos de Mesopotamia, por ello es un dios importante, por relacionarse de manera muy especial con la fertilidad y con la destrucción a la vez. Siendo un dios secundario, pues fue puesto a vigilar los ríos por Enki, tuvo muchos templos a lo largo del tiempo.';
            imageElement.src = 'Enbilulu.jpg';
            break;
        case 'Sin':
            textElement.textContent = 'Era el dios de la luna y todo lo relacionado con los cuerpos celestes, por tanto, nos encontramos ante el creador del universo para los pueblos semíticos. Era representado con un creciente lunar.';
            imageElement.src = 'Sin.jpg';
            break;
        case 'Shamash':
            textElement.textContent = 'El dios del sol y de la justicia, está muy relacionado con la mayoría de los reyes semíticos, con los cuales entablaba relación para hacerles saber lo que debían de hacer. De hecho, fue el que le entregó a Hammurabi el primer código de leyes.';
            imageElement.src = 'Shamash.jpg';
            break;
		case 'Ishtar':
            textElement.textContent = 'la diosa del sexo, la fertilidad, el amor, la guerra y la belleza. los griegos la asimilarían como atenea y afrodita. Además, sabemos que su planeta era Venus (las civilizaciones de Mesopotamia tuvieron grandes astrónomos, los cuales podían “predecir” alteraciones en el cosmos). Podía ser representada de varias maneras, dependiendo de la característica que se quisiera destacar de ella, por ello conocemos templos dedicados a la diosa guerrera y otros por ejemplo dedicados a la diosa de la fertilidad. En algunas representaciones la podemos encontrar con una estrella de dieciséis puntas, una flor, un león o una mujer y en otras ocasiones la encontraremos desnuda y con alas. en la zona de la costa siro-palestina fue asimilada como ANAT.';
            imageElement.src = 'Ishtar.jpg';
            break;	
        default:
            textElement.textContent = 'Es el dios del cielo, “an” significa en lengua sumeria cielo. Es un dios fundamental en muchos de los panteones de toda Mesopotamia, por ser considerado como un demiurgo, es decir, el dios creador del universo.';
            imageElement.src = 'Anu.jpg';
            break;
    }
}

var menuItems = document.getElementsByClassName('menu-item');
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(event) {
        event.preventDefault();

        var deity = this.textContent;
        changeContent(deity);
    });
}
changeContent('Ra');