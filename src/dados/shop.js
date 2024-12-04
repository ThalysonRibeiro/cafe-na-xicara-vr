const arrayLoja = [
  {
    id: 0,
    image: "https://m.media-amazon.com/images/I/71cM7xwJqXL._AC_SL1500_.jpg",
    nome: "Cafeteira ECM10 Electrolux",
    marca: "Electrolux",
    preco: "R$104,64",
    parcelamento:
      "à vista no Pix e boleto (4% off)ou R$ 109,00 em até 2x de R$ 54,50 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/Electrolux-ECM10-Cafeteira/dp/B09CB7MJMX/ref=asc_df_B09CB7MJMX/?gad_source=4&hvadid=709964506256&hvdev=c&hvdvcmdl=undefined&hvlocint=undefined&hvlocphy=9198996&hvnetw=g&hvpone=undefined&hvpos=undefined&hvptwo=undefined&hvqmt=undefined&hvrand=256742171809649768&hvtargid=pla-1666302774397&linkCode=df0&mcid=50e99ed8358632a49e9f3d0a047316ab&tag=googleshopp00-20&th=1",
  },
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/61duKqWRGPL._AC_SL1000_.jpg",
    nome: "Cafeteira Espresso Oster PrimaLatte Touch, 220V, BVSTEM6801M Cinza",
    marca: "Oster",
    preco: "R$1.099,00",
    parcelamento: "Em até 10x R$ 109,90 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/Cafeteira-Espresso-Oster-PrimaLatte-Touch/dp/B0BXY65689/ref=asc_df_B0BXY65689/?gad_source=4&hvadid=709874962041&hvdev=c&hvdvcmdl=undefined&hvlocint=undefined&hvlocphy=9198996&hvnetw=g&hvpone=undefined&hvpos=undefined&hvptwo=undefined&hvqmt=undefined&hvrand=256742171809649768&hvtargid=pla-2201682725249&linkCode=df0&mcid=d82c91337f5237f28ae3559e706d02c2&tag=googleshopp00-20&th=1",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/51jTHJQjhBL._AC_SL1000_.jpg",
    nome: "Cafeteira Espresso Dolce Crema 20 Bar, Mondial, Preto/Inox, 1200W, 220V - C-20-EC",
    marca: "MONDIAL",
    preco: "R$578,90",
    parcelamento: "Em até 10x R$ 57,89 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/Cafeteira-Espresso-Dolce-Crema-Mondial/dp/B0D3G5FMHW/ref=asc_df_B0D3G5FMHW/?tag=googleshopp00-20&linkCode=df0&hvadid=709886750320&hvpos=&hvnetw=g&hvrand=256742171809649768&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198996&hvtargid=pla-2316707401435&psc=1&mcid=e2ca24d535df3703a006b08718338893&gad_source=4",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/61eM9y9GxbL._AC_SL1200_.jpg",
    nome: "Cafeteira Express Pro 127v Tramontina Prata 110v",
    marca: "Tramontina",
    preco: "R$4.999,90",
    parcelamento: "Em até 10x R$ 499,99 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/Cafeteira-Express-Tramontina-69066011-Prata/dp/B076JLTDQQ/ref=asc_df_B076JLTDQQ/?tag=googleshopp00-20&linkCode=df0&hvadid=709870389015&hvpos=&hvnetw=g&hvrand=256742171809649768&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198996&hvtargid=pla-853229327655&mcid=adcdbe4dc5753518b68f62180b026df9&gad_source=4&th=1",
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/81H3vPYrTLL._AC_SL1500_.jpg",
    nome: "Cafeteira Espresso Automática Série 5400 Philips Walita, Preta, 1400W, 110v - EP5441/55",
    marca: "Philips Walita",
    preco: "R$5.069,00",
    parcelamento: "Em até 12x R$ 422,49 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/Cafeteira-Espresso-Autom%C3%A1tica-Philips-Walita/dp/B0BRLBVJB4/ref=asc_df_B0BRLBVJB4/?tag=googleshopp00-20&linkCode=df0&hvadid=709864975911&hvpos=&hvnetw=g&hvrand=256742171809649768&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198996&hvtargid=pla-2017401187817&mcid=6765b9f1fe4c39e29c9dac5f688a65ee&gad_source=4&th=1",
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/616WtXLQ9jL._AC_SL1200_.jpg",
    nome: "Cafeteira Nuova Moka Express 6 Xícaras, 1143, Bialetti",
    marca: "Bialetti",
    preco: "R$293,00",
    parcelamento:
      "à vista no Pix e boleto (7% off) ou R$ 315,50 em até 6x de R$ 52,60 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/dp/B00004RFRU/ref=sspa_dk_detail_0?pd_rd_i=B00004RFRU&pd_rd_w=VQWSz&content-id=amzn1.sym.1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_p=1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_r=EYQ9FDMATQ8VC4FKYC44&pd_rd_wg=Aj9zJ&pd_rd_r=c876ab8b-a775-4412-88fe-0cdb163884f1&s=kitchen&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1",
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/71mhShpHuZL._AC_SL1500_.jpg",
    nome: "OutIn Nano Cafeteira Elétrica Portátil,Cafeteira de cápsulas &moído,cafeteira para carro com aquecimento automático com USB-C,com café moído e cápsula NS para trailers, caminhadas, escritório.",
    marca: "Outin",
    preco: "R$1.580,10",
    parcelamento: "Em até 10x R$ 158,01 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/dp/B0BRKFWPF3/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B0BRKFWPF3&pd_rd_w=VQWSz&content-id=amzn1.sym.1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_p=1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_r=EYQ9FDMATQ8VC4FKYC44&pd_rd_wg=Aj9zJ&pd_rd_r=c876ab8b-a775-4412-88fe-0cdb163884f1&s=kitchen&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/71geYNu-PYL._AC_SL1500_.jpg",
    nome: "Nescafé Farmers Origins Brazil - Cápsula compatível Nespresso, 1 caixa com 10 cápsulas",
    marca: "Nescafé",
    preco: "R$22,92",
    parcelamento: "",
    linkDeCompra:
      "https://www.amazon.com.br/dp/B0D8CM9LNB/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B0D8CM9LNB&pd_rd_w=jdhTO&content-id=amzn1.sym.1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_p=1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_r=V5YYZMVJ5NY9G9F3JP71&pd_rd_wg=jNNlS&pd_rd_r=6fc07464-4e6a-4991-b596-1551fb23ca79&s=kitchen&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/715d8yOxAwL._AC_SL1500_.jpg",
    nome: "Nescafé Farmers Origins Colômbia - Cápsula compatível Nespresso, 1 caixa com 10 cápsulas",
    marca: "Nescafé",
    preco: "R$22,92",
    parcelamento: "",
    linkDeCompra:
      "https://www.amazon.com.br/dp/B0D8CSWFJ8/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B0D8CSWFJ8&pd_rd_w=jdhTO&content-id=amzn1.sym.1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_p=1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_r=V5YYZMVJ5NY9G9F3JP71&pd_rd_wg=jNNlS&pd_rd_r=6fc07464-4e6a-4991-b596-1551fb23ca79&s=kitchen&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/I/71BkWORjHuL._AC_SL1500_.jpg",
    nome: "Nescafé Farmers Origins Índia - Cápsula compatível Nespresso, 1 caixa com 10 cápsulas",
    marca: "Nescafé",
    preco: "R$22,78",
    parcelamento: "",
    linkDeCompra:
      "https://www.amazon.com.br/dp/B0D8CRRHLW/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B0D8CRRHLW&pd_rd_w=jdhTO&content-id=amzn1.sym.1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_p=1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_r=V5YYZMVJ5NY9G9F3JP71&pd_rd_wg=jNNlS&pd_rd_r=6fc07464-4e6a-4991-b596-1551fb23ca79&s=kitchen&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
  },
  {
    id: 10,
    image: "https://m.media-amazon.com/images/I/51wrL+-mq+L._AC_SL1269_.jpg",
    nome: "Outin Kit de acessórios Nano Expresso, Basket Plus, dose dupla",
    marca: "Outin",
    preco: "R$422,94",
    parcelamento: "",
    linkDeCompra:
      "https://www.amazon.com.br/Outin-Kit-acess%C3%B3rios-Expresso-Basket/dp/B0D2KZQ49L/ref=pd_sim_d_sccl_3_1/146-4407669-6353229?pd_rd_w=0yBdn&content-id=amzn1.sym.8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_p=8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_r=V5YYZMVJ5NY9G9F3JP71&pd_rd_wg=jNNlS&pd_rd_r=6fc07464-4e6a-4991-b596-1551fb23ca79&pd_rd_i=B0D2KZQ49L&psc=1",
  },
  {
    id: 11,
    image: "https://m.media-amazon.com/images/I/518G0XD7M3L._AC_SL1500_.jpg",
    nome: "YETI Copo empilhável Rambler de 118 ml, aço inoxidável, copo de café expresso/café isolado a vácuo, pacote com 2, azul-marinho",
    marca: "YETI",
    preco: "R$299,69",
    parcelamento: "Em até 5x R$ 59,97 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/YETI-empilh%C3%A1vel-Rambler-inoxid%C3%A1vel-azul-marinho/dp/B0CKJ5G3GG/ref=pd_sim_d_sccl_3_3/146-4407669-6353229?pd_rd_w=0yBdn&content-id=amzn1.sym.8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_p=8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_r=V5YYZMVJ5NY9G9F3JP71&pd_rd_wg=jNNlS&pd_rd_r=6fc07464-4e6a-4991-b596-1551fb23ca79&pd_rd_i=B0CKJ5G3GG&psc=1",
  },
  {
    id: 12,
    image: "https://m.media-amazon.com/images/I/71++DxYrBmL._AC_SL1500_.jpg",
    nome: "Café Starbucks em Cápsulas Nespresso, Caffé Verona - 50 cápsulas",
    marca: "STARBUCKS",
    preco: "R$193,90",
    parcelamento: "Em até 3x R$ 64,64 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/Starbucks-C%C3%A1psulas-Nespresso-Caff%C3%A9-Verona/dp/B07Q2HCRCZ/ref=pd_sim_d_sccl_3_4/146-4407669-6353229?pd_rd_w=0yBdn&content-id=amzn1.sym.8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_p=8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_r=V5YYZMVJ5NY9G9F3JP71&pd_rd_wg=jNNlS&pd_rd_r=6fc07464-4e6a-4991-b596-1551fb23ca79&pd_rd_i=B07Q2HCRCZ&psc=1",
  },
  {
    id: 13,
    image: "https://m.media-amazon.com/images/I/61oZf33DM7L._AC_SL1500_.jpg",
    nome: "PARACITY Conjunto de 2 xícaras de café expresso, copo de café expresso de parede dupla com alça, copo expresso de borossilicato alto de 75 g, acessórios de café expresso",
    marca: "PARACITY",
    preco: "R$103,85",
    parcelamento: "Em até 2x R$ 51,93 sem juros ",
    linkDeCompra:
      "https://www.amazon.com.br/PARACITY-Conjunto-expresso-borossilicato-acess%C3%B3rios/dp/B0CRKDJRS4/ref=pd_sim_d_sccl_3_5/146-4407669-6353229?pd_rd_w=0yBdn&content-id=amzn1.sym.8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_p=8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_r=V5YYZMVJ5NY9G9F3JP71&pd_rd_wg=jNNlS&pd_rd_r=6fc07464-4e6a-4991-b596-1551fb23ca79&pd_rd_i=B0CRKDJRS4&psc=1",
  },
  {
    id: 14,
    image: "https://m.media-amazon.com/images/I/71JlAmQq2hL._AC_SL1500_.jpg",
    nome: "KINGrinder Moedor manual de café K6 com cabo reto para prensa francesa, gotejamento, café expresso com consistência de montagem, moedor de rebarbas cônicas de aço inoxidável, capacidade de 35 g",
    marca: "KINGrinder",
    preco: "R$1.389,12",
    parcelamento: "Em até 10x R$ 138,93 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/KINGrinder-gotejamento-consist%C3%AAncia-inoxid%C3%A1vel-capacidade/dp/B0CY1XFXB8/ref=pd_sim_d_sccl_3_6/146-4407669-6353229?pd_rd_w=0yBdn&content-id=amzn1.sym.8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_p=8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_r=V5YYZMVJ5NY9G9F3JP71&pd_rd_wg=jNNlS&pd_rd_r=6fc07464-4e6a-4991-b596-1551fb23ca79&pd_rd_i=B0CY1XFXB8&psc=1",
  },
  {
    id: 15,
    image: "https://m.media-amazon.com/images/I/61T4mKLrsWL._AC_SL1000_.jpg",
    nome: "Coador Filtro Café Aço Inox Reutilizável Lavável Portátil Malha Ultrafina Compatível V60 Sem Papel Econômico",
    marca: "Genérico",
    preco: "R$75,06",
    parcelamento: "Em até 2x R$ 37,53 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/dp/B0DNG5YVVT/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B0DNG5YVVT&pd_rd_w=jcVaZ&content-id=amzn1.sym.1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_p=1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_r=8K85PH8BP739NCC8R27C&pd_rd_wg=RegoZ&pd_rd_r=023d2928-a0fa-487c-a776-a581043db208&s=kitchen&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
  },
  {
    id: 16,
    image: "https://m.media-amazon.com/images/I/51-gMK+tFUL._AC_SL1000_.jpg",
    nome: "Baggio Café Café Torrado E Moído Aroma De Chocolate Trufado 250G",
    marca: "aggio Café",
    preco: "R$28,90",
    parcelamento: "",
    linkDeCompra:
      "https://www.amazon.com.br/Baggio-Aromas-Chocolate-Trufado-Caf%C3%A9/dp/B075W7XHMY/ref=pd_day0fbt_thbs_d_sccl_1/146-4407669-6353229?pd_rd_w=SthES&content-id=amzn1.sym.7ba59a83-953f-45f8-b467-46bc3ee6f44a&pf_rd_p=7ba59a83-953f-45f8-b467-46bc3ee6f44a&pf_rd_r=69C34GW17R0XC89NGN3S&pd_rd_wg=M03J0&pd_rd_r=80222445-ea0e-44ac-8fc1-5a5f9609c01f&pd_rd_i=B075W7XHMY&psc=1",
  },
  {
    id: 17,
    image: "https://m.media-amazon.com/images/I/61DJSWSynYL._AC_SL1500_.jpg",
    nome: "Baggio Café Café Torrado E Moído Bourbon 250G",
    marca: "Baggio Café",
    preco: "R$36,90",
    parcelamento: "",
    linkDeCompra:
      "https://www.amazon.com.br/Baggio-Bourbon-Espresso-Moido-Caf%C3%A9/dp/B075HVRHT3/ref=pd_bxgy_thbs_d_sccl_2/146-4407669-6353229?pd_rd_w=BN4EH&content-id=amzn1.sym.787de441-89cb-4c88-8014-1deb1a0e1e72&pf_rd_p=787de441-89cb-4c88-8014-1deb1a0e1e72&pf_rd_r=E1QMKBC6MEK13SA1FGP6&pd_rd_wg=6i2PW&pd_rd_r=214ab744-a4b9-4e97-8737-f1c505e36d2e&pd_rd_i=B075HVRHT3&th=1",
  },
  {
    id: 18,
    image: "https://m.media-amazon.com/images/I/61ka3USYVuL._AC_SL1500_.jpg",
    nome: "Kit 4 Pacotes Café Especial Em Grãos Coffee Mais Clássico, Caparaó, Chapada e Arara",
    marca: "COFFEE ++",
    preco: "R$149,90",
    parcelamento: "Em até 2x R$ 74,95 sem juros",
    linkDeCompra:
      "https://www.amazon.com.br/dp/B0CQKM2VVC/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B0CQKM2VVC&pd_rd_w=HCNOd&content-id=amzn1.sym.1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_p=1868afab-d777-4b70-8899-1b323ad91d95&pf_rd_r=E1QMKBC6MEK13SA1FGP6&pd_rd_wg=6i2PW&pd_rd_r=214ab744-a4b9-4e97-8737-f1c505e36d2e&s=grocery&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
  },
  {
    id: 19,
    image: "https://m.media-amazon.com/images/I/71S++lVkRvL._AC_SL1500_.jpg",
    nome: "Chaleira Pescoço de Ganso para Café Coado e Chá, Chaleiras de fogão, Chaleira de gotejamento de café, Chaleira Gooseneck, Aço Inoxidável, Chaleira Tipo Hario Buono, 1L, | KLEMING COFFEE",
    marca: "Kleming Coffee",
    preco: "$157,87",
    parcelamento: "Em até 3x R$ 52,63 sem juros ",
    linkDeCompra:
      "https://www.amazon.com.br/Chaleira-Chaleiras-gotejamento-Gooseneck-Inoxid%C3%A1vel/dp/B0DFMNFFWF/ref=pd_day0_d_sccl_3_27/146-4407669-6353229?pd_rd_w=mTl30&content-id=amzn1.sym.f8fbb395-09a0-46a4-a17c-8f7cd5155e6a&pf_rd_p=f8fbb395-09a0-46a4-a17c-8f7cd5155e6a&pf_rd_r=69C34GW17R0XC89NGN3S&pd_rd_wg=M03J0&pd_rd_r=80222445-ea0e-44ac-8fc1-5a5f9609c01f&pd_rd_i=B0DFMNFFWF&psc=1",
  },
  {
    id: 20,
    image: "https://m.media-amazon.com/images/I/41scS2wixkL._AC_.jpg",
    nome: "Mini filtro coador de café portátil reutilizável em aço inoxidável sem papel",
    marca: "Generic",
    preco: "R$39,90",
    parcelamento: "",
    linkDeCompra:
      "https://www.amazon.com.br/filtro-coador-port%C3%A1til-reutiliz%C3%A1vel-inoxid%C3%A1vel/dp/B0CXLSVW6K/ref=pd_day0_d_sccl_3_36/146-4407669-6353229?pd_rd_w=mTl30&content-id=amzn1.sym.f8fbb395-09a0-46a4-a17c-8f7cd5155e6a&pf_rd_p=f8fbb395-09a0-46a4-a17c-8f7cd5155e6a&pf_rd_r=69C34GW17R0XC89NGN3S&pd_rd_wg=M03J0&pd_rd_r=80222445-ea0e-44ac-8fc1-5a5f9609c01f&pd_rd_i=B0CXLSVW6K&psc=1",
  },
];
export default arrayLoja;
