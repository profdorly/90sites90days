const errorEl = document.querySelector("span");
const decimalEl = document.getElementById("decimal");

const checkIfIsBinary = (val) =>
  val.match(/^[0-1]+$/) ? makeConversion(val) : callError();

const callError = () => (errorEl.innerHTML = "Coloque apenas 0 ou 1");

const makeConversion = (bin) => {
  errorEl.innerHTML = "";
  let decimal = parseInt(bin, 2);
  decimalEl.value = decimal;
};
