'use strict';
var lang = localStorage.getItem('curiohunt-lang') || 'en';
var activeTag = 'all';
function T(o){return (o&&o[lang])||(o&&o.en)||''}

/* ===== NAV ===== */
function buildNav(activePage){
  var links = [
    {label:{en:'Finds',zh:'\u597d\u7269'},href:'products.html',id:'products'},
    {label:{en:'Pricing',zh:'\u4ef7\u683c'},href:'pricing.html',id:'pricing'},
    {label:{en:'About',zh:'\u5173\u4e8e'},href:'about.html',id:'about'}
  ];
  var h = '<div class="nav-inner">' +
    '<a href="index.html" class="logo"><span class="logo-mark">C</span>Curiohunt</a>' +
    '<div class="nav-links">';
  for(var i=0;i<links.length;i++){
    var li=links[i];
    var activeClass=(li.id===activePage)?' class="active"':'';
    h+='<a href="'+li.href+'"'+activeClass+'>'+T(li.label)+'</a>';
  }
  h+='<a href="pricing.html#faq">FAQ</a></div>' +
    '<div class="nav-actions">' +
    '<button class="lang-btn" id="langToggle">'+(lang==='zh'?'\u4e2d':'EN')+'</button>' +
    '<a href="https://wa.me/85212345678?text=Hi%20I%20saw%20Curiohunt" class="nav-cta">'+T({en:'WhatsApp me',zh:'\u8054\u7cfb\u6211'})+'</a>' +
    '</div></div>';
  return h;
}

/* ===== FOOTER ===== */
function buildFooter(){
  return '<div class="footer-inner">' +
    '<div class="footer-main">' +
    '<div class="footer-brand">' +
    '<a href="index.html" class="logo" style="margin-bottom:14px;display:inline-flex"><span class="logo-mark">C</span>Curiohunt</a>' +
    '<p data-key="footer.brand">'+T({en:'Your personal product hunter. Finding China\'s curious finds, verifying quality, and shipping them from Hong Kong to your door.',zh:'\u4f60\u7684\u79c1\u4eba\u4ea7\u54c1\u730e\u4eba\u3002\u5728\u4e2d\u56fd\u5bfb\u627e\u65b0\u5947\u597d\u7269\uff0c\u68c0\u9a8c\u54c1\u8d28\uff0c\u4ece\u9999\u6e2f\u5bc4\u5230\u4f60\u5bb6\u95e8\u53e3\u3002'})+'</p></div>' +
    '<div class="footer-col"><h4 data-key="footer.nav">'+T({en:'Navigate',zh:'\u5bfc\u822a'})+'</h4>' +
    '<a href="products.html" data-key="footer.n2">'+T({en:'Finds',zh:'\u597d\u7269'})+'</a>' +
    '<a href="pricing.html" data-key="footer.n3">'+T({en:'Pricing',zh:'\u4ef7\u683c'})+'</a>' +
    '<a href="about.html" data-key="footer.n4">'+T({en:'About',zh:'\u5173\u4e8e'})+'</a>' +
    '<a href="pricing.html#faq">FAQ</a></div>' +
    '<div class="footer-col"><h4 data-key="footer.connect">'+T({en:'Connect',zh:'\u8054\u7cfb'})+'</h4>' +
    '<a href="https://wa.me/85212345678?text=Hi%20from%20Curiohunt%20footer">WhatsApp</a>' +
    '<a href="mailto:hello@curiohunt.com">Email</a></div>' +
    '<div class="footer-col"><h4 data-key="footer.policies">'+T({en:'Policies',zh:'\u653f\u7b56'})+'</h4>' +
    '<a href="#" onclick="openLegal(\'terms\');return false" data-key="footer.terms">'+T({en:'Terms of Service',zh:'\u670d\u52a1\u6761\u6b3e'})+'</a>' +
    '<a href="#" onclick="openLegal(\'refund\');return false" data-key="footer.refund">'+T({en:'Refund Policy',zh:'\u9000\u6b3e\u653f\u7b56'})+'</a>' +
    '<a href="#" onclick="openLegal(\'privacy\');return false" data-key="footer.privacy">'+T({en:'Privacy Policy',zh:'\u9690\u79c1\u653f\u7b56'})+'</a></div>' +
    '</div>' +
    '<div class="footer-bottom">' +
    '<span>&copy; 2026 Curiohunt. <span data-key="footer.copy">'+T({en:'Personal shopping service, Hong Kong.',zh:'\u57fa\u4e8e\u9999\u6e2f\u7684\u4e2a\u4eba\u4ee3\u8d2d\u670d\u52a1\u3002'})+'</span></span>' +
    '<span data-key="footer.tagline">'+T({en:'Every product, personally verified.',zh:'\u6bcf\u4ef6\u4ea7\u54c1\uff0c\u4eb2\u81ea\u628a\u5173\u3002'})+'</span>' +
    '</div></div>';
}

