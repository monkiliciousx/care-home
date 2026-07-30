'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const iconPaths = {
  home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h5v-6h4v6h5v-9.5"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/>',
  house:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M9 20v-6h6v6"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  store:'<path d="M4 9h16l-1-5H5L4 9Z"/><path d="M5 9v11h14V9M9 20v-6h6v6"/><path d="M4 9a3 3 0 0 0 5 2 3 3 0 0 0 6 0 3 3 0 0 0 5-2"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
  message:'<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>',
  map:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/>',
  school:'<path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12.5V17c3 2 7 2 10 0v-4.5M21 10v6"/>',
  passport:'<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M9 11h6M12 8v6M8 17h8"/>',
  hospital:'<path d="M5 21V5h14v16M3 21h18M9 9h6M12 6v6M8 15h2M14 15h2M8 18h2M14 18h2"/>',
  car:'<path d="m5 17-1 2M19 17l1 2M3 13l2-6h14l2 6v5H3v-5Z"/><circle cx="7" cy="15" r="1"/><circle cx="17" cy="15" r="1"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pin:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  wallet:'<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M17 11h4v5h-4a2.5 2.5 0 0 1 0-5ZM7 6V4h10v2"/>',
  chevron:'<path d="m9 18 6-6-6-6"/>',
  filter:'<path d="M4 5h16M7 12h10M10 19h4"/>',
  edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V3h4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  logout:'<path d="M10 17l5-5-5-5M15 12H3M21 19V5a2 2 0 0 0-2-2h-6"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14"/>'
};

