/**
 * @api {post} /sfz_nfce_api/api/public/consultarPrecosPorDescricao consultarPrecosPorDescricao
 * @apiName consultarPrecosPorDescricao
 * @apiDescription Consulta preços de mercaorias por descrição
 * @apiGroup nfce
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
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
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
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

/**
 * @api {get} /sfz-nfcidada-api/api/public/consultarCredito/{CPFCNPJ} consultarCredito
 * @apiName consultarCredito
 * @apiDescription Consulta créditos do usuário.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} CPFCNPJ CPF ou CNPJ do usuário.
 * @apiSuccess (Sucesso 200) {Double} valorCredito Valor de créditos disponíveis ao usuário.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 *
 * @apiSuccessExample {String} Exemplo de retorno do sucesso:
 * {
 *     "valorCredito": 71.5
 * }
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/consultarCredito/0"
 * }
 */

/**
 * @api {get} /sfz-nfcidada-api/api/public/entidadeSocial/{id}/adotar/{cpf} adotar
 * @apiName adotar
 * @apiDescription usuário adota uma entidade social.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Integer} id Código da entidade social.
 * @apiParam {String} cpf CPF do usuário.
 * @apiSuccess (Sucesso 200) {Integer} mensagem Mensagem de sucesso.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * apiSuccessExample {String} Exemplo de retorno do sucesso:
 * Operação Realiza com Sucesso!
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/denuncia/alterar"
 * }
 * 
 */

/**
 * @api {get} /sfz-nfcidada-api/api/public/entidadeSocial consultarTodas
 * @apiName consultarTodas
 * @apiDescription Consulta todas entidades sociais.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiSuccess (Sucesso 200) {Object[]} entidades Lista de entidades sociais.
 * @apiSuccess (Sucesso 200) {Integer} id Código da entidade social.
 * @apiSuccess (Sucesso 200) {Integer} cnpj CNPJ da entidade.
 * @apiSuccess (Sucesso 200) {Integer} razaoSocial Razão social da entidade.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * apiSuccessExample {String} Exemplo de retorno do sucesso:
 * [
 *  {
 *      "id": 275,
 *      "cnpj": "35561208000164",
 *      "razaoSocial": "Família Alagoana Down"
 *  },
 *  {
 *      "id": 7983,
 *      "cnpj": "12450268000104",
 *      "razaoSocial": "ASSOCIACAO PESTALOZZI DE MACEIO"
 *  }
 * ]
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/entidadeSocial"
 * }
 * 
 */

/**
 * @api {post} /sfz-nfcidada-api/api/public/notas notas
 * @apiName notas
 * @apiDescription Consulta notas emitidas por um contribuinte.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} dataCompetencia Frase de segurança.
 * @apiParam {String} numeroDestinatario Resposta de segurança.
 * @apiSuccess (Sucesso 200) {Object[]} notas Lista de notas.
 * @apiSuccess (Sucesso 200) {String} notas.dataEmissao Data de emissão da nota.
 * @apiSuccess (Sucesso 200) {String} notas.numeroNotaFiscal Número da nota fiscal.
 * @apiSuccess (Sucesso 200) {String} notas.tipoNotaFiscal Tipo da nota fiscal.
 * @apiSuccess (Sucesso 200) {String} notas.valorTotal Valor total da nota.
 * @apiSuccess (Sucesso 200) {String} notas.descricaoContribuinte Descrição contribuinte.
 * @apiSuccess (Sucesso 200) {String} notas.descricaoMotivoAnulacao Descrição motivo de anulação.
 * @apiSuccess (Sucesso 200) {String} notas.numeroEmitente Número de CNPJ do emitente.
 * @apiSuccess (Sucesso 200) {String} notas.valorCredito Valor de crédito gerado.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiParamExample {json} Exemplo de passagem de parâmetros:
 * {
 *   "dataCompetencia": "201603",
 *   "numeroDestinatario": "12270435000135"
 * }
 *
 * apiSuccessExample {String} Exemplo de retorno do sucesso:
 * [
 *    {
 *        "dataEmissao": "2016-03-01T12:54:19.000+0000",
 *        "numeroNotaFiscal": "67305",
 *        "tipoNotaFiscal": "01",
 *        "valorTotal": 304,
 *        "descricaoContribuinte": "CASA DAS TINTAS LTDA",
 *        "descricaoMotivoAnulacao": "CFOP: 5405",
 *        "numeroEmitente": "09326760000168",
 *        "valorCredito": null
 *    },
 *    {
 *        "dataEmissao": "2016-03-02T00:00:00.000+0000",
 *        "numeroNotaFiscal": "42150",
 *        "tipoNotaFiscal": "CF",
 *        "valorTotal": 349,
 *        "descricaoContribuinte": "MAGAZINE LUIZA S/A",
 *        "descricaoMotivoAnulacao": null,
 *        "numeroEmitente": "47960950082349",
 *        "valorCredito": null
 *    }
 * ]
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/notas"
 * }
 */

