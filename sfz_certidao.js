/**
 * @api {get} /sfz_certidao_api/api/public/consultaCertidao/consultarCnd Consultar Cnd
 * @apiName Consultar Cnd
 * @apiDescription Consultar Cnd
 * @apiGroup certidao
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} numeroDocumento Número do documento.
 * @apiParam {String} tipoDocumento Tido do documento(CACE, CPF ou CNPJ).
 * @apiSuccess (Sucesso 200) {Object} certidao Certidão.
 * @apiSuccess (Sucesso 200) {String} certidao.tipoCertidao Tipo da certidão(CPEN - CERTIDÃO POSITIVA COM EFEITO NEGATIVO,
    CP - CERTIDÃO POSITIVA,
    CN - CERTIDÃO NEGATIVA).
 * @apiSuccess (Sucesso 200) {String} certidao.numeroDocumento Número do documento.
 * @apiSuccess (Sucesso 200) {String} certidao.horaEmissao Hora da emissão da certidão.
 * @apiSuccess (Sucesso 200) {String} certidao.dataEmissao Data da emissão da certidão. 
 * @apiSuccess (Sucesso 200) {String} certidao.codigoAutenticacao Código de autenticação. 
 * @apiError (Erro 400) Bad Request Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 * 
 * @apiExample Exemplo:
 * {
 *   "numeroDocumento": "24726005",
 *   "tipoDocumento": "CACE"
 * }
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *   "tipoCertidao": "CN",
 *   "numeroDocumento": "24726005",
 *   "horaEmissao": "16:38:58",
 *   "dataEmissao": "17/08/2017",
 *   "codigoAutenticacao": "1DE37663493043ED"
 * }
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "error.validation",
 *   "description": null,
 *   "fieldErrors": [
 *       {
 *           "objectName": "parametroConsultarCnd",
 *           "field": "tipoDocumento",
 *           "message": "Tipos Válidos CACE | CPF | CNPJ"
 *       }
 *   ]
 * }
 * Response Code
 * 400
 */

 /**
 * @api {get} /sfz_certidao_api/api/public/consultaCertidao/consultarPendencias Consultar Pendências
 * @apiName Consultar Pendências
 * @apiDescription Consultar Pendências
 * @apiGroup certidao
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} numeroDocumento Número do documento.
 * @apiParam {String} tipoDocumento Tido do documento(CACE, CPF ou CNPJ).
 * @apiSuccess (Sucesso 200) {Object} pendencia Pendência.
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.tipoCertidao Tipo da certidão.
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.numeroDocumento Número do documento.
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.horaEmissao Hora da emissão da certidão.
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.dataEmissao Data da emissão da certidão. 
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.codigoAutenticacao Código de autenticação. 
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.nomeRazaoSocial Razão Social
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.numeroDocumento Número Documento
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasDac Pendências Dac
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasGia Pendências Gia
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasEfd Pendências Efd
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.situacaoCadastral Situação Cadastral
 
 * @apiSuccess (Sucesso 200) {Object[]} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas
 * @apiSuccess (Sucesso 200) {Integer} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.numero Número identificador pendência
 * @apiSuccess (Sucesso 200) {Integer} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.sequencial Sequencial
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.descricao Descrição
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.competencia Competência
 * @apiSuccess (Sucesso 200) {Double} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.valorPrincipal Valor Principal
 * @apiSuccess (Sucesso 200) {Double} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.valorMulta Valor Multa
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.numeroInscricao Número Inscrição 
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.numeroInscricaoFormatado Número Inscrição Formatado
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.numeroCertidao Número identificador Certidão
 * @apiSuccess (Sucesso 200) {Integer} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.numeroParcelamento Número identificador parcelamento
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.situacao Situação

 * @apiSuccess (Sucesso 200) {Object[]} pendencia.certidaoDados.pendenciaDados.pendenciasDebito 
 * @apiSuccess (Sucesso 200) {Integer} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.numero Número identificador pendência
 * @apiSuccess (Sucesso 200) {Integer} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.sequencial Sequencial
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.descricao Descrição
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.competencia Competência
 * @apiSuccess (Sucesso 200) {Double} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.valorPrincipal Valor Principal
 * @apiSuccess (Sucesso 200) {Double} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.valorMulta Valor Multa
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.numeroInscricao Número Inscrição 
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.numeroInscricaoFormatado Número Inscrição Formatado
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.numeroCertidao Número identificador Certidão
 * @apiSuccess (Sucesso 200) {Integer} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.numeroParcelamento Número identificador parcelamento
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasDebito.situacao Situação

 * @apiSuccess (Sucesso 200) {Object[]} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento 
 * @apiSuccess (Sucesso 200) {Integer} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.numero Número identificador pendência
 * @apiSuccess (Sucesso 200) {Integer} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.sequencial Sequencial
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.descricao Descrição
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.competencia Competência
 * @apiSuccess (Sucesso 200) {Double} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.valorPrincipal Valor Principal
 * @apiSuccess (Sucesso 200) {Double} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.valorMulta Valor Multa
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.numeroInscricao Número Inscrição 
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.numeroInscricaoFormatado Número Inscrição Formatado
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.numeroCertidao Número identificador Certidão
 * @apiSuccess (Sucesso 200) {Integer} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.numeroParcelamento Número identificador parcelamento
 * @apiSuccess (Sucesso 200) {String} pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.situacao Situação
 * @apiError (Erro 400) Bad Request Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 * 
 * @apiExample Exemplo:
 * {
 *   "numeroDocumento": "24726005",
 *   "tipoDocumento": "CACE"
 * }
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *   "certidaoDados": {
 *       "tipoCertidao": "CN",
 *       "numeroDocumento": null,
 *       "horaEmissao": "12:47:09",
 *       "dataEmissao": "21/07/2017",
 *       "codigoAutenticacao": "EDC0650DB55C4428"
 *   },
 *   "pendenciaDados": null
 * }
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "error.validation",
 *   "description": null,
 *   "fieldErrors": [
 *       {
 *           "objectName": "parametroConsultarCnd",
 *           "field": "tipoDocumento",
 *           "message": "Tipos Válidos CACE | CPF | CNPJ"
 *       }
 *   ]
 * }
 * Response Code
 * 400
 */
