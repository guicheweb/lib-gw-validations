// VALIDAÇÃO DO NUMERO DO CARTÃO ==============================
const CardNumber = (cardNumber: string): boolean => {
  // Remover espaços em branco e caracteres não numéricos da entrada
  let cleanStr = cardNumber.replace(/\s+/g, '').replace(/\D/g, '');

  // Verificar se a string limpa é vazia ou tem apenas um caractere não numérico
  if (cleanStr.length !== 16 || !/^\d+$/.test(cleanStr)) {
      console.log('❌ numera cartao invalido');
      return false;
  }

  let sum = 0; // Inicializar a soma dos dígitos
  let isEven = false; // Variável para determinar se estamos em uma posição par ou ímpar

  // Loop reverso através dos dígitos da string
  for (let i = cleanStr.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanStr.charAt(i), 10); // Obter o dígito atual

      if (isEven) {
          digit *= 2; // Dobrar o dígito se estiver em uma posição par
          if (digit > 9) {
              digit -= 9; // Se o resultado for maior que 9, subtrair 9
          }
      }

      sum += digit; // Adicionar o dígito à soma total
      isEven = !isEven; // Alternar entre posições par e ímpar
  }

  return sum % 10 === 0; // Verificar se a soma total é um múltiplo de 10 (válido)
}

// VALIDAÇÃO DA DATA DE EXPIRAÇÃO ==============================
const CardExpirationDate = (month: number, year: number): boolean => {
  // Obter o ano atual
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  // Valida o ano
  if (year < currentYear) {
      console.log('❌ ano invalido');
      return false;
  }

  // Valida o mes
  if (year === currentYear && month < currentMonth) {
      console.log('❌ mes invalido');
      return false;
  }

  // Retorna true se a data de expiração for válida
  return true;
}

// VALIDAÇÃO DO CVV ==================================================
const CardCvv = (cvv: string): boolean => {
  if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
    console.log('❌ cvv invalido');
    return false;
  }

  return true
}

// VALIDAÇÃO DO NOME ==============================
const CardName = (name: string): boolean => {
  if (name.length < 3) {
    console.log('❌ Nome invalido', name);
    return false;
  }

  // Verifica se o nome corresponde à expressão regular
  return true;
}

export const payment = {
  CardNumber,
  CardExpirationDate,
  CardCvv,
  CardName
}