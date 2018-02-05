const randomstring = require('randomstring');
const process = require('process')
const {
  APP,
  fsReadSync,
  ttformat
} = require('./util');
const {
  ImgPublic
} = require('../');
const imgPublic = new ImgPublic(APP.appkey, APP.appid);
const resSceneKey = {"0":"机场","1":"机舱","2":"机场航站楼","3":"胡同","4":"游乐场","5":"游乐园","6":"公寓大楼外","7":"水族馆","8":"渡槽","9":"游乐中心","10":"考古发掘","11":"档案文件","12":"曲棍球","13":"性能","14":"牛仔竞技比赛","15":"陆军基地","16":"艺术画廊","17":"艺术学校","18":"艺术工作室","19":"装配线","20":"户外田径场地","21":"阁楼","22":"大礼堂","23":"汽车厂","24":"汽车展厅","25":"荒地","26":"商店","27":"外部","28":"内部","29":"球坑","30":"舞厅","31":"竹林","32":"银行金库","33":"宴会厅","34":"酒吧","35":"棒球场","36":"地下室","37":"室内篮球场","38":"浴室","39":"室内市场","40":"户外市场","41":"海滩","42":"美容院","43":"卧室","44":"泊位","45":"生物学实验室","46":"木板路","47":"船的甲板上","48":"船屋","49":"书店","50":"公用电话亭里面","51":"植物园","52":"室内的弓形窗","53":"保龄球馆","54":"拳击台","55":"桥","56":"建筑立面","57":"斗牛场","58":"车内","59":"公交车站内","60":"肉店","61":"巴特","62":"小屋内","63":"自助餐厅","64":"营地","65":"校园","66":"自然的","67":"城市的","68":"糖果店","69":"峡谷","70":"汽车内饰","71":"旋转木马","72":"城堡","73":"地下墓穴","74":"墓地","75":"化学实验室","76":"孩子的房间","77":"礼堂内","78":"礼堂外","79":"教室","80":"悬崖","81":"衣柜","82":"服装店","83":"海岸","84":"驾驶舱","85":"咖啡店","86":"电脑室","87":"会议室","88":"施工现场","89":"玉米田","90":"畜栏","91":"走廊","92":"庭院","93":"小溪","94":"决口","95":"人行横道","96":"水坝","97":"熟食店","98":"百货商店","99":"沙","100":"植被","101":"沙漠公路","102":"路边小饭店","103":"餐厅","104":"餐厅","105":"迪斯科舞厅","106":"宿舍","107":"市中心","108":"更衣室","109":"车道","110":"药店","111":"门","112":"电梯大堂","113":"电梯井","114":"发动机室","115":"室内自动扶梯","116":"开挖","117":"布艺店","118":"农场","119":"快餐店","120":"栽培","121":"野生的","122":"场路","123":"火灾逃生","124":"消防站","125":"鱼塘","126":"室内跳蚤市场","127":"室内花店","128":"美食广场","129":"足球场","130":"阔叶","131":"森林的小路","132":"林道","133":"正式的花园","134":"喷泉","135":"厨房","136":"车库内","137":"车库外","138":"加油站","139":"外部","140":"杂货店内","141":"礼品店","142":"冰川","143":"高尔夫球场","144":"温室内","145":"温室外","146":"石窟","147":"体育馆内","148":"飞机棚内","149":"飞机棚外","150":"港","151":"五金店","152":"海菲尔德","153":"直升机场","154":"公路","155":"家庭办公室","156":"医院的房间","157":"温泉","158":"酒店外","159":"酒店房间","160":"房子","161":"冰淇淋店","162":"浮冰","163":"冰架","164":"室内溜冰场","165":"室外溜冰场","166":"冰山","167":"工业区","168":"胰岛","169":"浴缸里","170":"监狱","171":"日本花园","172":"珠宝店","173":"垃圾场","174":"城堡","175":"狗屋外面","176":"幼儿园的教室","177":"厨房","178":"泻湖","179":"自然的","180":"垃圾填埋","181":"降落甲板","182":"草坪","183":"图书馆室内","184":"灯塔","185":"客厅","186":"大堂","187":"更衣室","188":"商店外面","189":"商店里面","190":"沼泽","191":"武术馆","192":"水","193":"清真寺外面","194":"山","195":"山间小道","196":"山上的雪","197":"电影院室内","198":"博物馆室内","199":"音乐工作室","200":"自然历史博物馆","201":"婴儿室","202":"海洋","203":"办公室","204":"办公隔间","205":"石油钻台","206":"操作室","207":"果园","208":"乐池","209":"宝塔","210":"宫殿","211":"食品贮藏室","212":"公园","213":"室内停车场","214":"停车场","215":"牧场","216":"亭阁","217":"宠物店","218":"药房","219":"电话亭","220":"码头","221":"比萨店","222":"操场","223":"广场","224":"池塘","225":"酒馆内","226":"赛马场","227":"滚道","228":"筏","229":"铁路轨道","230":"雨林","231":"接待","232":"娱乐室","233":"修理店","234":"餐厅","235":"餐厅厨房","236":"餐厅的露台","237":"稻田","238":"河","239":"岩拱","240":"索桥","241":"废墟","242":"沙盒","243":"桑拿","244":"服务器机房","245":"鞋店","246":"大商场室内","247":"淋浴","248":"滑雪度假村","249":"天空","250":"摩天大楼","251":"雪地","252":"足球场","253":"稳定的","254":"棒球","255":"足球","256":"室内舞台","257":"户外舞台","258":"楼梯","259":"街道","260":"地铁站台","261":"超市","262":"寿司店","263":"沼泽","264":"游泳池","265":"室内游泳池","266":"户外游泳池","267":"电视演播室","268":"亚洲","269":"王座室","270":"售票厅","271":"修剪花园","272":"塔","273":"玩具店","274":"列车内部","275":"火车站台","276":"林场","277":"树屋","278":"沟槽","279":"苔原","280":"海洋的深处","281":"实用的房间","282":"山谷","283":"植物园","284":"兽医办公室","285":"高架桥","286":"村庄","287":"葡萄园","288":"火山","289":"户外排球场","290":"水上公园","291":"水塔","292":"瀑布","293":"浇水洞","294":"波动","295":"小麦田","296":"风电场","297":"院子","298":"禅园"};
const resObjectKey = {"0":"鲤鱼","1":"金鱼","2":"大白鲨","3":"虎鲨","4":"锤头鲨","5":"电鳗","6":"黄貂鱼","7":"公鸡","8":"母鸡","9":"鸵鸟","10":"燕雀","11":"金翅雀","12":"朱雀","13":"雪鸟","14":"雀鸟","15":"美洲知更鸟","16":"鹎","17":"松鸦","18":"喜鹊","19":"山雀","20":"河鸟","21":"风筝","22":"秃头鹰","23":"秃鹫","24":"大灰猫头鹰","25":"欧洲火蝾螈","26":"蝾螈","27":"水蜥蜴","28":"斑点蝾螈","29":"美西螈","30":"牛蛙","31":"树蛙","32":"尾蟾","33":"红海龟","34":"棱皮龟","35":"泥龟","36":"鳖","37":"箱龟","38":"条纹壁虎","39":"绿鬣蜥","40":"美国变色龙","41":"鞭尾蜥蜴","42":"飞龙科蜥蜴","43":"皱褶蜥蜴","44":"鳄蜥","45":"毒蜥","46":"绿蜥蜴","47":"非洲变色龙","48":"科莫多龙","49":"非洲鳄鱼","50":"美国短吻鳄","51":"三角龙","52":"雷霆蛇","53":"环颈蛇","54":"猪鼻蛇","55":"绿蛇","56":"大王蛇","57":"乌梢蛇","58":"水蛇","59":"藤蛇","60":"夜蛇","61":"蟒蛇","62":"岩蟒","63":"印度眼镜蛇","64":"曼巴蛇","65":"海蛇","66":"角蝰","67":"响尾蛇","68":"角响尾蛇","69":"三叶虫","70":"喜蛛","71":"蝎子","72":"金园蛛","73":"仓蜘","74":"园蛛","75":"黑寡妇","76":"狼蛛","77":"狼蛛","78":"扁虱","79":"蜈蚣","80":"黑琴鸡","81":"雷鸟","82":"鹧鸪","83":"草原鸡","84":"孔雀","85":"鹌鹑","86":"鹧鸪","87":"非洲灰鹦鹉","88":"金刚鹦鹉","89":"葵花凤头鹦鹉","90":"吸蜜鹦鹉","91":"鸦鹃","92":"蜂虎","93":"犀鸟","94":"蜂鸟","95":"食虫鸟","96":"巨嘴鸟","97":"公鸭","98":"红胸秋沙鸭","99":"鹅","100":"黑天鹅","101":"塔斯克","102":"食蚁兽","103":"鸭嘴兽","104":"袋鼠","105":"考拉","106":"袋熊","107":"水母","108":"海葵","109":"脑珊瑚","110":"扁虫扁形动物","111":"线虫","112":"海螺","113":"蜗牛","114":"鼻涕虫","115":"裸鳃海蛞蝓","116":"石鳖","117":"鹦鹉螺","118":"珍宝蟹","119":"岩石蟹","120":"招潮蟹","121":"皇帝蟹","122":"美国龙虾","123":"龙虾","124":"小龙虾","125":"寄居蟹","126":"等足目动物","127":"白鹳","128":"黑鹳","129":"琵鹭","130":"火烈鸟","131":"小蓝鹭","132":"大白鹭","133":"麻鸦","134":"鹤","135":"锦鸡","136":"欧洲水鸡","137":"美国黑鸭","138":"鸨","139":"翻石鹬","140":"红背鹬","141":"红脚鹬","142":"半蹼鹬","143":"蛎鹬","144":"鹈鹕","145":"帝企鹅","146":"大海鸟","147":"灰鲸","148":"虎鲸","149":"儒艮","150":"海狮","151":"墨西哥狗","152":"日本猎犬","153":"马尔济斯犬","154":"哈巴狗","155":"狮子狗","156":"布莱尼姆猎犬","157":"巴比","158":"玩具犬","159":"罗得西亚脊背犬","160":"阿富汗猎犬","161":"猎犬","162":"比格犬","163":"侦探猎犬","164":"蓝斑猎狗","165":"猎浣熊犬","166":"沃克犬","167":"英国猎狐犬","168":"美洲赤狗","169":"俄罗斯猎狼犬","170":"爱尔兰猎狼犬","171":"意大利灵缇犬","172":"惠比特犬","173":"依比沙猎犬","174":"挪威猎犬","175":"奥达猎犬","176":"沙克犬瞪羚猎犬","177":"苏格兰猎鹿犬","178":"威玛猎犬","179":"斯塔福德郡斗牛犬","180":"美国斗牛犬","181":"贝德灵顿犬","182":"博德猎狐犬","183":"凯丽蓝犬","184":"爱尔兰犬","185":"诺福克犬","186":"诺维奇犬","187":"约克郡犬","188":"刚毛猎狐犬","189":"莱克兰犬","190":"锡利哈姆犬","191":"艾尔谷犬","192":"凯恩犬","193":"澳大利亚犬","194":"英国小猎犬","195":"波士顿犬","196":"迷你雪纳瑞","197":"巨型雪纳瑞","198":"标准雪纳瑞","199":"苏格兰犬","200":"菊花狗","201":"丝毛狗","202":"爱尔兰软毛犬","203":"西部高地白犬","204":"拉萨，拉萨犬","205":"平滑毛寻回犬","206":"卷毛寻回犬","207":"金毛猎犬","208":"拉布拉多猎犬","209":"乞沙比克猎犬","210":"德国短毛猎犬","211":"匈牙利维兹拉犬","212":"英国赛特犬","213":"爱尔兰塞特猎犬","214":"戈登雪达犬","215":"布列塔尼犬","216":"黄毛猎犬","217":"英国史宾格犬","218":"威尔士激飞猎犬","219":"英国可卡犬","220":"萨塞克斯猎犬","221":"爱尔兰水猎犬","222":"哥威斯犬","223":"舒柏奇犬","224":"牧羊犬","225":"马里努阿犬","226":"伯瑞犬","227":"澳大利亚护羊犬","228":"可蒙犬","229":"英国牧羊犬","230":"喜乐蒂牧羊犬","231":"牧羊犬","232":"边境牧羊犬","233":"法兰德斯畜牧犬","234":"罗威犬","235":"德国牧羊犬","236":"杜宾犬","237":"迷你杜宾犬","238":"大瑞士山犬","239":"伯恩山犬","240":"阿彭策尔勒犬","241":"恩特雷布赫山犬","242":"拳狮犬","243":"斗牛獒犬","244":"藏獒","245":"法国斗牛犬","246":"大丹犬","247":"圣伯纳德狗","248":"爱斯基摩犬","249":"雪橇犬","250":"西伯利亚雪橇犬","251":"达尔马提亚","252":"猴犬","253":"巴辛吉","254":"哈巴狗","255":"兰伯格犬","256":"纽芬兰犬","257":"大白熊犬","258":"萨摩犬","259":"博美犬","260":"松狮犬","261":"荷兰毛狮犬","262":"布鲁塞尔格林芬犬","263":"潘布魯克威尔斯柯基犬","264":"卡迪根威尔士柯基犬","265":"玩具型贵宾犬","266":"迷你型贵宾犬","267":"标准型贵宾犬","268":"墨西哥无毛犬","269":"灰狼","270":"白狼","271":"红狼","272":"草原狼","273":"澳洲野犬","274":"豺狗","275":"三色犬","276":"鬣狗","277":"红狐狸","278":"美洲小狐","279":"北极狐","280":"灰色的狐狸","281":"虎斑","282":"猫虎","283":"波斯猫","284":"暹罗暹罗猫","285":"埃及猫","286":"美洲狮","287":"猞猁","288":"豹","289":"雪豹","290":"美洲虎","291":"狮子","292":"虎","293":"猎豹","294":"棕熊","295":"黑熊","296":"北极熊","297":"懒熊","298":"猫鼬","299":"狐獴","300":"虎甲虫","301":"瓢虫","302":"地面甲虫","303":"天牛","304":"叶甲","305":"粪甲虫","306":"犀甲虫","307":"象甲","308":"飞","309":"蜜蜂","310":"蚂蚁","311":"蚱蜢","312":"蟋蟀","313":"竹节虫","314":"蟑螂","315":"螳螂","316":"蝉","317":"叶蝉","318":"中华草蛉","319":"蜻蜓，大蚊","320":"豆娘","321":"花蝶","322":"小环蝴蝶","323":"帝王蝶","324":"菜粉蝶","325":"硫蝴蝶","326":"灰蝶","327":"海星","328":"海胆","329":"海参","330":"木兔","331":"野兔","332":"兔","333":"仓鼠","334":"刺猬","335":"东方狐松鼠","336":"土拨鼠","337":"海狸","338":"豚鼠","339":"酢浆草","340":"斑马","341":"猪","342":"野猪","343":"疣猪","344":"河马","345":"公牛","346":"水牛","347":"野牛","348":"公羊","349":"大角羊","350":"山羊","351":"狷羚","352":"黑斑羚","353":"瞪羚","354":"阿拉伯骆驼","355":"美洲驼","356":"黄鼠狼","357":"水貂","358":"艾鼬","359":"黑足鼬","360":"水獭","361":"臭鼬","362":"獾","363":"犰狳","364":"三趾树懒","365":"猩猩","366":"大猩猩","367":"黑猩猩","368":"长臂猿","369":"合趾猿长臂猿","370":"长尾猴","371":"猴子","372":"狒狒","373":"猕猴","374":"叶猴","375":"疣","376":"长鼻猴","377":"狨","378":"浣熊","379":"吼猴","380":"伶猴","381":"蜘蛛猴","382":"松鼠猴","383":"马达加斯加猫","384":"大狐猴","385":"印度大象","386":"非洲大象","387":"小熊猫","388":"熊猫","389":"杖鱼","390":"鳗鱼","391":"银大马哈鱼","392":"三色刺蝶鱼","393":"海葵鱼","394":"鲟鱼","395":"雀鳝","396":"狮子鱼","397":"河豚","398":"算盘","399":"长袍","400":"学位袍","401":"手风琴","402":"原声吉他","403":"航母","404":"客机","405":"飞船","406":"祭坛","407":"救护车","408":"水陆两用飞机构","409":"模拟时钟","410":"蜂房","411":"围裙","412":"垃圾桶","413":"突击步枪","414":"背包","415":"面包店","416":"平衡梁","417":"气球","418":"圆珠笔","419":"创可贴","420":"班卓琴","421":"栏杆","422":"杠铃","423":"理发椅","424":"理发店","425":"谷仓","426":"气压计","427":"木桶","428":"手推车","429":"棒球","430":"篮球","431":"摇篮","432":"巴松管","433":"游泳帽","434":"浴巾","435":"浴缸","436":"沙滩车","437":"灯塔","438":"烧杯","439":"熊皮","440":"啤酒瓶","441":"啤酒杯","442":"钟架","443":"围兜","444":"双坐自行车","445":"比基尼","446":"粘合剂","447":"望远镜","448":"鸟舍","449":"船屋","450":"雪橇","451":"波洛领带","452":"阀盖","453":"书柜","454":"书店","455":"瓶盖","456":"弓","457":"领结","458":"黄铜","459":"文胸","460":"码头","461":"盾牌","462":"扫帚","463":"水桶","464":"搭扣","465":"防弹背心","466":"子弹列车","467":"肉店","468":"出租车","469":"釜","470":"蜡烛","471":"大炮","472":"独木舟","473":"开罐器","474":"开衫","475":"车镜","476":"旋转木马","477":"木匠工具箱","478":"纸箱","479":"汽车轮","480":"提款机","481":"盒式录音带","482":"磁带播放器","483":"城堡","484":"双体船","485":"播放器","486":"大提琴","487":"蜂窝电话","488":"链","489":"围栏","490":"邮件","491":"油锯","492":"胸部","493":"衣柜","494":"编钟","495":"瓷器柜","496":"圣诞袜","497":"教堂","498":"电影院","499":"切肉刀","500":"崖居","501":"斗篷","502":"木鞋","503":"鸡尾酒调酒器","504":"咖啡杯","505":"咖啡壶","506":"线圈","507":"密码锁","508":"电脑键盘","509":"糖果","510":"集装箱船","511":"可转换","512":"螺旋形的","513":"喇叭","514":"牛仔靴","515":"牛仔帽","516":"摇篮","517":"起重机","518":"头盔","519":"箱","520":"婴儿床","521":"瓦罐锅","522":"槌球","523":"拐杖","524":"胸甲","525":"堤坝","526":"书桌","527":"台式电脑","528":"拨号电话","529":"尿布","530":"数字时钟","531":"数字手表","532":"餐桌","533":"抹布","534":"洗碗机","535":"盘式制动器","536":"码头","537":"狗拉雪橇","538":"拱顶","539":"门垫","540":"钻井平台","541":"鼓","542":"鼓槌","543":"哑铃","544":"荷兰烤箱","545":"电风扇","546":"电吉他","547":"电力机车","548":"娱乐中心","549":"信封","550":"咖啡机","551":"香粉","552":"蟒蛇","553":"文件","554":"消防船","555":"消防车","556":"火屏","557":"旗杆","558":"长笛","559":"折叠椅","560":"橄榄球头盔","561":"叉车","562":"喷泉","563":"钢笔","564":"四柱","565":"货运车","566":"号角","567":"煎锅","568":"毛皮大衣","569":"垃圾车","570":"防毒面具","571":"气泵","572":"高脚杯","573":"卡丁车","574":"高尔夫球","575":"高尔夫球车","576":"贡多拉","577":"锣","578":"长袍","579":"大钢琴","580":"苗圃","581":"格栅","582":"杂货店","583":"断头台","584":"幻灯片","585":"头发喷雾","586":"半轨","587":"铁锤","588":"阻碍","589":"手吹风","590":"掌上电脑","591":"手帕","592":"硬盘","593":"口风琴","594":"竖琴","595":"收割机","596":"斧头","597":"皮套","598":"家庭影院","599":"蜂窝","600":"钩爪","601":"衬裙","602":"单杠","603":"马车","604":"沙漏","605":"音乐播放器","606":"铁","607":"南瓜灯","608":"牛仔裤","609":"吉普车","610":"T恤","611":"拼图游戏","612":"黄包车","613":"操纵杆","614":"和服","615":"护膝","616":"结","617":"实验室工作服","618":"钢包","619":"灯罩","620":"笔记本电脑","621":"割草机","622":"镜头盖","623":"开信刀","624":"图书馆","625":"救生艇","626":"打火机","627":"豪华轿车","628":"班轮","629":"口红","630":"拖鞋","631":"洗剂","632":"扬声器","633":"放大镜","634":"锯木厂","635":"磁罗盘","636":"邮袋","637":"信箱","638":"紧身衣","639":"背带式女浴衣","640":"窨井盖","641":"沙球","642":"马林巴木琴","643":"面具","644":"火柴","645":"花柱","646":"迷宫","647":"测量杯","648":"药箱","649":"巨石","650":"麦克风","651":"微波炉","652":"军装","653":"奶瓶","654":"小巴士","655":"迷你裙","656":"面包车","657":"导弹","658":"手套","659":"搅拌碗","660":"制造家","661":"模型","662":"调制解调器","663":"修道院","664":"监控","665":"助力车","666":"砂浆","667":"学位帽","668":"清真寺","669":"蚊帐","670":"摩托车","671":"山地自行车","672":"登山帐","673":"鼠标","674":"捕鼠器","675":"移动车","676":"枪口","677":"指甲","678":"颈托","679":"项链","680":"乳头","681":"笔记本电脑","682":"方尖碑","683":"双簧管双簧管","684":"陶笛","685":"里程表","686":"滤油器","687":"风琴","688":"示波器","689":"罩裙","690":"牛车","691":"氧气面罩","692":"小包裹","693":"桨","694":"明轮","695":"挂锁","696":"画笔","697":"睡衣","698":"宫殿","699":"排箫","700":"纸巾","701":"降落伞","702":"双杠杆","703":"公园的长椅","704":"停车收费表","705":"客车","706":"露台","707":"付费电话","708":"底座","709":"铅笔盒","710":"卷笔刀","711":"香水","712":"培养皿","713":"复印机","714":"挑","715":"头盔","716":"栅栏","717":"皮卡","718":"码头","719":"储蓄银行","720":"药瓶","721":"枕头","722":"乒乓球","723":"风车","724":"海盗船","725":"水罐","726":"飞机","727":"天文馆","728":"塑料袋","729":"板架","730":"犁","731":"柱塞","732":"宝丽来相机","733":"极","734":"警车","735":"雨披","736":"台球桌","737":"汽水瓶","738":"花盆","739":"陶工的轮子","740":"电钻","741":"祈祷毯","742":"打印机","743":"监狱","744":"导弹","745":"投影机","746":"冰球","747":"沙包","748":"钱包","749":"羽毛笔","750":"被子","751":"赛车","752":"球拍","753":"散热器","754":"无线电","755":"无线电望远镜","756":"雨桶","757":"休闲车","758":"卷轴","759":"反射式照相机","760":"冰箱","761":"远程遥控","762":"餐厅","763":"左轮手枪","764":"步枪","765":"摇椅","766":"烤肉店","767":"橡皮","768":"橄榄球","769":"标尺","770":"跑步鞋","771":"保险箱","772":"别针","773":"盐瓶","774":"凉鞋","775":"布裙","776":"萨克斯管","777":"剑鞘","778":"秤","779":"校车","780":"帆船","781":"记分牌","782":"屏幕","783":"螺丝钉","784":"螺丝刀","785":"安全带","786":"缝纫机","787":"小圆盾","788":"鞋店","789":"障子","790":"购物篮","791":"购物车","792":"铲子","793":"淋浴帽","794":"浴帘","795":"滑雪","796":"滑雪面罩","797":"睡袋","798":"计算尺","799":"滑动门","800":"赌博机","801":"通气管","802":"雪橇","803":"扫雪机","804":"皂液器","805":"足球","806":"短袜","807":"太阳能盘","808":"宽边帽","809":"一碗汤","810":"空格键","811":"空间加热器","812":"航天飞机","813":"铲","814":"快艇","815":"蜘蛛网","816":"主轴","817":"跑车","818":"聚光灯","819":"舞台","820":"蒸汽机车","821":"钢拱桥","822":"钢鼓","823":"听诊器","824":"长巾","825":"石头墙","826":"秒表","827":"火炉","828":"过滤器","829":"有轨电车","830":"担架","831":"工作室沙发","832":"佛塔","833":"潜艇","834":"西服","835":"日晷","836":"太阳镜","837":"墨镜","838":"防晒霜","839":"悬索桥","840":"拖把","841":"运动衫","842":"游泳裤","843":"摆动","844":"开关","845":"注射器","846":"台灯","847":"坦克","848":"磁带播放器","849":"茶壶","850":"泰迪熊","851":"电视系统","852":"网球","853":"茅草屋顶","854":"剧场幕布","855":"顶针","856":"脱粒机","857":"宝座","858":"瓦屋顶","859":"烤面包机","860":"烟草店","861":"马桶座","862":"火炬","863":"图腾柱","864":"拖车","865":"玩具店","866":"拖拉机","867":"拖车","868":"托盘","869":"风衣","870":"三轮车","871":"三体船","872":"三脚架","873":"凯旋门","874":"无轨电车","875":"长号","876":"浴缸","877":"十字转门","878":"打字机键盘","879":"雨伞","880":"独轮车","881":"立式钢琴","882":"真空吸尘器","883":"花瓶","884":"拱顶","885":"天鹅绒","886":"自动售货机","887":"法衣","888":"高架桥","889":"小提琴","890":"排球","891":"松饼机","892":"墙上的时钟","893":"钱包","894":"衣柜","895":"军用飞机","896":"洗脸盆","897":"洗衣机","898":"一瓶水","899":"水壶","900":"水塔","901":"威士忌的壶","902":"吹口哨","903":"假发","904":"纱窗","905":"百叶窗","906":"温莎领带","907":"酒瓶","908":"翼","909":"炒锅","910":"木勺子","911":"羊毛","912":"蠕虫围栏","913":"沉船","914":"快艇","915":"蒙古包","916":"网站","917":"漫画书","918":"纵横填字谜","919":"街道标志","920":"交通信号灯","921":"皮书套","922":"菜单","923":"盘子","924":"鳄梨酱","925":"清汤","926":"火锅","927":"琐事","928":"冰淇淋","929":"雪糕","930":"法国面包","931":"百吉饼","932":"椒盐脆饼","933":"芝士汉堡","934":"热狗","935":"土豆泥","936":"结球甘蓝","937":"西兰花","938":"菜花","939":"西葫芦","940":"意大利南瓜","941":"小青南瓜","942":"南瓜","943":"黄瓜","944":"朝鲜蓟","945":"甜椒","946":"刺棘蓟","947":"蘑菇","948":"澳洲青苹","949":"草莓","950":"橙色","951":"柠檬","952":"无花果","953":"菠萝","954":"香蕉","955":"木菠萝","956":"蛋奶冻苹果","957":"石榴","958":"干草","959":"培根","960":"巧克力酱","961":"面团","962":"瑞士肉包","963":"比萨派","964":"馅饼","965":"玉米煎饼","966":"红葡萄酒","967":"意大利浓咖啡","968":"杯子","969":"蛋奶酒","970":"高山","971":"气泡","972":"悬崖","973":"珊瑚礁","974":"间歇泉","975":"湖边","976":"海角","977":"沙洲","978":"海岸","979":"谷","980":"火山","981":"棒球运动员","982":"新郎","983":"潜水员","984":"油菜","985":"雏菊","986":"黄色凤仙花","987":"玉米","988":"橡子","989":"玫瑰果","990":"七叶树","991":"珊瑚菌","992":"木耳","993":"鹿花菌属","994":"鬼笔菌","995":"地星","996":"灰树花","997":"牛肝菌","998":"穗","999":"卫生纸"};
const resPornKey = {"normal":"正常","hot":	"性感","porn":	"黄色图像","normal_level":	"正常级别","breast":	"胸","ass":	"屁股","bare-body"	:"裸露身体","unreal-hot-people":	"非真实的性感人物","porn-level":	"色情级别","normal_hot_porn":	"图像为色情的综合值"};
const resTerrorismKey = {"terrorists":	"恐怖分子","knife":	"刀","guns":	"枪支","blood":	"血液","fire":	"火","flag":	"旗帜","crowd":	"人群","other": "其他"} 
/**
 * 计算机视觉-图片识别公共类 API 测试文件
 * @author wubo  2018-02-05
 * @version 1.1.1
 */
