/**
 * @api {post} /sfz-nfcidada-api/api/public/usuario/alterarSenha alterarSenha
 * @apiName alterarSenha
 * @apiDescription Altera senha do usuário.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} fraseEmail Frase de segurança.
 * @apiParam {String} resposta Resposta de segurança.
 * @apiParam {String} login CFPF ou CNPJ do usuário.
 * @apiParam {String} senha Senha antiga do usuário.
 * @apiParam {String} senhaNova Senha nova do usuário.
 * @apiSuccess (Sucesso 200) {String} Result Mensagem de sucesso
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiParamExample {json} Exemplo de passagem de parâmetros:
 * {
 *   "fraseEmail": "TESTETESTE",
 *   "resposta": "TESTE1",
 *   "login": "87199599404",
 *   "senha": "123456",
 *   "senhaNova": "123456"
 * }
 *
 * @apiSuccessExample {String} Exemplo de retorno do sucesso:
 * Operação Realizada com Sucesso!
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/usuario/alterarSenha"
 * }
 */

/**
 * @api {get} /sfz-nfcidada-api/api/public/consultarCredito consultarCredito
 * @apiName consultarCredito
 * @apiDescription Consulta créditos do usuário.
 * @apiGroup nfcidada
 * @apiVersion 1.1.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
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
 * @api {post} /sfz-nfcidada-api/api/public/bilheteContemplado consultarBilhetesContempladosPorSequencialSorteio
 * @apiName consultarBilhetesContempladosPorSequencialSorteio
 * @apiDescription Consulta de bilhetes contemplados nos sorteios.
 * @apiGroup nfcidada
 * @apiVersion 1.1.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
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
 * @apiVersion 1.1.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
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
 * @apiVersion 1.1.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
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

/**
 * @api {post} /sfz-nfcidada-api/api/public/denuncia listarDenuncias
 * @apiName listarDenuncias
 * @apiDescription Consultar denúncias de um determinado contribuinte.
 * @apiGroup nfcidada
 * @apiVersion 1.0.1
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} cnpj Frase de segurança.
 * @apiParam {String} dataFim Resposta de segurança.
 * @apiParam {String} dataInicio CFPF ou CNPJ do usuário.
 * @apiParam {String} tipoDenuncia Senha nova do usuário.
 * @apiSuccess (Sucesso 200) {Object[]} denuncias lista de denúncias.
 * @apiSuccess (Sucesso 200) {String} denuncias.id Código identificador de uma denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncias.tipoDocumento Tipo de documento da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncias.cnpjEmitente CNPJ do emitente da nota denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncias.cnpjDestinatario CNPJ do destinatário da nota denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncias.cNF Código da nota fiscal.
 * @apiSuccess (Sucesso 200) {String} denuncias.serie Número de série da nota.
 * @apiSuccess (Sucesso 200) {String} denuncias.subSerie Número de sub-série da nota.
 * @apiSuccess (Sucesso 200) {String} denuncias.numeroECF Número do ECF.,
 * @apiSuccess (Sucesso 200) {String} denuncias.dataEmissao Data de emissão da nota.
 * @apiSuccess (Sucesso 200) {String} denuncias.valor Valor da nota
 * @apiSuccess (Sucesso 200) {String} denuncias.cpfCnpjDenunciante CPF ou CNPJ do denunciante.
 * @apiSuccess (Sucesso 200) {String} denuncias.denuncia Texto de descrição da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncias.responsavelDenuncia Nome do responsável pela denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncias.tipoDenuncia Tipo da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncias.descricaoTipoDenuncia Descrição do tipo da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncias.situacao Situação da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncias.descricaoSituacao Descrição da situação da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncias.dataDenuncia Data da denúncia.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiParamExample {json} Exemplo de passagem de parâmetros:
 * {
 *   "cnpj": "09326760000168",
 *   "dataFim": "09/08/2017",
 *   "dataInicio": "01/08/2017",
 *   "tipoDenuncia": "1"
 * }
 *
 * @apiSuccessExample {String} Exemplo de retorno do sucesso:
 * [
 *   {
 *     "id": 17,
 *     "tipoDocumento": "NFe",
 *     "cnpjEmitente": "09326760000168",
 *     "cnpjDestinatario": "09326760000168",
 *     "cpfDestinatario": "11",
 *     "cNF": 1,
 *     "serie": "a",
 *     "subSerie": 1,
 *     "numeroECF": "123",
 *     "dataEmissao": "2017-07-08T00:00:00.000+0000",
 *     "valor": 2.5,
 *     "cpfCnpjDenunciante": "marcelomalta",
 *     "denuncia": "denuncia",
 *     "responsavelDenuncia": "responsavel",
 *     "tipoDenuncia": "1",
 *     "descricaoTipoDenuncia": "Teste",
 *     "situacao": "Pendente",
 *     "descricaoSituacao": null,
 *     "dataDenuncia": "2017-08-07T20:04:00.000+0000"
 *   }
 * ]
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/denuncia"
 * }
 */

 
