/**
 * @api {post} /sfz_nfce_api/api/public/consultarPrecosPorDescricao consultarPrecosPorDescricao
 * @apiName consultarPrecosPorDescricao
 * @apiDescription Consulta preços de mercadorias por descrição.
 * @apiGroup nfce
 * @apiVersion 1.2.0
 * @apiHeader {String} AppToken Token de acesso do usuário.
 * @apiParam {String} descricao Nome do produto.
 * @apiParam {Integer} dias Número de dias da oferta (máx. 3 dias).
 * @apiParam {Double} latitude Latitude de onde se encontra o dispositivo de consulta.
 * @apiParam {Double} longitude Longitude de onde se encontra o dispositivo de consulta.
 * @apiParam {Integer} raio Raio de alcance em Kilômetros dos estabelecimentos pesquisados (máx. 15 km).
 * @apiSuccess (Sucesso 201) {Object[]} produtos Lista de prodtos que satisfazem a consulta.
 * @apiSuccess (Sucesso 201) {String} produtos.codGetin Código do produto.
 * @apiSuccess (Sucesso 201) {Long} produto.codNcm Código NCM do produto. Nas consultas por descrição, é fornecido apenas quando o estabelecimento informa na nota fiscal.
 * @apiSuccess (Sucesso 201) {String} produtos.dscProduto Descrição do produto.
 * @apiSuccess (Sucesso 201) {String} produtos.dthEmissaoUltimaVenda Data de Última venda do produto.
 * @apiSuccess (Sucesso 201) {Double} produtos.valUnitarioUltimaVenda Valor unitário da Útima venda.
 * @apiSuccess (Sucesso 201) {Double} produtos.valUltimaVenda Valor da Última venda.
 * @apiSuccess (Sucesso 201) {Double} produtos.valMinimoVendido Valor mínimo vendido no período pesquisado.
 * @apiSuccess (Sucesso 201) {Double} produtos.valMaximoVendido Valor máximo vendido no período pesquisado.
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
 * @apiSuccess (Sucesso 201) {Double} produtos.numLongitude Longitude do estabelecimento.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 * @apiError (Erro 500) InternalServerError Autorização do aplicativo não encontrada.
 *
 * @apiParamExample {json} Exemplo de passagem de parâmetros:
 * {
 *     "descricao": "coca ",
 *     "dias": 3,
 *     "latitude": -9.6432331,
 *     "longitude": -35.7190686,
 *     "raio": 15
 * }
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *    {
 *        "codGetin": "07894900010015",
 *        "codNcm": "22021000",
 *        "dscProduto": "REFRI COCA COLA LT 350ML",
 *        "valMinimoVendido": 0.01,
 *        "valMaximoVendido": 3.75,
 *        "dthEmissaoUltimaVenda": "2017-10-16T10:03:15.000+0000",
 *        "valUnitarioUltimaVenda": 3.75,
 *        "valUltimaVenda": 0.01,
 *        "numCNPJ": "12268876000364",
 *        "nomRazaoSocial": "RENOVADORA DE PNEUS OK LTDA",
 *        "nomFantasia": null,
 *        "numTelefone": null,
 *        "nomLogradouro": "R   JANGADEIROS ALAGOANOS",
 *        "numImovel": "1351",
 *        "nomBairro": "PAJUSSARA",
 *        "numCep": "57030000",
 *        "nomMunicipio": "MACEIO",
 *        "numLatitude": -9.663984599999999,
 *        "numLongitude": -35.7111234
 *    },
 *    {
 *        "codGetin": null,
 *        "codNcm": "22021000",
 *        "dscProduto": "REFRI COCA COLA L 350 ML RESTAURANTE",
 *        "valMinimoVendido": 0.01,
 *        "valMaximoVendido": 7.5,
 *        "dthEmissaoUltimaVenda": "2017-10-16T22:20:18.000+0000",
 *        "valUnitarioUltimaVenda": 7.5,
 *        "valUltimaVenda": 0.01,
 *        "numCNPJ": "09326499000104",
 *        "nomRazaoSocial": "SOTEL HOTELARIA S/A",
 *        "nomFantasia": "SOTEL HOTELARIA",
 *        "numTelefone": null,
 *        "nomLogradouro": "AV DOUTOR ANTONIO GOUVEIA",
 *        "numImovel": "925",
 *        "nomBairro": "PAJUCARA",
 *        "numCep": "57030170",
 *        "nomMunicipio": "MACEIO",
 *        "numLatitude": -9.666352699999999,
 *        "numLongitude": -35.7125364
 *    }
 *]
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-10-11T14:44:27.332+0000",
 *    "status": 500,
 *    "error": "Internal Server Error",
 *    "exception": "br.gov.al.sefaz.acessoaplicativo.security.exception.AplicativoNaoEncontradaAutorizacaoAplicativoException",
 *    "message": "Autorização do aplicativo não encontrada.",
 *    "path": "/sfz_nfce_api/api/public/consultarPrecoProdutoEmEstabelecimento"
 * }
 * Response Code
 * 500
 */

