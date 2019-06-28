var __global = (function($){
    window.addEventListener('popstate' , e =>{
        // console.log(location.hash);
        _fn.bg.change(location.hash);
        onYouTubeIframeAPIReady();
    });

    var _list = [
        { 
            hash : '#honey', 
            class : 'honey', 
            embed : 'https://www.youtube-nocookie.com/embed/rSL3LX8YYOw',
            embedId : 'rSL3LX8YYOw',
            title : 'Honey',
            artist : 'Johnny Balik',
            releaseDate : '2018.7.13.',
            lyrics : "<p>Tell me everything and hold no lies</p>            <p>Say you're waiting for better skies</p>            <p>When you're mad as hell and you realize</p>            <p>All the little things which we rely</p>            <br>            <p>Hoping, praying</p>            <p>Working every day to get my mind right</p>            <p>Wasting my own time</p>            <p>Where were you when I was lost</p>            <p>So far from trying</p>            <br>            <p>Oh, but honey don't taste like summer no more</p>            <p>Stick around now, I miss you every night</p>            <p>We could pass time moving left and right</p>            <p>Think about when life goes by</p>            <p>Oh, within a day</p>            <br>            <p>Tell me everything and hold no lies</p>            <p>Say you're waiting for better skies</p>            <p>When you're mad as hell and you realize</p>            <p>All the little things which we rely</p>            <p>Oh, I've been</p>            <br>            <p>Hoping, praying</p>            <p>Working every day to get my mind right</p>            <p>Wasting my own time</p>            <p>Where were you when I was lost</p>            <p>So far from trying</p>            <br>            <p>Oh, but honey don't taste like summer no more</p>            <p>Stick around now, I miss you every night</p>            <p>We could pass time moving left and right</p>            <p>Think about when life goes by</p>            <p>Oh, within a day</p>            <br>            <p>Honey don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Summer no more, summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Summer no more, summer no more</p>            <br>            <p>Oh, but honey don't taste like summer no more</p>            <p>Stick around now, I miss you every night</p>            <p>We could pass time moving left and right</p>            <p>Think about when life goes by</p>            <p>Oh, within a day</p>            <br>            <p>Oh, but honey don't taste like summer no more</p>            <p>Stick around now, I miss you every night</p>            <p>We could pass time moving left and right</p>            <p>Think about when life goes by</p>            <p>Oh, within a day</p>            <br>            <p>Honey don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Summer no more, summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Oh, it don't taste like summer no more</p>            <p>Summer no more, summer no more</p>",
            social : {
                youtube : "https://www.youtube.com/user/officialjohnnybalik",
                facebook : "https://www.facebook.com/johnnybalik/",
                instagram : "https://www.instagram.com/johnnybalik/?hl=ko",
                homepage : "http://www.johnnybalik.com/"
            }
        },
        { 
            hash : '#provider' , 
            class : 'provider' , 
            embed : 'https://www.youtube-nocookie.com/embed/XKQNJzquduI' ,
            embedId : 'XKQNJzquduI',
            title : 'Provider',
            artist : 'Frank Ocean',
            releaseDate : '2018.8.28.',
            lyrics : "<p>Memo finna start acting out if I don't see him soon</p>            <p>Yeah my best friend ain't backing out, it's still on sight, fool</p>            <p>I'm the only one out here on the night loops</p>            <p>I'm the only one out here on the night loops</p>            <p>Trophy case still light, body need a race stripe</p>            <p>And these minerals on my body break light</p>            <p>And these reds on my body brakelight</p>            <p>New man comin' up ahead on his own two</p>            <p>Is you a natural blondie like Goku?</p>            <p>Sleepin' on my belly in a loop like a serpent</p>            <p>Talking Heads ripplin' on the surface</p>            <p>Eyes low, chin heavy shoegazer</p>            <p>Moonwalkin', R.I.P. Stanley Kubrick</p>            <p>You had you some birthdays, could you prove it?</p>            <p>Show me the wisdom in your movement</p>            <p>Show me some wisdom in your movement</p>            <p>Feelings you provide</p>            <p>Feelings you provide</p>            <p>I know it, I know it</p>            <p>The feelings I, the feelings, I know it, I</p>            <p>Feelings you provide</p>            <p>Feelings you provide</p>            <p>I know it, I know it</p>            <p>The feelings, I know it, the feelings, I, I</p>            <p>Tonight I might change my life</p>            <p>If you lived like I live</p>            <p>You couldn't live without it</p>            <p>Said I'd be your new best friend</p>            <p>But what more? Yeah</p>            <p>Ain't too late to out</p>            <p>(Provide)</p>            <p>(Provide)</p>            <p>Tonight I might change my life, all for you</p>            <p>All for you (provide)</p>            <p>Provided, diamond lane that didn't exist</p>            <p>Packed the Astro van and brought my kids through</p>            <p>Prada tee on the eldest, throw the Gildan on the children</p>            <p>Hand-me-down fits</p>            <p>Chest pass, see mist off rotation (swish, swisha)</p>            <p>Stiff smile just like I'm Aphex Twin (yeah, come to daddy, yeah)</p>            <p>Pat the Patagonia pockets, tryna find my zip (uh, where it's at? Yeah)</p>            <p>Blunt twist, tightropes, I'm not fallin' off (never that, no)</p>            <p>Watch friends, go pro through fisheye lens, drownin' off clear</p>            <p>I just saw Jaws, divin' under influence</p>            <p>Been feelin' like the Lord just out of reach for me (for me)</p>            <p>How I feel lettin' man speak</p>            <p>How I feel lettin' man speak for me (for me)</p>            <p>Holyfield, keep your ears split for me</p>            <p>Can't show my face if you spit for me</p>            <p>Spit for me, yeah</p>            <p>Eyes low, chin heavy shoegazer</p>            <p>Moonwalkin', R.I.P. Stanley Kubrick</p>            <p>You had you some birthdays, could you prove it?</p>            <p>Show me the wisdom in your movement</p>            <p>Show me some wisdom in your movement</p>            <p>Feelings you provide</p>            <p>Feelings you provide</p>            <p>I know, I know it</p>            <p>The feelings I, the feelings, I know it, I</p>            <p>Feelings you provide</p>            <p>Feelings you provide</p>            <p>I know it, I know it</p>            <p>The feelings, I know it, the feelings, I, I</p>            <p>Tonight I might change my life, all for you, all for you</p>",
            social : {
                youtube : "https://www.youtube.com/channel/UCqf-kTp9ERV5T1rPayno7LA",
                instagram : "https://www.instagram.com/blonded/?hl=ko",
                homepage : "https://blonded.co/"
            }
        },
        {
            hash : '#itrunsthroughme' , 
            class : 'itrunsthroughme' , 
            embed : 'https://www.youtube-nocookie.com/embed/ilNEqmfUyzI' ,
            embedId : 'ilNEqmfUyzI',
            title : 'It Runs Through Me',
            artist : 'Tom Misch',
            releaseDate : '2018.3.1.',
            lyrics : "<p>One, two, three, four</p> <p>I love the way it flows</p> <p>I love the way it grows</p> <p>There’s something in this sound that takes me far</p> <p>It’s like a special song</p><p>Can move my mood along</p><p>But I cannot say you’ll hear through my guitar</p> <p>She told me add a bass line</p> <p>And everything will be alright</p> <p>She told me that the groove is mine</p> <p>It will take us through the night</p> <p>And where I’ll go</p> <p>Can’t explain I’ll never know</p> <p>But it’s beautiful</p> <p>You can’t take this away from me</p> <p>The way I hit the melody</p> <p>The waves bring clarity</p> <p>Running through me</p> <p>You can’t take this away from me</p> <p>Oh the way I hit the melody</p> <p>The waves bring clarity</p> <p>Running through me</p> <p>I love the way it sings</p> <p>All the joy that it brings</p> <p>Remember skating down the road towards the park?</p> <p>I can never say no</p> <p>You with that summer glow</p> <p>The music gives me sun when winter stars</p> <p>She told me add a bass line</p> <p>And everything will be alright</p> <p>She told me that the beat is mine</p> <p>It will rock us through the night</p> <p>And where I go</p> <p>Can’t explain I’ll never know</p> <p>But it’s beautiful</p> <p>You can’t take this away from me</p> <p>Oh the way I hit the melody</p> <p>The waves bring clarity</p> <p>Running through me</p> <p>You can’t take this away from me </p> <p>Oh the way I hit the melody</p> <p>The waves bring clarity</p> <p>Running through me</p> <p>Hey! You can’t take this away from me </p> <p>The way I hit the melody</p> <p>The waves bring clarity</p> <p>Running through me</p> <p>You can’t take this away from me </p> <p>Oh the way I hit the melody</p> <p>The waves bring clarity</p> <p>Running through me</p> <p>(Just running through me)</p> <p>Yo, I wear notes like coats</p> <p>Blues like doos, war for the rhythm, soul that glues</p> <p>That bounce to my bones, that jazz in my spine</p> <p>The hop is my home, rap is my grind</p> <p>I'm grindin' on the back side of life, we dance</p> <p>She threw me a chance, my hands in my pants</p> <p>Actually, my pockets holdin' me tight, whispering a dream I could hold in the night</p> <p>(Look tight) a rhythm that's throbbin' my veins</p> <p>Wake up and write it on the pad, the pains</p> <p>Like church, the organ will invite the tears</p> <p>(Like birth) the cryin' let you know I'm here</p> <p>Held by the song that gave me a name</p> <p>Dressed by the verse that gave me a claim</p> <p>(There’s just base in the line) safe to inhale</p> <p>And if you live well</p> <p>Then longer years in this state, you will be</p> <p>A timeless octave to play for the tree</p> <p>That’s rooted in every single nerve in me</p> <p>The nerve of he who ignores the key</p> <p>And use it, it opens the minds that be free</p> <p>Whenever you're hot-headed, pours you a breeze</p> <p>Beneath the clouds, you allowed to see in clarity, through harmony</p> <p>Someone harmin’ me?</p><p>That won't be done</p><p>I stand protected by the laws of fun</p><p>I am perfected through the rhymes of run</p><p>Walkin' this way had the party stunned</p><p>This music, it launched me</p><p>With no aim, I've landed with some plane</p><p>Where I am I can't explain or ever know</p><p>But it's beautiful so</p><p>You can’t take this away from me</p><p>oh the way I hit the melody</p><p>The waves bring clarity</p><p>Running through me (come on, yo)</p><p>You can’t take this away from me</p><p>oh the way I hit the melody</p><p>The waves bring clarity</p><p>Running through me</p>",
            social : {
                youtube : "https://www.youtube.com/channel/UCKXs11Oj1codrEy33D6XgkQ",
                facebook : "https://www.facebook.com/tommisch123/",
                instagram : "https://www.instagram.com/tommisch/?hl=ko",
                homepage : "https://tommisch.com/"
            }
        },
        {
            hash : '#getyou' , 
            class : 'getyou' , 
            embed : 'https://www.youtube-nocookie.com/embed/EQWKdwvXh-o' ,
            embedId : 'EQWKdwvXh-o',
            title : 'Get You',
            artist : 'Daniel Caesar',
            releaseDate : '2016.12.1.',
            lyrics : "<p>Through drought and famine, natural disasters</p> <p>My baby has been around for me</p> <p>Kingdoms have fallen, angels be calling</p> <p>None of that could ever make me leave</p> <p>Every time I look into your eyes I see it</p> <p>You're all I need</p> <p>Every time I get a bit inside I feel it</p> <p>Ooh, who could've thought I'd get you</p> <p>Ooh, who would've thought I'd get you</p> <p>And when we're making love</p> <p>Your cries they can be heard from far and wide</p> <p>It's only the two of us</p> <p>Everything I need's between those thighs</p> <p>Every time I look into your eyes I see it</p> <p>You're all I need</p> <p>Every time I get a bit inside I feel it</p> <p>Ooh, who could've thought I'd get you, oh yeah, oh yeah, baby</p> <p>Ooh, who could've thought I'd get you</p> <p>And I’ll take some time</p> <p>Just to be thankful</p> <p>That I had days full of you, you</p> <p>Before it winds down into the memories, it’s all just memories, la, la, la, la, la</p> <p>Don't you love when I come around (feel something that's right somebody just tell somebody)</p> <p>Build you up then I take you down (If you've got someone you like)</p> <p>Don't you love when I come around (feel something that's right somebody just tell somebody)</p> <p>Build you up then I take</p> <p>Ooh, who could've thought I'd get you, oh yeah, oh yeah, baby</p> <p>Ooh, who would've thought I'd get you</p> <p>This feels like summer</p> <p>Boy you make me feel so alive</p> <p>Just be my lover</p> <p>Boy, you'll lead me to paradise</p>",
            social : {
                youtube : "https://www.youtube.com/channel/UCKJg5mkBn18dtRFWUy_v1mw",
                facebook : "https://www.facebook.com/dannyixxi/",
                instagram : "https://www.instagram.com/danielcaesar/?hl=ko",
                homepage : "https://danielcaesar.com/",
            }
        },
        {
            hash : '#sanfranciscostreet' , 
            class : 'sanfranciscostreet' , 
            embed : 'https://www.youtube-nocookie.com/embed/9zEl-FQLI4A' ,
            embedId : '9zEl-FQLI4A',
            title : 'San Francisco Street',
            artist : 'Sun Rai',
            releaseDate : '2013.3.12.',
            lyrics : "<p>Lost on the freeway</p> <p>This must be LA</p> <p>Tired and lonely</p> <p>With no real place to stay</p> <p>Is this the future?</p> <p>Where I'm gonna be?</p> <p>Last night it hit me</p> <p>When I had this crazy dream</p> <p>I'm waking up</p> <p>In your house</p> <p>On a San Francisco Street</p> <p>We tune out all the nasty weather</p> <p>And it's all in front of you and me</p> <p>You were intriguing</p> <p>Just looking at a magazine</p> <p>Like when I first saw you</p> <p>Back in 2003</p> <p>Then you walked over</p> <p>And said you don't have to be alone</p> <p>I don't have a crystal ball</p> <p>There's no way that I could've known</p> <p>I'd be waking up</p> <p>In your house</p> <p>On a San Francisco Street</p> <p>We tune out all the nasty weather</p> <p>And it's all in front of you and me</p> <p>Waking up</p> <p>In your house</p> <p>On a San Francisco Street</p> <p>We tune out all the nasty weather</p> <p>And it's all in front of you</p> <p>All in front of you and me</p> <p>Oh</p> <p>Waking up</p> <p>In your house</p> <p>On a San Francisco Street</p> <p>We tune out all the nasty weather</p> <p>And it's all in front of you and me</p> <p>Waking up</p> <p>In your house</p> <p>On a San Francisco Street</p> <p>We tune out all the nasty weather</p> <p>Then it's all in front of you</p> <p>All in front of you and me</p> <p>San Francisco Street</p> <p>You and me</p> <p>It's all in front of you and me</p> <p>You and me</p> <p>San Francisco Street</p> <p>You and me</p> <p>Oh</p>",
            social : {
                youtube : "https://www.youtube.com/user/iamsunrai",
                instagram : "https://www.instagram.com/raithis/"
            }
        },
        {
            hash : '#whyiiilovethemoon' , 
            class : 'whyiiilovethemoon' , 
            embed : 'https://www.youtube-nocookie.com/embed/0Y6Uy_-hJRQ' ,
            embedId : '0Y6Uy_-hJRQ',
            title : 'Why iii Love The Moon',
            artist : 'Phony ppl',
            releaseDate : '2015.12.21.',
            lyrics : "<p>Real love's so hard to find</p> <p>Just when you think you've found it</p> <p>The illusions in your eyes</p> <p>That's why I love the moon</p> <p>Every night it's there for you</p> <p>It's constant</p> <p>Unlike these human beings</p> <p>Who lie about what it seems to be</p> <p>You think the earth is where you stand</p> <p>Your in the palm of someone's hand</p> <p>And that's why I love the moon</p> <p>'Cause its always there for me</p> <p>Every night about my window</p> <p>And that's why I love the moon</p> <p>'Cause it's always there for me</p> <p>Every single night I look outside</p> <p>It's right there for me</p> <p>And my mind</p> <p>And thats why I love the moon, yeah</p> <p>Because people can consume my love</p> <p>In the wrong way</p> <p>So I send it up</p> <p>At night</p> <p>At night</p> <p>At night</p> <p>Real love's so hard to find</p> <p>Just when you think you've found it</p> <p>The illusions in your eyes it blinds us all</p> <p>So be careful where you look for love</p> <p>Just be careful where you look for love</p> <p>Yo, yo, yo</p> <p>Thats why I let the moon shine</p> <p>('Cause through the time I've been confused on how to move I'm)</p> <p>Stuck in between what wasn't and what could be the truth ha</p> <p>(still up trying to escape the demons in my room yo)</p> <p>You see it's no change dropping we learn to maintain profit</p> <p>And how could anybody else feel pain when they brainwash us</p> <p>And watch us every time we make exchanges (we slaves)</p> <p>Locked in a box we use our mind just to escape all the same shit</p> <p>I'm tired of the pain</p> <p>Love is blind to the flame</p> <p>Thats why I look up never hide behind sky's when it rain</p> <p>Promises cooked up exercising through denying the pain</p> <p>Thats why I look for find whatever lies in the rain</p> <p>'Cause shit change</p> <p>I don't blame my father for lampin' I believe that helped</p> <p>Went from trying to grow as your son to trying to grow as myself</p> <p>So understand it when im stranded,</p> <p>taking chances, know I need that fall</p> <p>Flat on my back you just relax and kick your seat back, uh</p> <p>'Cause when you think</p> <p>That's when you let time run and escape</p> <p>what your mind's loving that's what you think</p> <p>So what you think?</p> <p>If love was easy to find we wouldn't need it to complete our lives, so</p> <p>Peace to the moon</p> <p>Peace to the stars</p> <p>Peace to Saturn</p> <p>And peace to Mars</p>",
            social : {
                youtube : "https://www.youtube.com/user/PhonyPpl",
                homepage : "https://www.phony-ppl.com/",
                instagram : "https://www.instagram.com/phonyppl/?hl=ko"
            }
        },
        {
            hash : '#love' , 
            class : 'love' , 
            embed : 'https://www.youtube-nocookie.com/embed/SkNB5AsgZOc' ,
            embedId : 'SkNB5AsgZOc',
            title : 'Love',
            artist : 'DEAN',
            releaseDate : '2017.5.28.',
            lyrics : "<p>[Verse 1: Syd]</p> <p>You give me something I need in my life</p> <p>Second to nothing you come, baby</p> <p>Told you I loved you, you told me you might</p> <p>Tell me why you frontin’ babe</p> <p></p> <p>[Refrain: Syd]</p> <p>Say you want to take it slow</p> <p>When you’re ready let me know</p> <p>I know somewhere we can go to unwind</p> <p>Leave your troubles in the past</p> <p>And give love another chance</p> <p>You got questions, I got answers tonight</p> <p></p> <p>[Pre-Chorus: Syd]</p> <p>I got intentions baby</p> <p>But I’m gettin’ restless babe</p> <p>I need your blessing, baby</p> <p>I’ll love you if you let me baby</p> <p></p> <p>[Chorus: DEAN]</p> <p>I know, I know, I know, I know, I know, I know</p> <p>I know, I know, I know, I know, I know, I know</p> <p></p> <p>[Verse 2: DEAN]</p> <p>Got a lot of emotion, it’s a rollercoaster but I like it</p> <p>Should I wait in line, should I close my eyes or should I ride it out</p> <p>Don’t know where we’re goin’</p> <p>Let’s live in the moment</p> <p>Something about you I’m so in to</p> <p></p> <p>[Refrain: DEAN]</p> <p>Say you want to take it slow</p> <p>When you’re ready let me know</p> <p>I got somewhere we can go to unwind</p> <p>I been patient I been true</p> <p>I been playing by the rules</p> <p>Tell your friends I got you, alright, yea</p> <p></p> <p>[Pre-Chorus: DEAN]</p> <p>I got intentions baby</p> <p>But I’m gettin’ restless babe</p> <p>I need your blessin’, baby</p> <p>I’ll fuck you if you let me baby</p> <p></p> <p>[Chorus: DEAN & Syd]</p> <p>I know, I know, I know, I know, I know, I know</p> <p>I know, I know, I know, I know, I know, I know</p> <p></p> <p>[Bridge: DEAN & Syd]</p> <p>(Love – love – love)</p> <p>You wonder where is the love, where is the love</p> <p>You’ve been looking for feelings of love</p> <p>Yeah I’m out of control</p> <p>Whether it’s right or wrong no</p> <p>If it's mean to be, we will know, ooh</p> <p></p> <p>[Pre-Chorus: Syd & Dean]</p> <p>I got intentions baby</p> <p>But I’m gettin’ restless babe</p> <p>I need your blessin’, baby</p> <p>I’ll love you if you let me baby</p> <p></p> <p>[Chorus: DEAN & Syd]</p> <p>I know, I know, I know, I know, I know, I know</p> <p>I know, I know, I know, I know, I know, I know</p> <p></p> <p>[Outro: DEAN]</p> <p>Turn that shit off!</p> <p>It’s all about the things you do</p> <p>That makes me wanna turn to you</p> <p>It’s all about the dreams you grew</p> <p>That gives my life another view</p> <p>It’s all about the things you do</p> <p>That makes me wanna turn to you</p> <p>It’s all about the dreams you grew</p> <p>That gives my life another view</p> <p>Where is the love, is the love, is the love</p> <p>Where is the love, is the love, is the love</p> <p>Where is the love, is the love, is the love</p>",
            social : {
                youtube : "https://www.youtube.com/channel/UCnCEKlzi52Yzj2JdBFhKVEA",
                facebook : "https://www.facebook.com/deantrblous/",
                instagram : "https://www.instagram.com/deantrbl/?hl=ko",
            }
        },
        {
            hash : '#timeinatree' , 
            class : 'timeinatree' , 
            embed : 'https://www.youtube-nocookie.com/embed/ST-GMwJWdec' ,
            embedId : 'ST-GMwJWdec',
            title : 'Time in a Tree',
            artist : 'Raleigh Ritchie',
            releaseDate : '2018. 8. 2.',
            lyrics : "<p>I just want time in a tree</p> <p>I need a place just for me</p> <p>Somewhere that I can be free</p> <p>Keep the faith and just be</p> <p>What you'll be</p> <p>I guess rules are there to break</p> <p>But I make mistakes like they were handed on a plate</p> <p>When I try to leave sometimes, I'm standing in the way</p> <p>I'm on the edge of crying all the time, 'cause I can't human right</p> <p>What a state</p> <p>I get wound up, from the ground up</p> <p>And I don't know why</p> <p>Turn the sound up, drown the noise out</p> <p>Swallow, don't cry</p> <p>Got an anxious heart, and it's stone made</p> <p>Can't take paper or heartbreak</p> <p>Did Billy Joel have self esteem?</p> <p>Maybe Vienna wouldn't wait for me</p> <p>I just want time in a tree</p> <p>I need a place just for me</p> <p>Somewhere that I can be free</p> <p>Keep the faith and just be, what you'll be</p> <p>Do you ever feel like, you could live a real life?</p> <p>Like everybody else in the real world, you could be in NASA</p> <p>You could write fiction, you could tame raptors</p> <p>Most days I struggle and I get snappy</p> <p>Fuck all that, I just wanna be happy</p> <p>Swimming against the current, am I wrong?</p> <p>Can you show me a warrant, honestly, I'm a bomb</p> <p>Abhorrent, I'm on it, get it, I've got it</p> <p>I wanna be 10 again, just me and sonic</p> <p>And nobody telling me I should be more than I am</p> <p>Back when I had a plan</p> <p>I just want time in a tree</p> <p>I need a place just for me</p> <p>Somewhere that I can be free</p> <p>Keep the faith and just be, what you'll be</p> <p>I've seen things that I never should've seen</p> <p>Said too many things I didn't mean</p> <p>Hurt myself too many times to count</p> <p>I need to let it out, and just release</p> <p>Been lying to myself too long</p> <p>Been trying by myself too long</p> <p>I can't relax, I'm too distracted</p> <p>I can't hack it, uh</p> <p>I'm needy, greedy</p> <p>Love me, feed me</p> <p>Let's be a family</p> <p>It'll take a village to make a man of me</p> <p>So why couldn't you love me?</p> <p>It's all I need</p> <p>I just want time in a tree</p> <p>I need a place just for me</p> <p>Somewhere that I can be free</p> <p>Keep the faith and just be, what you'll be</p> ",
            social : {
                youtube : "https://www.youtube.com/user/raleighritchie",
                facebook :"https://ko-kr.facebook.com/RaleighRitchie/",
                instagram : "https://www.instagram.com/raleighritchie/?hl=ko",
                homepage : "http://raleighritchie.com/"
            }
        },
        {
            hash : '#imgood' , 
            class : 'imgood' , 
            embed : 'https://www.youtube-nocookie.com/embed/Dll4NS20WHM' ,
            embedId : 'Dll4NS20WHM',
            title : "I'm good",
            artist : 'WAFIA',
            releaseDate : '2018.9.18.',
            lyrics : "<p>I'm good without my baby, better without him</p> <p>I was so young, I was so dumb when I gave you my heart</p> <p>Think you’re so mean, think you’re so clean in your old classic car</p> <p>But honestly looks can be deceiving you look good from afar</p> <p>But when you’re up close you’re a loser and you lowered the bar</p> <p>Oooo, finally got back everything I gave to you</p> <p>Every part of me that I left in your room</p> <p>Now I really don’t care what you do, or who you do it with</p> <p>I really don’t care, I think I just quit</p> <p>I was bad now I’m better</p> <p>I was sad now I’m better</p> <p>Looking back I knew you were no good (no good)</p> <p>I’m by myself and that’s better</p> <p>For my health you know know you put me through hell</p> <p>But whatever, I’m good (I'm good)</p> <p>I’m good, I’m good</p> <p>I’m good, I’m good</p> <p>You fooled me once and you fooled me twice, don’t try me again</p> <p>You’re comin' around, tryna wear me down but I won’t be your friend</p> <p>And I dont wanna say it out loud but I still miss you now and then</p> <p>I’ll cover my tracks and I’ll never go back cause you’re a dead-end</p> <p>Oooo, finally got back everything I gave to you</p> <p>Every part of me that I left in your room</p> <p>Now I really don’t care what you do, or who you do it with</p> <p>I really don’t care, I think I just quit</p> <p>I was bad now I’m better</p> <p>I was sad now I’m better</p> <p>Looking back I knew you were no good (no good)</p> <p>I’m by myself and that’s better</p> <p>For my health you know know you put me through hell</p> <p>But whatever, I’m good (I’m Good)</p> <p>I’m good, I’m good (Oh baby I’m good, oh baby I’m good, without you I’m good)</p> <p>I’m good, I’m good (Oh baby I’m good, oh baby I’m good, without you I’m good)</p> <p>I’m good, I’m good (Oh baby I’m good, oh baby I’m good, without you I’m good)</p> <p>I’m good, I’m good (Oh baby I’m good, oh baby I’m good, without you I’m good)</p> <p>I’m doing better without you, I’m good</p> <p>I’m doing better without you, I’m good</p> <p>This song ain’t even about you, I’m good</p> <p>'Cause I’m doing better without you, I’m good</p> <p>I was bad now I’m better</p> <p>I was sad now I’m better</p> <p>Looking back I knew you were no good (no good)</p> <p>I’m by myself and that’s better</p> <p>For my health you know know you put me through hell</p> <p>But whatever, I’m good (I’m Good)</p> <p>I’m good, I’m good (Oh baby I’m good, oh baby I’m good, without you I’m good)</p> <p>I’m good, I’m good (Oh baby I’m good, oh baby I’m good, without you I’m good)</p> <p>I’m good, I’m good (Oh baby I’m good, oh baby I’m good, without you I’m good)</p> <p>I’m good, I’m good (Oh baby I’m good, oh baby I’m good, without you I’m good)</p> <p>Oh baby I’m good, oh baby I’m good, without you I’m good</p>",
            social : {
                youtube : "https://www.youtube.com/user/waffles9393",
                facebook : "https://ko-kr.facebook.com/WafiaMusic/",
                instagram  :"https://www.instagram.com/wafiaaa/?hl=ko",
                homepage : "http://wafiamusic.com/"
            }
        },
        {
            hash : '#nostress' , 
            class : 'nostress' , 
            embed : 'https://www.youtube-nocookie.com/embed/DL63BLLwuiA' ,
            embedId : 'DL63BLLwuiA',
            title : 'no stress',
            artist : 'Oilix · Pueblo Vista',
            releaseDate : '2019.3.17.',
            lyrics : "",
            social : {
                youtube : "https://www.youtube.com/channel/UCq4CN8ZnYHTPx6U_S7gcmIA",
                homepage : "https://fanlink.to/supportPV",
                instagram  : "https://www.instagram.com/paul_gilmore/"
            }
        },
        {
            hash : '#jieunssunset' , 
            class : 'jieunssunset' , 
            embed : 'https://www.youtube-nocookie.com/embed/Ej_onDLqCPA' ,
            embedId : 'Ej_onDLqCPA',
            title : "Ji-Eun's Sunset",
            artist : 'City Girl',
            releaseDate : '2018.7.1.',
            lyrics : "no lyrics",
            social : {
                youtube : "https://www.youtube.com/channel/UC382H9j5oXUeJqcBSpzusPQ",
                homepage : "https://city-girl.bandcamp.com/"
            }
        },
        {
            hash : '#sunflowerdance' , 
            class : 'sunflowerdance' , 
            embed : 'https://www.youtube-nocookie.com/embed/Aj1dqpgJVNg' ,
            embedId : 'Aj1dqpgJVNg',
            title : "Sunflower Dance",
            artist : "trog'low",
            releaseDate : '2018.9.10.',
            lyrics : "no lyrics",
            social : {
                youtube : "https://www.youtube.com/channel/UCr76k3mOjj-ugqpHaI23zFw"
            }
        },
    ];

    var _item = '';

    var _fn = {
        bg : {
            change : function(hash){
                
                if(hash){
                    console.log('change1');
                    for(var i= 0 ; i < _list.length ; i++){
                        if(_list[i].hash === hash){
                            $('.background .images').removeAttr('class').addClass('images').addClass(_list[i].class);
                            $('.info-container .title').text(_list[i].title);
                            $('.info-container .artist').text(_list[i].artist);
                            $('.info-container .release-date').text(_list[i].releaseDate);
                            $('.lyrics-container .lyrics').html(_list[i].lyrics);
                                    
                            if($('.list-container .item.play').length > 0){
                                $('.list-container .item.play').removeClass('play');
                            }
                            
                            $('.list-container .item.' + _list[i].class).addClass('play');

                            break;
                        }
                    }  
                }
                else{
                    console.log('change2');
                    $('.background .images').removeAttr('class').addClass('images').addClass(_list[0].class);
                    $('.info-container .title').text(_list[0].title);
                    $('.info-container .artist').text(_list[0].artist);
                    $('.info-container .release-date').text(_list[0].releaseDate);
                    $('.lyrics-container .lyrics').html(_list[0].lyrics);
                    if($('.list-container .item.play').length > 0){
                        $('.list-container .item.play').removeClass('play');
                    }
                    $('.list-container .item.' +_list[0].class).addClass('play');
                    
                }
            }
        },
        list : {
            generate : function(){
                if(!_item){
                    alert('데이터가 없습니다');
                }
                else{
                    for(var i = 0 ; i < _list.length ; i++){
                        var item = _item.clone();
                        var data = _list[i];
                        item.addClass(data.class);
                        item.find('.thumbnail').addClass(data.class);
                        item.find('.link').attr('href' , data.hash);
                        item.find('.title').text(data.title);
                        item.find('.artist').text(data.artist);
                        if(data.social){
                            if(data.social.youtube){
                                item.find('.fa-youtube-square').parent().attr('href' , data.social.youtube);
                            }
                            else{ item.find('.fa-facebook').parent().remove(); }
                            
                            if(data.social.facebook){
                                item.find('.fa-facebook').parent().attr('href' , data.social.facebook);
                            }
                            else{ item.find('.fa-facebook').parent().remove(); }
                            
                            if(data.social.instagram){
                                item.find('.fa-instagram').parent().attr('href' , data.social.instagram);
                            }
                            else{ item.find('.fa-instagram').parent().remove(); }
                            
                            if(data.social.homepage){
                                item.find('.fa-home').parent().attr('href' , data.social.homepage);
                            }
                            else{ item.find('.fa-home').parent().remove(); }    
                        }
                        else{
                            item.find('.social').remove();
                        }
                        
                        $('.list-container').append(item);
                    }
                }
            }
        }
    }

    return {
        fn : {
            transition : {
                slideLyrics : function(){
                    if($('.lyrics').hasClass('slideup')){
                        $('.lyrics').removeClass('slideup').addClass('slidedown');
                        $('.lyrics-button').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
                    }
                    else{
                        $('.lyrics').removeClass('slidedown').addClass('slideup');
                        $('.lyrics-button').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
                    }
                },
                changeState : function(){
                    _fn.bg.change(location.hash);    
                }
            },
            tools : {
                findEmbedId : function(hash){
                    for(var i = 0 ; i < _list.length ; i++){
                        if(_list[i].hash === hash){
                            return _list[i].embedId;
                        }
                    }
                },
                getNextItem : function(){
                    if(!location.hash){
                        return _list[0];
                    }
                    else{
                        for(var i = 0 ; i < _list.length ; i++){
                            if(_list[i].hash === location.hash){
                                if(i < (_list.length -1)){
                                    return _list[i+1];
                                }
                                else{
                                    return _list[0];
                                }
                            }
                        }
                    }
                }
            },
            
        },
        init : function(){
            var template = $('.template').load('./item.template.html', function(){
                _item = template.find('.item').clone();
                $('.template').remove();
                _fn.list.generate();
                __global.fn.transition.changeState();
            });

        } ,
        data : {
            currentVideo : ''
        }
    }
})(jQuery);

function onYouTubeIframeAPIReady(){
    var _videoId;
    if(location.hash){
        _videoId = __global.fn.tools.findEmbedId(location.hash);
    }
    else { _videoId = __global.fn.tools.findEmbedId('#honey') }
    

    if($('iframe').length > 0){
        var _parent = $('iframe').parent();
        _parent.find('iframe').remove();
        _parent.append('<div id="video"></div>')
    }

    __global.data.currentVideo = new YT.Player('video', {
        height: '315',
        width: '560',
        videoId: _videoId,
        events: {
            'onReady': function(){
                __global.data.currentVideo.playVideo();
            },
            'onStateChange': function(state){
                if(YT.PlayerState.ENDED === state.data){
                    var nextItem = __global.fn.tools.getNextItem();
                    location.hash = nextItem.hash;
                }
            },
        }
    });

}

$(document).ready(function(){
    __global.init();
})