/**
 * @api {post} /sfz_ficha_funcional_api/api/public/dependenteFuncionario Solicitar alteração de dependente
 * @apiName solicitar alteração de dependente
 * @apiDescription Solicitar uma alteração nos dependentes.
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Long} id Id do dependente
 * @apiParam {String} nome Nome do dependente.
 * @apiParam {Integer} tipoParentesco Id do tipo parentesco do depentente.
 * @apiParam {String} cpf CPF do dependente.
 * @apiParam {String} rg RG do dependente.
 * @apiParam {String} codigoTipoSexo Código do tipo do sexo(M ou F).
 * @apiParam {Date} dataNascimento Data de nascimento do dependente.
 * @apiSuccess (Sucesso 200) {String} Operação realizada com sucesso!
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *    "numeroPessoaFuncionario": 529483,
 *    "tipoStatus": "AGUARDANDO_APROVACAO",
 *    "numeroPessoaInclusao": 529483,
 *    "numeroPessoaAlteracao": 529483,
 *    "dataInclusao": 1503004761407,
 *    "dataAlteracao": 1503004761407,
 *    "id": 54,
 *    "idDependenteOrigem": null,
 *    "nome": "Maria",
 *    "tipoParentesco": {
 *        "codigo": 3,
 *        "nome": null
 *    },
 *    "cpf": "12345678910",
 *    "rg": "123456",
 *    "codigoTipoSexo": "M",
 *    "dataNascimento": 1502975929457,
 *    "pessoaFuncionario": 529483,
 *    "pessoaInclusao": 529483,
 *    "pessoaAlteracao": 529483,
 *    "inclusao": 1503004761407,
 *    "alteracao": 1503004761407,
 *    "tipo": "AGUARDANDO_APROVACAO"
 *}
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "error.validation",
 *   "description": null,
 *   "fieldErrors": [
 *       {
 *           "objectName": "DependenteFuncionarioDTO",
 *           "field": "codigoTipoSexo",
 *           "message": "Tipos: M | F"
 *       }
 *   ]
 * }
 * Response Code
 * 400
 */

 /**
 * @api {post} /sfz_ficha_funcional_api/api/public/dependenteFuncionario/anexo Upload anexo dependente
 * @apiName upload anexo dependente
 * @apiDescription Enviar arquivo anexo do dependente
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Long} id Id do dependente.
 * @apiParam {String} Anexo em base64.
 * @apiSuccess (Sucesso 200) {String} Operação realizada com sucesso!
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * Operação realizada com sucesso!
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "error.validation",
 *   "description": null,
 *   "fieldErrors": [
 *       {
 *           "objectName": "anexoDTO",
 *           "field": "id",
 *           "message": "NotNull"
 *       }
 *   ]
 * }
 * Response Code
 * 400
 */

 /**
 * @api {get} /sfz_ficha_funcional_api/api/public/dependenteFuncionario/anexo/{id} Download anexo dependente
 * @apiName download anexo dependente
 * @apiDescription Baixar arquivo anexo do dependente
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Long} id Id do dependente.
 * @apiSuccess (Sucesso 200) {Integer} chamado.id Id do dependente.
 * @apiSuccess (Sucesso 200) {String} Anexo em base64.
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *   "id": "51",
 *   "anexo":"CT6aZvZvCrzYpbu2PfxHAg8l+obGmOt1vaJQBAPkvI5nM5fWyyWWTU1tfuA+..."
 * }
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "error.validation",
 *   "description": "Dependente não possui anexo.",
 *   "fieldErrors": null
 * }
 * Response Code
 * 500
 */

 /**
 * @api {post} /sfz_ficha_funcional_api/api/public/dadoFichaFuncional Solicitar alteração de dado ficha
 * @apiName solicitar alteração de dependente
 * @apiDescription Solicitar uma alteração nos dependentes.
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Long} id Id do dado ficha
 * @apiParam {String} descricao Descrição do dado ficha.
 * @apiParam {Integer} tipoDadoFichaFuncional Id Tipo parentesco do depentente.
 * @apiSuccess (Sucesso 200) {String} Operação realizada com sucesso!
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *     "numeroPessoaFuncionario": 529483,
 *     "tipoStatus": "AGUARDANDO_APROVACAO",
 *     "numeroPessoaInclusao": 529483,
 *     "numeroPessoaAlteracao": 529483,
 *     "dataInclusao": 1502977953000,
 *     "dataAlteracao": 1503005283728,
 *     "id": 37923,
 *     "descricao": "João",
 *     "tipoDadoFichaFuncional": {
 *         "id": 2,
 *         "nomeTipo": "Nome do Pai",
 *         "grupoTipo": {
 *             "id": 1,
 *             "nomeGrupoTipo": "Cadastro",
 *             "numeroPessoaInclusao": 100
 *         },
 *         "numeroPessoaInclusao": 100
 *     },
 *     "tipo": "AGUARDANDO_APROVACAO"
 * }
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "error.validation",
 *   "description": null,
 *   "fieldErrors": [
 *       {
 *           "objectName": "dadoFichaFuncionalDTO",
 *           "field": "tipoDadoFichaFuncional",
 *           "message": "NotNull"
 *       }
 *   ]
 * }
 * Response Code
 * 400
 */

 /**
 * @api {post} /sfz_ficha_funcional_api/api/public/dadoFichaFuncional/anexo Upload anexo dado ficha
 * @apiName upload dado ficha
 * @apiDescription Enviar arquivo anexo do dado ficha
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Long} id Id do dependente.
 * @apiParam {String} Anexo em base64.
 * @apiSuccess (Sucesso 200) {String} Operação realizada com sucesso!
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * Operação realizada com sucesso!
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "error.validation",
 *   "description": null,
 *   "fieldErrors": [
 *       {
 *           "objectName": "anexoDTO",
 *           "field": "id",
 *           "message": "NotNull"
 *       }
 *   ]
 * }
 * Response Code
 * 400
 */

 /**
 * @api {get} /sfz_ficha_funcional_api/api/public/dadoFichaFuncional/anexo/{id} Download anexo dado ficha
 * @apiName download anexo dado ficha
 * @apiDescription Baixar arquivo anexo do dado fucha
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Long} id Id do dado ficha.
 * @apiSuccess (Sucesso 200) {Integer} chamado.id Id do dependente.
 * @apiSuccess (Sucesso 200) {String} Anexo em base64.
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *   "id": "51",
 *   "anexo":"CT6aZvZvCrzYpbu2PfxHAg8l+obGmOt1vaJQBAPkvI5nM5fWyyWWTU1tfuA+..."
 * }
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "error.validation",
 *   "description": "Dependente não possui anexo.",
 *   "fieldErrors": null
 * }
 * Response Code
 * 500
 *
 */

 /**
 * @api {get} /sfz_ficha_funcional_api/api/public/fichaFuncional/{id} Consultar Ficha Funcional por id
 * @apiName consultar ficha funcional por id
 * @apiDescription Carregar ficha funcional do id do funcionário.
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Long} id Id do dado ficha.
 * @apiSuccess (Sucesso 200) {String} nomeFuncionario Nome do funcionário.
 * @apiSuccess (Sucesso 200) {Object[]} dependentes Lista de dependentes.
 * @apiSuccess (Sucesso 200) {Integer} dependentes.numeroPessoaFuncionario Número pessoa do funcionário.
 * @apiSuccess (Sucesso 200) {String} dependentes.tipoStatus Tipo de status.
 * @apiSuccess (Sucesso 200) {Integer} dependentes.numeroPessoaInclusao Número pessoa de quem incluiu os dados.
 * @apiSuccess (Sucesso 200) {Integer} dependentes.numeroPessoaAlteracao Número pessoa de quem incluiu os dados.
 * @apiSuccess (Sucesso 200) {Integer} dependentes.dataInclusao Data de inclusão dos dados.
 * @apiSuccess (Sucesso 200) {Integer} dependentes.dataAlteracao Data de alteração dos dados.
 * @apiSuccess (Sucesso 200) {Integer} dependentes.id Identificador.
 * @apiSuccess (Sucesso 200) {String} dependentes.idDependenteOrigem Identificador da origem do dependente.
 * @apiSuccess (Sucesso 200) {String} dependentes.nome Nome do dependente.
 * @apiSuccess (Sucesso 200) {Object[]} dependentes.tipoParentesco Tipo de parentesco.
 * @apiSuccess (Sucesso 200) {String} dependentes.tipoParentesco.codigo Código do tipo de parentesco.
 * @apiSuccess (Sucesso 200) {String} dependentes.tipoParentesco.nome Nome do tipo de parentesco.
 * @apiSuccess (Sucesso 200) {Object[]} grupos Listas de grupos do fazendário.
 * @apiSuccess (Sucesso 200) {String} grupos.descricao em base64.
 * @apiSuccess (Sucesso 200) {Object[]} grupos.dados em base64.
 * @apiSuccess (Sucesso 200) {Integer} grupos.dados.numeroPessoaFuncionario Número pessoa do funcionário.
 * @apiSuccess (Sucesso 200) {String} grupos.dados.tipoStatus Tipo de status.
 * @apiSuccess (Sucesso 200) {Integer} grupos.dados.numeroPessoaInclusao Número pessoa de quem incluiu os dados.
 * @apiSuccess (Sucesso 200) {Integer} grupos.dados.numeroPessoaAlteracao Número pessoa de quem incluiu os dados.
 * @apiSuccess (Sucesso 200) {Integer} grupos.dados.dataInclusao Data de inclusão dos dados.
 * @apiSuccess (Sucesso 200) {Integer} grupos.dados.dataAlteracao Data de alteração dos dados.
 * @apiSuccess (Sucesso 200) {Integer} grupos.dados.id Identificador.
 * @apiSuccess (Sucesso 200) {String} grupos.dados.descricao Descrição do grupo.
 * @apiSuccess (Sucesso 200) {Object} grupos.dados.tipoDadoFichaFuncional Tipo do dado da ficha funcional.
 * @apiSuccess (Sucesso 200) {String} grupos.dados.tipoDadoFichaFuncional.id Identificador do tipo do dado da ficha funcional.
 * @apiSuccess (Sucesso 200) {String} grupos.dados.tipoDadoFichaFuncional.nomeTipo Nome do tipo do dado da ficha funcional.
 * @apiSuccess (Sucesso 200) {Object} grupos.dados.tipoDadoFichaFuncional.grupoTipo Grupo a que pertence o tipo funcional.
 * @apiSuccess (Sucesso 200) {String} grupos.dados.tipoDadoFichaFuncional.grupoTipo.id Identificador do grupo a que pertence o tipo funcional.
 * @apiSuccess (Sucesso 200) {String} grupos.dados.tipoDadoFichaFuncional.grupoTipo.nomeGrupoTipo Nome do grupo a que pertence o tipo funcional.
 * @apiSuccess (Sucesso 200) {String} grupos.dados.tipoDadoFichaFuncional.grupoTipo.numeroPessoaInclusao Número da pessoa que incluiu o grupo do tipo.
 * @apiSuccess (Sucesso 200) {String} grupos.dados.tipoDadoFichaFuncional.numeroPessoaInclusao Número da pessoa que incluiu o tipo.
 * @apiSuccess (Sucesso 200) {String} grupos.dados.tipo Tipo do dado.
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *    "nomeFuncionario": "FAZENDARIO 1",
 *    "dependentes": [
 *        {
 *            "numeroPessoaFuncionario": 529483,
 *            "tipoStatus": "VALIDO",
 *            "numeroPessoaInclusao": 529483,
 *            "numeroPessoaAlteracao": 529483,
 *            "dataInclusao": 1501839584000,
 *            "dataAlteracao": 1502287967000,
 *            "id": 1,
 *            "idDependenteOrigem": null,
 *            "nome": "Filho 1",
 *            "tipoParentesco": {
 *                "codigo": 3,
 *                "nome": "Filho(a)"
 *            }
 *    ],
 *    "grupos": [
 *        {
 *            "descricao": "Averbações",
 *            "dados": [
 *                {
 *                    "numeroPessoaFuncionario": 529483,
 *                    "tipoStatus": "VALIDO",
 *                    "numeroPessoaInclusao": 529483,
 *                    "numeroPessoaAlteracao": 529483,
 *                    "dataInclusao": 1502703085000,
 *                    "dataAlteracao": 1502703085000,
 *                    "id": 37905,
 *                    "descricao": "8 anos",
 *                    "tipoDadoFichaFuncional": {
 *                        "id": 24,
 *                        "nomeTipo": "Tempo de Serviço Público",
 *                        "grupoTipo": {
 *                            "id": 3,
 *                            "nomeGrupoTipo": "Averbações",
 *                            "numeroPessoaInclusao": 100
 *                        },
 *                        "numeroPessoaInclusao": 529483
 *                    },
 *                    "tipo": "VALIDO"
 *                }
 *            ]
 *        }
 *    ]
 *}
 */

 /**
 * @api {get} /sfz_ficha_funcional_api/api/public/grupoTipoDadoFichaFuncional Consultar grupos de dados
 * @apiName consultar grupo de dados
 * @apiDescription Consultar todos os grupos de dados.
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 *[
 *    {
 *        "id": 2,
 *        "nomeGrupoTipo": "Portarias",
 *        "numeroPessoaInclusao": 100
 *    }
 *]
 */

 /**
 * @api {get} /sfz_ficha_funcional_api/api/public/tipoParentesco Consultar tipos parentesco
 * @apiName consultar tipos parentesco
 * @apiDescription Consultar todos os tipos de parentesco.
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 *[
 *    {
 *         "codigo": 2,
 *         "nome": "Mãe"
 *    }
 *]
 *
 * @api {get} /sfz_ficha_funcional_api/api/public/tipoDadoFichaFuncional Consultar tipos de dados
 * @apiName consultar tipos de dados
 * @apiDescription Consultar todos os tipos de dados.
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 *[
 *    {
 *         "id": 2,
 *         "nomeTipo": "Nome do Pai",
 *         "grupoTipo": {
 *             "id": 1,
 *             "nomeGrupoTipo": "Cadastro",
 *             "numeroPessoaInclusao": 100
 *         },
 *         "numeroPessoaInclusao": 100
 *     }
 *]
 */

 /**
 * @api {get} /sfz_ficha_funcional_api/api/public/tipoDadoFichaFuncional Consultar tipos de dados
 * @apiName consultar tipos de dados
 * @apiDescription Consultar todos os tipos de dados.
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 *[
 *    {
 *         "id": 2,
 *         "nomeTipo": "Nome do Pai",
 *         "grupoTipo": {
 *             "id": 1,
 *             "nomeGrupoTipo": "Cadastro",
 *             "numeroPessoaInclusao": 100
 *         },
 *         "numeroPessoaInclusao": 100
 *     }
 *]
 */

 /**
 * @api {get} /sfz_ficha_funcional_api/api/public/tipoDadoFichaFuncional/grupo/{idGrupo} Consultar tipos de dados por grupo
 * @apiName consultar tipos de dados por grupo
 * @apiDescription Consultar todos os tipos de dados por grupo.
 * @apiGroup gpmob-rh
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Integer} idGrupo Id do grupo de dados.
 * @apiError (Erro 400) BadRequest Requisição inválida.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 *[
 *    {
 *        "id": 27,
 *        "nomeTipo": "Assessoramentos",
 *        "grupoTipo": {
 *            "id": 2,
 *            "nomeGrupoTipo": "Portarias",
 *            "numeroPessoaInclusao": 100
 *        },
 *        "numeroPessoaInclusao": 529483
 *    }
 *]
 *
 */
