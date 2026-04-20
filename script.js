// ===== ДАННЫЕ ВСЕХ ПЕРСОНАЖЕЙ =====
const charactersData = {
    "char1": {
        buttonName: "Золотые луга",
        locationName: "Золотые луга",
        emoji: "🔑",
        description: "Новые горожане смутно представляют, откуда взялся Марк, но старожилы ещё помнят, как его отец, унаследовавший ферму «Золотые луга» от деда, после десятка лет застоя поднимал её с колен, а ещё – как активно вкладывался в город, став мэром после отставки Льюиса. И как бесследно исчез солнечным весенним утром... Сразу после на семью Валентайнов снежным комом повалилась череда подозрительных несчастий, в мгновение обратив их дом в скорбное родовое захоронение. Окончив школу в шумном мегаполисе, Марк принял решение вернуться туда, где прошло всё его детство – в тихую долину Стардью. Однако тихой она может называться лишь в его детских воспоминаниях. За годы тут всё изменилось до неузнаваемости: теперь после заката из тёмных углов выползают жуткие монстры, а по ночам на патрульные посты заступают бравые воины из гильдии Приключений. Марк знает: этот кошмар напрямую связан с таинственным исчезновением его отца, Ника, и мрачными секретами, которые хранил его прадед Ричард, но времени на спокойные поиски ответов уже совсем нет, ведь с каждым днём монстры становятся всё агрессивнее.",
        portraits: ["richard", "nick", "mark"],
        parallaxNames: ["Ричард", "Ник", "Марк"],
        parallaxPositions: ["left", "right", "center"],
        links: {
            album: "https://vk.com/album-236063317_309020913",
            discussion: "https://vk.com/topic-236063317_57232756",
            lore: "https://vk.com/@stardewoc-golden-fields"
        },
        cardStyle: "style3",
        parallaxImg: "images/parallax/mark.jpg"
    },
    
    "char2": {
        buttonName: "Ферма",
        locationName: "Ферма",
        emoji: "⛏️",
        description: "Фермер по случайности попадает туда, где быть не должен: на Вершину. Так он знакомится с Мистером Ки, но их первая встреча заканчивается очень быстро. Чудом выживая после падения с горы, Мерреф становится одержим желанием вернуться на вершину и отплатить Ки той же монетой.",
        portraits: ["merref"],
        parallaxNames: ["Мерреф"],
        parallaxPositions: ["center"],
        links: {
            album: "https://vk.com/album-236063317_309020852",
            discussion: "https://vk.com/topic-236063317_57282994",
            lore: "https://vk.com/@stardewoc-ferma-merref-rolman"
        },
        cardStyle: "style3",
        parallaxImg: "images/parallax/merref.jpg"
    },
    
    "char3": {
        buttonName: "Без солнца",
        locationName: "Без солнца",
        emoji: "🌓",
        description: "Франц Августин фон Шёнберг - готорский иммигрант; уважаемый аристократ на родине и безумный старик в Фернгилле. После смерти своей супруги и из-за ухудшения здоровья, Августин решился на переезд в хорошо ему знакомую, но совершенно чужую Республику. Здесь, в крошечном городке Пеликан, он фанатично проповедует учение Иобы, разыгрывает мистерии, жалеет себя и из последних сил хватается за остатки своего былого величия. Иногда ему кажется, что его жизнь — тоже чья-то злая игра. Но кто он такой, чтобы нарушать сценарий?",
        portraits: ["augustine"],
        parallaxNames: ["Августин"],
        parallaxPositions: ["center"],
        links: {
            album: "https://vk.com/album-236063317_309020786",
            discussion: "https://vk.com/topic-236063317_57232809",
            lore: "https://vk.com/@stardewoc-bez-solnca-avgustin"
        },
        cardStyle: "style3",
        parallaxImg: "images/parallax/augustine.jpg"
    },

    "char4": {
        buttonName: "Ферма Старлайт",
        locationName: "Ферма Старлайт",
        emoji: "🪴",
        description: "Ичи - фермер в городе Пеликан, которая проживает свои счастливые и размеренные будни. Девушка родилась и выросла в городе Зузу. Из-за проблем со здоровьем у её отца, ей пришлось бросить учебу и устроиться работать в Джоджа. Но проблемы на работе и в личной жизни сломили девушку и та чуть не совершила непоправимое. К счастью, магия дедушки и его письмо помогают ей, и та, уволившись, уехала на его ферму в Долину Стардью.",
        portraits: ["ichi"],
        parallaxNames: ["Ичи"],
        parallaxPositions: ["center"],
        links: {
            album: "https://vk.com/album-236063317_309020827",
            discussion: "https://vk.com/topic-236063317_57232784",
            lore: "https://vk.com/@stardewoc-starlight"
        },
        cardStyle: "style1-nopar",
        parallaxImg: "images/parallax/ichi.jpg"
    },

    "char5": {
        buttonName: "Сансет Бэй", 
        locationName: "Сансет Бэй", 
        emoji: "🌅",
        description: "Как часто судьба подкидывает нам интересные встречи и хитросплетения путей? Как многие выбираются из воды сухими? Ферма «Роуз Харт» в районе округа Сансет Бэй, что в Пеликане – тихое местечко со своими секретами. Жители Пеликана хорошо знают Джулс, но совершенно не знают, чего стоило ей обрести покой в том виде, который она имеет сейчас. Однако, покой ли это? Жизнь в маленьком городке, работа изо дня в день, избитый график – это все смешивается с человеческими взаимоотношениями, которые, будто молодой росток, пробиваются вверх к свету сквозь толстый слой пепла. За стабильностью и ясностью кроются призраки прошлого, преследующие девушку и по сей день. Вот только «палки в колеса» вставляет и настоящее. После долгой ночи всегда поднимается солнце, но поднимется ли оно в этот раз?",
        portraits: ["juls"],
        parallaxNames: ["Джулс"],
        parallaxPositions: ["center"],
        links: {
            album: "https://vk.com/album-236063317_309020818",
            discussion: "https://vk.com/topic-236063317_57283045",
            lore: "https://vk.com/@stardewoc-sanset-bei-dzhuls"
        },
        cardStyle: "style2",
        nopar: true,
        parallaxImg: "images/parallax/juls.jpg"
    },

    "char6": {
    buttonName: "Облачные Прерии",
    locationName: "Облачные Прерии",
    emoji: "☁️",
    description: "Сбежав от городской рутины, Томас возвращается туда, где в последний раз был много-много лет назад - на ферму своей покойной бабушки. Он бросил колледж, планы на будущее и даже старых друзей, чтобы обрести душевный покой и вылечиться от постоянной тревоги.\n\nОднако один друг у него всё же остался. Аки, обременённый такой же рутиной, согласился переехать вместе с Томасом. Так же веселее! Правда, ему никто не сказал, что придётся работать в два раза больше.\n\nВдвоём они уживаются на ферме и делят быт. Однако вскоре давно забытые тайны, окружавшие ферму, вновь дают о себе знать.",
    portraits: ["thomas", "aki"],
    parallaxNames: ["Томас", "Аки"],
    parallaxPositions: ["left", "right"],
    links: {
        album: "https://vk.com/album-236063317_309325287",
        discussion: "https://vk.com/topic-236063317_57282880",
        lore: "https://vk.com/@stardewoc-oblachnye-prerii-tomas-aki"
    },
    cardStyle: "style1",
    parallaxImg: "images/parallax/cloudy_meadows.jpg"
    },

    "char7": {
    buttonName: "Ферма Хуевая",
    locationName: "Ферма Хуевая",
    emoji: "✨",
    description: "Когда Микото перебралась из Калико в Пеликан и обосновалась на ферме у Коити, сразу почувствовала, что что-то здесь не чисто. То, что она искала, уже давно исчезло, или всё же прямо у неё под носом. \n\nОсобый интерес вызывает новый волшебник. Он явно занимается чем-то необычным, хоть и безнадёжно погряз в сожалениях по прошлому. А кто сейчас точно проживает свою лучшую жизнь под жарким солнышком? Канэсён. Которая и вдохновила Коити заниматься грядками.\n\nТак и остается, проживать повседневность здесь и сейчас с Коити. Или, по крупицам, узнавать, что же случилось до приезда Микоты в Пеликан.",
    portraits: ["mikoto", "kanesen", "wilson"],
    parallaxNames: ["Микото", "Канэсён", "Вилсон"],
    parallaxPositions: ["left", "right", "center"],
    links: {
        album: "https://vk.com/album-236063317_309020866",
        discussion: "https://vk.com/topic-236063317_57282926",
        lore: "https://vk.com/@stardewoc-ferma-huevaya-mikoto-kanesen-vilson"
    },
    cardStyle: "style1",
    parallaxImg: "images/parallax/hueva_farm.jpg"
    },

    "char8": {
    buttonName: "Изалкайн",
    locationName: "Изалкайн",
    emoji: "❄️",
    description: "Небольшой земельный участок, закрепивший за собой название «Изалкайн» ещё со времён Мёртвой Зимы, находится около горной реки. Когда-то здесь добывали руду для всего Пеликана, потому там до сих пор можно найти реликвии старых шахтёров. Сейчас ферма представляет из себя ухоженные, но всё ещё будто захваченные дикой природой (преимущественно хвойным лесом) земляные площадки на утёсах, соединённые выдолбленными в камне ступеньками и деревянными мостами. В северной части, на самой высоком участке земли стоит двухэтажный дом из светлого кирпича.\n\nУже несколько десятилетий \"Изалкайн\" принадлежит семье Харстад. Прошлый владелец, Феликс Харстад, отдал его в наследство своей племяннице Анезис, чтобы та не рванула обратно на фронт. История обитателей фермы рассказывается в двух временных линиях соответственно, одна происходит ещё в молодости Феликса, вторая спустя двадцать лет, после того, как участок перешёл во владение Анезис.",
    portraits: ["anezis", "feliks"],
    parallaxNames: ["Анезис", "Феликс"],
    parallaxPositions: ["left", "right"],
    links: {
        album: "https://vk.com/album-236063317_309020797",
        discussion: "https://vk.com/topic-236063317_57312342",
        lore: "https://vk.com/@stardewoc-izalkain-anezis-feliks"
    },
    cardStyle: "style1",
    parallaxImg: "images/parallax/izalkain.jpg"
},
"char9": {
    buttonName: "Мирное ранчо",
    locationName: "Мирное ранчо",
    emoji: "🍈",
    description: "Когда все твои стремления, смысл жизни, моральные принципы и целостность семьи за один час обрываются по случайности, кроме ужаса силы двигаться дает лишь чистая злость. На всех вокруг, на себя, на гадкую судьбу. Произошедшего не исправить, а жить так дальше - верный путь к концу, и Мэлон, сквозь пелену остервенения, это тоже понимал. С пониманием же приходит и осознанность, с осознанностью появляется страх.\n\nВернуться в прошлое - одновременно и боль, и утешение. Ранее столь любимая в теплые сезоны и ныне заброшенная на многие года дача близь долины Стардью стала решением, в последствии необходимым переездом, чтобы научиться жить на своих условиях, а не движимым чувствами. \n\nВ тишине луговых полей, меж мычания рогатого скота и журчания реки с тихим кряканьем уток, лечить душу становится легче. Среди природы, давних знакомых и новых друзей, где можно начать новую главу жизни, но не сжигать все предыдущие листы. Дабы помнить, тосковать, но идти дальше.\n\nВ тихом пруду и черти успокаиваются.",
    portraits: ["melon"],
    parallaxNames: ["Мэлон"],
    parallaxPositions: ["center"],
    links: {
        album: "https://vk.com/album-236063317_309020906",
        discussion: "https://vk.com/topic-236063317_57240018",
        lore: "https://vk.com/@stardewoc-mirnoe-rancho-melon"
    },
    cardStyle: "style2",
    parallaxImg: "images/parallax/peaceful_ranch.jpg"
},
"char10": {
    buttonName: "Ферма Даст",
    locationName: "Ферма Даст",
    emoji: "🐾",
    description: "Время идет вперед - мифические существа становятся одним целым с культурой современности, не смотря на наличие традиционных взглядов далеких восточноазиатских земель. Это позволяет некоторым из таких видов жить среди людей, отбросив дикие инстинкты прошлых веков. К тому же не только людям предписана неудача и жизненные трудности, но даже существа и монстры могут сталкиваться с несчастной судьбой сами того не желая. Одними из таких являются Милли и Эйден. Брат и сестра, которые прижились среди людей, большую часть жизни пряча свою настоящую кошачью натуру от чужих глаз. Пройдя через множества тяжелых испытаний в жизни они смогли покинуть свою родину и найти свое место в Фернгилле. Милли обрела покой в городе Пеликан, о котором так мечтала, и теперь старается успеть сделать все, чего она не могла позволить себе сделать раньше. Обрести настоящих друзей, семью, заняться своим хобби, и, в конце концов, быть собой, не скрывая свое происхождение. Эйден все еще проходит через сложный период, но для него главное чтобы сестра была счастлива, борясь за ее благополучие до конца.",
    portraits: ["millie", "eiden"],
    parallaxNames: ["Милли", "Эйден"],
    parallaxPositions: ["left", "right"],
    links: {
        album: "https://vk.com/album-236063317_309020871",
        discussion: "https://vk.com/topic-236063317_57312478",
        lore: "https://vk.com/@stardewoc-ferma-dast-milli-eiden"
    },
    cardStyle: "style1",
    parallaxImg: "images/parallax/dust_farm.jpg"
},
"char11": {
    buttonName: "Ферма Дзен",
    locationName: "Ферма Дзен",
    emoji: "💌",
    description: "Молли — молодая фермерша с упрямым блеском в глазах. Бывшая банкирша, бросившая перспективную работу ради наследства, она теперь живёт по своим правилам. Для хозяйки эта ферма не просто участок земли, а шанс начать с чистого листа.\n\nОна не скрывает гордости: её скромная ферма — это место, где растёт её семья. Муж Алекс и их дети — вот что теперь главное в её жизни. Трудоголичка до мозга костей, она успевает и за скотом присмотреть, и своими детишками заниматься, и новое платье сшить, Молли не умеет сидеть без дела. \n\nВ глубине души она всё ещё та девочка, грезившая о путешествиях, просто теперь её горизонт — это линия горизонта за полем.",
    portraits: ["molly"],
    parallaxNames: ["Молли"],
    parallaxPositions: ["center"],
    links: {
        album: "https://vk.ru/album-236063317_309020879",
        discussion: "https://vk.com/topic-236063317_57282918",
        lore: "#vk.com/@stardewoc-ferma-dzen-molli"
    },
    cardStyle: "style2-nopar",
    parallaxImg: "images/parallax/zen_farm.jpg"
},
"char12": {
    buttonName: "Вальдхав",
    locationName: "Вальдхав",
    emoji: "🦋",
    description: "Когда приехал Эйравель, сельско-хозяйственные земли окраины города Пеликан долгое время были погружены в забвение и охвачены диким лесом. Всего за несколько лет лес отступил, на месте руин выросла ферма Вальдхав. На территории чуть поодаль от основного дома, стоит курортный домик - его построили для того, кто планировал лишь отдыхать, но незаметно для себя остался насовсем. Ныне Эйравель и Мортен супруги - вместе держат хозяйство, бизнес, уже воспитывают детей.\n\nТерриториально участок находится недалеко от ранчо Марни, а ровно на против, на расстоянии проселочной дороги, ферма под названием Мирная. За время жизни Эйравеля в городке участок напротив, наоборот одиноко приходил в упадок, но относительно недавно и там появился новый хозяин.",
    portraits: ["morten", "eiravel"],
    parallaxNames: ["Мортен", "Эйравель"],
    parallaxPositions: ["left", "right"],
    links: {
        album: "https://vk.com/album-236063317_309020899",
        discussion: "https://vk.com/topic-236063317_57349757",
        lore: "https://vk.com/@stardewoc-valdhav-morten-eiravel"
    },
    cardStyle: "style1-nopar",
    parallaxImg: "images/parallax/waldhav.jpg"
},
"char13": {
    buttonName: "Штиль",
    locationName: "Штиль",
    emoji: "🪸",
    description: "Чужие стремления и победы никогда не доставляют той же радости, что и свои собственные. А когда ты не можешь спокойно жить и развиваться в своем родном городе, зная, что за каждым поворотом можно встретить горькое напоминание о прошлом, хочется убежать как можно дальше. Особенно когда это самое прошлое так и норовит найти тебя.\n\nС подачки единственного близкого друга, Аркадия сбежала от городской суеты в тихую долину, чтобы найти душевный покой и попытаться построить свою жизнь заново. Получится ли у нее, или старые тревоги окажутся сильнее, покажет только время.",
    portraits: ["arkadia"],
    parallaxNames: ["Аркадия"],
    parallaxPositions: ["center"],
    links: {
        album: "https://vk.com/album-236063317_309021269",
        discussion: "https://vk.com/topic-236063317_57330980",
        lore: "https://vk.com/@stardewoc-shtil-arkadiya"
    },
    cardStyle: "style1-nopar",
    parallaxImg: "images/parallax/calm.jpg"
},
"char14": {
    buttonName: "Собачья будка",
    locationName: "Собачья будка",
    emoji: "🎀",
    description: "Дай не умеющему готовить человеку пельмени, и он разогреет их в микроволновке. Примерно так происходила адаптация одного молодого человека, выпнутого с шеи родителей в (почти) суровую реальность. Причем, даже не по профессии!\n\nНа новом месте жительства Ванилин успел не только заставить старый дедовский дом всяким хламом, но и задолбать алголика до жизни по ЗОЖ, прогнуть под себя мэра соседнего городка, а также сорвать куш из целых двух (2!!!) рыжих людей в своё окружение.\n\nВ данный момент его дед в смятении, быть ему гордым или разочарованным.",
    portraits: ["vanilin"],
    parallaxNames: ["Ванилин"],
    parallaxPositions: ["center"],
    links: {
        album: "https://vk.com/album-236063317_309020809",
        discussion: "https://vk.com/topic-236063317_57330947",
        lore: "https://vk.com/@stardewoc-sobachya-budka-vanilin"
    },
    cardStyle: "style1",
    parallaxImg: "images/parallax/doghouse.jpg"
},
"char15": {
    buttonName: "Ферма Адище",
    locationName: "Ферма Адище",
    emoji: "💣",
    description: "Любить или быть любимым?\nЭтот вопрос часто всплывает в головах двух сестер. С детства они стремились быть любимыми, но со временем их подходы стали отличаться. Пока Крит старалась завоевать любовь безразличных родителей, доказывая свою ценность и значимость, Паприка окружила себя множеством знакомых, все больше времени проводя вне дома.\n\nТак или иначе, обе сестры разделяли чувство одиночества.",
    portraits: ["krit", "paprika"],
    parallaxNames: ["Крит", "Паприка"],
    parallaxPositions: ["left", "right"],
    links: {
        album: "https://vk.com/album-236063317_309020841",
        discussion: "https://vk.com/topic-236063317_57330829",
        lore: "https://vk.com/@stardewoc-ferma-adische-krit-paprika"
    },
    cardStyle: "style2",
    parallaxImg: "images/parallax/hell_farm.jpg"
},
"char16": {
    buttonName: "Горная Ферма",
    locationName: "Горная ферма",
    emoji: "🧸",
    description: "Издревле горы были жестоки к тем, кто надеялся их покорить. Эта черта была присуща и жителям горных вершин, обитавшим в долине Стардью, а в особенности девушке, чьи годы размеренно протекали на крутых заснеженных склонах. Скучающая Галатея была бы рада ответить на вопросы желающих, ведь она так давно ни с кем не общалась.",
    portraits: ["galatea"],
    parallaxNames: ["Галатея"],
    parallaxPositions: ["center"],
    links: {
        album: "https://vk.com/album-236063317_309350951",
        discussion: "https://vk.com/topic-236063317_57379582",
        lore: "https://vk.com/@stardewoc-gornaya-ferma-galateya"
    },
    cardStyle: "style1",
    parallaxImg: "images/parallax/mountain_farm.jpg"
},
"char17": {
    buttonName: "Звездное Серебро",
    locationName: "Звездное Серебро",
    emoji: "🌌",
    description: "Долина Звездной росы - место, сочетающее в себе противоречивое - многовековую историю народов, клубящуюся тенями под ногами у небольшого, сравнительно молодого городка, называющегося Пеликан, магию, обузданную немногими и механизмы, упрощающие жизнь многим жителям этого места. Именно в этом месте живут Таэль и Фаэрин, тень былого прошлого среди людей, не знакомых с этим прошлым, эльфы, объединенные дружбой из-за трагедии их племени. Они знают о Долине то, что не знают большинство жителей, однако, их знания обрывочны, неполны. Быть может, с их помощью вы сможете докопаться до истины того, что из себя представляет место, названное Долиной Звездной росы?",
    portraits: ["faerin", "tael"],
    parallaxNames: ["Таэль","Фаэрин"],
    parallaxPositions: ["left", "right"],
    links: {
        album: "https://vk.com/album-236063317_309020930",
        discussion: "https://vk.com/topic-236063317_57380999",
        lore: "https://vk.com/@stardewoc-zvezdnoe-serebro-tael-faerin"
    },
    cardStyle: "style1-nopar",
    parallaxImg: "images/parallax/silver_star.jpg"
},
}; 

