function the_decisive_choice() {
  if (picture == false) {
    goToChapter("the_decisive_choice_bad");
  } else if (picture == true) {
    goToChapter("the_decisive_choice_good");
  }
}

let chaptersObj = {
  a_new_beginning: {
    subtitle: "A new beginning",
    text: "You wake up not knowing where you are. The moon is glowing. The stars are shining. It’s your first time seeing it that bright… Wait… What’s your name again ?",
    img: "assets/sky.jpg",
    video: "assets/eye_opening.mp4",
    option: [
      {
        text: "Regardez devant toi",
        action: "goToChapter('the_school')",
      },
    ],
  },

  the_school: {
    subtitle: "The School",
    text: "Suddenly, you see a building in front of you. A school. You get shiver through your spine. But why? You don’t comfortable looking at it. What should you do?",
    img: "assets/school_night.jpg",
    option: [
      {
        text: "Exit",
        action: "goToChapter('mort_beginning')",
      },
      {
        text: "Go inside",
        action: "goToChapter('a_picture')",
      },
    ],
  },

  mort_beginning: {
    subtitle: "Time to sleep again",
    text: "You are starting to feel unwell. You’re getting dizzy and you’re out of breath very easily. What is happening?! Without being able to understand what’s happening to you, you drop to the ground and faint.",
    img: "assets/dizzy.jpg",
    option: [
      {
        text: "Wake up",
        action: "goToChapter('a_new_beginning_creepy')",
      },
    ],
  },

  a_new_beginning_creepy: {
    subtitle: "A new beginning ?",
    text: "You wake up not knowing where you are again. The moon is glowing. The stars are shining. It’s your first time seeing it that bright. O̵̦̙̎̊͌̈́̀̾̚ŕ̶͎̯̄͑̀ ̷̯͈̲̣̬͊̉͒͐i̸̼̖̎̀͗̒s̷͚̉͘͝ ̸̦͚͙̻͇͕̲́̀ȉ̴̧̺̞̳̮̲̌̚t̶̡̝͍̪͎̫̍̈ ? :)",
    img: "assets/sky.jpg",
    video: "assets/eye_opening.mp4",
    option: [
      {
        text: "Regardez devant toi",
        action: "goToChapter('the_school')",
      },
    ],
  },

  a_picture: {
    subtitle: "A picture ?",
    text: "You decide to enter the school. It's filled with darkness. Nobody's here. You stumbled upon a picture on the ground. You crouch to have a better look at it. It's a little bit torn. There's two people on the picture. You recognize your face. Besides you is.... a girl... You get chills. She looks familiar but you can't a grip of who she is. For some reason, you're happy and sad at the same time. What should you do ?",
    img: "assets/picture.jpg",
    option: [
      {
        text: "Leave it on the ground",
        action: "goToChapter('noise')",
      },
      {
        text: "Put in pocket",
        action: "pocket()",
      },
      {
        text: "Tear it appart",
        action: "goToChapter('mort_picture')",
      },
    ],
  },

  mort_picture: {
    subtitle: "A sharp suprise",
    text: "As you finished to shred the picture into pieces, a whisper behind you makes its entrance : - Ẇ̶̹̪́̿̉r̷̡̻̫̀̐̏͘ǒ̶̙̾̉̑͑̊ǹ̴̢g̸̮̉̀̓ ̴̳͇͇̔́c̶̣̼̪̞̲̺̔͆̚h̵͍̬̀ở̷̧̹̰̒̄i̸̧̼̥̼̊̿̔c̵̨͛͊̽e̵̥̤̫̞̅̏̈́̀͛͠ ̸̢̖̰̯̲̀͂͛͋a̶͚͈̯̅̐͋͌͗g̴̢̢̨̩͕̻̏͛á̶̬͊̐̑͘ḭ̴̢̰̹͙̗͗̒n̵̢͍̘̭͗̕ ̷̭̫̎͛̚~̴̠̣̬̱͉̄̎ . You get stabbed in the back violently 10 times. As you fall on the ground you have a glimpse of the shadow behind you. You give your last breath as you close your eyes.",
    img: "assets/stab.jpg",
    option: [
      {
        text: "Wake up",
        action: "goToChapter('a_new_beginning_creepy')",
      },
    ],
  },

  noise: {
    subtitle: "The hall",
    text: "You continue to walk throughout the whole school. Suddenly, you hear a noise from the center hall. It seems like they’re footsteps. Maybe you’re not here alone after all !",
    img: "assets/hall.jpg",
    video: "assets/someone_walking_at_night.mp4",
    option: [
      {
        text: "Follow the noise",
        action: "goToChapter('shadow_person')",
      },
    ],
  },

  shadow_person: {
    subtitle: "Shadow Person",
    text: "Right as you enter the hall it became colder in an instance. You see something at the end of the hallway… It’s a shadow…  A person ? O̵̦̙̎̊͌̈́̀̾̚ŕ̶͎̯̄͑̀ ̷̯͈̲̣̬͊̉͒͐i̸̼̖̎̀͗̒s̷͚̉͘͝ ̸̦͚͙̻͇͕̲́̀ȉ̴̧̺̞̳̮̲̌̚t̶̡̝͍̪͎̫̍̈ :) . What should you do ?",
    img: "assets/shadow.jpg",
    option: [
      {
        text: "Hit it",
        action: "goToChapter('mort_shadow_person')",
      },
      {
        text: "Get close to it",
        action: "the_decisive_choice()",
      },
    ],
  },

  mort_shadow_person: {
    subtitle: "That was quick",
    text: "As you run to hit the shadowy figure, it turns so fast that you stumble back almost falling. An immense pain arises from your neck. You can’t breathe nor speak. It’s at this moment that you realize that blood is dripping from your neck. You fall on your back trying your best to breath. It’s useless and you give your last breath as you close your eyes.",
    img: "assets/blood.jpg",
    option: [
      {
        text: "Wake up",
        action: "goToChapter('a_new_beginning_creepy')",
      },
    ],
  },

  // THE GOOD ROUTE
  the_decisive_choice_good: {
    subtitle: "The decisive choice",
    text: "As you approach the shadow, it asks you a question: -Do you have the picture ?",
    img: "assets/do_u_have_it.jpg",
    option: [
      {
        text: "Yes",
        action: "goToChapter('the_revelation')",
      },
      {
        text: "Play dumb",
        action: "goToChapter('mort_torture_1')",
      },
    ],
  },

  mort_torture_1: {
    subtitle: "You shouldn't",
    text: "You play dumb and say that you don’t know what it’s talking about. For a moment, silence fill the hallway. Then, you see a light. Bright red. It’s coming from their eyes. You start to feel dizzy and faint. You wake up in a dark room. You’re attached to a chair and right in front of you there’s the shadow person. -If you don’t remember I’ll make you remember ! You are tortured for hours and hours. You end up succumbing to your wounds. You give your last breath as you close your eyes.",
    img: "assets/torture.jpg",
    option: [
      {
        text: "Wake up",
        action: "goToChapter('a_new_beginning_creepy')",
      },
    ],
  },

  the_revelation: {
    subtitle: "The revelation",
    text: "The hallway becomes lighter, and you can finally see the face of the shadow. Oh. It’s a girl with long blond hair and beautiful blue eyes. As she sees you, she showers you with a splendid smile. 'She looks cute.' You thought. –‘You're late. I waited for you. You probably don’t remember who I am, but I was your girlfriend in high school. My name’s Yuki.’ Your girlfriend ? You ask her where you are and why that you’re both here. -‘Actually, we are both dead. We died in an accident. I woke up here just like you.’… Wait. We’re dead ? Is that why you have amnesia ? Hold on…. NO ! DON’T TRUST HER! I HAVE A BAD FEELING. ",
    img: "assets/girlfriend.jpg",
    option: [
      {
        text: "She looks familiar",
        action: "goToChapter('the_truth')",
      },
    ],
  },

  the_truth: {
    subtitle: "The Truth",
    text: "Something just clicked in your head. That’s it you remember ! She’s your crazy ex-girlfriend who set you on fire before doing the same to herself ! ….. Oh no. We are trapped ! SHE’S NEVER GOING TO LEAVE YOU ALONE! RUN! -HAHAHAHAHA WHY ARE YOU RUNNING DARLING :D ?",
    img: "assets/truth.jpg",
    option: [
      {
        text: "Try again :)",
        action: "reset()",
      },
    ],
  },

  // THE BAD ROUTE
  the_decisive_choice_bad: {
    subtitle: "The decisive choice",
    text: "As you approach the shadow, it asks you a question: -Do you have the picture ?",
    img: "assets/do_u_have_it.jpg",
    option: [
      {
        text: "No",
        action: "goToChapter('mort_you_dont_have_it')",
      },
      {
        text: "Lie",
        action: "goToChapter('mort_torture_2')",
      },
    ],
  },

  mort_you_dont_have_it: {
    subtitle: "You should've",
    text: "For a moment, silence fill the hallway. Without hesitation, the shadow slices your throat before walking away sighing. You fall on your back trying your best to breath. It’s useless and you give your last breath as you close your eyes.",
    img: "assets/blood.jpg",
    option: [
      {
        text: "Wake up",
        action: "goToChapter('a_new_beginning_creepy')",
      },
    ],
  },

  mort_torture_2: {
    subtitle: "Lying is bad",
    text: "You lie and say that you have the picture. -Give it to me then. You don’t know what to do. For a moment, silence fill the hallway. Then, you see a light. Bright red. It’s coming from their eyes. You start to feel dizzy and faint. You wake up in a dark room. You’re attached to a chair and right in front of you there’s the shadow person. -You know that lying is a sin right :) ? You are tortured for hours and hours. You end up succumbing to your wounds. You give your last breath as you close your eyes.",
    img: "assets/torture.jpg",
    option: [
      {
        text: "Wake up",
        action: "goToChapter('a_new_beginning_creepy')",
      },
    ],
  },
};