/* ===== STARFIELD ===== */
function buildStars(){
  var sf=document.getElementById('starfield');
  if(!sf)return;
  var html='';
  for(var i=0;i<100;i++){
    var x=Math.random()*100;var y=Math.random()*100;
    var d=2+Math.random()*5;
    var sClass='s'+Math.ceil(1+Math.random()*3);
    html+='<div class="star '+sClass+'" style="left:'+x+'%;top:'+y+'%;--d:'+d+'s"></div>';
  }
  sf.innerHTML=html;
}

/* ===== FEATURED HERO ===== */
function renderFeatured(){
  var fh=document.getElementById('featuredHero');
  if(!fh)return;
  var fp=products.filter(function(p){return p.featured;});
  if(!fp.length)return;
  var p=fp[0];
  fh.innerHTML =
    '<div class="featured-visual"><span class="sticker">'+T({en:'Featured Pick',zh:'\u7f16\u8f91\u7cbe\u9009'})+'</span><img src="'+p.thumbs[0]+'" alt="'+T(p.title)+'" loading="lazy"></div>'+
    '<div class="featured-panel"><div class="featured-tags">'+p.tags.map(function(t){return '<span class="featured-tag">'+(tagLabels[lang]?.[t]||tagLabels.en[t])+'</span>';}).join('')+'</div>'+
    '<h3>'+T(p.title)+'</h3><span class="fp-price">'+T(p.price)+'</span>'+
    '<p class="fp-desc">'+T(p.desc)+'</p>'+
    '<ul class="fp-specs">'+p.specs.slice(0,4).map(function(s){return '<li><span>'+T(s.l)+'</span><span>'+T(s.v)+'</span></li>';}).join('')+'</ul>'+
    '<button class="btn-primary" onclick="openModal(\''+p.id+'\')">'+T({en:'View details \u2192',zh:'\u67e5\u770b\u8be6\u60c5 \u2192'})+'</button></div>';
}

/* ===== PRODUCT GRID ===== */
function renderProducts(){
  var tc=document.getElementById('tagFilters');
  if(tc){
    tc.innerHTML=tags.map(function(t){return '<button class="tag-filter'+(t===activeTag?' active':'')+'" data-tag="'+t+'">'+(tagLabels[lang]?.[t]||tagLabels.en[t])+'</button>';}).join('');
    tc.querySelectorAll('.tag-filter').forEach(function(b){b.addEventListener('click',function(){activeTag=b.getAttribute('data-tag');renderProducts();});});
  }
  var pg=document.getElementById('prodGrid');
  if(!pg)return;
  var f=activeTag==='all'?products:products.filter(function(p){return p.tags.indexOf(activeTag)!==-1;});
  var pc=document.getElementById('prodCount');
  if(pc)pc.textContent=f.length+' item'+(f.length!==1?'s':'');
  pg.innerHTML=f.map(function(p){return '<div class="prod-card'+(p.featured?' featured-card':'')+'" data-id="'+p.id+'"><div class="prod-visual"><img src="'+p.thumbs[0]+'" alt="'+T(p.title)+'" loading="lazy"><span class="prod-badge">'+(tagLabels[lang]?.[p.tags[0]]||tagLabels.en[p.tags[0]])+'</span></div><div class="prod-info"><h3>'+T(p.title)+'</h3><p>'+T(p.desc).substring(0,80)+'\u2026</p><div class="prod-foot"><span class="price">'+T(p.price)+'</span><span class="arrow">\u2192</span></div></div></div>';}).join('');
  pg.querySelectorAll('.prod-card').forEach(function(c){c.addEventListener('click',function(){openModal(c.getAttribute('data-id'));});});
}

