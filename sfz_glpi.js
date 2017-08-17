/**
 * @api {get} /sfz_glpi_api/api/public/obterCategorias obterCategorias
 * @apiName obterCategorias
 * @apiDescription Obter Categorias para abertura do chamado
 * @apiGroup glpi
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiSuccess (Sucesso 200) {Object[]} categorias Lista de categorias.
 * @apiSuccess (Sucesso 200) {Integer} categorias.id Id da categoria.
 * @apiSuccess (Sucesso 200) {String} categorias.descricao Descrição da categoria.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *   {
 *       "id": 64,
 *       "descricao": "Dúvida"
 *   },
 *   {
 *       "id": 65,
 *       "descricao": "Denúncia"
 *   }
 * ]
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "timestamp": "2017-08-17T18:54:02.119+0000",
 *   "status": 403,
 *   "error": "Forbidden",
 *   "message": "Access Denied",
 *   "path": "/api/public/obterCategorias"
 * }
 * Response Code
 * 403
 */

 /**
 * @api {get} /sfz_glpi_api/api/public/chamado Chamados do Usuário
 * @apiName chamado
 * @apiDescription Obter Chamados para o Usuário
 * @apiGroup glpi
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiSuccess (Sucesso 200) {Object[]} chamados Lista de chamados.
 * @apiSuccess (Sucesso 200) {Integer} chamados.id Id do chamado.
 * @apiSuccess (Sucesso 200) {String} chamados.titulo Título do chamado.
 * @apiSuccess (Sucesso 200) {String} chamados.descricao Descrição do chamado.
 * @apiSuccess (Sucesso 200) {String} chamados.solucao Solução para o chamado.
 * @apiSuccess (Sucesso 200) {String} chamados.dataAbertura Data da abertura do chamado.
 * @apiSuccess (Sucesso 200) {String} chamados.dataFechamento Data do encerramento do chamado.
 * @apiSuccess (Sucesso 200) {Integer} chamados.idCategoria Id da categoria.
 * @apiSuccess (Sucesso 200) {Integer} chamados.status Status do chamado.
 * @apiSuccess (Sucesso 200) {String} chamados.dataAgendamento Data de agendamento do chamado.
 * @apiSuccess (Sucesso 200) {Integer} chamados.reservado Reservado.
 * @apiSuccess (Sucesso 200) {Integer} chamados.reservavel Reservável.
 * @apiSuccess (Sucesso 200) {String} chamados.dataCriacao Data da criação do chamado.
 * @apiSuccess (Sucesso 200) {Object[]} chamados.statusChamado Lista de status do chamado.
 * @apiSuccess (Sucesso 200) {Integer} chamados.statusChamado.id Lista de status ddo chamado.
 * @apiSuccess (Sucesso 200) {String} chamados.statusChamado.dataAbertura Data abertura do status.
 * @apiSuccess (Sucesso 200) {String} chamados.statusChamado.descricao Descrição do status.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *   {
 *       "id": 6,
 *       "titulo": "documento teste",
 *       "descricao": "dados adicionais",
 *       "solucao": null,
 *       "dataAbertura": "2017-03-17T10:55:13.000+0000",
 *       "dataFechamento": null,
 *       "idCategoria": 31,
 *       "status": 2,
 *       "dataAgendamento": "2017-08-16T15:27:23.000+0000",
 *       "reservado": 0,
 *       "reservavel": 0,
 *       "dataCriacao": "2017-03-17T10:55:13.000+0000",
 *       "statusChamado": [
 *           {
 *               "id": 27,
 *               "dataAbertura": "2017-03-23T11:35:44.000+0000",
 *               "descricao": "foi efetuada uma ligação onde foi esclarecida a dúvida"
 *           },
 *           {
 *               "id": 38,
 *               "dataAbertura": "2017-03-24T08:55:35.000+0000",
 *               "descricao": "teste2"
 *           }
 *       ]
 *   }
 * ]
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "timestamp": "2017-08-17T18:54:02.119+0000",
 *   "status": 403,
 *   "error": "Forbidden",
 *   "message": "Access Denied",
 *   "path": "/api/public/obterCategorias"
 * }
 * Response Code
 * 403
 */

 /**
 * @api {get} /sfz_glpi_api/api/public/chamado Consultar Chamado por ID
 * @apiName chamado
 * @apiDescription Consultar Chamado or ID
 * @apiGroup glpi
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {Integer} Id do chamado.
 * @apiSuccess (Sucesso 200) {Object} chamado Lista de chamados.
 * @apiSuccess (Sucesso 200) {Integer} chamado.id Id do chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.titulo Título do chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.descricao Descrição do chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.solucao Solução para o chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.dataAbertura Data da abertura do chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.dataFechamento Data do encerramento do chamado.
 * @apiSuccess (Sucesso 200) {Integer} chamado.idCategoria Id da categoria.
 * @apiSuccess (Sucesso 200) {Integer} chamado.status Status do chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.dataAgendamento Data de agendamento do chamado.
 * @apiSuccess (Sucesso 200) {Integer} chamado.reservado Reservado.
 * @apiSuccess (Sucesso 200) {Integer} chamado.reservavel Reservável.
 * @apiSuccess (Sucesso 200) {String} chamado.dataCriacao Data da criação do chamado.
 * @apiSuccess (Sucesso 200) {Object[]} chamado.statusChamado Lista de status do chamado.
 * @apiSuccess (Sucesso 200) {Integer} chamado.statusChamado.id Lista de status ddo chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.statusChamado.dataAbertura Data abertura do status.
 * @apiSuccess (Sucesso 200) {String} chamado.statusChamado.descricao Descrição do status.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *   {
 *       "id": 6,
 *       "titulo": "documento teste",
 *       "descricao": "dados adicionais",
 *       "solucao": null,
 *       "dataAbertura": "2017-03-17T10:55:13.000+0000",
 *       "dataFechamento": null,
 *       "idCategoria": 31,
 *       "status": 2,
 *       "dataAgendamento": "2017-08-16T15:27:23.000+0000",
 *       "reservado": 0,
 *       "reservavel": 0,
 *       "dataCriacao": "2017-03-17T10:55:13.000+0000",
 *       "statusChamado": [
 *           {
 *               "id": 27,
 *               "dataAbertura": "2017-03-23T11:35:44.000+0000",
 *               "descricao": "foi efetuada uma ligação onde foi esclarecida a dúvida"
 *           },
 *           {
 *               "id": 38,
 *               "dataAbertura": "2017-03-24T08:55:35.000+0000",
 *               "descricao": "teste2"
 *           }
 *       ]
 *   }
 * ]
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "timestamp": "2017-08-17T18:54:02.119+0000",
 *   "status": 403,
 *   "error": "Forbidden",
 *   "message": "Access Denied",
 *   "path": "/api/public/obterCategorias"
 * }
 * Response Code
 * 403
 */


 /**
 * @api {post} /sfz_glpi_api/api/public/chamado/abrir Abrir chamado
 * @apiName abrir
 * @apiDescription Abrir chamado
 * @apiGroup glpi
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiParam {String} descricao Descrição do novo chamado.
 * @apiParam {Integer} idCategoria Id da categoria.
 * @apiParam {String} titulo Título da categoria.
 * @apiSuccess (Sucesso 200) {Object} chamado Chamado criado.
 * @apiSuccess (Sucesso 200) {Integer} chamado.id Id do chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.titulo Título do chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.descricao Descrição do chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.solucao Solução para o chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.dataAbertura Data da abertura do chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.dataFechamento Data do encerramento do chamado.
 * @apiSuccess (Sucesso 200) {Integer} chamado.idCategoria Id da categoria.
 * @apiSuccess (Sucesso 200) {Integer} chamado.status Status do chamado.
 * @apiSuccess (Sucesso 200) {String} chamado.dataAgendamento Data de agendamento do chamado.
 * @apiSuccess (Sucesso 200) {Integer} chamado.reservado Reservado.
 * @apiSuccess (Sucesso 200) {Integer} chamado.reservavel Reservável.
 * @apiSuccess (Sucesso 200) {String} chamado.dataCriacao Data da criação do chamado.
 * @apiError (Erro 400) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *     "id": 6,
 *     "titulo": "documento teste",
 *     "descricao": "dados adicionais",
 *     "solucao": null,
 *     "dataAbertura": "2017-03-17T10:55:13.000+0000",
 *     "dataFechamento": null,
 *     "idCategoria": 31,
 *     "status": 2,
 *     "dataAgendamento": "2017-08-16T15:27:23.000+0000",
 *     "reservado": 0,
 *     "reservavel": 0,
 *     "dataCriacao": "2017-03-17T10:55:13.000+0000",
 * }
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * Response Body
 * {
 *   "message": "error.validation",
 *   "description": null,
 *   "fieldErrors": [
 *       {
 *           "objectName": "chamadoDTO",
 *           "field": "idCategoria",
 *           "message": "NotNull"
 *       }
 *   ]
 * }
 * Response Code
 * 400
 */