const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
82739790,Alvaro,Alvarez,male,alvaro.alvarez@example.com,https://randomuser.me/api/portraits/men/48.jpg
37206344,Adrian,Pastor,male,adrian.pastor@example.com,https://randomuser.me/api/portraits/men/86.jpg
58054375,Fatima,Guerrero,female,fatima.guerrero@example.com,https://randomuser.me/api/portraits/women/74.jpg
35133706,Raul,Ruiz,male,raul.ruiz@example.com,https://randomuser.me/api/portraits/men/78.jpg
79300902,Nerea,Santos,female,nerea.santos@example.com,https://randomuser.me/api/portraits/women/61.jpg
89802965,Andres,Sanchez,male,andres.sanchez@example.com,https://randomuser.me/api/portraits/men/34.jpg
62431141,Lorenzo,Gomez,male,lorenzo.gomez@example.com,https://randomuser.me/api/portraits/men/81.jpg
05298880,Marco,Campos,male,marco.campos@example.com,https://randomuser.me/api/portraits/men/67.jpg
61539018,Marco,Calvo,male,marco.calvo@example.com,https://randomuser.me/api/portraits/men/86.jpg`;

const fromCSV = (csv, nAttrs) => {

    // Separamos el csv por los saltos de linea y creamos un array y un diccionario
    const outputVal = csv.split('\n');
    let person = {};
    let people = [];

    // Separamos la primera linea del array
    const dataName = outputVal[0].split(',');

    // Si no se introduce la cantidad de atributos o se piden mostrar mas valores de los que hay, se mostraran los atributos que existan
    if (nAttrs === undefined || nAttrs > dataName.length) nAttrs = dataName.length;

    // Recorremos cada uno de las entradas del array con datos de personas
    // Separamos los valores, metiendolos en un array y despues se anhade al array final
    for (let i = 1; i < outputVal.length; i++) {

        const dataValues = outputVal[i].split(',');

        for (let x = 0; x < nAttrs; x++) {
            person[dataName[x]] = dataValues[x];
        }

        people.push(person);
    }

    // Devolvemos el array con todos los datos
    return people;
};

// Mostramos en el log
const result = fromCSV(data, 6);
console.log(result);