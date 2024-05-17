// DIGITO VERIFICADOR DO CPF ==============================
function calculateDigitalChecker(cpfBase: string) {
  let soma = 0;
  let peso = cpfBase.length + 1;

  for (let i = 0; i < cpfBase.length; i++) {
    soma += parseInt(cpfBase.charAt(i)) * peso;
    peso--;
  }

  const resto = soma % 11;
  let digito = 11 - resto;

  if (resto < 2) {
    digito = 0;
  }

  return digito;
}

// VALIDAÇÃO DO CPF ==============================
const cpf = (cpf: string): boolean => {
  const cpfNumbers = cpf.replace(/\D/g, '');

  if (cpfNumbers.length !== 11) {
    return false;
  }

  const cpfBase = cpfNumbers.substring(0, 9);

  const firstDigit = calculateDigitalChecker(cpfBase);

  const cpfComPrimeiroDigito = cpfBase + firstDigit.toString();

  const secondDigit = calculateDigitalChecker(cpfComPrimeiroDigito);

  return cpfNumbers.substring(9) === (firstDigit.toString() + secondDigit.toString());
}

export const docs = {
  cpf
}