/**
 * @api {post} /sfz-nfcidada-api/api/public/bilheteContemplado consultarBilhetesContempladosPorSequencialSorteio
 * @apiName consultarBilhetesContempladosPorSequencialSorteio
 * @apiDescription Consulta de bilhetes contemplados nos sorteios.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} documento CFP ou CNPJ do usuário.
 * @apiParam {String} sequencialSorteio Número sequencial do sorteio.
 * @apiSuccess (Sucesso 200) {Object[]} Bilhetes Lista de bilhetes sorteados.
 * @apiSuccess (Sucesso 200) {Double} Bilhetes.valorPremio Valor do prêmio.
 * @apiSuccess (Sucesso 200) {Object[]} Bilhetes.bilhete Dados do Bilhete premiado.
 * @apiSuccess (Sucesso 200) {String} Bilhetes.bilhete.numero Bilhete Número do bilhete sorteado.
 * @apiSuccess (Sucesso 200) {Object} Bilhetes.bilhete.sorteio Dados do sorteio.
 * @apiSuccess (Sucesso 200) {Integer} Bilhetes.bilhete.sequencial Número sequencial do sorteio.
 * @apiSuccess (Sucesso 200) {Integer} Bilhetes.bilhete.codigoSorteio Códgo do sorteio.
 * @apiSuccess (Sucesso 200) {String} Bilhetes.bilhete.descricao Descrição do sorteio.
 * @apiSuccess (Sucesso 200) {String} Bilhetes.bilhete.dataRealizacao Data de realização do sorteio.
 * @apiSuccess (Sucesso 200) {String} Bilhetes.bilhete.numeroDocumento Número do CPF ou CNPJ sorteado.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiParamExample {json} Exemplo de passagem de parâmetros:
 * {
 *     "documento": "03918819493",
 *     "sequencialSorteio": 37
 * }
 *
 * @apiSuccessExample {String} Exemplo de retorno do sucesso:
 * [
 *     {
 *         "valorPremio": 50000,
 *         "bilhete": {
 *             "numeroBilhete": 1660,
 *             "sorteio": {
 *                 "sequencial": 37,
 *                 "codigoSorteio": 29,
 *                 "descricao": "Sorteio do dia do Consumidor 2015",
 *                 "dataRealizacao": "2016-04-11T00:00:00.000+0000"
 *             },
 *             "numeroDocumento": "03918819493"
 *         }
 *     }
 * ]
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/bilheteContemplado"
 * }
 */


/**
 * @api {post} /sfz-nfcidada-api/api/public/bilhete consultarBilhetesPorSequencialSorteio
 * @apiName consultarBilhetesPorSequencialSorteio
 * @apiDescription Consulta de bilhetes nos sorteios.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} documento CFP ou CNPJ do usuário.
 * @apiParam {String} sequencialSorteio Número sequencial do sorteio.
 * @apiSuccess (Sucesso 200) {Object[]} bilhetes Lista dos bilhetes.
 * @apiSuccess (Sucesso 200) {String} bilhetes.bilhete.numero Bilhete Número do bilhete.
 * @apiSuccess (Sucesso 200) {Object} bilhetes.sorteio Dados do sorteio.
 * @apiSuccess (Sucesso 200) {Integer} bilhetes.sorteio.sequencial Número sequencial do sorteio.
 * @apiSuccess (Sucesso 200) {Integer} bilhetes.sorteio.codigoSorteio Códgo do sorteio.
 * @apiSuccess (Sucesso 200) {String} bilhetes.sorteio.descricao Descrição do sorteio.
 * @apiSuccess (Sucesso 200) {String} bilhetes.sorteio.dataRealizacao Data de realização do sorteio.
 * @apiSuccess (Sucesso 200) {String} bilhetes.numeroDocumento Número do CPF ou CNPJ.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiParamExample {json} Exemplo de passagem de parâmetros:
 * {
 *     "documento": "46898042491",
 *     "sequencialSorteio": 37
 * }
 *
 * @apiSuccessExample {String} Exemplo de retorno do sucesso:
 * [
 *     {
 *         "numeroBilhete": 2452,
 *         "sorteio": {
 *             "sequencial": 37,
 *             "codigoSorteio": 29,
 *             "descricao": "Sorteio do dia do Consumidor 2015",
 *             "dataRealizacao": "2016-04-11T00:00:00.000+0000"
 *         },
 *         "numeroDocumento": "46898042491"
 *     }
 * ]
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/bilhete"
 * }
 */

/**
 * @api {get} /sfz-nfcidada-api/api/public/sorteio listarTodos
 * @apiName listarTodos
 * @apiDescription Consulta dos sorteios.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} documento CFP ou CNPJ do usuário.
 * @apiParam {String} sequencialSorteio Número sequencial do sorteio.
 * @apiSuccess (Sucesso 200) {Object[]} soteios Lista dos sorteios.
 * @apiSuccess (Sucesso 200) {Integer} soteios.sequencial Número sequencial do sorteio.
 * @apiSuccess (Sucesso 200) {Integer} soteios.codigoSorteio Códgo do sorteio.
 * @apiSuccess (Sucesso 200) {String} soteios.descricao Descrição do sorteio.
 * @apiSuccess (Sucesso 200) {String} soteios.dataRealizacao Data de realização do sorteio.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 *
 * @apiSuccessExample {String} Exemplo de retorno do sucesso:
 * [
 *     {
 *         "sequencial": 1,
 *         "codigoSorteio": 1,
 *         "descricao": "dia dos pais",
 *         "dataRealizacao": "2009-08-07T00:00:00.000+0000"
 *     },
 *     {
 *         "sequencial": 2,
 *         "codigoSorteio": 2,
 *         "descricao": "dia das crianças",
 *         "dataRealizacao": "2009-10-05T00:00:00.000+0000"
 *     }
 * ]
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/sorteio"
 * }
 */