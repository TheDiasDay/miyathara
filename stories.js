"use strict";

// Editorial copy checked against the linked sources on 2026-11-07.
// Each language contains the four tabs in their display order.
const stories = {
  alakol: {
    sources: [
      ["UNESCO · Alakol", "https://www.unesco.org/en/mab/alakol"],
      ["Ramsar · Alakol–Sasykkol", "https://rsis.ramsar.org/sites/default/files/rsiswp_search/exports/Ramsar-Sites-annotated-summary-Kazakhstan.pdf"]
    ],
    en: [
      [["A stop on a continental journey", "Alakol belongs to a lake system between the Tarbagatai and Dzungarian Alatau mountains. Its wetlands give waterbirds feeding and nesting grounds along the Central Asian–Indian migration route."]],
      [["Pressure on the shore", "Water extraction, unregulated recreation, fires and illegal fishing are among the pressures recorded for the Alakol–Sasykkol wetlands. Protecting nesting areas matters as much as protecting open water."]],
      [["International recognition", "The lake system became a Ramsar wetland in 2009. Alakol joined UNESCO’s network of biosphere reserves in 2013, linking nature conservation with the lives of local communities."]],
      [["Room for birds and people", "The priority is to keep feeding and nesting habitats connected. Visitors can help by keeping their distance from colonies, taking litter away and following reserve access rules."]]
    ],
    ru: [
      [["Остановка на пути перелётных птиц", "Алаколь входит в систему озёр между Тарбагатаем и Джунгарским Алатау. Её водно-болотные угодья дают птицам места для кормления и гнездования на Центральноазиатско-Индийском миграционном пути."]],
      [["Нагрузка на берега", "Среди угроз Алаколь-Сасыккольским угодьям — водозабор, нерегулируемый отдых, пожары и незаконный лов рыбы. Сохранение мест гнездования не менее важно, чем охрана самой акватории."]],
      [["Международное признание", "В 2009 году система озёр вошла в Рамсарский список. В 2013 году Алаколь стал частью сети биосферных резерватов ЮНЕСКО, которая объединяет охрану природы и интересы местных сообществ."]],
      [["Место для птиц и людей", "Главная задача — сохранить связь между местами кормления и гнездования. Посетители могут помочь: не приближаться к птичьим колониям, забирать мусор и соблюдать правила посещения заповедника."]]
    ],
    kk: [
      [["Жыл құстарының аялдамасы", "Алакөл Тарбағатай мен Жетісу Алатауы арасындағы көлдер жүйесіне кіреді. Оның сулы-батпақты алқаптары Орталық Азия–Үндістан көші-қон жолындағы құстарға қоректенетін және ұялайтын орын береді."]],
      [["Жағалауға түсетін салмақ", "Алакөл–Сасықкөл алқаптарына су алу, реттелмеген демалыс, өрт және заңсыз балық аулау қауіп төндіреді. Ұялайтын жерлерді сақтау су айдынын қорғау сияқты маңызды."]],
      [["Халықаралық мәртебе", "Көлдер жүйесі 2009 жылы Рамсар тізіміне енді. 2013 жылы Алакөл табиғатты қорғау мен жергілікті қауымдардың мүддесін ұштастыратын ЮНЕСКО биосфералық резерваттар желісіне қосылды."]],
      [["Құстар мен адамдарға ортақ мекен", "Басты міндет — қоректену және ұялау орындарының байланысын сақтау. Келушілер құс шоғырларына жақындамай, қоқысты өзімен алып кетіп, қорыққа кіру ережелерін сақтай алады."]]
    ]
  },
  aral: {
    sources: [
      ["World Bank · North Aral restoration", "https://documents1.worldbank.org/curated/en/888771468089960580/pdf/462360BRI0Box31e0no0FS231Kazakhstan.pdf"],
      ["World Bank · Syr Darya basin", "https://documents1.worldbank.org/curated/en/800011468038940269/pdf/SYNAS120PID1PC1ted0after0PCN0review.pdf"]
    ],
    en: [
      [["A sea shaped by two rivers", "The Aral was once the world’s fourth-largest lake. Diverting the Amu Darya and Syr Darya for irrigation dramatically reduced the water reaching it."]],
      [["Retreat and a partial return", "As the sea shrank, salinity rose and fisheries collapsed. Recovery in the North Aral shows that restoring river inflow can bring water and fishing livelihoods back."]],
      [["The Kok-Aral dike", "Completed in 2005, the dike holds water in the northern basin. Improvements along the Syr Darya helped deliver more river water to this part of the sea."]],
      [["Keeping water in the basin", "The next challenge is sustaining that recovery: reducing water losses, maintaining river infrastructure and balancing irrigation needs with the water required by the sea and its wetlands."]]
    ],
    ru: [
      [["Море, которое питали две реки", "Арал был четвёртым по величине озером мира. Отвод вод Амударьи и Сырдарьи на орошение резко сократил приток в море."]],
      [["Отступление и частичное возвращение", "По мере усыхания росла солёность и исчезал рыбный промысел. Восстановление Северного Арала показало: возвращение речного стока помогает вернуть воду и работу рыбакам."]],
      [["Кокаральская плотина", "Плотина, построенная в 2005 году, удерживает воду в северной части моря. Модернизация сооружений на Сырдарье помогла увеличить поступление речной воды в этот бассейн."]],
      [["Сохранить результат", "Следующая задача — поддержать восстановление: сокращать потери воды, обслуживать речные сооружения и согласовывать потребности орошения с притоком, необходимым морю и его водно-болотным угодьям."]]
    ],
    kk: [
      [["Екі өзен қоректендірген теңіз", "Арал бір кездері әлемдегі төртінші ірі көл болған. Әмудария мен Сырдария суын егін суаруға бұру теңізге жететін ағынды күрт азайтты."]],
      [["Шегіну және ішінара қалпына келу", "Теңіз тартылған сайын тұздылық өсіп, балық шаруашылығы құлдырады. Солтүстік Аралдың қалпына келуі өзен ағынын қайтару су мен балықшылардың кәсібін жандандыра алатынын көрсетті."]],
      [["Көкарал бөгеті", "2005 жылы салынған бөгет теңіздің солтүстік бөлігінде суды ұстап қалады. Сырдариядағы құрылыстарды жаңарту осы алапқа көбірек өзен суын жеткізуге көмектесті."]],
      [["Нәтижені сақтау", "Келесі міндет — қалпына келуді қолдау: су шығынын азайту, өзен құрылыстарын күтіп ұстау және суару қажеттілігін теңіз бен сулы-батпақты алқаптарға керек ағынмен үйлестіру."]]
    ]
  },
  balkhash: {
    sources: [
      ["UNDP · Water and climate", "https://www.undp.org/kazakhstan/stories/climate-change-impact-water-resources-kazakhstan"],
      ["UNDP · Ile–Balkhash restoration", "https://www.undp.org/kazakhstan/press-releases/undp-helps-restore-ecosystems-ile-balkhash-region"],
      ["UNDP · Kazakhstan climate report", "https://www.undp.org/sites/g/files/zskgke326/files/2023-09/kazakhstan_8nc_eng.pdf"]
    ],
    en: [
      [["One lake, two kinds of water", "Balkhash has a fresher western basin and a saltier eastern basin, connected by the narrow Uzun-Aral strait. The Ili River supplies the western side."]],
      [["A delicate water balance", "Water withdrawals, evaporation, glacier change and pollution put the lake under pressure. Its future is closely tied to the transboundary Ili basin and the way water is shared upstream."]],
      [["Restoring the delta", "In 2022, UNDP and Kazakhstan launched an initiative to restore Ile–Balkhash ecosystems, including floodplain forests and wildlife habitat in the Ili delta."]],
      [["Protect the river to protect the lake", "Lasting protection needs sufficient river inflow as well as healthy shores. Water-saving irrigation and pollution control are key priorities alongside habitat restoration."]]
    ],
    ru: [
      [["Одно озеро — разная вода", "Западная часть Балхаша более пресная, восточная — солёная. Их соединяет узкий пролив Узынарал. Западную часть озера питает река Или."]],
      [["Хрупкий водный баланс", "Водозабор, испарение, изменение ледников и загрязнение создают нагрузку на озеро. Его будущее тесно связано с трансграничным бассейном Или и распределением воды выше по течению."]],
      [["Восстановление дельты", "В 2022 году ПРООН и Казахстан запустили инициативу по восстановлению экосистем Иле-Балхашского региона, включая пойменные леса и места обитания животных в дельте Или."]],
      [["Сохранить реку, чтобы сохранить озеро", "Озеру нужны и здоровые берега, и достаточный речной приток. Экономное орошение и сокращение загрязнения — важные задачи наряду с восстановлением природных местообитаний."]]
    ],
    kk: [
      [["Бір көлдегі екі түрлі су", "Балқаштың батыс бөлігінің суы тұщылау, ал шығыс бөлігі тұзды. Оларды тар Ұзынарал бұғазы жалғайды. Көлдің батыс бөлігін Іле өзені қоректендіреді."]],
      [["Нәзік су теңгерімі", "Су алу, булану, мұздықтардың өзгеруі және ластану көлге салмақ түсіреді. Оның болашағы трансшекаралық Іле алабына және жоғары ағыста судың қалай бөлінетініне тығыз байланысты."]],
      [["Атырауды қалпына келтіру", "2022 жылы БҰҰДБ мен Қазақстан Іле–Балқаш экожүйелерін қалпына келтіру бастамасын іске қосты. Оған Іле атырауының жайылма ормандары мен жануарлар мекенін қалпына келтіру кіреді."]],
      [["Көлді сақтау үшін өзенді қорғау", "Көлге таза жағалау да, жеткілікті өзен ағыны да қажет. Суды үнемдеп суару және ластануды азайту табиғи мекендерді қалпына келтірумен қатар маңызды міндет болып саналады."]]
    ]
  },
  burabay: {
    sources: [["UNESCO · Burabay", "https://www.unesco.org/en/mab/burabay"]],
    en: [
      [["Lakes among pine forests", "Burabay lies in the Kazakh Uplands, where lakes, pine forests and steppe meet."]],
      [["A popular destination", "Tourism is central to the local economy. Caring for the shoreline is part of caring for the place people come to enjoy."]],
      [["A biosphere reserve", "Burabay joined UNESCO’s biosphere reserve network in 2022."]],
      [["Leave the shore as you found it", "Stay on marked routes, take rubbish away and give wildlife space. Small choices help keep a busy lakeside welcoming to both visitors and nature."]]
    ],
    ru: [
      [["Озёра среди сосновых лесов", "Бурабай расположен на Казахском мелкосопочнике, где встречаются озёра, сосновые леса и степь."]],
      [["Популярное место отдыха", "Туризм играет важную роль в местной экономике. Забота о берегах помогает сохранить то, ради чего сюда приезжают."]],
      [["Биосферный резерват", "В 2022 году Бурабай вошёл во Всемирную сеть биосферных резерватов ЮНЕСКО."]],
      [["Оставить берег чистым", "Ходите по обозначенным маршрутам, забирайте мусор и не беспокойте животных. Эти простые действия помогают сохранить берега для природы и посетителей."]]
    ],
    kk: [
      [["Қарағайлы орман арасындағы көлдер", "Бурабай көлдер, қарағайлы ормандар мен дала тоғысатын Сарыарқада орналасқан."]],
      [["Танымал демалыс орны", "Туризм жергілікті экономикада маңызды рөл атқарады. Жағалауды күту адамдар осы жерге іздеп келетін табиғатты сақтауға көмектеседі."]],
      [["Биосфералық резерват", "Бурабай 2022 жылы ЮНЕСКО-ның Дүниежүзілік биосфералық резерваттар желісіне қосылды."]],
      [["Жағалауды таза қалдыру", "Белгіленген соқпақпен жүріп, қоқысты өзіңізбен алып кетіңіз және жануарларды мазаламаңыз. Осы қарапайым әрекеттер жағалауды табиғат пен келушілер үшін сақтауға көмектеседі."]]
    ]
  },
  caspian: {
    sources: [
      ["UNEP · The changing Caspian", "https://www.unep.org/en/news-and-stories/story/race-save-vanishing-caspian-sea"],
      ["United Nations University · Water loss, 2026", "https://unu.edu/inweh/article/caspian-sea-has-lost-area-nearly-size-sicily-human-activities-are-major-reason-why"]
    ],
    en: [
      [["An inland sea shared by five countries", "The Caspian is the world’s largest enclosed body of water. Its wetlands and river deltas support migratory birds, sturgeon and coastal communities."]],
      [["A retreating shoreline", "Falling water levels expose shallow shores and disrupt habitats. Research published in 2026 highlights reduced river inflow alongside climate pressures as drivers of the decline."]],
      [["A shared response", "All five coastal countries signed the Tehran Convention in 2003. It provides a framework for cooperation on protecting the Caspian environment."]],
      [["Plan for a moving coast", "Protecting the sea requires cooperation across its whole river basin. Monitoring inflows and safeguarding wetlands should accompany adaptation of ports, fisheries and coastal settlements."]]
    ],
    ru: [
      [["Внутреннее море пяти стран", "Каспий — крупнейший замкнутый водоём мира. Его водно-болотные угодья и речные дельты поддерживают перелётных птиц, осетровых и жизнь прибрежных сообществ."]],
      [["Береговая линия отступает", "Снижение уровня воды обнажает мелководья и меняет места обитания животных. Исследование 2026 года выделяет сокращение речного притока наряду с климатическими факторами среди причин обмеления."]],
      [["Общий ответ", "В 2003 году все пять прикаспийских стран подписали Тегеранскую конвенцию. Она задаёт основу сотрудничества по охране окружающей среды Каспия."]],
      [["Учитывать движение берега", "Защита моря требует сотрудничества во всём речном бассейне. Наблюдение за притоком и сохранение угодий должны сопровождать адаптацию портов, рыболовства и прибрежных населённых пунктов."]]
    ],
    kk: [
      [["Бес елге ортақ ішкі теңіз", "Каспий — әлемдегі ең ірі тұйық су айдыны. Оның сулы-батпақты алқаптары мен өзен атыраулары жыл құстарына, бекірелерге және жағалаудағы қауымдарға тіршілік негізін береді."]],
      [["Шегініп бара жатқан жағалау", "Су деңгейінің төмендеуі тайыз жерлерді құрғатып, жануарлар мекенін өзгертеді. 2026 жылғы зерттеу тайыздану себептері арасында климаттық ықпалмен қатар өзен ағынының азаюын көрсетеді."]],
      [["Ортақ әрекет", "2003 жылы Каспий жағалауындағы бес ел Тегеран конвенциясына қол қойды. Ол Каспийдің қоршаған ортасын қорғау жөніндегі ынтымақтастыққа негіз болады."]],
      [["Өзгеретін жағалауға бейімделу", "Теңізді қорғау бүкіл өзен алабындағы ынтымақтастықты қажет етеді. Ағынды бақылау мен сулы-батпақты алқаптарды сақтау порттар, балық шаруашылығы және жағалаудағы елді мекендердің бейімделуімен қатар жүруі тиіс."]]
    ]
  },
  taldykol: {
    sources: [
      ["ACBK · Taldykol wetlands", "https://www.acbk.kz/article/default/view?id=567"],
      ["Astana · Lake rehabilitation", "https://www.gov.kz/memleket/entities/astana/press/news/details/1072479?lang=ru"],
      ["Astana · Environmental assessment, 2025", "https://hearings.ndbecology.gov.kz/Public/PubHearings/LoadFile/261736"]
    ],
    en: [
      [["Wetlands within the city", "Maly Taldykol is part of Astana’s natural lake system. These urban wetlands provide bird habitat and help regulate the local water balance."]],
      [["A fragmented landscape", "Roads, construction and infilling have divided and reduced the wetlands. The city’s 2025 environmental assessment records a substantial loss of lake area compared with 2004."]],
      [["Restoration work", "Astana began a phased rehabilitation programme in 2025, including water monitoring and shoreline clean-ups. Conservation groups have also advocated for a natural park around the lake system."]],
      [["Keep nature in the city", "The 2025 roadmap calls for monitoring sections 5, 7 and 9 and developing a park concept. The key test is whether remaining habitats and their water connections are preserved."]]
    ],
    ru: [
      [["Водно-болотные угодья в городе", "Малый Талдыколь — часть природной озёрной системы Астаны. Эти городские угодья служат местом обитания птиц и помогают регулировать местный водный баланс."]],
      [["Разделённый ландшафт", "Дороги, строительство и засыпка разделили и сократили водно-болотные угодья. Экологическая оценка города за 2025 год фиксирует значительную потерю площади озёр по сравнению с 2004 годом."]],
      [["Восстановительные работы", "В 2025 году в Астане началась поэтапная реабилитация водоёма с мониторингом воды и уборкой берегов. Природоохранные организации также выступают за создание природного парка на озёрной системе."]],
      [["Сохранить природу в городе", "Дорожная карта 2025 года предусматривает наблюдение за участками №5, 7 и 9 и разработку концепции парка. Главный критерий результата — сохранение оставшихся местообитаний и водных связей между ними."]]
    ],
    kk: [
      [["Қала ішіндегі сулы-батпақты алқаптар", "Кіші Талдыкөл — Астананың табиғи көлдер жүйесінің бөлігі. Бұл қалалық алқаптар құстарға мекен болып, жергілікті су теңгерімін реттеуге көмектеседі."]],
      [["Бөлшектенген табиғи орта", "Жолдар, құрылыс және топырақ төгу сулы-батпақты алқаптарды бөліп, ауданын қысқартты. Қаланың 2025 жылғы экологиялық бағалауы 2004 жылмен салыстырғанда көлдер ауданының едәуір азайғанын көрсетеді."]],
      [["Қалпына келтіру жұмыстары", "2025 жылы Астанада суды бақылау мен жағалауды тазартуды қамтитын кезеңдік сауықтыру жұмыстары басталды. Табиғатты қорғау ұйымдары көлдер жүйесінде табиғи парк құруды да қолдайды."]],
      [["Қаладағы табиғатты сақтау", "2025 жылғы жол картасы №5, 7 және 9 учаскелерді бақылауды және парк тұжырымдамасын әзірлеуді көздейді. Негізгі өлшем — қалған табиғи мекендер мен олардың су байланыстарының сақталуы."]]
    ]
  },
  tengiz: {
    sources: [["UNESCO · Saryarka", "https://whc.unesco.org/en/list/1102"]],
    en: [
      [["A meeting point for migratory birds", "The Tengiz–Korgalzhyn lakes are an important feeding and nesting area on major Eurasian bird migration routes."]],
      [["Water shapes the habitat", "Wet and dry cycles reshape this lake system. Its birds depend on the survival of a varied wetland landscape."]],
      [["Part of Saryarka", "Korgalzhyn Nature Reserve is part of the UNESCO World Heritage site Saryarka, inscribed in 2008."]],
      [["Watch without disturbing", "Observe birds from a distance and follow reserve visitor rules. Keeping nesting and feeding areas quiet is a practical way to help protect this landscape."]]
    ],
    ru: [
      [["Место встречи перелётных птиц", "Тенгиз-Коргалжынские озёра — важное место кормления и гнездования на крупных евразийских путях миграции птиц."]],
      [["Вода меняет местообитания", "Влажные и засушливые периоды меняют озёрную систему. Её птицы зависят от сохранения разнообразных водно-болотных местообитаний."]],
      [["Часть Сарыарки", "Коргалжынский заповедник входит в объект Всемирного наследия ЮНЕСКО «Сарыарка», включённый в список в 2008 году."]],
      [["Наблюдать, не тревожа", "Наблюдайте за птицами издалека и соблюдайте правила посещения заповедника. Тишина в местах гнездования и кормления — простой способ помочь сохранить этот ландшафт."]]
    ],
    kk: [
      [["Жыл құстары тоғысатын жер", "Теңіз–Қорғалжын көлдері Еуразияның ірі құс көші-қон жолдарындағы маңызды қоректену және ұялау мекені."]],
      [["Су табиғи мекендерді өзгертеді", "Ылғалды және құрғақ кезеңдер көлдер жүйесін өзгертеді. Мұндағы құстар сулы-батпақты мекендердің алуан түрлілігінің сақталуына тәуелді."]],
      [["Сарыарқаның бір бөлігі", "Қорғалжын қорығы 2008 жылы ЮНЕСКО Дүниежүзілік мұра тізіміне енген «Сарыарқа» нысанының құрамына кіреді."]],
      [["Мазаламай бақылау", "Құстарды алыстан бақылап, қорыққа келу ережелерін сақтаңыз. Ұялайтын және қоректенетін жерлердегі тыныштық — осы табиғи ортаны қорғауға көмектесудің қарапайым жолы."]]
    ]
  }
};
