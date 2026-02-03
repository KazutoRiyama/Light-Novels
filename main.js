const context = {
    lightnovel: [
        {
            lnimage: 'resources/images/oshinobihime.jpg',
            JPtitle: '誘拐されそうになっている子を助けたら、お忍びで遊びに来ていたお姫様だった件',
            roumaji: '(yuukai saresou ni natte iru ko wo tauketara, o shobi de asobi ni kiteita o hime-sama datta ken)',
            synopsis: `Kiriyama Seito, an ordinary high school student, happens to witness a kidnapping in the middle of summer vacation.
                Seito saves a girl named Luna who is about to be abducted, and ends up staying under the same roof as her, as she has nowhere to go.
                As Seito cohabit with Luna, who is beautiful, has an incredible figure, and a cheerful personality, he gradually becomes attracted to her.
                Then, on the first day of school, Luna suddenly becomes Seito's classmate as an exchange student.
                It turns out that Luna is actually a princess of a certain country, and like Seito so much that she declares in front of everyone being Seito's fiancee! 
                "I-I only do this with Seito-sama... I wouldn't do it with anyone else..." 
                A sweet and romantic youth comedy with the refined, pure and innocent princess Luna!`
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
            and frustrating love comedy next door!`
        },
        {
        lnimage: 'resources/images/MakeHeroin.jpg',
        JPtitle: '負けヒロインが多すぎる！',
        roumaji: '(Make hiroin ga oosugiru!)',
        synopsis: `「え？ マケインって誰のこと？」

                    クラスの背景である俺――温水和彦は、あるとき人気女子・八奈見杏菜が男子に振られるのを目撃する。

                    「私をお嫁さんにするって言ったのに、ひどくないかな？」
                    「それ、いくつの頃の話？」
                    「４、５歳だけど」

                    それはノーカンだろ。
                    これをきっかけに、陸上部の焼塩檸檬、文芸部の小鞠知花など、負け感あふれる女子たちが現れて――？

                    「温水君。女の子は２種類に分けられるの。幼馴染か、泥棒猫か」
                    「なるほど、大胆な分類だ」

                    負けてこそ輝く彼女たちに、幸いあれ。
                    負けヒロイン――マケインたちに絡まれる謎の青春が、ここに幕を開ける！

                    ※「ガ報」付き！

                    ※この作品は底本と同じクオリティのカラーイラスト、モノクロの挿絵イラストが収録されています。`
        }
    ]
};

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('informations').innerHTML = compiledHtml;