// Данные портретов
const portraitImages = {
    "richard": "images/portraits/richard.jpg",
    "nick": "images/portraits/nick.jpg",
    "mark": "images/portraits/mark.jpg",
    "merref": "images/portraits/merref.jpg",
    "augustine": "images/portraits/augustine.jpg",
    "ichi": "images/portraits/ichi.jpg",
    "juls": "images/portraits/juls.jpg",
    "millie": "images/portraits/millie.jpg",
    "eiden": "images/portraits/eiden.jpg",
    "molly": "images/portraits/molly.jpg",
    "morten": "images/portraits/morten.jpg",
    "eiravel": "images/portraits/eiravel.jpg",
    "arkadia": "images/portraits/arkadia.jpg",
    "vanilin": "images/portraits/vanilin.jpg",
    "krit": "images/portraits/krit.jpg",
    "paprika": "images/portraits/paprika.jpg",
    "melon": "images/portraits/melon.jpg",
    "anezis": "images/portraits/anezis.jpg",
    "feliks": "images/portraits/feliks.jpg",
    "mikoto": "images/portraits/mikoto.jpg",
    "kanesen": "images/portraits/kanesen.jpg",
    "wilson": "images/portraits/wilson.jpg",
    "thomas": "images/portraits/thomas.jpg",
    "aki": "images/portraits/aki.jpg",
    "galatea": "images/portraits/galatea.jpg",
    "faerin": "images/portraits/faerin.jpg",
    "tael": "images/portraits/tael.jpg",
};