/* ===== COSMIC PROCESS ===== */
function renderCosmic(){
  var ct=document.getElementById('cosmicTrack');
  if(!ct)return;
  var stepsHtml='';var svgPaths='';
  for(var i=0;i<processSteps.length;i++){
    var cx=10+i*20;var cy=50;
    stepsHtml+='<div class="cosmic-step"><div class="cosmic-star"><div class="cosmic-star-glow"></div><div class="cosmic-star-inner">'+(i+1)+'</div></div><div class="cs-title">'+T(processSteps[i].t)+'</div><div class="cs-desc">'+T(processSteps[i].d)+'</div></div>';
    if(i<processSteps.length-1){
      var nx=10+(i+1)*20;
      svgPaths+='<path d="M'+cx+' '+cy+' Q'+(cx+nx)/2+' '+(cy-18)+' '+nx+' '+cy+'" class="'+(i<2?'active':'')+'"/>';
    }
  }
  ct.innerHTML='<svg class="cosmic-svg" viewBox="0 0 100 100" preserveAspectRatio="none">'+svgPaths+'</svg><div class="cosmic-steps">'+stepsHtml+'</div>';
}

/* ===== EARLY BIRD ===== */
function renderEarlyBird(){
  var eg=document.getElementById('earlyGrid');
  if(!eg)return;
  eg.innerHTML=earlyBirdOffers.map(function(e){return '<div class="early-card"><span class="early-icon">'+e.icon+'</span><h4>'+T(e.t)+'</h4><p>'+T(e.d)+'</p><a href="'+e.link+'" class="btn-primary btn-sm">'+T(e.btn)+'</a></div>';}).join('');
}

/* ===== PRICING ===== */
function renderPricing(){
  var prg=document.getElementById('pricingGrid');
  if(!prg)return;
  prg.innerHTML=pricingPlans.map(function(pl){
    var html='<div class="pricing-card'+(pl.featured?' featured':'')+'">';
    if(pl.featured)html+='<span class="popular-badge">'+T({en:'Best for regulars',zh:'\u5e38\u5ba2\u63a8\u8350'})+'</span>';
    html+='<h3>'+T(pl.title)+'</h3><div class="price-amount">'+T(pl.price)+'</div><div class="price-period">'+(pl.period?T(pl.period):'')+'</div>';
    html+='<p class="price-desc">'+T(pl.desc)+'</p>';
    html+='<ul class="price-features">'+(pl.features[lang]||pl.features.en).map(function(f){return '<li>'+f+'</li>';}).join('')+'</ul>';
    if(pl.title.en==='Pay-per-order')html+='<div class="pricing-example">'+T({en:'Example: $10 product + $1.50 fee + $18 shipping = <strong>$29.50 total</strong>',zh:'\u793a\u4f8b\uff1a$10\u4ea7\u54c1 + $1.5\u670d\u52a1\u8d39 + $18\u8fd0\u8d39 = <strong>\u5171$29.50</strong>'})+'</div>';
    html+='<a href="'+pl.link+'" class="btn-primary">'+T(pl.btn)+'</a></div>';
    return html;
  }).join('');
}

/* ===== FAQ ===== */
function renderFAQ(){
  var fl=document.getElementById('faqList');
  if(!fl)return;
  fl.innerHTML=faqItems.map(function(f,i){return '<div class="faq-item"><div class="faq-q" data-idx="'+i+'">'+T(f.q)+'<span class="arrow">\u25be</span></div><div class="faq-a">'+T(f.a)+'</div></div>';}).join('');
  fl.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){var item=q.parentElement,open=item.classList.contains('open');document.querySelectorAll('.faq-item.open').forEach(function(i){i.classList.remove('open');});if(!open)item.classList.add('open');});});
}

