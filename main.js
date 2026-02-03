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
            JPtitle: 'orfkeojefp',
            roumaji: 'a definir',
            synopsis: `WIP`
        }
    ]
};

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('informations').innerHTML = compiledHtml;