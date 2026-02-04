const context = {
    lightnovel: [
        {
            lnimage: 'resources/images/oshinobihime.jpg',
            JPtitle: '誘拐されそうになっている子を助けたら、お忍びで遊びに来ていたお姫様だった件',
            roumaji: '(yuukai saresou ni natte iru ko wo tauketara, o shinobi de asobi ni kiteita o hime-sama datta ken)',
            synopsis: `Kiriyama Seito, an ordinary high school student, happens to witness a kidnapping in the middle of summer vacation.
                Seito saves a girl named Luna who is about to be abducted, and ends up staying under the same roof as her, as she has nowhere to go.
                As Seito cohabit with Luna, who is beautiful, has an incredible figure, and a cheerful personality, he gradually becomes attracted to her.
                Then, on the first day of school, Luna suddenly becomes Seito's classmate as an exchange student.
                It turns out that Luna is actually a princess of a certain country, and like Seito so much that she declares in front of everyone being Seito's fiancee! 
                "I-I only do this with Seito-sama... I wouldn't do it with anyone else..." 
                A sweet and romantic youth comedy with the refined, pure and innocent princess Luna!`,
            link: 'oshinobihime.html'
        },
        {
            lnimage: 'resources/images/OtonariAsobi.jpg',
            JPtitle: '迷子になっていた幼女を助けたら、お隣に住む美少女留学生が家に遊びに来るようになった件について',
            roumaji: '(Maigo ni natte ita youjo wo tasuketara, otonari ni sumu bishoujo ryuugakusei ga ie ni asobi ni kuruyou ni natta ken ni tsuite)',
            synopsis: `One day, a foreign exchange student was transfered in Aoyagi Akito's class. Her name is Charlotte Bennett. Everyone is 
            immediately attracted by a pure and innocent personnality, her refined demeanor and her cuteness. But, with calm, Akito just think 'we live in different worlds'
            and stay away. However, when he helps his little sister Emma who was lost, Akito's life took a dramatic turns.
            Akito finds out that the Bennet sisters live in the appartment next door, and because Emma took a liking to him,
            they suddenly started coming over in his appartment almost every day. The three of them play, eat dinner and go out together.
            As they spend time together, Akito and Charlotte naturally grow close, albeit akwardly. - the start of a sweet
            and frustrating love comedy next door!`,
            link: 'otonariasobi.html'
        },
        {
        lnimage: 'resources/images/MakeHeroin.jpg',
        JPtitle: '負けヒロインが多すぎる！',
        roumaji: '(Make hiroin ga oosugiru!)',
        synopsis: `"Huh? Who's a losing heroine ?"    I, Nukumizu Kazuhiko am a mob character in class.
        One day I witnessed Yanami Anna, a popular girl, getting rejected ny a boy. "He said he would make me his wife, 
        isn't that heartless?" "That, how old were you when it happened?" "4 or 5 years old."
        That doesn't count. This leads to the emergence of a group of girls who feel defeated, Yakishio Lemon from
        the track and field club and Komari Chika from the literature club..? "Nukumizu-kun, girls are divided into two types: 
        childhood friends and homewrecker" "I see, that's a bold classification." Only after being defeated will these shining girls 
        be happy. Unveil the story of losing heroines and their mysterious youth.`,
        link: 'makein.html'
        },
        {
            lnimage: 'resources/images/kimizero.jpg',
            JPtitle: '経験済みなキミと、 経験ゼロなオレが、 お付き合いする話',
            roumaji: '(keikenzumi na kimi to, keiken zero ore ga, o tsukiai suru hanashi)',
            synopsis: `A love story that's sure to make you feel wonderful when you read it.
            "I-I love you!" "What? You mean Susuki?" Introverted high schooler Kashima Ryuuto 
            is forced to confess his feelings to Shirakawa Luna the girl at the top of the school 
            hierarchy and the one he admires, as a punishment game.The two end up dating for the unexpected 
            reason, "Well, I'm single right now," but Ryuuto follows Luna as she is confessed by 
            a handsome soccer club member and eavesdrops, while Luna brings up Ryuuto, who she just started dating, 
            into her room as if it were the most natural thing in the world. The two are completely different in everything, 
            from the friends they hang out with to the things they do for fun, but they are surprised by the gap between them 
            every day, and they begin to accept each other and connect with each other. A love story that will surely make you 
            feel wonderful as you read it begins!`,
            link: 'kimizero.html'
        }
    ]
};

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('informations').innerHTML = compiledHtml;