/* ===== LEGAL CONTENT ===== */
var legalContent = {
  terms: {
    title: {en:'Terms of Service',zh:'\u670d\u52a1\u6761\u6b3e'},
    body: '<div class="legal-content"><h2>Terms of Service</h2><p>Curiohunt is a personal sourcing service based in Hong Kong. By placing an order, you agree to the following terms.</p><h3>Service Description</h3><p>Curiohunt acts as a personal sourcing agent, not a retailer. We source products from Chinese suppliers on your behalf. We do not hold inventory. Each order is placed specifically for you after your approval.</p><h3>Order Process</h3><ul><li>You inquire about a product via WhatsApp or email</li><li>We provide a quote including product cost, sourcing fee, and shipping</li><li>50% deposit is required to start sourcing</li><li>Once the product arrives in Hong Kong, we film the packing and send you the video</li><li>You approve the video and pay the remaining 50% balance</li><li>We ship the product to your address</li></ul><h3>Pricing</h3><p>All prices are quoted in USD. The sourcing fee is 15% of the product cost for standard orders. Bulk discounts are available for orders of 5 or more items.</p><h3>Shipping</h3><p>We ship from Hong Kong via air (3-7 business days) or sea (15-30 business days). Tracking is provided for all orders. Import duties and taxes are the buyer\'s responsibility.</p><h3>Limitation of Liability</h3><p>Curiohunt is not liable for delays caused by customs, shipping carriers, or supplier production issues. Our maximum liability is limited to the order value paid.</p></div>'
  },
  refund: {
    title: {en:'Refund Policy',zh:'\u9000\u6b3e\u653f\u7b56'},
    body: '<div class="legal-content"><h2>Refund Policy</h2><h3>Before Packing Video Approval</h3><p>You may cancel your order at any time before approving the packing video. The 50% deposit is non-refundable after sourcing has begun, as it covers our sourcing time, supplier costs, and shipping to Hong Kong.</p><h3>After Packing Video Approval</h3><p>Once you approve the packing video and pay the balance, we proceed to ship your order. At this point, cancellations are not accepted. If the product arrives damaged, please contact us within 48 hours with photos for a replacement or refund.</p><h3>Quality Issues</h3><p>If the product does not match the description or has manufacturing defects, we will work with the supplier to arrange a replacement or refund. Shipping costs for returns are not covered.</p><h3>Non-Refundable Items</h3><p>Custom or special-order products sourced specifically for you cannot be refunded once production has started.</p></div>'
  },
  privacy: {
    title: {en:'Privacy Policy',zh:'\u9690\u79c1\u653f\u7b56'},
    body: '<div class="legal-content"><h2>Privacy Policy</h2><p>Your privacy matters. This policy explains how we handle your information.</p><h3>What We Collect</h3><ul><li>Name and contact information (WhatsApp, email, shipping address)</li><li>Order details and product preferences</li><li>Communication history</li></ul><h3>How We Use It</h3><ul><li>To process and fulfill your orders</li><li>To communicate with you about your orders</li><li>To improve our service</li></ul><h3>Data Sharing</h3><p>We do not sell or share your personal information with third parties except as necessary to fulfill orders (e.g., sharing your shipping address with the freight forwarder).</p><h3>Data Storage</h3><p>Your data is stored securely and retained only as long as necessary to provide our service or comply with legal obligations.</p><h3>Contact</h3><p>To request data deletion or access, email hello@curiohunt.com.</p></div>'
  }
};