const sortedCharacters = Object.entries(charactersData).sort((a, b) => {
    const nameA = a[1].buttonName.toLowerCase();
    const nameB = b[1].buttonName.toLowerCase();
    return nameA.localeCompare(nameB, 'ru'); 
});


function generateSite() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    const cardsContainer = document.getElementById('cardsContainer');
    
    buttonsContainer.innerHTML = '';
    cardsContainer.innerHTML = '';
    
    
    const sortedCharacters = Object.entries(charactersData).sort((a, b) => {
        const nameA = a[1].buttonName.toLowerCase();
        const nameB = b[1].buttonName.toLowerCase();
        return nameA.localeCompare(nameB, 'ru');
    });
    
    
    for (let [charKey, data] of sortedCharacters) {
        
        
        const button = document.createElement('div');
        button.className = 'character-button';
        button.setAttribute('data-character', charKey);
        button.setAttribute('data-portraits', data.portraits.join(','));
        button.setAttribute('data-names', data.parallaxNames.join(','));
        
        button.innerHTML = `
            <img src="images/button_normal.png" alt="Кнопка" class="button-default">
            <img src="images/button_hover.png" alt="Кнопка" class="button-hover">
            <span class="button-text">
                <span class="button-emoji">${data.emoji || ''}</span>
                <span class="button-name">${data.buttonName}</span>
            </span>
        `;
        
        buttonsContainer.appendChild(button);
        
        
        const card = document.createElement('div');
        card.className = `character-card ${data.cardStyle || 'style1'}`;
        card.id = `${charKey}-card`;
        
        
        const isNoPar = data.cardStyle && data.cardStyle.includes('nopar');
        
       if (isNoPar) {
    
    let portraitsHTML = '';
    
    
    if (data.portraits && data.parallaxNames) {
        for (let i = 0; i < data.portraits.length; i++) {
            const portraitKey = data.portraits[i];
            const portraitName = data.parallaxNames[i] || portraitKey;
            const portraitImg = portraitImages[portraitKey] || 'images/default.jpg';
            
            portraitsHTML += `
                <div class="portrait-side-item">
                    <img src="${portraitImg}" class="portrait-side-img" alt="${portraitName}">
                    <div class="name-plate-card">
                        <img src="images/char_name.png" alt="Рамка">
                        <span class="plate-text">${portraitName}</span>
                    </div>
                </div>
            `;
        }
    }
    
    
    let cardBg = 'images/card_1_nopar.png';
    let nameBg = 'images/setting_name.png';
    let nameBgClass = '';
    let descriptionColor = '';
    
    if (data.cardStyle === 'style2-nopar') {
        cardBg = 'images/card_2_nopar.png';
    } else if (data.cardStyle === 'style3-nopar') {
        cardBg = 'images/card_3_nopar.png';
        nameBgClass = 'style3';
    }
    
    card.innerHTML = `
        <img src="${cardBg}" alt="Карточка" class="card-background">
        
        <div class="portraits-sidebar">
            ${portraitsHTML}
        </div>
        
        <div class="card-text-content">
            <div class="name-with-bg">
                <img src="${nameBg}" alt="Рамка" class="name-bg" ${data.cardStyle === 'style3-nopar' ? 'style="display: none;"' : ''}>
                <span class="name-bg-text ${nameBgClass}">
                    <span class="name-emoji">${data.emoji || ''}</span>
                    <span class="name-location">${data.locationName}</span>
                </span>
            </div>
            
            <div class="character-description">
                ${data.description.split('\n').map(p => `<p>${p}</p>`).join('')}
            </div>
            
            <div class="links-container">
                <div class="links-left">
                    <a href="${data.links.album}" target="_blank" class="card-link-button">
                        <img src="images/button_normal.png" alt="Кнопка" class="button-default">
                        <img src="images/button_hover.png" alt="Кнопка" class="button-hover">
                        <span class="link-text">Альбом</span>
                    </a>
                    <a href="${data.links.discussion}" target="_blank" class="card-link-button">
                        <img src="images/button_normal.png" alt="Кнопка" class="button-default">
                        <img src="images/button_hover.png" alt="Кнопка" class="button-hover">
                        <span class="link-text">Обсуждение</span>
                    </a>
                </div>
                <div class="links-right">
                    <a href="${data.links.lore}" target="_blank" class="card-link-button">
                        <img src="images/button_normal.png" alt="Кнопка" class="button-default">
                        <img src="images/button_hover.png" alt="Кнопка" class="button-hover">
                        <span class="link-text">Лорная статья</span>
                    </a>
                </div>
            </div>
        </div>
        
        <img src="images/back.png" alt="Закрыть" class="close-button">
    `;

        } else {
            
            let tagsHTML = '';
            data.parallaxNames.forEach((name, index) => {
                const position = data.parallaxPositions[index] || 'center';
                tagsHTML += `
                    <div class="name-tag ${position}-tag">
                        <img src="images/char_name_2.png" alt="Рамка" class="tag-bg">
                        <span class="tag-text">${name}</span>
                    </div>
                `;
            });
            
            card.innerHTML = `
                <img src="images/card_3.png" alt="Карточка" class="card-background">
                
                <div class="parallax-container">
                    <img src="${data.parallaxImg || 'images/mark.jpg'}" alt="Пейзаж" class="parallax-image" id="parallax-${charKey}">
                </div>
                
                <div class="name-tags">
                    ${tagsHTML}
                </div>
                
                <div class="card-text-content">
                    <div class="name-with-bg">
                        <img src="images/setting_name.png" alt="Рамка" class="name-bg" style="display: none;">
                        <span class="name-bg-text">
                            <span class="name-emoji">${data.emoji || ''}</span>
                            <span class="name-location">${data.locationName}</span>
                        </span>
                    </div>
                    
                    <div class="character-description">
                        ${data.description.split('\n').map(p => `<p>${p}</p>`).join('')}
                    </div>
                    
                    <div class="links-container">
                        <div class="links-left">
                            <a href="${data.links.album}" target="_blank" class="card-link-button">
                                <img src="images/button_normal_2.png" alt="Кнопка" class="button-default">
                                <img src="images/button_hover_2.png" alt="Кнопка" class="button-hover">
                                <span class="link-text">Альбом</span>
                            </a>
                            <a href="${data.links.discussion}" target="_blank" class="card-link-button">
                                <img src="images/button_normal_2.png" alt="Кнопка" class="button-default">
                                <img src="images/button_hover_2.png" alt="Кнопка" class="button-hover">
                                <span class="link-text">Обсуждение</span>
                            </a>
                        </div>
                        <div class="links-right">
                            <a href="${data.links.lore}" target="_blank" class="card-link-button">
                                <img src="images/button_normal_2.png" alt="Кнопка" class="button-default">
                                <img src="images/button_hover_2.png" alt="Кнопка" class="button-hover">
                                <span class="link-text">Лорная статья</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <img src="images/back.png" alt="Закрыть" class="close-button">
            `;
        }
        
        cardsContainer.appendChild(card);
    }
    
    updateElementReferences();
    initParallax();
}