imgPublic.porn(fsReadSync(!!process.platform.match(/^win/) ? `${__dirname}\\file\\1.jpg` : `${__dirname}/file/1.jpg`)).then((res) => {
  res.data.tag_list.map(item=>{
    item.tag_name = resPornKey[item.tag_name]
  })
  console.log('智能鉴黄', JSON.stringify(res));
}, (e) => {
  console.log('智能鉴黄', JSON.stringify(e));
});
imgPublic.terrorism(fsReadSync(!!process.platform.match(/^win/) ? `${__dirname}\\file\\火灾.jpg` : `${__dirname}/file/火灾.jpg`)).then((res) => {
  res.data.tag_list.map(item=>{
    item.tag_name = resTerrorismKey[item.tag_name]
  })
  console.log('暴恐图片识别', JSON.stringify(res));
}, (e) => {
  console.log('暴恐图片识别', JSON.stringify(e));
});
imgPublic.scener({
  image: fsReadSync(!!process.platform.match(/^win/) ? `${__dirname}\\file\\scener.jpg` : `${__dirname}/file/scener.jpg`),
  topk: 5
}).then((res) => {
  res.data.object_list.map(item=>{
    item.label_id = resSceneKey[item.label_id]
  })
  console.log('场景识别', JSON.stringify(res));
}, (e) => {
  console.log('场景识别', JSON.stringify(e));
});
imgPublic.objectr({
  image: fsReadSync(!!process.platform.match(/^win/) ? `${__dirname}\\file\\objectr.jpg` : `${__dirname}/file/objectr.jpg`),
  topk: 5
}).then((res) => {
  res.data.object_list.map(item=>{
    item.label_id = resObjectKey[item.label_id]
  })
  console.log('物体识别', JSON.stringify(res));
}, (e) => {
  console.log('物体识别', JSON.stringify(e));
});
imgPublic.imagetag(fsReadSync(!!process.platform.match(/^win/) ? `${__dirname}\\file\\imgtag.jpg` : `${__dirname}/file/imgtag.jpg`)).then((res) => {
  console.log('图像标签识别', JSON.stringify(res));
}, (e) => {
  console.log('图像标签识别', JSON.stringify(e));
});