let picture = false;

if (localStorage.getItem("picture") != null) {
  picture = localStorage.getItem("picture") == "true";
}

function pocket() {
  picture = true;
  localStorage.setItem("picture", picture);
  goToChapter("noise");
}

let buttonReset = document.querySelector(".reset");

let son = document.querySelector("#son");
let sound = true;

function goToChapter(chapterName) {
  localStorage.setItem("chapter", chapterName);
  let chapitre = chaptersObj[chapterName];
  document.querySelector("h2").innerHTML = chapitre.subtitle;
  document.querySelector("p").innerHTML = chapitre.text;
  let video = document.querySelector(".image");
  let menu = document.querySelector(".menu");
  let choicesArr = chapitre.option;

  let button = "";
  for (let i = 0; i < choicesArr.length; i++) {
    button += `<button onclick="${choicesArr[i].action}">${choicesArr[i].text}</button>`;
  }
  menu.innerHTML = button;

  let imgTurnedVideo = "";
  if (chapitre.video != undefined) {
    imgTurnedVideo += `<video src="${chapitre.video}" muted loop autoplay></video>`;
    video.innerHTML = imgTurnedVideo;
  } else {
    imgTurnedVideo += `<img src="${chapitre.img}"></img>`;
    video.innerHTML = imgTurnedVideo;
  }

  if (son.checked === true) {
    sound = true;
  } else {
    sound = false;
  }

  if (sound === true) {
    sheesh.currentTime = 0;
    sheesh.play();
  }

  if (
    chapterName == "mort_beginning" ||
    chapterName == "mort_picture" ||
    chapterName == "mort_shadow_person" ||
    chapterName == "mort_torture_1" ||
    chapterName == "mort_torture_2" ||
    chapterName == "mort_you_dont_have_it"
  ) {
    buttonReset.classList.add("invisible");
  } else {
    buttonReset.classList.remove("invisible");
  }

  let body = document.querySelector("body");

  body.className = chapterName;
}

const sheesh = new Audio("assets/sheesh.mp3");

let currentChapter = "a_new_beginning";
if (localStorage.getItem("chapter") != null) {
  currentChapter = localStorage.getItem("chapter");
}

function reset() {
  picture = false;
  localStorage.clear();
  goToChapter("a_new_beginning");
}

goToChapter(currentChapter);