let buttons, cards, overlay, closeButtons, previewContainer, portraitsRow;

function updateElementReferences() {
    buttons = document.querySelectorAll('.character-button');
    cards = document.querySelectorAll('.character-card');
    overlay = document.getElementById('overlay');
    closeButtons = document.querySelectorAll('.close-button');
    previewContainer = document.getElementById('previewContainer');
    portraitsRow = document.getElementById('portraitsRow');
    
    attachEventListeners();
}


let isClosing = false;
let previewTimer;
let currentButton = null;

function attachEventListeners() {
    
    function closeAll() {
        if (isClosing) return;
        
        cards.forEach(card => {
            if (card.classList.contains('active')) {
                card.classList.add('closing');
                card.classList.remove('active');
            }
        });
        
        isClosing = true;
        overlay.classList.remove('active');
        
        setTimeout(() => {
            cards.forEach(card => {
                card.classList.remove('closing');
            });
            isClosing = false;
        }, 200);
    }
    
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (isClosing) return;
            
            const charId = this.getAttribute('data-character');
            const card = document.getElementById(charId + '-card');
            
            cards.forEach(c => {
                if (c.classList.contains('active')) {
                    c.classList.add('closing');
                    c.classList.remove('active');
                }
            });
            
            setTimeout(() => {
                cards.forEach(c => c.classList.remove('closing'));
                if (card) {
                    card.classList.add('active');
                    overlay.classList.add('active');
                }
            }, 200);
            
            hidePreview();
        });
        
        
        button.addEventListener('mouseenter', function() {
            if (previewTimer) clearTimeout(previewTimer);
            currentButton = this;
            showPreview(this);
        });
        
        button.addEventListener('mouseleave', function() {
            previewTimer = setTimeout(() => {
                if (!previewContainer.matches(':hover')) {
                    hidePreview();
                }
            }, 100);
        });
    });
    
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAll();
        });
    });
    
    
    overlay.addEventListener('click', closeAll);
    
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    
    previewContainer.addEventListener('mouseenter', function() {
        if (previewTimer) clearTimeout(previewTimer);
    });
    
    previewContainer.addEventListener('mouseleave', function() {
        previewTimer = setTimeout(() => {
            hidePreview();
        }, 100);
    });
    
    portraitsRow.addEventListener('click', function(e) {
        const portraitItem = e.target.closest('.portrait-item');
        if (portraitItem && currentButton) {
            const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            currentButton.dispatchEvent(event);
            hidePreview();
        }
    });
}


