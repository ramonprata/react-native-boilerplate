export default {
  UNKNOWN_ERROR: { status: '000', DEFAULT_MESSAGE: 'Ops. Algo deu errado', details: null },
  INTERNAL_ERROR: { status: '500', DEFAULT_MESSAGE: 'Erro interno no sistema', details: null },
  ACCESS_DENIED: { status: '403', DEFAULT_MESSAGE: 'Acesso negado', details: null },
  BAD_REQUEST: { status: '400', DEFAULT_MESSAGE: '...', details: null },
  NOT_FOUND: { status: '404', DEFAULT_MESSAGE: 'Recurso não encontrado', details: null },
};