imgPublic.imgidentify(fsReadSync(!!process.platform.match(/^win/) ? `${__dirname}\\file\\che.jpg` : `${__dirname}/file/che.jpg`)).then((res) => {
  console.log('车辆识别', JSON.stringify(res));
}, (e) => {
  console.log('车辆识别', JSON.stringify(e));
});
imgPublic.imgidentify(
  fsReadSync(!!process.platform.match(/^win/) ? `${__dirname}\\file\\hua.jpg` : `${__dirname}/file/hua.jpg`),
  2
).then((res) => {
  console.log('花草', JSON.stringify(res));
}, (e) => {
  console.log('花草', JSON.stringify(e));
});
imgPublic.imgtotext(
  fsReadSync(!!process.platform.match(/^win/) ? `${__dirname}\\file\\1jpg.jpg` : `${__dirname}/file/1jpg.jpg`),
  randomstring.generate({
    length: 16,
    capitalization: 'uppercase'
  })
).then((res) => {
  console.log('看图说话', JSON.stringify(res));
}, (e) => {
  console.log('看图说话', JSON.stringify(e));
});
imgPublic.imagefuzzy(fsReadSync(!!process.platform.match(/^win/) ? `${__dirname}\\file\\fuzzy.jpg` : `${__dirname}/file/fuzzy.jpg`)).then((res) => {
  console.log('模糊图片检测', JSON.stringify(res));
}, (e) => {
  console.log('模糊图片检测', JSON.stringify(e));
});

imgPublic.imagefood(fsReadSync(!!process.platform.match(/^win/) ? `${__dirname}\\file\\food.jpg` : `${__dirname}/file/food.jpg`)).then((res) => {
  console.log('美食图片识别', JSON.stringify(res));
}, (e) => {
  console.log('美食图片识别', JSON.stringify(e));
});