function showPreview(button) {
    const portraitsAttr = button.getAttribute('data-portraits');
    const namesAttr = button.getAttribute('data-names');
    
    if (!portraitsAttr) return;
    
    const portraitKeys = portraitsAttr.split(',');
    const nameList = namesAttr ? namesAttr.split(',') : [];
    
    portraitsRow.innerHTML = '';
    portraitsRow.className = 'portraits-row';
    
    
    if (portraitKeys.length === 2) {
        portraitsRow.classList.add('two-portraits');
    } else if (portraitKeys.length === 3) {
        portraitsRow.classList.add('three-portraits');
    }
    
    portraitKeys.forEach((key, index) => {
        const portraitInfo = portraitImages[key.trim()];
        if (!portraitInfo) return;
        
        const portraitItem = document.createElement('div');
        portraitItem.className = 'portrait-item';
        
        const portraitImg = document.createElement('img');
        portraitImg.src = portraitInfo;
        portraitImg.alt = key;
        portraitImg.className = 'preview-portrait';
        
        const namePlate = document.createElement('div');
        namePlate.className = 'name-plate';
        
        const nameImg = document.createElement('img');
        nameImg.src = 'images/char_name.png';
        nameImg.alt = 'Рамка имени';
        
        const nameText = document.createElement('span');
        nameText.className = 'name-text';
        nameText.textContent = nameList[index] || key;
        
        namePlate.appendChild(nameImg);
        namePlate.appendChild(nameText);
        
        portraitItem.appendChild(portraitImg);
        portraitItem.appendChild(namePlate);
        
        portraitsRow.appendChild(portraitItem);
    });
    
    previewContainer.classList.add('active');
}

