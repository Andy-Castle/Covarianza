let x = [6, 4, 8, 9, 4, 8, 10, 9, 5, 6];

let y = [5, 5, 7, 5, 3, 8, 10, 8, 7, 6];

function formulaCovarianza(array1, array2) {
  let XporYarray = [];

  let PromedioDeX = array1.reduce((total, current) => {
    return total + current;
  });

  PromedioDeX = PromedioDeX / array1.length;

  console.log("Promedio de X: ", PromedioDeX);

  let PromedioDeY = array2.reduce((total, current) => {
    return total + current;
  });

  PromedioDeY = PromedioDeY / array2.length;

  console.log("Promedio de X: ", PromedioDeY);

  for (let i = 0; i < array1.length && array2.length; i++) {
    XporYarray.push(array1[i] * array2[i]);
  }

  console.log("Array: ", XporYarray);

  let sumall = XporYarray.reduce((total, current) => {
    return total + current;
  });

  console.log(sumall);

  let resultado = sumall / array1.length - PromedioDeX * PromedioDeY;

  return resultado.toFixed(2);
}

console.log(formulaCovarianza(x, y));
