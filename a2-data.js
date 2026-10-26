// A2 deck: 1000 exam words (Milas Ellinika). Static, not synced with Notion.
const A2_VOCAB = [
  {
    "greek": "η αγάπη",
    "russian": "любовь",
    "type": "noun"
  },
  {
    "greek": "η αγγελία",
    "russian": "объявление",
    "type": "noun"
  },
  {
    "greek": "η αγελάδα",
    "russian": "корова",
    "type": "noun"
  },
  {
    "greek": "η αγορά",
    "russian": "покупка, рынок",
    "type": "noun"
  },
  {
    "greek": "το αγόρι",
    "russian": "мальчик, парень",
    "type": "noun"
  },
  {
    "greek": "ο αγώνας",
    "russian": "соревнование, матч, борьба",
    "type": "noun"
  },
  {
    "greek": "η άδεια",
    "russian": "отпуск, разрешение",
    "type": "noun"
  },
  {
    "greek": "η αδελφή",
    "russian": "сестра",
    "type": "noun"
  },
  {
    "greek": "ο αδελφός",
    "russian": "брат",
    "type": "noun"
  },
  {
    "greek": "ο αέρας",
    "russian": "воздух, ветер",
    "type": "noun"
  },
  {
    "greek": "το αεροδρόμιο",
    "russian": "аэропорт",
    "type": "noun"
  },
  {
    "greek": "το αεροπλάνο",
    "russian": "самолёт",
    "type": "noun"
  },
  {
    "greek": "το άθλημα",
    "russian": "вид спорта",
    "type": "noun"
  },
  {
    "greek": "ο αθλητής",
    "russian": "спортсмен",
    "type": "noun"
  },
  {
    "greek": "ο αθλητισμός",
    "russian": "спорт",
    "type": "noun"
  },
  {
    "greek": "η αίθουσα",
    "russian": "зал, аудитория",
    "type": "noun"
  },
  {
    "greek": "η αίτηση",
    "russian": "заявление, просьба",
    "type": "noun"
  },
  {
    "greek": "το αλάτι",
    "russian": "соль",
    "type": "noun"
  },
  {
    "greek": "η αλήθεια",
    "russian": "правда",
    "type": "noun"
  },
  {
    "greek": "το άλογο",
    "russian": "лошадь",
    "type": "noun"
  },
  {
    "greek": "η ανακοίνωση",
    "russian": "объявление, сообщение",
    "type": "noun"
  },
  {
    "greek": "το αναμνηστικό",
    "russian": "сувенир",
    "type": "noun"
  },
  {
    "greek": "ο άνεμος",
    "russian": "ветер",
    "type": "noun"
  },
  {
    "greek": "η ανησυχία",
    "russian": "беспокойство, тревога",
    "type": "noun"
  },
  {
    "greek": "ο άνθρωπος",
    "russian": "человек",
    "type": "noun"
  },
  {
    "greek": "το αντίγραφο",
    "russian": "копия, экземпляр",
    "type": "noun"
  },
  {
    "greek": "ο άντρας",
    "russian": "мужчина, муж",
    "type": "noun"
  },
  {
    "greek": "η αποβάθρα",
    "russian": "платформа",
    "type": "noun"
  },
  {
    "greek": "το απόγευμα",
    "russian": "послеполуденное время, вечер",
    "type": "noun"
  },
  {
    "greek": "η απόδειξη",
    "russian": "чек, квитанция",
    "type": "noun"
  },
  {
    "greek": "η αποτυχία",
    "russian": "неудача, провал",
    "type": "noun"
  },
  {
    "greek": "η άποψη",
    "russian": "мнение, точка зрения",
    "type": "noun"
  },
  {
    "greek": "το άρθρο",
    "russian": "статья, артикль",
    "type": "noun"
  },
  {
    "greek": "ο αριθμός",
    "russian": "число, номер",
    "type": "noun"
  },
  {
    "greek": "το αρνάκι",
    "russian": "ягненок, баранина",
    "type": "noun"
  },
  {
    "greek": "το ασανσέρ",
    "russian": "лифт",
    "type": "noun"
  },
  {
    "greek": "το αστέρι",
    "russian": "звезда",
    "type": "noun"
  },
  {
    "greek": "η αστυνομία",
    "russian": "полиция",
    "type": "noun"
  },
  {
    "greek": "ο αστυνομικός",
    "russian": "полицейский",
    "type": "noun"
  },
  {
    "greek": "το ατύχημα",
    "russian": "авария, несчастный случай",
    "type": "noun"
  },
  {
    "greek": "το αυγό",
    "russian": "яйцо",
    "type": "noun"
  },
  {
    "greek": "ο Αύγουστος",
    "russian": "август",
    "type": "noun"
  },
  {
    "greek": "η αυλή",
    "russian": "двор",
    "type": "noun"
  },
  {
    "greek": "το αυτί",
    "russian": "ухо",
    "type": "noun"
  },
  {
    "greek": "το αυτοκίνητο",
    "russian": "машина, автомобиль",
    "type": "noun"
  },
  {
    "greek": "το αφεντικό",
    "russian": "босс, начальник",
    "type": "noun"
  },
  {
    "greek": "η άφιξη",
    "russian": "прибытие",
    "type": "noun"
  },
  {
    "greek": "ο βαθμός",
    "russian": "оценка,",
    "type": "noun"
  },
  {
    "greek": "η βαλίτσα",
    "russian": "чемодан",
    "type": "noun"
  },
  {
    "greek": "το βενζινάδικο",
    "russian": "заправочная станция",
    "type": "noun"
  },
  {
    "greek": "το βιβλίο",
    "russian": "книга",
    "type": "noun"
  },
  {
    "greek": "η βιβλιοθήκη",
    "russian": "библиотека",
    "type": "noun"
  },
  {
    "greek": "το βίντεο",
    "russian": "видео",
    "type": "noun"
  },
  {
    "greek": "η βιολογία",
    "russian": "биология",
    "type": "noun"
  },
  {
    "greek": "η βοήθεια",
    "russian": "помощь",
    "type": "noun"
  },
  {
    "greek": "ο βοηθός",
    "russian": "помощник, помощница",
    "type": "noun"
  },
  {
    "greek": "η βόλτα",
    "russian": "прогулка",
    "type": "noun"
  },
  {
    "greek": "το βουνό",
    "russian": "гора",
    "type": "noun"
  },
  {
    "greek": "το βούτυρο",
    "russian": "масло (сливочное)",
    "type": "noun"
  },
  {
    "greek": "η βραδιά",
    "russian": "вечер (мероприятие)",
    "type": "noun"
  },
  {
    "greek": "το βραδινό",
    "russian": "ужин",
    "type": "noun"
  },
  {
    "greek": "το βράδυ",
    "russian": "вечер, ночь",
    "type": "noun"
  },
  {
    "greek": "η βροχή",
    "russian": "дождь",
    "type": "noun"
  },
  {
    "greek": "η βρύση",
    "russian": "кран, водопроводный кран",
    "type": "noun"
  },
  {
    "greek": "το γάλα",
    "russian": "молоко",
    "type": "noun"
  },
  {
    "greek": "ο γάμος",
    "russian": "свадьба, бракосочетание",
    "type": "noun"
  },
  {
    "greek": "ο γείτονας",
    "russian": "сосед",
    "type": "noun"
  },
  {
    "greek": "η γειτονιά",
    "russian": "район, квартал",
    "type": "noun"
  },
  {
    "greek": "τα γενέθλια",
    "russian": "день рождения",
    "type": "noun"
  },
  {
    "greek": "η γέννηση",
    "russian": "рождение",
    "type": "noun"
  },
  {
    "greek": "η γέφυρα",
    "russian": "мост",
    "type": "noun"
  },
  {
    "greek": "η γεωργία",
    "russian": "земледелие,",
    "type": "noun"
  },
  {
    "greek": "το γήπεδο",
    "russian": "стадион",
    "type": "noun"
  },
  {
    "greek": "η γιαγιά",
    "russian": "бабушка",
    "type": "noun"
  },
  {
    "greek": "ο γιατρός",
    "russian": "врач",
    "type": "noun"
  },
  {
    "greek": "η γιορτή",
    "russian": "праздник",
    "type": "noun"
  },
  {
    "greek": "το γλυκό",
    "russian": "десерт, сладкое",
    "type": "noun"
  },
  {
    "greek": "η γλώσσα",
    "russian": "язык",
    "type": "noun"
  },
  {
    "greek": "η γνώμη",
    "russian": "мнение",
    "type": "noun"
  },
  {
    "greek": "η γνώση",
    "russian": "знание, знания",
    "type": "noun"
  },
  {
    "greek": "ο γονιός",
    "russian": "родитель",
    "type": "noun"
  },
  {
    "greek": "το γράμμα",
    "russian": "письмо, буква",
    "type": "noun"
  },
  {
    "greek": "ο γραμματέας",
    "russian": "секретарь",
    "type": "noun"
  },
  {
    "greek": "το γραμματόσημο",
    "russian": "почтовая марка",
    "type": "noun"
  },
  {
    "greek": "το γυμνάσιο",
    "russian": "гимназия",
    "type": "noun"
  },
  {
    "greek": "το γυμναστήριο",
    "russian": "спортзал, фитнес-клуб",
    "type": "noun"
  },
  {
    "greek": "η γυμναστική",
    "russian": "физкультура",
    "type": "noun"
  },
  {
    "greek": "η δασκάλα",
    "russian": "учительница",
    "type": "noun"
  },
  {
    "greek": "ο δάσκαλος",
    "russian": "учитель",
    "type": "noun"
  },
  {
    "greek": "το δάσος",
    "russian": "лес",
    "type": "noun"
  },
  {
    "greek": "το δάχτυλο",
    "russian": "палец",
    "type": "noun"
  },
  {
    "greek": "ο δεκέμβριος",
    "russian": "декабрь",
    "type": "noun"
  },
  {
    "greek": "το δέμα",
    "russian": "посылка",
    "type": "noun"
  },
  {
    "greek": "το δέντρο",
    "russian": "дерево",
    "type": "noun"
  },
  {
    "greek": "η δευτέρα",
    "russian": "понедельник",
    "type": "noun"
  },
  {
    "greek": "το δημαρχείο",
    "russian": "мэрия",
    "type": "noun"
  },
  {
    "greek": "ο δήμος",
    "russian": "муниципалитет, община",
    "type": "noun"
  },
  {
    "greek": "ο δημοσιογράφος",
    "russian": "журналист",
    "type": "noun"
  },
  {
    "greek": "το διαγώνισμα",
    "russian": "контрольная работа",
    "type": "noun"
  },
  {
    "greek": "ο διαγωνισμός",
    "russian": "конкурс, соревнование",
    "type": "noun"
  },
  {
    "greek": "το διαδίκτυο",
    "russian": "интернет",
    "type": "noun"
  },
  {
    "greek": "η διαδρομή",
    "russian": "маршрут, путь",
    "type": "noun"
  },
  {
    "greek": "οι διακοπές",
    "russian": "каникулы, отпуск",
    "type": "noun"
  },
  {
    "greek": "το διάλειμμα",
    "russian": "перемена",
    "type": "noun"
  },
  {
    "greek": "ο διάλογος",
    "russian": "диалог, разговор",
    "type": "noun"
  },
  {
    "greek": "το διαμέρισμα",
    "russian": "квартира",
    "type": "noun"
  },
  {
    "greek": "η διασκέδαση",
    "russian": "развлечение, веселье",
    "type": "noun"
  },
  {
    "greek": "η διαφήμιση",
    "russian": "реклама",
    "type": "noun"
  },
  {
    "greek": "η διαφωνία",
    "russian": "несогласие, разногласие",
    "type": "noun"
  },
  {
    "greek": "η διδασκαλία",
    "russian": "обучение, преподавание",
    "type": "noun"
  },
  {
    "greek": "ο διδάσκαλος",
    "russian": "учитель",
    "type": "noun"
  },
  {
    "greek": "η διεύθυνση",
    "russian": "адрес, направление",
    "type": "noun"
  },
  {
    "greek": "ο διευθυντής",
    "russian": "директор",
    "type": "noun"
  },
  {
    "greek": "το δόντι",
    "russian": "зуб",
    "type": "noun"
  },
  {
    "greek": "η δουλειά",
    "russian": "работа",
    "type": "noun"
  },
  {
    "greek": "η δραστηριότητα",
    "russian": "деятельность, активность",
    "type": "noun"
  },
  {
    "greek": "το δρομολόγιο",
    "russian": "маршрут, рейс",
    "type": "noun"
  },
  {
    "greek": "ο δρόμος",
    "russian": "дорога, улица",
    "type": "noun"
  },
  {
    "greek": "το δωμάτιο",
    "russian": "комната",
    "type": "noun"
  },
  {
    "greek": "το δώρο",
    "russian": "подарок",
    "type": "noun"
  },
  {
    "greek": "η εβδομάδα",
    "russian": "неделя",
    "type": "noun"
  },
  {
    "greek": "η εγγραφή",
    "russian": "регистрация",
    "type": "noun"
  },
  {
    "greek": "οι ειδήσεις",
    "russian": "новости",
    "type": "noun"
  },
  {
    "greek": "η εικόνα",
    "russian": "картина, изображение",
    "type": "noun"
  },
  {
    "greek": "το εισιτήριο",
    "russian": "билет",
    "type": "noun"
  },
  {
    "greek": "η εκδήλωση",
    "russian": "мероприятие, событие",
    "type": "noun"
  },
  {
    "greek": "η εκκλησία",
    "russian": "церковь",
    "type": "noun"
  },
  {
    "greek": "η έκπληξη",
    "russian": "сюрприз, неожиданность",
    "type": "noun"
  },
  {
    "greek": "η εκπομπή",
    "russian": "передача (ТВ/радио)",
    "type": "noun"
  },
  {
    "greek": "η έκπτωση",
    "russian": "скидка",
    "type": "noun"
  },
  {
    "greek": "ο έλληνας",
    "russian": "грек",
    "type": "noun"
  },
  {
    "greek": "η ελπίδα",
    "russian": "надежда",
    "type": "noun"
  },
  {
    "greek": "η εμπειρία",
    "russian": "опыт",
    "type": "noun"
  },
  {
    "greek": "το ενδιαφέρον",
    "russian": "интерес",
    "type": "noun"
  },
  {
    "greek": "ο ενήλικας",
    "russian": "взрослый",
    "type": "noun"
  },
  {
    "greek": "ο ενήλικος",
    "russian": "взрослый",
    "type": "noun"
  },
  {
    "greek": "το ενοίκιο",
    "russian": "арендная плата",
    "type": "noun"
  },
  {
    "greek": "το επάγγελμα",
    "russian": "профессия",
    "type": "noun"
  },
  {
    "greek": "το επίθετο",
    "russian": "фамилия",
    "type": "noun"
  },
  {
    "greek": "το επίπεδο",
    "russian": "уровень",
    "type": "noun"
  },
  {
    "greek": "το έπιπλο",
    "russian": "мебель (предмет)",
    "type": "noun"
  },
  {
    "greek": "ο επισκέπτης",
    "russian": "посетитель, гость",
    "type": "noun"
  },
  {
    "greek": "η επισκευή",
    "russian": "ремонт",
    "type": "noun"
  },
  {
    "greek": "η επίσκεψη",
    "russian": "визит, посещение",
    "type": "noun"
  },
  {
    "greek": "η επιτυχία",
    "russian": "успех",
    "type": "noun"
  },
  {
    "greek": "η επιχείρηση",
    "russian": "предприятие, компания",
    "type": "noun"
  },
  {
    "greek": "η εποχή",
    "russian": "время года, эпоха",
    "type": "noun"
  },
  {
    "greek": "το επώνυμο",
    "russian": "фамилия",
    "type": "noun"
  },
  {
    "greek": "η εργασία",
    "russian": "работа, труд",
    "type": "noun"
  },
  {
    "greek": "το εργαστήριο",
    "russian": "лаборатория, мастерская",
    "type": "noun"
  },
  {
    "greek": "ο εργάτης",
    "russian": "рабочий, работник",
    "type": "noun"
  },
  {
    "greek": "το έργο",
    "russian": "произведение, работа",
    "type": "noun"
  },
  {
    "greek": "η έρευνα",
    "russian": "исследование",
    "type": "noun"
  },
  {
    "greek": "η ερώτηση",
    "russian": "вопрос",
    "type": "noun"
  },
  {
    "greek": "το εστιατόριο",
    "russian": "ресторан",
    "type": "noun"
  },
  {
    "greek": "η εταιρεία",
    "russian": "компания, фирма",
    "type": "noun"
  },
  {
    "greek": "η ετοιμασία",
    "russian": "подготовка",
    "type": "noun"
  },
  {
    "greek": "το έτος",
    "russian": "год",
    "type": "noun"
  },
  {
    "greek": "η ευκαιρία",
    "russian": "возможность, случай",
    "type": "noun"
  },
  {
    "greek": "το ευρώ",
    "russian": "евро",
    "type": "noun"
  },
  {
    "greek": "η ευτυχία",
    "russian": "счастье",
    "type": "noun"
  },
  {
    "greek": "ο έφηβος",
    "russian": "подросток",
    "type": "noun"
  },
  {
    "greek": "η εφημερίδα",
    "russian": "газета",
    "type": "noun"
  },
  {
    "greek": "η ζάχαρη",
    "russian": "сахар",
    "type": "noun"
  },
  {
    "greek": "το ζευγάρι",
    "russian": "пара",
    "type": "noun"
  },
  {
    "greek": "η ζωή",
    "russian": "жизнь",
    "type": "noun"
  },
  {
    "greek": "ο ηθοποιός",
    "russian": "актёр",
    "type": "noun"
  },
  {
    "greek": "η ηλεκτρική",
    "russian": "электричка",
    "type": "noun"
  },
  {
    "greek": "η ηλικία",
    "russian": "возраст",
    "type": "noun"
  },
  {
    "greek": "ο ηλικιωμένος",
    "russian": "пожилой человек",
    "type": "noun"
  },
  {
    "greek": "ο ήλιος",
    "russian": "солнце",
    "type": "noun"
  },
  {
    "greek": "η ημέρα",
    "russian": "день",
    "type": "noun"
  },
  {
    "greek": "η ημερομηνία",
    "russian": "дата",
    "type": "noun"
  },
  {
    "greek": "ο ήρωας",
    "russian": "герой",
    "type": "noun"
  },
  {
    "greek": "η θάλασσα",
    "russian": "море",
    "type": "noun"
  },
  {
    "greek": "ο θάνατος",
    "russian": "смерть",
    "type": "noun"
  },
  {
    "greek": "το θέατρο",
    "russian": "театр",
    "type": "noun"
  },
  {
    "greek": "η θεία",
    "russian": "тетя",
    "type": "noun"
  },
  {
    "greek": "ο θείος",
    "russian": "дядя",
    "type": "noun"
  },
  {
    "greek": "το θέμα",
    "russian": "тема, вопрос",
    "type": "noun"
  },
  {
    "greek": "η θέρμανση",
    "russian": "отопление",
    "type": "noun"
  },
  {
    "greek": "η θερμοκρασία",
    "russian": "температура",
    "type": "noun"
  },
  {
    "greek": "η θέση",
    "russian": "место, позиция, должность",
    "type": "noun"
  },
  {
    "greek": "ο θυμός",
    "russian": "гнев, злость",
    "type": "noun"
  },
  {
    "greek": "το ιατρείο",
    "russian": "кабинет врача, поликлиника",
    "type": "noun"
  },
  {
    "greek": "η ιδέα",
    "russian": "идея",
    "type": "noun"
  },
  {
    "greek": "το ίντερνετ",
    "russian": "интернет",
    "type": "noun"
  },
  {
    "greek": "ο ιούνιος",
    "russian": "июнь",
    "type": "noun"
  },
  {
    "greek": "το ισόγειο",
    "russian": "первый этаж",
    "type": "noun"
  },
  {
    "greek": "η ιστορία",
    "russian": "история",
    "type": "noun"
  },
  {
    "greek": "ο καθαρισμός",
    "russian": "чистка, уборка",
    "type": "noun"
  },
  {
    "greek": "το καθαριστήριο",
    "russian": "химчистка",
    "type": "noun"
  },
  {
    "greek": "ο καθηγητής",
    "russian": "преподаватель",
    "type": "noun"
  },
  {
    "greek": "ο καιρός",
    "russian": "погода, время",
    "type": "noun"
  },
  {
    "greek": "το καλάθι",
    "russian": "корзина",
    "type": "noun"
  },
  {
    "greek": "ο καλλιτέχνης",
    "russian": "художник, артист",
    "type": "noun"
  },
  {
    "greek": "το καλοκαίρι",
    "russian": "лето",
    "type": "noun"
  },
  {
    "greek": "η καρδιά",
    "russian": "сердце",
    "type": "noun"
  },
  {
    "greek": "η καρέκλα",
    "russian": "стул",
    "type": "noun"
  },
  {
    "greek": "η κάρτα",
    "russian": "карта, карточка",
    "type": "noun"
  },
  {
    "greek": "το κάστανο",
    "russian": "каштан",
    "type": "noun"
  },
  {
    "greek": "η κατάσταση",
    "russian": "ситуация, состояние",
    "type": "noun"
  },
  {
    "greek": "το κατάστημα",
    "russian": "магазин",
    "type": "noun"
  },
  {
    "greek": "η κατοικία",
    "russian": "жилище, дом",
    "type": "noun"
  },
  {
    "greek": "το καφενείο",
    "russian": "кафе (традиционное греческое)",
    "type": "noun"
  },
  {
    "greek": "ο καφές",
    "russian": "кофе",
    "type": "noun"
  },
  {
    "greek": "η καφετέρια",
    "russian": "кафетерий, кофейня",
    "type": "noun"
  },
  {
    "greek": "το κείμενο",
    "russian": "текст",
    "type": "noun"
  },
  {
    "greek": "το κέντρο",
    "russian": "центр",
    "type": "noun"
  },
  {
    "greek": "το κεφάλι",
    "russian": "голова",
    "type": "noun"
  },
  {
    "greek": "ο κήπος",
    "russian": "сад",
    "type": "noun"
  },
  {
    "greek": "η κιθάρα",
    "russian": "гитара",
    "type": "noun"
  },
  {
    "greek": "ο κινηματογράφος",
    "russian": "кинотеатр, кино",
    "type": "noun"
  },
  {
    "greek": "η κίνηση",
    "russian": "движение",
    "type": "noun"
  },
  {
    "greek": "το κινητό",
    "russian": "мобильный телефон",
    "type": "noun"
  },
  {
    "greek": "το κλειδί",
    "russian": "ключ",
    "type": "noun"
  },
  {
    "greek": "το κλιματιστικό",
    "russian": "кондиционер",
    "type": "noun"
  },
  {
    "greek": "η κολύμβηση",
    "russian": "плавание",
    "type": "noun"
  },
  {
    "greek": "ο κόμβος",
    "russian": "узел, перекресток",
    "type": "noun"
  },
  {
    "greek": "το κομμωτήριο",
    "russian": "парикмахерская",
    "type": "noun"
  },
  {
    "greek": "η κοπέλα",
    "russian": "девушка",
    "type": "noun"
  },
  {
    "greek": "η κόρη",
    "russian": "дочь",
    "type": "noun"
  },
  {
    "greek": "το κορίτσι",
    "russian": "девочка, девушка",
    "type": "noun"
  },
  {
    "greek": "ο κόσμος",
    "russian": "мир, люди",
    "type": "noun"
  },
  {
    "greek": "το κόστος",
    "russian": "стоимость",
    "type": "noun"
  },
  {
    "greek": "το κοτόπουλο",
    "russian": "курица",
    "type": "noun"
  },
  {
    "greek": "η κουζίνα",
    "russian": "кухня",
    "type": "noun"
  },
  {
    "greek": "το κουκούτσι",
    "russian": "косточка",
    "type": "noun"
  },
  {
    "greek": "ο κουμπάρος",
    "russian": "кум, крёстный отец",
    "type": "noun"
  },
  {
    "greek": "το κουτάκι",
    "russian": "коробочка, баночка",
    "type": "noun"
  },
  {
    "greek": "το κρέας",
    "russian": "мясо",
    "type": "noun"
  },
  {
    "greek": "το κρεβάτι",
    "russian": "кровать",
    "type": "noun"
  },
  {
    "greek": "το κρεοπωλείο",
    "russian": "мясная лавка",
    "type": "noun"
  },
  {
    "greek": "το κτίριο",
    "russian": "здание",
    "type": "noun"
  },
  {
    "greek": "η κυρία",
    "russian": "госпожа, женщина",
    "type": "noun"
  },
  {
    "greek": "η κυριακή",
    "russian": "воскресенье",
    "type": "noun"
  },
  {
    "greek": "το λάδι",
    "russian": "масло",
    "type": "noun"
  },
  {
    "greek": "ο λαιμός",
    "russian": "горло, шея",
    "type": "noun"
  },
  {
    "greek": "το λαχανικό",
    "russian": "овощ",
    "type": "noun"
  },
  {
    "greek": "η λέξη",
    "russian": "слово",
    "type": "noun"
  },
  {
    "greek": "το λεπτό",
    "russian": "минута",
    "type": "noun"
  },
  {
    "greek": "το λεωφορείο",
    "russian": "автобус",
    "type": "noun"
  },
  {
    "greek": "η λεωφόρος",
    "russian": "проспект, широкая улица",
    "type": "noun"
  },
  {
    "greek": "το λιμάνι",
    "russian": "порт, гавань",
    "type": "noun"
  },
  {
    "greek": "το λίτρο",
    "russian": "литр",
    "type": "noun"
  },
  {
    "greek": "ο λογαριασμός",
    "russian": "счет",
    "type": "noun"
  },
  {
    "greek": "ο λόγος",
    "russian": "слово, речь, причина",
    "type": "noun"
  },
  {
    "greek": "η λύπη",
    "russian": "печаль, грусть",
    "type": "noun"
  },
  {
    "greek": "η λύση",
    "russian": "решение",
    "type": "noun"
  },
  {
    "greek": "το μαγαζί",
    "russian": "магазин",
    "type": "noun"
  },
  {
    "greek": "ο μάγειρας",
    "russian": "повар",
    "type": "noun"
  },
  {
    "greek": "η μαγειρική",
    "russian": "кулинария",
    "type": "noun"
  },
  {
    "greek": "το μάθημα",
    "russian": "урок, предмет",
    "type": "noun"
  },
  {
    "greek": "ο μαθητής",
    "russian": "ученик",
    "type": "noun"
  },
  {
    "greek": "ο Μάιος",
    "russian": "май",
    "type": "noun"
  },
  {
    "greek": "τα μακαρόνια",
    "russian": "макароны",
    "type": "noun"
  },
  {
    "greek": "τα μαλλιά",
    "russian": "волосы",
    "type": "noun"
  },
  {
    "greek": "η μαμά",
    "russian": "мама",
    "type": "noun"
  },
  {
    "greek": "το μανάβικο",
    "russian": "овощной магазин",
    "type": "noun"
  },
  {
    "greek": "το μάτι",
    "russian": "глаз",
    "type": "noun"
  },
  {
    "greek": "το μέλι",
    "russian": "мёд",
    "type": "noun"
  },
  {
    "greek": "το μενού",
    "russian": "меню",
    "type": "noun"
  },
  {
    "greek": "η μέρα",
    "russian": "день",
    "type": "noun"
  },
  {
    "greek": "το μέρος",
    "russian": "часть, место",
    "type": "noun"
  },
  {
    "greek": "το μεσημέρι",
    "russian": "полдень",
    "type": "noun"
  },
  {
    "greek": "το μεσημεριανό",
    "russian": "обед",
    "type": "noun"
  },
  {
    "greek": "η μεταφορά",
    "russian": "перевозка, транспорт",
    "type": "noun"
  },
  {
    "greek": "τα μετρητά",
    "russian": "наличные деньги",
    "type": "noun"
  },
  {
    "greek": "το μετρό",
    "russian": "метро",
    "type": "noun"
  },
  {
    "greek": "ο μήνας",
    "russian": "месяц",
    "type": "noun"
  },
  {
    "greek": "το μήνυμα",
    "russian": "сообщение",
    "type": "noun"
  },
  {
    "greek": "η μητέρα",
    "russian": "мать, мама",
    "type": "noun"
  },
  {
    "greek": "η μηχανή",
    "russian": "машина, мотоцикл",
    "type": "noun"
  },
  {
    "greek": "ο μηχανικός",
    "russian": "инженер, механик",
    "type": "noun"
  },
  {
    "greek": "ο μισθός",
    "russian": "зарплата, оклад",
    "type": "noun"
  },
  {
    "greek": "η μνήμη",
    "russian": "память, воспоминание",
    "type": "noun"
  },
  {
    "greek": "η μονοκατοικία",
    "russian": "частный дом",
    "type": "noun"
  },
  {
    "greek": "το μουσείο",
    "russian": "музей",
    "type": "noun"
  },
  {
    "greek": "η μουσική",
    "russian": "музыка",
    "type": "noun"
  },
  {
    "greek": "ο μουσικός",
    "russian": "музыкант",
    "type": "noun"
  },
  {
    "greek": "το μπαλκόνι",
    "russian": "балкон",
    "type": "noun"
  },
  {
    "greek": "ο μπαμπάς",
    "russian": "папа",
    "type": "noun"
  },
  {
    "greek": "το μπάνιο",
    "russian": "ванная комната, ванна",
    "type": "noun"
  },
  {
    "greek": "το μπάσκετ",
    "russian": "баскетбол",
    "type": "noun"
  },
  {
    "greek": "η μπίρα",
    "russian": "пиво",
    "type": "noun"
  },
  {
    "greek": "το μπισκότο",
    "russian": "печенье",
    "type": "noun"
  },
  {
    "greek": "το μυστικό",
    "russian": "секрет, тайна",
    "type": "noun"
  },
  {
    "greek": "η μύτη",
    "russian": "нос",
    "type": "noun"
  },
  {
    "greek": "το μωρό",
    "russian": "малыш, младенец",
    "type": "noun"
  },
  {
    "greek": "το νερό",
    "russian": "вода",
    "type": "noun"
  },
  {
    "greek": "το νησί",
    "russian": "остров",
    "type": "noun"
  },
  {
    "greek": "η νίκη",
    "russian": "победа",
    "type": "noun"
  },
  {
    "greek": "η νόηση",
    "russian": "мышление",
    "type": "noun"
  },
  {
    "greek": "το νόμισμα",
    "russian": "монета",
    "type": "noun"
  },
  {
    "greek": "η νονά",
    "russian": "крестная мать",
    "type": "noun"
  },
  {
    "greek": "ο νονός",
    "russian": "крестный отец",
    "type": "noun"
  },
  {
    "greek": "η νοσηλεύτρια",
    "russian": "медсестра",
    "type": "noun"
  },
  {
    "greek": "το νοσοκομείο",
    "russian": "больница",
    "type": "noun"
  },
  {
    "greek": "η ντουλάπα",
    "russian": "шкаф",
    "type": "noun"
  },
  {
    "greek": "η νύφη",
    "russian": "невеста",
    "type": "noun"
  },
  {
    "greek": "η νύχτα",
    "russian": "ночь",
    "type": "noun"
  },
  {
    "greek": "η ξαδέλφη",
    "russian": "двоюродная сестра",
    "type": "noun"
  },
  {
    "greek": "ο ξάδελφος",
    "russian": "двоюродный брат",
    "type": "noun"
  },
  {
    "greek": "ο ξάδερφος",
    "russian": "двоюродный брат",
    "type": "noun"
  },
  {
    "greek": "το ξενοδοχείο",
    "russian": "гостиница, отель",
    "type": "noun"
  },
  {
    "greek": "η οδηγία",
    "russian": "инструкция, указание",
    "type": "noun"
  },
  {
    "greek": "ο οδηγός",
    "russian": "водитель, гид",
    "type": "noun"
  },
  {
    "greek": "η οδός",
    "russian": "улица",
    "type": "noun"
  },
  {
    "greek": "η οικογένεια",
    "russian": "семья",
    "type": "noun"
  },
  {
    "greek": "η οικονομία",
    "russian": "экономика, экономия",
    "type": "noun"
  },
  {
    "greek": "η ομάδα",
    "russian": "команда, группа",
    "type": "noun"
  },
  {
    "greek": "η ομπρέλα",
    "russian": "зонт",
    "type": "noun"
  },
  {
    "greek": "το όνειρο",
    "russian": "сон, мечта",
    "type": "noun"
  },
  {
    "greek": "το όνομα",
    "russian": "имя",
    "type": "noun"
  },
  {
    "greek": "το όργανο",
    "russian": "музыкальный инструмент",
    "type": "noun"
  },
  {
    "greek": "ο όροφος",
    "russian": "этаж",
    "type": "noun"
  },
  {
    "greek": "η ουρά",
    "russian": "очередь",
    "type": "noun"
  },
  {
    "greek": "ο ουρανός",
    "russian": "небо",
    "type": "noun"
  },
  {
    "greek": "το παγωτό",
    "russian": "мороженое",
    "type": "noun"
  },
  {
    "greek": "το παιδί",
    "russian": "ребёнок",
    "type": "noun"
  },
  {
    "greek": "το παιχνίδι",
    "russian": "игра, игрушка",
    "type": "noun"
  },
  {
    "greek": "το πανεπιστήμιο",
    "russian": "университет",
    "type": "noun"
  },
  {
    "greek": "το παπούτσι",
    "russian": "ботинок, туфля",
    "type": "noun"
  },
  {
    "greek": "τα παπούτσια",
    "russian": "обувь, туфли",
    "type": "noun"
  },
  {
    "greek": "ο παππούς",
    "russian": "дедушка",
    "type": "noun"
  },
  {
    "greek": "η παραγγελία",
    "russian": "заказ",
    "type": "noun"
  },
  {
    "greek": "η παραγγελία",
    "russian": "заказ",
    "type": "noun"
  },
  {
    "greek": "η παράγραφος",
    "russian": "абзац",
    "type": "noun"
  },
  {
    "greek": "το παράθυρο",
    "russian": "окно",
    "type": "noun"
  },
  {
    "greek": "η παραλαβή",
    "russian": "получение, приёмка",
    "type": "noun"
  },
  {
    "greek": "ο παραλήπτης",
    "russian": "получатель",
    "type": "noun"
  },
  {
    "greek": "η παραλία",
    "russian": "пляж, берег",
    "type": "noun"
  },
  {
    "greek": "το παραμύθι",
    "russian": "сказка",
    "type": "noun"
  },
  {
    "greek": "η παράσταση",
    "russian": "представление, спектакль",
    "type": "noun"
  },
  {
    "greek": "το πάρκο",
    "russian": "парк",
    "type": "noun"
  },
  {
    "greek": "το πάρτι",
    "russian": "вечеринка",
    "type": "noun"
  },
  {
    "greek": "ο πατέρας",
    "russian": "отец",
    "type": "noun"
  },
  {
    "greek": "η πεθερά",
    "russian": "свекровь, тёща",
    "type": "noun"
  },
  {
    "greek": "ο πεθερός",
    "russian": "свёкор, тесть",
    "type": "noun"
  },
  {
    "greek": "ο πελάτης",
    "russian": "клиент, покупатель",
    "type": "noun"
  },
  {
    "greek": "η πελάτισσα",
    "russian": "клиентка",
    "type": "noun"
  },
  {
    "greek": "το περιβάλλον",
    "russian": "окружающая среда, среда",
    "type": "noun"
  },
  {
    "greek": "η περιγραφή",
    "russian": "описание",
    "type": "noun"
  },
  {
    "greek": "το περιοδικό",
    "russian": "журнал",
    "type": "noun"
  },
  {
    "greek": "η περίοδος",
    "russian": "период, время",
    "type": "noun"
  },
  {
    "greek": "η περιοχή",
    "russian": "район, область",
    "type": "noun"
  },
  {
    "greek": "το περίπτερο",
    "russian": "киоск",
    "type": "noun"
  },
  {
    "greek": "η περίπτωση",
    "russian": "случай",
    "type": "noun"
  },
  {
    "greek": "το πιάνο",
    "russian": "пианино",
    "type": "noun"
  },
  {
    "greek": "το πιάτο",
    "russian": "тарелка, блюдо",
    "type": "noun"
  },
  {
    "greek": "ο πίνακας",
    "russian": "картина, доска",
    "type": "noun"
  },
  {
    "greek": "το πιπέρι",
    "russian": "перец (приправа)",
    "type": "noun"
  },
  {
    "greek": "η πλατεία",
    "russian": "площадь",
    "type": "noun"
  },
  {
    "greek": "η πλάτη",
    "russian": "спина",
    "type": "noun"
  },
  {
    "greek": "η πληροφορία",
    "russian": "информация",
    "type": "noun"
  },
  {
    "greek": "η πληροφορική",
    "russian": "информатика",
    "type": "noun"
  },
  {
    "greek": "το πλοίο",
    "russian": "корабль",
    "type": "noun"
  },
  {
    "greek": "το πλυντήριο",
    "russian": "стиральная машина",
    "type": "noun"
  },
  {
    "greek": "το ποδήλατο",
    "russian": "велосипед",
    "type": "noun"
  },
  {
    "greek": "το πόδι",
    "russian": "нога, стопа",
    "type": "noun"
  },
  {
    "greek": "το ποδόσφαιρο",
    "russian": "футбол",
    "type": "noun"
  },
  {
    "greek": "το ποίημα",
    "russian": "стихотворение",
    "type": "noun"
  },
  {
    "greek": "η πόλη",
    "russian": "город",
    "type": "noun"
  },
  {
    "greek": "η πόρτα",
    "russian": "дверь",
    "type": "noun"
  },
  {
    "greek": "το πράγμα",
    "russian": "вещь, дело, предмет",
    "type": "noun"
  },
  {
    "greek": "η πραγματικότητα",
    "russian": "реальность, действительность",
    "type": "noun"
  },
  {
    "greek": "το πρόβλημα",
    "russian": "проблема",
    "type": "noun"
  },
  {
    "greek": "η προβολή",
    "russian": "показ, проекция",
    "type": "noun"
  },
  {
    "greek": "το πρόγραμμα",
    "russian": "программа, план",
    "type": "noun"
  },
  {
    "greek": "η προετοιμασία",
    "russian": "подготовка, приготовление",
    "type": "noun"
  },
  {
    "greek": "το προϊόν",
    "russian": "продукт, товар",
    "type": "noun"
  },
  {
    "greek": "η προστασία",
    "russian": "защита",
    "type": "noun"
  },
  {
    "greek": "η προσωπικότητα",
    "russian": "личность, индивидуальность",
    "type": "noun"
  },
  {
    "greek": "το πρόσωπο",
    "russian": "лицо",
    "type": "noun"
  },
  {
    "greek": "η πρόταση",
    "russian": "предложение",
    "type": "noun"
  },
  {
    "greek": "το πρωί",
    "russian": "утро",
    "type": "noun"
  },
  {
    "greek": "το πρωινό",
    "russian": "завтрак",
    "type": "noun"
  },
  {
    "greek": "ο πυρετός",
    "russian": "температура, жар",
    "type": "noun"
  },
  {
    "greek": "ο πυροσβέστης",
    "russian": "пожарный",
    "type": "noun"
  },
  {
    "greek": "ο πωλητής",
    "russian": "продавец",
    "type": "noun"
  },
  {
    "greek": "το ραντεβού",
    "russian": "свидание, встреча",
    "type": "noun"
  },
  {
    "greek": "ο ρόλος",
    "russian": "роль",
    "type": "noun"
  },
  {
    "greek": "τα ρούχα",
    "russian": "одежда",
    "type": "noun"
  },
  {
    "greek": "το ρούχο",
    "russian": "одежда",
    "type": "noun"
  },
  {
    "greek": "το ρύζι",
    "russian": "рис",
    "type": "noun"
  },
  {
    "greek": "το Σάββατο",
    "russian": "суббота",
    "type": "noun"
  },
  {
    "greek": "το σαββατοκύριακο",
    "russian": "выходные",
    "type": "noun"
  },
  {
    "greek": "η σακούλα",
    "russian": "пакет, сумка",
    "type": "noun"
  },
  {
    "greek": "η σαλάτα",
    "russian": "салат",
    "type": "noun"
  },
  {
    "greek": "το σαλόνι",
    "russian": "гостиная",
    "type": "noun"
  },
  {
    "greek": "η σελίδα",
    "russian": "страница",
    "type": "noun"
  },
  {
    "greek": "το σεντόνι",
    "russian": "простыня",
    "type": "noun"
  },
  {
    "greek": "ο σεπτέμβριος",
    "russian": "сентябрь",
    "type": "noun"
  },
  {
    "greek": "ο σερβιτόρος",
    "russian": "официант",
    "type": "noun"
  },
  {
    "greek": "η σημειώσεις",
    "russian": "записи, заметки",
    "type": "noun"
  },
  {
    "greek": "η σημείωση",
    "russian": "заметка, записка",
    "type": "noun"
  },
  {
    "greek": "η σκάλα",
    "russian": "лестница",
    "type": "noun"
  },
  {
    "greek": "η σκέψη",
    "russian": "мысль, размышление",
    "type": "noun"
  },
  {
    "greek": "ο σκύλος",
    "russian": "собака",
    "type": "noun"
  },
  {
    "greek": "η σοκολάτα",
    "russian": "шоколад",
    "type": "noun"
  },
  {
    "greek": "η σούπα",
    "russian": "суп",
    "type": "noun"
  },
  {
    "greek": "το σούπερμάρκετ",
    "russian": "супермаркет",
    "type": "noun"
  },
  {
    "greek": "η σοφία",
    "russian": "мудрость",
    "type": "noun"
  },
  {
    "greek": "το σπίτι",
    "russian": "дом",
    "type": "noun"
  },
  {
    "greek": "οι σπουδές",
    "russian": "учёба,",
    "type": "noun"
  },
  {
    "greek": "ο σταθμός",
    "russian": "станция, вокзал",
    "type": "noun"
  },
  {
    "greek": "η στάση",
    "russian": "остановка, позиция",
    "type": "noun"
  },
  {
    "greek": "η στεναχώρια",
    "russian": "расстройство, огорчение",
    "type": "noun"
  },
  {
    "greek": "το στήθος",
    "russian": "грудь",
    "type": "noun"
  },
  {
    "greek": "η στιγμή",
    "russian": "момент, мгновение",
    "type": "noun"
  },
  {
    "greek": "το στοιχείο",
    "russian": "элемент, деталь",
    "type": "noun"
  },
  {
    "greek": "το στόμα",
    "russian": "рот",
    "type": "noun"
  },
  {
    "greek": "το στομάχι",
    "russian": "желудок",
    "type": "noun"
  },
  {
    "greek": "ο συγγενής",
    "russian": "родственник",
    "type": "noun"
  },
  {
    "greek": "η συγγνώμη",
    "russian": "извинение, прости",
    "type": "noun"
  },
  {
    "greek": "ο συγγραφέας",
    "russian": "писатель",
    "type": "noun"
  },
  {
    "greek": "ο σύζυγος",
    "russian": "супруг, супруга",
    "type": "noun"
  },
  {
    "greek": "η συμβουλή",
    "russian": "совет",
    "type": "noun"
  },
  {
    "greek": "η συμφωνία",
    "russian": "согласие, договор",
    "type": "noun"
  },
  {
    "greek": "ο συνάδελφος",
    "russian": "коллега",
    "type": "noun"
  },
  {
    "greek": "η συνάντηση",
    "russian": "встреча",
    "type": "noun"
  },
  {
    "greek": "η συνέντευξη",
    "russian": "интервью, собеседование",
    "type": "noun"
  },
  {
    "greek": "η συνέχεια",
    "russian": "продолжение, постоянно",
    "type": "noun"
  },
  {
    "greek": "η συνταγή",
    "russian": "рецепт",
    "type": "noun"
  },
  {
    "greek": "ο σύντροφος",
    "russian": "партнер, спутник жизни",
    "type": "noun"
  },
  {
    "greek": "το σχέδιο",
    "russian": "план, проект",
    "type": "noun"
  },
  {
    "greek": "η σχέση",
    "russian": "отношения",
    "type": "noun"
  },
  {
    "greek": "το σχολείο",
    "russian": "школа",
    "type": "noun"
  },
  {
    "greek": "η ταβέρνα",
    "russian": "таверна",
    "type": "noun"
  },
  {
    "greek": "η ταινία",
    "russian": "фильм",
    "type": "noun"
  },
  {
    "greek": "το ταμείο",
    "russian": "касса",
    "type": "noun"
  },
  {
    "greek": "η τάξη",
    "russian": "класс, порядок",
    "type": "noun"
  },
  {
    "greek": "το ταξί",
    "russian": "такси",
    "type": "noun"
  },
  {
    "greek": "το ταξίδι",
    "russian": "путешествие, поездка",
    "type": "noun"
  },
  {
    "greek": "η ταυτότητα",
    "russian": "удостоверение личности",
    "type": "noun"
  },
  {
    "greek": "το ταχυδρομείο",
    "russian": "почта",
    "type": "noun"
  },
  {
    "greek": "το τέλος",
    "russian": "конец",
    "type": "noun"
  },
  {
    "greek": "η τετάρτη",
    "russian": "среда",
    "type": "noun"
  },
  {
    "greek": "το τετράδιο",
    "russian": "тетрадь",
    "type": "noun"
  },
  {
    "greek": "η τέχνη",
    "russian": "искусство",
    "type": "noun"
  },
  {
    "greek": "η τεχνολογία",
    "russian": "технология",
    "type": "noun"
  },
  {
    "greek": "η τηλεόραση",
    "russian": "телевизор",
    "type": "noun"
  },
  {
    "greek": "το τηλέφωνο",
    "russian": "телефон",
    "type": "noun"
  },
  {
    "greek": "η τιμή",
    "russian": "цена",
    "type": "noun"
  },
  {
    "greek": "ο τίτλος",
    "russian": "заголовок, титул",
    "type": "noun"
  },
  {
    "greek": "το τμήμα",
    "russian": "отдел, факультет",
    "type": "noun"
  },
  {
    "greek": "ο τόπος",
    "russian": "место",
    "type": "noun"
  },
  {
    "greek": "η τουαλέτα",
    "russian": "туалет",
    "type": "noun"
  },
  {
    "greek": "ο τουρίστας",
    "russian": "турист",
    "type": "noun"
  },
  {
    "greek": "η τούρτα",
    "russian": "торт",
    "type": "noun"
  },
  {
    "greek": "το τραγούδι",
    "russian": "песня",
    "type": "noun"
  },
  {
    "greek": "ο τραγουδιστής",
    "russian": "певец",
    "type": "noun"
  },
  {
    "greek": "το τραμ",
    "russian": "трамвай",
    "type": "noun"
  },
  {
    "greek": "η τράπεζα",
    "russian": "банк",
    "type": "noun"
  },
  {
    "greek": "το τραπέζι",
    "russian": "стол",
    "type": "noun"
  },
  {
    "greek": "ο τρόπος",
    "russian": "способ, образ",
    "type": "noun"
  },
  {
    "greek": "το τσάι",
    "russian": "чай",
    "type": "noun"
  },
  {
    "greek": "η τσάντα",
    "russian": "сумка",
    "type": "noun"
  },
  {
    "greek": "ο τύπος",
    "russian": "тип",
    "type": "noun"
  },
  {
    "greek": "το τυρί",
    "russian": "сыр",
    "type": "noun"
  },
  {
    "greek": "η τύχη",
    "russian": "удача, везение, судьба",
    "type": "noun"
  },
  {
    "greek": "η υγεία",
    "russian": "здоровье",
    "type": "noun"
  },
  {
    "greek": "το υλικό",
    "russian": "материал",
    "type": "noun"
  },
  {
    "greek": "ο υπάλληλος",
    "russian": "сотрудник, служащий",
    "type": "noun"
  },
  {
    "greek": "η υπηρεσία",
    "russian": "услуга, служба",
    "type": "noun"
  },
  {
    "greek": "το υπνοδωμάτιο",
    "russian": "спальня",
    "type": "noun"
  },
  {
    "greek": "η υπόθεση",
    "russian": "дело, случай, вопрос",
    "type": "noun"
  },
  {
    "greek": "ο υπολογιστής",
    "russian": "компьютер",
    "type": "noun"
  },
  {
    "greek": "το φαγητό",
    "russian": "еда, пища",
    "type": "noun"
  },
  {
    "greek": "το φανάρι",
    "russian": "светофор",
    "type": "noun"
  },
  {
    "greek": "η φαντασία",
    "russian": "фантазия, воображение",
    "type": "noun"
  },
  {
    "greek": "το φαρμακείο",
    "russian": "аптека",
    "type": "noun"
  },
  {
    "greek": "το φάρμακο",
    "russian": "лекарство",
    "type": "noun"
  },
  {
    "greek": "το φεγγάρι",
    "russian": "луна",
    "type": "noun"
  },
  {
    "greek": "το φεστιβάλ",
    "russian": "фестиваль",
    "type": "noun"
  },
  {
    "greek": "το φθινόπωρο",
    "russian": "осень",
    "type": "noun"
  },
  {
    "greek": "η φίλη",
    "russian": "подруга",
    "type": "noun"
  },
  {
    "greek": "το φιλί",
    "russian": "поцелуй",
    "type": "noun"
  },
  {
    "greek": "η φιλία",
    "russian": "дружба",
    "type": "noun"
  },
  {
    "greek": "ο φίλος",
    "russian": "друг",
    "type": "noun"
  },
  {
    "greek": "ο φόβος",
    "russian": "страх",
    "type": "noun"
  },
  {
    "greek": "ο φοιτητής",
    "russian": "студент",
    "type": "noun"
  },
  {
    "greek": "η φορά",
    "russian": "раз",
    "type": "noun"
  },
  {
    "greek": "ο φούρνος",
    "russian": "печь, духовка; пекарня",
    "type": "noun"
  },
  {
    "greek": "η φράση",
    "russian": "фраза, предложение",
    "type": "noun"
  },
  {
    "greek": "το φρούτο",
    "russian": "фрукт",
    "type": "noun"
  },
  {
    "greek": "η φωτογραφία",
    "russian": "фотография",
    "type": "noun"
  },
  {
    "greek": "η χαρά",
    "russian": "радость",
    "type": "noun"
  },
  {
    "greek": "ο χαρακτήρας",
    "russian": "характер",
    "type": "noun"
  },
  {
    "greek": "ο χάρτης",
    "russian": "карта",
    "type": "noun"
  },
  {
    "greek": "το χαρτί",
    "russian": "бумага",
    "type": "noun"
  },
  {
    "greek": "το χέρι",
    "russian": "рука",
    "type": "noun"
  },
  {
    "greek": "το χιόνι",
    "russian": "снег",
    "type": "noun"
  },
  {
    "greek": "ο χορός",
    "russian": "танец",
    "type": "noun"
  },
  {
    "greek": "τα χρήματα",
    "russian": "деньги",
    "type": "noun"
  },
  {
    "greek": "η χρονιά",
    "russian": "год",
    "type": "noun"
  },
  {
    "greek": "ο χρόνος",
    "russian": "время, год",
    "type": "noun"
  },
  {
    "greek": "το χρώμα",
    "russian": "цвет",
    "type": "noun"
  },
  {
    "greek": "ο χυμός",
    "russian": "сок",
    "type": "noun"
  },
  {
    "greek": "η χώρα",
    "russian": "страна",
    "type": "noun"
  },
  {
    "greek": "το χωριό",
    "russian": "деревня",
    "type": "noun"
  },
  {
    "greek": "ο χωρισμός",
    "russian": "развод, разлука",
    "type": "noun"
  },
  {
    "greek": "ο χώρος",
    "russian": "пространство, место",
    "type": "noun"
  },
  {
    "greek": "το ψάρι",
    "russian": "рыба",
    "type": "noun"
  },
  {
    "greek": "το ψέμα",
    "russian": "ложь",
    "type": "noun"
  },
  {
    "greek": "το ψυγείο",
    "russian": "холодильник",
    "type": "noun"
  },
  {
    "greek": "το ψωμί",
    "russian": "хлеб",
    "type": "noun"
  },
  {
    "greek": "τα ψώνια",
    "russian": "покупки, шопинг",
    "type": "noun"
  },
  {
    "greek": "η ώρα",
    "russian": "час, время",
    "type": "noun"
  },
  {
    "greek": "το ωράριο",
    "russian": "расписание, график работы",
    "type": "noun"
  },
  {
    "greek": "αγαπημένος",
    "russian": "любимый",
    "type": "adjective"
  },
  {
    "greek": "αγγλικός",
    "russian": "английский",
    "type": "adjective"
  },
  {
    "greek": "αγενής",
    "russian": "невежливый, грубый",
    "type": "adjective"
  },
  {
    "greek": "άγνωστος",
    "russian": "неизвестный, незнакомый",
    "type": "adjective"
  },
  {
    "greek": "αδύναμος",
    "russian": "слабый",
    "type": "adjective"
  },
  {
    "greek": "ακριβός",
    "russian": "дорогой",
    "type": "adjective"
  },
  {
    "greek": "αλμυρός",
    "russian": "солёный",
    "type": "adjective"
  },
  {
    "greek": "άνεργος",
    "russian": "безработный",
    "type": "adjective"
  },
  {
    "greek": "ανοιχτός",
    "russian": "открытый",
    "type": "adjective"
  },
  {
    "greek": "άνοστος",
    "russian": "безвкусный, пресный",
    "type": "adjective"
  },
  {
    "greek": "αντιπαθητικός",
    "russian": "неприятный, несимпатичный",
    "type": "adjective"
  },
  {
    "greek": "απασχολημένος",
    "russian": "занятый",
    "type": "adjective"
  },
  {
    "greek": "απλός",
    "russian": "простой",
    "type": "adjective"
  },
  {
    "greek": "αργός",
    "russian": "медленный",
    "type": "adjective"
  },
  {
    "greek": "αρκετός",
    "russian": "достаточный",
    "type": "adjective"
  },
  {
    "greek": "άρρωστος",
    "russian": "больной",
    "type": "adjective"
  },
  {
    "greek": "ασήμαντος",
    "russian": "незначительный",
    "type": "adjective"
  },
  {
    "greek": "άσπρος",
    "russian": "белый",
    "type": "adjective"
  },
  {
    "greek": "αστείος",
    "russian": "смешной",
    "type": "adjective"
  },
  {
    "greek": "άσχημος",
    "russian": "некрасивый, уродливый",
    "type": "adjective"
  },
  {
    "greek": "άχρηστος",
    "russian": "бесполезный",
    "type": "adjective"
  },
  {
    "greek": "βαρετός",
    "russian": "скучный",
    "type": "adjective"
  },
  {
    "greek": "βιογραφικός",
    "russian": "биографический",
    "type": "adjective"
  },
  {
    "greek": "βραστός",
    "russian": "вареный",
    "type": "adjective"
  },
  {
    "greek": "βροχερός",
    "russian": "дождливый",
    "type": "adjective"
  },
  {
    "greek": "βρώμικος",
    "russian": "грязный",
    "type": "adjective"
  },
  {
    "greek": "γεμάτος",
    "russian": "полный",
    "type": "adjective"
  },
  {
    "greek": "γέρος",
    "russian": "старый (о человеке)",
    "type": "adjective"
  },
  {
    "greek": "γκρίζος",
    "russian": "серый",
    "type": "adjective"
  },
  {
    "greek": "γλυκός",
    "russian": "сладкий",
    "type": "adjective"
  },
  {
    "greek": "γνωστός",
    "russian": "знакомый, известный",
    "type": "adjective"
  },
  {
    "greek": "γραπτός",
    "russian": "письменный",
    "type": "adjective"
  },
  {
    "greek": "γρήγορος",
    "russian": "быстрый",
    "type": "adjective"
  },
  {
    "greek": "δέκατος",
    "russian": "десятый",
    "type": "adjective"
  },
  {
    "greek": "δεύτερος",
    "russian": "второй",
    "type": "adjective"
  },
  {
    "greek": "δημόσιος",
    "russian": "общественный, государственный",
    "type": "adjective"
  },
  {
    "greek": "δημοτικός",
    "russian": "муниципальный, начальный",
    "type": "adjective"
  },
  {
    "greek": "διάσημος",
    "russian": "знаменитый, известный",
    "type": "adjective"
  },
  {
    "greek": "διαφορετικός",
    "russian": "разный, различный",
    "type": "adjective"
  },
  {
    "greek": "διάφορος",
    "russian": "разный, различный",
    "type": "adjective"
  },
  {
    "greek": "δίκλινος",
    "russian": "двухместный",
    "type": "adjective"
  },
  {
    "greek": "δικός",
    "russian": "свой, мой, твой",
    "type": "adjective"
  },
  {
    "greek": "διπλός",
    "russian": "двойной",
    "type": "adjective"
  },
  {
    "greek": "διψασμένος",
    "russian": "жаждущий",
    "type": "adjective"
  },
  {
    "greek": "δυνατός",
    "russian": "сильный, громкий",
    "type": "adjective"
  },
  {
    "greek": "δύσκολος",
    "russian": "трудный",
    "type": "adjective"
  },
  {
    "greek": "ειδικός",
    "russian": "специальный; специалист",
    "type": "adjective"
  },
  {
    "greek": "εκατό",
    "russian": "сто",
    "type": "adjective"
  },
  {
    "greek": "εκπαιδευτικός",
    "russian": "образовательный, учебный",
    "type": "adjective"
  },
  {
    "greek": "ελεύθερος",
    "russian": "свободный",
    "type": "adjective"
  },
  {
    "greek": "ελληνικός",
    "russian": "греческий",
    "type": "adjective"
  },
  {
    "greek": "έμπειρος",
    "russian": "опытный",
    "type": "adjective"
  },
  {
    "greek": "ενδιαφέρον",
    "russian": "интересный",
    "type": "adjective"
  },
  {
    "greek": "έξυπνος",
    "russian": "умный",
    "type": "adjective"
  },
  {
    "greek": "εξωτερικός",
    "russian": "внешний, наружный",
    "type": "adjective"
  },
  {
    "greek": "επαγγελματικός",
    "russian": "профессиональный",
    "type": "adjective"
  },
  {
    "greek": "επόμενος",
    "russian": "следующий",
    "type": "adjective"
  },
  {
    "greek": "ερωτευμένος",
    "russian": "влюблённый",
    "type": "adjective"
  },
  {
    "greek": "έτοιμος",
    "russian": "готовый",
    "type": "adjective"
  },
  {
    "greek": "ευγενικός",
    "russian": "вежливый, любезный",
    "type": "adjective"
  },
  {
    "greek": "εύκολος",
    "russian": "лёгкий, простой",
    "type": "adjective"
  },
  {
    "greek": "ευρωπαϊκός",
    "russian": "европейский",
    "type": "adjective"
  },
  {
    "greek": "ζεστός",
    "russian": "горячий, жаркий",
    "type": "adjective"
  },
  {
    "greek": "ζωγραφικός",
    "russian": "живописный, художественный",
    "type": "adjective"
  },
  {
    "greek": "ηλεκτρικός",
    "russian": "электрический",
    "type": "adjective"
  },
  {
    "greek": "ηλεκτρονικός",
    "russian": "электронный",
    "type": "adjective"
  },
  {
    "greek": "ηλιόλουστος",
    "russian": "солнечный",
    "type": "adjective"
  },
  {
    "greek": "ήσυχος",
    "russian": "тихий, спокойный",
    "type": "adjective"
  },
  {
    "greek": "θεατρικός",
    "russian": "театральный",
    "type": "adjective"
  },
  {
    "greek": "θεματικός",
    "russian": "тематический",
    "type": "adjective"
  },
  {
    "greek": "θυμωμένος",
    "russian": "сердитый, злой",
    "type": "adjective"
  },
  {
    "greek": "ίδιος",
    "russian": "тот же, одинаковый",
    "type": "adjective"
  },
  {
    "greek": "ισόγειος",
    "russian": "первый этаж, партер",
    "type": "adjective"
  },
  {
    "greek": "ιστορικός",
    "russian": "исторический",
    "type": "adjective"
  },
  {
    "greek": "καθαρός",
    "russian": "чистый",
    "type": "adjective"
  },
  {
    "greek": "κάθε",
    "russian": "каждый",
    "type": "adjective"
  },
  {
    "greek": "καθημερινός",
    "russian": "ежедневный, повседневный",
    "type": "adjective"
  },
  {
    "greek": "καινούργιος",
    "russian": "новый",
    "type": "adjective"
  },
  {
    "greek": "κακός",
    "russian": "плохой, злой",
    "type": "adjective"
  },
  {
    "greek": "καλός",
    "russian": "хороший",
    "type": "adjective"
  },
  {
    "greek": "καφέ",
    "russian": "коричневый",
    "type": "adjective"
  },
  {
    "greek": "κενός",
    "russian": "пустой",
    "type": "adjective"
  },
  {
    "greek": "κινητός",
    "russian": "подвижный, мобильный",
    "type": "adjective"
  },
  {
    "greek": "κίτρινος",
    "russian": "жёлтый",
    "type": "adjective"
  },
  {
    "greek": "κλειστός",
    "russian": "закрытый",
    "type": "adjective"
  },
  {
    "greek": "κόκκινος",
    "russian": "красный",
    "type": "adjective"
  },
  {
    "greek": "κοντός",
    "russian": "короткий, низкий",
    "type": "adjective"
  },
  {
    "greek": "κουρασμένος",
    "russian": "усталый",
    "type": "adjective"
  },
  {
    "greek": "κρύος",
    "russian": "холодный",
    "type": "adjective"
  },
  {
    "greek": "κύριος",
    "russian": "главный, господин",
    "type": "adjective"
  },
  {
    "greek": "λάθος",
    "russian": "неправильный, ошибочный",
    "type": "adjective"
  },
  {
    "greek": "λεπτός",
    "russian": "тонкий, худой",
    "type": "adjective"
  },
  {
    "greek": "λίγος",
    "russian": "мало, немного",
    "type": "adjective"
  },
  {
    "greek": "λυπημένος",
    "russian": "грустный, расстроенный",
    "type": "adjective"
  },
  {
    "greek": "μαγειρικός",
    "russian": "кулинарный",
    "type": "adjective"
  },
  {
    "greek": "μαζικός",
    "russian": "массовый",
    "type": "adjective"
  },
  {
    "greek": "μακρινός",
    "russian": "далёкий, дальний",
    "type": "adjective"
  },
  {
    "greek": "μαύρος",
    "russian": "чёрный",
    "type": "adjective"
  },
  {
    "greek": "μεγάλος",
    "russian": "большой, старший",
    "type": "adjective"
  },
  {
    "greek": "μερικός",
    "russian": "некоторый, несколько",
    "type": "adjective"
  },
  {
    "greek": "μέτριος",
    "russian": "средний, умеренный",
    "type": "adjective"
  },
  {
    "greek": "μικρός",
    "russian": "маленький, младший",
    "type": "adjective"
  },
  {
    "greek": "μισός",
    "russian": "половина, полу-",
    "type": "adjective"
  },
  {
    "greek": "μοβ",
    "russian": "фиолетовый",
    "type": "adjective"
  },
  {
    "greek": "μοντέρνος",
    "russian": "современный",
    "type": "adjective"
  },
  {
    "greek": "μπλε",
    "russian": "синий, голубой",
    "type": "adjective"
  },
  {
    "greek": "νέος",
    "russian": "молодой, новый",
    "type": "adjective"
  },
  {
    "greek": "νόστιμος",
    "russian": "вкусный",
    "type": "adjective"
  },
  {
    "greek": "ξένος",
    "russian": "чужой, иностранный",
    "type": "adjective"
  },
  {
    "greek": "ξινός",
    "russian": "кислый",
    "type": "adjective"
  },
  {
    "greek": "οικογενειακός",
    "russian": "семейный",
    "type": "adjective"
  },
  {
    "greek": "οικονομικός",
    "russian": "экономический, дешёвый",
    "type": "adjective"
  },
  {
    "greek": "όλος",
    "russian": "весь, целый",
    "type": "adjective"
  },
  {
    "greek": "όμορφος",
    "russian": "красивый",
    "type": "adjective"
  },
  {
    "greek": "παιδικός",
    "russian": "детский",
    "type": "adjective"
  },
  {
    "greek": "παλιός",
    "russian": "старый",
    "type": "adjective"
  },
  {
    "greek": "παντρεμένος",
    "russian": "женатый, замужняя",
    "type": "adjective"
  },
  {
    "greek": "παραδοσιακός",
    "russian": "традиционный",
    "type": "adjective"
  },
  {
    "greek": "πεινασμένος",
    "russian": "голодный",
    "type": "adjective"
  },
  {
    "greek": "πέμπτος",
    "russian": "пятый",
    "type": "adjective"
  },
  {
    "greek": "περιοδικός",
    "russian": "периодический; журнал",
    "type": "adjective"
  },
  {
    "greek": "περίπλοκος",
    "russian": "сложный",
    "type": "adjective"
  },
  {
    "greek": "περισσότερος",
    "russian": "больше",
    "type": "adjective"
  },
  {
    "greek": "πικρός",
    "russian": "горький",
    "type": "adjective"
  },
  {
    "greek": "πλούσιος",
    "russian": "богатый",
    "type": "adjective"
  },
  {
    "greek": "πολύς",
    "russian": "много",
    "type": "adjective"
  },
  {
    "greek": "πράσινος",
    "russian": "зелёный",
    "type": "adjective"
  },
  {
    "greek": "προηγούμενος",
    "russian": "предыдущий",
    "type": "adjective"
  },
  {
    "greek": "προσεκτικός",
    "russian": "осторожный, внимательный",
    "type": "adjective"
  },
  {
    "greek": "πρωινός",
    "russian": "утренний",
    "type": "adjective"
  },
  {
    "greek": "πρώτος",
    "russian": "первый",
    "type": "adjective"
  },
  {
    "greek": "ραδιοφωνικός",
    "russian": "радио-, радиофонический",
    "type": "adjective"
  },
  {
    "greek": "σημαντικός",
    "russian": "важный",
    "type": "adjective"
  },
  {
    "greek": "συμπαθητικός",
    "russian": "симпатичный, приятный",
    "type": "adjective"
  },
  {
    "greek": "σύντομος",
    "russian": "короткий, краткий",
    "type": "adjective"
  },
  {
    "greek": "συστημένος",
    "russian": "заказной, рекомендуемый",
    "type": "adjective"
  },
  {
    "greek": "συχνός",
    "russian": "частый",
    "type": "adjective"
  },
  {
    "greek": "σχολικός",
    "russian": "школьный",
    "type": "adjective"
  },
  {
    "greek": "σωστός",
    "russian": "правильный, верный",
    "type": "adjective"
  },
  {
    "greek": "τελευταίος",
    "russian": "последний",
    "type": "adjective"
  },
  {
    "greek": "τελικός",
    "russian": "финальный, окончательный",
    "type": "adjective"
  },
  {
    "greek": "τέταρτος",
    "russian": "четвёртый",
    "type": "adjective"
  },
  {
    "greek": "τέτοιος",
    "russian": "такой",
    "type": "adjective"
  },
  {
    "greek": "τρίτος",
    "russian": "третий",
    "type": "adjective"
  },
  {
    "greek": "υγιής",
    "russian": "здоровый",
    "type": "adjective"
  },
  {
    "greek": "υπέροχος",
    "russian": "замечательный, великолепный",
    "type": "adjective"
  },
  {
    "greek": "υπεύθυνος",
    "russian": "ответственный",
    "type": "adjective"
  },
  {
    "greek": "φασαριόζος",
    "russian": "шумный",
    "type": "adjective"
  },
  {
    "greek": "φετινός",
    "russian": "нынешний, этого года",
    "type": "adjective"
  },
  {
    "greek": "φθηνός",
    "russian": "дешёвый",
    "type": "adjective"
  },
  {
    "greek": "φιλικός",
    "russian": "дружеский, дружелюбный",
    "type": "adjective"
  },
  {
    "greek": "φοβισμένος",
    "russian": "испуганный, напуганный",
    "type": "adjective"
  },
  {
    "greek": "φρέσκος",
    "russian": "свежий",
    "type": "adjective"
  },
  {
    "greek": "φτηνός",
    "russian": "дешёвый",
    "type": "adjective"
  },
  {
    "greek": "φτωχός",
    "russian": "бедный",
    "type": "adjective"
  },
  {
    "greek": "φωτεινός",
    "russian": "светлый, яркий",
    "type": "adjective"
  },
  {
    "greek": "χαλασμένος",
    "russian": "испорченный",
    "type": "adjective"
  },
  {
    "greek": "χαλκιδικός",
    "russian": "медный",
    "type": "adjective"
  },
  {
    "greek": "χαμηλός",
    "russian": "низкий",
    "type": "adjective"
  },
  {
    "greek": "χαρούμενος",
    "russian": "радостный, весёлый",
    "type": "adjective"
  },
  {
    "greek": "χίλια",
    "russian": "тысяча",
    "type": "adjective"
  },
  {
    "greek": "χοντρός",
    "russian": "толстый",
    "type": "adjective"
  },
  {
    "greek": "χρήσιμος",
    "russian": "полезный",
    "type": "adjective"
  },
  {
    "greek": "χωριάτικος",
    "russian": "деревенский, сельский",
    "type": "adjective"
  },
  {
    "greek": "ψηλός",
    "russian": "высокий",
    "type": "adjective"
  },
  {
    "greek": "ψηφιακός",
    "russian": "цифровой",
    "type": "adjective"
  },
  {
    "greek": "ωραίος",
    "russian": "красивый, прекрасн",
    "type": "adjective"
  },
  {
    "greek": "ακόμα",
    "russian": "ещё",
    "type": "adverb"
  },
  {
    "greek": "αμέσως",
    "russian": "сразу, немедленно",
    "type": "adverb"
  },
  {
    "greek": "αργά",
    "russian": "поздно, медленно",
    "type": "adverb"
  },
  {
    "greek": "αρκετά",
    "russian": "довольно, достаточно",
    "type": "adverb"
  },
  {
    "greek": "αύριο",
    "russian": "завтра",
    "type": "adverb"
  },
  {
    "greek": "βέβαια",
    "russian": "конечно, разумеется",
    "type": "adverb"
  },
  {
    "greek": "γρήγορα",
    "russian": "быстро",
    "type": "adverb"
  },
  {
    "greek": "γύρω",
    "russian": "вокруг",
    "type": "adverb"
  },
  {
    "greek": "δηλαδή",
    "russian": "то есть, значит",
    "type": "adverb"
  },
  {
    "greek": "δίπλα",
    "russian": "рядом, около",
    "type": "adverb"
  },
  {
    "greek": "δύσκολα",
    "russian": "трудно",
    "type": "adverb"
  },
  {
    "greek": "δυστυχώς",
    "russian": "к сожалению",
    "type": "adverb"
  },
  {
    "greek": "δωρεάν",
    "russian": "бесплатно",
    "type": "adverb"
  },
  {
    "greek": "εδώ",
    "russian": "здесь",
    "type": "adverb"
  },
  {
    "greek": "εντάξει",
    "russian": "хорошо, ладно, порядке",
    "type": "adverb"
  },
  {
    "greek": "έξω",
    "russian": "снаружи, вне",
    "type": "adverb"
  },
  {
    "greek": "επιπλέον",
    "russian": "кроме того, дополнительно",
    "type": "adverb"
  },
  {
    "greek": "επίσης",
    "russian": "также, тоже",
    "type": "adverb"
  },
  {
    "greek": "έτσι",
    "russian": "так, таким образом",
    "type": "adverb"
  },
  {
    "greek": "εύκολα",
    "russian": "легко",
    "type": "adverb"
  },
  {
    "greek": "ήδη",
    "russian": "уже",
    "type": "adverb"
  },
  {
    "greek": "ίσως",
    "russian": "возможно, может быть",
    "type": "adverb"
  },
  {
    "greek": "καθόλου",
    "russian": "совсем, вовсе",
    "type": "adverb"
  },
  {
    "greek": "κακά",
    "russian": "плохо",
    "type": "adverb"
  },
  {
    "greek": "καλά",
    "russian": "хорошо",
    "type": "adverb"
  },
  {
    "greek": "καμιά φορά",
    "russian": "иногда",
    "type": "adverb"
  },
  {
    "greek": "κάτω",
    "russian": "вниз, внизу",
    "type": "adverb"
  },
  {
    "greek": "κιόλας",
    "russian": "уже, даже",
    "type": "adverb"
  },
  {
    "greek": "κοντά",
    "russian": "близко, рядом",
    "type": "adverb"
  },
  {
    "greek": "λίγο",
    "russian": "немного, мало",
    "type": "adverb"
  },
  {
    "greek": "λοιπόν",
    "russian": "итак, ну",
    "type": "adverb"
  },
  {
    "greek": "μαζί",
    "russian": "вместе",
    "type": "adverb"
  },
  {
    "greek": "μακριά",
    "russian": "далеко",
    "type": "adverb"
  },
  {
    "greek": "μάλιστα",
    "russian": "конечно, да",
    "type": "adverb"
  },
  {
    "greek": "μέσα",
    "russian": "внутри, в",
    "type": "adverb"
  },
  {
    "greek": "μόλις",
    "russian": "только что, едва в μόνο – только",
    "type": "adverb"
  },
  {
    "greek": "μπροστά",
    "russian": "впереди, перед",
    "type": "adverb"
  },
  {
    "greek": "νωρίς",
    "russian": "рано",
    "type": "adverb"
  },
  {
    "greek": "ξανά",
    "russian": "снова, опять",
    "type": "adverb"
  },
  {
    "greek": "όπως",
    "russian": "как, так как",
    "type": "adverb"
  },
  {
    "greek": "όχι",
    "russian": "нет, не",
    "type": "adverb"
  },
  {
    "greek": "πάντα",
    "russian": "всегда",
    "type": "adverb"
  },
  {
    "greek": "πάνω",
    "russian": "вверх, наверху",
    "type": "adverb"
  },
  {
    "greek": "παρακάτω",
    "russian": "ниже, далее",
    "type": "adverb"
  },
  {
    "greek": "περίπου",
    "russian": "примерно, около",
    "type": "adverb"
  },
  {
    "greek": "πέρυσι",
    "russian": "в прошлом году",
    "type": "adverb"
  },
  {
    "greek": "πίσω",
    "russian": "назад, сзади",
    "type": "adverb"
  },
  {
    "greek": "πολύ",
    "russian": "очень, много",
    "type": "adverb"
  },
  {
    "greek": "πόσο",
    "russian": "сколько",
    "type": "adverb"
  },
  {
    "greek": "ποτέ",
    "russian": "никогда",
    "type": "adverb"
  },
  {
    "greek": "πότε",
    "russian": "когда",
    "type": "adverb"
  },
  {
    "greek": "πού",
    "russian": "где, куда",
    "type": "adverb"
  },
  {
    "greek": "προχθές",
    "russian": "позавчера",
    "type": "adverb"
  },
  {
    "greek": "πρώτα",
    "russian": "сначала",
    "type": "adverb"
  },
  {
    "greek": "πώς",
    "russian": "как",
    "type": "adverb"
  },
  {
    "greek": "σήμερα",
    "russian": "сегодня",
    "type": "adverb"
  },
  {
    "greek": "σπάνια",
    "russian": "редко",
    "type": "adverb"
  },
  {
    "greek": "συνήθως",
    "russian": "обычно",
    "type": "adverb"
  },
  {
    "greek": "συχνά",
    "russian": "часто",
    "type": "adverb"
  },
  {
    "greek": "τέλος πάντων",
    "russian": "в конце концов",
    "type": "adverb"
  },
  {
    "greek": "τόσο",
    "russian": "так, настолько",
    "type": "adverb"
  },
  {
    "greek": "τότε",
    "russian": "тогда",
    "type": "adverb"
  },
  {
    "greek": "τώρα",
    "russian": "сейчас",
    "type": "adverb"
  },
  {
    "greek": "φέτος",
    "russian": "в этом году",
    "type": "adverb"
  },
  {
    "greek": "χθες",
    "russian": "вчера",
    "type": "adverb"
  },
  {
    "greek": "αγαπάω",
    "russian": "любить",
    "type": "verb"
  },
  {
    "greek": "αγοράζω",
    "russian": "покупать",
    "type": "verb"
  },
  {
    "greek": "ακολουθώ",
    "russian": "следовать",
    "type": "verb"
  },
  {
    "greek": "ακούω",
    "russian": "слышать, слушать",
    "type": "verb"
  },
  {
    "greek": "αλλάζω",
    "russian": "меняю, изменяю",
    "type": "verb"
  },
  {
    "greek": "ανακατεύω",
    "russian": "мешать, перемешивать",
    "type": "verb"
  },
  {
    "greek": "αναχωρώ",
    "russian": "отправляться",
    "type": "verb"
  },
  {
    "greek": "ανεβάζω",
    "russian": "поднимать, повышать",
    "type": "verb"
  },
  {
    "greek": "ανησυχώ",
    "russian": "беспокоиться, волноваться",
    "type": "verb"
  },
  {
    "greek": "ανοίγω",
    "russian": "открывать",
    "type": "verb"
  },
  {
    "greek": "αντιλαμβάνομαι",
    "russian": "понимаю, осознаю",
    "type": "verb"
  },
  {
    "greek": "αντιστοιχώ",
    "russian": "соответствовать",
    "type": "verb"
  },
  {
    "greek": "αποβιβάζομαι",
    "russian": "выходить (из транспорта)",
    "type": "verb"
  },
  {
    "greek": "απογειώνομαι",
    "russian": "взлетать",
    "type": "verb"
  },
  {
    "greek": "απολογούμαι",
    "russian": "извиняться, оправдываться",
    "type": "verb"
  },
  {
    "greek": "απολύω",
    "russian": "увольнять",
    "type": "verb"
  },
  {
    "greek": "αποτυγχάνω",
    "russian": "терпеть неудачу, не удаваться",
    "type": "verb"
  },
  {
    "greek": "αποφασίζω",
    "russian": "решать",
    "type": "verb"
  },
  {
    "greek": "αργώ",
    "russian": "опаздывать",
    "type": "verb"
  },
  {
    "greek": "αρνούμαι",
    "russian": "отказываться, отрицать",
    "type": "verb"
  },
  {
    "greek": "αρρωσταίνω",
    "russian": "болеть, заболевать",
    "type": "verb"
  },
  {
    "greek": "αρχίζω",
    "russian": "начинать",
    "type": "verb"
  },
  {
    "greek": "ασθενώ",
    "russian": "болеть, быть больным",
    "type": "verb"
  },
  {
    "greek": "αφαιρώ",
    "russian": "убирать, снимать, вычитать",
    "type": "verb"
  },
  {
    "greek": "αφηγούμαι",
    "russian": "повествовать, излагать",
    "type": "verb"
  },
  {
    "greek": "αφήνω",
    "russian": "оставляю, позволяю",
    "type": "verb"
  },
  {
    "greek": "αφιερώνω",
    "russian": "посвящать",
    "type": "verb"
  },
  {
    "greek": "βάζω",
    "russian": "класть, ставить",
    "type": "verb"
  },
  {
    "greek": "βάζω στόχο",
    "russian": "ставить цель",
    "type": "verb"
  },
  {
    "greek": "βάζω τραπέζι",
    "russian": "накрывать на стол",
    "type": "verb"
  },
  {
    "greek": "βγάζω",
    "russian": "вынимаю, снимаю, зарабатываю",
    "type": "verb"
  },
  {
    "greek": "βγαίνω",
    "russian": "выходить, идти гулять",
    "type": "verb"
  },
  {
    "greek": "βλέπω",
    "russian": "видеть, смотреть",
    "type": "verb"
  },
  {
    "greek": "βράζω",
    "russian": "кипеть, варить",
    "type": "verb"
  },
  {
    "greek": "βρέχω",
    "russian": "поливать, мочить; безлично: идёт дождь",
    "type": "verb"
  },
  {
    "greek": "βρίσκομαι",
    "russian": "находиться",
    "type": "verb"
  },
  {
    "greek": "βρίσκω",
    "russian": "находить",
    "type": "verb"
  },
  {
    "greek": "γεννιέμαι",
    "russian": "рождаться",
    "type": "verb"
  },
  {
    "greek": "γίνομαι",
    "russian": "становиться, происходить",
    "type": "verb"
  },
  {
    "greek": "γιορτάζω",
    "russian": "праздновать",
    "type": "verb"
  },
  {
    "greek": "γράφω",
    "russian": "писать",
    "type": "verb"
  },
  {
    "greek": "γυρίζω",
    "russian": "возвращаться, поворачивать",
    "type": "verb"
  },
  {
    "greek": "δείχνω",
    "russian": "показывать",
    "type": "verb"
  },
  {
    "greek": "δέχομαι",
    "russian": "принимать, соглашаться",
    "type": "verb"
  },
  {
    "greek": "διαβάζω",
    "russian": "читать",
    "type": "verb"
  },
  {
    "greek": "διαλέγω",
    "russian": "выбирать",
    "type": "verb"
  },
  {
    "greek": "διαμαρτύρομαι",
    "russian": "протестовать, жаловаться",
    "type": "verb"
  },
  {
    "greek": "διασκεδάζω",
    "russian": "развлекаться, веселиться",
    "type": "verb"
  },
  {
    "greek": "διασχίζω",
    "russian": "пересекать, переходить",
    "type": "verb"
  },
  {
    "greek": "διευθύνω",
    "russian": "руководить, управлять",
    "type": "verb"
  },
  {
    "greek": "διηγούμαι",
    "russian": "рассказывать",
    "type": "verb"
  },
  {
    "greek": "δίνω",
    "russian": "давать",
    "type": "verb"
  },
  {
    "greek": "δίνω δώρο",
    "russian": "дарить подарок",
    "type": "verb"
  },
  {
    "greek": "δίνω εξετάσεις",
    "russian": "сдавать экзамены",
    "type": "verb"
  },
  {
    "greek": "δίνω σημασία",
    "russian": "обращать внимание, придавать значение",
    "type": "verb"
  },
  {
    "greek": "δίνω συμβουλή",
    "russian": "давать совет",
    "type": "verb"
  },
  {
    "greek": "δοκιμάζω",
    "russian": "пробовать",
    "type": "verb"
  },
  {
    "greek": "δουλεύω",
    "russian": "работать",
    "type": "verb"
  },
  {
    "greek": "έβρεξε",
    "russian": "шел дождь",
    "type": "verb"
  },
  {
    "greek": "είμαι",
    "russian": "быть, являться",
    "type": "verb"
  },
  {
    "greek": "εκπλήσσομαι",
    "russian": "удивляться, поражаться",
    "type": "verb"
  },
  {
    "greek": "εκφράζω",
    "russian": "выражать",
    "type": "verb"
  },
  {
    "greek": "ενδιαφέρομαι",
    "russian": "интересоваться",
    "type": "verb"
  },
  {
    "greek": "ενημερώνω",
    "russian": "информировать, уведомлять",
    "type": "verb"
  },
  {
    "greek": "εξετάζω",
    "russian": "осматривать, обследовать",
    "type": "verb"
  },
  {
    "greek": "εξηγώ",
    "russian": "объяснять",
    "type": "verb"
  },
  {
    "greek": "επιβιβάζομαι",
    "russian": "садиться (в транспорт)",
    "type": "verb"
  },
  {
    "greek": "επιλέγω",
    "russian": "выбирать",
    "type": "verb"
  },
  {
    "greek": "επισκέπτομαι",
    "russian": "посещать, навещать",
    "type": "verb"
  },
  {
    "greek": "επιστρέφω",
    "russian": "возвращаться",
    "type": "verb"
  },
  {
    "greek": "επιτυγχάνω",
    "russian": "достигать, добиваться успеха",
    "type": "verb"
  },
  {
    "greek": "εργάζομαι",
    "russian": "работать",
    "type": "verb"
  },
  {
    "greek": "έρχομαι",
    "russian": "приходить, прийти",
    "type": "verb"
  },
  {
    "greek": "ετοιμάζω",
    "russian": "готовить, подготавливать",
    "type": "verb"
  },
  {
    "greek": "έχω",
    "russian": "иметь",
    "type": "verb"
  },
  {
    "greek": "ζητάω",
    "russian": "просить, искать",
    "type": "verb"
  },
  {
    "greek": "ζω",
    "russian": "жить",
    "type": "verb"
  },
  {
    "greek": "ζωγραφίζω",
    "russian": "рисовать",
    "type": "verb"
  },
  {
    "greek": "ηρεμώ",
    "russian": "успокаиваться, утихать",
    "type": "verb"
  },
  {
    "greek": "θέλω",
    "russian": "хотеть",
    "type": "verb"
  },
  {
    "greek": "θεραπεύω",
    "russian": "лечить, излечивать",
    "type": "verb"
  },
  {
    "greek": "θέτω",
    "russian": "ставлю, помещаю",
    "type": "verb"
  },
  {
    "greek": "θυμάμαι",
    "russian": "помнить",
    "type": "verb"
  },
  {
    "greek": "καθαρίζω",
    "russian": "убирать,",
    "type": "verb"
  },
  {
    "greek": "κάθομαι",
    "russian": "сидеть",
    "type": "verb"
  },
  {
    "greek": "καλώ",
    "russian": "звать, приглашать",
    "type": "verb"
  },
  {
    "greek": "κάνει ζέστη",
    "russian": "жарко (о погоде)",
    "type": "verb"
  },
  {
    "greek": "κάνω",
    "russian": "делать",
    "type": "verb"
  },
  {
    "greek": "καταλαβαίνω",
    "russian": "понимаю",
    "type": "verb"
  },
  {
    "greek": "καταφέρνω",
    "russian": "удаваться, справляться",
    "type": "verb"
  },
  {
    "greek": "κατεβάζω",
    "russian": "спускать, снижать",
    "type": "verb"
  },
  {
    "greek": "κερδίζω",
    "russian": "выигрывать, зарабатывать",
    "type": "verb"
  },
  {
    "greek": "κλείνω",
    "russian": "закрывать",
    "type": "verb"
  },
  {
    "greek": "κόβω",
    "russian": "резать",
    "type": "verb"
  },
  {
    "greek": "κοιμάμαι",
    "russian": "спать",
    "type": "verb"
  },
  {
    "greek": "κολυμπώ",
    "russian": "плавать",
    "type": "verb"
  },
  {
    "greek": "κοστίζω",
    "russian": "стоить",
    "type": "verb"
  },
  {
    "greek": "κόστισε",
    "russian": "стоил",
    "type": "verb"
  },
  {
    "greek": "κουράζομαι",
    "russian": "уставать",
    "type": "verb"
  },
  {
    "greek": "κρατάω",
    "russian": "держать, хранить",
    "type": "verb"
  },
  {
    "greek": "κρεμώ",
    "russian": "вешать, висеть",
    "type": "verb"
  },
  {
    "greek": "λέγομαι",
    "russian": "называться, зваться",
    "type": "verb"
  },
  {
    "greek": "λεγόμουν",
    "russian": "меня звали",
    "type": "verb"
  },
  {
    "greek": "λείπω",
    "russian": "отсутствовать, не хватать",
    "type": "verb"
  },
  {
    "greek": "λειτουργώ",
    "russian": "работаю, функционирую",
    "type": "verb"
  },
  {
    "greek": "λέω",
    "russian": "говорить, сказать",
    "type": "verb"
  },
  {
    "greek": "λούζομαι",
    "russian": "мыться, купаться",
    "type": "verb"
  },
  {
    "greek": "μαγειρεύω",
    "russian": "готовить (еду)",
    "type": "verb"
  },
  {
    "greek": "μαζεύω",
    "russian": "собирать",
    "type": "verb"
  },
  {
    "greek": "μαθαίνω",
    "russian": "учить, изучать",
    "type": "verb"
  },
  {
    "greek": "μεγαλώνω",
    "russian": "расти, становиться старше",
    "type": "verb"
  },
  {
    "greek": "μένω",
    "russian": "жить, оставаться",
    "type": "verb"
  },
  {
    "greek": "μετακινώ",
    "russian": "передвигать, перемещать",
    "type": "verb"
  },
  {
    "greek": "μετακομίζω",
    "russian": "переезжать",
    "type": "verb"
  },
  {
    "greek": "μιλάω",
    "russian": "говорить, разговаривать",
    "type": "verb"
  },
  {
    "greek": "μοιράζομαι",
    "russian": "делиться, разделять",
    "type": "verb"
  },
  {
    "greek": "μοιράζω",
    "russian": "делить, раздавать",
    "type": "verb"
  },
  {
    "greek": "μπαίνω",
    "russian": "входить",
    "type": "verb"
  },
  {
    "greek": "μπορώ",
    "russian": "мочь, уметь",
    "type": "verb"
  },
  {
    "greek": "νιώθω",
    "russian": "чувствовать, ощущать",
    "type": "verb"
  },
  {
    "greek": "νοιάζομαι",
    "russian": "заботиться, беспокоиться",
    "type": "verb"
  },
  {
    "greek": "νοικιάζω",
    "russian": "снимать, арендовать",
    "type": "verb"
  },
  {
    "greek": "νομίζω",
    "russian": "думать, считать",
    "type": "verb"
  },
  {
    "greek": "ξεκινώ",
    "russian": "начинать, отправляться",
    "type": "verb"
  },
  {
    "greek": "ξέρω",
    "russian": "знать",
    "type": "verb"
  },
  {
    "greek": "ξεχνώ",
    "russian": "забывать",
    "type": "verb"
  },
  {
    "greek": "ξεχωρίζω",
    "russian": "отличаю, выделяю",
    "type": "verb"
  },
  {
    "greek": "ξοδεύω",
    "russian": "тратить",
    "type": "verb"
  },
  {
    "greek": "ξυπνώ",
    "russian": "просыпаться",
    "type": "verb"
  },
  {
    "greek": "οδηγώ",
    "russian": "водить (машину), вести",
    "type": "verb"
  },
  {
    "greek": "ολοκληρώνω",
    "russian": "завершать, заканчивать",
    "type": "verb"
  },
  {
    "greek": "ονειρεύομαι",
    "russian": "мечтать, видеть сны",
    "type": "verb"
  },
  {
    "greek": "οργανώνω",
    "russian": "организовывать",
    "type": "verb"
  },
  {
    "greek": "παίζω",
    "russian": "играть",
    "type": "verb"
  },
  {
    "greek": "παίρνω",
    "russian": "брать, взять",
    "type": "verb"
  },
  {
    "greek": "παραγγέλνω",
    "russian": "заказывать",
    "type": "verb"
  },
  {
    "greek": "παραδίδω",
    "russian": "сдавать, передавать",
    "type": "verb"
  },
  {
    "greek": "παρακαλώ",
    "russian": "пожалуйста, прошу",
    "type": "verb"
  },
  {
    "greek": "παρακολουθώ",
    "russian": "следить, посещать, смотреть",
    "type": "verb"
  },
  {
    "greek": "παραπονιέμαι",
    "russian": "жаловаться, сетовать",
    "type": "verb"
  },
  {
    "greek": "παρκάρω",
    "russian": "парковаться",
    "type": "verb"
  },
  {
    "greek": "παρουσιάζω",
    "russian": "представлять, показывать",
    "type": "verb"
  },
  {
    "greek": "περιγράφω",
    "russian": "описывать",
    "type": "verb"
  },
  {
    "greek": "περιμένω",
    "russian": "ждать",
    "type": "verb"
  },
  {
    "greek": "περνώ",
    "russian": "проходить, проводить (время)",
    "type": "verb"
  },
  {
    "greek": "περπατώ",
    "russian": "ходить пешком, гулять",
    "type": "verb"
  },
  {
    "greek": "πετάω",
    "russian": "летать, бросать",
    "type": "verb"
  },
  {
    "greek": "πέφτω",
    "russian": "падать",
    "type": "verb"
  },
  {
    "greek": "πηγαίνω",
    "russian": "идти, ехать",
    "type": "verb"
  },
  {
    "greek": "πίνω",
    "russian": "пить",
    "type": "verb"
  },
  {
    "greek": "πιστεύω",
    "russian": "верить",
    "type": "verb"
  },
  {
    "greek": "πλένω",
    "russian": "мыть",
    "type": "verb"
  },
  {
    "greek": "πληρώνω",
    "russian": "платить",
    "type": "verb"
  },
  {
    "greek": "πόνεσα",
    "russian": "у меня болело",
    "type": "verb"
  },
  {
    "greek": "ποντάρω",
    "russian": "ставить (на что-то), делать ставку",
    "type": "verb"
  },
  {
    "greek": "πονώ",
    "russian": "болеть (о части тела)",
    "type": "verb"
  },
  {
    "greek": "πουλάω",
    "russian": "продавать",
    "type": "verb"
  },
  {
    "greek": "πουλώ",
    "russian": "продавать",
    "type": "verb"
  },
  {
    "greek": "πρέπει",
    "russian": "нужно, необходимо",
    "type": "verb"
  },
  {
    "greek": "προγραμματίζω",
    "russian": "планировать, программировать",
    "type": "verb"
  },
  {
    "greek": "προσγειώνομαι",
    "russian": "приземляться",
    "type": "verb"
  },
  {
    "greek": "προσέχω",
    "russian": "быть осторожным, заботиться",
    "type": "verb"
  },
  {
    "greek": "προσθέτω",
    "russian": "добавлять, прибавлять",
    "type": "verb"
  },
  {
    "greek": "προσκαλώ",
    "russian": "приглашать",
    "type": "verb"
  },
  {
    "greek": "προσλαμβάνω",
    "russian": "нанимать на работу",
    "type": "verb"
  },
  {
    "greek": "προσπαθώ",
    "russian": "пытаться, стараться",
    "type": "verb"
  },
  {
    "greek": "προσφέρω",
    "russian": "предлагать, предоставлять",
    "type": "verb"
  },
  {
    "greek": "προτιμώ",
    "russian": "предпочитать",
    "type": "verb"
  },
  {
    "greek": "προχωρώ",
    "russian": "идти вперёд, продвигаться",
    "type": "verb"
  },
  {
    "greek": "πώ",
    "russian": "сказать, говорить",
    "type": "verb"
  },
  {
    "greek": "ρίχνω",
    "russian": "бросать, кидать",
    "type": "verb"
  },
  {
    "greek": "ρίχνω μια ματιά",
    "russian": "бросить взгляд, взглянуть",
    "type": "verb"
  },
  {
    "greek": "ρωτάω",
    "russian": "спрашивать",
    "type": "verb"
  },
  {
    "greek": "σέβομαι",
    "russian": "уважать",
    "type": "verb"
  },
  {
    "greek": "σηκώνομαι",
    "russian": "вставать, подниматься",
    "type": "verb"
  },
  {
    "greek": "σηκώνω",
    "russian": "поднимать, будить",
    "type": "verb"
  },
  {
    "greek": "σημειώνω",
    "russian": "отмечать",
    "type": "verb"
  },
  {
    "greek": "σιδερώνω",
    "russian": "гладить (утюгом)",
    "type": "verb"
  },
  {
    "greek": "σκέφτομαι",
    "russian": "думать",
    "type": "verb"
  },
  {
    "greek": "σκουπίζω",
    "russian": "подметать, вытирать",
    "type": "verb"
  },
  {
    "greek": "σπουδάζω",
    "russian": "учиться, изучать",
    "type": "verb"
  },
  {
    "greek": "σπρώχνω",
    "russian": "толкать, пихать",
    "type": "verb"
  },
  {
    "greek": "στάζω",
    "russian": "капать",
    "type": "verb"
  },
  {
    "greek": "σταματάω",
    "russian": "останавливать(ся), прекращать",
    "type": "verb"
  },
  {
    "greek": "στέλνω",
    "russian": "отправлять, посылать",
    "type": "verb"
  },
  {
    "greek": "στρίβω",
    "russian": "поворачивать",
    "type": "verb"
  },
  {
    "greek": "συγκρίνω",
    "russian": "сравнивать",
    "type": "verb"
  },
  {
    "greek": "συγχαίρω",
    "russian": "поздравлять",
    "type": "verb"
  },
  {
    "greek": "συζητώ",
    "russian": "обсуждать, разговаривать",
    "type": "verb"
  },
  {
    "greek": "συλλέγω",
    "russian": "собирать, коллекционировать",
    "type": "verb"
  },
  {
    "greek": "συμμετέχω",
    "russian": "участвовать",
    "type": "verb"
  },
  {
    "greek": "συμπληρώνω",
    "russian": "заполнять",
    "type": "verb"
  },
  {
    "greek": "συμφωνώ",
    "russian": "соглашаться",
    "type": "verb"
  },
  {
    "greek": "συναντιέμαι",
    "russian": "встречаться",
    "type": "verb"
  },
  {
    "greek": "συναντώ",
    "russian": "встречать, встретить",
    "type": "verb"
  },
  {
    "greek": "συνεργάζομαι",
    "russian": "сотрудничать",
    "type": "verb"
  },
  {
    "greek": "συνεχίζω",
    "russian": "продолжать",
    "type": "verb"
  },
  {
    "greek": "συνοδεύω",
    "russian": "сопровождать",
    "type": "verb"
  },
  {
    "greek": "συνταγογραφώ",
    "russian": "выписывать рецепт",
    "type": "verb"
  },
  {
    "greek": "συσκευάζω",
    "russian": "упаковывать,",
    "type": "verb"
  },
  {
    "greek": "σχεδιάζω",
    "russian": "планировать, проектировать",
    "type": "verb"
  },
  {
    "greek": "ταιριάζω",
    "russian": "подходить, сочетаться",
    "type": "verb"
  },
  {
    "greek": "ταξιδεύω",
    "russian": "путешествовать",
    "type": "verb"
  },
  {
    "greek": "τελειώνω",
    "russian": "заканчивать, кончать",
    "type": "verb"
  },
  {
    "greek": "τηλεφωνώ",
    "russian": "звонить по телефону",
    "type": "verb"
  },
  {
    "greek": "τοποθετώ",
    "russian": "размещать, ставить, класть",
    "type": "verb"
  },
  {
    "greek": "τραβάω",
    "russian": "тянуть, тащить",
    "type": "verb"
  },
  {
    "greek": "τραγουδώ",
    "russian": "петь",
    "type": "verb"
  },
  {
    "greek": "τρέχω",
    "russian": "бегать, бежать",
    "type": "verb"
  },
  {
    "greek": "τρώω",
    "russian": "есть, кушать",
    "type": "verb"
  },
  {
    "greek": "υπάρχω",
    "russian": "существовать, иметься",
    "type": "verb"
  },
  {
    "greek": "φαντάζομαι",
    "russian": "представлять себе, воображать",
    "type": "verb"
  },
  {
    "greek": "φέρνω",
    "russian": "приносить",
    "type": "verb"
  },
  {
    "greek": "φεύγω",
    "russian": "уходить, уезжать",
    "type": "verb"
  },
  {
    "greek": "φιλοξενώ",
    "russian": "принимать гостей, гостеприимно встречать",
    "type": "verb"
  },
  {
    "greek": "φοβάμαι",
    "russian": "бояться",
    "type": "verb"
  },
  {
    "greek": "φοράω",
    "russian": "носить (одежду)",
    "type": "verb"
  },
  {
    "greek": "φροντίζω",
    "russian": "заботиться",
    "type": "verb"
  },
  {
    "greek": "φτάνω",
    "russian": "приходить, прибывать",
    "type": "verb"
  },
  {
    "greek": "φτιάχνω",
    "russian": "делаю, готовлю, чиню",
    "type": "verb"
  },
  {
    "greek": "χαιρετάω",
    "russian": "приветствовать, здороваться",
    "type": "verb"
  },
  {
    "greek": "χαλώ",
    "russian": "портить, ломать",
    "type": "verb"
  },
  {
    "greek": "χάνω",
    "russian": "терять, упускать",
    "type": "verb"
  },
  {
    "greek": "χρειάζομαι",
    "russian": "нуждаться",
    "type": "verb"
  },
  {
    "greek": "χρησιμοποιούμαι",
    "russian": "использоваться",
    "type": "verb"
  },
  {
    "greek": "χρησιμοποιώ",
    "russian": "использовать",
    "type": "verb"
  },
  {
    "greek": "χτενίζω",
    "russian": "расчёсывать",
    "type": "verb"
  },
  {
    "greek": "χτυπάω",
    "russian": "стучать, бить",
    "type": "verb"
  },
  {
    "greek": "ψάλλω",
    "russian": "петь (церковные песни), воспевать",
    "type": "verb"
  },
  {
    "greek": "ψάχνω",
    "russian": "искать",
    "type": "verb"
  },
  {
    "greek": "ψήνω",
    "russian": "жарить, запекать",
    "type": "verb"
  },
  {
    "greek": "ψωνίζω",
    "russian": "делать покупки",
    "type": "verb"
  }
];
