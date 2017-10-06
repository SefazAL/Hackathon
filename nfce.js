/**
 * @api {post} /sfz_nfce_api/api/public/consultarPrecosPorDescricao consultarPrecosPorDescricao
 * @apiName consultarPrecosPorDescricao
 * @apiDescription Consulta preços de mercaorias por descrição
 * @apiGroup nfce
 * @apiVersion 1.1.0
 * @apiHeader {String} AppToken Token de acesso do usuário.
 * @apiParam {String} descricao Nome do produto.
 * @apiParam {Integer} dias Número de dias da oferta (máx. 3 dias).
 * @apiParam {Double} latitude Latitude de onde se encontra o dispositivo de consulta.
 * @apiParam {Double} longitude Longitude de onde se encontra o dispositivo de consulta.
 * @apiParam {Integer} raio Raio de alcance em Kilômetros dos estabelecimentos pesquisados (máx. 10 km).
 * @apiSuccess (Sucesso 201) {Object[]} produtos Lista de prodtos que satisfazem a consulta.
 * @apiSuccess (Sucesso 201) {String} produtos.codGetin Código do produto.
 * @apiSuccess (Sucesso 201) {String} produtos.dscProduto Descrição do produto.
 * @apiSuccess (Sucesso 201) {String} produtos.dthEmissaoUltimaVenda Data de Última venda do produto.
 * @apiSuccess (Sucesso 201) {Double} produtos.valUnitarioUltimaVenda valor unitário da Útima venda.
 * @apiSuccess (Sucesso 201) {Double} produtos.valUltimaVenda valor da Última venda.
 * @apiSuccess (Sucesso 201) {String} produtos.txtDataUltimaEmissao Cálculo do tempo da Data da última emissão do produto.
 * @apiSuccess (Sucesso 201) {String} produtos.numCNPJ Número Cadastro Nacional da pessoa jurídica.
 * @apiSuccess (Sucesso 201) {String} produtos.nomRazaoSocial Nome da razão social do contribuinte.
 * @apiSuccess (Sucesso 201) {String} produtos.nomFantasia Nome fantasia do contribuinte.
 * @apiSuccess (Sucesso 201) {String} produtos.numTelefone Número de telefone do contribuinte.
 * @apiSuccess (Sucesso 201) {String} produtos.nomLogradouro Nome do logradouro do estabelecimento.
 * @apiSuccess (Sucesso 201) {String} produtos.numImovel Número do estabelecimento.
 * @apiSuccess (Sucesso 201) {String} produtos.nomBairro Nome do bairro do estabelecimento.
 * @apiSuccess (Sucesso 201) {String} produtos.numCep CEP.
 * @apiSuccess (Sucesso 201) {String} produtos.nomMunicipio Municí­pio.
 * @apiSuccess (Sucesso 201) {Double} produtos.numLatitude Latitude do estabelecimento.
 * @apiSuccess (Sucesso 201) {Double} numLongitude Longitude do estabelecimento.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiParamExample {json} Exemplo de passagem de parâmetros:
 * {
 *   "descricao": "coca cola",
 *   "dias": 3,
 *   "latitude": -9.6432331,
 *   "longitude": -35.7190686,
 *   "raio": 10
 * }
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *  {
 *    "codGetin": "07894900020014",
 *    "dscProduto": "REF C C STEV M 250ML",
 *    "dthEmissaoUltimaVenda": "2017-08-15T15:41:28.000+0000",
 *    "valUnitarioUltimaVenda": 0.99,
 *    "valUltimaVenda": 0.99,
 *    "txtDataUltimaEmissao": "Há 1 dia e 22 horas",
 *    "numCNPJ": "47508411137100",
 *    "nomRazaoSocial": "COMPANHIA BRASILEIRA DE DISTRIBUICAO",
 *    "nomFantasia": null,
 *    "numTelefone": "(11) 38860599",
 *    "nomLogradouro": "AV FERNANDES LIMA",
 *    "numImovel": "4000",
 *    "nomBairro": "GRUTA DE LOURDES",
 *    "numCep": "57052400",
 *    "nomMunicipio": "MACEIO",
 *    "numLatitude": -9.6124954,
 *    "numLongitude": -35.7389171
 *  }
 * ]
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "Município não informado.",
 *   "description": "error.validation",
 *   "fieldErrors": null
 * }
 * Response Code
 * 400
 */

