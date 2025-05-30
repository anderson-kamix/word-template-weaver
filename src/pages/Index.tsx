
import React, { useState } from 'react';
import DocumentViewer from '../components/DocumentViewer';
import { DocumentTemplate, PlaceholderData } from '../types/document';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Eye, Settings } from 'lucide-react';

const Index = () => {
  const [showDocument, setShowDocument] = useState(false);

  // Exemplo de template de documento jurídico
  const documentTemplate: DocumentTemplate = {
    header: `<p style="text-align: right"><span style="color: rgb(51, 51, 51); font-size: 10pt">EVERTON BEMFICA SOCIEDADE INDIVIDUAL DE ADVOCACIA</span><br><span style="color: rgb(51, 51, 51); font-size: 10pt">OAB/RS 12.282</span></p>`,
    
    content: `<p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; EXCELENTÍSSIMO SENHOR JUIZ {processo:jf}<br></strong></span></p><p>{processo:valor_causa}</p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{cliente:nome},</strong> RG sob nº: {cliente:rg}, CPF: {cliente:documento}, endereço eletrônico {cliente:email}, residente e domiciliada na {cliente:endereco}, {cliente:numero}, {cliente:bairro}, {cliente:cidade}/{cliente:uf}, através do seu procurador, </span><a target="_blank" rel="noopener noreferrer nofollow" href="mailto:everton@bemfica.adv.br,"><span style="color: rgb(0, 0, 0)">everton@bemfica.adv.br</span><span style="font-size: 12pt">,</span></a><span style="font-size: 12pt"> estabelecido com escritório profissional na Rua Afonso Álvares, 65/303, CEP 91.920-43, na cidade de Porto Alegre, RS,&nbsp; local em que recebe intimações, dirige-se respeitosamente a Vossa Excelência para propor</span></p><p>&nbsp;</p><p><span style="font-size: 12pt"><strong>AÇÃO PREVIDENCIÁRIA DE RESTABELECIMENTO/CONCESSÃO DE AUXÍLIO POR INCAPACIDADE TEMPORÁRIA, AUXÍLIO-ACIDENTE OU CONCESSÃO DE APOSENTADORIA POR INCAPACIDADE PERMANENTE</strong></span></p><p>&nbsp;</p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>em face do<strong> INSS - INSTITUTO NACIONAL DO SEGURO SOCIAL</strong>, com fundamento nas legislações aplicáveis, para tanto dizendo e requerendo o quanto segue:</span></p><p>&nbsp;</p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong></span><strong><u>DOS FATOS.</u></strong><span style="font-size: 12pt">&nbsp;</span></p><p><span style="font-size: 12pt">&nbsp;</span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Pretende discutir o indeferimento do(s) seguinte(s) benefício(s) indevidamente cessado(s):</span>&nbsp;</p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>{cliente:numero_beneficio}.</span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>A parte autora é portadora da doença <strong>{cliente:doenca}</strong> que lhe impõem limitações para o exercício de toda e qualquer atividade laborativa de forma total e permanente.</span>&nbsp;&nbsp;</p><p>&nbsp;<span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>A&nbsp;patologia {cliente:doenca} que a parte autora é portadora, apresenta os seguintes sintomas incapacitantes:<strong>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</strong></span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>{cliente:sintomas}.&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp;</strong></span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Sua última atividade laborativa foi de {cliente:profissao}.<strong>&nbsp; &nbsp;</strong></span>&nbsp;</p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>O(a) {cliente:profissao}, desempenha as seguintes atividades:</span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>{cliente:atividades}</span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>As possíveis incosistências da avaliação médica administrativa consisem no fato de que o INSS não constatou a incapacidade laborativa contrariando o posicionamento dos médicos assistentes que indicam o afastamento das atividades em razão da existência de doença incapacitante.<strong>&nbsp;&nbsp;&nbsp;</strong></span><strong>&nbsp; &nbsp;</strong></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Inexiste ação judicial anterior que discuta o benefício {cliente:numero_beneficio}&nbsp; &nbsp;&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong></span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>A petição inicial vai instruída com o comprovante de indeferimento do benefício ou de sua não prorrogação e documentos médicos.<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong></span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Por essas razões refere incapacidade ao trabalho.</span>&nbsp;<span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong></span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Tais patologias tem apresentado aumento gradual de sintomas o que piorou seu quadro de saúde que já era debilitado, causando assim incapacidade ao trabalho.</span>&nbsp;<span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;</strong></span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong>Conforme inúmeros laudos prescritos por médicos que muitas vezes realizam perícia por parte da autarquia ré, o autor, em função de seu grave problema, não possui capacidade laborativa, conforme art.71 do Dec. 3048/99. Salienta-se que o problema da parte autora é grave, portanto, não há de se falar em capacidade de retorno ao labor.</span>&nbsp;<span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong></span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Em razão disso requer perícia com médico especialista em <strong>{cliente:especialidade}</strong>.</span>&nbsp;</p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong></span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong></span><strong><u>DO DIREITO.</u></strong></p><p>&nbsp;</p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>A parte autora preenche todos os requisitos que autorizam a manutenção do benefício de auxílio doença, auxílio acidente ou deferimento da aposentadoria por invalidez, conforme será determinado pela perícia judicial, não estando em condições de exercer seu labor, de conformidade com o artigo 59, 104 e seguintes da Lei 8.213/91 ou em caso mais grave, com o artigo 42 e seguintes da Lei 8.213/91.</span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Valor PROVISÓRIO da causa: R$ {processo:valor_causa}</span></p><p><span style="font-size: 12pt">&nbsp;</span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Pede deferimento.</span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Porto Alegre, {data:atual_extenso.maiuscula}.</span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Everton Bemfica Rodrigues</span></p><p><span style="font-size: 12pt"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>OAB/RS: 63.329</span></p>`,
    
    footer: `<p style="text-align: center"><span style="font-size: 8pt">RUA AFONSO ÁLVARES, 65/303, TRISTEZA, PORTO ALEGRE, RS. CEP 91920-430</span><br><span style="font-size: 8pt"> FONE (51) 989552385. - CNPJ 46.935.261/0001-02</span></p>`
  };

  // Dados de exemplo para substituir os placeholders
  const placeholderData: PlaceholderData = {
    'processo:jf': 'DE DIREITO DA 1ª VARA FEDERAL DE PORTO ALEGRE',
    'processo:valor_causa': 'R$ 50.000,00',
    'cliente:nome': 'MARIA SILVA SANTOS',
    'cliente:rg': '1234567890',
    'cliente:documento': '123.456.789-00',
    'cliente:email': 'maria.santos@email.com',
    'cliente:endereco': 'Rua das Flores, 123',
    'cliente:numero': '123',
    'cliente:bairro': 'Centro',
    'cliente:cidade': 'Porto Alegre',
    'cliente:uf': 'RS',
    'cliente:numero_beneficio': '12345678901',
    'cliente:doenca': 'Fibromialgia e Síndrome do Túnel do Carpo',
    'cliente:sintomas': 'dores crônicas generalizadas, fadiga extrema, distúrbios do sono, rigidez matinal, dores nas articulações e limitação dos movimentos das mãos',
    'cliente:profissao': 'auxiliar de limpeza',
    'cliente:atividades': 'limpeza de ambientes, carregamento de peso, movimentos repetitivos com as mãos e braços',
    'cliente:especialidade': 'reumatologia',
    'data:atual_extenso.maiuscula': '15 DE DEZEMBRO DE 2024'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {!showDocument ? (
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Sistema de Templates de Documentos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visualize documentos com cabeçalho e rodapé fixos, simulando o comportamento do Microsoft Word
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-gray-900">Templates Dinâmicos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suporte completo a placeholders que são substituídos automaticamente pelos dados do banco
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Visualização Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cabeçalho e rodapé fixos em todas as páginas, exatamente como no Microsoft Word
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-gray-900">Paginação Automática</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  O conteúdo é automaticamente dividido em páginas respeitando o espaço disponível
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Example Data */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-gray-900">Exemplo de Documento Jurídico</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dados do Cliente:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li><strong>Nome:</strong> {placeholderData['cliente:nome']}</li>
                    <li><strong>CPF:</strong> {placeholderData['cliente:documento']}</li>
                    <li><strong>Profissão:</strong> {placeholderData['cliente:profissao']}</li>
                    <li><strong>Doença:</strong> {placeholderData['cliente:doenca']}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dados do Processo:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li><strong>Juízo:</strong> {placeholderData['processo:jf']}</li>
                    <li><strong>Valor da Causa:</strong> {placeholderData['processo:valor_causa']}</li>
                    <li><strong>Benefício:</strong> {placeholderData['cliente:numero_beneficio']}</li>
                    <li><strong>Data:</strong> {placeholderData['data:atual_extenso.maiuscula']}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={() => setShowDocument(true)}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Eye className="w-5 h-5 mr-2" />
              Visualizar Documento Completo
            </Button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              onClick={() => setShowDocument(false)}
              variant="outline"
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              ← Voltar à Página Inicial
            </Button>
          </div>

          {/* Document Viewer */}
          <DocumentViewer
            template={documentTemplate}
            placeholderData={placeholderData}
            className="animate-fade-in"
          />
        </div>
      )}
    </div>
  );
};

export default Index;