/* ===== MODAL ===== */
function openModal(id){
  var p=null;for(var i=0;i<products.length;i++){if(products[i].id===id){p=products[i];break;}}
  if(!p)return;
  var overlay=document.getElementById('modalOverlay'),modal=document.getElementById('modal'),body=document.getElementById('modalBody');
  if(!overlay||!modal||!body)return;
  var ci=0;
  function rd(idx){
    idx=Math.max(0,Math.min(idx,p.thumbs.length-1));ci=idx;
    body.innerHTML='<div class="modal-gallery"><div class="modal-gallery-main"><img src="'+p.thumbs[idx]+'" alt="'+T(p.title)+'"></div>'+(p.thumbs.length>1?'<button class="modal-gallery-nav prev" id="mgP">\u2039</button><button class="modal-gallery-nav next" id="mgN">\u203a</button><div class="modal-dots">'+p.thumbs.map(function(_,i){return '<button class="modal-dot'+(i===idx?' active':'')+'" data-idx="'+i+'"></button>';}).join('')+'</div>':'')+'</div>'+
    '<div class="detail-tags">'+p.tags.map(function(t){return '<span class="detail-tag">'+(tagLabels[lang]?.[t]||tagLabels.en[t])+'</span>';}).join('')+'</div>'+
    '<h2 class="detail-title">'+T(p.title)+'</h2><span class="detail-price">'+T(p.price)+'</span>'+
    '<p class="detail-desc">'+T(p.desc)+'</p>'+
    '<div class="spec-title">'+T({en:'Specifications',zh:'\u89c4\u683c'})+'</div>'+
    '<ul class="spec-list">'+p.specs.map(function(s){return '<li><span class="spec-label">'+T(s.l)+'</span><span class="spec-value">'+T(s.v)+'</span></li>';}).join('')+'</ul>'+
    '<div class="detail-cta">'+
    '<a href="https://wa.me/85212345678?text=I%27m%20interested%20in%20'+encodeURIComponent(T(p.title))+'" class="btn-primary" target="_blank">'+T({en:'Inquire on WhatsApp \u2192',zh:'\u54a8\u8be2 \u2192'})+'</a>'+
    '<a href="mailto:hello@curiohunt.com?subject=Inquiry: '+encodeURIComponent(T(p.title))+'" class="btn-outline">'+T({en:'or Email me',zh:'\u6216\u53d1\u90ae\u4ef6'})+'</a></div>';
    if(p.thumbs.length>1){
      var prev=document.getElementById('mgP'),next=document.getElementById('mgN');
      if(prev)prev.onclick=function(e){e.stopPropagation();rd(ci-1);};
      if(next)next.onclick=function(e){e.stopPropagation();rd(ci+1);};
      document.querySelectorAll('.modal-dot').forEach(function(d){d.onclick=function(e){e.stopPropagation();rd(parseInt(d.getAttribute('data-idx')));};});
    }
  }
  rd(0);overlay.classList.add('open');modal.classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){
  var o=document.getElementById('modalOverlay'),m=document.getElementById('modal');
  if(o)o.classList.remove('open');if(m)m.classList.remove('open');document.body.style.overflow='';
}
function openLegal(type){
  var content=legalContent[type];
  if(!content)return;
  var overlay=document.getElementById('modalOverlay'),modal=document.getElementById('modal'),body=document.getElementById('modalBody'),bc=document.getElementById('modalBreadcrumb');
  if(!overlay||!modal||!body)return;
  bc.textContent=T(content.title);
  body.innerHTML=content.body;
  overlay.classList.add('open');modal.classList.add('open');document.body.style.overflow='hidden';
}

/* ===== APPLY TRANSLATIONS ===== */
function applyTranslations(){
  var dict=translations[lang]||translations.en;
  document.querySelectorAll('[data-key]').forEach(function(el){
    var k=el.getAttribute('data-key');
    if(dict[k]!==undefined)el.innerHTML=dict[k];
  });
}

/* ===== SCROLL FADE ===== */
function initScrollFade(){
  if(!window.IntersectionObserver)return;
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
    });
  },{threshold:0.1});
  document.querySelectorAll('.fade-in').forEach(function(el){obs.observe(el);});
}

/* ===== REFRESH UI ===== */
function refreshUI(){
  var navEl=document.getElementById('nav');
  var footerEl=document.getElementById('footer');
  if(navEl){
    var activePage=navEl.getAttribute('data-active')||'index';
    navEl.innerHTML=buildNav(activePage);
  }
  if(footerEl)footerEl.innerHTML=buildFooter();
  applyTranslations();
  attachLangToggle();
  document.documentElement.lang=(lang==='zh'?'zh-HK':'en');
}

/* ===== ATTACH LANG TOGGLE ===== */
function attachLangToggle(){
  var lt=document.getElementById('langToggle');
  if(!lt)return;
  lt.removeEventListener('click',onLangToggle);
  lt.addEventListener('click',onLangToggle);
}
function onLangToggle(){
  lang=(lang==='en'?'zh':'en');
  localStorage.setItem('curiohunt-lang',lang);
  refreshUI();
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded',function(){
  var navEl=document.getElementById('nav');
  if(navEl){
    var activePage=navEl.getAttribute('data-active')||'index';
    navEl.innerHTML=buildNav(activePage);
  }
  var footerEl=document.getElementById('footer');
  if(footerEl)footerEl.innerHTML=buildFooter();
  buildStars();
  applyTranslations();
  initScrollFade();
  attachLangToggle();

  /* Nav scroll shadow */
  var nv=document.getElementById('nav');
  if(nv){
    window.addEventListener('scroll',function(){nv.classList.toggle('scrolled',window.scrollY>60);});
  }

  /* Modal events */
  var mo=document.getElementById('modalOverlay');
  if(mo)mo.addEventListener('click',closeModal);
  var mc=document.getElementById('modalClose');
  if(mc)mc.addEventListener('click',closeModal);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});
});