function hidePreview() {
    previewContainer.classList.remove('active');
}


function initParallax() {
    cards.forEach(card => {
        const parallaxImage = card.querySelector('.parallax-image');
        if (!parallaxImage) return;
        
        card.addEventListener('mousemove', function(e) {
            if (!this.classList.contains('active')) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 30;
            const moveY = (y - centerY) / 30;
            
            parallaxImage.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) return;
            parallaxImage.style.transform = 'scale(1.1) translate(0, 0)';
        });
    });
}


function initScrollbar() {
    const scrollTrack = document.getElementById('scrollTrack');
    const scrollThumb = document.getElementById('scrollThumb');
    const content = document.getElementById('frameContent');
    
    if (!scrollTrack || !scrollThumb || !content) return;
    
    let isDragging = false;
    const thumbHeight = 72; 
    
    function updateThumbPosition() {
        const scrollPercent = content.scrollTop / (content.scrollHeight - content.clientHeight);
        const maxTop = scrollTrack.clientHeight - thumbHeight;
        const thumbTop = scrollPercent * maxTop;
        scrollThumb.style.top = thumbTop + 'px';
    }
    
    content.addEventListener('scroll', updateThumbPosition);
    
    scrollThumb.addEventListener('mousedown', function(e) {
        isDragging = true;
        this.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const trackRect = scrollTrack.getBoundingClientRect();
        let newTop = e.clientY - trackRect.top - thumbHeight / 2;
        newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
        
        scrollThumb.style.top = newTop + 'px';
        
        const scrollPercent = newTop / (trackRect.height - thumbHeight);
        const maxScroll = content.scrollHeight - content.clientHeight;
        content.scrollTop = scrollPercent * maxScroll;
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
        scrollThumb.style.cursor = 'grab';
    });
    
    scrollTrack.addEventListener('click', function(e) {
        if (e.target === scrollThumb) return;
        
        const trackRect = this.getBoundingClientRect();
        const clickY = e.clientY - trackRect.top;
        let newTop = clickY - thumbHeight / 2;
        newTop = Math.max(0, Math.min(newTop, trackRect.height - thumbHeight));
        
        scrollThumb.style.top = newTop + 'px';
        
        const scrollPercent = newTop / (trackRect.height - thumbHeight);
        const maxScroll = content.scrollHeight - content.clientHeight;
        content.scrollTop = scrollPercent * maxScroll;
    });
    
    
    setTimeout(updateThumbPosition, 100);
}


document.addEventListener('DOMContentLoaded', function() {
    generateSite();
    setTimeout(initScrollbar, 500);
});



