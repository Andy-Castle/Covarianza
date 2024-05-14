let x = [6, 4, 8, 9, 4, 8, 10, 9, 5, 6];

let y = [5, 5, 7, 5, 3, 8, 10, 8, 7, 6];

let XporYarray = [];

function uPromedio(array) {
  let sumArrAll = array.reduce((total, current) => {
    return total + current;
  });
  return sumArrAll / array.length;
}

let promedioDeX = uPromedio(x);

let promedioDeY = uPromedio(y);

console.log(promedioDeX);
console.log(promedioDeY);

function XporY(array1, array2) {
  for (let i = 0; i < array1.length && array2.length; i++) {
    XporYarray.push(array1[i] * array2[i]);
  }
}

XporY(x, y);

console.log(XporYarray);

function sumXporY(array) {
  let sumall = array.reduce((total, current) => {
    return total + current;
  });

  return sumall;
}

let sumaDeXporYCovarianza = sumXporY(XporYarray);

console.log(sumaDeXporYCovarianza);

function covarianzaTotal() {
  let resultado = sumaDeXporYCovarianza / x.length - promedioDeX * promedioDeY;
  return resultado.toFixed(2);
}

console.log(covarianzaTotal());
