const phrase = [
    {
        phrase: `Winnnie the Pooh`,
        category: `fictional characters`,
        hint: `Lives in the Hundred Acre Woods`
    },
    {
        phrase: `Buzz Lightyear.`,
        category: `fictional characters`,
        hint: `An action figure with delusions of grandeur`
    },
    {
        phrase: `Sherlock Holmes`,
        category: `fictional characters`,
        hint: `Created by Sir Arthur Conan Doyle`
    },
    {
        phrase: `Hannibal Lecter`,
        category: `fictional characters`,
        hint: `A serial killer who helps find other serial killers`
    },
    {
        phrase: `Katniss Everdeen`,
        category: `fictional characters`,
        hint: `Competed in the Hunger Games`
    },
    {
        phrase: `Shrek`,
        category: `fictional characters`,
        hint: `Has a donkey for a best friend`
    },
    {
        phrase: `Dorothy Gale`,
        category: `fictional characters`,
        hint: `For her there's no place like home`
    },
    {
        phrase: `Homer Simpson`,
        category: `fictional characters`,
        hint: `D'oh!`
    },
    {
        phrase: `Kermit the Frog`,
        category: `fictional characters`,
        hint: `It ain't easy being green`
    },
    {
        phrase: `Barbie`,
        category: `fictional characters`,
        hint: `Made of plastic`
    },
    {
        phrase: `Jack Sparrow`,
        category: `fictional characters`,
        hint: `Captain of the Black Pearl`
    },
    {
        phrase: `Wile E. Coyote`,
        category: `fictional characters`,
        hint: `Looney for roadrunners`
    },
    {
        phrase: `James Bond`,
        category: `fictional characters`,
        hint: `Prefers his cocktails shaken, not stirred`
    },
    {
        phrase: `Rosie the Riveter`,
        category: `fictional characters`,
        hint: `A cultural feminist icon of World War II`
    },
    {
        phrase: `Scooby Doo`,
        category: `fictional characters`,
        hint: `A crime solving Great Dane`
    },
    {
        phrase: `Tom Sawyer`,
        category: `fictional characters`,
        hint: `A young boy growing up in St. Petersburg, Missouri`
    },
    {
        phrase: `The Princess Bride`,
        category: `movie titles`,
        hint: `1987 fantasy adventure comedy directed by Rob Reiner`
    },
    {
        phrase: `No Country For Old Men`,
        category: `movie titles`,
        hint: `Academy award winner for "Best Picture" in 2008`
    },
    {
        phrase: `Rocky`,
        category: `movie titles`,
        hint: `Written by and starring Sylvester Stallone`
    },
    {
        phrase: `Forrest Gump`,
        category: `movie titles`,
        hint: `Tom Hanks won his second consecutive Oscar for his role as the eponymous character`
    },
    {
        phrase: `Pulp Fiction`,
        category: `movie titles`,
        hint: `1994 film featuring Samuel L Jackson as Jules Winnfield`
    },
    {
        phrase: `Pan's Labyrinth`,
        category: `movie titles`,
        hint: `2006 fantasy war drama written and directed by Guillermo del Toro`
    },
    {
        phrase: `Pyscho`,
        category: `movie titles`,
        hint: `1960 psychological horror film directed by Alfred Hitchcock`
    },
    {
        phrase: `A Nightmare on Elm Street`,
        category: `movie titles`,
        hint: `You may be afaid to go to sleep after watching this film`
    },
    {
        phrase: `Eternal Sunshine of the Spotless Mind`,
        category: `movie titles`,
        hint: `2004 film starring Jim Carrey and Kate Winslet`
    },
    {
        phrase: `Deadpool`,
        category: `movies titles`,
        hint: `2016 film where Ryan Reynolds breaks the fourth wall`
    },
    {
        phrase: `Gangs of New York`,
        category: `movie titles`,
        hint: `2002 period drama directed by Martin Scorsese`
    },
    {
        phrase: `Schindler's List`,
        category: `movie titles`,
        hint: `Academy award winner for "Best Picture" in 1994`
    },
    {
        phrase: `Casablanca`,
        category: `movie titles`,
        hint: `1942 romantic drama starring Humphrey Bogart`
    },
    {
        phrase: `Die Hard`,
        category: `movie titles`,
        hint: `1988 action thriller starring Bruce Willis`
    },
    {
        phrase: `Inception`,
        category: `movie titles`,
        hint: `2010 science fiction film directed by Christopher Nolan`
    },
    {
        phrase: `Fight Club`,
        category: `movie titles`,
        hint: `The first rule of this film is to not talk about it`
    },
    {
        phrase: `Raiders of the Lost Ark`,
        category: `movie titles`,
        hint: `The first film in the <em>Indiana Jones</em> franchise`
    },
    {
        phrase: `Edward Scissorhands`,
        category: `movie titles`,
        hint: `1990 dark fantasy directed by Tim Burton`
    },
    {
        phrase: `Get Out`,
        category: `movie titles`,
        hint: `Jordan Peele's directorial debut`
    },
    {
        phrase: `Do the Right Thing`,
        category: `movie titles`,
        hint: `1989 comedy-drama directed by and starring Spike Lee`
    },
    {
        phrase: `Avengers: Endgame`,
        category: `movie titles`,
        hint: `The twenty-second film in the Marvel Cinematic Universe`
    },
    {
        phrase: `Ant-Man and the Wasp`,
        category: `movie titles`,
        hint: `2018 superhero film starring Paul Rudd and Evangeline Lilly`
    },
    {
        phrase: `Star Wars`,
        category: `movie titles`,
        hint: `The film takes place a long time ago in a galaxy far, far away`
    },
    {
        phrase: `Men In Black`,
        category: `movie titles`,
        hint: `1997 sci-fi action comedy directed by Barry Sonnenfeld`
    },
    {
        phrase: `Excuse me while I kiss the sky`,
        category: `song ♫ lyrics`,
        hint: `From the hit "Purple Rain" `
    },
    {
        phrase: `I can't help falling in love with you`,
        category: `song ♫ lyrics`,
        hint: `Sung by Elvis Presley`
    },
    {
        phrase: `Super Nintendo, Sega Genesis`,
        category: `song ♫ lyrics`,
        hint: `Rapped by The Notorious B.I.G.`
    },
    {
        phrase: `I'm sorry, Ms. Jackson. I am for real`,
        category: `song ♫ lyrics`,
        hint: `Outkast's apology`
    },
    {
        phrase: `Billie Jean is not my lover`,
        category: `song ♫ lyrics`,
        hint: `Sung by Michael Jackson`
    },
    {
        phrase: `Miscommunication lead to complication`,
        category: `song ♫ lyrics`,
        hint: `Rapped by Lauryn Hill`
    },
    {
        phrase: `There's a fire starting in my heart`,
        category: `song ♫ lyrics`,
        hint: `From the hit, "Rolling in the Deep"`
    },
    {
        phrase: `Hit me baby one more time`,
        category: `song ♫ lyrics`,
        hint: `Sung by Britney Spears`
    },
    {
        phrase: `No woman, no cry`,
        category: `song ♫ lyrics`,
        hint: `Sung by Bob Marley`
    },
    {
        phrase: `Stephen King`,
        category: `famous authors`,
        hint: `Horror author of <em>Carrie</em> and <em>Pet Sematary</em>`
    },
    {
        phrase: `J.K. Rowling`,
        category: `famous authors`,
        hint: `Creator of Albus Dumbledore`
    },
    {
        phrase: `Virginia Woolf`,
        category: `famous authors`,
        hint: `Penned <em>Mrs Dalloway</em> and <em>To the Lighthouse</em>`
    },
    {
        phrase: `Maya Angelou`,
        category: `famous authors`,
        hint: `She knows why the caged bird sings`
    },
    {
        phrase: `Gillian Flynn`,
        category: `famous authors`,
        hint: `Penned <em>Gone Girl</em> and <em>Sharp Objects</em>`
    },
    {
        phrase: `David Foster Wallace`,
        category: `famous authors`,
        hint: `Penned the short story collection <em>Brief Interviews With Hideous Men</em>`
    },
    {
        phrase: `Mark Twain`,
        category: `famous authors`,
        hint: `Pen name of Samuel Clemens`
    },
    {
        phrase: `James Baldwin`,
        category: `famous authors`,
        hint: `Penned <em>If Beale Street Could Talk</em>`
    },
    {
        phrase: `Octavia E. Butler`,
        category: `famous authors`,
        hint: `Science Fiction author of <em>Kindred</em>`
    },
    {
        phrase: `Ignorance is bliss`,
        category: `popular idioms`,
        hint: `You're better off not knowing`
    },
    {
        phrase: `A picture is worth a thousand words`,
        category: `popular idioms`,
        hint: `Better to show than tell`
    },
    {
        phrase: `The early bird gets the worm`,
        category: `popular idioms`,
        hint: `The first people who arrive will get the best stuff`
    },
    {
        phrase: `A stitch in time saves nine`,
        category: `popular idioms`,
        hint: `Fix the problem now because it will get worse later`
    },
    {
        phrase: `Once bitten, twice shy`,
        category: `popular idioms`,
        hint: `You're more cautious when you've been hurt before`
    },
    {
        phrase: `Time is money`,
        category: `popular idioms`,
        hint: `Work quickly`
    },
    {
        phrase: `A storm in a teacup`,
        category: `popular idioms`,
        hint: `A big fuss about a small problem`
    },
    {
        phrase: `I think therefore I am`,
        category: `philisophical quotes`,
        hint: `Rene Descartes on proving his existence` 
    },
    {
         phrase: `There is nothing permanent except change`,
         category: `philisophical quotes`,
         hint: `Heraclitus on the only reality in nature`   
    },
    {
         phrase: `Everything has beauty, but not everyone sees it`,
         category: `philisophical quotes`,
         hint: `Confucius on perspective`
    },
    {
         phrase: `A friend to all is a friend to none`,
         category: `philosphical quotes`,
         hint: `Aristotle on choosing sides`
    },
    {
         phrase: `Be where your enemy is not`,
         category: `philisophical quotes`,
         hint: `Sun Tzu on geolocation`
    },
    {
        phrase: `Batman and Robin Thicke`,
        category: `before and after`,
        hint: `The world's greatest detective teams up with Mr. Seaver's son`
    },
    {
        phrase: `ZZ Top of the World`,
        category: `before and after`,
        hint: `<em>La Grange</em> singers standing on a globe` 
    },
    {
        phrase: `The Great Wall of China dolls`,
        category: `before and after`,
        hint: `A fortification made of porcelain` 
    },
    {
        phrase: `Someday my prince will come to his senses`,
        category: `before and after`,
        hint: `Snow White hoping her significant other stops being foolish` 
    },
    {
        phrase: `Six degrees of separation anxiety`,
        category: `before and after`,
        hint: `Theory that everyone is connected by the fear of leaving their parent` 
    },
    {
        phrase: `Kanye West Hollywood`,
        category: `before and after`,
        hint: `A self-claimed College Dropout at home on the Sunset Strip` 
    },
    {
        phrase: `Hole in one of a kind`,
        category: `before and after`,
        hint: `An ace in golf is truly unique` 
    },
    {
        phrase: `Google search and rescue`,
        category: `before and after`,
        hint: `Scouring the Web to help those in distress` 
    },
    {
        phrase: `Flu shot of whiskey`,
        category: `before and after`,
        hint: `A vaccination with an ounce of liquor` 
    },
    {
        phrase: `Drama queen of hearts`,
        category: `before and after`,
        hint: `An overplayed lady from a fifty-two card deck` 
    },
    {
        phrase: `Denzel Washington crossing the Delaware`,
        category: `before and after`,
        hint: `John Q leading his troops during the Revolutionary War` 
    },
    {
        phrase: `Couch potato salad`,
        category: `before and after`,
        hint: `A deadbeat mixed with mayonnaise, eggs, and relish` 
    },
    {
        phrase: `Radio City Music Hall and Oates`,
        category: `before and after`,
        hint: `This home of the Rockettes will make your dreams come true` 
    },
    {
        phrase: `Ice cream social security`,
        category: `before and after`,
        hint: `Getting together for frozen desserts and government assistance` 
    },
]