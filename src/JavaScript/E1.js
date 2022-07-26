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

    // CSV files gets tear appart by the line jumps
    const outputVal = csv.split('\n');
    let person = {};
    let people = [];
    let nAttrs_i = nAttrs;

    // The first line of the csv is saved
    const dataName = outputVal[0].split(',');

    // If the number of atributes is not added or the value is more than the total number of these,
    // the program will show all the attributes that exists
    if (nAttrs_i === undefined || nAttrs_i > dataName.length) nAttrs_i = dataName.length;

    // All the array's entries get read and then the values that we want are added to an array
    for (let i = 1; i < outputVal.length; i++) {

        const dataValues = outputVal[i].split(',');

        for (let x = 0; x < nAttrs_i; x++) {
            person[dataName[x]] = dataValues[x];
        }

        people.push(person);
    }

    // Return the final array
    return people;
};

// Showing the log
const result = fromCSV(data, 6);
console.log(result);