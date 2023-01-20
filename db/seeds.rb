puts "Seeding spices..."

# Seed your database here

ash = User.create(name: "Ash Ketchum")

bulba = Pokemon.create(name: "Bulbasaur",type1: "Grass", type2: "Poison", dex_num: 1, dex_info: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon", sprite: "https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png" )
Pokemon.create(name: "Ivysaur",type1: "Grass", type2: "Poison", dex_num: 2, dex_info: "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom.", sprite: "https://archives.bulbagarden.net/media/upload/8/81/0002Ivysaur.png" )
Pokemon.create(name: "Venusaur",type1: "Grass", type2: "Poison", dex_num: 3, dex_info: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.", sprite: "https://archives.bulbagarden.net/media/upload/6/6b/0003Venusaur.png" )
Pokemon.create(name: "Charmander",type1: "Fire", type2: "", dex_num: 4, dex_info: "The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places.", sprite: "https://archives.bulbagarden.net/media/upload/2/27/0004Charmander.png" )
Pokemon.create(name: "Charmeleon",type1: "Fire", type2: "", dex_num: 5, dex_info: "Tough fights could excite this Pokémon. When excited, it may blow out bluish-white flames.", sprite: "https://archives.bulbagarden.net/media/upload/0/05/0005Charmeleon.png" )
char = Pokemon.create(name: "Charizard",type1: "Fire", type2: "Flying", dex_num: 6, dex_info: "When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely.", sprite: "https://archives.bulbagarden.net/media/upload/3/38/0006Charizard.png" )
Pokemon.create(name: "Squirtle",type1: "Water", type2: "", dex_num: 7, dex_info: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.", sprite: "https://archives.bulbagarden.net/media/upload/5/54/0007Squirtle.png" )
Pokemon.create(name: "Watortle",type1: "Water", type2: "", dex_num: 8, dex_info: "When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit.", sprite: "https://archives.bulbagarden.net/media/upload/0/0f/0008Wartortle.png" )
Pokemon.create(name: "Blastoise",type1: "Water", type2: "", dex_num: 9, dex_info: "A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.", sprite: "https://archives.bulbagarden.net/media/upload/0/0a/0009Blastoise.png" )
Pokemon.create(name: "Caterpie",type1: "Bug", type2: "", dex_num: 10, dex_info: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.", sprite: "https://archives.bulbagarden.net/media/upload/5/5e/0010Caterpie.png" )
Pokemon.create(name: "Metapod",type1: "Bug", type2: "", dex_num: 11, dex_info: "Hardens its shell to protect itself. However, a large impact may cause it to pop out of its shell.", sprite: "https://archives.bulbagarden.net/media/upload/d/da/0011Metapod.png" )
butter = Pokemon.create(name: "Butterfree",type1: "Bug", type2: "Flying", dex_num: 12, dex_info: "	In battle, it flaps its wings at high speed to release highly toxic dust into the air.", sprite: "https://archives.bulbagarden.net/media/upload/5/55/0012Butterfree.png" )
Pokemon.create(name: "Weedle",type1: "Bug", type2: "Poison", dex_num: 13, dex_info: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.", sprite: "https://archives.bulbagarden.net/media/upload/3/36/0013Weedle.png" )
Pokemon.create(name: "Kakuna",type1: "Bug", type2: "Poison", dex_num: 14, dex_info: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.", sprite: "https://archives.bulbagarden.net/media/upload/f/f3/0014Kakuna.png" )
Pokemon.create(name: "Beedrill",type1: "Bug", type2: "Poison", dex_num: 15, dex_info: "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.", sprite: "https://archives.bulbagarden.net/media/upload/f/f7/0015Beedrill.png" )
Pokemon.create(name: "Pidgey",type1: "Normal", type2: "Flying", dex_num: 16, dex_info: "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.", sprite: "https://archives.bulbagarden.net/media/upload/0/0c/0016Pidgey.png" )
pidge = Pokemon.create(name: "Pidgeotto",type1: "Normal", type2: "Flying", dex_num: 17, dex_info: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.", sprite: "https://archives.bulbagarden.net/media/upload/8/82/0017Pidgeotto.png" )
Pokemon.create(name: "Pidgeot",type1: "Normal", type2: "Flying", dex_num: 18, dex_info: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.", sprite: "https://archives.bulbagarden.net/media/upload/7/73/0018Pidgeot.png" )
Pokemon.create(name: "Rattata",type1: "Normal", type2: "", dex_num: 19, dex_info: "Bites anything when it attacks. Small and very quick, it is a common sight in many places.", sprite: "https://archives.bulbagarden.net/media/upload/a/aa/0019Rattata.png" )
Pokemon.create(name: "Raticate",type1: "Normal", type2: "", dex_num: 20, dex_info: "	It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.", sprite: "https://archives.bulbagarden.net/media/upload/2/2c/0020Raticate.png" )
Pokemon.create(name: "Spearow",type1: "Normal", type2: "Flying", dex_num: 21, dex_info: "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.", sprite: "https://archives.bulbagarden.net/media/upload/2/2d/0021Spearow.png" )
Pokemon.create(name: "Fearow",type1: "Normal", type2: "Flying", dex_num: 22, dex_info: "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.", sprite: "https://archives.bulbagarden.net/media/upload/9/92/0022Fearow.png" )
Pokemon.create(name: "Ekans",type1: "Poison", type2: "", dex_num: 23, dex_info: "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.", sprite: "https://archives.bulbagarden.net/media/upload/d/d2/0023Ekans.png" )
Pokemon.create(name: "Arbok",type1: "Poison", type2: "", dex_num: 24, dex_info: "The frightening patterns on its belly have been studied. Six variations have been confirmed.", sprite: "https://archives.bulbagarden.net/media/upload/5/51/0024Arbok.png" )
pika = Pokemon.create(name: "Pikachu",type1: "Electric", type2: "", dex_num: 25, dex_info: "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you.", sprite: "https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png" )
Pokemon.create(name: "Raichu",type1: "Electric", type2: "", dex_num: 26, dex_info: "When electricity builds up inside its body, it becomes feisty. It also glows in the dark.", sprite: "https://archives.bulbagarden.net/media/upload/b/b0/0026Raichu.png" )

Team.create(user_id: ash.id, pokemon_id: bulba.id, pokemon_id: char.id, pokemon_id: butter.id, pokemon_id: pidge.id, pokemon_id: pika.id )

puts "✅ Done seeding!"