function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchResults) {
        console.log('Элементы поиска не найдены');
        return;
    }
    
    console.log('Поиск инициализирован');
    
    
    function normalizeEmoji(emoji) {
        if (!emoji) return '';
        
        return emoji.replace(/\uFE0F/g, '');
    }
    
    
function isSimilarEmoji(emoji1, emoji2) {
    
    const norm1 = normalizeEmoji(emoji1);
    const norm2 = normalizeEmoji(emoji2);
    
    const similarGroups = [
        ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'],
        
        ['☁', '☁️', '🌤', '⛅', '🌥', '🌦', '🌧', '🌨', '🌩', '🌪', '🌫', '🌬'],

        ['⛏', '⛏️', '🔨', '⚒️'],
        
        ['❄', '❄️', '❅', '❆'],
        
        ['💌', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💘', '💝', '💖', '💗', '💓', '💞', '💕'],
        
        ['🪴', '🌱', '🌿', '☘️', '🍀'],

        ['🔑', '🗝️', '🔐'],
        
        ['💣', '🧨', '💥'],
        
        ['🪸', '🐚', '🐠', '🐟', '🐡'],
        
        ['🎀', '🎗️', '🎁'],

        ['🌅', '🌄', '🌇', '🌆'],

        ['✨', '⭐', '🌟', '💫'],

        ['🌌', '🌠', '🌃'],
    ];
    
    for (const group of similarGroups) {
        const groupNorm = group.map(normalizeEmoji);
        if (groupNorm.includes(norm1) && groupNorm.includes(norm2)) {
            return true;
        }
    }
    return false;
}
    
    
    const searchData = [];
    const emojiMap = new Map();
    
    for (let [charKey, data] of Object.entries(charactersData)) {
        
        searchData.push({
            type: 'location',
            name: data.locationName,
            charKey: charKey,
            icon: data.parallaxImg || 'images/mark.jpg',
            emoji: data.emoji || ''
        });
        
        
        if (data.emoji) {
            const normalizedEmoji = normalizeEmoji(data.emoji);
            emojiMap.set(normalizedEmoji, {
                charKey: charKey,
                name: data.locationName,
                icon: data.parallaxImg || 'images/mark.jpg'
            });
            emojiMap.set(data.emoji, {
                charKey: charKey,
                name: data.locationName,
                icon: data.parallaxImg || 'images/mark.jpg'
            });
        }
        
        
        if (data.parallaxNames && data.portraits) {
            data.parallaxNames.forEach((name, index) => {
                const portraitKey = data.portraits[index];
                searchData.push({
                    type: 'character',
                    name: name,
                    location: data.locationName,
                    charKey: charKey,
                    icon: portraitImages[portraitKey] || 'images/default.jpg',
                    emoji: ''
                });
            });
        }
    }
    
    console.log('Данные для поиска загружены');
    console.log('Доступные эмодзи:', Array.from(emojiMap.keys()));
    
    
    function isEmoji(char) {
        if (!char) return false;
        
        const normalized = normalizeEmoji(char);
        
        if (emojiMap.has(normalized) || emojiMap.has(char)) return true;
        
        const codePoint = char.codePointAt(0);
        
        const ranges = [
            (codePoint >= 0x1F300 && codePoint <= 0x1F5FF),
            (codePoint >= 0x1F600 && codePoint <= 0x1F64F),
            (codePoint >= 0x1F680 && codePoint <= 0x1F6FF),
            (codePoint >= 0x2600 && codePoint <= 0x26FF),
            (codePoint >= 0x2700 && codePoint <= 0x27BF),
            (codePoint >= 0x1F900 && codePoint <= 0x1F9FF),
            (codePoint >= 0x1FA70 && codePoint <= 0x1FAFF),
            (codePoint >= 0x1F000 && codePoint <= 0x1F02F),
            (codePoint >= 0x1F0A0 && codePoint <= 0x1F0FF),
        ];
        
        if (ranges.some(v => v === true)) return true;
        
        const yourEmojis = [
            '🔑', '⛏', '⛏️', '🌓', '🪴', '🌅', '☁', '☁️', '✨', '❄', '❄️', '🍈', 
            '🐾', '💌', '🦋', '🪸', '🎀', '💣', '🧸', '🌌'
        ];
        
        return yourEmojis.includes(normalized) || yourEmojis.includes(char);
    }
    
    
    function performSearch(query) {
        if (!query || query.length < 1) {
            searchResults.classList.remove('active');
            return;
        }
        
        console.log('Поиск по запросу:', query);
        
        const chars = Array.from(query);
        let foundEmoji = null;
        
        for (let char of chars) {
            if (isEmoji(char)) {
                foundEmoji = char;
                break;
            }
        }
        
        if (foundEmoji) {
            console.log('Найден эмодзи в запросе:', foundEmoji);
            
            const normalizedFound = normalizeEmoji(foundEmoji);
            let emojiData = emojiMap.get(foundEmoji);
            if (!emojiData) {
                emojiData = emojiMap.get(normalizedFound);
            }
            
            if (emojiData) {
                
                const data = emojiData;
                searchResults.innerHTML = `
                    <div class="search-result-item emoji-result occupied" data-char="${data.charKey}">
                        <div class="emoji-large">${foundEmoji}</div>
                        <div class="search-result-text">
                            <div class="search-result-name">${data.name}</div>
                            <div class="search-result-type" style="color: #ff6b6b;">🔴 Эмодзи занят</div>
                        </div>
                    </div>
                `;
                
                const resultItem = searchResults.querySelector('.emoji-result.occupied');
                if (resultItem) {
                    resultItem.addEventListener('click', function() {
                        const charKey = this.getAttribute('data-char');
                        const button = document.querySelector(`.character-button[data-character="${charKey}"]`);
                        if (button) {
                            button.click();
                            searchInput.value = '';
                            searchResults.classList.remove('active');
                        }
                    });
                }
                
                searchResults.classList.add('active');
                return;
            } else {
                
                let similarData = null;
                let similarEmoji = null;
                for (let [key, value] of emojiMap) {
                    if (isSimilarEmoji(foundEmoji, key)) {
                        similarData = value;
                        similarEmoji = key;
                        break;
                    }
                }
                
                if (similarData) {
                    searchResults.innerHTML = `
                        <div class="search-result-item emoji-result occupied" data-char="${similarData.charKey}">
                            <div class="emoji-large">${foundEmoji}</div>
                            <div class="search-result-text">
                                <div class="search-result-name">${similarData.name}</div>
                                <div class="search-result-type" style="color: #ffaa00;">⚠️ Похож на занятый эмодзи. Уточните у админов возможность использования. (${similarEmoji})</div>
                            </div>
                        </div>
                    `;
                    
                    const resultItem = searchResults.querySelector('.emoji-result.occupied');
                    if (resultItem) {
                        resultItem.addEventListener('click', function() {
                            const charKey = this.getAttribute('data-char');
                            const button = document.querySelector(`.character-button[data-character="${charKey}"]`);
                            if (button) {
                                button.click();
                                searchInput.value = '';
                                searchResults.classList.remove('active');
                            }
                        });
                    }
                    
                    searchResults.classList.add('active');
                    return;
                }
                
                
                searchResults.innerHTML = `
                    <div class="search-result-item emoji-result free">
                        <div class="emoji-large">${foundEmoji}</div>
                        <div class="search-result-text">
                            <div class="search-result-name" style="color: #6bff6b;">Эмодзи свободен!</div>
                            <div class="search-result-type" style="color: #aaa;">✅ Можно использовать</div>
                        </div>
                    </div>
                `;
                
                searchResults.classList.add('active');
                return;
            }
        }
        
        
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        const matches = searchData.filter(item => 
            item.name.toLowerCase().includes(lowerQuery)
        ).slice(0, 8);
        
        if (matches.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">Ничего не найдено</div>';
            searchResults.classList.add('active');
            return;
        }
        
        searchResults.innerHTML = matches.map(item => {
            const icon = item.icon || 'images/default.jpg';
            
            if (item.type === 'location') {
                return `
                    <div class="search-result-item" data-char="${item.charKey}">
                        <img src="${icon}" class="search-result-icon">
                        <div class="search-result-text">
                            <div class="search-result-name">${item.emoji ? item.emoji + ' ' : ''}${item.name}</div>
                            <div class="search-result-type">Сеттинг</div>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="search-result-item" data-char="${item.charKey}">
                        <img src="${icon}" class="search-result-icon">
                        <div class="search-result-text">
                            <div class="search-result-name">${item.name}</div>
                            <div class="search-result-location">${item.location}</div>
                            <div class="search-result-type">Персонаж</div>
                        </div>
                    </div>
                `;
            }
        }).join('');
        
        searchResults.classList.add('active');
        
        document.querySelectorAll('.search-result-item[data-char]').forEach(item => {
            item.addEventListener('click', function() {
                const charKey = this.getAttribute('data-char');
                const button = document.querySelector(`.character-button[data-character="${charKey}"]`);
                if (button) {
                    button.click();
                    searchInput.value = '';
                    searchResults.classList.remove('active');
                }
            });
        });
    }
    
    const oldHandler = searchInput._searchHandler;
    if (oldHandler) {
        searchInput.removeEventListener('input', oldHandler);
    }
    
    searchInput._searchHandler = function(e) {
        performSearch(e.target.value);
    };
    
    searchInput.addEventListener('input', searchInput._searchHandler);
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const firstResult = document.querySelector('.search-result-item');
            if (firstResult) {
                firstResult.click();
            }
        }
    });
    
    console.log('Поиск готов к работе');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен');
    generateSite();
    setTimeout(() => {
        initScrollbar();
        initSearch(); 
        console.log('Все функции инициализированы');
    }, 500);
});



