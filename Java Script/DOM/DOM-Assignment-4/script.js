const main = document.querySelector("main") ;
const btn = document.querySelector(".btn") ; 


const arr = [
    "Stay hungry, stay foolish.",
    "Dream big. Start small.",
    "Trust the process.",
    "Make yourself proud.",
    "Failure is a detour, not the end.",
    "You are enough.",
    "Discipline beats motivation.",
    "Focus creates power.",
    "Less ego, more growth.",
    "Consistency is a superpower.",
    "Believe you can.",
    "One day at a time.",
    "Let your actions talk.",
    "Your vibe attracts your tribe.",
    "Choose courage over comfort.",
    "Make your future self proud.",
    "Small steps, big results.",
    "Be your own inspiration.",
    "Give time, time.",
    "Everything starts with a decision.",
    "You become what you think.",
    "Create your own chance.",
    "Be somebody you’re proud of.",
    "Stay real. Stay humble.",
    "You matter.",
    "Progress, not perfection.",
    "Patience builds empires.",
    "Work hard in silence.",
    "Growth begins at the end of comfort.",
    "Your only limit is you.",

    "Sometimes life doesn’t give you what you want not because you don’t deserve it, but because you deserve something much better that you can’t see yet.",
    "You won’t always be motivated — that’s why discipline matters. Successful people are not the most talented, they are the most consistent.",
    "Your life can change completely in one year. Keep working, keep improving, keep believing. Patience is the most underrated form of strength.",
    "There are people less qualified than you doing the things you want to do, simply because they decided to believe in themselves. Start.",
    "You’ll never feel ready. Start anyway. Most growth happens when you take action before you feel comfortable.",
    "The moment you stop seeking validation from others is the moment you become unstoppable. Power comes from within.",
    "It’s okay to outgrow people, habits, and places. You’re not responsible for staying the same just to make others comfortable.",
    "Don’t be afraid of slow progress. Be afraid of staying exactly where you are. Small improvements build great results.",
    "Healing doesn’t mean the damage never existed. It means the damage no longer controls your life.",
    "Your future is created by what you do today, not tomorrow. Every small choice adds up to who you become.",
    "The biggest glow-up is when you finally realize your worth, stop begging for things that destroy your peace, and choose yourself.",
    "There will be days when you feel lost, but remember — even the sun takes time to rise. Your time is coming.",
    "Success is not about speed. It’s about direction, effort, and consistency. Even slow progress is progress.",
    "Sometimes the universe removes people from your life because you’re not growing with them. Let them go with love.",
    "You deserve the love you freely give to others. Stop shrinking yourself to fit places you’ve outgrown.",
    "Growth is painful. Change is painful. But nothing is more painful than staying stuck in a place where you don’t belong.",
    "You don’t need a perfect plan. You just need the courage to start and the discipline to continue.",
    "Your journey is not supposed to look like anyone else’s. Comparison kills potential. Focus on your lane.",
    "Never underestimate the power of a peaceful mind. When your mind is at peace, your decisions become stronger.",
    "One day you will realize that the long nights, the silent struggles, the self-doubt, the sacrifices — all were preparing you for exactly what you asked for.",
    "If you want to change your life, start with your habits. Your habits dictate your future more than your dreams do.",
    "You don’t fail when you fall. You fail when you stop trying. Every setback is a setup for a comeback.",
    "The day you stop worrying about others' opinions is the day you finally start living your own life.",
    "Being misunderstood is okay. You are not alive to convince anyone. You’re here to grow and evolve.",
    "If it’s meant for you, it will come. Not because of luck, but because you worked for it silently and consistently.",
    "Be the person who decided to go for it— even when no one believed in them.",
    "A strong person is not the one who shows strength in moments of comfort, but the one who remains resilient in times of struggle.",
    "People who succeed aren’t the ones who never fail. They are the ones who never quit.",
    "Your life will become better when you realize that no one is coming to save you. It’s you versus you.",
    "Someday, you will look back and thank yourself for not giving up — especially on the days when everything felt impossible.",
    "Being alone is not sad. Staying with people who don’t value you is.",
    "Your past is a chapter, not your entire story. You get to write the rest differently.",
    "Life changes when you stop reacting and start choosing. Choices shape destiny.",
    "There is no right time. There is only time, and what you choose to do with it.",
    "Courage doesn’t always roar. Sometimes it’s the quiet voice saying, ‘I will try again tomorrow.’",
    "You can love people and still choose yourself. That’s not selfish — it’s survival.",
    "One day your hard work will speak so loudly that you won’t have to.",
    "Not everything requires a reaction. Sometimes silence is the loudest answer.",
    "The person you’re becoming deserves effort, patience, and love. Keep going.",
    "Your worth isn’t measured by productivity. You’re valuable because you exist.",
    "The ones who mock your dreams will one day ask how you achieved them.",
    "The quieter you become, the more you hear. The more you hear, the wiser you become.",
    "The hardest battles are fought within. And the greatest victories too.",
    "When you learn how to control your emotions, no one can control you.",
    "The best revenge is showing people they were wrong by succeeding silently.",
    "When you start valuing your time, you become unstoppable. Time is your biggest currency.",
    "If something drains your peace, it’s too expensive — let it go.",
    "Work hard, stay humble, and let success make the noise.",
    "Never shrink yourself just to make someone else comfortable.",
    "One day, everything you prayed for will be your reality."
];

btn.addEventListener("click" , ()=>{
    let i = Math.floor(Math.random()*90) ; 
    let x = Math.floor(Math.random()*50) ; 
    let y = Math.floor(Math.random()*80) ; 
    let scl = Math.random()*3 ;
    let rot = Math.floor(Math.random()*360) ;
    const quote = document.createElement("p") ; 
    quote.innerText = arr[i] ; 
    quote.style.color = "white" ; 
    quote.style.fontWeight = "800" ;
    quote.style.fontSize = "20px" ;
    quote.style.position = 'absolute' ; 
    quote.style.top = y+'vh' ; 
    quote.style.left = x+'vw' ; 
    quote.style.rotate = rot+'deg' ;
    quote.style.scale = scl ;
    main.appendChild(quote) ;
    console.log(quote)
})