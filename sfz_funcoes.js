/**
 * @api {post} /sfz-habilitacao-aplicativo-api/api/public/autorizacao-aplicativo/solicitar solicitar
 * @apiName solicitar
 * @apiDescription Envia solicitação de acesso à SEFAZ/AL.
 * @apiGroup autorizacao
 * @apiVersion 1.0.0
 * @apiParam {String} login  Login do usuário na SEFAZ/AL.
 * @apiParam {String} nomeDispositivo  Nome do dispositivo cadastrado previamente.
 * @apiParam {String} tokenApp  Token de acesso do aplicativo.
 * @apiSuccess (Sucesso 200) {Integer} idAutorizacao Número identificador da autorização.
 * @apiSuccess (Sucesso 200) {String} urlAutorizacao Url de acesso da autorização.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *   "idAutorizacao": 20,
 *   "urlAutorizacao": "http://hackathonhabilitacao.sefaz.al.gov.br/"
 * }
 *
 */


/**
 * @api {post} /api/public/autenticar autenticar
 * @apiName autenticar
 * @apiDescription Solicita o acesso do aplicatvo à SEFAZ/AL.
 * @apiGroup autorizacao
 * @apiVersion 1.0.0
 * @apiParam {String} login  Login do usuário na SEFAZ/AL.
 * @apiParam {String} nomeDispositivo  Nome do dispositivo cadastrado previamente.
 * @apiParam {String} tokenApp  Token de acesso do aplicativo.
 * @apiSuccess (Sucesso 200) {Integer} codigo Código obtido ao solicitar autorização.
 * @apiSuccess (Sucesso 200) {String} mensagem Mensagem...
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *   "codigo": 20,
 *   "mensagem": "Autorização aplicativo pendente."
 * }
 *
 */
