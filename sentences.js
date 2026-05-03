const sentences = [

  // ===============================
  // ✈️ TRAVEL & ADVENTURE
  // ===============================

  // travel
  { infinitive: "travel", participle: "travelled", complement: "to another continent" },
  { infinitive: "travel", participle: "travelled", complement: "alone to a foreign country" },
  { infinitive: "travel", participle: "travelled", complement: "without a plan" },

  // fly
  { infinitive: "fly", participle: "flown", complement: "in a plane" },
  { infinitive: "fly", participle: "flown", complement: "first class" },
  { infinitive: "fly", participle: "flown", complement: "in a helicopter" },

  // see
  { infinitive: "see", participle: "seen", complement: "a famous monument" },
  { infinitive: "see", participle: "seen", complement: "the sunrise from a mountain" },
  { infinitive: "see", participle: "seen", complement: "a wild animal in nature" },

  // visit
  { infinitive: "visit", participle: "visited", complement: "more than 10 countries" },
  { infinitive: "visit", participle: "visited", complement: "a place I never want to return to" },

  // ===============================
  // 🏃 PHYSICAL ACTIVITIES
  // ===============================

  // ride
  { infinitive: "ride", participle: "ridden", complement: "a horse" },
  { infinitive: "ride", participle: "ridden", complement: "a motorcycle" },
  { infinitive: "ride", participle: "ridden", complement: "a roller coaster" },

  // swim
  { infinitive: "swim", participle: "swum", complement: "in the ocean" },
  { infinitive: "swim", participle: "swum", complement: "naked" },
  { infinitive: "swim", participle: "swum", complement: "at midnight" },

  // run
  { infinitive: "run", participle: "run", complement: "a marathon" },
  { infinitive: "run", participle: "run", complement: "away from something scary" },

  // climb
  { infinitive: "climb", participle: "climbed", complement: "a mountain" },
  { infinitive: "climb", participle: "climbed", complement: "a tree as an adult" },

  // drive
  { infinitive: "drive", participle: "driven", complement: "a car" },
  { infinitive: "drive", participle: "driven", complement: "all night without stopping" },

  // ===============================
  // 💥 ACCIDENTS & MISHAPS
  // ===============================

  // break
  { infinitive: "break", participle: "broken", complement: "a bone" },
  { infinitive: "break", participle: "broken", complement: "something by accident" },
  { infinitive: "break", participle: "broken", complement: "someone's heart" },
  { infinitive: "break", participle: "broken", complement: "a promise" },

  // fall
  { infinitive: "fall", participle: "fallen", complement: "off a bicycle" },
  { infinitive: "fall", participle: "fallen", complement: "asleep in public" },
  { infinitive: "fall", participle: "fallen", complement: "in love at first sight" },

  // drop
  { infinitive: "drop", participle: "dropped", complement: "my phone on the floor" },
  { infinitive: "drop", participle: "dropped", complement: "food on my clothes" },
  { infinitive: "drop", participle: "dropped", complement: "something valuable in water" },

  // lose
  { infinitive: "lose", participle: "lost", complement: "my keys" },
  { infinitive: "lose", participle: "lost", complement: "something important" },
  { infinitive: "lose", participle: "lost", complement: "my way in a familiar place" },
  { infinitive: "lose", participle: "lost", complement: "my temper in public" },

  // trip
  { infinitive: "trip", participle: "tripped", complement: "in front of other people" },
  { infinitive: "trip", participle: "tripped", complement: "on stage" },

  // ===============================
  // 🤔 FORGETFULNESS
  // ===============================

  // forget
  { infinitive: "forget", participle: "forgotten", complement: "someone's birthday" },
  { infinitive: "forget", participle: "forgotten", complement: "my homework at home" },
  { infinitive: "forget", participle: "forgotten", complement: "where I put my phone" },
  { infinitive: "forget", participle: "forgotten", complement: "someone's name immediately" },
  { infinitive: "forget", participle: "forgotten", complement: "why I entered a room" },
  { infinitive: "forget", participle: "forgotten", complement: "an important anniversary" },

  // ===============================
  // 🍕 FOOD & DRINK
  // ===============================

  // eat
  { infinitive: "eat", participle: "eaten", complement: "spicy food" },
  { infinitive: "eat", participle: "eaten", complement: "too much chocolate" },
  { infinitive: "eat", participle: "eaten", complement: "something weird on a dare" },
  { infinitive: "eat", participle: "eaten", complement: "a whole pizza by myself" },
  { infinitive: "eat", participle: "eaten", complement: "insects" },

  // drink
  { infinitive: "drink", participle: "drunk", complement: "coffee" },
  { infinitive: "drink", participle: "drunk", complement: "milk straight from the bottle" },
  { infinitive: "drink", participle: "drunk", complement: "something I immediately regretted" },

  // cook
  { infinitive: "cook", participle: "cooked", complement: "for more than 10 people" },
  { infinitive: "cook", participle: "cooked", complement: "something completely inedible" },

  // taste
  { infinitive: "taste", participle: "tasted", complement: "food from another culture" },
  { infinitive: "taste", participle: "tasted", complement: "something expired" },

  // ===============================
  // 🎨 CREATIVE EXPRESSION
  // ===============================

  // sing
  { infinitive: "sing", participle: "sung", complement: "in public" },
  { infinitive: "sing", participle: "sung", complement: "in the shower" },
  { infinitive: "sing", participle: "sung", complement: "karaoke" },
  { infinitive: "sing", participle: "sung", complement: "the wrong lyrics confidently" },

  // write
  { infinitive: "write", participle: "written", complement: "a poem" },
  { infinitive: "write", participle: "written", complement: "a love letter" },
  { infinitive: "write", participle: "written", complement: "in a diary" },
  { infinitive: "write", participle: "written", complement: "a song" },

  // dance
  { infinitive: "dance", participle: "danced", complement: "when nobody was watching" },
  { infinitive: "dance", participle: "danced", complement: "in the rain" },
  { infinitive: "dance", participle: "danced", complement: "professionally" },

  // draw
  { infinitive: "draw", participle: "drawn", complement: "a portrait of someone" },
  { infinitive: "draw", participle: "drawn", complement: "on a wall" },

  // make
  { infinitive: "make", participle: "made", complement: "a cake from scratch" },
  { infinitive: "make", participle: "made", complement: "something with my own hands" },
  { infinitive: "make", participle: "made", complement: "a complete fool of myself" },

  // ===============================
  // 👥 SOCIAL INTERACTIONS
  // ===============================

  // meet
  { infinitive: "meet", participle: "met", complement: "a celebrity" },
  { infinitive: "meet", participle: "met", complement: "someone famous online" },
  { infinitive: "meet", participle: "met", complement: "my hero" },

  // talk
  { infinitive: "talk", participle: "talked", complement: "to myself" },
  { infinitive: "talk", participle: "talked", complement: "my way out of trouble" },
  { infinitive: "talk", participle: "talked", complement: "to a stranger for hours" },

  // kiss
  { infinitive: "kiss", participle: "kissed", complement: "someone on the first date" },
  { infinitive: "kiss", participle: "kissed", complement: "in the rain" },
  { infinitive: "kiss", participle: "kissed", complement: "more than one person in a day" },

  // hug
  { infinitive: "hug", participle: "hugged", complement: "a complete stranger" },
  { infinitive: "hug", participle: "hugged", complement: "someone who was crying" },

  // ===============================
  // 🤫 LIES & SECRETS
  // ===============================

  // tell
  { infinitive: "tell", participle: "told", complement: "a lie" },
  { infinitive: "tell", participle: "told", complement: "a secret I promised to keep" },
  { infinitive: "tell", participle: "told", complement: "someone I loved them first" },

  // lie
  { infinitive: "lie", participle: "lied", complement: "to my parents" },
  { infinitive: "lie", participle: "lied", complement: "on my resume" },
  { infinitive: "lie", participle: "lied", complement: "about my age" },

  // hide
  { infinitive: "hide", participle: "hidden", complement: "something from my parents" },
  { infinitive: "hide", participle: "hidden", complement: "money in a secret place" },
  { infinitive: "hide", participle: "hidden", complement: "my true feelings" },

  // pretend
  { infinitive: "pretend", participle: "pretended", complement: "to understand when I didn't" },
  { infinitive: "pretend", participle: "pretended", complement: "to be sick" },
  { infinitive: "pretend", participle: "pretended", complement: "to like a gift I hated" },

  // ===============================
  // 🏆 ACHIEVEMENTS
  // ===============================

  // win
  { infinitive: "win", participle: "won", complement: "a competition" },
  { infinitive: "win", participle: "won", complement: "money gambling" },
  { infinitive: "win", participle: "won", complement: "an argument I was wrong about" },

  // give
  { infinitive: "give", participle: "given", complement: "a speech" },
  { infinitive: "give", participle: "given", complement: "blood" },
  { infinitive: "give", participle: "given", complement: "money to a homeless person" },

  // learn
  { infinitive: "learn", participle: "learned", complement: "a language" },
  { infinitive: "learn", participle: "learned", complement: "to play an instrument" },
  { infinitive: "learn", participle: "learned", complement: "a hard lesson the hard way" },

  // ===============================
  // 📺 ENTERTAINMENT
  // ===============================

  // watch
  { infinitive: "watch", participle: "watched", complement: "the same movie more than three times" },
  { infinitive: "watch", participle: "watched", complement: "an entire TV series in one day" },
  { infinitive: "watch", participle: "watched", complement: "a horror movie alone" },

  // read
  { infinitive: "read", participle: "read", complement: "a book in English" },
  { infinitive: "read", participle: "read", complement: "someone's diary" },
  { infinitive: "read", participle: "read", complement: "more than 50 books in a year" },

  // play
  { infinitive: "play", participle: "played", complement: "a video game all night" },
  { infinitive: "play", participle: "played", complement: "a prank on someone" },
  { infinitive: "play", participle: "played", complement: "an instrument in public" },

  // ===============================
  // 😢 EMOTIONS
  // ===============================

  // cry
  { infinitive: "cry", participle: "cried", complement: "because of a movie" },
  { infinitive: "cry", participle: "cried", complement: "in public" },
  { infinitive: "cry", participle: "cried", complement: "tears of joy" },

  // laugh
  { infinitive: "laugh", participle: "laughed", complement: "at the wrong moment" },
  { infinitive: "laugh", participle: "laughed", complement: "so much that I couldn't stop" },
  { infinitive: "laugh", participle: "laughed", complement: "until I cried" },

  // scream
  { infinitive: "scream", participle: "screamed", complement: "at the top of my lungs" },
  { infinitive: "scream", participle: "screamed", complement: "in fear" },

  // ===============================
  // 😳 EMBARRASSING MOMENTS
  // ===============================

  // say
  { infinitive: "say", participle: "said", complement: "something embarrassing" },
  { infinitive: "say", participle: "said", complement: "the wrong name during an intimate moment" },
  { infinitive: "say", participle: "said", complement: "something I immediately regretted" },

  // wear
  { infinitive: "wear", participle: "worn", complement: "my clothes inside out" },
  { infinitive: "wear", participle: "worn", complement: "the same outfit two days in a row" },
  { infinitive: "wear", participle: "worn", complement: "something completely inappropriate" },

  // send
  { infinitive: "send", participle: "sent", complement: "a message to the wrong person" },
  { infinitive: "send", participle: "sent", complement: "a text I wish I could take back" },
  { infinitive: "send", participle: "sent", complement: "a love message to my crush" },

  // walk
  { infinitive: "walk", participle: "walked", complement: "into a glass door" },

  // ===============================
  // 📚 SCHOOL & WORK
  // ===============================

  // copy
  { infinitive: "copy", participle: "copied", complement: "someone else's homework" },
  { infinitive: "copy", participle: "copied", complement: "during a test" },

  // sleep
  { infinitive: "sleep", participle: "slept", complement: "in class" },
  { infinitive: "sleep", participle: "slept", complement: "during a meeting" },
  { infinitive: "sleep", participle: "slept", complement: "less than 3 hours" },

  // wake
  { infinitive: "wake", participle: "woken", complement: "up too late for school" },
  { infinitive: "wake", participle: "woken", complement: "up in a strange place" },
  { infinitive: "wake", participle: "woken", complement: "up not knowing what day it was" },

  // skip
  { infinitive: "skip", participle: "skipped", complement: "school or work" },
  { infinitive: "skip", participle: "skipped", complement: "an important event" },

  // ===============================
  // 😨 FEARS & PHOBIAS
  // ===============================

  // be
  { infinitive: "be", participle: "been", complement: "afraid of the dark" },
  { infinitive: "be", participle: "been", complement: "in love" },
  { infinitive: "be", participle: "been", complement: "completely lost" },
  { infinitive: "be", participle: "been", complement: "the last one picked for a team" },
  { infinitive: "be", participle: "been", complement: "fired from a job" },

  // fear
  { infinitive: "fear", participle: "feared", complement: "for my life" },

  // ===============================
  // 🌟 UNUSUAL EXPERIENCES
  // ===============================

  // steal
  { infinitive: "steal", participle: "stolen", complement: "something small as a child" },

  // find
  { infinitive: "find", participle: "found", complement: "money on the street" },
  { infinitive: "find", participle: "found", complement: "something valuable" },

  // get
  { infinitive: "get", participle: "got", complement: "a tattoo" },
  { infinitive: "get", participle: "got", complement: "lost on purpose" },
  { infinitive: "get", participle: "got", complement: "caught doing something I shouldn't" },

  // change
  { infinitive: "change", participle: "changed", complement: "my mind at the last second" },
  { infinitive: "change", participle: "changed", complement: "someone's life" }

];
