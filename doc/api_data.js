define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_luan_Projetos_Hackathon_hackathon_api_doc_doc_main_js",
    "groupTitle": "_home_luan_Projetos_Hackathon_hackathon_api_doc_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/public/antecipacao/consultarValoresAntecipados",
    "title": "consultarValoresAntecipados",
    "name": "consultarValoresAntecipados",
    "description": "<p>Consulta valores antecipado e FECOEP.</p>",
    "group": "antecipacao",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "competencia",
            "description": "<p>Competência mm/aaaa</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "numeroCaceal",
            "description": "<p>Número da inscrição estadual do Contribuinte.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Object[]",
            "optional": false,
            "field": "antecipados",
            "description": "<p>Lista de valores antecipados.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "antecipados.sequencialAntecipacao",
            "description": "<p>Número sequencial de antecipação.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "antecipados.dataVencimento",
            "description": "<p>Data de vencimento.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "antecipados.valorAntecipado",
            "description": "<p>Valor antecipado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "antecipados.numeroCaceal",
            "description": "<p>Número de inscrição estadual.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "antecipados.codigoTributo",
            "description": "<p>Código do tributo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "antecipados.competencia",
            "description": "<p>Competência (mm/yyyy).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "[\n    {\n        \"sequencialAntecipacao\": 402801,\n        \"dataVencimento\": \"2007-03-20T03:00:00.000+0000\",\n        \"valorAntecipado\": 7753.7,\n        \"numeroCaceal\": 24002198,\n        \"codigoTributo\": 15423,\n        \"competencia\": \"2/2007\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "{\n   \"timestamp\": \"2017-08-15T17:03:04.011+0000\",\n   \"status\": 403,\n   \"error\": \"Forbidden\",\n   \"message\": \"Access Denied\",\n   \"path\": \"/api/public/antecipacao/consultarValoresAntecipados\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_fronteiras.js",
    "groupTitle": "antecipacao"
  },
  {
    "type": "post",
    "url": "/api/public/autenticar",
    "title": "autenticar",
    "name": "autenticar",
    "description": "<p>Solicita o acesso do aplicatvo à SEFAZ/AL.</p>",
    "group": "autorizacao_aplicativo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login do usuário na SEFAZ/AL.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomeDispositivo",
            "description": "<p>Nome do dispositivo cadastrado previamente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tokenApp",
            "description": "<p>Token de acesso do aplicativo.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "codigo",
            "description": "<p>Código obtido ao solicitar autorização.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "mensagem",
            "description": "<p>Mensagem...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "{\n  \"codigo\": 20,\n  \"mensagem\": \"Autorização aplicativo pendente.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      }
    },
    "filename": "./sfz_funcoes.js",
    "groupTitle": "autorizacao_aplicativo"
  },
  {
    "type": "post",
    "url": "/sfz-habilitacao-aplicativo-api/api/public/autorizacao-aplicativo/solicitar",
    "title": "solicitar",
    "name": "solicitar",
    "description": "<p>Envia solicitação de acesso à SEFAZ/AL.</p>",
    "group": "autorizacao_aplicativo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login do usuário na SEFAZ/AL.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomeDispositivo",
            "description": "<p>Nome do dispositivo cadastrado previamente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tokenApp",
            "description": "<p>Token de acesso do aplicativo.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "idAutorizacao",
            "description": "<p>Número identificador da autorização.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "urlAutorizacao",
            "description": "<p>Url de acesso da autorização.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "{\n  \"idAutorizacao\": 20,\n  \"urlAutorizacao\": \"sefaz.urlAutorizacaoAplicativoUsuario\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      }
    },
    "filename": "./sfz_funcoes.js",
    "groupTitle": "autorizacao_aplicativo"
  },
  {
    "type": "get",
    "url": "/sfz_certidao_api/api/public/consultaCertidao/consultarCnd",
    "title": "Consultar Cnd",
    "name": "Consultar_Cnd",
    "description": "<p>Consultar Cnd</p>",
    "group": "certidao",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Autorization",
            "description": "<p>Token de acesso do usuário.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numeroDocumento",
            "description": "<p>Número do documento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipoDocumento",
            "description": "<p>Tido do documento(CACE, CPF ou CNPJ).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Object",
            "optional": false,
            "field": "certidao",
            "description": "<p>Certidão.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "certidao.tipoCertidao",
            "description": "<p>Tipo da certidão(CPEN - CERTIDÃO POSITIVA COM EFEITO NEGATIVO, CP - CERTIDÃO POSITIVA, CN - CERTIDÃO NEGATIVA).</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "certidao.numeroDocumento",
            "description": "<p>Número do documento.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "certidao.horaEmissao",
            "description": "<p>Hora da emissão da certidão.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "certidao.dataEmissao",
            "description": "<p>Data da emissão da certidão.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "certidao.codigoAutenticacao",
            "description": "<p>Código de autenticação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "{\n  \"tipoCertidao\": \"CN\",\n  \"numeroDocumento\": \"24726005\",\n  \"horaEmissao\": \"16:38:58\",\n  \"dataEmissao\": \"17/08/2017\",\n  \"codigoAutenticacao\": \"1DE37663493043ED\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 400": [
          {
            "group": "Erro 400",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request Erro no request.</p>"
          }
        ],
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "Response Body\n{\n  \"message\": \"error.validation\",\n  \"description\": null,\n  \"fieldErrors\": [\n      {\n          \"objectName\": \"parametroConsultarCnd\",\n          \"field\": \"tipoDocumento\",\n          \"message\": \"Tipos Válidos CACE | CPF | CNPJ\"\n      }\n  ]\n}\nResponse Code\n400",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Exemplo:",
        "content": "{\n  \"numeroDocumento\": \"24726005\",\n  \"tipoDocumento\": \"CACE\"\n}",
        "type": "json"
      }
    ],
    "filename": "./sfz_certidao.js",
    "groupTitle": "certidao"
  },
  {
    "type": "get",
    "url": "/sfz_certidao_api/api/public/consultaCertidao/consultarPendencias",
    "title": "Consultar Pendências",
    "name": "Consultar_Pend_ncias",
    "description": "<p>Consultar Pendências</p>",
    "group": "certidao",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Autorization",
            "description": "<p>Token de acesso do usuário.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numeroDocumento",
            "description": "<p>Número do documento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipoDocumento",
            "description": "<p>Tido do documento(CACE, CPF ou CNPJ).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Object",
            "optional": false,
            "field": "pendencia",
            "description": "<p>Pendência.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.tipoCertidao",
            "description": "<p>Tipo da certidão.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.numeroDocumento",
            "description": "<p>Número do documento.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.horaEmissao",
            "description": "<p>Hora da emissão da certidão.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.dataEmissao",
            "description": "<p>Data da emissão da certidão.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.codigoAutenticacao",
            "description": "<p>Código de autenticação.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.nomeRazaoSocial",
            "description": "<p>Razão Social</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.numeroDocumento",
            "description": "<p>Número Documento</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDac",
            "description": "<p>Pendências Dac</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasGia",
            "description": "<p>Pendências Gia</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasEfd",
            "description": "<p>Pendências Efd</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.situacaoCadastral",
            "description": "<p>Situação Cadastral</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Object[]",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas",
            "description": ""
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.numero",
            "description": "<p>Número identificador pendência</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.sequencial",
            "description": "<p>Sequencial</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.descricao",
            "description": "<p>Descrição</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.competencia",
            "description": "<p>Competência</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.valorPrincipal",
            "description": "<p>Valor Principal</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.valorMulta",
            "description": "<p>Valor Multa</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.numeroInscricao",
            "description": "<p>Número Inscrição</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.numeroInscricaoFormatado",
            "description": "<p>Número Inscrição Formatado</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.numeroCertidao",
            "description": "<p>Número identificador Certidão</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.numeroParcelamento",
            "description": "<p>Número identificador parcelamento</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasAdministrativas.situacao",
            "description": "<p>Situação</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Object[]",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito",
            "description": ""
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.numero",
            "description": "<p>Número identificador pendência</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.sequencial",
            "description": "<p>Sequencial</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.descricao",
            "description": "<p>Descrição</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.competencia",
            "description": "<p>Competência</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.valorPrincipal",
            "description": "<p>Valor Principal</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.valorMulta",
            "description": "<p>Valor Multa</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.numeroInscricao",
            "description": "<p>Número Inscrição</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.numeroInscricaoFormatado",
            "description": "<p>Número Inscrição Formatado</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.numeroCertidao",
            "description": "<p>Número identificador Certidão</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.numeroParcelamento",
            "description": "<p>Número identificador parcelamento</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasDebito.situacao",
            "description": "<p>Situação</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Object[]",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento",
            "description": ""
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.numero",
            "description": "<p>Número identificador pendência</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.sequencial",
            "description": "<p>Sequencial</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.descricao",
            "description": "<p>Descrição</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.competencia",
            "description": "<p>Competência</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.valorPrincipal",
            "description": "<p>Valor Principal</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.valorMulta",
            "description": "<p>Valor Multa</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.numeroInscricao",
            "description": "<p>Número Inscrição</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.numeroInscricaoFormatado",
            "description": "<p>Número Inscrição Formatado</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.numeroCertidao",
            "description": "<p>Número identificador Certidão</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.numeroParcelamento",
            "description": "<p>Número identificador parcelamento</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "pendencia.certidaoDados.pendenciaDados.pendenciasParcelamento.situacao",
            "description": "<p>Situação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "{\n  \"certidaoDados\": {\n      \"tipoCertidao\": \"CN\",\n      \"numeroDocumento\": null,\n      \"horaEmissao\": \"12:47:09\",\n      \"dataEmissao\": \"21/07/2017\",\n      \"codigoAutenticacao\": \"EDC0650DB55C4428\"\n  },\n  \"pendenciaDados\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 400": [
          {
            "group": "Erro 400",
            "optional": false,
            "field": "Bad",
            "description": "<p>Request Erro no request.</p>"
          }
        ],
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "Response Body\n{\n  \"message\": \"error.validation\",\n  \"description\": null,\n  \"fieldErrors\": [\n      {\n          \"objectName\": \"parametroConsultarCnd\",\n          \"field\": \"tipoDocumento\",\n          \"message\": \"Tipos Válidos CACE | CPF | CNPJ\"\n      }\n  ]\n}\nResponse Code\n400",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Exemplo:",
        "content": "{\n  \"numeroDocumento\": \"24726005\",\n  \"tipoDocumento\": \"CACE\"\n}",
        "type": "json"
      }
    ],
    "filename": "./sfz_certidao.js",
    "groupTitle": "certidao"
  },
  {
    "type": "get",
    "url": "/cadastro/api/public/contribuinte/obterContribuinte",
    "title": "obterContribuinte",
    "name": "obterContribuinte",
    "description": "<p>Obtem os dados de um contribuinte.....</p>",
    "group": "contribuinte",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cnpjOuCaceal",
            "description": "<p>CNPJ ou Caceal.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Chave única de acesso do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "caceal",
            "description": "<p>Número da inscrição estadual do Contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": "<p>Código nacional de pessoa jurídica.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "codigoSituacaoCadastral",
            "description": "<p>Código da situação cadastral do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "descricaoSituacaoCadastral",
            "description": "<p>Descrição da situação cadastral do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "digitoCaceal",
            "description": "<p>Valor do último faturamento anual do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "endereco",
            "description": "<p>Endereço do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Object",
            "optional": false,
            "field": "naturezaJuridica",
            "description": "<p>Natureza Jurídica do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "codigo",
            "description": "<p>Código da Natureza Jurídica do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Descrição da Natureza Jurídica do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "nomeFantasia",
            "description": "<p>Nome fantasia do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "numeroPessoa",
            "description": "<p>Número Pessoa do Contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "numeroTelefone",
            "description": "<p>Telefone principal do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "razaoSocial",
            "description": "<p>Razão social do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Object",
            "optional": false,
            "field": "tipoContribuinte",
            "description": "<p>Tipo do contribuinte.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "{\n\"caceal\": 0,\n\"cnpj\": \"string\",\n\"codigoSituacaoCadastral\": \"string\",\n\"descricaoSituacaoCadastral\": \"string\",\n\"digitoCaceal\": 0,\n\"endereco\": \"string\",\n\"naturezaJuridica\": {\n  \"codigo\": 0,\n  \"descricao\": \"string\"\n },\n \"nomeFantasia\": \"string\",\n \"numeroPessoa\": 0,\n \"numeroTelefone\": \"string\",\n \"razaoSocial\": \"string\",\n \"tipoContribuinte\": {\n  \"codigo\": \"string\",\n  \"descricao\": \"string\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "{\n   \"timestamp\": \"2017-08-03T12:01:17.964+0000\",\n   \"status\": 403,\n   \"error\": \"Forbidden\",\n   \"message\": \"Access Denied\",\n   \"path\": \"/api/public/contribuinte/obterContribuinte/0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_cadastro.js",
    "groupTitle": "contribuinte"
  },
  {
    "type": "get",
    "url": "/cadastro/api/public/contribuinte/obterRestricoes",
    "title": "obterRestricoes",
    "name": "obterRestricoes",
    "description": "<p>Obtem as restrições cadastrais de um contribuinte.</p>",
    "group": "contribuinte",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "caceal",
            "description": "<p>Número da inscrição estadual do Contribuinte.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Chave única de acesso do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "codigoTipoRestricao",
            "description": "<p>Código do tipo de restrição.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "dataCompetencia",
            "description": "<p>Data e hora de competência.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "descricaoRestricao",
            "description": "<p>Descrição da restrição.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "id",
            "description": "<p>??.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "numeroCaceal",
            "description": "<p>CACEAL.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "numeroPessoa",
            "description": "<p>Número identificador da pessoa jurídica.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Object[]",
            "optional": false,
            "field": "restricao",
            "description": "<p>Natureza Jurídica do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "restricao.codigo",
            "description": "<p>Código da Natureza Jurídica do contribuinte.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "restricao.descricao",
            "description": "<p>Descrição da Natureza Jurídica do contribuinte.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "[\n  {\n    \"codigoTipoRestricao\": \"string\",\n    \"dataCompetencia\": \"2017-08-16T12:45:53.384Z\",\n    \"descricaoRestricao\": \"string\",\n    \"id\": 0,\n    \"numeroCaceal\": 0,\n    \"numeroPessoa\": 0,\n    \"restricao\": {\n      \"codigo\": 0,\n      \"descricao\": \"string\"\n    },\n    \"solucao\": \"string\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "{\n   \"timestamp\": \"2017-08-03T12:01:17.964+0000\",\n   \"status\": 403,\n   \"error\": \"Forbidden\",\n   \"message\": \"Access Denied\",\n   \"path\": \"/api/public/contribuinte/obterRestricoes/0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_cadastro.js",
    "groupTitle": "contribuinte"
  },
  {
    "type": "post",
    "url": "/api/public/dar/consultarAntecipado",
    "title": "consultarAntecipado",
    "name": "consultarAntecipado",
    "description": "<p>Consulta DAR antecipado e FECOEP.</p>",
    "group": "dar",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "numeroCaceal",
            "description": "<p>Número da inscrição estadual do Contribuinte</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "sequencialAntecipacao",
            "description": "<p>Número sequencial da antecipação.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Object[]",
            "optional": false,
            "field": "antecipados",
            "description": "<p>Lista de valores antecipados.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "antecipados.numeroProcessamento",
            "description": "<p>Número sequencial de antecipação.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "antecipados.codigoTributo",
            "description": "<p>Data de vencimento.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Double",
            "optional": false,
            "field": "antecipados.competencia",
            "description": "<p>Valor antecipado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "antecipados.numeroCaceal",
            "description": "<p>Número de inscrição estadual.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "antecipados.dataEmissao",
            "description": "<p>Código do tributo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "antecipados.dataPagamento",
            "description": "<p>Competência (mm/yyyy).</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "antecipados.valorPrincipal",
            "description": "<p>Competência (mm/yyyy).</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "antecipados.valorTotal",
            "description": "<p>Competência (mm/yyyy).</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "antecipados.valorMulta",
            "description": "<p>Competência (mm/yyyy).</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "antecipados.valorJuros",
            "description": "<p>Competência (mm/yyyy).</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "antecipados.codigoBarras",
            "description": "<p>Competência (mm/yyyy).</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "antecipados.sequencialAntecipacao",
            "description": "<p>Competência (mm/yyyy).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "[\n    {\n        \"numeroProcessamento\": 3354841,\n        \"codigoTributo\": 15423,\n        \"competencia\": 200702,\n        \"numeroCaceal\": 24002198,\n        \"dataEmissao\": \"2008-10-03T21:09:21.000+0000\",\n        \"dataPagamento\": null,\n        \"dataVencimento\": \"2007-03-20T03:00:00.000+0000\",\n        \"valorPrincipal\": 7753.7,\n        \"valorTotal\": 7753.7,\n        \"valorMulta\": 0,\n        \"valorJuros\": 0,\n        \"codigoBarras\": \"85670000077 6 53700002200 5 70320000000 7 00335484119 3\",\n        \"sequencialAntecipacao\": 402801\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "{\n   \"timestamp\": \"2017-08-15T17:03:04.011+0000\",\n   \"status\": 403,\n   \"error\": \"Forbidden\",\n   \"message\": \"Access Denied\",\n   \"path\": \"/api/public/dar/consultarAntecipado\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_fronteiras.js",
    "groupTitle": "dar"
  },
  {
    "type": "post",
    "url": "/sfz_ficha_funcional_api/api/public/fichaFuncional",
    "title": "fichaFuncional",
    "name": "fichaFuncional",
    "description": "<p>Consulta ficha dos funcionários da SEFAZ/AL.</p>",
    "group": "fichafuncional",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Autorization",
            "description": "<p>Token de acesso do usuário.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 201": [
          {
            "group": "Sucesso 201",
            "type": "Object[]",
            "optional": false,
            "field": "dadosdofuncionario",
            "description": "<p>Dados do fazendário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "{\n    \"nomeFuncionario\": \"FULANO DE TAL\",\n        \"dependentes\": [\n            {\n                \"numeroPessoaFuncionario\": 529483,\n                \"tipoStatus\": \"VALIDO\",\n                \"numeroPessoaInclusao\": 529483,\n                \"numeroPessoaAlteracao\": 529483,\n                \"dataInclusao\": 1501839584000,\n                \"dataAlteracao\": 1502287967000,\n                \"id\": 1,\n                \"idDependenteOrigem\": null,\n                \"nome\": \"Filha 1\",\n                \"tipoParentesco\": {\n                    \"codigo\": 3,\n                    \"nome\": \"Filho(a)\"\n                },\n                \"cpf\": \"21000000000\",\n                \"rg\": \"1234\",\n                \"codigoTipoSexo\": \"M\",\n                \"dataNascimento\": 1060041600000,\n                \"tipo\": \"VALIDO\",\n                \"pessoaFuncionario\": 529483,\n                \"pessoaInclusao\": 529483,\n                \"pessoaAlteracao\": 529483,\n                \"inclusao\": 1501839584000,\n                \"alteracao\": 1502287967000\n            },\n            {\n                \"numeroPessoaFuncionario\": 529483,\n                \"tipoStatus\": \"VALIDO\",\n                \"numeroPessoaInclusao\": 529483,\n                \"numeroPessoaAlteracao\": 529483,\n                \"dataInclusao\": 1502300000000,\n                \"dataAlteracao\": 1502360906000,\n                \"id\": 29,\n                \"idDependenteOrigem\": 13,\n                \"nome\": \"Mãe\",\n                \"tipoParentesco\": {\n                    \"codigo\": 2,\n                    \"nome\": \"Mãe\"\n                },\n                \"cpf\": \"22222222\",\n                \"rg\": \"2001\",\n                \"codigoTipoSexo\": \"F\",\n                \"dataNascimento\": 1486080000000,\n                \"tipo\": \"VALIDO\",\n                \"pessoaFuncionario\": 529483,\n                \"pessoaInclusao\": 529483,\n                \"pessoaAlteracao\": 529483,\n                \"inclusao\": 1502300000000,\n                \"alteracao\": 1502360906000\n            }\n        ],\n            \"grupos\": [\n                {\n                    \"descricao\": \"Averbações\",\n                    \"dados\": [\n                        {\n                            \"numeroPessoaFuncionario\": 529483,\n                            \"tipoStatus\": \"VALIDO\",\n                            \"numeroPessoaInclusao\": 529483,\n                            \"numeroPessoaAlteracao\": 529483,\n                            \"dataInclusao\": 1502703085000,\n                            \"dataAlteracao\": 1502703085000,\n                            \"id\": 37905,\n                            \"descricao\": \"8 anos\",\n                            \"tipoDadoFichaFuncional\": {\n                                \"id\": 24,\n                                \"nomeTipo\": \"Tempo de Serviço Público\",\n                                \"grupoTipo\": {\n                                    \"id\": 3,\n                                    \"nomeGrupoTipo\": \"Averbações\",\n                                    \"numeroPessoaInclusao\": 100\n                                },\n                                \"numeroPessoaInclusao\": 529483\n                            },\n                            \"tipo\": \"VALIDO\",\n                            \"pessoaFuncionario\": 529483,\n                            \"pessoaInclusao\": 529483,\n                            \"pessoaAlteracao\": 529483,\n                            \"inclusao\": 1502703085000,\n                            \"alteracao\": 1502703085000\n                        }\n                    ]\n                }\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_fichafuncional.js",
    "groupTitle": "fichafuncional"
  },
  {
    "type": "post",
    "url": "/sfz_glpi_api/api/public/chamado/abrir",
    "title": "Abrir chamado",
    "name": "abrir",
    "description": "<p>Abrir chamado</p>",
    "group": "glpi",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Autorization",
            "description": "<p>Token de acesso do usuário.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Descrição do novo chamado.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "idCategoria",
            "description": "<p>Id da categoria.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Título da categoria.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Object",
            "optional": false,
            "field": "chamado",
            "description": "<p>Chamado criado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.id",
            "description": "<p>Id do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.titulo",
            "description": "<p>Título do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.descricao",
            "description": "<p>Descrição do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.solucao",
            "description": "<p>Solução para o chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.dataAbertura",
            "description": "<p>Data da abertura do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.dataFechamento",
            "description": "<p>Data do encerramento do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.idCategoria",
            "description": "<p>Id da categoria.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.status",
            "description": "<p>Status do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.dataAgendamento",
            "description": "<p>Data de agendamento do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.reservado",
            "description": "<p>Reservado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.reservavel",
            "description": "<p>Reservável.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.dataCriacao",
            "description": "<p>Data da criação do chamado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "{\n    \"id\": 6,\n    \"titulo\": \"documento teste\",\n    \"descricao\": \"dados adicionais\",\n    \"solucao\": null,\n    \"dataAbertura\": \"2017-03-17T10:55:13.000+0000\",\n    \"dataFechamento\": null,\n    \"idCategoria\": 31,\n    \"status\": 2,\n    \"dataAgendamento\": \"2017-08-16T15:27:23.000+0000\",\n    \"reservado\": 0,\n    \"reservavel\": 0,\n    \"dataCriacao\": \"2017-03-17T10:55:13.000+0000\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 400": [
          {
            "group": "Erro 400",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "Response Body\n{\n  \"message\": \"error.validation\",\n  \"description\": null,\n  \"fieldErrors\": [\n      {\n          \"objectName\": \"chamadoDTO\",\n          \"field\": \"idCategoria\",\n          \"message\": \"NotNull\"\n      }\n  ]\n}\nResponse Code\n400",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_glpi.js",
    "groupTitle": "glpi"
  },
  {
    "type": "get",
    "url": "/sfz_glpi_api/api/public/chamado",
    "title": "Chamados do Usuário",
    "name": "chamado",
    "description": "<p>Obter Chamados para o Usuário</p>",
    "group": "glpi",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Autorization",
            "description": "<p>Token de acesso do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Object[]",
            "optional": false,
            "field": "chamados",
            "description": "<p>Lista de chamados.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamados.id",
            "description": "<p>Id do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamados.titulo",
            "description": "<p>Título do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamados.descricao",
            "description": "<p>Descrição do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamados.solucao",
            "description": "<p>Solução para o chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamados.dataAbertura",
            "description": "<p>Data da abertura do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamados.dataFechamento",
            "description": "<p>Data do encerramento do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamados.idCategoria",
            "description": "<p>Id da categoria.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamados.status",
            "description": "<p>Status do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamados.dataAgendamento",
            "description": "<p>Data de agendamento do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamados.reservado",
            "description": "<p>Reservado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamados.reservavel",
            "description": "<p>Reservável.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamados.dataCriacao",
            "description": "<p>Data da criação do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Object[]",
            "optional": false,
            "field": "chamados.statusChamado",
            "description": "<p>Lista de status do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamados.statusChamado.id",
            "description": "<p>Lista de status ddo chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamados.statusChamado.dataAbertura",
            "description": "<p>Data abertura do status.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamados.statusChamado.descricao",
            "description": "<p>Descrição do status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "[\n  {\n      \"id\": 6,\n      \"titulo\": \"documento teste\",\n      \"descricao\": \"dados adicionais\",\n      \"solucao\": null,\n      \"dataAbertura\": \"2017-03-17T10:55:13.000+0000\",\n      \"dataFechamento\": null,\n      \"idCategoria\": 31,\n      \"status\": 2,\n      \"dataAgendamento\": \"2017-08-16T15:27:23.000+0000\",\n      \"reservado\": 0,\n      \"reservavel\": 0,\n      \"dataCriacao\": \"2017-03-17T10:55:13.000+0000\",\n      \"statusChamado\": [\n          {\n              \"id\": 27,\n              \"dataAbertura\": \"2017-03-23T11:35:44.000+0000\",\n              \"descricao\": \"foi efetuada uma ligação onde foi esclarecida a dúvida\"\n          },\n          {\n              \"id\": 38,\n              \"dataAbertura\": \"2017-03-24T08:55:35.000+0000\",\n              \"descricao\": \"teste2\"\n          }\n      ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "Response Body\n{\n  \"timestamp\": \"2017-08-17T18:54:02.119+0000\",\n  \"status\": 403,\n  \"error\": \"Forbidden\",\n  \"message\": \"Access Denied\",\n  \"path\": \"/api/public/obterCategorias\"\n}\nResponse Code\n403",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_glpi.js",
    "groupTitle": "glpi"
  },
  {
    "type": "get",
    "url": "/sfz_glpi_api/api/public/chamado",
    "title": "Consultar Chamado por ID",
    "name": "chamado",
    "description": "<p>Consultar Chamado or ID</p>",
    "group": "glpi",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Autorization",
            "description": "<p>Token de acesso do usuário.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Id",
            "description": "<p>do chamado.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Object",
            "optional": false,
            "field": "chamado",
            "description": "<p>Lista de chamados.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.id",
            "description": "<p>Id do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.titulo",
            "description": "<p>Título do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.descricao",
            "description": "<p>Descrição do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.solucao",
            "description": "<p>Solução para o chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.dataAbertura",
            "description": "<p>Data da abertura do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.dataFechamento",
            "description": "<p>Data do encerramento do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.idCategoria",
            "description": "<p>Id da categoria.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.status",
            "description": "<p>Status do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.dataAgendamento",
            "description": "<p>Data de agendamento do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.reservado",
            "description": "<p>Reservado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.reservavel",
            "description": "<p>Reservável.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.dataCriacao",
            "description": "<p>Data da criação do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Object[]",
            "optional": false,
            "field": "chamado.statusChamado",
            "description": "<p>Lista de status do chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "chamado.statusChamado.id",
            "description": "<p>Lista de status ddo chamado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.statusChamado.dataAbertura",
            "description": "<p>Data abertura do status.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "chamado.statusChamado.descricao",
            "description": "<p>Descrição do status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "[\n  {\n      \"id\": 6,\n      \"titulo\": \"documento teste\",\n      \"descricao\": \"dados adicionais\",\n      \"solucao\": null,\n      \"dataAbertura\": \"2017-03-17T10:55:13.000+0000\",\n      \"dataFechamento\": null,\n      \"idCategoria\": 31,\n      \"status\": 2,\n      \"dataAgendamento\": \"2017-08-16T15:27:23.000+0000\",\n      \"reservado\": 0,\n      \"reservavel\": 0,\n      \"dataCriacao\": \"2017-03-17T10:55:13.000+0000\",\n      \"statusChamado\": [\n          {\n              \"id\": 27,\n              \"dataAbertura\": \"2017-03-23T11:35:44.000+0000\",\n              \"descricao\": \"foi efetuada uma ligação onde foi esclarecida a dúvida\"\n          },\n          {\n              \"id\": 38,\n              \"dataAbertura\": \"2017-03-24T08:55:35.000+0000\",\n              \"descricao\": \"teste2\"\n          }\n      ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "Response Body\n{\n  \"timestamp\": \"2017-08-17T18:54:02.119+0000\",\n  \"status\": 403,\n  \"error\": \"Forbidden\",\n  \"message\": \"Access Denied\",\n  \"path\": \"/api/public/obterCategorias\"\n}\nResponse Code\n403",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_glpi.js",
    "groupTitle": "glpi"
  },
  {
    "type": "get",
    "url": "/sfz_glpi_api/api/public/obterCategorias",
    "title": "obterCategorias",
    "name": "obterCategorias",
    "description": "<p>Obter Categorias para abertura do chamado</p>",
    "group": "glpi",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Autorization",
            "description": "<p>Token de acesso do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Object[]",
            "optional": false,
            "field": "categorias",
            "description": "<p>Lista de categorias.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "categorias.id",
            "description": "<p>Id da categoria.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": false,
            "field": "categorias.descricao",
            "description": "<p>Descrição da categoria.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "[\n  {\n      \"id\": 64,\n      \"descricao\": \"Dúvida\"\n  },\n  {\n      \"id\": 65,\n      \"descricao\": \"Denúncia\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "Response Body\n{\n  \"timestamp\": \"2017-08-17T18:54:02.119+0000\",\n  \"status\": 403,\n  \"error\": \"Forbidden\",\n  \"message\": \"Access Denied\",\n  \"path\": \"/api/public/obterCategorias\"\n}\nResponse Code\n403",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_glpi.js",
    "groupTitle": "glpi"
  },
  {
    "type": "post",
    "url": "/sfz_nfce_api/api/public/consultarPrecosPorCodigoDeBarras",
    "title": "consultarPrecosPorCodigoDeBarras",
    "name": "consultarPrecosPorCodigoDeBarras",
    "description": "<p>Consulta preços de mercaorias por código de barras</p>",
    "group": "nfce",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Autorization",
            "description": "<p>Token de acesso do usuário.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "codigoDeBarras",
            "description": "<p>Código de barras do produto.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "dias",
            "description": "<p>Número de dias da oferta (máx. 3 dias).</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude de onde se encontra o dispositivo de consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude de onde se encontra o dispositivo de consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "raio",
            "description": "<p>Raio de alcance em Kilômetros dos estabelecimentos pesquisados (máx. 10 km).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"codigoDeBarras\": \"7894900020014\",\n  \"dias\": 3,\n  \"latitude\": -9.6432331,\n  \"longitude\": -35.7190686,\n  \"raio\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Sucesso 201": [
          {
            "group": "Sucesso 201",
            "type": "Object[]",
            "optional": false,
            "field": "produtos",
            "description": "<p>Lista de prodtos que satisfazem a consulta.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.codGetin",
            "description": "<p>Código do produto.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.dscProduto",
            "description": "<p>Descrição do produto.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.dthEmissaoUltimaVenda",
            "description": "<p>Data de Última venda do produto.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "Double",
            "optional": false,
            "field": "produtos.valUnitarioUltimaVenda",
            "description": "<p>valor unitário da Útima venda.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "Double",
            "optional": false,
            "field": "produtos.valUltimaVenda",
            "description": "<p>valor da Última venda.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.txtDataUltimaEmissao",
            "description": "<p>Cálculo do tempo da Data da última emissão do produto.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.numCNPJ",
            "description": "<p>Número Cadastro Nacional da pessoa jurídica.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.nomRazaoSocial",
            "description": "<p>Nome da razão social do contribuinte.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.nomFantasia",
            "description": "<p>Nome fantasia do contribuinte.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.numTelefone",
            "description": "<p>Número de telefone do contribuinte.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.nomLogradouro",
            "description": "<p>Nome do logradouro do estabelecimento.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.numImovel",
            "description": "<p>Número do estabelecimento.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.nomBairro",
            "description": "<p>Nome do bairro do estabelecimento.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.numCep",
            "description": "<p>CEP.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.nomMunicipio",
            "description": "<p>Municí­pio.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "Double",
            "optional": false,
            "field": "produtos.numLatitude",
            "description": "<p>Latitude do estabelecimento.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "Double",
            "optional": false,
            "field": "numLongitude",
            "description": "<p>Longitude do estabelecimento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "[\n    {\n        \"codGetin\": \"78909045\",\n        \"dscProduto\": \"COCA COLA ZERO PET UN\",\n        \"dthEmissaoUltimaVenda\": \"2017-08-15T15:47:02.000+0000\",\n        \"valUnitarioUltimaVenda\": 0.99,\n        \"valUltimaVenda\": 0.99,\n        \"txtDataUltimaEmissao\": \"Há 1 dia e 21 horas\",\n        \"numCNPJ\": \"39346861008499\",\n        \"nomRazaoSocial\": \"G. BARBOSA COMERCIAL LTDA.\",\n        \"nomFantasia\": \"G. BARBOSA\",\n        \"numTelefone\": \"(79) 32165210\",\n        \"nomLogradouro\": \"AV  MENINO MARCELO\",\n        \"numImovel\": \"9730\",\n        \"nomBairro\": \"SERRARIA\",\n        \"numCep\": \"57046000\",\n        \"nomMunicipio\": \"MACEIO\",\n        \"numLatitude\": -9.6118036,\n        \"numLongitude\": -35.7198944\n    },\n    {\n        \"codGetin\": \"78909045\",\n        \"dscProduto\": \"COCA COLA ZERO PET UN\",\n        \"dthEmissaoUltimaVenda\": \"2017-08-14T12:28:34.000+0000\",\n        \"valUnitarioUltimaVenda\": 0.99,\n        \"valUltimaVenda\": 0.99,\n        \"txtDataUltimaEmissao\": \"Há 3 dias\",\n        \"numCNPJ\": \"39346861008308\",\n        \"nomRazaoSocial\": \"G. BARBOSA COMERCIAL LTDA.\",\n        \"nomFantasia\": \"G. BARBOSA\",\n        \"numTelefone\": \"(79) 32165210\",\n        \"nomLogradouro\": \"AV  GUSTAVO PAIVA\",\n        \"numImovel\": \"5395\",\n        \"nomBairro\": \"CRUZ DAS ALMAS\",\n        \"numCep\": \"57038000\",\n        \"nomMunicipio\": \"MACEIO\",\n        \"numLatitude\": -9.631070599999999,\n        \"numLongitude\": -35.7017861\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "Response Body\n{\n  \"message\": \"Município não informado.\",\n  \"description\": \"error.validation\",\n  \"fieldErrors\": null\n}\nResponse Code\n400",
          "type": "json"
        }
      ]
    },
    "filename": "./nfce.js",
    "groupTitle": "nfce"
  },
  {
    "type": "post",
    "url": "/sfz_nfce_api/api/public/consultarPrecosPorDescricao",
    "title": "consultarPrecosPorDescricao",
    "name": "consultarPrecosPorDescricao",
    "description": "<p>Consulta preços de mercaorias por descrição</p>",
    "group": "nfce",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Autorization",
            "description": "<p>Token de acesso do usuário.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Nome do produto.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "dias",
            "description": "<p>Número de dias da oferta (máx. 3 dias).</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude de onde se encontra o dispositivo de consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude de onde se encontra o dispositivo de consulta.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "raio",
            "description": "<p>Raio de alcance em Kilômetros dos estabelecimentos pesquisados (máx. 10 km).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"descricao\": \"coca cola\",\n  \"dias\": 3,\n  \"latitude\": -9.6432331,\n  \"longitude\": -35.7190686,\n  \"raio\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Sucesso 201": [
          {
            "group": "Sucesso 201",
            "type": "Object[]",
            "optional": false,
            "field": "produtos",
            "description": "<p>Lista de prodtos que satisfazem a consulta.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.codGetin",
            "description": "<p>Código do produto.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.dscProduto",
            "description": "<p>Descrição do produto.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.dthEmissaoUltimaVenda",
            "description": "<p>Data de Última venda do produto.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "Double",
            "optional": false,
            "field": "produtos.valUnitarioUltimaVenda",
            "description": "<p>valor unitário da Útima venda.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "Double",
            "optional": false,
            "field": "produtos.valUltimaVenda",
            "description": "<p>valor da Última venda.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.txtDataUltimaEmissao",
            "description": "<p>Cálculo do tempo da Data da última emissão do produto.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.numCNPJ",
            "description": "<p>Número Cadastro Nacional da pessoa jurídica.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.nomRazaoSocial",
            "description": "<p>Nome da razão social do contribuinte.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.nomFantasia",
            "description": "<p>Nome fantasia do contribuinte.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.numTelefone",
            "description": "<p>Número de telefone do contribuinte.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.nomLogradouro",
            "description": "<p>Nome do logradouro do estabelecimento.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.numImovel",
            "description": "<p>Número do estabelecimento.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.nomBairro",
            "description": "<p>Nome do bairro do estabelecimento.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.numCep",
            "description": "<p>CEP.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "String",
            "optional": false,
            "field": "produtos.nomMunicipio",
            "description": "<p>Municí­pio.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "Double",
            "optional": false,
            "field": "produtos.numLatitude",
            "description": "<p>Latitude do estabelecimento.</p>"
          },
          {
            "group": "Sucesso 201",
            "type": "Double",
            "optional": false,
            "field": "numLongitude",
            "description": "<p>Longitude do estabelecimento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "[\n {\n   \"codGetin\": \"07894900020014\",\n   \"dscProduto\": \"REF C C STEV M 250ML\",\n   \"dthEmissaoUltimaVenda\": \"2017-08-15T15:41:28.000+0000\",\n   \"valUnitarioUltimaVenda\": 0.99,\n   \"valUltimaVenda\": 0.99,\n   \"txtDataUltimaEmissao\": \"Há 1 dia e 22 horas\",\n   \"numCNPJ\": \"47508411137100\",\n   \"nomRazaoSocial\": \"COMPANHIA BRASILEIRA DE DISTRIBUICAO\",\n   \"nomFantasia\": null,\n   \"numTelefone\": \"(11) 38860599\",\n   \"nomLogradouro\": \"AV FERNANDES LIMA\",\n   \"numImovel\": \"4000\",\n   \"nomBairro\": \"GRUTA DE LOURDES\",\n   \"numCep\": \"57052400\",\n   \"nomMunicipio\": \"MACEIO\",\n   \"numLatitude\": -9.6124954,\n   \"numLongitude\": -35.7389171\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "Response Body\n{\n  \"message\": \"Município não informado.\",\n  \"description\": \"error.validation\",\n  \"fieldErrors\": null\n}\nResponse Code\n400",
          "type": "json"
        }
      ]
    },
    "filename": "./nfce.js",
    "groupTitle": "nfce"
  },
  {
    "type": "post",
    "url": "/api/public/processosAtivos/consultarPorNumeroProcesso",
    "title": "consultarPorNumeroProcesso",
    "name": "consultarPorNumeroProcesso",
    "description": "<p>Consulta Processos ativos por número de processo.</p>",
    "group": "processo_ativo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numeroProcesso",
            "description": "<p>Número do processo (0000-000000/0000).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": true,
            "field": "ano",
            "description": "<p>Ano do processo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "codigoAssunto",
            "description": "<p>Código do assunto.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "dadosOrigem",
            "description": "<p>Dados de origem.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "dataAcatamento",
            "description": "<p>Data de acatamento do processo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "dataProtocolo",
            "description": "<p>Data do protocolo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "descricaoAssunto",
            "description": "<p>Descrição do assunto.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "descricaoOrgao",
            "description": "<p>Descrição do órgão.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "nomeInteressado",
            "description": "<p>Nome do interessado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": true,
            "field": "numeroInscricao",
            "description": "<p>Número de inscrição.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": true,
            "field": "numeroProtocolo",
            "description": "<p>Número de protocolo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "observacao",
            "description": "<p>Observação.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": true,
            "field": "orgao",
            "description": "<p>Órgão.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "setor",
            "description": "<p>Setor.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "situacao",
            "description": "<p>Situação do protocolo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "tipoInscricao",
            "description": "<p>Tipo de inscrição.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "ultimaMovimentacao",
            "description": "<p>Data de Última movimentação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "{\n  \"codigo\": 20,\n  \"mensagem\": \"Autorização aplicativo pendente.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "{\n   \"timestamp\": \"2017-08-15T17:03:04.011+0000\",\n   \"status\": 403,\n   \"error\": \"Forbidden\",\n   \"message\": \"Access Denied\",\n   \"path\": \"/api/public/processosAtivos/consultarPorNumeroProcesso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_processo.js",
    "groupTitle": "processo_ativo"
  },
  {
    "type": "post",
    "url": "/api/public/termoApreensao/consultar",
    "title": "consultar",
    "name": "consultar",
    "description": "<p>Consulta os termos de apreensão de um determinado Contribuinte.</p>",
    "group": "termo_apreensao",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "numeroCaceal",
            "description": "<p>Número da inscrição estadual do Contribuinte</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "periodoInicio",
            "description": "<p>Data de início da pesquisa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "periodoTermino",
            "description": "<p>Data de término da pesquisa.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "numeroTermo",
            "description": "<p>Número do termo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "dataEmissao",
            "description": "<p>Data de emissão do termo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "codigoStatus",
            "description": "<p>Código de status do termo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>Descrição do status do termo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "posto",
            "description": "<p>Local do posto.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "numeroCaceal",
            "description": "<p>Número de incrição estadual.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": false,
            "field": "papel",
            "description": "<p>(Emitente/Adquirinte/Fiel Depositário/...).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "[\n  {\n    \"numeroTermo\": 16081,\n    \"dataEmissao\": \"2017-08-10T14:18:48.000+0000\",\n    \"codigoStatus\": 12,\n    \"status\": \"Pendente\",\n    \"posto\": \"INFRAESTRUTURA\",\n    \"numeroCaceal\": 24002198,\n    \"papel\": \"Emitente\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "{\n   \"timestamp\": \"2017-08-15T17:03:04.011+0000\",\n   \"status\": 403,\n   \"error\": \"Forbidden\",\n   \"message\": \"Access Denied\",\n   \"path\": \"/api/public/termoApreensao/consultar\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_fronteiras.js",
    "groupTitle": "termo_apreensao"
  },
  {
    "type": "post",
    "url": "/api/public/usuario/alterarSenha",
    "title": "alterarSenha",
    "name": "alterarSenha",
    "description": "<p>Altera senha do usuário.</p>",
    "group": "usuario",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numeroProcesso",
            "description": "<p>Número.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": true,
            "field": "ano",
            "description": "<p>Ano do processo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "codigoAssunto",
            "description": "<p>Código do assunto.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "dadosOrigem",
            "description": "<p>Dados de origem.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "dataAcatamento",
            "description": "<p>Data de acatamento do processo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "dataProtocolo",
            "description": "<p>Data do protocolo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "descricaoAssunto",
            "description": "<p>Descrição do assunto.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "descricaoOrgao",
            "description": "<p>Descrição do órgão.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "nomeInteressado",
            "description": "<p>Nome do interessado.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": true,
            "field": "numeroInscricao",
            "description": "<p>Número de inscrição.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": true,
            "field": "numeroProtocolo",
            "description": "<p>Número de protocolo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "observacao",
            "description": "<p>Observação.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "Integer",
            "optional": true,
            "field": "orgao",
            "description": "<p>Órgão.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "setor",
            "description": "<p>Setor.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "situacao",
            "description": "<p>Situação do protocolo.</p>"
          },
          {
            "group": "Sucesso 200",
            "type": "String",
            "optional": true,
            "field": "tipoInscricao",
            "description": "<p>Tipo de inscrição.</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "ultimaMovimentacao",
            "description": "<p>Data de Última movimentação.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do sucesso:",
          "content": "{\n  \"codigo\": 20,\n  \"mensagem\": \"Autorização aplicativo pendente.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro 401": [
          {
            "group": "Erro 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a consultar esta função.</p>"
          }
        ],
        "Erro 403": [
          {
            "group": "Erro 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Usuário sem acesso.</p>"
          }
        ],
        "Erro 404": [
          {
            "group": "Erro 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p><code>id</code> do usuário não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de retorno do erro:",
          "content": "{\n   \"timestamp\": \"2017-08-15T17:03:04.011+0000\",\n   \"status\": 403,\n   \"error\": \"Forbidden\",\n   \"message\": \"Access Denied\",\n   \"path\": \"/api/public/processosAtivos/consultarPorNumeroProcesso\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./sfz_nfcidada.js",
    "groupTitle": "usuario"
  }
] });
