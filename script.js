var binary = document.getElementById("binary");

function btnCalc() {
  let bin = binary.value;
  let dec = 0;

  console.log(bin.length);

  for (let c = 0; c < bin.length; c++) {
    dec += Math.pow(2, c) * bin[bin.length - c - 1];
  }

  document.getElementById("resulted").innerHTML = dec;
}
