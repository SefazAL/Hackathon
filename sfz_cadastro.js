/**
 * @api {get} /cadastro/api/public/contribuinte/obterRestricoes obterRestricoes
 * @apiName obterRestricoes
 * @apiDescription Obtem as restrições cadastrais de um contribuinte.
 * @apiGroup contribuinte
 * @apiVersion 1.0.0
 * @apiParam {Integer} caceal Número da inscrição estadual do Contribuinte.
 * @apiHeader {String} token Chave única de acesso do usuário.
 * @apiSuccess (Sucesso 200) {String} codigoTipoRestricao Código do tipo de restrição.
 * @apiSuccess (Sucesso 200) {String} dataCompetencia Data e hora de competência.
 * @apiSuccess (Sucesso 200) {String} descricaoRestricao Descrição da restrição.
 * @apiSuccess (Sucesso 200) {Double} id ??.
 * @apiSuccess (Sucesso 200) {Integer} numeroCaceal CACEAL.
 * @apiSuccess (Sucesso 200) {Double} numeroPessoa Número identificador da pessoa jurídica.
 * @apiSuccess (Sucesso 200) {Object[]} restricao Natureza Jurídica do contribuinte.
 * @apiSuccess (Sucesso 200) {Integer} restricao.codigo Código da Natureza Jurídica do contribuinte.
 * @apiSuccess (Sucesso 200) {String} restricao.descricao Descrição da Natureza Jurídica do contribuinte.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *   {
 *     "codigoTipoRestricao": "string",
 *     "dataCompetencia": "2017-08-16T12:45:53.384Z",
 *     "descricaoRestricao": "string",
 *     "id": 0,
 *     "numeroCaceal": 0,
 *     "numeroPessoa": 0,
 *     "restricao": {
 *       "codigo": 0,
 *       "descricao": "string"
 *     },
 *     "solucao": "string"
 *   }
 * ]
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-03T12:01:17.964+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/api/public/contribuinte/obterRestricoes/0"
 * }
 */

/**
 * @api {get} /cadastro/api/public/contribuinte/obterContribuinte obterContribuinte
 * @apiName obterContribuinte
 * @apiDescription Obtem os dados de um contribuinte.....
 * @apiGroup contribuinte
 * @apiVersion 1.0.0
 * @apiParam {Integer} cnpjOuCaceal  CNPJ ou Caceal.
 * @apiHeader {String} token Chave única de acesso do usuário.
 * @apiSuccess (Sucesso 200) {Double} caceal Número da inscrição estadual do Contribuinte.
 * @apiSuccess (Sucesso 200) {String} cnpj Código nacional de pessoa jurídica.
 * @apiSuccess (Sucesso 200) {String} codigoSituacaoCadastral Código da situação cadastral do contribuinte.
 * @apiSuccess (Sucesso 200) {String} descricaoSituacaoCadastral Descrição da situação cadastral do contribuinte.
 * @apiSuccess (Sucesso 200) {Double} digitoCaceal Valor do último faturamento anual do contribuinte.
 * @apiSuccess (Sucesso 200) {String} endereco Endereço do contribuinte.
 * @apiSuccess (Sucesso 200) {Object} naturezaJuridica Natureza Jurídica do contribuinte.
 * @apiSuccess (Sucesso 200) {Double} codigo Código da Natureza Jurídica do contribuinte.
 * @apiSuccess (Sucesso 200) {String} descricao Descrição da Natureza Jurídica do contribuinte.
 * @apiSuccess (Sucesso 200) {String} nomeFantasia Nome fantasia do contribuinte.
 * @apiSuccess (Sucesso 200) {Double} numeroPessoa Número Pessoa do Contribuinte.
 * @apiSuccess (Sucesso 200) {String} numeroTelefone Telefone principal do contribuinte.
 * @apiSuccess (Sucesso 200) {String} razaoSocial Razão social do contribuinte.
 * @apiSuccess (Sucesso 200) {Object} tipoContribuinte Tipo do contribuinte.
 * @apiSuccess (Sucesso 200) {Double} codigo Código do tipo do contribuinte.
 * @apiSuccess (Sucesso 200) {String} descricao Descrição do tipo do contribuinte.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 * "caceal": 0,
 * "cnpj": "string",
 * "codigoSituacaoCadastral": "string",
 * "descricaoSituacaoCadastral": "string",
 * "digitoCaceal": 0,
 * "endereco": "string",
 * "naturezaJuridica": {
 *   "codigo": 0,
 *   "descricao": "string"
 *  },
 *  "nomeFantasia": "string",
 *  "numeroPessoa": 0,
 *  "numeroTelefone": "string",
 *  "razaoSocial": "string",
 *  "tipoContribuinte": {
 *   "codigo": "string",
 *   "descricao": "string"
 *  }
 * }
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-03T12:01:17.964+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/api/public/contribuinte/obterContribuinte/0"
 * }
 */