
/**
 * @api {post} /api/public/processosAtivos/consultarPorNumeroProcesso consultarPorNumeroProcesso
 * @apiName consultarPorNumeroProcesso
 * @apiDescription Consulta Processos ativos por número de processo.
 * @apiGroup processo-ativo
 * @apiVersion 1.0.0
 * @apiParam {String} numeroProcesso Número do processo (0000-000000/0000).
 * @apiSuccess (Sucesso 200) {Integer} [ano] Ano do processo.
 * @apiSuccess (Sucesso 200) {String} [codigoAssunto] Código do assunto.
 * @apiSuccess (Sucesso 200) {String} [dadosOrigem] Dados de origem.
 * @apiSuccess (Sucesso 200) {String} [dataAcatamento] Data de acatamento do processo.
 * @apiSuccess (Sucesso 200) {String} [dataProtocolo] Data do protocolo.
 * @apiSuccess (Sucesso 200) {String} [descricaoAssunto] Descrição do assunto.
 * @apiSuccess (Sucesso 200) {String} [descricaoOrgao] Descrição do órgão.
 * @apiSuccess (Sucesso 200) {String} [nomeInteressado] Nome do interessado.
 * @apiSuccess (Sucesso 200) {Integer} [numeroInscricao] Número de inscrição.
 * @apiSuccess (Sucesso 200) {Integer} [numeroProtocolo] Número de protocolo.
 * @apiSuccess (Sucesso 200) {String} [observacao] Observação.
 * @apiSuccess (Sucesso 200) {Integer} [orgao] Órgão.
 * @apiSuccess (Sucesso 200) {String} [setor] Setor.
 * @apiSuccess (Sucesso 200) {String} [situacao] Situação do protocolo.
 * @apiSuccess (Sucesso 200) {String} [tipoInscricao] Tipo de inscrição.
 * @apiSuccess {String} [ultimaMovimentacao] Data de Última movimentação.
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
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/api/public/processosAtivos/consultarPorNumeroProcesso"
 * }
 */