/**
 * @api {post} /sfz_nfce_api/api/public/consultarPrecosPorCodigoDeBarras consultarPrecosPorCodigoDeBarras
 * @apiName consultarPrecosPorCodigoDeBarras
 * @apiDescription Consulta preços de mercadorias por código de barras.
 * @apiGroup nfce
 * @apiVersion 1.2.0
 * @apiHeader {String} AppToken Token de acesso do usuário.
 * @apiParam {String} codigoDeBarras Código de barras do produto.
 * @apiParam {Integer} dias Número de dias da oferta (máx. 3 dias).
 * @apiParam {Double} latitude Latitude de onde se encontra o dispositivo de consulta.
 * @apiParam {Double} longitude Longitude de onde se encontra o dispositivo de consulta.
 * @apiParam {Integer} raio Raio de alcance em Kilômetros dos estabelecimentos pesquisados (máx. 15 km).
 * @apiSuccess (Sucesso 201) {Object[]} produtos Lista de prodtos que satisfazem a consulta.
 * @apiSuccess (Sucesso 201) {String} produtos.codGetin Código do produto.
 * @apiSuccess (Sucesso 201) {Long} produto.codNcm Código NCM do produto. Nas consultas por descrição, é fornecido apenas quando o estabelecimento informa na nota fiscal.
 * @apiSuccess (Sucesso 201) {String} produtos.dscProduto Descrição do produto.
 * @apiSuccess (Sucesso 201) {String} produtos.dthEmissaoUltimaVenda Data de Última venda do produto.
 * @apiSuccess (Sucesso 201) {Double} produtos.valUnitarioUltimaVenda Valor unitário da Útima venda.
 * @apiSuccess (Sucesso 201) {Double} produtos.valUltimaVenda Valor da Última venda.
 * @apiSuccess (Sucesso 201) {Double} produtos.valMinimoVendido Valor mínimo vendido no período pesquisado.
 * @apiSuccess (Sucesso 201) {Double} produtos.valMaximoVendido Valor máximo vendido no período pesquisado.
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
 * @apiSuccess (Sucesso 201) {Double} produtos.numLongitude Longitude do estabelecimento.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 * @apiError (Erro 500) InternalServerError Autorização do aplicativo não encontrada.
 *
 * @apiParamExample {json} Request-Example:
 * {
 *     "codigoDeBarras": "07894900010015",
 *     "dias": 3,
 *     "latitude": -9.6432331,
 *     "longitude": -35.7190686,
 *     "raio": 15
 * }
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * [
 *   {
 *       "codGetin": "07894900010015",
 *       "codNcm": "22021000",
 *       "dscProduto": "REFRI COCA COLA LT 350ML",
 *       "valMinimoVendido": 0.01,
 *       "valMaximoVendido": 3.75,
 *       "dthEmissaoUltimaVenda": "2017-10-16T10:03:15.000+0000",
 *       "valUnitarioUltimaVenda": 3.75,
 *       "valUltimaVenda": 0.01,
 *       "numCNPJ": "12268876000364",
 *       "nomRazaoSocial": "RENOVADORA DE PNEUS OK LTDA",
 *       "nomFantasia": null,
 *       "numTelefone": null,
 *       "nomLogradouro": "R   JANGADEIROS ALAGOANOS",
 *       "numImovel": "1351",
 *       "nomBairro": "PAJUSSARA",
 *       "numCep": "57030000",
 *       "nomMunicipio": "MACEIO",
 *       "numLatitude": -9.663984599999999,
 *       "numLongitude": -35.7111234
 *   },
 *   {
 *       "codGetin": "7894900010015",
 *       "codNcm": "22021000",
 *       "dscProduto": "REFRI COCA-COLA 350ML",
 *       "valMinimoVendido": 2.25,
 *       "valMaximoVendido": 2.25,
 *       "dthEmissaoUltimaVenda": "2017-10-17T00:46:59.000+0000",
 *       "valUnitarioUltimaVenda": 2.25,
 *       "valUltimaVenda": 2.25,
 *       "numCNPJ": "12303616000625",
 *       "nomRazaoSocial": "S. VIEIRA DA SILVA EIRELI",
 *       "nomFantasia": "CASA VIEIRA",
 *       "numTelefone": "(82) 21234444",
 *       "nomLogradouro": "AV MENINO MARCELO",
 *       "numImovel": "3800",
 *       "nomBairro": "CIDADE UNIVERSITARIA",
 *       "numCep": "57073470",
 *       "nomMunicipio": "MACEIO",
 *       "numLatitude": -9.555659400000001,
 *       "numLongitude": -35.7581934
 *   },
 *   {
 *       "codGetin": "7894900010015",
 *       "codNcm": "22021000",
 *       "dscProduto": "COCA COLA 350 ML",
 *       "valMinimoVendido": 2.25,
 *       "valMaximoVendido": 4.5,
 *       "dthEmissaoUltimaVenda": "2017-10-16T19:56:12.000+0000",
 *       "valUnitarioUltimaVenda": 4.5,
 *       "valUltimaVenda": 2.25,
 *       "numCNPJ": "00808928000369",
 *       "nomRazaoSocial": "FF SORVETES LTDA - EPP                     ",
 *       "nomFantasia": null,
 *       "numTelefone": null,
 *       "nomLogradouro": "AV  ALVARO OTACILIO",
 *       "numImovel": "3195",
 *       "nomBairro": "PONTA VERDE",
 *       "numCep": "57035180",
 *       "nomMunicipio": "MACEIO",
 *       "numLatitude": -9.657080599999999,
 *       "numLongitude": -35.6988336
 *   }
 *]
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-10-11T14:44:27.332+0000",
 *    "status": 500,
 *    "error": "Internal Server Error",
 *    "exception": "br.gov.al.sefaz.acessoaplicativo.security.exception.AplicativoNaoEncontradaAutorizacaoAplicativoException",
 *    "message": "Autorização do aplicativo não encontrada.",
 *    "path": "/sfz_nfce_api/api/public/consultarPrecoProdutoEmEstabelecimento"
 * }
 * Response Code
 * 500
 */

 /**
 * @api {post} /sfz_nfce_api/api/public/consultarPrecoProdutoEmEstabelecimento consultarPrecoProdutoEmEstabelecimento
 * @apiName consultarPrecoProdutoEmEstabelecimento
 * @apiDescription Consulta o menor preço de venda de um produto em determinado estabelecimento.
 * @apiGroup nfce
 * @apiVersion 1.1.0
 * @apiHeader {String} AppToken Token de acesso do usuário.
 * @apiParam {String} cnpj CNPJ do estabelecimento.
 * @apiParam {String} codigoBarras Número do código de barras.
 * @apiParam {Integer} quantidadeDeDias Número de dias da busca.
 * @apiSuccess (Sucesso 201) {Object} produto Prodtos que satisfaz a consulta.
 * @apiSuccess (Sucesso 201) {String} produto.codGetin Código do produto.
 * @apiSuccess (Sucesso 201) {Long} produto.codNcm Código NCM do produto. Nas consultas por descrição, é fornecido apenas quando o estabelecimento informa na nota fiscal.
 * @apiSuccess (Sucesso 201) {String} produto.dscProduto Descrição do produto.
 * @apiSuccess (Sucesso 201) {String} produto.dthEmissaoUltimaVenda Data de Última venda do produto.
 * @apiSuccess (Sucesso 201) {Double} produto.valUnitarioUltimaVenda Valor unitário da Útima venda.
 * @apiSuccess (Sucesso 201) {Double} produto.valUltimaVenda Valor da Última venda.
 * @apiSuccess (Sucesso 201) {Double} produtos.valMinimoVendido Valor mínimo vendido no período pesquisado.
 * @apiSuccess (Sucesso 201) {Double} produtos.valMaximoVendido Valor máximo vendido no período pesquisado.
 * @apiSuccess (Sucesso 201) {String} produto.txtDataUltimaEmissao Cálculo do tempo da Data da última emissão do produto.
 * @apiSuccess (Sucesso 201) {String} produto.numCNPJ Número Cadastro Nacional da pessoa jurídica.
 * @apiSuccess (Sucesso 201) {String} produto.nomRazaoSocial Nome da razão social do contribuinte.
 * @apiSuccess (Sucesso 201) {String} produto.nomFantasia Nome fantasia do contribuinte.
 * @apiSuccess (Sucesso 201) {String} produto.numTelefone Número de telefone do contribuinte.
 * @apiSuccess (Sucesso 201) {String} produto.nomLogradouro Nome do logradouro do estabelecimento.
 * @apiSuccess (Sucesso 201) {String} produto.numImovel Número do estabelecimento.
 * @apiSuccess (Sucesso 201) {String} produto.nomBairro Nome do bairro do estabelecimento.
 * @apiSuccess (Sucesso 201) {String} produto.numCep CEP.
 * @apiSuccess (Sucesso 201) {String} produto.nomMunicipio Municí­pio.
 * @apiSuccess (Sucesso 201) {Double} produto.numLatitude Latitude do estabelecimento.
 * @apiSuccess (Sucesso 201) {Double} produto.numLongitude Longitude do estabelecimento.
 * @apiError (Erro 401) Unauthorized Usuário não autorizado a consultar esta função.
 * @apiError (Erro 403) Forbidden Usuário sem acesso.
 * @apiError (Erro 404) NotFound <code>id</code> do usuário não encontrado.
 * @apiError (Erro 500) InternalServerError Autorização do aplicativo não encontrada.
 *
 * @apiParamExample {json} Request-Example:
 * {
 *   "cnpj": "13004510039395",
 *   "codigoBarras" : "7898286201968",
 *   "quantidadeDeDias": 3
 * }
 *
 * @apiSuccessExample Exemplo de retorno do sucesso:
 * {
 *     "codGetin": "7898286201968",
 *     "codNcm": "21069029",
 *     "dscProduto": "REFR MACA MARATA",
 *     "valMinimoVendido": 0.65,
 *     "valMaximoVendido": 0.65,
 *     "dthEmissaoUltimaVenda": "2017-10-14T17:17:29.000+0000",
 *     "valUnitarioUltimaVenda": 0.65,
 *     "valUltimaVenda": 0.65,
 *     "txtDataUltimaEmissao": "Há 2 dias e 23 horas",
 *     "numCNPJ": "13004510039395",
 *     "nomRazaoSocial": "BOMPRECO SUPERMERCADOS DO NORDESTE LTDA",
 *     "nomFantasia": "HIPERMERCADO",
 *     "numTelefone": "(81) 32717297",
 *     "nomLogradouro": "AV MENINO MARCELO",
 *     "numImovel": "5300",
 *     "nomBairro": "ANTARES",
 *     "numCep": "57083410",
 *     "nomMunicipio": "MACEIO",
 *     "numLatitude": -9.574557,
 *     "numLongitude": -35.738457
 * }
 *
 * @apiErrorExample Exemplo de retorno do erro:
 * {
 *    "timestamp": "2017-10-11T14:44:27.332+0000",
 *    "status": 500,
 *    "error": "Internal Server Error",
 *    "exception": "br.gov.al.sefaz.acessoaplicativo.security.exception.AplicativoNaoEncontradaAutorizacaoAplicativoException",
 *    "message": "Autorização do aplicativo não encontrada.",
 *    "path": "/sfz_nfce_api/api/public/consultarPrecoProdutoEmEstabelecimento"
 * }
 * Response Code
 * 500
 */