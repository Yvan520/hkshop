'use strict';
var products = [
  {id:'moon-lamp',tags:['trending','new'],thumbs:['https://img11.360buyimg.com/n1/jfs/t1/406277/34/15735/68807/69c16e8fFebdfc2e0/0083320320a2b532.jpg','https://img11.360buyimg.com/n1/jfs/t1/406886/3/12770/104618/69c16e2dFd0bb42ae/00835a05a093c84f.jpg','https://img11.360buyimg.com/n1/jfs/t1/408762/21/2832/194301/69c16e2fF076af8f4/00835a05a0b7de82.jpg'],
    title:{en:'Magnetic Levitation Moon Lamp',zh:'\u78c1\u60ac\u6d6e\u6708\u7403\u6c1b\u56f4\u706f'},
    price:{en:'Est. $28-42 USD',zh:'\u7ea6 \u00a5200\u2013300'},
    desc:{en:'A 6-inch moon lamp floating mid-air with zero contact. 16-color RGB lighting, smartphone-controlled, with auto-rotation. USB-C powered. The ultimate desk centerpiece that sparks conversation.',zh:'6\u82f1\u5bf8\u6708\u7403\u706f\u60ac\u6d6e\u534a\u7a7a\uff0c\u96f6\u63a5\u89e6\u81ea\u8f6c\u300216\u8272RGB\u706f\u5149\uff0c\u624b\u673aAPP\u63a7\u5236\uff0cUSB-C\u4f9b\u7535\u3002\u684c\u9762\u6c1b\u56f4\u795e\u5668\uff0c\u670b\u53cb\u6765\u4e86\u90fd\u8981\u95ee\u3002'},
    specs:[{l:{en:'Material',zh:'\u6750\u8d28'},v:{en:'ABS + Silicone',zh:'ABS+\u77f3\u82c6\u80f6'}},{l:{en:'Size',zh:'\u5c3a\u5bf8'},v:{en:'6 inches (15cm)',zh:'6\u82f1\u5bf8(15cm)'}},{l:{en:'Power',zh:'\u4f9b\u7535'},v:{en:'USB-C 5V/2A',zh:'USB-C 5V/2A'}},{l:{en:'Colors',zh:'\u989c\u8272'},v:{en:'16 RGB + warm white',zh:'16\u8272RGB+\u6696\u767d'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Shenzhen, China',zh:'\u4e2d\u56fd\u6df1\u5733'}}],featured:true},
  {id:'tea-set',tags:['trending'],thumbs:['https://img11.360buyimg.com/n1/jfs/t1/419570/12/19637/125342/69e70c92F052c61f6/00833203204f2a11.jpg','https://img11.360buyimg.com/n1/jfs/t1/423342/15/5293/172144/69e70c96F3b3b99c6/00833203203c8128.jpg','https://img11.360buyimg.com/n1/jfs/t1/421089/37/8209/124635/69e70c93Fc97117d3/0083320320bea66b.jpg'],
    title:{en:'Modern Chinese Tea Set',zh:'\u65b0\u4e2d\u5f0f\u9676\u74f7\u8336\u5177'},
    price:{en:'Est. $18-32 USD',zh:'\u7ea6 \u00a5130\u2013230'},
    desc:{en:'Traditional craftsmanship meets modern design. Complete 6-piece set: teapot, 4 cups, and tray. Celadon glaze, hand-finished. The trending Xinzhongshi aesthetic for your daily tea ritual.',zh:'\u4f20\u7edf\u5de5\u827a\u4e0e\u73b0\u4ee3\u8bbe\u8ba1\u7684\u7ed3\u5408\u3002\u516d\u4ef6\u5957\uff1a\u8336\u58f6\u3001\u56db\u676f\u3001\u8336\u76d8\u3002\u9752\u74f7\u74e6\u9762\uff0c\u624b\u5de5\u6253\u78e8\u3002\u65b0\u4e2d\u5f0f\u5ba1\u7f8e\uff0c\u65e5\u5e38\u8336\u9053\u9996\u9009\u3002'},
    specs:[{l:{en:'Pieces',zh:'\u4ef6\u6570'},v:{en:'6 (pot + 4 cups + tray)',zh:'6\u4ef6(\u58f6+4\u676f+\u76d8)'}},{l:{en:'Material',zh:'\u6750\u8d28'},v:{en:'Ceramic, Celadon',zh:'\u9676\u74f7\u00b7\u9752\u74f7'}},{l:{en:'Packaging',zh:'\u5305\u88c5'},v:{en:'Gift box included',zh:'\u542b\u793c\u76d2\u5305\u88c5'}},{l:{en:'Weight',zh:'\u91cd\u91cf'},v:{en:'1.2kg',zh:'1.2kg'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Jingdezhen, China',zh:'\u4e2d\u56fd\u666f\u5fb7\u9547'}}]},
  {id:'aroma-diffuser',tags:['new','bestseller'],thumbs:['https://img11.360buyimg.com/n1/jfs/t1/430931/15/4515/60934/69fa1530F357cbafd/0083320320b64735.png','https://img11.360buyimg.com/n1/jfs/t1/228527/26/2325/34589/654b5f61F65d78a09/26b59df4abca959a.png','https://img11.360buyimg.com/n1/jfs/t1/210225/31/37790/33849/654b5f63F3bac8b84/72c0608bd94dab9e.png'],
    title:{en:'Smart Aroma Diffuser',zh:'\u667a\u80fd\u9999\u85b0\u673a'},
    price:{en:'Est. $22-36 USD',zh:'\u7ea6 \u00a5160\u2013260'},
    desc:{en:'Ultrasonic cold-mist diffuser with smart timer. 200ml tank runs up to 10 hours. LED mood lighting, auto shut-off, whisper-quiet operation. Part of the emotional economy trend - create your space, set your mood.',zh:'\u8d85\u58f0\u6ce2\u51b7\u96fe\u9999\u85b0\u673a\uff0c\u667a\u80fd\u5b9a\u65f6\u3002200ml\u6c34\u7bb1\u7eed\u822a10\u5c0f\u65f6\u3002LED\u6c1b\u56f4\u706f\uff0c\u81ea\u52a8\u65ad\u7535\uff0c\u8d85\u9759\u97f3\u8fd0\u884c\u3002\u60c5\u7eea\u7ecf\u6d4e\u65f6\u4ee3\u7684\u5fc5\u5907\u597d\u7269\u3002'},
    specs:[{l:{en:'Tank',zh:'\u6c34\u7bb1'},v:{en:'200ml',zh:'200ml'}},{l:{en:'Runtime',zh:'\u7eed\u822a'},v:{en:'Up to 10 hours',zh:'\u6700\u957f10\u5c0f\u65f6'}},{l:{en:'Coverage',zh:'\u8986\u76d6'},v:{en:'30 sqm',zh:'30\u5e73\u65b9\u7c73'}},{l:{en:'Material',zh:'\u6750\u8d28'},v:{en:'PP + Ceramic',zh:'PP+\u9676\u74f7'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Guangzhou, China',zh:'\u4e2d\u56fd\u5e7f\u5dde'}}],featured:true},
  {id:'wireless-charger',tags:['bestseller','trending'],thumbs:['https://img11.360buyimg.com/n1/jfs/t1/180864/17/51794/45144/6747d332F3f3aaf51/e99a416af6522d1c.jpg','https://img11.360buyimg.com/n1/jfs/t1/180338/33/45442/32927/66472b51Fc246083f/7f1ebc765294b0e6.jpg','https://img11.360buyimg.com/n1/jfs/t1/175144/19/47287/43877/66472b50Fbda1c30f/42a4f919b210177b.jpg'],
    title:{en:'3-in-1 Wireless Charger',zh:'\u4e09\u5408\u4e00\u65e0\u7ebf\u5145\u7535\u5668'},
    price:{en:'Est. $20-30 USD',zh:'\u7ea6 \u00a5145\u2013215'},
    desc:{en:'Charge your phone, earbuds, and watch simultaneously. 15W fast charging, LED indicator, non-slip base. Universal compatibility with all Qi devices. Foldable design that travels with you.',zh:'\u624b\u673a\u3001\u8033\u673a\u3001\u624b\u8868\u4e09\u5408\u4e00\u540c\u65f6\u5145\u300215W\u5feb\u5145\uff0cLED\u6307\u793a\u706f\uff0c\u9632\u6ed1\u5e95\u5ea7\u3002\u901a\u7528\u517c\u5bb9\u6240\u6709Qi\u8bbe\u5907\uff0c\u53ef\u6298\u53e0\u5e26\u51fa\u95e8\u3002'},
    specs:[{l:{en:'Phone',zh:'\u624b\u673a'},v:{en:'15W max',zh:'\u6700\u9ad815W'}},{l:{en:'Earbuds',zh:'\u8033\u673a'},v:{en:'5W',zh:'5W'}},{l:{en:'Watch',zh:'\u624b\u8868'},v:{en:'3W',zh:'3W'}},{l:{en:'Input',zh:'\u8f93\u5165'},v:{en:'USB-C / QC 3.0',zh:'USB-C / QC 3.0'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Shenzhen, China',zh:'\u4e2d\u56fd\u6df1\u5733'}}]},
  {id:'blender-cup',tags:['bestseller'],thumbs:['https://img11.360buyimg.com/n1/jfs/t20280514/435318/34/8611/147293/6a07126eFde29b840/0a023203205ccb87.jpg','https://img11.360buyimg.com/n1/jfs/t1/352930/4/5125/105267/69300550F0736460c/53dad0439ad03b9f.jpg','https://img11.360buyimg.com/n1/jfs/t1/333488/17/25865/202233/68fb4a3cFe3915690/ec045fd45bbb6ff0.jpg'],
    title:{en:'Portable Blender Cup',zh:'\u4fbf\u643a\u5f0f\u69a8\u6c41\u676f'},
    price:{en:'Est. $12-20 USD',zh:'\u7ea6 \u00a585\u2013145'},
    desc:{en:'Personal blender that goes anywhere. USB rechargeable, 400ml capacity, 6-blade design. Crushes ice, fruits, and protein shakes in 30 seconds. Dishwasher safe. The health-conscious choice for life on the go.',zh:'\u968f\u8eab\u643a\u5e26\u7684\u4e2a\u4eba\u69a8\u6c41\u676f\u3002USB\u5145\u7535\uff0c400ml\u5bb9\u91cf\uff0c6\u53f6\u5200\u5934\u300230\u79d2\u788e\u51b0\u3001\u6253\u679c\u6c41\u3001\u86cb\u767d\u5976\u66ff\u3002\u559c\u6765\u53ef\u5165\u6d17\u7897\u673a\u3002\u5065\u5eb7\u751f\u6d3b\u5fc5\u5907\u3002'},
    specs:[{l:{en:'Capacity',zh:'\u5bb9\u91cf'},v:{en:'400ml',zh:'400ml'}},{l:{en:'Battery',zh:'\u7535\u6c60'},v:{en:'USB-C rechargeable',zh:'USB-C\u5145\u7535'}},{l:{en:'Motor',zh:'\u9a6c\u8fbe'},v:{en:'6-blade, 180W',zh:'6\u53f6\u5200\u5934\u00b7180W'}},{l:{en:'Material',zh:'\u6750\u8d28'},v:{en:'Tritan + ABS',zh:'Tritan+ABS'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Guangzhou, China',zh:'\u4e2d\u56fd\u5e7f\u5dde'}}]},
  {id:'terrarium-kit',tags:['new'],thumbs:['https://img11.360buyimg.com/n1/jfs/t1/210421/40/40114/152548/65ee8835F1c3ee473/06c412686a1cf811.jpg','https://img11.360buyimg.com/n1/jfs/t1/226623/26/14440/204485/65ee8821F36a2a2fe/69ecc9e455150087.jpg','https://img11.360buyimg.com/n1/jfs/t1/228204/16/12802/206425/65ee8826Ff576cbf9/d19703ac93715fed.jpg'],
    title:{en:'DIY Terrarium Kit',zh:'DIY\u5fae\u666f\u89c2\u751f\u6001\u74f6'},
    price:{en:'Est. $14-24 USD',zh:'\u7ea6 \u00a5100\u2013170'},
    desc:{en:'Create your own miniature garden. Includes glass container, soil layers, pebbles, moss, figurines, and LED light ring. Everything you need for a living desktop ecosystem. Trending on Xiaohongshu for a reason.',zh:'\u6253\u9020\u4f60\u7684\u8ff7\u4f60\u82b1\u56ed\u3002\u542b\u73bb\u7483\u74f6\u3001\u8425\u517b\u571f\u3001\u5f69\u77f3\u3001\u82d4\u84d3\u3001\u516c\u4ed4\u3001LED\u706f\u73af\u3002\u81ea\u7ed9\u81ea\u8db3\u7684\u684c\u9762\u751f\u6001\u5c0f\u4e16\u754c\uff0c\u5c0f\u7ea2\u4e66\u70ed\u95e8\u5b89\u5fc3\u597d\u7269\u3002'},
    specs:[{l:{en:'Container',zh:'\u5bb9\u5668'},v:{en:'Glass, 15cm tall',zh:'\u73bb\u7483\u00b7\u9ad815cm'}},{l:{en:'Includes',zh:'\u5305\u542b'},v:{en:'Soil + pebbles + moss + figurines + LED',zh:'\u571f+\u77f3+\u82d4\u84d3+\u516c\u4ed4+LED\u706f'}},{l:{en:'Care',zh:'\u7167\u6599'},v:{en:'Once a week',zh:'\u6bcf\u5468\u4e00\u6b21'}},{l:{en:'Packaging',zh:'\u5305\u88c5'},v:{en:'Complete kit box',zh:'\u6574\u76d2\u5957\u88c5'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Yiwu, China',zh:'\u4e2d\u56fd\u4e49\u4e4c'}}]}
];

var processSteps = [
  {t:{en:'You reach out',zh:'\u8054\u7cfb\u6211'},d:{en:'Send a photo, link, or idea. I\'ll respond within 2 hours.',zh:'WhatsApp\u53d1\u4e00\u5f20\u56fe\u6216\u4e00\u4e2a\u60f3\u6cd5\uff0c2\u5c0f\u65f6\u5185\u56de\u590d\u3002'}},
  {t:{en:'I source & quote',zh:'\u627e\u8d27\u62a5\u4ef7'},d:{en:'Best supplier found. Transparent pricing (product + shipping + 15% fee).',zh:'\u6700\u4f18\u4f9b\u5e94\u5546\u3002\u900f\u660e\u62a5\u4ef7\uff08\u4ea7\u54c1+\u8fd0\u8d39+15%\u670d\u52a1\u8d39\uff09\u3002'}},
  {t:{en:'50% deposit',zh:'\u4ed8\u5b9a\u91d1'},d:{en:'You pay half. I purchase and inspect in Hong Kong.',zh:'\u4ed8\u4e00\u534a\u5b9a\u91d1\uff0c\u6211\u91c7\u8d2d\u5e76\u53d1\u5230\u9999\u6e2f\u9a8c\u8d27\u3002'}},
  {t:{en:'Packing video',zh:'\u6253\u5305\u5f55\u50cf'},d:{en:'I film the packing. You approve before paying the rest.',zh:'\u5168\u7a0b\u5f55\u50cf\u6253\u5305\uff0c\u4f60\u786e\u8ba4\u540e\u518d\u4ed8\u5c3e\u6b3e\u3002'}},
  {t:{en:'Ship to you',zh:'\u5168\u7403\u53d1\u8d27'},d:{en:'Hong Kong direct. Air 3-7d or Sea 15-30d. Fully tracked.',zh:'\u9999\u6e2f\u76f4\u53d1\uff0c\u7a7a\u8fd03-7\u5929/\u6d77\u8fd015-30\u5929\u3002\u5168\u7a0b\u53ef\u8ffd\u8e2a\u3002'}}
];

var earlyBirdOffers = [
  {icon:'&#x1F44D;',t:{en:'Be an early adopter',zh:'\u6210\u4e3a\u9996\u6279\u5ba2\u6237'},d:{en:'Get 15% off your first order. Help shape how this service works.',zh:'\u9996\u535585\u6298\u3002\u4f60\u7684\u53cd\u9988\u5c06\u51b3\u5b9a\u8fd9\u4e2a\u670d\u52a1\u7684\u672a\u6765\u65b9\u5411\u3002'},btn:{en:'Claim discount &rarr;',zh:'\u9886\u53d6\u4f18\u60e0 &rarr;'},link:'https://wa.me/85212345678?text=Hi%20I%20want%20the%20early%20adopter%20discount'},
  {icon:'&#x1F4AC;',t:{en:'Suggest a product',zh:'\u63a8\u8350\u4e00\u6b3e\u4ea7\u54c1'},d:{en:'Have something specific in mind? Tell me what to source and I\'ll find the best option.',zh:'\u6709\u60f3\u627e\u7684\u4e1c\u897f\uff1f\u544a\u8bc9\u6211\uff0c\u6211\u53bb\u5e2e\u4f60\u627e\u6700\u4f18\u8d27\u6e90\u3002'},btn:{en:'Send request &rarr;',zh:'\u53d1\u9001\u9700\u6c42 &rarr;'},link:'https://wa.me/85212345678?text=Hi%20I%20have%20a%20product%20request'},
  {icon:'&#x1F30D;',t:{en:'For resellers',zh:'\u6279\u53d1\u5ba2\u6237'},d:{en:'Running a shop? I offer bulk pricing, white-label options, and dedicated sourcing.',zh:'\u6709\u5e97\u94fa\uff1f\u6211\u63d0\u4f9b\u6279\u91cf\u4ef7\u683c\u3001\u8d34\u724c\u4ee3\u5de5\u548c\u4e13\u5c5e\u91c7\u8d2d\u670d\u52a1\u3002'},btn:{en:'Contact me &rarr;',zh:'\u8054\u7cfb\u6d3d\u8c08 &rarr;'},link:'https://wa.me/85212345678?text=Hi%20I%27m%20a%20reseller'}
];

var pricingPlans = [
  {title:{en:'Pay-per-order',zh:'\u6309\u5355\u4ed8\u8d39'},price:{en:'15% fee',zh:'15%\u670d\u52a1\u8d39'},period:{en:'No subscription',zh:'\u65e0\u9700\u8ba2\u9605'},desc:{en:'Best for one-time purchases. Simple, transparent, no commitment.',zh:'\u9002\u5408\u5355\u6b21\u8d2d\u4e70\u3002\u7b80\u5355\u900f\u660e\uff0c\u65e0\u4efb\u4f55\u627f\u8bfa\u3002'},features:{en:['Full product access','Sourcing fee: 15%','Packing video guarantee','48hr response time','Pay only when you order'],zh:['\u5b8c\u6574\u4ea7\u54c1\u6d4f\u89c8','\u670d\u52a1\u8d39\uff1a15%','\u6253\u5305\u89c6\u9891\u4fdd\u969c','48\u5c0f\u65f6\u56de\u590d','\u4e0b\u5355\u624d\u4ed8\u8d39']},btn:{en:'Browse products',zh:'\u6d4f\u89c8\u4ea7\u54c1'},link:'products.html',featured:false},
  {title:{en:'Bulk discount',zh:'\u6279\u91cf\u4f18\u60e0'},price:{en:'10% fee',zh:'10%\u670d\u52a1\u8d39'},period:{en:'5+ items per order',zh:'\u6bcf\u5355\u00a05\u4ef6\u8d77'},desc:{en:'For regular buyers and small businesses. Reduced fee and priority response.',zh:'\u9002\u5408\u5e38\u5ba2\u548c\u5c0f\u5546\u5bb6\u3002\u66f4\u4f4e\u8d39\u7387\uff0c\u4f18\u5148\u56de\u590d\u3002'},features:{en:['Full product access','Sourcing fee: 10%','Priority 24hr response','Consolidated shipping','Monthly trend report'],zh:['\u5b8c\u6574\u4ea7\u54c1\u6d4f\u89c8','\u670d\u52a1\u8d39\uff1a10%','\u4f18\u514824\u5c0f\u65f6\u56de\u590d','\u5408\u5e76\u53d1\u8d27','\u6708\u5ea6\u8d8b\u52bf\u62a5\u544a']},btn:{en:'Contact me',zh:'\u8054\u7cfb\u6211'},link:'https://wa.me/85212345678?text=Hi%20I%27m%20interested%20in%20bulk%20sourcing',featured:true},
  {title:{en:'Custom sourcing',zh:'\u5b9a\u5236\u91c7\u8d2d'},price:{en:'Custom quote',zh:'\u5b9a\u5236\u62a5\u4ef7'},period:{en:'For resellers',zh:'\u9762\u5411\u6279\u53d1\u5546'},desc:{en:'Dedicated account, factory introductions, white-label, and volume pricing.',zh:'\u4e13\u5c5e\u5bf9\u63a5\u3001\u5de5\u5382\u5f15\u8350\u3001\u8d34\u724c\u4ee3\u5de5\u3001\u6279\u91cf\u4ef7\u683c\u3002'},features:{en:['Dedicated sourcing manager','Custom fee structure','Bulk shipping rates','Factory introductions','White-label options'],zh:['\u4e13\u5c5e\u91c7\u8d2d\u7ecf\u7406','\u5b9a\u5236\u670d\u52a1\u8d39\u7387','\u6279\u91cf\u7269\u6d41\u4f18\u60e0','\u5de5\u5382\u5f15\u8350','\u53ef\u8d34\u724c\u4ee3\u5de5']},btn:{en:'Let\'s talk',zh:'\u8054\u7cfb\u6d3d\u8c08'},link:'https://wa.me/85212345678?text=Hi%20I%27m%20interested%20in%20custom%20sourcing',featured:false}
];

var faqItems = [
  {q:{en:'How do I pay?',zh:'\u600e\u4e48\u4ed8\u6b3e\uff1f'},a:{en:'PayPal, WeChat Pay, Alipay, or Hong Kong FPS. 50% deposit upfront, balance after you approve the packing video.',zh:'PayPal\u3001\u5fae\u4fe1\u652f\u4ed8\u3001\u652f\u4ed8\u5b9d\u6216\u9999\u6e2fFPS\u3002\u5148\u4ed850%\u5b9a\u91d1\uff0c\u6253\u5305\u89c6\u9891\u786e\u8ba4\u540e\u4ed8\u5c3e\u6b3e\u3002'}},
  {q:{en:'What if I don\'t like the product in the video?',zh:'\u770b\u5b8c\u89c6\u9891\u4e0d\u6ee1\u610f\u600e\u4e48\u529e\uff1f'},a:{en:'Simply don\'t pay the balance. No fees, no hassle. You only risk the deposit.',zh:'\u76f4\u63a5\u53d6\u6d88\uff0c\u4e0d\u4ed8\u5c3e\u6b3e\uff0c\u4e0d\u6536\u4efb\u4f55\u8d39\u7528\u3002\u4f60\u53ea\u627f\u62c5\u5b9a\u91d1\u7684\u627e\u8d27\u6210\u672c\u3002'}},
  {q:{en:'Can I cancel my order?',zh:'\u53ef\u4ee5\u53d6\u6d88\u8ba2\u5355\u5417\uff1f'},a:{en:'Yes, anytime before approving the packing video. After that, the order is shipped.',zh:'\u53ef\u4ee5\u3002\u6253\u5305\u89c6\u9891\u786e\u8ba4\u524d\u53ef\u968f\u65f6\u53d6\u6d88\u3002\u786e\u8ba4\u540e\u5373\u53d1\u8d27\u3002'}},
  {q:{en:'What if the product arrives damaged?',zh:'\u6536\u5230\u635f\u574f\u600e\u4e48\u529e\uff1f'},a:{en:'Contact me within 48 hours with photos. I\'ll arrange a replacement or refund.',zh:'48\u5c0f\u65f6\u5185\u53d1\u7167\u7247\u7ed9\u6211\uff0c\u6211\u4f1a\u5b89\u6392\u8865\u53d1\u6216\u9000\u6b3e\u3002\u00a0$50\u4ee5\u4e0a\u8ba2\u5355\u542b\u8fd0\u8f93\u4fdd\u9669\u3002'}},
  {q:{en:'Will I be charged customs tax?',zh:'\u4f1a\u88ab\u7a0e\u5417\uff1f'},a:{en:'Most packages under $50 USD enter duty-free in US, UK, and EU. I declare honestly.',zh:'$50\u4ee5\u4e0b\u5305\u88f9\u5728\u7f8e\u82f1\u6b27\u901a\u5e38\u514d\u7a0e\u3002\u5982\u5b9e\u7533\u62a5\uff0c\u7a0e\u8d39\u7531\u4e70\u5bb6\u627f\u62c5\u3002'}},
  {q:{en:'Can you find something very specific?',zh:'\u53ef\u4ee5\u627e\u5f88\u7279\u5b9a\u7684\u4ea7\u54c1\u5417\uff1f'},a:{en:'Absolutely - that\'s the core of what I do. Send a photo or idea. I\'ll search my supplier network.',zh:'\u5f53\u7136 - \u8fd9\u6b63\u662f\u6211\u7684\u6838\u5fc3\u670d\u52a1\u3002\u53d1\u56fe\u7247\u3001\u94fe\u63a5\u751a\u81f3\u624b\u7ed8\u56fe\uff0c24\u5c0f\u65f6\u5185\u56de\u590d\u65b9\u6848\u3002'}},
  {q:{en:'Are there any minimum order quantities?',zh:'\u6709\u6700\u4f4e\u8d77\u8ba2\u91cf\u5417\uff1f'},a:{en:'No minimum for standard sourcing. One piece is fine. For bulk orders (5+), better pricing.',zh:'\u6807\u51c6\u4ee3\u8d2d\u65e0\u8d77\u8ba2\u91cf\uff0c\u4e00\u4ef6\u4e5f\u53ef\u4ee5\u3002\u6279\u91cf\u8ba2\u5355\uff085+\u4ef6\uff09\u53ef\u5e2e\u60a8\u8c08\u66f4\u4f4e\u5355\u4ef7\u3002'}},
  {q:{en:'Are you a registered business?',zh:'\u6709\u6ce8\u518c\u516c\u53f8\u5417\uff1f'},a:{en:'Yes, fully registered in Hong Kong. Invoices and receipts available.',zh:'\u6709\u7684\uff0c\u5728\u9999\u6e2f\u6b63\u5f0f\u6ce8\u518c\u8fd0\u8425\u3002\u53ef\u63d0\u4f9b\u6536\u636e\u548c\u53d1\u7968\u3002'}}
];

var tags = ['all','new','trending','bestseller'];
var tagLabels = {en:{all:'All',new:'New',trending:'Trending',bestseller:'Bestseller'},zh:{all:'\u5168\u90e8',new:'\u65b0\u54c1',trending:'\u70ed\u95e8',bestseller:'\u7545\u9500'}};

var translations = {
  en: {
    'nav.products':'Finds','nav.pricing':'Pricing','nav.hunter':'About','nav.cta':'WhatsApp me','nav.langBtn':'EN',
    'hero.desc':'I walk the wholesale markets of Yiwu and Guangzhou so you don\'t have to. Every product sampled, tested, and packed on camera before you pay.',
    'hero.cta1':'Explore finds \u2192','hero.cta2':'How it works',
    'hero.b1':'See product before paying full','hero.b2':'50% deposit only','hero.b3':'Real packing video sent to you',
    'trust.video':'See product before paying','trust.videos':'Packing video guarantee',
    'trust.deposit':'50% deposit only','trust.deposits':'Pay balance after approval',
    'trust.ship':'Ships from Hong Kong','trust.ships':'Air 3-7d / Sea 15-30d',
    'trust.chat':'Chat before you buy','trust.chats':'Typical 2hr response',
    'gallery.label':'The collection',
    'cosmic.label':'The journey',
    'hunter.label':'Behind the finds','hunter.name':'Meet your hunter','hunter.role':'China product scout \u00b7 Based in Hong Kong',
    'hunter.bio1':'I spend my days in Yiwu\'s wholesale maze, Guangzhou\'s factory alley, and Shenzhen\'s electronics markets, hunting for the most curious, unique, and well-made products China has to offer.',
    'hunter.bio2':'My rule is simple: I never list a product I haven\'t personally touched, tested, and approved. The packing video is my promise to you - what you see is exactly what you get.',
    'hunter.s1v':'5+','hunter.s1l':'Years sourcing','hunter.s2v':'30+','hunter.s2l':'Suppliers vetted','hunter.s3v':'Early','hunter.s3l':'Building client trust',
    'early.label':'Be the first','early.desc':'I\'m launching to my first clients. Your feedback will define how this works for everyone who comes after.',
    'dispatch.label':'Field notes','dispatch.desc':'Notes from the market - real updates from my next sourcing trip.',
    'dispatch.soonTitle':'First field note coming soon','dispatch.soonDesc':'I\'m planning my next sourcing trip to Yiwu. Real photos, real findings - no stock content.',
    'pricing.label':'Transparent fees','pricing.desc':'No hidden fees. No subscriptions needed. You only pay when you order.',
    'faq.label':'Questions?',
    'cta.title':'Ready to find something curious?','cta.desc':'Send me a photo, link, or just an idea. I\'ll respond within 2 hours.',
    'cta.whatsapp':'Inquire on WhatsApp \u2192','cta.email':'Email me','cta.note':'Your privacy is respected. No spam, ever.',
    'footer.brand':'Your personal product hunter. Finding China\'s curious finds, verifying quality, and shipping them from Hong Kong to your door.',
    'footer.nav':'Navigate','footer.n2':'Finds','footer.n3':'Pricing','footer.n4':'About','footer.n5':'Blog',
    'footer.connect':'Connect','footer.policies':'Policies',
    'footer.terms':'Terms of Service','footer.refund':'Refund Policy','footer.privacy':'Privacy Policy',
    'footer.copy':'Personal shopping service, Hong Kong.','footer.tagline':'Every product, personally verified.'
  },
  zh: {
    'nav.products':'\u597d\u7269','nav.pricing':'\u4ef7\u683c','nav.hunter':'\u5173\u4e8e','nav.cta':'\u8054\u7cfb\u6211','nav.langBtn':'\u4e2d',
    'hero.desc':'\u4e49\u4e4c\u3001\u5e7f\u5dde\u3001\u6df1\u5733\u534e\u5f3a\u5317 - \u6211\u4eb2\u81ea\u8dd1\u5e02\u573a\u627e\u8d27\u3002\u6bcf\u4ef6\u4ea7\u54c1\u5148\u4e70\u6837\u54c1\u6d4b\u8bd5\uff0c\u6253\u5305\u5168\u7a0b\u5f55\u50cf\u3002\u4f60\u770b\u5230\u4ec0\u4e48\uff0c\u6536\u5230\u5c31\u662f\u4ec0\u4e48\u3002',
    'hero.cta1':'\u6d4f\u89c8\u7cbe\u9009 \u2192','hero.cta2':'\u4e86\u89e3\u6536\u8d39',
    'hero.b1':'\u5148\u770b\u8d27\u518d\u4ed8\u5168\u6b3e','hero.b2':'\u4ec5\u970050%\u5b9a\u91d1','hero.b3':'\u771f\u5b9e\u6253\u5305\u89c6\u9891\u53d1\u7ed9\u4f60',
    'trust.video':'\u5148\u770b\u8d27\u518d\u4ed8\u5168\u6b3e','trust.videos':'\u6253\u5305\u89c6\u9891\u4fdd\u969c',
    'trust.deposit':'\u4ec5\u970050%\u5b9a\u91d1','trust.deposits':'\u786e\u8ba4\u540e\u518d\u4ed8\u5c3e\u6b3e',
    'trust.ship':'\u9999\u6e2f\u76f4\u53d1\u5168\u7403','trust.ships':'\u7a7a\u8fd03-7\u5929/\u6d77\u8fd015-30\u5929',
    'trust.chat':'\u5148\u804a\u518d\u4e70','trust.chats':'\u901a\u5e382\u5c0f\u65f6\u5185\u56de\u590d',
    'gallery.label':'\u4ea7\u54c1\u96c6',
    'cosmic.label':'\u65c5\u7a0b',
    'hunter.label':'\u5173\u4e8e\u6211','hunter.name':'\u4f60\u7684\u79c1\u4eba\u4e70\u624b','hunter.role':'\u4e2d\u56fd\u4ea7\u54c1\u730e\u4eba \u00b7 \u4eba\u5728\u9999\u6e2f',
    'hunter.bio1':'\u6211\u7684\u65e5\u5e38\uff1a\u6ce1\u5728\u4e49\u4e4c\u7684\u6279\u53d1\u8ff7\u5bab\u3001\u5e7f\u5dde\u7684\u5de5\u5382\u5c0f\u5df7\u3001\u6df1\u5733\u534e\u5f3a\u5317\u7684\u7535\u5b50\u5e02\u573a - \u5bfb\u627e\u4e2d\u56fd\u6700\u6709\u8da3\u3001\u6700\u72ec\u7279\u3001\u6700\u7cbe\u826f\u7684\u4ea7\u54c1\u3002',
    'hunter.bio2':'\u539f\u5219\u5f88\u7b80\u5355\uff1a\u6ca1\u4eb2\u624b\u6478\u8fc7\u3001\u6d4b\u8bd5\u8fc7\u3001\u8ba4\u53ef\u8fc7\u7684\u4ea7\u54c1\uff0c\u7edd\u4e0d\u4e0a\u67b6\u3002\u6253\u5305\u89c6\u9891\u662f\u6211\u7684\u627f\u8bfa - \u4f60\u770b\u5230\u4ec0\u4e48\uff0c\u6536\u5230\u7684\u5c31\u662f\u4ec0\u4e48\u3002',
    'hunter.s1v':'5\u5e74+','hunter.s1l':'\u91c7\u8d2d\u7ecf\u9a8c','hunter.s2v':'30+','hunter.s2l':'\u4f9b\u5e94\u5546\u7b5b\u9009','hunter.s3v':'\u521d\u671f','hunter.s3l':'\u79ef\u7d2f\u5ba2\u6237\u4fe1\u4efb',
    'early.label':'\u6210\u4e3a\u9996\u6279','early.desc':'\u6211\u6b63\u5728\u670d\u52a1\u7b2c\u4e00\u6279\u5ba2\u6237\u3002\u4f60\u7684\u53cd\u9988\u5c06\u51b3\u5b9a\u8fd9\u4e2a\u670d\u52a1\u7684\u672a\u6765\u65b9\u5411\u3002',
    'dispatch.label':'\u63a2\u8bbf\u7b14\u8bb0','dispatch.desc':'\u6765\u81ea\u5e02\u573a\u4e00\u7ebf\u7684\u771f\u5b9e\u8bb0\u5f55 - \u6211\u7684\u4e0b\u4e00\u6b21\u4e49\u4e4c\u4e4b\u65c5\u3002',
    'dispatch.soonTitle':'\u7b2c\u4e00\u7bc7\u7b14\u8bb0\u5373\u5c06\u4e0a\u7ebf','dispatch.soonDesc':'\u6211\u6b63\u5728\u8ba1\u5212\u4e0b\u4e00\u6b21\u4e49\u4e4c\u63a2\u5382\u4e4b\u65c5\u3002\u771f\u5b9e\u7167\u7247\uff0c\u771f\u5b9e\u53d1\u73b0 - \u6ca1\u6709\u5e93\u5b58\u5185\u5bb9\u3002',
    'pricing.label':'\u900f\u660e\u6536\u8d39','pricing.desc':'\u6ca1\u6709\u9690\u85cf\u8d39\u7528\uff0c\u65e0\u9700\u8ba2\u9605\u3002\u53ea\u5728\u8ba2\u5355\u4ea7\u751f\u65f6\u4ed8\u8d39\u3002',
    'faq.label':'\u5e38\u89c1\u95ee\u9898',
    'cta.title':'\u51c6\u5907\u597d\u5f00\u59cb\u4e86\u5417\uff1f','cta.desc':'\u53d1\u4e00\u5f20\u7167\u7247\u3001\u4e00\u4e2a\u94fe\u63a5\u6216\u4e00\u4e2a\u60f3\u6cd5\u7ed9\u6211\u3002\u6211\u5c06\u57282\u5c0f\u65f6\u5185\u56de\u590d\u3002',
    'cta.whatsapp':'\u5728 WhatsApp \u54a8\u8be2 \u2192','cta.email':'\u53d1\u9001\u90ae\u4ef6','cta.note':'\u4f60\u7684\u9690\u79c1\u4f1a\u5f97\u5230\u4fdd\u62a4\u3002\u7edd\u4e0d\u53d1\u9001\u5783\u573e\u90ae\u4ef6\u3002',
    'footer.brand':'\u4f60\u7684\u79c1\u4eba\u4ea7\u54c1\u730e\u4eba\u3002\u5728\u4e2d\u56fd\u5bfb\u627e\u65b0\u5947\u597d\u7269\uff0c\u68c0\u9a8c\u54c1\u8d28\uff0c\u4ece\u9999\u6e2f\u5bc4\u5230\u4f60\u5bb6\u95e8\u53e3\u3002',
    'footer.nav':'\u5bfc\u822a','footer.n2':'\u597d\u7269','footer.n3':'\u4ef7\u683c','footer.n4':'\u5173\u4e8e','footer.n5':'\u6587\u7ae0',
    'footer.connect':'\u8054\u7cfb','footer.policies':'\u653f\u7b56',
    'footer.terms':'\u670d\u52a1\u6761\u6b3e','footer.refund':'\u9000\u6b3e\u653f\u7b56','footer.privacy':'\u9690\u79c1\u653f\u7b56',
    'footer.copy':'\u57fa\u4e8e\u9999\u6e2f\u7684\u4e2a\u4eba\u4ee3\u8d2d\u670d\u52a1\u3002','footer.tagline':'\u6bcf\u4ef6\u4ea7\u54c1\uff0c\u4eb2\u81ea\u628a\u5173\u3002'
  }
};
