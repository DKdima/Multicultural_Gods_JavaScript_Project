function changeContent(deity) {
    var textElement = document.getElementById('text');
    var imageElement = document.getElementById('image');

    switch (deity) {
        case 'Zeus':
            textElement.textContent = 'Hijo de Cronos y Rea, era el más joven de sus descendientes. En la mayoría de las tradiciones aparece casado con Hera (su hermana y esposa, que engañó siendo un pájaro para casarse) aunque en el oráculo de Dódona su esposa era Dione, con quien según la Ilíada es padre de Afrodita. Es conocido por sus numerosas aventuras y amantes, fruto de las cuales fueron muchas deidades y héroes. En la mitología griega, Zeus es una divinidad a la que se denomina a veces con el título de «padre de los dioses y los hombres» ,que gobierna a los dioses del Olimpo como un padre a una familia, de forma que incluso los que no eran sus hijos naturales se dirigen a él como tal. Es el rey de los dioses y supervisa el universo.3Es el dios del cielo y el trueno y por ende de la energía. Entre sus atributos se incluyen el cetro y la corona (como símbolos de su poder), el rayo, el águila, el toro y el roble.';
            imageElement.src = 'Zeus.jpg';
			break;
        case 'Hera':
            textElement.textContent = 'Hera es la esposa y hermana de Zeus en el panteón olímpico de la mitología griega clásica. Su equivalente en la mitología romana era Juno. Se le sacrificaban la vaca y más tarde el pavo real. Su madre era Rea y su padre Cronos. Hera fue conocida por su naturaleza violenta y vengativa, principalmente contra las amantes y la descendencia de Zeus, pero también contra los mortales con los que se cruzaba. Se representa a Hera solemne, a menudo en el trono y coronada con el polos (una alta corona cilíndrica usada por varias de las Grandes diosas), pudiendo llevar en su mano una granada, símbolo de la fértil sangre y la muerte, o una cápsula narcótica de amapola.';
            imageElement.src = 'Hera.jpg';
            break;
        case 'Poseidon':
            textElement.textContent = 'Es el dios de los mares y de los terremotos en la mitología griega. El nombre del dios marino etrusco Nethuns fue adoptado en latín para Neptuno (Neptunus) en la mitología romana, siendo ambos dioses del mar análogos a Poseidón. Poseidón fue venerado en Pilos y Tebas en la Grecia micénica de finales de la Edad del Bronce, pero fue integrado en el panteón olímpico posterior como hermano de Zeus y Hades. Poseidón tuvo muchos hijos y fue protector de muchas ciudades helenas, aunque perdió el concurso por Atenas contra Atenea. Le fue dedicado un himno homérico. Al igual que otros dioses marinos era representado con la forma de un caballo. Poseidón era un importante dios municipal de varias ciudades: en Atenas, era el segundo en importancia por detrás solo de Atenea, mientras en Corinto y en muchas ciudades de la Magna Grecia era el dios jefe de la polis. En su aspecto benigno, Poseidón se concebía creando nuevas islas y ofreciendo mares en calma.';
            imageElement.src = 'Poseidon.jpg';
            break;
        case 'Hades':
            textElement.textContent = 'Alude tanto al antiguo inframundo griego como al dios de este. La palabra hacía referencia en Homero solo al dios. Finalmente, también el nominativo llegó a designar la morada de los muertos. Hades es el mayor hijo varón de Cronos y Rea. Según el mito, él y sus hermanos Zeus y Poseidón derrotaron a los Titanes y reclamaron el gobierno del cosmos, adjudicándose el inframundo, el cielo y el mar, respectivamente; la tierra sólida, desde mucho antes provincia de Gea, estaba disponible para los tres al mismo tiempo. Hades también era llamado Plouton , nombre que los romanos latinizaron como Plutón.';
            imageElement.src = 'Hades.jpg';
            break;
        case 'Demeter':
            textElement.textContent = 'es la diosa griega de la agricultura, nutricia pura de la tierra verde y joven, ciclo vivificador de la vida y la muerte. Se la venera como la portadora de las estaciones en un himno homérico, un sutil signo de que era adorada mucho antes de la llegada de los olímpicos. El himno homérico a Deméter data aproximadamente del siglo vii​ Junto a su hija Perséfone eran los personajes centrales de los misterios eleusinos que también precedieron al panteón olímpico. En la mitología romana se asociaba a Deméter con Ceres. Cuando se le dio a Deméter una genealogía, se dijo que era hija de los titanes Crono y Rea (ambos hijos de Gea y Urano), y por tanto hermana mayor de Zeus. A sus sacerdotisas se les daba el título de Melisas.';
            imageElement.src = 'Demeter.jpg';
            break;
        case 'Atenea':
            textElement.textContent = 'Atenea era la diosa de la sabiduría, la guerra y los oficios, e hija predilecta de Zeus. Era, quizás, la más sabia, la más valiente y, desde luego, la más ingeniosa de los dioses del Olimpo. Atenea recibió culto en toda la Grecia Antigua y en toda su área de influencia, desde las colonias griegas de Asia Menor hasta las de la península ibérica y el norte de África. Su presencia está atestiguada hasta en las proximidades de la India. Por ello su culto tomó muchas formas e incluso tuvo una extensión considerable hasta el punto de que su figura fue sincretizada con otras divinidades en las regiones aledañas al Mediterráneo. En la mitología romana se la adoraba con el nombre de Minerva.';
            imageElement.src = 'Atenea.jpg';
            break;
        case 'Artemisa':
            textElement.textContent = 'Fue una de las deidades más veneradas y de las más antiguas. Es la diosa helena de la caza, los animales salvajes, el terreno virgen, los nacimientos, la virginidad y las doncellas, que traía y aliviaba las enfermedades de las mujeres. Hija de Zeus y Leto, y hermana gemela de Apolo, forma parte del panteón de los doce dioses olímpicos. A menudo se la representaba como una cazadora llevando un arco y flechas. El ciervo y el ciprés le estaban consagrados.';
            imageElement.src = 'Artemisa.jpg';
            break;
        case 'Apolo':
            textElement.textContent = 'Es una de las deidades principales de la mitología griega, y uno de los dioses olímpicos más significativos, motivo por el cual le dedicaron una gran cantidad de templos. Hijo de Zeus y Leto, y gemelo de Artemisa, poseía muchos atributos y funciones, y posiblemente después de Zeus fue el dios masculino más influyente y venerado de todos los de la Antigüedad clásica. Es descrito como el dios de las artes, del arco y la flecha, que amenazaba o protegía desde lo alto de los cielos, siendo identificado con la luz de la verdad. Era temido por los otros dioses y solamente su padre y su madre podían contenerlo. Es el dios de la muerte súbita, de las plagas y enfermedades, pero también el dios de la curación y de la protección contra las fuerzas malignas.';
            imageElement.src = 'Apolo.jpg';
            break;
		case 'Afrodita':
            textElement.textContent = 'Es, en la mitología griega, la diosa de la belleza, la sensualidad y el amor. Su equivalente romano es Venus. Aunque a menudo se alude a ella en la cultura moderna como «la diosa del amor», es importante señalar que antiguamente no se refería al amor en el sentido romántico sino erótico. Pese a que en la mitología estaba casada con Hefesto, tuvo otros amantes, siendo Ares su favorito, y tuvo también relaciones con Hermes por solo mencionar. Junto a sus hermanos, ocupaba un lugar en el panteón entre los doce dioses olímpicos.';
            imageElement.src = 'Afrodita.jpg';
            break;
		case 'Hefesto':
            textElement.textContent = 'Es el dios de la forja y del fuego, así como de los herreros, los artesanos, los escultores, los metales y la metalurgia. Era adorado en todos los centros industriales y manufactureros de Grecia, especialmente en Atenas. Su equivalente aproximado en la mitología romana era Vulcano, en la japonesa Kagutsuchi, en la egipcia Ptah y en la hindú Agni. Hefesto era bastante feo, Hefesto estaba lisiado y cojo; aunque su esposa era Afrodita. Incluso el mito dice que, al nacer, Hera lo vio tan feo que lo tiró del Olimpo y le provocó una cojera. Tanto es así, que caminaba con la ayuda de un bastón y, en algunas vasijas pintadas, sus pies aparecen a veces al revés.';
            imageElement.src = 'Hefesto.jpg';
			break;	
		case 'Ares':
            textElement.textContent = 'Hijo de Zeus y Hera, es el dios olímpico de la guerra. En la guerra representa la brutalidad, la violencia y los horrores de las batallas.1​ Como dios de la virilidad masculina a lo largo de la mitología se han contabilizado unas treinta amantes mujeres, con una descendencia de alrededor de 60 hijos . Afrodita, diosa del amor y la belleza, era su amante preferida, su sanadora y aliada en la guerra. Su equivalente romano es Marte.';
            imageElement.src = 'Ares.jpg';
			break;
		case 'Hermes':
            textElement.textContent = 'Es el dios olímpico mensajero, de las fronteras y los viajeros que las cruzan, del ingenio y del comercio en general, de la astucia, de los ladrones y los mentirosos, y el que guía las almas en el inframundo, el Hades. En la posterior mitología romana era denominado como Mercurio. Hijo de Zeus y la pléyade Maya. El himno homérico a Hermes lo invoca como el «de multiforme ingenio (polytropos), de astutos pensamientos, ladrón, cuatrero de bueyes, jefe de los sueños, espía nocturno, guardián de las puertas, que muy pronto habría de hacer alarde de gloriosas hazañas ante los inmortales dioses.';
            imageElement.src = 'Hermes.jpg';
			break;
		case 'Hestia':
            textElement.textContent = 'Era una de las diosas olímpicas. Hija de Cronos y Rea, personificaba el fuego del hogar. Hestia apenas salía del Olimpo, y nunca se inmiscuía en las disputas de los dioses y los seres humanos, por lo que paradójicamente pocas veces aparece en los relatos mitológicos a pesar de ser una de las principales diosas de la religión griega y, posteriormente, romana.';
            imageElement.src = 'Hestia.jpg';
			break;	
		case 'Dionisio':
            textElement.textContent = 'Es uno de los considerados dioses olímpicos, dios de la fertilidad y el vino. Considerado hijo de Zeus y Sémele, nieto de Harmonía y bisnieto de Afrodita, sin embargo, otras versiones afirman que era hijo de Zeus y Perséfone. Dioniso era inspirador de la locura ritual y el éxtasis, y se convirtió gradualmente en un personaje importante de la mitología griega. Aunque los orígenes geográficos de su culto son desconocidos, casi todas las tragedias lo presentan como extranjero. Es el dios patrón de la agricultura y el teatro. También es conocido como el ‘Salvador’ y ‘Libertador’.';
            imageElement.src = 'Dionisio.jpg';
			break;				
        default:
            textElement.textContent = 'Hijo de Cronos y Rea, era el más joven de sus descendientes. En la mayoría de las tradiciones aparece casado con Hera (su hermana y esposa, que engañó siendo un pájaro para casarse) aunque en el oráculo de Dódona su esposa era Dione, con quien según la Ilíada es padre de Afrodita. Es conocido por sus numerosas aventuras y amantes, fruto de las cuales fueron muchas deidades y héroes. En la mitología griega, Zeus es una divinidad a la que se denomina a veces con el título de «padre de los dioses y los hombres» ,que gobierna a los dioses del Olimpo como un padre a una familia, de forma que incluso los que no eran sus hijos naturales se dirigen a él como tal. Es el rey de los dioses y supervisa el universo.3Es el dios del cielo y el trueno y por ende de la energía. Entre sus atributos se incluyen el cetro y la corona (como símbolos de su poder), el rayo, el águila, el toro y el roble.';
            imageElement.src = 'Zeus.jpg';
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
changeContent('Zeus');