/**
 * @api {get} /sfz-nfcidada-api/api/public/denuncia/{id} consultarDenuncia
 * @apiName consultarDenuncia
 * @apiDescription Consulta uma denúncia de um determinado contribuinte, passando sua identificação.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} id Código de identificação de uma denúncia.
 * @apiSuccess (Sucesso 200) {Object} denuncia lista de denúncias.
 * @apiSuccess (Sucesso 200) {String} denuncia.id Código identificador de uma denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncia.tipoDocumento Tipo de documento da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncia.cnpjEmitente CNPJ do emitente da nota denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncia.cnpjDestinatario CNPJ do destinatário da nota denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncia.cNF Código da nota fiscal.
 * @apiSuccess (Sucesso 200) {String} denuncia.serie Número de série da nota.
 * @apiSuccess (Sucesso 200) {String} denuncia.subSerie Número de sub-série da nota.
 * @apiSuccess (Sucesso 200) {String} denuncia.numeroECF Número do ECF.,
 * @apiSuccess (Sucesso 200) {String} denuncia.dataEmissao Data de emissão da nota.
 * @apiSuccess (Sucesso 200) {String} denuncia.valor Valor da nota
 * @apiSuccess (Sucesso 200) {String} denuncia.cpfCnpjDenunciante CPF ou CNPJ do denunciante.
 * @apiSuccess (Sucesso 200) {String} denuncia.denuncia Texto de descrição da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncia.responsavelDenuncia Nome do responsável pela denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncia.tipoDenuncia Tipo da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncia.descricaoTipoDenuncia Descrição do tipo da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncia.situacao Situação da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncia.descricaoSituacao Descrição da situação da denúncia.
 * @apiSuccess (Sucesso 200) {String} denuncia.dataDenuncia Data da denúncia.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiParamExample {json} Exemplo de passagem de parâmetros:
 * {
 *   "cnpj": "09326760000168",
 *   "dataFim": "09/08/2017",
 *   "dataInicio": "01/08/2017",
 *   "tipoDenuncia": "1"
 * }
 *
 * @apiSuccessExample {String} Exemplo de retorno do sucesso:
 * {
 *   "id": 17,
 *   "tipoDocumento": "NFe",
 *   "cnpjEmitente": "09326760000168",
 *   "cnpjDestinatario": "09326760000168",
 *   "cpfDestinatario": "11",
 *   "cNF": 1,
 *   "serie": "a",
 *   "subSerie": 1,
 *   "numeroECF": "123",
 *   "dataEmissao": "2017-07-08T00:00:00.000+0000",
 *   "valor": 2.5,
 *   "cpfCnpjDenunciante": "marcelomalta",
 *   "denuncia": "denuncia",
 *   "responsavelDenuncia": "responsavel",
 *   "tipoDenuncia": "1",
 *   "descricaoTipoDenuncia": "Teste",
 *   "situacao": "Pendente",
 *   "descricaoSituacao": null,
 *   "dataDenuncia": "2017-08-07T20:04:00.000+0000"
 * }
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/denuncia"
 * }
 */