/**
 * @api {post} /sfz_nfce_api/api/public/consultarPrecosPorCodigoDeBarras consultarPrecosPorCodigoDeBarras
 * @apiName consultarPrecosPorCodigoDeBarras
 * @apiDescription Consulta preços de mercaorias por código de barras
 * @apiGroup nfce
 * @apiVersion 1.1.0
 * @apiHeader {String} AppToken Token de acesso do usuário.
 * @apiParam {String} codigoDeBarras Código de barras do produto.
 * @apiParam {Integer} dias Número de dias da oferta (máx. 3 dias).
 * @apiParam {Double} latitude Latitude de onde se encontra o dispositivo de consulta.
 * @apiParam {Double} longitude Longitude de onde se encontra o dispositivo de consulta.
 * @apiParam {Integer} raio Raio de alcance em Kilômetros dos estabelecimentos pesquisados (máx. 10 km).
 * @apiSuccess (Sucesso 201) {Object[]} produtos Lista de prodtos que satisfazem a consulta.
 * @apiSuccess (Sucesso 201) {String} produtos.codGetin Código do produto.
 * @apiSuccess (Sucesso 201) {String} produtos.dscProduto Descrição do produto.
 * @apiSuccess (Sucesso 201) {String} produtos.dthEmissaoUltimaVenda Data de Última venda do produto.
 * @apiSuccess (Sucesso 201) {Double} produtos.valUnitarioUltimaVenda valor unitário da Útima venda.
 * @apiSuccess (Sucesso 201) {Double} produtos.valUltimaVenda valor da Última venda.
 * @apiSuccess (Sucesso 201) {String} produtos.txtDataUltimaEmissao Cálculo do tempo da Data da última emissão do produto.
 * @apiSuccess (Sucesso 201) {String} produtos.numCNPJ Número Cadastro Nacional da pessoa jurídica.
 * @apiSuccess (Sucesso 201) {String} produtos.nomRazaoSocial Nome da razão social do contribuinte.
 * @apiSuccess (Sucesso 201) {String} produtos.nomFantasia Nome fantasia do contribuinte.
 * @apiSuccess (Sucesso 201) {String} produtos.numTelefone Número de telefone do contribuinte.
 * @apiSuccess (Sucesso 201) {String} produtos.nomLogradouro Nome do logradouro do estabelecimento.
 * @apiSuccess (Sucesso 201) {String} produtos.numImovel Número do estabelecimento.
 * @apiSuccess (Sucesso 201) {String} produtos.nomBairro Nome do bairro do estabelecimento.
 * @apiSuccess (Sucesso 201) {String} produtos.numCep CEP.
 * @apiSuccess (Sucesso 201) {String} produtos.nomMunicipio Municí­pio.
 * @apiSuccess (Sucesso 201) {Double} produtos.numLatitude Latitude do estabelecimento.
 * @apiSuccess (Sucesso 201) {Double} numLongitude Longitude do estabelecimento.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiParamExample {json} Request-Example:
 * {
 *   "codigoDeBarras": "7894900020014",
 *   "dias": 3,
 *   "latitude": -9.6432331,
 *   "longitude": -35.7190686,
 *   "raio": 10
 * }
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *     {
 *         "codGetin": "78909045",
 *         "dscProduto": "COCA COLA ZERO PET UN",
 *         "dthEmissaoUltimaVenda": "2017-08-15T15:47:02.000+0000",
 *         "valUnitarioUltimaVenda": 0.99,
 *         "valUltimaVenda": 0.99,
 *         "txtDataUltimaEmissao": "Há 1 dia e 21 horas",
 *         "numCNPJ": "39346861008499",
 *         "nomRazaoSocial": "G. BARBOSA COMERCIAL LTDA.",
 *         "nomFantasia": "G. BARBOSA",
 *         "numTelefone": "(79) 32165210",
 *         "nomLogradouro": "AV  MENINO MARCELO",
 *         "numImovel": "9730",
 *         "nomBairro": "SERRARIA",
 *         "numCep": "57046000",
 *         "nomMunicipio": "MACEIO",
 *         "numLatitude": -9.6118036,
 *         "numLongitude": -35.7198944
 *     },
 *     {
 *         "codGetin": "78909045",
 *         "dscProduto": "COCA COLA ZERO PET UN",
 *         "dthEmissaoUltimaVenda": "2017-08-14T12:28:34.000+0000",
 *         "valUnitarioUltimaVenda": 0.99,
 *         "valUltimaVenda": 0.99,
 *         "txtDataUltimaEmissao": "Há 3 dias",
 *         "numCNPJ": "39346861008308",
 *         "nomRazaoSocial": "G. BARBOSA COMERCIAL LTDA.",
 *         "nomFantasia": "G. BARBOSA",
 *         "numTelefone": "(79) 32165210",
 *         "nomLogradouro": "AV  GUSTAVO PAIVA",
 *         "numImovel": "5395",
 *         "nomBairro": "CRUZ DAS ALMAS",
 *         "numCep": "57038000",
 *         "nomMunicipio": "MACEIO",
 *         "numLatitude": -9.631070599999999,
 *         "numLongitude": -35.7017861
 *     }
 * ]
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "Município não informado.",
 *   "description": "error.validation",
 *   "fieldErrors": null
 * }
 * Response Code
 * 400
 */