function showPreview(button) {
    const portraitsAttr = button.getAttribute('data-portraits');
    const namesAttr = button.getAttribute('data-names');
    
    if (!portraitsAttr) return;
    
    const portraitKeys = portraitsAttr.split(',');
    const nameList = namesAttr ? namesAttr.split(',') : [];
    
    portraitsRow.innerHTML = '';
    portraitsRow.className = 'portraits-row';
    
    
    if (portraitKeys.length === 1) {
        portraitsRow.classList.add('one-portrait');
    } else if (portraitKeys.length === 2) {
        portraitsRow.classList.add('two-portraits');
    } else if (portraitKeys.length === 3) {
        portraitsRow.classList.add('three-portraits');
    } else if (portraitKeys.length === 4) {
        portraitsRow.classList.add('four-portraits');
    } else {
        portraitsRow.classList.add('many-portraits');
    }
    
    portraitKeys.forEach((key, index) => {
        const portraitInfo = portraitImages[key.trim()];
        if (!portraitInfo) return;
        
        const portraitItem = document.createElement('div');
        portraitItem.className = 'portrait-item';
        
        const portraitImg = document.createElement('img');
        portraitImg.src = portraitInfo;
        portraitImg.alt = key;
        portraitImg.className = 'preview-portrait';
        
        const namePlate = document.createElement('div');
        namePlate.className = 'name-plate';
        
        const nameImg = document.createElement('img');
        nameImg.src = 'images/char_name.png';
        nameImg.alt = 'Рамка имени';
        
        const nameText = document.createElement('span');
        nameText.className = 'name-text';
        nameText.textContent = nameList[index] || key;
        
        namePlate.appendChild(nameImg);
        namePlate.appendChild(nameText);
        
        portraitItem.appendChild(portraitImg);
        portraitItem.appendChild(namePlate);
        
        portraitsRow.appendChild(portraitItem);
    });
    
    previewContainer.classList.add('active');
}



function openRandomSetting() {
    
    const settingButtons = document.querySelectorAll('.character-button');
    
    if (settingButtons.length === 0) return;
    
    
    const randomIndex = Math.floor(Math.random() * settingButtons.length);
    const randomButton = settingButtons[randomIndex];
    
    
    randomButton.click();
    
    
    randomButton.style.transform = 'scale(1.05)';
    setTimeout(() => {
        randomButton.style.transform = '';
    }, 300);
}


document.addEventListener('DOMContentLoaded', function() {
    generateSite();
    setTimeout(() => {
        initScrollbar();
        initSearch();
        
        
        const randomBtn = document.getElementById('randomButton');
        if (randomBtn) {
            randomBtn.addEventListener('click', openRandomSetting);
        }
        
        console.log('Все функции инициализированы');
    }, 500);
});