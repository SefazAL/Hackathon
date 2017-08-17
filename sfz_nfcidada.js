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
 * @api {post} /sfz-nfcidada-api/api/public/bilheteContemplado bilheteContemplado
 * @apiName bilheteContemplado
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
 * @apiSuccess (Sucesso 200) {Object[]} Bilhetes.bilhete.sorteio Dados do sorteio.
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
 * @api {post} /sfz-nfcidada-api/api/public/denuncia denuncia
 * @apiName denuncia
 * @apiDescription Consultar denúncias de um determinado contribuinte.
 * @apiGroup nfcidada
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} cnpj Frase de segurança.
 * @apiParam {String} dataFim Resposta de segurança.
 * @apiParam {String} dataInicio CFPF ou CNPJ do usuário.
 * @apiParam {String} tipoDenuncia Senha nova do usuário.
 * @apiSuccess (Sucesso 200) {Object[]} denuncias lista de denúncias.
 * @apiSuccess (Sucesso 200) {String} id Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} tipoDocumento Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} cnpjEmitente Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} cnpjDestinatario Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} cNF Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} serie Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} subSerie Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} numeroECF Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} dataEmissao Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} valor Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} cpfCnpjDenunciante Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} denuncia Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} responsavelDenuncia Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} tipoDenuncia Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} descricaoTipoDenuncia Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} situacao Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} descricaoSituacao Mensagem de sucesso
 * @apiSuccess (Sucesso 200) {String} dataDenuncia Mensagem de sucesso
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
 * @api {post} /sfz-nfcidada-api/api/public/denuncia/alterar alterar
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
 * @api {get} /sfz-nfcidada-api/api/public/entidadeSocial consultarEntidade
 * @apiName consultarEntidade
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