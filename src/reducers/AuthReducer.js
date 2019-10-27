const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  erro: ''
}

// o state jamais é definido diretamente (a single source of truth)

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type){

    case 'modify_name':
      return {...state, name: action.payload}; 
      // operador spread(...) permite "espalhar" elementos de um array/object[babel]

    case 'modify_email':
      return {...state, email: action.payload}; 
      // evolui state por meio do spread + payload da action

    case 'modify_password':
      return {...state, password: action.payload}; 
      // altera password sem alterar as demais keys (clona todas e altera especifica)
    case 'register_sucess':
      return {...state, password: ''};
      // Apagar a senha para a tela do login
    case 'register_erro':
      return {...state, erro: action.payload};
      // Altera a mensagem de erro
  }
  return state;
}