/**
 * @api {post} /sfz-nfcidada-api/api/public/notas notas
 * @apiName notas
 * @apiDescription Consulta notas emitidas por um contribuinte.
 * @apiGroup nfcidada
 * @apiVersion 1.1.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} dataCompetencia Frase de segurança.
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
 *   "dataCompetencia": "201603"
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
 * @api {post} /sfz-nfcidada-api/api/public/denuncia/incluir incluir
 * @apiName incluir
 * @apiDescription Realiza denúncia de notas fiscais não enviadas pelo contribuinte.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Integer} [cNF] Código da nota fiscal.
 * @apiParam {String} [cnpjDestinatario] CNPJ do usuário.
 * @apiParam {String} cnpjEmitente CNPJ do contribuinte que emitiu a nota.
 * @apiParam {String} [cpfDestinatario] CPF do usuário.
 * @apiParam {String} dataEmissao Data de emissã da nota.
 * @apiParam {String} denuncia Descrição da denúncia.
 * @apiParam {String} numeroECF Número do ECF.
 * @apiParam {String} [serie] Série da nota fiscal.
 * @apiParam {String} situacao Situação da denúncia.
 * @apiParam {Integer} [subSerie] Sub série da nota.
 * @apiParam {String} tipoDenuncia Código do tipo da denúncia.
 * @apiParam {String} tipoDocumento Tipo do documento fiscal.
 * @apiParam {Double} valor Valor total da nota.
 * @apiSuccess (Sucesso 200) {Integer} codigo Código da denuncia criada.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiParamExample {json} Exemplo de passagem de parâmetros:
 * {
 *  "cNF": 987,
 *  "cnpjDestinatario": "09326760000168",
 *  "cnpjEmitente": "09326760000168",
 *  "cpfDestinatario": "01364854481",
 *  "dataEmissao": "16/08/2017",
 *  "denuncia": "Uma denúncia",
 *  "numeroECF": "123456789",
 *  "serie": "A",
 *  "situacao": "Pendente",
 *  "subSerie": 1,
 *  "tipoDenuncia": "1",
 *  "tipoDocumento": "NFe",
 *  "valor": 123.45
 * }
 *
 * apiSuccessExample {String} Exemplo de retorno do sucesso:
 * 47
 * 
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-08-15T17:03:04.011+0000",
 *    "status": 403,
 *    "error": "Forbidden",
 *    "message": "Access Denied",
 *    "path": "/sfz-nfcidada-api/api/public/denuncia/incluir"
 * }
 */

/**
 * @api {get} /sfz-nfcidada-api/api/public/denuncia/alterar alterar
 * @apiName alterar
 * @apiDescription Altera uma denúncia de notas fiscais não enviadas pelo contribuinte.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Integer} [cNF] Código da nota fiscal.
 * @apiParam {String} [cnpjDestinatario] CNPJ do usuário.
 * @apiParam {String} cnpjEmitente CNPJ do contribuinte que emitiu a nota.
 * @apiParam {String} [cpfDestinatario] CPF do usuário.
 * @apiParam {String} dataEmissao Data de emissã da nota.
 * @apiParam {String} denuncia Descrição da denúncia.
 * @apiParam {String} id Identificador da denúncia.
 * @apiParam {String} numeroECF Número do ECF.
 * @apiParam {String} [serie] Série da nota fiscal.
 * @apiParam {String} situacao Situação da denúncia.
 * @apiParam {Integer} [subSerie] Sub série da nota.
 * @apiParam {String} tipoDenuncia Código do tipo da denúncia.
 * @apiParam {String} tipoDocumento Tipo do documento fiscal.
 * @apiParam {Double} valor Valor total da nota.
 * @apiSuccess (Sucesso 200) {Integer} codigo Código da denuncia criada.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiParamExample {json} Exemplo de passagem de parâmetros:
 * {
 *  "cNF": 987,
 *  "cnpjDestinatario": "09326760000168",
 *  "cnpjEmitente": "09326760000168",
 *  "cpfDestinatario": "01364854481",
 *  "dataEmissao": "16/08/2017",
 *  "denuncia": "Uma denúncia",
 *  "id": 45,
 *  "numeroECF": "123456789",
 *  "serie": "A",
 *  "situacao": "Pendente",
 *  "subSerie": 1,
 *  "tipoDenuncia": "1",
 *  "tipoDocumento": "NFe",
 *  "valor": 123.45
 * }
 *
 * apiSuccessExample {String} Exemplo de retorno do sucesso:
 * []
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
 * @api {get} /sfz-nfcidada-api/api/public/entidadeSocial/{id}/adotar adotar
 * @apiName adotar
 * @apiDescription usuário adota uma entidade social.
 * @apiGroup nfcidada
 * @apiVersion 1.1.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Integer} id Código da entidade social.
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
 * @apiVersion 1.1.0
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