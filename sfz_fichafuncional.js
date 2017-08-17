/**
 * @api {post} /sfz_ficha_funcional_api/api/public/fichaFuncional fichaFuncional
 * @apiName fichaFuncional
 * @apiDescription Consulta ficha dos funcionários da SEFAZ/AL.
 * @apiGroup fichafuncional
 * @apiVersion 1.0.0
 * @apiHeader {String} Autorization Token de acesso do usuário.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 * @apiSuccess (Sucesso 201) {Object[]} dadosdofuncionario Dados do fazendário.
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *     "nomeFuncionario": "FULANO DE TAL",
 *         "dependentes": [
 *             {
 *                 "numeroPessoaFuncionario": 529483,
 *                 "tipoStatus": "VALIDO",
 *                 "numeroPessoaInclusao": 529483,
 *                 "numeroPessoaAlteracao": 529483,
 *                 "dataInclusao": 1501839584000,
 *                 "dataAlteracao": 1502287967000,
 *                 "id": 1,
 *                 "idDependenteOrigem": null,
 *                 "nome": "Filha 1",
 *                 "tipoParentesco": {
 *                     "codigo": 3,
 *                     "nome": "Filho(a)"
 *                 },
 *                 "cpf": "21000000000",
 *                 "rg": "1234",
 *                 "codigoTipoSexo": "M",
 *                 "dataNascimento": 1060041600000,
 *                 "tipo": "VALIDO",
 *                 "pessoaFuncionario": 529483,
 *                 "pessoaInclusao": 529483,
 *                 "pessoaAlteracao": 529483,
 *                 "inclusao": 1501839584000,
 *                 "alteracao": 1502287967000
 *             },
 *             {
 *                 "numeroPessoaFuncionario": 529483,
 *                 "tipoStatus": "VALIDO",
 *                 "numeroPessoaInclusao": 529483,
 *                 "numeroPessoaAlteracao": 529483,
 *                 "dataInclusao": 1502300000000,
 *                 "dataAlteracao": 1502360906000,
 *                 "id": 29,
 *                 "idDependenteOrigem": 13,
 *                 "nome": "Mãe",
 *                 "tipoParentesco": {
 *                     "codigo": 2,
 *                     "nome": "Mãe"
 *                 },
 *                 "cpf": "22222222",
 *                 "rg": "2001",
 *                 "codigoTipoSexo": "F",
 *                 "dataNascimento": 1486080000000,
 *                 "tipo": "VALIDO",
 *                 "pessoaFuncionario": 529483,
 *                 "pessoaInclusao": 529483,
 *                 "pessoaAlteracao": 529483,
 *                 "inclusao": 1502300000000,
 *                 "alteracao": 1502360906000
 *             }
 *         ],
 *             "grupos": [
 *                 {
 *                     "descricao": "Averbações",
 *                     "dados": [
 *                         {
 *                             "numeroPessoaFuncionario": 529483,
 *                             "tipoStatus": "VALIDO",
 *                             "numeroPessoaInclusao": 529483,
 *                             "numeroPessoaAlteracao": 529483,
 *                             "dataInclusao": 1502703085000,
 *                             "dataAlteracao": 1502703085000,
 *                             "id": 37905,
 *                             "descricao": "8 anos",
 *                             "tipoDadoFichaFuncional": {
 *                                 "id": 24,
 *                                 "nomeTipo": "Tempo de Serviço Público",
 *                                 "grupoTipo": {
 *                                     "id": 3,
 *                                     "nomeGrupoTipo": "Averbações",
 *                                     "numeroPessoaInclusao": 100
 *                                 },
 *                                 "numeroPessoaInclusao": 529483
 *                             },
 *                             "tipo": "VALIDO",
 *                             "pessoaFuncionario": 529483,
 *                             "pessoaInclusao": 529483,
 *                             "pessoaAlteracao": 529483,
 *                             "inclusao": 1502703085000,
 *                             "alteracao": 1502703085000
 *                         }
 *                     ]
 *                 }
 *             ]
 * }
 */