function icon(name, className = '') {
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.home}</svg>`;
}

const NAV_ITEMS = [
  {id:'home', label:'首页', icon:'home'},
  {id:'guides', label:'指南', icon:'compass'},
  {id:'publish', label:'发布', icon:'plus', primary:true},
  {id:'discover', label:'发现', icon:'search'},
  {id:'profile', label:'我的', icon:'user'}
];

const CITY_OPTIONS = [
  {id:'kl',name:'吉隆坡',en:'Kuala Lumpur'},
  {id:'selangor',name:'雪兰莪',en:'Selangor'},
  {id:'penang',name:'槟城',en:'Penang'},
  {id:'johor',name:'新山',en:'Johor Bahru'},
  {id:'melaka',name:'马六甲',en:'Melaka'},
  {id:'sabah',name:'沙巴',en:'Sabah'}
];

const guides = [
  {id:'g1',category:'新手必读',title:'第一次来吉隆坡，先完成这 7 件事',summary:'电话卡、Touch ‘n Go、Grab、现金、开户、租房与紧急联络。',read:'8 分钟',city:'kl',color:'green',content:['购买本地电话卡并确认可接收银行验证码。','注册 Grab、Touch ‘n Go eWallet 和常用地图工具。','准备少量现金，并了解 DuitNow 与本地转账。','租房前确认押金、合约期、维修责任和退租条款。','保存中国驻马来西亚使馆、警察、医院等紧急联络。']},
  {id:'g2',category:'区域选择',title:'Mont Kiara、KLCC、Cheras、Sunway 怎么选？',summary:'从租金、交通、学校、华人生活便利度进行比较。',read:'10 分钟',city:'kl',color:'blue',content:['Mont Kiara 适合家庭、国际学校需求和偏好华人生活圈的用户。','KLCC 适合商务人士，通勤方便但租金较高。','Cheras 生活成本较友好，餐饮选择丰富。','Sunway 适合学生，靠近大学、商场和 BRT。']},
  {id:'g3',category:'租房避坑',title:'马来西亚租房最容易踩的 6 个坑',summary:'假房源、押金、Agent Fee、维修责任与水电欠费。',read:'7 分钟',city:'all',color:'orange',content:['不要在未看房、未验证房东或中介身份前支付订金。','确认两个月押金、半个月水电押金等费用是否写入合约。','签约前拍摄房屋现况视频，并记录损坏位置。','确认水电、网络、管理费和停车位由谁承担。']},
  {id:'g4',category:'银行开户',title:'中国人如何在马来西亚开银行账户？',summary:'常见材料、银行选择、工作签与学生签的差异。',read:'6 分钟',city:'all',color:'green',content:['不同银行与分行要求可能不同，建议先电话确认。','通常需要护照、有效签证、住址证明以及学校或雇主文件。','开户成功后设置 DuitNow、手机银行和交易限额。']},
  {id:'g5',category:'留学教育',title:'国际学校与大学生活快速入门',summary:'选校、住宿、交通、保险与学费缴纳注意事项。',read:'9 分钟',city:'all',color:'blue',content:['先确认学校认证、课程体系、学费构成和退款条款。','住宿地点需要同时评估通勤、治安、餐饮和医疗。','学生保险保障范围应覆盖门诊、住院与紧急援助。']},
  {id:'g6',category:'交通出行',title:'在马来西亚买车、租车还是搭 Grab？',summary:'根据停留时间、预算和通勤距离选择。',read:'5 分钟',city:'all',color:'orange',content:['短期游客通常以 Grab 与公共交通最方便。','长期居住且通勤距离较长，可比较租车与买车成本。','驾驶前应确认驾照、保险、路税与停车费用。']}
];

const rentals = [
  {id:'r1',city:'kl',area:'Mont Kiara',title:'Mont Kiara 2房精装公寓',price:2800,type:'整租',bed:'2 房',size:'980 sqft',tags:['带家具','中文沟通','近国际学校'],verified:true,color:'green',desc:'高楼层采光，步行可到华人超市，适合小家庭或两人合租。',agent:'Lynn 房产顾问',phone:'+60 12-888 2088'},
  {id:'r2',city:'selangor',area:'Sunway',title:'Sunway 学生独立套房',price:1200,type:'单间',bed:'1 房',size:'350 sqft',tags:['学生友好','包网','近 BRT'],verified:true,color:'blue',desc:'适合 Sunway、Monash 学生，步行到便利店与餐厅。',agent:'Jason 学生公寓',phone:'+60 16-312 5678'},
  {id:'r3',city:'kl',area:'KLCC',title:'KLCC 城景 Studio',price:3500,type:'整租',bed:'Studio',size:'560 sqft',tags:['近 MRT','健身房','商务区'],verified:false,color:'gold',desc:'适合商务人士，步行至办公室区和大型商场。',agent:'CityHome',phone:'+60 11-2211 8899'},
  {id:'r4',city:'kl',area:'Cheras',title:'Cheras MRT 旁 3房公寓',price:2300,type:'整租',bed:'3 房',size:'1100 sqft',tags:['近 MRT','家庭友好','有停车位'],verified:true,color:'violet',desc:'生活便利、餐饮丰富，适合家庭长期居住。',agent:'MY Home',phone:'+60 12-726 8890'},
  {id:'r5',city:'penang',area:'George Town',title:'槟城海景 2房单位',price:2600,type:'整租',bed:'2 房',size:'900 sqft',tags:['海景','带家具','近商场'],verified:true,color:'blue',desc:'靠近市中心和医院，适合长期居住。',agent:'Penang Living',phone:'+60 17-330 7812'},
  {id:'r6',city:'johor',area:'Danga Bay',title:'新山 Danga Bay 1房公寓',price:1800,type:'整租',bed:'1 房',size:'650 sqft',tags:['近新加坡关口','泳池','海景'],verified:false,color:'green',desc:'适合经常往返新加坡的上班族。',agent:'JB Property Hub',phone:'+60 13-700 1133'}
];

const jobs = [
  {id:'j1',city:'kl',company:'Nova Commerce',logo:'NC',title:'中文客服专员',salary:'RM 4,500–5,800',type:'全职',mode:'办公室',visa:'可协助工作签',tags:['中文','英文','客服'],desc:'负责中国客户咨询、订单跟进和售后支持。',color:'green'},
  {id:'j2',city:'selangor',company:'Mango Digital',logo:'MD',title:'小红书内容运营',salary:'RM 5,000–7,000',type:'全职',mode:'Hybrid',visa:'视经验评估',tags:['小红书','短视频','文案'],desc:'策划面向中国市场的社交媒体内容及达人合作。',color:'orange'},
  {id:'j3',city:'kl',company:'EduLink Malaysia',logo:'EL',title:'留学顾问（中国市场）',salary:'RM 6,000 + 佣金',type:'全职',mode:'办公室',visa:'可协助工作签',tags:['教育','销售','中文'],desc:'负责中国学生咨询、学校匹配与申请跟进。',color:'blue'},
  {id:'j4',city:'penang',company:'Penang Tech',logo:'PT',title:'跨境电商运营',salary:'RM 4,800–6,500',type:'全职',mode:'Hybrid',visa:'需有效签证',tags:['Shopee','Lazada','数据'],desc:'管理店铺、活动、产品上架与销售数据。',color:'green'},
  {id:'j5',city:'johor',company:'JB Hospitality',logo:'JH',title:'中文客户关系专员',salary:'RM 3,800–4,800',type:'全职',mode:'轮班',visa:'需有效签证',tags:['酒店','中文','服务'],desc:'接待中国旅客并协助处理住客需求。',color:'orange'}
];

const merchants = [
  {id:'m1',category:'签证移民',name:'马来通签证顾问',logo:'签',rating:'4.9',reviews:128,verified:true,city:'kl',tags:['学生签','工作签','MM2H'],desc:'提供中文咨询，公开收费说明与办理进度。',phone:'+60 12-900 1108'},
  {id:'m2',category:'律师会计',name:'Tan & Lee 中文律师楼',logo:'法',rating:'4.8',reviews:76,verified:true,city:'kl',tags:['租约审核','公司注册','法律咨询'],desc:'马来西亚执业律师，提供普通话服务。',phone:'+60 3-2201 8898'},
  {id:'m3',category:'搬家清洁',name:'安心搬家服务',logo:'搬',rating:'4.7',reviews:203,verified:true,city:'selangor',tags:['搬家','打包','清洁'],desc:'覆盖巴生谷，支持 WhatsApp 中文报价。',phone:'+60 18-330 5662'},
  {id:'m4',category:'医疗健康',name:'Harmony 中文诊所',logo:'医',rating:'4.9',reviews:95,verified:true,city:'kl',tags:['全科','体检','疫苗'],desc:'普通话医生与预约服务，靠近市中心。',phone:'+60 3-7788 2299'},
  {id:'m5',category:'教育留学',name:'MY 国际教育中心',logo:'学',rating:'4.6',reviews:62,verified:false,city:'selangor',tags:['国际学校','大学申请','语言班'],desc:'学校咨询、申请协助与入学准备。',phone:'+60 17-620 5518'},
  {id:'m6',category:'汽车服务',name:'大马中文车行',logo:'车',rating:'4.8',reviews:111,verified:true,city:'johor',tags:['买车','二手车','保险'],desc:'中文看车、贷款说明和车辆检查。',phone:'+60 12-810 1887'}
];

const notices = [
  {id:'n1',icon:'shield',title:'反诈骗提醒',text:'近期出现冒充房东要求先付订金的情况，请先核实身份与房源。',time:'10 分钟前'},
  {id:'n2',icon:'briefcase',title:'新职位推荐',text:'根据你的偏好，为你推荐 3 个中文运营与客服岗位。',time:'2 小时前'},
  {id:'n3',icon:'house',title:'收藏房源降价',text:'你收藏的 Mont Kiara 房源更新了租金和看房时间。',time:'昨天'}
];

const storage = {
  get(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
};

const state = {
  view:'home',
  city:storage.get('todayMyCity','kl'),
  favourites:new Set(storage.get('todayMyFavourites',[])),
  submissions:storage.get('todayMySubmissions',[]),
  searchType:'all',
  rentCity:'all',
  rentType:'all',
  jobCity:'all',
  merchantCategory:'all',
  publishType:'rental'
};

const viewContainer = $('#viewContainer');
const bottomNav = $('#bottomNav');
const desktopNav = $('#desktopNav');
const currentCityLabel = $('#currentCityLabel');
const toastEl = $('#toast');
let toastTimer;

function showToast(message){
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2400);
}

function cityName(id){ return CITY_OPTIONS.find(c => c.id === id)?.name || '吉隆坡'; }
function escapeHtml(value=''){ return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function money(value){ return `RM ${Number(value).toLocaleString('en-MY')}`; }
function persist(){ storage.set('todayMyCity',state.city); storage.set('todayMyFavourites',[...state.favourites]); storage.set('todayMySubmissions',state.submissions); }

function renderNav(){
  desktopNav.innerHTML = NAV_ITEMS.filter(i => !i.primary).map(item => `<button data-view="${item.id}" class="${state.view===item.id?'active':''}">${icon(item.icon)}<span>${item.label}</span></button>`).join('') + `<button data-view="publish" class="${state.view==='publish'?'active':''}">${icon('plus')}<span>发布信息</span></button>`;
  bottomNav.innerHTML = NAV_ITEMS.map(item => `<button data-view="${item.id}" class="${state.view===item.id?'active':''} ${item.primary?'publish-nav':''}">${icon(item.icon)}<span>${item.label}</span></button>`).join('');
  currentCityLabel.textContent = cityName(state.city);
}

function setView(view, options={}){
  state.view = view;
  renderNav();
  renderView(options);
  window.scrollTo({top:0,behavior:options.instant?'auto':'smooth'});
}

function renderView(options={}){
  const renderers = {home:renderHome,guides:renderGuides,discover:renderDiscover,publish:renderPublish,profile:renderProfile,rentals:renderRentals,jobs:renderJobs,merchants:renderMerchants,notifications:renderNotifications};
  (renderers[state.view] || renderHome)(options);
}

function renderHome(){
  const cityRentals = rentals.filter(r => r.city === state.city).slice(0,3);
  const rentalPicks = cityRentals.length ? cityRentals : rentals.slice(0,3);
  const cityJobs = jobs.filter(j => j.city === state.city).slice(0,3);
  viewContainer.innerHTML = `<section class="view home-view">
    <div class="home-greeting"><div><small>你好，欢迎回来 👋</small><h1>今天想了解什么？</h1></div><div class="weather-chip"><b>☀</b>${cityName(state.city)} · 32°C</div></div>
    <article class="hero-card">
      <span class="eyebrow">新手必读 · 2026 更新</span>
      <h2>第一次来马来西亚，从这里开始。</h2>
      <p>签证、电话卡、银行开户、交通、租房与安全提醒，一次了解。</p>
      <button data-action="open-guide" data-id="g1">打开来马清单</button>
      <div class="hero-illustration" aria-hidden="true"><span class="sun-dot"></span><div class="skyline"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
    </article>
    <form class="search-bar" data-action="home-search">${icon('search')}<input name="query" placeholder="搜索租房、签证、学校、招聘…" autocomplete="off"/><button>搜索</button></form>
    <section class="section-block">
      <div class="section-title"><div><h2>常用服务</h2><p>来马生活最常用的功能入口</p></div></div>
      <div class="category-grid">
        ${[
          ['guides','compass','来马指南','落地必读'],['rentals','house','找房租房','认证房源'],['jobs','briefcase','求职招聘','中文岗位'],['merchants','store','商家黄页','本地服务'],['guides','school','留学教育','学校申请'],['merchants','hospital','医疗健康','中文诊所']
        ].map(([view,ic,title,sub])=>`<button class="category-card" data-view="${view}"><span class="category-icon">${icon(ic)}</span><strong>${title}</strong><small>${sub}</small></button>`).join('')}
      </div>
    </section>
    <section class="section-block">
      <div class="section-title"><div><h2>来马必读</h2><p>用户最常搜索的生活问题</p></div><button data-view="guides">全部指南</button></div>
      <div class="h-scroll">${guides.slice(0,4).map(guideCard).join('')}</div>
    </section>
    <section class="section-block">
      <div class="section-title"><div><h2>${cityName(state.city)}精选房源</h2><p>审核后展示，支持中文联系</p></div><button data-view="rentals">查看更多</button></div>
      <div class="card-grid">${rentalPicks.map(rentalCard).join('')}</div>
    </section>
    <section class="section-block">
      <div class="section-title"><div><h2>热门中文岗位</h2><p>工作签条件由招聘方自行说明</p></div><button data-view="jobs">全部职位</button></div>
      <div class="card-grid">${(cityJobs.length?cityJobs:jobs.slice(0,3)).map(jobCard).join('')}</div>
    </section>
    <section class="section-block">
      <div class="section-title"><div><h2>认证商家</h2><p>优先展示已完成基础资料核验的商家</p></div><button data-view="merchants">商家黄页</button></div>
      <div class="card-grid">${merchants.slice(0,3).map(merchantCard).join('')}</div>
    </section>
  </section>`;
}

function guideCard(g){
  return `<article class="guide-card" data-action="open-guide" data-id="${g.id}"><span class="tag">${g.category}</span><h3>${g.title}</h3><p>${g.summary}</p><span class="guide-shape"></span></article>`;
}
function rentalCard(r){
  const saved = state.favourites.has(r.id);
  return `<article class="listing-card" data-id="${r.id}">
    <div class="listing-cover cover-${r.color}"><span class="label">${r.area}</span><button class="save-button ${saved?'saved':''}" data-action="save" data-id="${r.id}" aria-label="收藏">${icon('heart')}</button></div>
    <div class="listing-body"><div class="listing-price">${money(r.price)}<small>/月</small></div><h3>${r.title}</h3><div class="listing-meta"><span>${r.type}</span><span>·</span><span>${r.bed}</span><span>·</span><span>${r.size}</span></div><p>${r.desc}</p><div class="card-foot"><span class="verified">${r.verified?icon('shield'):'◎'}${r.verified?'已核验':'个人发布'}</span><button class="small-action" data-action="open-rental" data-id="${r.id}">查看详情</button></div></div>
  </article>`;
}
function jobCard(j){
  return `<article class="job-card"><div class="job-top"><div class="company-logo ${j.color}">${j.logo}</div><span class="job-salary">${j.salary}</span></div><h3>${j.title}</h3><p>${j.company} · ${cityName(j.city)}</p><div class="job-chip-row">${j.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="card-foot"><span class="verified">${icon('briefcase')}${j.type} · ${j.mode}</span><button class="small-action" data-action="open-job" data-id="${j.id}">职位详情</button></div></article>`;
}
function merchantCard(m){
  return `<article class="merchant-card"><div class="merchant-top"><div class="merchant-logo">${m.logo}</div><span class="rating">★ ${m.rating}</span></div><h3>${m.name}</h3><p>${m.category} · ${cityName(m.city)} · ${m.reviews} 条评价</p><div class="merchant-tags">${m.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="card-foot"><span class="verified">${m.verified?icon('shield'):'◎'}${m.verified?'认证商家':'资料待核验'}</span><button class="small-action" data-action="open-merchant" data-id="${m.id}">查看商家</button></div></article>`;
}

function renderGuides(){
  viewContainer.innerHTML = `<section class="view"><div class="page-head"><div><h1>来马生活指南</h1><p>从准备入境到长期生活，把复杂信息整理成可执行步骤。</p></div><button class="head-action" data-action="guide-topic">选择主题</button></div>
    <div class="filter-bar" id="guideFilters">${['全部','新手必读','租房避坑','银行开户','留学教育','交通出行'].map((x,i)=>`<button class="filter-chip ${i===0?'active':''}" data-guide-filter="${x}">${x}</button>`).join('')}</div>
    <div class="card-grid" id="guideGrid">${guides.map(g=>`<article class="content-card" data-category="${g.category}"><span class="tag">${g.category}</span><h3>${g.title}</h3><p>${g.summary}</p><div class="content-meta"><span>${icon('clock')}</span><span>${g.read}</span><span>·</span><span>${g.city==='all'?'全马适用':cityName(g.city)}</span></div><div class="card-foot"><span></span><button class="small-action" data-action="open-guide" data-id="${g.id}">阅读全文</button></div></article>`).join('')}</div></section>`;
}

function renderRentals(){
  const filtered = rentals.filter(r => (state.rentCity==='all'||r.city===state.rentCity) && (state.rentType==='all'||r.type===state.rentType));
  viewContainer.innerHTML = `<section class="view"><div class="page-head"><div><h1>找房租房</h1><p>按城市、房型和预算筛选。平台仅提供信息展示与联系入口。</p></div><button class="head-action" data-view="publish" data-publish-type="rental">发布房源</button></div>
    <form class="search-page-box" data-action="rent-search">${icon('search')}<input name="query" placeholder="搜索地区、楼盘或房源特点"/><button>搜索</button></form>
    <div class="filter-bar" style="margin-top:18px"><button class="filter-chip ${state.rentCity==='all'?'active':''}" data-rent-city="all">全部城市</button>${CITY_OPTIONS.slice(0,4).map(c=>`<button class="filter-chip ${state.rentCity===c.id?'active':''}" data-rent-city="${c.id}">${c.name}</button>`).join('')}<select class="select-control" id="rentTypeSelect"><option value="all">全部房型</option><option ${state.rentType==='整租'?'selected':''}>整租</option><option ${state.rentType==='单间'?'selected':''}>单间</option></select></div>
    <div class="results-summary"><span>找到 <strong>${filtered.length}</strong> 个房源</span><span>默认按推荐排序</span></div>
    <div class="card-grid" id="rentalGrid">${filtered.length?filtered.map(rentalCard).join(''):emptyState()}</div></section>`;
}

function renderJobs(){
  const filtered = jobs.filter(j=>state.jobCity==='all'||j.city===state.jobCity);
  viewContainer.innerHTML = `<section class="view"><div class="page-head"><div><h1>中文招聘</h1><p>聚合面向中国人或需要中文能力的马来西亚岗位。</p></div><button class="head-action" data-view="publish" data-publish-type="job">发布职位</button></div>
    <form class="search-page-box" data-action="job-search">${icon('search')}<input name="query" placeholder="搜索岗位、公司或技能"/><button>搜索</button></form>
    <div class="filter-bar" style="margin-top:18px"><button class="filter-chip ${state.jobCity==='all'?'active':''}" data-job-city="all">全部地区</button>${CITY_OPTIONS.slice(0,4).map(c=>`<button class="filter-chip ${state.jobCity===c.id?'active':''}" data-job-city="${c.id}">${c.name}</button>`).join('')}</div>
    <div class="results-summary"><span>共 <strong>${filtered.length}</strong> 个职位</span><span>请自行核实工作签与雇佣条件</span></div>
    <div class="card-grid">${filtered.length?filtered.map(jobCard).join(''):emptyState()}</div></section>`;
}

function renderMerchants(){
  const cats = ['全部',...new Set(merchants.map(m=>m.category))];
  const filtered = merchants.filter(m=>state.merchantCategory==='all'||m.category===state.merchantCategory);
  viewContainer.innerHTML = `<section class="view"><div class="page-head"><div><h1>本地商家黄页</h1><p>签证、律师、教育、医疗、搬家与汽车等中文服务。</p></div><button class="head-action" data-view="publish" data-publish-type="merchant">商家入驻</button></div>
    <div class="filter-bar">${cats.map((c,i)=>`<button class="filter-chip ${(i===0&&state.merchantCategory==='all')||state.merchantCategory===c?'active':''}" data-merchant-category="${i===0?'all':c}">${c}</button>`).join('')}</div>
    <div class="card-grid">${filtered.length?filtered.map(merchantCard).join(''):emptyState()}</div></section>`;
}

function renderDiscover(options={}){
  const query = options.query || '';
  const allItems = [
    ...guides.map(x=>({...x,type:'指南',view:'guide'})),
    ...rentals.map(x=>({...x,type:'租房',view:'rental',summary:`${x.area} · ${money(x.price)}/月`})),
    ...jobs.map(x=>({...x,type:'招聘',view:'job',summary:`${x.company} · ${x.salary}`})),
    ...merchants.map(x=>({...x,title:x.name,type:'商家',view:'merchant',summary:`${x.category} · ${cityName(x.city)}`}))
  ];
  const q = query.toLowerCase();
  const filtered = allItems.filter(item=>state.searchType==='all'||item.type===state.searchType).filter(item=>!q||JSON.stringify(item).toLowerCase().includes(q));
  viewContainer.innerHTML = `<section class="view"><div class="page-head"><div><h1>搜索与发现</h1><p>一次搜索指南、房源、职位和认证商家。</p></div></div>
    <form class="search-page-box" data-action="discover-search">${icon('search')}<input name="query" value="${escapeHtml(query)}" placeholder="输入关键词，例如：Mont Kiara、学生签"/><button>搜索</button></form>
    <div class="search-tabs">${['all','指南','租房','招聘','商家'].map((t,i)=>`<button data-search-type="${t}" class="${state.searchType===t?'active':''}">${i===0?'全部':t}</button>`).join('')}</div>
    <div class="results-summary"><span>搜索结果 <strong>${filtered.length}</strong> 条</span><span>${query?`关键词：${escapeHtml(query)}`:'热门内容推荐'}</span></div>
    <div class="search-results">${filtered.length?filtered.map(searchResult).join(''):emptyState()}</div></section>`;
}
function searchResult(item){
  const iconName = item.type==='指南'?'compass':item.type==='租房'?'house':item.type==='招聘'?'briefcase':'store';
  const action = item.view==='guide'?'open-guide':item.view==='rental'?'open-rental':item.view==='job'?'open-job':'open-merchant';
  return `<button class="search-result" data-action="${action}" data-id="${item.id}"><span class="search-result-icon">${icon(iconName)}</span><div><strong>${item.title}</strong><small>${item.summary||item.desc||''}</small></div><span class="type">${item.type}</span></button>`;
}

function renderPublish(options={}){
  if(options.publishType) state.publishType = options.publishType;
  const labels = {rental:['发布房源','房源'],job:['发布职位','职位'],merchant:['商家入驻','商家']};
  viewContainer.innerHTML = `<section class="view"><div class="page-head"><div><h1>发布信息</h1><p>提交后进入后台审核，审核通过才会公开展示。</p></div></div>
    <div class="publish-type-grid">
      ${[['rental','house','房源出租','房屋、房间与短租'],['job','briefcase','招聘职位','全职、兼职与实习'],['merchant','store','商家入驻','展示本地中文服务']].map(([id,ic,t,s])=>`<button class="publish-type ${state.publishType===id?'active':''}" data-publish-type="${id}"><span>${icon(ic)}</span><strong>${t}</strong><small>${s}</small></button>`).join('')}
    </div>
    <form class="form-card" id="publishForm">
      <div class="form-grid">${publishFields(state.publishType)}</div>
      <button class="form-submit">提交审核</button><p class="form-note">Demo 会把提交内容保存在当前浏览器，可在“我的发布”查看。</p>
    </form></section>`;
}
function publishFields(type){
  const common = `<div class="form-field"><label>标题 *</label><input required name="title" placeholder="请输入清楚的标题"/></div><div class="form-field"><label>城市 *</label><select required name="city">${CITY_OPTIONS.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select></div>`;
  if(type==='rental') return common + `<div class="form-field"><label>月租（RM）*</label><input required type="number" name="price" min="1" placeholder="例如 2800"/></div><div class="form-field"><label>房型</label><select name="category"><option>整租</option><option>单间</option><option>短租</option></select></div><div class="form-field full"><label>房源描述 *</label><textarea required name="description" placeholder="区域、家具、交通、入住条件等"></textarea></div><div class="form-field"><label>联系电话 *</label><input required name="contact" placeholder="WhatsApp / 电话"/></div><div class="form-field"><label>微信号</label><input name="wechat" placeholder="选填"/></div>`;
  if(type==='job') return common + `<div class="form-field"><label>公司名称 *</label><input required name="company"/></div><div class="form-field"><label>薪资范围 *</label><input required name="salary" placeholder="例如 RM 4,500–6,000"/></div><div class="form-field"><label>工作类型</label><select name="category"><option>全职</option><option>兼职</option><option>实习</option></select></div><div class="form-field"><label>工作签说明</label><select name="visa"><option>可协助工作签</option><option>需已有合法签证</option><option>面谈确认</option></select></div><div class="form-field full"><label>职位描述 *</label><textarea required name="description" placeholder="职责、要求、福利与工作时间"></textarea></div><div class="form-field full"><label>申请方式 *</label><input required name="contact" placeholder="邮箱 / WhatsApp"/></div>`;
  return common + `<div class="form-field"><label>商家类别 *</label><select name="category"><option>签证移民</option><option>律师会计</option><option>教育留学</option><option>医疗健康</option><option>搬家清洁</option><option>汽车服务</option></select></div><div class="form-field"><label>公司注册号</label><input name="registration" placeholder="用于认证审核"/></div><div class="form-field full"><label>服务介绍 *</label><textarea required name="description" placeholder="主要服务、覆盖区域、营业时间"></textarea></div><div class="form-field"><label>联系电话 *</label><input required name="contact"/></div><div class="form-field"><label>网站或社交账号</label><input name="website" placeholder="选填"/></div>`;
}

function renderProfile(){
  const savedItems = rentals.filter(r=>state.favourites.has(r.id));
  viewContainer.innerHTML = `<section class="view"><div class="profile-card"><div class="profile-big-avatar">安</div><div><h2>安先生</h2><p>在马生活探索者 · ${cityName(state.city)}</p></div><button data-action="edit-profile">编辑资料</button></div>
    <div class="stats-grid"><div><strong>${savedItems.length}</strong><span>收藏房源</span></div><div><strong>${state.submissions.length}</strong><span>我的发布</span></div><div><strong>3</strong><span>咨询记录</span></div></div>
    <div class="menu-list">
      <button class="menu-item" data-action="profile-saved"><span class="menu-icon">${icon('heart')}</span><div><strong>我的收藏</strong><small>${savedItems.length?`已收藏 ${savedItems.length} 个房源`:'还没有收藏内容'}</small></div><span class="arrow">›</span></button>
      <button class="menu-item" data-action="profile-submissions"><span class="menu-icon">${icon('edit')}</span><div><strong>我的发布</strong><small>${state.submissions.length?`${state.submissions.length} 条正在审核或已发布`:'尚未发布信息'}</small></div><span class="arrow">›</span></button>
      <button class="menu-item" data-action="notifications"><span class="menu-icon">${icon('bell')}</span><div><strong>消息与通知</strong><small>房源、职位和审核进度提醒</small></div><span class="arrow">›</span></button>
      <button class="menu-item" data-action="settings"><span class="menu-icon">${icon('settings')}</span><div><strong>账号与设置</strong><small>城市、语言、隐私与通知</small></div><span class="arrow">›</span></button>
    </div></section>`;
}

function renderNotifications(){
  viewContainer.innerHTML = `<section class="view"><div class="page-head"><div><h1>消息通知</h1><p>重要更新、收藏动态和平台安全提醒。</p></div><button class="head-action" data-action="mark-read">全部已读</button></div><div class="notice-list">${notices.map(n=>`<article class="notice-item"><span class="notice-icon">${icon(n.icon)}</span><div><strong>${n.title}</strong><p>${n.text}</p><time>${n.time}</time></div></article>`).join('')}</div></section>`;
}

function emptyState(){ return $('#emptyStateTemplate').innerHTML; }

function openSheet(html){
  $('#sheetContent').innerHTML = html;
  $('#sheetOverlay').hidden = false;
  $('#bottomSheet').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeSheet(){
  $('#sheetOverlay').hidden = true;
  $('#bottomSheet').hidden = true;
  document.body.style.overflow = '';
}
function openModal(html){
  $('#modalContent').innerHTML = html;
  $('#modalOverlay').hidden = false;
  $('#detailModal').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  $('#modalOverlay').hidden = true;
  $('#detailModal').hidden = true;
  document.body.style.overflow = '';
}

function showCitySheet(){
  openSheet(`<div class="sheet-title"><h3>选择城市</h3><button class="small-action" data-action="close-sheet">关闭</button></div><div class="city-options">${CITY_OPTIONS.map(c=>`<button class="city-option ${state.city===c.id?'active':''}" data-city="${c.id}"><strong>${c.name}</strong><small>${c.en}</small></button>`).join('')}</div>`);
}
function openGuide(id){
  const g = guides.find(x=>x.id===id); if(!g) return;
  openModal(`<div class="modal-hero ${g.color==='blue'?'blue':g.color==='orange'?'orange':''}"><div><span class="tag">${g.category}</span><h2>${g.title}</h2></div></div><div class="modal-body"><p class="lead">${g.summary}</p><div class="detail-grid"><div><small>阅读时间</small><strong>${g.read}</strong></div><div><small>适用地区</small><strong>${g.city==='all'?'全马适用':cityName(g.city)}</strong></div></div><div class="detail-section"><h3>重点内容</h3><ol>${g.content.map(x=>`<li>${x}</li>`).join('')}</ol></div><div class="detail-section"><h3>平台提示</h3><p>政策与机构要求可能随时调整，涉及签证、法律、医疗与金融事项时，应以官方部门或持牌专业人士的最新说明为准。</p></div><div class="modal-actions"><button class="secondary" data-action="share">分享指南</button><button class="primary" data-action="guide-help">找相关服务</button></div></div>`);
}
function openRental(id){
  const r = rentals.find(x=>x.id===id); if(!r) return;
  const saved = state.favourites.has(r.id);
  openModal(`<div class="modal-hero ${r.color==='blue'?'blue':r.color==='gold'?'orange':''}"><div><span class="tag">${r.area}</span><h2>${r.title}</h2></div></div><div class="modal-body"><div class="listing-price">${money(r.price)}<small>/月</small></div><p class="lead">${r.desc}</p><div class="detail-grid"><div><small>房型</small><strong>${r.type} · ${r.bed}</strong></div><div><small>面积</small><strong>${r.size}</strong></div><div><small>发布者</small><strong>${r.agent}</strong></div><div><small>资料状态</small><strong>${r.verified?'基础资料已核验':'个人发布'}</strong></div></div><div class="detail-section"><h3>房源特点</h3><div class="merchant-tags">${r.tags.map(t=>`<span>${t}</span>`).join('')}</div></div><div class="detail-section"><h3>看房前确认</h3><p>确认房东或中介身份、押金、租约、维修责任、水电欠费与退租条件。不要在未核验前向私人账户支付订金。</p></div><div class="modal-actions"><button class="secondary" data-action="save" data-id="${r.id}">${saved?'取消收藏':'收藏房源'}</button><button class="primary" data-action="contact" data-contact="${r.phone}">WhatsApp 联系</button></div></div>`);
}
function openJob(id){
  const j = jobs.find(x=>x.id===id); if(!j) return;
  openModal(`<div class="modal-hero blue"><div><span class="tag">${j.company}</span><h2>${j.title}</h2></div></div><div class="modal-body"><div class="listing-price">${j.salary}</div><p class="lead">${j.desc}</p><div class="detail-grid"><div><small>工作地点</small><strong>${cityName(j.city)}</strong></div><div><small>工作形式</small><strong>${j.type} · ${j.mode}</strong></div><div><small>工作签</small><strong>${j.visa}</strong></div><div><small>语言要求</small><strong>${j.tags.join(' / ')}</strong></div></div><div class="detail-section"><h3>职位说明</h3><ul><li>负责与中国客户进行中文沟通与服务。</li><li>根据岗位要求完成日常运营、销售或客户支持工作。</li><li>具体雇佣条件、福利与签证安排以正式 Offer 为准。</li></ul></div><div class="modal-actions"><button class="secondary" data-action="share">分享职位</button><button class="primary" data-action="apply-job">立即申请</button></div></div>`);
}
function openMerchant(id){
  const m = merchants.find(x=>x.id===id); if(!m) return;
  openModal(`<div class="modal-hero orange"><div><span class="tag">${m.category}</span><h2>${m.name}</h2></div></div><div class="modal-body"><p class="lead">${m.desc}</p><div class="detail-grid"><div><small>服务城市</small><strong>${cityName(m.city)}</strong></div><div><small>用户评分</small><strong>★ ${m.rating} · ${m.reviews} 条</strong></div><div><small>认证状态</small><strong>${m.verified?'认证商家':'资料待核验'}</strong></div><div><small>联系语言</small><strong>中文 / English</strong></div></div><div class="detail-section"><h3>主要服务</h3><div class="merchant-tags">${m.tags.map(t=>`<span>${t}</span>`).join('')}</div></div><div class="detail-section"><h3>平台说明</h3><p>认证代表平台完成基础资料核验，不代表对服务结果作出保证。用户应在付款前确认报价、合同和退款条款。</p></div><div class="modal-actions"><button class="secondary" data-action="share">分享商家</button><button class="primary" data-action="contact" data-contact="${m.phone}">联系商家</button></div></div>`);
}

function showSavedSheet(){
  const saved = rentals.filter(r=>state.favourites.has(r.id));
  openSheet(`<div class="sheet-title"><h3>我的收藏</h3><button class="small-action" data-action="close-sheet">关闭</button></div>${saved.length?`<div class="search-results">${saved.map(r=>`<button class="search-result" data-action="open-rental" data-id="${r.id}"><span class="search-result-icon">${icon('house')}</span><div><strong>${r.title}</strong><small>${r.area} · ${money(r.price)}/月</small></div><span class="type">租房</span></button>`).join('')}</div>`:emptyState()}`);
}
function showSubmissionsSheet(){
  openSheet(`<div class="sheet-title"><h3>我的发布</h3><button class="small-action" data-action="close-sheet">关闭</button></div>${state.submissions.length?`<div class="notice-list">${state.submissions.map((s,i)=>`<article class="notice-item"><span class="notice-icon">${icon(s.type==='rental'?'house':s.type==='job'?'briefcase':'store')}</span><div><strong>${escapeHtml(s.title)}</strong><p>${escapeHtml(s.cityName)} · 审核中</p><time>${escapeHtml(s.createdAt)}</time></div><button class="small-action" data-action="delete-submission" data-index="${i}">${icon('trash')}</button></article>`).join('')}</div>`:emptyState()}`);
}

function handleFormSubmit(form){
  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());
  state.submissions.unshift({type:state.publishType,...data,cityName:cityName(data.city),createdAt:new Date().toLocaleString('zh-CN',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})});
  persist();
  showToast('提交成功，已进入后台审核');
  setView('profile');
}

function filterCards(selector, query){
  const q = query.trim().toLowerCase();
  $$(selector).forEach(card=>{ card.style.display = !q || card.textContent.toLowerCase().includes(q) ? '' : 'none'; });
}

function handleClick(event){
  const target = event.target.closest('[data-view],[data-action],[data-city],[data-rent-city],[data-job-city],[data-merchant-category],[data-guide-filter],[data-search-type],[data-publish-type]');
  if(!target) return;
  if(target.dataset.view){
    const opts = target.dataset.publishType ? {publishType:target.dataset.publishType} : {};
    setView(target.dataset.view,opts); return;
  }
  if(target.dataset.city){ state.city=target.dataset.city; persist(); closeSheet(); renderNav(); renderView(); showToast(`已切换到${cityName(state.city)}`); return; }
  if(target.dataset.rentCity!==undefined){ state.rentCity=target.dataset.rentCity; renderRentals(); return; }
  if(target.dataset.jobCity!==undefined){ state.jobCity=target.dataset.jobCity; renderJobs(); return; }
  if(target.dataset.merchantCategory!==undefined){ state.merchantCategory=target.dataset.merchantCategory; renderMerchants(); return; }
  if(target.dataset.guideFilter){
    $$('#guideFilters button').forEach(b=>b.classList.toggle('active',b===target));
    const f=target.dataset.guideFilter; $$('#guideGrid article').forEach(card=>card.style.display=f==='全部'||card.dataset.category===f?'':'none'); return;
  }
  if(target.dataset.searchType!==undefined){ state.searchType=target.dataset.searchType; const q=$('.search-page-box input')?.value||''; renderDiscover({query:q}); return; }
  if(target.dataset.publishType){ state.publishType=target.dataset.publishType; renderPublish(); return; }
  const action = target.dataset.action;
  if(action==='location') showCitySheet();
  else if(action==='notifications') setView('notifications');
  else if(action==='close-sheet') closeSheet();
  else if(action==='close-modal') closeModal();
  else if(action==='open-guide'||action==='open-guide-starter') openGuide(target.dataset.id||'g1');
  else if(action==='open-rental') { closeSheet(); openRental(target.dataset.id); }
  else if(action==='open-job') openJob(target.dataset.id);
  else if(action==='open-merchant') openMerchant(target.dataset.id);
  else if(action==='save'){
    const id=target.dataset.id; state.favourites.has(id)?state.favourites.delete(id):state.favourites.add(id); persist(); showToast(state.favourites.has(id)?'已收藏':'已取消收藏'); if(!$('#detailModal').hidden) openRental(id); else renderView();
  }
  else if(action==='contact'){ showToast(`Demo：将打开 WhatsApp 联系 ${target.dataset.contact||''}`); }
  else if(action==='apply-job') showToast('Demo：申请资料已发送给招聘方');
  else if(action==='share') showToast('分享链接已复制');
  else if(action==='guide-help'){ closeModal(); setView('merchants'); }
  else if(action==='profile-saved') showSavedSheet();
  else if(action==='profile-submissions') showSubmissionsSheet();
  else if(action==='delete-submission'){ state.submissions.splice(Number(target.dataset.index),1); persist(); closeSheet(); showSubmissionsSheet(); renderView(); }
  else if(action==='edit-profile'||action==='settings') showToast('Demo：此处将打开账号设置');
  else if(action==='mark-read'){ $('#notificationDot').hidden=true; showToast('全部消息已标记为已读'); }
  else if(action==='guide-topic') showToast('可按签证、租房、教育、交通等主题筛选');
}

function handleSubmit(event){
  const form = event.target;
  if(form.matches('[data-action="home-search"]')){ event.preventDefault(); const q=new FormData(form).get('query')||''; state.searchType='all'; setView('discover',{query:q}); }
  else if(form.matches('[data-action="discover-search"]')){ event.preventDefault(); const q=new FormData(form).get('query')||''; renderDiscover({query:q}); }
  else if(form.matches('[data-action="rent-search"]')){ event.preventDefault(); filterCards('#rentalGrid .listing-card',new FormData(form).get('query')||''); }
  else if(form.matches('[data-action="job-search"]')){ event.preventDefault(); filterCards('.card-grid .job-card',new FormData(form).get('query')||''); }
  else if(form.id==='publishForm'){ event.preventDefault(); handleFormSubmit(form); }
}

document.addEventListener('click',handleClick);
document.addEventListener('submit',handleSubmit);
document.addEventListener('change',event=>{ if(event.target.id==='rentTypeSelect'){ state.rentType=event.target.value; renderRentals(); } });
$('#sheetOverlay').addEventListener('click',closeSheet);
$('#modalOverlay').addEventListener('click',closeModal);
document.addEventListener('keydown',event=>{ if(event.key==='Escape'){ closeModal(); closeSheet(); } });

if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{})); }

renderNav();
renderView({instant:true});
