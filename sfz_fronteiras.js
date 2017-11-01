/**
 * @api {post} /sfz_fronteiras_api/api/public/termoApreensao/consultar consultar
 * @apiName consultar
 * @apiDescription Consulta os termos de apreensão de um determinado Contribuinte.
 * @apiGroup fronteiras
 * @apiVersion 1.0.1
 * @apiHeader {String} Authorization Chave única de acesso do usuário.
 * @apiParam {Integer} numeroCaceal Número da inscrição estadual do Contribuinte
 * @apiParam {String} periodoInicio Data de início da pesquisa.
 * @apiParam {String} periodoTermino Data de término da pesquisa.
 * @apiSuccess (Sucesso 200) {Integer} numeroTermo Número do termo.
 * @apiSuccess (Sucesso 200) {Integer} dataEmissao Data de emissão do termo.
 * @apiSuccess (Sucesso 200) {Integer} codigoStatus Código de status do termo.
 * @apiSuccess (Sucesso 200) {Integer} status Descrição do status do termo.
 * @apiSuccess (Sucesso 200) {Integer} posto Local do posto.
 * @apiSuccess (Sucesso 200) {Integer} numeroCaceal Número de incrição estadual.
 * @apiSuccess (Sucesso 200) {Integer} papel (Emitente/Adquirinte/Fiel Depositário/...).
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *   {
 *     "numeroTermo": 16081,
 *     "dataEmissao": "2017-08-10T14:18:48.000+0000",
 *     "codigoStatus": 12,
 *     "status": "Pendente",
 *     "posto": "INFRAESTRUTURA",
 *     "numeroCaceal": 24002198,
 *     "papel": "Emitente"
 *   }
 * ]
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz_fronteiras_api/api/public/termoApreensao/consultar"
 * }
 */

/**
 * @api {post} /sfz_fronteiras_api/api/public/dar/consultarAntecipado consultarAntecipado
 * @apiName consultarAntecipado
 * @apiDescription Consulta DAR antecipado e FECOEP.
 * @apiGroup fronteiras
 * @apiVersion 1.0.1
 * @apiHeader {String} Authorization Chave única de acesso do usuário.
 * @apiParam {Integer} numeroCaceal Número da inscrição estadual do Contribuinte
 * @apiParam {Integer} sequencialAntecipacao Número sequencial da antecipação.
 * @apiSuccess (Sucesso 200) {Object[]} antecipados Lista de valores antecipados.
 * @apiSuccess (Sucesso 200) {Integer} antecipados.numeroProcessamento Número sequencial de antecipação.
 * @apiSuccess (Sucesso 200) {Integer} antecipados.codigoTributo Data de vencimento.
 * @apiSuccess (Sucesso 200) {Double} antecipados.competencia Valor antecipado.
 * @apiSuccess (Sucesso 200) {Integer} antecipados.numeroCaceal Número de inscrição estadual.
 * @apiSuccess (Sucesso 200) {Integer} antecipados.dataEmissao Código do tributo.
 * @apiSuccess (Sucesso 200) {String} antecipados.dataPagamento Competência (mm/yyyy).
 * @apiSuccess (Sucesso 200) {String} antecipados.valorPrincipal Competência (mm/yyyy).
 * @apiSuccess (Sucesso 200) {String} antecipados.valorTotal Competência (mm/yyyy).
 * @apiSuccess (Sucesso 200) {String} antecipados.valorMulta Competência (mm/yyyy).
 * @apiSuccess (Sucesso 200) {String} antecipados.valorJuros Competência (mm/yyyy).
 * @apiSuccess (Sucesso 200) {String} antecipados.codigoBarras Competência (mm/yyyy).
 * @apiSuccess (Sucesso 200) {String} antecipados.sequencialAntecipacao Competência (mm/yyyy).
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *     {
 *         "numeroProcessamento": 3354841,
 *         "codigoTributo": 15423,
 *         "competencia": 200702,
 *         "numeroCaceal": 24002198,
 *         "dataEmissao": "2008-10-03T21:09:21.000+0000",
 *         "dataPagamento": null,
 *         "dataVencimento": "2007-03-20T03:00:00.000+0000",
 *         "valorPrincipal": 7753.7,
 *         "valorTotal": 7753.7,
 *         "valorMulta": 0,
 *         "valorJuros": 0,
 *         "codigoBarras": "85670000077 6 53700002200 5 70320000000 7 00335484119 3",
 *         "sequencialAntecipacao": 402801
 *     }
 * ]
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz_fronteiras_api/api/public/dar/consultarAntecipado"
 * }
 */

/**
 * @api {post} /sfz_fronteiras_api/api/public/antecipacao/consultarValoresAntecipados consultarValoresAntecipados
 * @apiName consultarValoresAntecipados
 * @apiDescription Consulta valores antecipado e FECOEP.
 * @apiGroup fronteiras
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization Chave única de acesso do usuário.
 * @apiParam {Integer} competencia Competência mm/aaaa
 * @apiParam {Integer} numeroCaceal Número da inscrição estadual do Contribuinte.
 * @apiSuccess (Sucesso 200) {Object[]} antecipados Lista de valores antecipados.
 * @apiSuccess (Sucesso 200) {String} antecipados.sequencialAntecipacao Número sequencial de antecipação.
 * @apiSuccess (Sucesso 200) {String} antecipados.dataVencimento Data de vencimento.
 * @apiSuccess (Sucesso 200) {Double} antecipados.valorAntecipado Valor antecipado.
 * @apiSuccess (Sucesso 200) {Integer} antecipados.numeroCaceal Número de inscrição estadual.
 * @apiSuccess (Sucesso 200) {Integer} antecipados.codigoTributo Código do tributo.
 * @apiSuccess (Sucesso 200) {String} antecipados.competencia Competência (mm/yyyy).
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *     {
 *         "sequencialAntecipacao": 402801,
 *         "dataVencimento": "2007-03-20T03:00:00.000+0000",
 *         "valorAntecipado": 7753.7,
 *         "numeroCaceal": 24002198,
 *         "codigoTributo": 15423,
 *         "competencia": "2/2007"
 *     }
 * ]
 * 
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz_fronteiras_api/api/public/antecipacao/consultarValoresAntecipados"
 * }
 */
