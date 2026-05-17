'use strict';
var products = [
  {id:'fidget-cube',tags:['new'],thumbs:['https://picsum.photos/seed/fidget-cube-1/800/600','https://picsum.photos/seed/fidget-cube-2/800/600','https://picsum.photos/seed/fidget-cube-3/800/600'],
    title:{en:'Infinity Fidget Cube',zh:'\u65e0\u9650\u89e3\u538b\u9ab0\u5b50'},
    price:{en:'Est. $18-28 USD',zh:'\u7ea6 \u00a5130\u2013200'},
    desc:{en:'Six sides, six distinct tactile sensations. CNC-machined aluminum body that disappears into your palm. Each face offers a different satisfying interaction - click, roll, toggle, spin, glide, and breathe.',zh:'\u516d\u9762\u516d\u79cd\u89e6\u611f\uff0cCNC\u94dd\u5408\u91d1\u7cbe\u96d5\u673a\u8eab\u3002\u6bcf\u4e00\u9762\u63d0\u4f9b\u4e0d\u540c\u89e3\u538b\u65b9\u5f0f - \u6309\u538b\u3001\u6eda\u52a8\u3001\u62e8\u52a8\u3001\u65cb\u8f6c\u3001\u6ed1\u52a8\u3001\u547c\u5438\u3002'},
    specs:[{l:{en:'Material',zh:'\u6750\u8d28'},v:{en:'CNC Aluminum',zh:'CNC\u94dd\u5408\u91d1'}},{l:{en:'Weight',zh:'\u91cd\u91cf'},v:{en:'68g',zh:'68g'}},{l:{en:'Size',zh:'\u5c3a\u5bf8'},v:{en:'45x45x45mm',zh:'45x45x45mm'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Shenzhen, China',zh:'\u4e2d\u56fd\u6df1\u5733'}}],featured:true},
  {id:'cat-headphones',tags:['trending'],thumbs:['https://picsum.photos/seed/cat-hp-1/800/600','https://picsum.photos/seed/cat-hp-2/800/600','https://picsum.photos/seed/cat-hp-3/800/600'],
    title:{en:'RGB Cat Ear Headphones',zh:'RGB\u732b\u8033\u53d1\u5149\u8033\u673a'},
    price:{en:'Est. $24-38 USD',zh:'\u7ea6 \u00a5170\u2013270'},
    desc:{en:'Wireless headphones with personality. 12-hour battery, 7-color RGB cat ears that glow in the dark. Memory foam ear cups. Surprisingly good sound quality. Folds flat for travel.',zh:'\u6709\u4e2a\u6027\u7684\u65e0\u7ebf\u8033\u673a\u300212\u5c0f\u65f6\u7eed\u822a\uff0c7\u8272RGB\u732b\u8033\u53d1\u5149\uff0c\u9ed1\u6697\u4e2d\u8d85\u5438\u775b\u3002\u8bb0\u5fc6\u68c9\u8033\u5957\uff0c\u97f3\u8d28\u5c45\u7136\u8fd8\u4e0d\u9519\u3002\u53ef\u6298\u53e0\u6536\u7eb3\u3002'},
    specs:[{l:{en:'Bluetooth',zh:'\u84dd\u7259'},v:{en:'5.3',zh:'5.3'}},{l:{en:'Battery',zh:'\u7eed\u822a'},v:{en:'12 hours',zh:'12\u5c0f\u65f6'}},{l:{en:'Charging',zh:'\u5145\u7535'},v:{en:'USB-C',zh:'USB-C'}},{l:{en:'Weight',zh:'\u91cd\u91cf'},v:{en:'210g',zh:'210g'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Guangzhou, China',zh:'\u4e2d\u56fd\u5e7f\u5dde'}}],featured:true},
  {id:'hourglass',tags:['bestseller'],thumbs:['https://picsum.photos/seed/hourglass-1/800/600','https://picsum.photos/seed/hourglass-2/800/600','https://picsum.photos/seed/hourglass-3/800/600'],
    title:{en:'Anti-Gravity Hourglass',zh:'\u53cd\u91cd\u529b\u6c99\u6f0f'},
    price:{en:'Est. $14-24 USD',zh:'\u7ea6 \u00a5100\u2013170'},
    desc:{en:'Colored liquid flows upward through a magnetic field. Completely silent, completely mesmerizing. Each flip creates a unique flow pattern. Physics-defying desktop magic that never gets old.',zh:'\u5f69\u8272\u6db2\u4f53\u5728\u78c1\u573a\u4e2d\u9006\u91cd\u529b\u5411\u4e0a\u6d41\u52a8\u3002\u65e0\u58f0\u3001\u8d85\u7ea7\u6cbb\u6108\u3002\u6bcf\u6b21\u7ffb\u8f6c\u56fe\u6848\u90fd\u4e0d\u540c\u3002'},
    specs:[{l:{en:'Material',zh:'\u6750\u8d28'},v:{en:'Glass + Magnetic',zh:'\u73bb\u7483+\u78c1\u529b\u5e95\u5ea7'}},{l:{en:'Size',zh:'\u5c3a\u5bf8'},v:{en:'15x6cm',zh:'15x6cm'}},{l:{en:'Weight',zh:'\u91cd\u91cf'},v:{en:'180g',zh:'180g'}},{l:{en:'Colors',zh:'\u989c\u8272'},v:{en:'Blue/Green/Amber',zh:'\u84dd/\u7eff/\u7425\u73c0'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Yiwu, China',zh:'\u4e2d\u56fd\u4e49\u4e4c'}}]},
  {id:'levitation-globe',tags:['new','trending'],thumbs:['https://picsum.photos/seed/globe-1/800/600','https://picsum.photos/seed/globe-2/800/600','https://picsum.photos/seed/globe-3/800/600'],
    title:{en:'Magnetic Levitation Globe',zh:'\u78c1\u60ac\u6d6e\u5730\u7403\u4eea'},
    price:{en:'Est. $32-48 USD',zh:'\u7ea6 \u00a5230\u2013340'},
    desc:{en:'A 4-inch globe floating mid-air, silently rotating with zero contact. LED-lit continents glow at night. USB-powered. The ultimate desk conversation piece.',zh:'4\u82f1\u5bf8\u5730\u7403\u4eea\u60ac\u6d6e\u534a\u7a7a\uff0c\u65e0\u58f0\u81ea\u8f6c\uff0c\u96f6\u63a5\u89e6\u3002LED\u5927\u9646\u8f6e\u5ed3\u591c\u95f4\u53d1\u5149\u3002USB\u4f9b\u7535\u3002'},
    specs:[{l:{en:'Globe',zh:'\u7403\u4f53'},v:{en:'4 inches (10cm)',zh:'4\u82f1\u5bf8(10cm)'}},{l:{en:'Power',zh:'\u4f9b\u7535'},v:{en:'USB 5V/2A',zh:'USB 5V/2A'}},{l:{en:'Float',zh:'\u60ac\u6d6e'},v:{en:'~8mm',zh:'~8mm'}},{l:{en:'Weight',zh:'\u91cd\u91cf'},v:{en:'320g',zh:'320g'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Shenzhen, China',zh:'\u4e2d\u56fd\u6df1\u5733'}}]},
  {id:'pocket-micro',tags:['new'],thumbs:['https://picsum.photos/seed/micro-1/800/600','https://picsum.photos/seed/micro-2/800/600','https://picsum.photos/seed/micro-3/800/600'],
    title:{en:'1000X Pocket Microscope',zh:'1000\u500d\u53e3\u888b\u663e\u5fae\u955c'},
    price:{en:'Est. $22-35 USD',zh:'\u7ea6 \u00a5160\u2013250'},
    desc:{en:'Lab-grade microscope that fits in your pocket. 1000X magnification with adjustable focus, built-in LED illumination, and a smartphone clip for capturing images.',zh:'\u53ef\u4ee5\u653e\u8fdb\u53e3\u888b\u7684\u5b9e\u9a8c\u5ba4\u7ea7\u663e\u5fae\u955c\u30021000\u500d\u653e\u5927\uff0c\u53ef\u8c03\u7126\uff0c\u5185\u7f6eLED\u7167\u660e\uff0c\u9644\u624b\u673a\u5939\u53ef\u62cd\u7167\u3002'},
    specs:[{l:{en:'Magnification',zh:'\u653e\u5927'},v:{en:'100X-1000X',zh:'100X\u20131000X'}},{l:{en:'Weight',zh:'\u91cd\u91cf'},v:{en:'95g',zh:'95g'}},{l:{en:'Battery',zh:'\u7535\u6c60'},v:{en:'2xAAA',zh:'2xAAA'}},{l:{en:'Includes',zh:'\u9644\u4ef6'},v:{en:'Slides + clip',zh:'\u73bb\u7247+\u624b\u673a\u5939'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Guangzhou, China',zh:'\u4e2d\u56fd\u5e7f\u5dde'}}]},
  {id:'led-mask',tags:['trending','bestseller'],thumbs:['https://picsum.photos/seed/led-mask-1/800/600','https://picsum.photos/seed/led-mask-2/800/600','https://picsum.photos/seed/led-mask-3/800/600'],
    title:{en:'LED Light-up Mask',zh:'LED\u53d1\u5149\u9762\u5177'},
    price:{en:'Est. $12-22 USD',zh:'\u7ea6 \u00a585\u2013160'},
    desc:{en:'Programmable LED mask with 10+ dynamic patterns. Perfect for festivals, parties, or just being the most interesting person in the room. USB rechargeable, lightweight.',zh:'\u53ef\u7f16\u7a0bLED\u9762\u5177\uff0c10+\u79cd\u52a8\u6001\u706f\u5149\u6a21\u5f0f\u3002\u97f3\u4e50\u8282\u3001\u6d3e\u5bf9\u5fc5\u5907\u3002USB\u5145\u7535\uff0c\u8f7b\u91cf\u8212\u9002\u3002'},
    specs:[{l:{en:'Patterns',zh:'\u6a21\u5f0f'},v:{en:'10+',zh:'10+\u79cd'}},{l:{en:'Battery',zh:'\u7535\u6c60'},v:{en:'USB rechargeable',zh:'USB\u5145\u7535'}},{l:{en:'Weight',zh:'\u91cd\u91cf'},v:{en:'85g',zh:'85g'}},{l:{en:'Material',zh:'\u6750\u8d28'},v:{en:'ABS + LED',zh:'ABS+LED'}},{l:{en:'Origin',zh:'\u4ea7\u5730'},v:{en:'Yiwu, China',zh:'\u4e2d\u56fd\u4e49\u4e4c'}}]}
];

var processSteps = [
  {t:{en:'You reach out',zh:'\u8054\u7cfb\u6211'},d:{en:'Send a photo, link, or idea. I\'ll respond within 2 hours.',zh:'WhatsApp\u53d1\u4e00\u5f20\u56fe\u6216\u4e00\u4e2a\u60f3\u6cd5\uff0c2\u5c0f\u65f6\u5185\u56de\u590d\u3002'}},
  {t:{en:'I source & quote',zh:'\u627e\u8d27\u62a5\u4ef7'},d:{en:'Best supplier found. Transparent pricing (product + shipping + 15% fee).',zh:'\u6700\u4f18\u4f9b\u5e94\u5546\u3002\u900f\u660e\u62a5\u4ef7\uff08\u4ea7\u54c1+\u8fd0\u8d39+15%\u670d\u52a1\u8d39\uff09\u3002'}},
  {t:{en:'50% deposit',zh:'\u4ed8\u5b9a\u91d1'},d:{en:'You pay half. I purchase and inspect in Hong Kong.',zh:'\u4ed8\u4e00\u534a\u5b9a\u91d1\uff0c\u6211\u91c7\u8d2d\u5e76\u53d1\u5230\u9999\u6e2f\u9a8c\u8d27\u3002'}},
  {t:{en:'Packing video',zh:'\u6253\u5305\u5f55\u50cf'},d:{en:'I film the packing. You approve before paying the rest.',zh:'\u5168\u7a0b\u5f55\u50cf\u6253\u5305\uff0c\u4f60\u786e\u8ba4\u540e\u518d\u4ed8\u5c3e\u6b3e\u3002'}},
  {t:{en:'Ship to you',zh:'\u5168\u7403\u53d1\u8d27'},d:{en:'Hong Kong direct. Air 3-7d or Sea 15-30d. Fully tracked.',zh:'\u9999\u6e2f\u76f4\u53d1\uff0c\u7a7a\u8fd03-7\u5929/\u6d77\u8fd015-30\u5929\u3002\u5168\u7a0b\u53ef\u8ffd\u8e2a\u3002'}}
];

var earlyBirdOffers = [
  {icon:'&#x1F44D;',t:{en:'Be an early adopter',zh:'\u6210\u4e3a\u9996\u6279\u5ba2\u6237'},d:{en:'Get 15% off your first order. Help shape how this service works.',zh:'\u9996\u53558\u5b5\u3002\u4f60\u7684\u53cd\u9988\u5c06\u51b3\u5b9a\u8fd9\u4e2a\u670d\u52a1\u7684\u672a\u6765\u65b9\u5411\u3002'},btn:{en:'Claim discount &rarr;',zh:'\u9886\u53d6\u4f18\u60e0 &rarr;'},link:'https://wa.me/85212345678?text=Hi%20I%20want%20the%20early%20adopter%20discount'},
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
    'footer.nav':'Navigate','footer.n2':'Finds','footer.n3':'Pricing','footer.n4':'About',
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
    'footer.nav':'\u5bfc\u822a','footer.n2':'\u597d\u7269','footer.n3':'\u4ef7\u683c','footer.n4':'\u5173\u4e8e',
    'footer.connect':'\u8054\u7cfb','footer.policies':'\u653f\u7b56',
    'footer.terms':'\u670d\u52a1\u6761\u6b3e','footer.refund':'\u9000\u6b3e\u653f\u7b56','footer.privacy':'\u9690\u79c1\u653f\u7b56',
    'footer.copy':'\u57fa\u4e8e\u9999\u6e2f\u7684\u4e2a\u4eba\u4ee3\u8d2d\u670d\u52a1\u3002','footer.tagline':'\u6bcf\u4ef6\u4ea7\u54c1\uff0c\u4eb2\u81ea\u628a\u5173\u3002'
  }
};
