//Punto 1
async function getCurrencyChange(){
  const res = await fetch("https://mindicador.cl/api")
  const data = await res.json()
  console.log(data);
  }
  getCurrencyChange()
  

//Punto 2-3
const currencyName = {
  dolar: "Dólar",
  dolar_intercambio: "Dólar intercambio",
  euro: "Euro",
  bitcoin: "Bitcoin",
  uf: "UF",
  utm: "UTM",
  ivp: "IVP",
  ipc: "IPC",
  imacec: "IMACEC",
  libra_cobre: "Libra cobre",
  tasa_desempleo: "Tasa desempleo",
  tpm: "TPM",
};

async function convert() {
  const selector = document.querySelector("#coin");
  const selectedCurrency = selector.value;

  if (selectedCurrency === "Select currency") {
    alert("Please select currency");
    return;
  }

  try {
    const res = await fetch(`https://mindicador.cl/api/${selectedCurrency}`);
    const data = await res.json();
    const pesos = Number(document.querySelector("#clp").value);
    const coinValue = Number(data.serie[0].valor);

    const conversion = (pesos * coinValue).toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
    const showCurrency =
      currencyName[selectedCurrency] || selectedCurrency;

    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `Resultado: ${showCurrency.toUpperCase()} ${conversion}`;
  } catch (error) {
    alert(error.message);
  }
};

async function getNewError() {
  try {
  const res = await fetch("https://mindicador.cl/api");
  const data = await res.json();
  console.log(data);
  } catch (e) {
  alert(e.message);
  }
  }
  getNewError();
  