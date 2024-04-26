const UseHeader = true;
const image = (UseHeader) ? "header" : "library_600x900";
const duration = (UseHeader) ? "1500000" : "1000000";

const allgames = JSON.parse(`[
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/296910/page_bg_generated_v6b.jpg?t=1621505818",
      "developers" : [
        "AwesomeBlade"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/296910/header.jpg?t=1621505818",
      "game" : "8BitBoy™",
      "publishers" : [
        "AwesomeBlade"
      ],
      "short_description" : "Huge classic platformer with several power-ups and 8-12 hours of main story &amp; 300+ hidden locations just begging for exploration · 56 big Levels · 5 huge worlds",
      "id" : 296910
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/503560/page_bg_generated_v6b.jpg?t=1696237236",
      "developers" : [
        "Jutsu Games"
      ],
      "dlc" : [
        580730,
        580731,
        606970,
        606971
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/503560/header.jpg?t=1696237236",
      "game" : "911 Operator",
      "publishers" : [
        "Games Operators"
      ],
      "short_description" : "Game about the difficult work of people that manage emergency lines and services. Answer incoming calls and react properly - give first aid instructions, advise, dispatch correct number of firemen / police / ambulances, or sometimes - just ignore the call. Play on ANY CITY in the world!",
      "id" : 503560
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/207650/page_bg_generated_v6b.jpg?t=1694041199",
      "developers" : [
        "Misfits Attic"
      ],
      "dlc" : [
        207660,
        207655
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/207650/header.jpg?t=1694041199",
      "game" : "A Virus Named TOM",
      "publishers" : [
        "Misfits Attic"
      ],
      "short_description" : "Hack your way through brain scrambling puzzles while maneuvering through a thumb cramping maze of enemies.",
      "id" : 207650
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/15560/page_bg_generated_v6b.jpg?t=1581730007",
      "developers" : [
        "Dejobaan Games, LLC",
        "Owlchemy Labs"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/15560/header.jpg?t=1581730007",
      "game" : "AaaaaAAaaaAAAaaAAAAaAAAAA!!! for the Awesome",
      "publishers" : [
        "Dejobaan Games, LLC"
      ],
      "short_description" : "82 remastered levels from the original and 43 brand new ones that are twice as fast!",
      "id" : 15560
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/502500/page_bg_generated_v6b.jpg?t=1703657041",
      "developers" : [
        "Bandai Namco Studios Inc."
      ],
      "dlc" : [
        1966880,
        1561360,
        1561361,
        1561362,
        1561363,
        1454770,
        1421540,
        1421550,
        1421551,
        929106,
        929102,
        929101,
        929100,
        868312,
        868311,
        868310,
        929103,
        1692460,
        1692462,
        1692463,
        1692464
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/502500/header.jpg?t=1703657041",
      "game" : "ACE COMBAT™ 7: SKIES UNKNOWN",
      "publishers" : [
        "Bandai Namco Entertainment"
      ],
      "short_description" : "¡Conviértete en un as de la aviación y vuela por cielos fotorrealistas con 360 grados de movimiento, acaba con los aviones enemigos y disfruta de la emoción de los despegues realistas! ¡Los combates aéreos nunca han sido mejores!",
      "id" : 502500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/318020/page_bg_generated_v6b.jpg?t=1639817820",
      "developers" : [
        "Eugen Systems"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/318020/header.jpg?t=1639817820",
      "game" : "Act of Aggression - Reboot Edition",
      "publishers" : [
        "Eugen Systems"
      ],
      "short_description" : "Act of Aggression – Reboot Edition brings the techno-thriller RTS game Act of Aggression to a higher level. The Reboot Edition offers a full gameplay overhaul in skirmish mode against the AI and in your multiplayer battles.",
      "id" : 318020
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/371140/page_bg_generated_v6b.jpg?t=1625007660",
      "developers" : [
        "GUTS Department"
      ],
      "dlc" : [
        800810
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/371140/header.jpg?t=1625007660",
      "game" : "Aegis Defenders",
      "publishers" : [
        "Humble Games"
      ],
      "short_description" : "Take on wild beasts, ruthless soldiers, and ancient gods in this 2D Action-Platformer inspired by Tower-Defense combat.",
      "id" : 371140
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/221380/page_bg_generated_v6b.jpg?t=1705596928",
      "developers" : [
        "Skybox Labs",
        "Hidden Path Entertainment",
        "Ensemble Studios",
        "Forgotten Empires"
      ],
      "dlc" : [
        239550,
        355950,
        488060
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/221380/header.jpg?t=1705596928",
      "game" : "Age of Empires II (Retired)",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "Age of Empires II has been re-imagined in high definition. With the release of Age of Empires II: Definitive Edition, this product will not be updated further.",
      "id" : 221380
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/813780/page_bg_generated_v6b.jpg?t=1710437332",
      "developers" : [
        "Forgotten Empires",
        "Tantalus Media",
        "Wicked Witch",
        "World's Edge"
      ],
      "dlc" : [
        2805510,
        2555420,
        2141580,
        1869820,
        1557210,
        1389240,
        2672800,
        2672810,
        2672820,
        1228810,
        1039811
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/813780/header.jpg?t=1710437332",
      "game" : "Age of Empires II: Definitive Edition",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "Age of Empires II: Definitive Edition presenta &quot;Los últimos Khanes&quot; con 3 nuevas campañas y 4 nuevas Civilizaciones. Las actualizaciones frecuentes incluyen eventos, contenido adicional, nuevos modos de juego y características mejoradas con la reciente adición del modo cooperativo.",
      "id" : 813780
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/933110/page_bg_generated_v6b.jpg?t=1691530205",
      "developers" : [
        "World's Edge",
        "Tantalus Media",
        "Forgotten Empires"
      ],
      "dlc" : [
        2477660,
        1581450,
        1817370,
        1581451,
        1817361,
        1446360,
        2154360,
        2154361,
        2154362
      ],
      "genres" : [
        {
          "description" : "Free to Play",
          "id" : "37"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/933110/header.jpg?t=1691530205",
      "game" : "Age of Empires III: Definitive Edition",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "Age of Empires III: Definitive Edition ofrece una prueba de esta experiencia histórica de estrategia en tiempo real para partidas individuales y multijugador. *Nota: Para desbloquear todas las funciones del juego al mismo tiempo, necesitarás el ''producto completo''.",
      "id" : 933110
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1466860/page_bg_generated_v6b.jpg?t=1708710025",
      "developers" : [
        "Relic Entertainment",
        "Forgotten Empires",
        "Climax Studios",
        "World's Edge"
      ],
      "dlc" : [
        1959430,
        2131250,
        1797050,
        1668560
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1466860/header.jpg?t=1708710025",
      "game" : "Age of Empires IV: Anniversary Edition",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "En el marco de la celebración de su primer aniversario deleitando a millones de jugadores en todo el mundo, la galardonada y ultrapopular franquicia de juegos de estrategia continúa con Age of Empires IV: Edición de Aniversario.",
      "id" : 1466860
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/105450/page_bg_generated_v6b.jpg?t=1667261661",
      "developers" : [
        "Ensemble Studios"
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/105450/header.jpg?t=1667261661",
      "game" : "Age of Empires® III (2007)",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "Microsoft Studios brings you three epic Age of Empires III games in one monumental collection for the first time.",
      "id" : 105450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/266840/page_bg_generated_v6b.jpg?t=1667261670",
      "developers" : [
        "SkyBox Labs",
        "Ensemble Studios"
      ],
      "dlc" : [
        355960
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/266840/header.jpg?t=1667261670",
      "game" : "Age of Mythology: Extended Edition",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "Age of Mythology is back! Choose your god and take to the battlefield in this classic, upgraded with full Steamworks integration and enhanced features.",
      "id" : 266840
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/226840/page_bg_generated_v6b.jpg?t=1710241050",
      "developers" : [
        "Triumph Studios"
      ],
      "dlc" : [
        329530,
        299230,
        275560
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/226840/header.jpg?t=1710241050",
      "game" : "Age of Wonders III",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Age of Wonders III is the long anticipated sequel to the award-winning strategy series. Delivering a unique mix of Empire Building, Role Playing and Warfare, Age of Wonders III offers the ultimate in turn-based fantasy strategy for veterans of the series and new players alike!",
      "id" : 226840
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/201490/page_bg_generated_v6b.jpg?t=1708944229",
      "developers" : [
        "b-Alive"
      ],
      "dlc" : [
        206882,
        206881
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/201490/header.jpg?t=1708944229",
      "game" : "Airline Tycoon 2",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "Run a modern airline, design unique airplanes and grow a run-down carrier into a globally recognized company that passengers practically beg to fly",
      "id" : 201490
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22650/page_bg_generated_v6b.jpg?t=1668766470",
      "developers" : [
        "Team17 Digital Ltd"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22650/header.jpg?t=1668766470",
      "game" : "Alien Breed 2: Assault",
      "publishers" : [
        "Team17 Digital Ltd"
      ],
      "short_description" : "Can you survive the alien onslaught? Gamers across the world will now have a chance to play the next chapter in this high-budget, high-quality series.",
      "id" : 22650
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22670/page_bg_generated_v6b.jpg?t=1668769192",
      "developers" : [
        "Team17 Digital Ltd"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22670/header.jpg?t=1668769192",
      "game" : "Alien Breed 3: Descent",
      "publishers" : [
        "Team17 Digital Ltd"
      ],
      "short_description" : "Experience the final explosive chapter in the Alien Breed series and uncover the horrifying truth surrounding the existence of the Breed. Launch discount good thru Nov. 24 10am PST.",
      "id" : 22670
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22610/page_bg_generated_v6b.jpg?t=1669213538",
      "developers" : [
        "Team17 Software Ltd."
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22610/header.jpg?t=1669213538",
      "game" : "Alien Breed: Impact",
      "publishers" : [
        "Team17 Digital Ltd"
      ],
      "short_description" : "Experience the explosive science fiction arcade-shooter that resurrects a much revered franchise in an epic single player and co-op multiplayer campaign.",
      "id" : 22610
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/214490/page_bg_generated_v6b.jpg?t=1711460718",
      "developers" : [
        "Creative Assembly",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "dlc" : [
        282516,
        282515,
        282514,
        282510,
        282511,
        282512,
        282513
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/214490/header.jpg?t=1711460718",
      "game" : "Alien: Isolation",
      "publishers" : [
        "SEGA",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "short_description" : "Discover the true meaning of fear in Alien: Isolation, a survival horror set in an atmosphere of constant dread and mortal danger.",
      "id" : 214490
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2590/page_bg_generated_v6b.jpg?t=1582120844",
      "developers" : [
        "Black Element"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2590/header.jpg?t=1582120844",
      "game" : "Alpha Prime",
      "publishers" : [
        "Bohemia Interactive"
      ],
      "short_description" : "Somewhere in deep space, at an apparently abandoned mining base on the asteriod Alpha Prime, something has gone terribly wrong. Miners were warned that the hubbardium they were mining was too dangerous, but the lure of unimaginable wealth was too strong.",
      "id" : 2590
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/57300/page_bg_generated_v6b.jpg?t=1685699016",
      "developers" : [
        "Frictional Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/57300/header.jpg?t=1685699016",
      "game" : "Amnesia: The Dark Descent",
      "publishers" : [
        "Frictional Games"
      ],
      "short_description" : "Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. An experience that will chill you to the core.",
      "id" : 57300
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/236730/page_bg_generated_v6b.jpg?t=1634818828",
      "developers" : [
        "11 bit studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/236730/header.jpg?t=1634818828",
      "game" : "Anomaly 2",
      "publishers" : [
        "11 bit studios"
      ],
      "short_description" : "Anomaly 2 is a sequel to the critically acclaimed Anomaly Warzone Earth. Maintaining the core elements of the original, Anomaly 2 adds plenty of new features: unit morphing, over million tactical combinations, post-apo world and tower defense vs tower offense multiplayer mode.",
      "id" : 236730
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/91200/page_bg_generated_v6b.jpg?t=1634818526",
      "developers" : [
        "11 bit studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/91200/header.jpg?t=1634818526",
      "game" : "Anomaly: Warzone Earth",
      "publishers" : [
        "11 bit studios"
      ],
      "short_description" : "Lead an armored squad through the perils of this reversed tower defense action-strategy game!",
      "id" : 91200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/33930/page_bg_generated_v6b.jpg?t=1644841431",
      "developers" : [
        "Bohemia Interactive"
      ],
      "dlc" : [
        65700,
        65720,
        33934
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/33930/header.jpg?t=1644841431",
      "game" : "Arma 2: Operation Arrowhead",
      "publishers" : [
        "Bohemia Interactive"
      ],
      "short_description" : "Three years after the conflict in Chernarus, portrayed in the original Arma 2, a new flashpoint explodes in the Green Sea Region. Coalition forces led by the US Army are deployed to Takistan to quickly restore peace and prevent further civilian casualties.",
      "id" : 33930
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/224580/page_bg_generated_v6b.jpg?t=1582120187",
      "developers" : [
        "Bohemia Interactive"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/224580/header.jpg?t=1582120187",
      "game" : "Arma II: DayZ Mod",
      "publishers" : [
        "Bohemia Interactive"
      ],
      "short_description" : "Join the scores of desperate survivors in the free Arma 2 DayZ Mod, the award-winning and massively popular persistent multiplayer mod for Arma 2: Combined Operations!",
      "id" : 224580
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/224860/page_bg_generated_v6b.jpg?t=1582122095",
      "developers" : [
        "Bohemia Interactive"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/224860/header.jpg?t=1582122095",
      "game" : "Arma Tactics",
      "publishers" : [
        "Bohemia Interactive"
      ],
      "short_description" : "Arma Tactics is a turn-based close-combat strategy game, where you take control of a four-member Special Forces team. There are no given strategies, rails to move on, or paths to follow; it‘s up to you to decide how you will play through both the story-driven missions and generated missions with randomized objectives.",
      "id" : 224860
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/65790/page_bg_generated_v6b.jpg?t=1635942495",
      "developers" : [
        "Bohemia Interactive"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/65790/header.jpg?t=1635942495",
      "game" : "ARMA: Cold War Assault",
      "publishers" : [
        "Bohemia Interactive"
      ],
      "short_description" : "Bohemia Interactive's debut game published by Codemasters as Operation Flashpoint in 2001, became genre-defining combat military simulation and the No. 1 bestselling PC game around the world and has won many international awards, including “Game of The Year” and “Best Action Game”. Over 2 million copies have been sold since its release.",
      "id" : 65790
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/65780/page_bg_generated_v6b.jpg?t=1640110630",
      "developers" : [
        "Bohemia Interactive"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/65780/header.jpg?t=1640110630",
      "game" : "ARMA: Gold Edition",
      "publishers" : [
        "Bohemia Interactive"
      ],
      "short_description" : "ARMA: Gold is pack of ARMA: Armed Assault and an expansion pack ARMA: Queen's Gambit. ARMA is a first person tactical military shooter with large elements of realism and simulation. This game features a blend of large-scale military conflict spread over large areas alongside the more closed quarters battle.",
      "id" : 65780
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/290340/page_bg_generated_v6b.jpg?t=1712025834",
      "developers" : [
        "League of Geeks"
      ],
      "dlc" : [
        1130630,
        398913,
        398916,
        398917,
        398911,
        398915
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/290340/header.jpg?t=1712025834",
      "game" : "Armello",
      "publishers" : [
        "League of Geeks"
      ],
      "short_description" : "Armello is a grim fairy-tale board game come to life, with every match combining deep, tactical card play, rich tabletop strategy and RPG elements. Leverage subterfuge, spells and careful strategy to wrangle control of the game's chaotic odds as you quest for the throne.",
      "id" : 290340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/42850/page_bg_generated_v6b.jpg?t=1669648624",
      "developers" : [
        "BL-Logic"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/42850/header.jpg?t=1669648624",
      "game" : "Arsenal of Democracy: A Hearts of Iron Game",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Taking place from 1936-64, Arsenal of Democracy lets you play as any nation during the era of WW2, complete with detailed models for economics, diplomacy, research, and intelligence. Warfare is also fully represented with all three branches of operations: land, sea, and air.",
      "id" : 42850
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/550320/page_bg_generated_v6b.jpg?t=1702497450",
      "developers" : [
        "Funselektor Labs Inc."
      ],
      "dlc" : [
        2250420,
        1297600,
        1421640
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Carreras",
          "id" : "9"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/550320/header.jpg?t=1702497450",
      "game" : "art of rally",
      "publishers" : [
        "Funselektor Labs Inc."
      ],
      "short_description" : "Corre en la era dorada del Rally. Maneja icónicos carros que van desde los 60s hasta el Grupo B a través de etapas desafiantes en ambientes estilizados inspirados en ubicaciones reales. ¿Serás tú el maestro del art del rally?",
      "id" : 550320
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/33230/page_bg_generated_v6b.jpg?t=1682004272",
      "developers" : [
        "Ubisoft Montreal"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/33230/header.jpg?t=1682004272",
      "game" : "Assassin's Creed 2",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "An epic story of family, vengeance and conspiracy set in the pristine, yet brutal, backdrop of a Renaissance Italy. New low price!",
      "id" : 33230
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/911400/page_bg_generated_v6b.jpg?t=1692034844",
      "developers" : [
        "Ubisoft Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/911400/header.jpg?t=1692034844",
      "game" : "Assassin's Creed® III Remastered",
      "publishers" : [
        "Ubisoft Entertainment"
      ],
      "short_description" : "Relive the American Revolution or experience it for the first time in Assassin's Creed® III Remastered, with enhanced graphics and improved gameplay mechanics. Also includes Assassin's Creed Liberation remastered and all solo DLC content.",
      "id" : 911400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/812140/page_bg_generated_v6b.jpg?t=1692034673",
      "developers" : [
        "Ubisoft Quebec",
        "Ubisoft Montreal",
        "Ubisoft Bucharest",
        "Ubisoft Singapore",
        "Ubisoft Montpellier",
        "Ubisoft Kiev",
        "Ubisoft Shanghai"
      ],
      "dlc" : [
        937890,
        937891,
        937892
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/812140/header.jpg?t=1692034673",
      "game" : "Assassin's Creed® Odyssey",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "Choose your fate in Assassin's Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.",
      "id" : 812140
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/582160/page_bg_generated_v6b.jpg?t=1703026224",
      "developers" : [
        "Ubisoft Montreal"
      ],
      "dlc" : [
        660080,
        662350,
        662351,
        662352,
        662353,
        683850
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/582160/header.jpg?t=1703026224",
      "game" : "Assassin's Creed® Origins",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "ASSASSIN’S CREED® ORIGINS IS A NEW BEGINNING *The Discovery Tour by Assassin’s Creed®: Ancient Egypt is available now as a free update!* Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power.",
      "id" : 582160
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/201870/page_bg_generated_v6b.jpg?t=1698435866",
      "developers" : [
        "Ubisoft Montreal"
      ],
      "dlc" : [
        201882,
        201877
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/201870/header.jpg?t=1698435866",
      "game" : "Assassin's Creed® Revelations",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "Ezio Auditore walks in the footsteps of the legendary mentor Altair, on a dangerous journey of discovery and revelation.",
      "id" : 201870
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/242050/page_bg_generated_v6b.jpg?t=1698852989",
      "developers" : [
        "Ubisoft Montreal"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/242050/header.jpg?t=1698852989",
      "game" : "Assassin’s Creed® IV Black Flag™",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "The year is 1715. Pirates rule the Caribbean and have established their own lawless Republic where corruption, greediness and cruelty are commonplace.Among these outlaws is a brash young captain named Edward Kenway.",
      "id" : 242050
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/31290/page_bg_generated_v6b.jpg?t=1542232304",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31290/header.jpg?t=1542232304",
      "game" : "Back to the Future: The Game",
      "publishers" : [
        "Telltale Games"
      ],
      "short_description" : "Featuring a special appearance by Michael J. Fox!",
      "id" : 31290
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/231720/page_bg_generated_v6b.jpg?t=1447357410",
      "developers" : [
        "Lucky Frame"
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/231720/header.jpg?t=1447357410",
      "game" : "Bad Hotel",
      "publishers" : [
        "Lucky Frame"
      ],
      "short_description" : "IGF FINALIST 2013 BAFTA WINNER 2012 TIGA AWARD FINALIST 2012 1. Build Hotel. 2. Make Music. 3. Stop Tadstock. An insane hybrid of a tower defense game and a procedural music toy with tons of bullets (and healthy number of Wu-Tang references and credit crunch satire). The hit game for iOS now available on Windows and Mac!",
      "id" : 231720
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/688420/page_bg_generated_v6b.jpg?t=1701874540",
      "developers" : [
        "Plausible Concept",
        "Oskar Stålberg"
      ],
      "dlc" : [
        970060
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/688420/header.jpg?t=1701874540",
      "game" : "Bad North: Jotunn Edition",
      "publishers" : [
        "Raw Fury"
      ],
      "short_description" : "Bad North es un encantador pero brutal roguelite táctico en tiempo real. Defiende tu idílico reino isleño contra una horda de invasores vikingos, al tiempo que lideras el desesperado éxodo de tu pueblo. Dirige a tus leales súbditos para que aprovechen las ventajas tácticas de la orografía de cada isla.",
      "id" : 688420
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/257350/page_bg_generated_v6b.jpg?t=1695403830",
      "developers" : [
        "Beamdog"
      ],
      "dlc" : [
        467620
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/257350/header.jpg?t=1695403830",
      "game" : "Baldur's Gate II: Enhanced Edition",
      "publishers" : [
        "Beamdog"
      ],
      "short_description" : "Rediscover the beloved RPG classic— now enhanced for modern adventurers! Gather your party of heroes and continue the legendary adventure in this story-rich fantasy epic where every choice matters.",
      "id" : 257350
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/228280/page_bg_generated_v6b.jpg?t=1695399579",
      "developers" : [
        "Beamdog"
      ],
      "dlc" : [
        385970,
        459280,
        459290,
        687500
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/228280/header.jpg?t=1695399579",
      "game" : "Baldur's Gate: Enhanced Edition",
      "publishers" : [
        "Beamdog"
      ],
      "short_description" : "The classic adventure returns! Baldur’s Gate: Enhanced Edition includes the original Baldur’s Gate adventure, the Tales of the Sword Coast expansion, and all-new content including three new party members.",
      "id" : 228280
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/107100/page_bg_generated_v6b.jpg?t=1670649904",
      "developers" : [
        "Supergiant Games"
      ],
      "dlc" : [
        107104
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/107100/header.jpg?t=1670649904",
      "game" : "Bastion",
      "publishers" : [
        "Supergiant Games"
      ],
      "short_description" : "Discover the secrets of the Calamity, a surreal catastrophe that shattered the world to pieces.",
      "id" : 107100
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/35140/page_bg_generated_v6b.jpg?t=1702934705",
      "developers" : [
        "Rocksteady Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/35140/header.jpg?t=1702934705",
      "game" : "Batman: Arkham Asylum Game of the Year Edition",
      "publishers" : [
        "WB Games"
      ],
      "short_description" : "Experience what it’s like to be Batman and face off against Gotham's greatest villians. Explore every inch of Arkham Asylum and roam freely on the infamous island.",
      "id" : 35140
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/200260/page_bg_generated_v6b.jpg?t=1702934622",
      "developers" : [
        "Rocksteady Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/200260/header.jpg?t=1702934622",
      "game" : "Batman: Arkham City - Game of the Year Edition",
      "publishers" : [
        "WB Games"
      ],
      "short_description" : "Get Batman: Arkham City and all DLC for one low price with the release of the GOTY Edition!",
      "id" : 200260
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/208650/page_bg_generated_v6b.jpg?t=1702934528",
      "developers" : [
        "Rocksteady Studios"
      ],
      "dlc" : [
        367480,
        313102,
        313100,
        313101,
        350171,
        350172,
        356470,
        401620,
        401621,
        401622,
        401623,
        401624,
        401625,
        401626,
        401628,
        401629,
        401630,
        401631,
        401632,
        401633,
        401635,
        405030,
        405031,
        405032
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/208650/header.jpg?t=1702934528",
      "game" : "Batman™: Arkham Knight",
      "publishers" : [
        "WB Games"
      ],
      "short_description" : "Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile.",
      "id" : 208650
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/209000/page_bg_generated_v6b.jpg?t=1681234740",
      "developers" : [
        "WB Games Montreal",
        "Splash Damage"
      ],
      "dlc" : [
        257070,
        277830,
        237619,
        237620,
        237621,
        237618
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/209000/header.jpg?t=1681234740",
      "game" : "Batman™: Arkham Origins",
      "publishers" : [
        "Warner Bros. Interactive Entertainment"
      ],
      "short_description" : "As of December 4, 2016, the online services portion of Batman: Arkham Origins will be retired. We thank those that have joined us to battle over the last 3 years. The Single player campaign may still be played and enjoyed offline.",
      "id" : 209000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/267490/page_bg_generated_v6b.jpg?t=1651865751",
      "developers" : [
        "Armature Studio, LLC"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/267490/header.jpg?t=1651865751",
      "game" : "Batman™: Arkham Origins Blackgate - Deluxe Edition",
      "publishers" : [
        "WB Games"
      ],
      "short_description" : "Batman: Arkham Origins Blackgate - Deluxe Edition amplifies the 2.5-D game developed by Armature Studio with new maps, enemy encounters, difficulty levels, and batsuits, all with enhanced visuals. A companion game to Batman: Arkham Origins, players can continue the storyline of the console version and discover more details of the Dark...",
      "id" : 267490
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/24960/page_bg_generated_v6b.jpg?t=1682701509",
      "developers" : [
        "DICE"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/24960/header.jpg?t=1682701509",
      "game" : "Battlefield: Bad Company™ 2",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Battlefield: Bad Company 2™ brings the award-winning Battlefield gameplay to the forefront of PC gaming with best-in-class vehicular combat and unexpected &quot;Battlefield moments.&quot; New vehicles like the ATV and a transport helicopter allow for all-new multiplayer tactics on the Battlefield. With the Frostbite-enabled Destruction 2.",
      "id" : 24960
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/363680/page_bg_generated_v6b.jpg?t=1712313032",
      "developers" : [
        "Tindalos Interactive"
      ],
      "dlc" : [
        462261,
        462260,
        1266760
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/363680/header.jpg?t=1712313032",
      "game" : "Battlefleet Gothic: Armada",
      "publishers" : [
        "Focus Entertainment"
      ],
      "short_description" : "Battlefleet Gothic: Armada is the RTS videogame adaptation of Games Workshop’s classic tabletop game, pitting the Chaos, Imperium, Eldar, and Orks against each other in visceral space-battles.",
      "id" : 363680
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/49600/page_bg_generated_v6b.jpg?t=1668763580",
      "developers" : [
        "Cold Beam Games"
      ],
      "dlc" : [
        272680,
        49604
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/49600/header.jpg?t=1668763580",
      "game" : "Beat Hazard",
      "publishers" : [
        "Cold Beam Games"
      ],
      "short_description" : "Experience your music collection like never before with this intense music driven arcade shooter. Each of your songs will have its own unique ebb and flow based on the music.",
      "id" : 49600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/78000/page_bg_generated_v6b.jpg?t=1615298902",
      "developers" : [
        "PopCap Games, Inc."
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/78000/header.jpg?t=1615298902",
      "game" : "Bejeweled® 3",
      "publishers" : [
        "PopCap Games, Inc.",
        "Electronic Arts"
      ],
      "short_description" : "The biggest, brightest Bejeweled ever! Discover all-new ways to play the world’s #1 puzzle game. Find your perfect match with 8 breathtaking game modes that meet all your moods.",
      "id" : 78000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/8870/page_bg_generated_v6b.jpg?t=1602794480",
      "developers" : [
        "Irrational Games",
        "Virtual Programming (Linux)"
      ],
      "dlc" : [
        214933,
        214931,
        214932,
        214930,
        2028850
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/8870/header.jpg?t=1602794480",
      "game" : "BioShock Infinite",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Indebted to the wrong people, with his life on the line, veteran of the U.S. Cavalry and now hired gun, Booker DeWitt has only one opportunity to wipe his slate clean. He must rescue Elizabeth, a mysterious girl imprisoned since childhood and locked up in the flying city of Columbia.",
      "id" : 8870
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/8850/page_bg_generated_v6b.jpg?t=1568765660",
      "developers" : [
        "2K Marin",
        "2K China",
        "Digital Extremes",
        "2K Australia"
      ],
      "dlc" : [
        244610
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/8850/header.jpg?t=1568765660",
      "game" : "BioShock® 2",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Set approximately 10 years after the events of the original BioShock, the halls of Rapture once again echo with sins of the past. Along the Atlantic coastline, a monster has been snatching little girls and bringing them back to the undersea city of Rapture.",
      "id" : 8850
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/7670/page_bg_generated_v6b.jpg?t=1568739889",
      "developers" : [
        "2K Boston",
        "2K Australia"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/7670/header.jpg?t=1568739889",
      "game" : "BioShock™",
      "publishers" : [
        "2K"
      ],
      "short_description" : "BioShock is a shooter unlike any you've ever played, loaded with weapons and tactics never seen. You'll have a complete arsenal at your disposal from simple revolvers to grenade launchers and chemical throwers, but you'll also be forced to genetically modify your DNA to create an even more deadly weapon: you.",
      "id" : 7670
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/409720/page_bg_generated_v6b.jpg?t=1603360893",
      "developers" : [
        "2K Marin",
        "2K China",
        "Digital Extremes",
        "2K Australia",
        "Blind Squirrel",
        "Feral Interactive (Mac)"
      ],
      "dlc" : [
        525720
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/409720/header.jpg?t=1603360893",
      "game" : "BioShock™ 2 Remastered",
      "publishers" : [
        "2K",
        "Feral Interactive (Mac)"
      ],
      "short_description" : "In BioShock 2, you step into the boots of the most iconic denizen of Rapture, the Big Daddy, as you explore through the decrepit and beautiful fallen city, chasing an unseen foe in search of answers and your own survival.",
      "id" : 409720
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/409710/page_bg_generated_v6b.jpg?t=1598321131",
      "developers" : [
        "2K Boston",
        "2K Australia",
        "Blind Squirrel",
        "Feral Interactive (Mac)"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/409710/header.jpg?t=1598321131",
      "game" : "BioShock™ Remastered",
      "publishers" : [
        "2K",
        "Feral Interactive (Mac)"
      ],
      "short_description" : "BioShock is a shooter unlike any other, loaded with unique weapons and tactics. Complete with an arsenal of revolvers, shotguns, and grenade launchers, players will be forced to genetically modify their DNA to become an even deadlier weapon.",
      "id" : 409710
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/63710/page_bg_generated_v6b.jpg?t=1700025629",
      "developers" : [
        "Gaijin Games",
        "Choice Provisions"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/63710/header.jpg?t=1700025629",
      "game" : "BIT.TRIP RUNNER",
      "publishers" : [
        "Gaijin Games",
        "Choice Provisions"
      ],
      "short_description" : "Experience the rhythmic thrill of BIT.TRIP RUNNER! With its retro charm, simple controls, and award-winning visuals, this classic sets the standard for rhythm gaming. Don't miss the game that started it all in the acclaimed runner series.",
      "id" : 63710
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/362890/page_bg_generated_v6b.jpg?t=1709657733",
      "developers" : [
        "Crowbar Collective"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/362890/header.jpg?t=1709657733",
      "game" : "Black Mesa",
      "publishers" : [
        "Crowbar Collective"
      ],
      "short_description" : "Relive Half-Life.",
      "id" : 362890
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/774361/page_bg_generated_v6b.jpg?t=1700829487",
      "developers" : [
        "The Game Kitchen"
      ],
      "dlc" : [
        1143850,
        1143851,
        1143853,
        1143852
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/774361/header.jpg?t=1700829487",
      "game" : "Blasphemous",
      "publishers" : [
        "Team17"
      ],
      "short_description" : "Blasphemous es un juego de acción y plataformas muy difícil que combina el ritmo rápido y el combate de un hack-n-slash con una narrativa profunda y evocadora, presentada al explorar un universo enorme hecho de niveles no lineales.",
      "id" : 774361
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/58520/page_bg_generated_v6b.jpg?t=1678959819",
      "developers" : [
        "Cyanide Studios"
      ],
      "genres" : [
        {
          "description" : "Deportes",
          "id" : "18"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/58520/header.jpg?t=1678959819",
      "game" : "Blood Bowl - Legendary Edition",
      "publishers" : [
        "Cyanide Studios"
      ],
      "short_description" : "Inspired by the Warhammer Fantasy world, Blood Bowl is an ultra-violent combination of strategy and sports games. The Legendary Edition features 20 playable races, including 11 that are totally new, each offering its own game style! Make a competitive team, train it and buy the best equipment.",
      "id" : 58520
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/49520/page_bg_generated_v6b.jpg?t=1693524237",
      "developers" : [
        "Gearbox Software",
        "Aspyr (Mac)",
        "Aspyr (Linux)"
      ],
      "dlc" : [
        872280,
        218560,
        224180,
        225826,
        225828
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/49520/header.jpg?t=1693524237",
      "game" : "Borderlands 2",
      "publishers" : [
        "2K",
        "Aspyr (Mac)",
        "Aspyr (Linux)"
      ],
      "short_description" : "The Ultimate Vault Hunter’s Upgrade lets you get the most out of the Borderlands 2 experience.",
      "id" : 49520
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/8980/page_bg_generated_v6b.jpg?t=1692308968",
      "developers" : [
        "Gearbox Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/8980/header.jpg?t=1692308968",
      "game" : "Borderlands Game of the Year",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Get ready for the mind blowing insanity! Play as one of four trigger-happy mercenaries and take out everything that stands in your way! With its addictive action, frantic first-person shooter combat, massive arsenal of weaponry, RPG elements and four-player co-op, Borderlands is a breakthrough experience that challenges all the...",
      "id" : 8980
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/729040/page_bg_generated_v6b.jpg?t=1707178329",
      "developers" : [
        "Gearbox Software",
        "Blind Squirrel Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/729040/header.jpg?t=1707178329",
      "game" : "Borderlands Game of the Year Enhanced",
      "publishers" : [
        "2K"
      ],
      "short_description" : "¡Descubre el shooter cooperativo original, repleto de mejoras! Encarna a uno de los cuatro mercenarios de gatillo fácil, equípate con tropecientas armas y adéntrate en el planeta desértico de Pandora.",
      "id" : 729040
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/261640/page_bg_generated_v6b.jpg?t=1693524255",
      "developers" : [
        "2K Australia",
        "Gearbox Software",
        "Aspyr (Linux)"
      ],
      "dlc" : [
        319090,
        316410
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/261640/header.jpg?t=1693524255",
      "game" : "Borderlands: The Pre-Sequel",
      "publishers" : [
        "2K",
        "Aspyr (Linux)"
      ],
      "short_description" : "Launch into the Borderlands universe and shoot ‘n’ loot your way through a brand new adventure that rockets you onto Pandora’s moon in Borderlands: The Pre-Sequel!",
      "id" : 261640
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/266130/page_bg_generated_v6b.jpg?t=1505119823",
      "developers" : [
        "Mighty Rabbit Studios",
        "Gun."
      ],
      "dlc" : [
        296990
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/266130/header.jpg?t=1505119823",
      "game" : "Breach & Clear",
      "publishers" : [
        "Good Shepherd Entertainment",
        "Devolver Digital"
      ],
      "short_description" : "Breach &amp; Clear brings deep tactical strategy simulation to PC, Mac and Linux! Build your Special Operations team, plan and execute advanced missions, and own every angle.Choose your real-world squad -- US Army Rangers, Germany's KSK, Canada’s JTF2, UK SAS, and more -- and take on a variety of foes with different skill-sets and...",
      "id" : 266130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22350/page_bg_generated_v6b.jpg?t=1573221255",
      "developers" : [
        "Splash Damage"
      ],
      "dlc" : [
        22364,
        22363,
        22361
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22350/header.jpg?t=1573221255",
      "game" : "BRINK",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "You decide the combat role you want to assume in the world of Brink as you fight to save yourself and mankind’s last refuge!",
      "id" : 22350
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/225260/page_bg_generated_v6b.jpg?t=1710444299",
      "developers" : [
        "Double Fine Productions"
      ],
      "dlc" : [
        225270
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/225260/header.jpg?t=1710444299",
      "game" : "Brutal Legend",
      "publishers" : [
        "Double Fine Productions"
      ],
      "short_description" : "Brütal Legend is an action-adventure that marries visceral action combat with open-world freedom. Set in a universe somewhere between Lord of the Rings and Spinal Tap, it’s a fresh take on the action/driving genre, which in this case is full of imitation cover bands, demons intent on enslaving humanity and Heavy metal tunes.",
      "id" : 225260
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/111400/page_bg_generated_v6b.jpg?t=1569422377",
      "developers" : [
        "Nimble Giant Entertainment"
      ],
      "dlc" : [
        111402,
        111403
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/111400/header.jpg?t=1569422377",
      "game" : "Bunch of Heroes",
      "publishers" : [
        "Nimble Giant Entertainment"
      ],
      "short_description" : "Pick up the Horror Pack for free during the Steam Halloween Sale! Offer ends November 1st at 10AM Pacific.",
      "id" : 111400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/24740/page_bg_generated_v6b.jpg?t=1591283062",
      "developers" : [
        "Criterion Games"
      ],
      "genres" : [
        {
          "description" : "Carreras",
          "id" : "9"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/24740/header.jpg?t=1591283062",
      "game" : "Burnout Paradise: The Ultimate Box",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Download Burnout™ Paradise: The Ultimate Box today. Paradise City is the largest and most dangerous setting yet for the best-selling Burnout series. The massive setting gives players an open-ended world to explore, as they race their vehicles through hundreds of miles of roads and underground passages with more than 70 different cars.",
      "id" : 24740
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/399810/page_bg_generated_v6b.jpg?t=1712313525",
      "developers" : [
        "Cyanide Studio"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/399810/header.jpg?t=1712313525",
      "game" : "Call of Cthulhu®",
      "publishers" : [
        "Focus Entertainment"
      ],
      "short_description" : "1924. Private Investigator Pierce is sent to look into the tragic death of the Hawkins family. Plunge into a world of creeping madness and cosmic horror. Cryptic clues, shadowy figures, and pure terror bar your way as you fight to retain your sanity and solve an otherworldly mystery.",
      "id" : 399810
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2640/page_bg_generated_v6b.jpg?t=1654830063",
      "developers" : [
        "Gray Matter Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2640/header.jpg?t=1654830063",
      "game" : "Call of Duty: United Offensive",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Award-winning developer Gray Matter Interactive follows up on the success of Infinity Ward's Call of Duty™ - winner of over 80 Game of the Year and 50 Editors' Choice awards worldwide - with Call of Duty™: United Offensive™.",
      "id" : 2640
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/10090/page_bg_generated_v6b.jpg?t=1654830025",
      "developers" : [
        "Treyarch"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/10090/header.jpg?t=1654830025",
      "game" : "Call of Duty: World at War",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Call of Duty is back, redefining war like you've never experienced before. Building on the Call of Duty 4®: Modern Warfare engine, Call of Duty: World at War immerses players into the most gritty and chaotic WWII combat ever experienced.",
      "id" : 10090
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2620/page_bg_generated_v6b.jpg?t=1691003894",
      "developers" : [
        "Infinity Ward"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2620/header.jpg?t=1691003894",
      "game" : "Call of Duty® (2003)",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Call of Duty® delivers the gritty realism and cinematic intensity of World War II's epic battlefield moments like never before - through the eyes of citizen soldiers and unsung heroes from an alliance of countries who together helped shape the course of modern history.",
      "id" : 2620
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2630/page_bg_generated_v6b.jpg?t=1646762115",
      "developers" : [
        "Infinity Ward"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2630/header.jpg?t=1646762115",
      "game" : "Call of Duty® 2",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Call of Duty® 2 redefines the cinematic intensity and chaos of battle as seen through the eyes of ordinary soldiers fighting together in epic WWII conflicts. The sequel to 2003's Call of Duty, winner of over 80 Game of the Year awards, Call of Duty 2 offers more immense, more intense, more realistic battles than ever before, thanks to...",
      "id" : 2630
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/42700/page_bg_generated_v6b.jpg?t=1654809667",
      "developers" : [
        "Treyarch"
      ],
      "dlc" : [
        42719,
        42722,
        42718,
        42716
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/42700/header.jpg?t=1654809667",
      "game" : "Call of Duty®: Black Ops",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "The biggest first-person action series of all time and the follow-up to critically acclaimed Call of Duty®: Modern Warfare 2 returns with Call of Duty®: Black Ops.",
      "id" : 42700
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/42700/page_bg_generated_v6b.jpg?t=1654809667",
      "developers" : [
        "Treyarch"
      ],
      "dlc" : [
        42719,
        42722,
        42718,
        42716
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/42700/header.jpg?t=1654809667",
      "game" : "Call of Duty®: Black Ops",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "The biggest first-person action series of all time and the follow-up to critically acclaimed Call of Duty®: Modern Warfare 2 returns with Call of Duty®: Black Ops.",
      "id" : 42700
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/202970/page_bg_generated_v6b.jpg?t=1654830020",
      "developers" : [
        "Treyarch"
      ],
      "dlc" : [
        219103,
        219101,
        219098,
        219097,
        219092,
        234770,
        292021,
        234792,
        234776,
        274121,
        234775,
        234793,
        234785,
        234790,
        234788,
        274120,
        234774,
        234787,
        234789,
        234773,
        234779,
        234772,
        274122,
        234791,
        234786,
        234771,
        234794,
        292020,
        234778,
        274123,
        234777,
        234780,
        234781,
        234782,
        234783,
        234784
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/202970/header.jpg?t=1654830020",
      "game" : "Call of Duty®: Black Ops II",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Pushing the boundaries of what fans have come to expect from the record-setting entertainment franchise, Call of Duty®: Black Ops II propels players into a near future Cold War",
      "id" : 202970
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/202970/page_bg_generated_v6b.jpg?t=1654830020",
      "developers" : [
        "Treyarch"
      ],
      "dlc" : [
        219103,
        219101,
        219098,
        219097,
        219092,
        234770,
        292021,
        234792,
        234776,
        274121,
        234775,
        234793,
        234785,
        234790,
        234788,
        274120,
        234774,
        234787,
        234789,
        234773,
        234779,
        234772,
        274122,
        234791,
        234786,
        234771,
        234794,
        292020,
        234778,
        274123,
        234777,
        234780,
        234781,
        234782,
        234783,
        234784
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/202970/header.jpg?t=1654830020",
      "game" : "Call of Duty®: Black Ops II",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Pushing the boundaries of what fans have come to expect from the record-setting entertainment franchise, Call of Duty®: Black Ops II propels players into a near future Cold War",
      "id" : 202970
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/209160/page_bg_generated_v6b.jpg?t=1654830036",
      "developers" : [
        "Infinity Ward"
      ],
      "dlc" : [
        259253,
        259252,
        259251,
        259250,
        295437,
        277675,
        281340,
        286632,
        301116,
        301115,
        286633,
        295438,
        286635,
        286636,
        277670,
        277671,
        281343,
        277672,
        277674,
        277673,
        281342,
        281341,
        309872,
        309870,
        309871,
        281344,
        295440,
        295430,
        281346,
        277677,
        286634,
        277676,
        295431,
        281345,
        295432,
        301110,
        286630,
        295434,
        281347,
        301111,
        277678,
        295433,
        295439,
        286631,
        301114,
        301112,
        277679,
        295436,
        301113,
        295435,
        268101
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/209160/header.jpg?t=1654830036",
      "game" : "Call of Duty®: Ghosts",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Outnumbered and outgunned, but not outmatched.Call of Duty®: Ghosts is an extraordinary step forward for one of the largest entertainment franchises of all-time. This new chapter in the Call of Duty® franchise features a new dynamic where players are on the side of a crippled nation fighting not for freedom, or liberty, but simply to...",
      "id" : 209160
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/209160/page_bg_generated_v6b.jpg?t=1654830036",
      "developers" : [
        "Infinity Ward"
      ],
      "dlc" : [
        259253,
        259252,
        259251,
        259250,
        295437,
        277675,
        281340,
        286632,
        301116,
        301115,
        286633,
        295438,
        286635,
        286636,
        277670,
        277671,
        281343,
        277672,
        277674,
        277673,
        281342,
        281341,
        309872,
        309870,
        309871,
        281344,
        295440,
        295430,
        281346,
        277677,
        286634,
        277676,
        295431,
        281345,
        295432,
        301110,
        286630,
        295434,
        281347,
        301111,
        277678,
        295433,
        295439,
        286631,
        301114,
        301112,
        277679,
        295436,
        301113,
        295435,
        268101
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/209160/header.jpg?t=1654830036",
      "game" : "Call of Duty®: Ghosts",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Outnumbered and outgunned, but not outmatched.Call of Duty®: Ghosts is an extraordinary step forward for one of the largest entertainment franchises of all-time. This new chapter in the Call of Duty® franchise features a new dynamic where players are on the side of a crippled nation fighting not for freedom, or liberty, but simply to...",
      "id" : 209160
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/115300/page_bg_generated_v6b.jpg?t=1692032509",
      "developers" : [
        "Infinity Ward",
        "Sledgehammer Games"
      ],
      "dlc" : [
        42698,
        42697,
        42696,
        42695
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/115300/header.jpg?t=1692032509",
      "game" : "Call of Duty®: Modern Warfare® 3 (2011)",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "The best-selling first-person action series of all-time returns with an epic sequel to the multiple GOTY award winner Call of Duty®: Modern Warfare® 2",
      "id" : 42680
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/476600/page_bg_generated_v6b.jpg?t=1646764749",
      "developers" : [
        "Sledgehammer Games",
        "Raven Software"
      ],
      "dlc" : [
        683100,
        848790,
        729160
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/476600/header.jpg?t=1646764749",
      "game" : "Call of Duty®: WWII",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Call of Duty® returns to its roots with Call of Duty®: WWII - a breathtaking experience that redefines World War II for a new gaming generation.",
      "id" : 476600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/476600/page_bg_generated_v6b.jpg?t=1646764749",
      "developers" : [
        "Sledgehammer Games",
        "Raven Software"
      ],
      "dlc" : [
        683100,
        848790,
        729160
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/476600/header.jpg?t=1646764749",
      "game" : "Call of Duty®: WWII",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Call of Duty® returns to its roots with Call of Duty®: WWII - a breathtaking experience that redefines World War II for a new gaming generation.",
      "id" : 476600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/204450/page_bg_generated_v6b.jpg?t=1685519689",
      "developers" : [
        "Techland"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/204450/header.jpg?t=1685519689",
      "game" : "Call of Juarez: Gunslinger",
      "publishers" : [
        "Techland Publishing"
      ],
      "short_description" : "Desde el polvo de una mina de oro hasta la mugre de una taberna, Call of Juarez® Gunslinger es un homenaje a las historias del salvaje Oeste. Vive la épica y violenta aventura de un implacable cazarrecompensas que tiene como objetivo a los bandidos más infames del Oeste.",
      "id" : 204450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/65740/page_bg_generated_v6b.jpg?t=1635942647",
      "developers" : [
        "Bohemia Interactive"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/65740/header.jpg?t=1635942647",
      "game" : "Carrier Command: Gaea Mission",
      "publishers" : [
        "Bohemia Interactive"
      ],
      "short_description" : "A next-gen re-imagination of a groundbreaking 80s classic. Carrier Command: Gaea Mission brings a breathtaking combination of action and strategy elements.",
      "id" : 65740
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/953490/page_bg_generated_v6b.jpg?t=1711536476",
      "developers" : [
        "Phobia Game Studio"
      ],
      "dlc" : [
        1462530,
        1377100
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/953490/header.jpg?t=1711536476",
      "game" : "CARRION",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "CARRION is a reverse horror game in which you assume the role of an amorphous creature of unknown origins, stalking and consuming those that imprisoned you.",
      "id" : 953490
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/225420/page_bg_generated_v6b.jpg?t=1669648785",
      "developers" : [
        "Colossal Order Ltd."
      ],
      "dlc" : [
        283530,
        225434,
        225432,
        225431,
        225430,
        225426,
        225424,
        225428,
        225429,
        306170,
        306171,
        310050
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/225420/header.jpg?t=1669648785",
      "game" : "Cities in Motion 2",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Cities in Motion 2 is the sequel to the popular mass transit simulation game Cities in Motion. Build, manage and lead your transportation network to provide cities with their ever changing needs. CIM2 introduces new features including multiplayer game modes, day and night cycles, timetables and dynamic cities.",
      "id" : 225420
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/231140/page_bg_generated_v6b.jpg?t=1651242019",
      "developers" : [
        "Focus Entertainment"
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/231140/header.jpg?t=1651242019",
      "game" : "Cities XL Platinum",
      "publishers" : [
        "Focus Entertainment"
      ],
      "short_description" : "Build cities, shape a world.Cities XL Platinum lets you design, build and link up cities of all shapes and sizes around the Cities XL planet!Build more impressive cities than ever before! Cities XL Platinum offers a huge variety of over 1,000 buildings and constructions (including 50 brand new structures), that you can freely place on...",
      "id" : 231140
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/255710/page_bg_generated_v6b.jpg?t=1710168064",
      "developers" : [
        "Colossal Order Ltd."
      ],
      "dlc" : [
        2342310,
        2313320,
        2313322,
        2313321,
        2313323,
        2313324,
        2148900,
        2224691,
        2224690,
        2148902,
        2225940,
        2225941,
        2148901,
        2148903,
        2148904,
        2144480,
        2144481,
        2144482,
        2144483,
        2008400,
        1992290,
        1992291,
        1992293,
        1992292,
        1726380,
        1726382,
        1726381,
        1726384,
        1726383,
        1531471,
        1531470,
        1531473,
        1531472,
        1146930,
        1148022,
        1196100,
        1148020,
        1148021,
        944071,
        1059820,
        1065491,
        1065490,
        715194,
        944070,
        715191,
        614580,
        547502,
        515191,
        420610,
        369150,
        715190,
        547500,
        515190,
        815380,
        715193,
        614581,
        614582,
        547501,
        346791,
        715192,
        456200,
        563850
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/255710/header.jpg?t=1710168064",
      "game" : "Cities: Skylines",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience.",
      "id" : 255710
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/8800/page_bg_generated_v6b.jpg?t=1573063843",
      "developers" : [
        "Firaxis Games"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/8800/header.jpg?t=1573063843",
      "game" : "Civilization IV: Beyond the Sword",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Sid Meier's Civilization IV®: Beyond the Sword is the second expansion pack for Civilization IV - the 2005 PC Game of the Year that has become a worldwide hit.",
      "id" : 8800
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/8800/page_bg_generated_v6b.jpg?t=1573063843",
      "developers" : [
        "Firaxis Games"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/8800/header.jpg?t=1573063843",
      "game" : "Civilization IV: Beyond the Sword",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Sid Meier's Civilization IV®: Beyond the Sword is the second expansion pack for Civilization IV - the 2005 PC Game of the Year that has become a worldwide hit.",
      "id" : 8800
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/3990/page_bg_generated_v6b.jpg?t=1573064463",
      "developers" : [
        "Firaxis Games"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/3990/header.jpg?t=1573064463",
      "game" : "Civilization IV®: Warlords",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Sid Meier's Civilization IV: Warlords is the first expansion pack for the award-winning game that has become an instant world-wide hit. Paying homage to some of history's greatest military leaders, the expansion delivers six unique and interesting scenarios, giving players the chance to change the course of history with the help of their...",
      "id" : 3990
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/3990/page_bg_generated_v6b.jpg?t=1573064463",
      "developers" : [
        "Firaxis Games"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/3990/header.jpg?t=1573064463",
      "game" : "Civilization IV®: Warlords",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Sid Meier's Civilization IV: Warlords is the first expansion pack for the award-winning game that has become an instant world-wide hit. Paying homage to some of history's greatest military leaders, the expansion delivers six unique and interesting scenarios, giving players the chance to change the course of history with the help of their...",
      "id" : 3990
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/287340/page_bg_generated_v6b.jpg?t=1572605431",
      "developers" : [
        "Codemasters Digital"
      ],
      "genres" : [
        {
          "description" : "Carreras",
          "id" : "9"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/287340/header.jpg?t=1572605431",
      "game" : "Colin McRae Rally",
      "publishers" : [
        "Codemasters"
      ],
      "short_description" : "Hit the dirt in Colin McRae Rally - the classic off-road racing experience.",
      "id" : 287340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/24790/page_bg_generated_v6b.jpg?t=1712754900",
      "developers" : [
        "EA Los Angeles"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/24790/header.jpg?t=1712754900",
      "game" : "Command & Conquer 3 Tiberium Wars™",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Es el año 2047. Una enorme bola de fuego nuclear explota en lo alto del cielo nocturno, lo que marca el dramático comienzo de la Tercera Guerra del Tiberium y el esperado regreso de la franquicia de estrategia en tiempo real más innovadora de todos los tiempos.",
      "id" : 24790
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/24800/page_bg_generated_v6b.jpg?t=1712755156",
      "developers" : [
        "EA Los Angeles"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/24800/header.jpg?t=1712755156",
      "game" : "Command & Conquer: Red Alert 3 - Uprising",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Red Alert 3: Uprising incluye cuatro minicampañas nuevas, que hará que te adentres en la historia de los soviéticos, los Aliados, el Imperio del Sol Naciente. Con la posibilidad de participar en una campaña centrada en los orígenes del comando de la colegiala japonesa preferida: Yuriko Omega.",
      "id" : 24800
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/24810/page_bg_generated_v6b.jpg?t=1712755017",
      "developers" : [
        "EA Los Angeles"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/24810/header.jpg?t=1712755017",
      "game" : "Command & Conquer™ 3: Kane’s Wrath",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "¡En el nombre de Kane! La serie Command &amp; Conquer™ continúa prosperando con Command &amp; Conquer™ 3: Kane's Wrath.",
      "id" : 24810
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/17480/page_bg_generated_v6b.jpg?t=1712755099",
      "developers" : [
        "EA Los Angeles"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/17480/header.jpg?t=1712755099",
      "game" : "Command & Conquer™ Red Alert™ 3",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Líderes desesperados de una Unión Soviética devastada viajan al pasado para cambiar la historia y restaurar la gloria de la Madre Rusia.",
      "id" : 17480
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1213210/page_bg_generated_v6b.jpg?t=1659021785",
      "developers" : [
        "Petroglyph",
        "Lemon Sky Studios"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1213210/header.jpg?t=1659021785",
      "game" : "Command & Conquer™ Remastered Collection",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Command &amp; Conquer y Red Alert remasterizados en 4K por los miembros del antiguo equipo de Westwood Studios. Incluye las tres expansiones, un multijugador reconstruido, una interfaz de usuario modernizada, un editor de mapas, una galería de videos de bonus y más de 7 horas de música remasterizada.",
      "id" : 1213210
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9180/page_bg_generated_v6b.jpg?t=1686163312",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9180/header.jpg?t=1686163312",
      "game" : "Commander Keen",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "Commander Keen: Invasion of the Vorticons: Episode 1: Marooned on Mars (Dec. 14th 1990) Episode 2: The Earth Explodes (1991) Episode 3: Keen Must Die! (1991) Commander Keen's very first adventure, and the debut of id's groundbreaking side-scrolling technology.",
      "id" : 9180
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1100410/page_bg_generated_v6b.jpg?t=1708945566",
      "developers" : [
        "Yippee! Entertainment",
        "Pyro Studios"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1100410/header.jpg?t=1708945566",
      "game" : "Commandos 2 - HD Remaster",
      "publishers" : [
        "Kalypso Media"
      ],
      "short_description" : "Relive the real-time tactics masterpiece that defined the genre like no other: Commandos 2 - HD Remaster is a true homage to one of gaming’s most celebrated masterpieces.",
      "id" : 1100410
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6830/page_bg_generated_v6b.jpg?t=1712822533",
      "developers" : [
        "Pyro Studios"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6830/header.jpg?t=1712822533",
      "game" : "Commandos 2: Men of Courage",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "Commandos 2: Men of Courage is a tactical action/strategy game set against the backdrop of World War II. Take control of an elite group of commandos who must venture deep into enemy territory and utilize their combined expertise to complete a series of mission-based objectives.",
      "id" : 6830
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6840/page_bg_generated_v6b.jpg?t=1696506433",
      "developers" : [
        "Pyro Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6840/header.jpg?t=1696506433",
      "game" : "Commandos 3: Destination Berlin",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "Commandos 3: Destination Berlin is a game of real-time tactics that places you in command of an elite unit of Special Forces behind enemy lines in the European theater of World War II. From the shores of France to the heart of the Third Reich, strike fast from land or sea infiltrating hostile territories and conducting raids to disrupt...",
      "id" : 6840
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6800/page_bg_generated_v6b.jpg?t=1696506442",
      "developers" : [
        "Pyro Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6800/header.jpg?t=1696506442",
      "game" : "Commandos: Behind Enemy Lines",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "Commandos: Behind Enemy Lines is a real-time tactics game set in World War II that puts you in command of a small squad of elite troopers. Send them behind enemy lines on a series of hazardous missions, and bring them back alive. Clever strategy has never been so furiously action-packed.",
      "id" : 6800
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6810/page_bg_generated_v6b.jpg?t=1696506445",
      "developers" : [
        "Pyro Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6810/header.jpg?t=1696506445",
      "game" : "Commandos: Beyond the Call of Duty",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "You have been selected for active service in the Commandos Corps, and must now mobilize in a series of 8 new dangerous missions. You may come with experience of action 'Behind Enemy Lines' or perhaps you are just a rookie - whatever you are, you will be given the opportunity to push your daring and tactical ability to the limit.",
      "id" : 6810
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/228200/page_bg_generated_v6b.jpg?t=1711458818",
      "developers" : [
        "Relic Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/228200/header.jpg?t=1711458818",
      "game" : "Company of Heroes",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Delivering a visceral WWII gaming experience, Company of Heroes redefines RTS by bringing the sacrifice of heroic soldiers, war-ravaged environments, and dynamic battlefields to life. Please visit the &quot;Company of Heroes - Legacy Edition&quot; page for additional user reviews.",
      "id" : 228200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/4560/page_bg_generated_v6b.jpg?t=1573488196",
      "developers" : [
        "Relic Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/4560/header.jpg?t=1573488196",
      "game" : "Company of Heroes - Legacy Edition",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Delivering a visceral WWII gaming experience, Company of Heroes redefines RTS by bringing the sacrifice of heroic soldiers, war-ravaged environments, and dynamic battlefields to life. This legacy version also grants access to the latest version of COH, just called &quot;Company of Heroes&quot;.",
      "id" : 4560
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/231430/page_bg_generated_v6b.jpg?t=1661158807",
      "developers" : [
        "Relic Entertainment",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "dlc" : [
        691120,
        691110,
        260290,
        231480,
        231479
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/231430/header.jpg?t=1661158807",
      "game" : "Company of Heroes 2",
      "publishers" : [
        "SEGA",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "short_description" : "Experience the ultimate WWII RTS platform with COH2 and its standalone expansions. This package includes the base game, which you can then upgrade by purchasing The Western Front Armies, Ardennes Assault and/or The British Forces. More info in the &quot;About This Game&quot; section below.",
      "id" : 231430
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9340/page_bg_generated_v6b.jpg?t=1711547477",
      "developers" : [
        "Relic Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9340/header.jpg?t=1711547477",
      "game" : "Company of Heroes: Opposing Fronts",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "The next chapter in the #1 rated RTS franchise thrusts players into a hellish war torn landscape to command two battle-hardened armies in relentless campaigns for honor and country. Players lead the tenacious British 2nd Army during the heroic World War II liberation of Caen, France, and command the German Panzer Elite as they struggle...",
      "id" : 9340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/20540/page_bg_generated_v6b.jpg?t=1711460562",
      "developers" : [
        "Relic Entertainment"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/20540/header.jpg?t=1711460562",
      "game" : "Company of Heroes: Tales of Valor",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Company of Heroes®: Tales of Valor™ is the expansion to the Game of the Year winner and highest rated real time strategy franchise Company of Heroes®. Featuring new campaigns to overcome, units to command, and battlefields to conquer, Company of Heroes®: Tales of Valor™ delivers evolved gameplay mechanics and 3 episodic adventures...",
      "id" : 20540
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/440900/page_bg_generated_v6b.jpg?t=1712090662",
      "developers" : [
        "Funcom"
      ],
      "dlc" : [
        1206200,
        1668110,
        1265640,
        1173900,
        1147100,
        1134010,
        1076150,
        1040930,
        972370,
        919390,
        887120,
        760730
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Multijugador masivo",
          "id" : "29"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/440900/header_alt_assets_5.jpg?t=1712090662",
      "game" : "Conan Exiles",
      "publishers" : [
        "Funcom"
      ],
      "short_description" : "An online multiplayer survival game, now with sorcery, set in the lands of Conan the Barbarian. Survive in a vast open world sandbox, build your home into a kingdom, and dominate your enemies in single or multiplayer.",
      "id" : 440900
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/204560/page_bg_generated_v6b.jpg?t=1587480169",
      "developers" : [
        "Cyanide Studio"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/204560/header.jpg?t=1587480169",
      "game" : "Confrontation",
      "publishers" : [
        "Focus Home Interactive"
      ],
      "short_description" : "Lead a Griffin Elite Squad in missions through the territory of the fearsome Scorpion creatures, the terrible Wolfen packs, or the brutal Bran-Ô-Kor Orcs.",
      "id" : 204560
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/870780/page_bg_generated_v6b.jpg?t=1706003388",
      "developers" : [
        "Remedy Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/870780/header.jpg?t=1706003388",
      "game" : "Control Ultimate Edition",
      "publishers" : [
        "505 Games"
      ],
      "short_description" : "Winner of over 80 awards, Control is a visually stunning third-person action-adventure that will keep you on the edge of your seat.",
      "id" : 870780
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/10/page_bg_generated_v6b.jpg?t=1666823513",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/10/header.jpg?t=1666823513",
      "game" : "Counter-Strike",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Disfruta del juego de acción en línea n.° 1 en el mundo. Sumérgete en el fragor de la guerra antiterrorista más realista con este archiconocido juego por equipos. Alíate con compañeros para superar misiones estratégicas, asalta bases enemigas, rescata rehenes y recuerda que tu personaje contribuye al éxito del equipo y viceversa.",
      "id" : 10
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/730/page_bg_generated_v6b.jpg?t=1698860631",
      "developers" : [
        "Valve"
      ],
      "dlc" : [
        2678630
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1698860631",
      "game" : "Counter-Strike 2",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Durante más de dos décadas, Counter-Strike ha brindado una experiencia competitiva de élite, una experiencia moldeada por millones de jugadores en todo el mundo. Ahora es el momento de comenzar el siguiente capítulo en la historia de CS. Esto es Counter-Strike 2.",
      "id" : 730
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/80/page_bg_generated_v6b.jpg?t=1602535977",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/80/header.jpg?t=1602535977",
      "game" : "Counter-Strike: Condition Zero",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Esta versión de Counter-Strike trae una extensa campaña Tour of Duty, una cantidad casi ilimitada de escaramuzas, actualizaciones y nuevo contenido para la modalidad multijugador, galardonada en varias oportunidades. Además, de regalo, disfrutarás de más de doce misiones para un solo jugador.",
      "id" : 80
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/80/page_bg_generated_v6b.jpg?t=1602535977",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/80/header.jpg?t=1602535977",
      "game" : "Counter-Strike: Condition Zero",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Esta versión de Counter-Strike trae una extensa campaña Tour of Duty, una cantidad casi ilimitada de escaramuzas, actualizaciones y nuevo contenido para la modalidad multijugador, galardonada en varias oportunidades. Además, de regalo, disfrutarás de más de doce misiones para un solo jugador.",
      "id" : 80
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/240/page_bg_generated_v6b.jpg?t=1666823740",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/240/header.jpg?t=1666823740",
      "game" : "Counter-Strike: Source",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Counter-Strike: Source blends Counter-Strike's award-winning teamplay action with the advanced technology of Source™ technology.",
      "id" : 240
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/203770/page_bg_generated_v6b.jpg?t=1709827159",
      "developers" : [
        "Paradox Development Studio"
      ],
      "dlc" : [
        1538960,
        1167860,
        756660,
        949870,
        640140,
        530780,
        449980,
        394320,
        354330,
        329010,
        292982,
        226667,
        210908,
        210906,
        279600,
        210902,
        210895,
        203778,
        449981,
        394321,
        354331,
        616180,
        616170,
        616210,
        616160,
        329013,
        326530,
        226666,
        226665,
        203776,
        226671,
        592800
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/203770/header.jpg?t=1709827159",
      "game" : "Crusader Kings II",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Explore one of the defining periods in world history in an experience crafted by the masters of Grand Strategy.",
      "id" : 203770
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/108800/page_bg_generated_v6b.jpg?t=1614961356",
      "developers" : [
        "Crytek Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/108800/header.jpg?t=1614961356",
      "game" : "Crysis 2 - Maximum Edition",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Aliens are decimating New York City, only you have the technology to survive. Be The Weapon.",
      "id" : 108800
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2096600/page_bg_generated_v6b.jpg?t=1709652029",
      "developers" : [
        "Crytek",
        "Saber Interactive"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2096600/header.jpg?t=1709652029",
      "game" : "Crysis 2 Remastered",
      "publishers" : [
        "Crytek"
      ],
      "short_description" : "Revive la legendaria campaña de un jugador del clásico shooter en primera persona, Crysis 2, optimizada para los dispositivos actuales en Crysis 2 Remastered.",
      "id" : 2096600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2096610/page_bg_generated_v6b.jpg?t=1709652109",
      "developers" : [
        "Crytek",
        "Saber Interactive"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2096610/header.jpg?t=1709652109",
      "game" : "Crysis 3 Remastered",
      "publishers" : [
        "Crytek"
      ],
      "short_description" : "Vive la experiencia para un jugador del icónico shooter en primera persona, Crysis 3, optimizada para aprovechar los dispositivos actuales en Crysis 3 Remastered.",
      "id" : 2096610
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1715130/page_bg_generated_v6b.jpg?t=1709651863",
      "developers" : [
        "Crytek"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1715130/header.jpg?t=1709651863",
      "game" : "Crysis Remastered",
      "publishers" : [
        "Crytek"
      ],
      "short_description" : "The classic first person shooter from Crytek is back with the action-packed gameplay, sandbox world, and thrilling epic battles you loved the first time around – now with remastered graphics optimized for a new generation of hardware.",
      "id" : 1715130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1091500/page_bg_generated_v6b.jpg?t=1706698946",
      "developers" : [
        "CD PROJEKT RED"
      ],
      "dlc" : [
        1495710,
        2060310,
        2138330
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1706698946",
      "game" : "Cyberpunk 2077",
      "publishers" : [
        "CD PROJEKT RED"
      ],
      "short_description" : "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.",
      "id" : 1091500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1151130/page_bg_generated_v6b.jpg?t=1707754092",
      "developers" : [
        "Tall Troll Games"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1151130/header.jpg?t=1707754092",
      "game" : "Dark Chess",
      "publishers" : [
        "Tall Troll Games",
        "Hawthorn Games"
      ],
      "short_description" : "THIS IS NOT CLASSIC CHESS! Dark Chess is a game of chess with fog of war, story-driven campaign with challenges, traps &amp; puzzles. A game-changing feature to conceal enemy army, add more fun and intrigue to a timeless classic. Fight your way through the Campaign or beat your friends and foes in PvP!",
      "id" : 1151130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/335300/page_bg_generated_v6b.jpg?t=1700660721",
      "developers" : [
        "FromSoftware, Inc"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/335300/header.jpg?t=1700660721",
      "game" : "DARK SOULS™ II: Scholar of the First Sin",
      "publishers" : [
        "Bandai Namco Entertainment",
        "FromSoftware, Inc"
      ],
      "short_description" : "DARK SOULS™ II: Scholar of the First Sin brings the franchise’s renowned obscurity &amp; gripping gameplay to a new level. Join the dark journey and experience overwhelming enemy encounters, diabolical hazards, and unrelenting challenge.",
      "id" : 335300
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/73170/page_bg_generated_v6b.jpg?t=1669648939",
      "developers" : [
        "Martin Ivanov"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/73170/header.jpg?t=1669648939",
      "game" : "Darkest Hour: A Hearts of Iron Game",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Developed by a team of experienced modders from the Paradox forum, Darkest Hour is a stand-alone Hearts of Iron game. The game features a mixture of short and in-depth campaigns set across the darkest chapters of the 20th century. Play from the outbreak of the Great War up until the onset of the Cold War.",
      "id" : 73170
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/50650/page_bg_generated_v6b.jpg?t=1447354887",
      "developers" : [
        "Vigil Games"
      ],
      "dlc" : [
        215824
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/50650/header.jpg?t=1447354887",
      "game" : "Darksiders II",
      "publishers" : [
        "Nordic Games"
      ],
      "short_description" : "Awakened by the End of Days, Death, the most feared of the legendary Four Horsemen, embarks upon a quest to restore mankind, and redeem his brother’s name.",
      "id" : 50650
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/388410/page_bg_generated_v6b.jpg?t=1696422012",
      "developers" : [
        "Gunfire Games",
        "Vigil Games",
        "THQ Nordic"
      ],
      "dlc" : [
        417380
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/388410/header.jpg?t=1696422012",
      "game" : "Darksiders II Deathinitive Edition",
      "publishers" : [
        "THQ Nordic"
      ],
      "short_description" : "The ultimate DARKSIDERS II experience! 1080p native resolution. Reworked and tuned game balancing and loot distribution. Improved Graphic Render Engine for even higher visual quality, lighting and shadows. Improved and reworked level, character and environment graphics.",
      "id" : 388410
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/462780/page_bg_generated_v6b.jpg?t=1696421895",
      "developers" : [
        "KAIKO",
        "Vigil Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/462780/header.jpg?t=1696421895",
      "game" : "Darksiders Warmastered Edition",
      "publishers" : [
        "THQ Nordic"
      ],
      "short_description" : "Deceived by the forces of evil into prematurely bringing about the end of the world, War – the first Horseman of the Apocalypse – stands accused of breaking the sacred law by inciting a war between Heaven and Hell.",
      "id" : 462780
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/50620/page_bg_generated_v6b.jpg?t=1696422249",
      "developers" : [
        "Vigil Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/50620/header.jpg?t=1696422249",
      "game" : "Darksiders™",
      "publishers" : [
        "THQ Nordic"
      ],
      "short_description" : "Deceived by the forces of evil into prematurely bringing about the end of the world, War – the first Horseman of the Apocalypse – stands accused of breaking the sacred law by inciting a war between Heaven and Hell. In the slaughter that ensued, the demonic forces defeated the heavenly hosts and laid claim to the Earth.",
      "id" : 50620
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1500/page_bg_generated_v6b.jpg?t=1656419098",
      "developers" : [
        "Introversion Software"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1500/header.jpg?t=1656419098",
      "game" : "Darwinia",
      "publishers" : [
        "Introversion Software"
      ],
      "short_description" : "Combining fast-paced action with strategic battle planning, Darwinia features a novel and intuitive control mechanism, a graphical style ripped from 80's retro classics like Tron and Defender, and a story concerning a tribe of nomadic sprites trapped in a modern 3D world.",
      "id" : 1500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/30/page_bg_generated_v6b.jpg?t=1512413490",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/30/header.jpg?t=1512413490",
      "game" : "Day of Defeat",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Alístate en este emocionante combate entre las Fuerzas Aliadas y las del Eje, ambientado en los campos de batalla europeos de la Segunda Guerra Mundial. Tus amigos y tú podrán elegir entre infantería ligera, pesada o de asalto, y francotirador o ametrallador.",
      "id" : 30
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/300/page_bg_generated_v6b.jpg?t=1694209029",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/300/header.jpg?t=1694209029",
      "game" : "Day of Defeat: Source",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "El clásico multijugador de Valve de la Segunda Guerra Mundial: Ahora disponible para Mac.",
      "id" : 300
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/388210/page_bg_generated_v6b.jpg?t=1710444508",
      "developers" : [
        "Double Fine Productions",
        "Shiny Shoe"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/388210/header.jpg?t=1710444508",
      "game" : "Day of the Tentacle Remastered",
      "publishers" : [
        "Double Fine Productions"
      ],
      "short_description" : "Originally released by LucasArts in 1993 as a sequel to Ron Gilbert’s ground breaking Maniac Mansion, Day of the Tentacle is back in a remastered edition that features all new hand-drawn, high resolution artwork, with remastered audio, music and sound effects.",
      "id" : 388210
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/588650/page_bg_generated_v6b.jpg?t=1678188017",
      "developers" : [
        "Motion Twin"
      ],
      "dlc" : [
        1580050,
        1451460,
        1204130,
        1046440,
        665380,
        1393790,
        2101430
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg?t=1678188017",
      "game" : "Dead Cells",
      "publishers" : [
        "Motion Twin"
      ],
      "short_description" : "Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. You'll explore a sprawling, ever-changing castle... assuming you’re able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat. Regular free content updates!",
      "id" : 588650
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/17470/page_bg_generated_v6b.jpg?t=1664889864",
      "developers" : [
        "EA Redwood Shores"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/17470/header.jpg?t=1664889864",
      "game" : "《死亡空间》 (2008)",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "You are Isaac Clarke, an engineer on the spacecraft USG Ishimura. You're not a warrior. You're not a soldier. You are, however, the last line of defense for the remaining living crew.",
      "id" : 17470
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/47780/page_bg_generated_v6b.jpg?t=1674071175",
      "developers" : [
        "Visceral Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/47780/header.jpg?t=1674071175",
      "game" : "Dead Space™ 2",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Three years after the Necromorph infestation aboard the USS Ishimura, Isaac Clarke awakens from a coma, confused, disoriented, and on a space station called The Sprawl. Explore this world and its zero-g environments to discover the truth about the Unitology and its role in the Necromorph epidemic.",
      "id" : 47780
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/211400/page_bg_generated_v6b.jpg?t=1667838538",
      "developers" : [
        "Tequila Works, S.L."
      ],
      "dlc" : [
        211419
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/211400/header.jpg?t=1667838538",
      "game" : "Deadlight",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "“Probably the best downloadable title on the market right now.” 9/10 – Eurogamer.se",
      "id" : 211400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/40/page_bg_generated_v6b.jpg?t=1568752159",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/40/header.jpg?t=1568752159",
      "game" : "Deathmatch Classic",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Disfruta del juego rápido para varios jugadores con Deathmatch Classic (alias DMC). DMC es todo un homenaje de Valve a id software y te hará trabajar a fondo con los lanzacohetes y los reflejos en escenarios futuristas.",
      "id" : 40
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1520/page_bg_generated_v6b.jpg?t=1686072081",
      "developers" : [
        "Introversion Software"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1520/header.jpg?t=1686072081",
      "game" : "DEFCON",
      "publishers" : [
        "Introversion Software"
      ],
      "short_description" : "Inspired by the 1983 cult classic film, Wargames, DEFCON superbly evokes the tension, paranoia and suspicion of the Cold War era, playing on the fascinating aspects of psychological gameplay that occur during strategic nuclear warfare. You play a General hidden deep within an underground bunker.",
      "id" : 1520
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/35420/page_bg_generated_v6b.jpg?t=1662514414",
      "developers" : [
        "Defence Alliance Team"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/35420/header.jpg?t=1662514414",
      "game" : "Defence Alliance 2",
      "publishers" : [
        "Tripwire Interactive"
      ],
      "short_description" : "Defence Alliance 2 is a total conversion mod for Killing Floor featuring team based futuristic FPS game play. DA2 blends fast paced action with class based tactics to create an experience that is instantly enjoyable while still offering very deep gameplay.",
      "id" : 35420
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/18500/page_bg_generated_v6b.jpg?t=1667008094",
      "developers" : [
        "Hidden Path Entertainment"
      ],
      "dlc" : [
        18523,
        18522,
        18508,
        18509,
        18520,
        18521
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/18500/header.jpg?t=1667008094",
      "game" : "Defense Grid: The Awakening",
      "publishers" : [
        "Hidden Path Entertainment"
      ],
      "short_description" : "Defense Grid: The Awakening is a unique spin on tower defense gameplay that will appeal to players of all skill levels. A horde of enemies is invading, and it's up to the player to stop them by strategically building fortification towers around their base.",
      "id" : 18500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/224600/page_bg_generated_v6b.jpg?t=1619719240",
      "developers" : [
        "Trion Worlds"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        },
        {
          "description" : "Multijugador masivo",
          "id" : "29"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/224600/header.jpg?t=1619719240",
      "game" : "Defiance",
      "publishers" : [
        "Trion Worlds"
      ],
      "short_description" : "Join the futuristic online open-world shooter where thousands of players scour a transformed Earth competing for alien technology.",
      "id" : 224600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/610370/page_bg_generated_v6b.jpg?t=1699253975",
      "developers" : [
        "Mimimi Games"
      ],
      "dlc" : [
        1279740,
        1287600,
        1287601,
        1287602,
        1308850
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/610370/header.jpg?t=1699253975",
      "game" : "Desperados III",
      "publishers" : [
        "THQ Nordic"
      ],
      "short_description" : "Desperados III is a story-driven, hardcore tactical stealth game, set in a ruthless Wild West scenario. Play smart if you want to succeed. A good plan can make the difference between survival and finding yourself at the business end of a pistol.",
      "id" : 610370
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1085660/page_bg_generated_v6b.jpg?t=1712779672",
      "developers" : [
        "Bungie"
      ],
      "dlc" : [
        2336881,
        2336880,
        1945360,
        1945340,
        2218002,
        2266420,
        1656330,
        1314563,
        1090200,
        2343180,
        1090150,
        1656370,
        1745440,
        1569630
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header_latam.jpg?t=1712779672",
      "game" : "Destiny 2",
      "publishers" : [
        "Bungie "
      ],
      "short_description" : "Destiny 2 es un MMO de acción en un mundo único en evolución al que tú y tus amigos pueden unirse en cualquier momento y lugar, gratuitamente.",
      "id" : 1085660
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/337000/page_bg_generated_v6b.jpg?t=1700763669",
      "developers" : [
        "Eidos Montreal",
        "Feral Interactive (Linux)",
        "Feral Interactive (Mac)"
      ],
      "dlc" : [
        413360,
        413370,
        413380,
        413390,
        470070
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/337000/header.jpg?t=1700763669",
      "game" : "Deus Ex: Mankind Divided",
      "publishers" : [
        "Eidos Interactive Corp.",
        "Feral Interactive (Linux)",
        "Feral Interactive (Mac)"
      ],
      "short_description" : "Now an experienced covert operative, Adam Jensen is forced to operate in a world that has grown to despise his kind. Armed with a new arsenal of state-of-the-art weapons and augmentations, he must choose the right approach, along with who to trust, in order to unravel a vast worldwide conspiracy.",
      "id" : 337000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/70000/page_bg_generated_v6b.jpg?t=1478380788",
      "developers" : [
        "800 North and Digital Ranch"
      ],
      "dlc" : [
        311660,
        344290
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/70000/header.jpg?t=1478380788",
      "game" : "Dino D-Day",
      "publishers" : [
        "800 North and Digital Ranch"
      ],
      "short_description" : "Frantic, multiplayer action involving Nazis and dinosaurs! What are you waiting for? This is World War II as it should have been!",
      "id" : 70000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/310560/page_bg_generated_v6b.jpg?t=1667844327",
      "developers" : [
        "Codemasters",
        "Feral Interactive (Linux)",
        "Feral Interactive (Mac)"
      ],
      "genres" : [
        {
          "description" : "Carreras",
          "id" : "9"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/310560/header.jpg?t=1667844327",
      "game" : "DiRT Rally",
      "publishers" : [
        "Codemasters",
        "Feral Interactive (Linux)",
        "Feral Interactive (Mac)",
        "Electronic Arts"
      ],
      "short_description" : "DiRT Rally is the most authentic and thrilling rally game ever made, road-tested over 80 million miles by the DiRT community. It perfectly captures that white knuckle feeling of racing on the edge as you hurtle along dangerous roads, knowing that one crash could irreparably harm your stage time.",
      "id" : 310560
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/33670/page_bg_generated_v6b.jpg?t=1665412369",
      "developers" : [
        "Akella",
        ".dat"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/33670/header.jpg?t=1665412369",
      "game" : "Disciples III - Renaissance Steam Special Edition",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "This Steam Special Edition includes three exclusive maps and Steam Achievements.",
      "id" : 33670
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/200670/page_bg_generated_v6b.jpg?t=1665412486",
      "developers" : [
        "Akella",
        ".dat"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/200670/header.jpg?t=1665412486",
      "game" : "Disciples III - Resurrection",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "A new landmark in the history of Nevendaar, when a new race ascends to power – the ruthless &amp; merciless Undead Hordes.",
      "id" : 200670
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/205100/page_bg_generated_v6b.jpg?t=1705604245",
      "developers" : [
        "Arkane Studios"
      ],
      "dlc" : [
        212894,
        212893,
        208575,
        208570,
        455050
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/205100/header.jpg?t=1705604245",
      "game" : "Dishonored",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge. With Dishonored’s flexible combat system, creatively eliminate your targets as you combine the supernatural abilities, weapons and unusual gadgets at your disposal.",
      "id" : 205100
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/219780/page_bg_generated_v6b.jpg?t=1568735670",
      "developers" : [
        "Larian Studios"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/219780/header.jpg?t=1568735670",
      "game" : "Divinity II: Developer's Cut",
      "publishers" : [
        "Larian Studios",
        "Focus Home Interactive"
      ],
      "short_description" : "Dragons: they have been hunted, they have been slain, but now the hour to strike back has come.",
      "id" : 219780
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/435150/page_bg_generated_v6b.jpg?t=1709728210",
      "developers" : [
        "Larian Studios"
      ],
      "dlc" : [
        715950,
        880640,
        1247270
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/435150/header.jpg?t=1709728210",
      "game" : "Divinity: Original Sin 2 - Definitive Edition",
      "publishers" : [
        "Larian Studios"
      ],
      "short_description" : "The critically acclaimed RPG that raised the bar, from the creators of Baldur's Gate 3. Gather your party. Master deep, tactical combat. Venture as a party of up to four - but know that only one of you will have the chance to become a God.",
      "id" : 435150
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/379720/page_bg_generated_v6b.jpg?t=1692892793",
      "developers" : [
        "id Software"
      ],
      "dlc" : [
        1195480
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/379720/header.jpg?t=1692892793",
      "game" : "DOOM",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Now includes all three premium DLC packs (Unto the Evil, Hell Followed, and Bloodfall), maps, modes, and weapons, as well as all feature updates including Arcade Mode, Photo Mode, and the latest Update 6.66, which brings further multiplayer improvements as well as revamps multiplayer progression.",
      "id" : 379720
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2280/page_bg_generated_v6b.jpg?t=1709155730",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2280/header.jpg?t=1709155730",
      "game" : "DOOM (1993)",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "Eres uno de los mejores marines de la Tierra, destinado en la instalación de investigación de la UAC en Marte. Un fallo en un experimento abre un portal al infierno y unos demonios sanguinarios infestan la base. Deberás abrirte paso a los tiros para poder sobrevivir.",
      "id" : 2280
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9050/page_bg_generated_v6b.jpg?t=1660240082",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9050/header.jpg?t=1660240082",
      "game" : "DOOM 3",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "A massive demonic invasion has overwhelmed the Union Aerospace Corporation's (UAC) Mars Research Facility, leaving only chaos and horror in its wake. As one of only a few survivors, you must fight your way to hell and back against a horde of evil monsters.",
      "id" : 9050
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/208200/page_bg_generated_v6b.jpg?t=1664292843",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/208200/header.jpg?t=1664292843",
      "game" : "DOOM 3",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Una invasión demoníaca arrasó la instalación de la UAC en Marte. Eres uno de los pocos supervivientes y deberás abrirte paso hasta el infierno luchando contra una horda de demonios en este galardonado FPS de terror y acción que reinventa el DOOM original.",
      "id" : 208200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9070/page_bg_generated_v6b.jpg?t=1660250812",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9070/header.jpg?t=1660250812",
      "game" : "DOOM 3 Resurrection of Evil",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "The gripping expansion pack for DOOM 3 takes your even further into the the DOOM universe. Two years following the unexplained disaster on Mars, the UAC returns to the abandoned facility to investigate a mysterious beacon buried deep in the ruins of the ancient civilization.",
      "id" : 9070
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/782330/page_bg_generated_v6b.jpg?t=1702308063",
      "developers" : [
        "id Software"
      ],
      "dlc" : [
        1098292,
        1098293,
        1098300,
        1749101,
        1749103,
        1749102,
        1749100,
        1626003,
        1626001,
        1626002,
        1626000,
        1460020,
        1460021
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg?t=1702308063",
      "game" : "DOOM Eternal",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Los ejércitos del infierno han invadido la Tierra. Conviértete en el Slayer en una campaña épica para un jugador y cruza dimensiones para impedir la destrucción definitiva de la humanidad. No le tienen miedo a nada... salvo a ti.",
      "id" : 782330
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2300/page_bg_generated_v6b.jpg?t=1664903328",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2300/header.jpg?t=1664903328",
      "game" : "DOOM II",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "El infierno invadió la Tierra y, para salvarla, deberás luchar contra demonios más poderosos aún usando armas más potentes todavía. En la secuela del revolucionario DOOM (1993) aparecen la superescopeta, el infame Ícono del Pecado y más acción a montones de FPS.",
      "id" : 2300
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/248610/page_bg_generated_v6b.jpg?t=1667857903",
      "developers" : [
        "KillHouse Games"
      ],
      "dlc" : [
        362900
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/248610/header.jpg?t=1667857903",
      "game" : "Door Kickers",
      "publishers" : [
        "KillHouse Games"
      ],
      "short_description" : "Door Kickers is an innovative realtime strategy game that puts you in charge of a SWAT team and lets you command them during a tactical intervention.",
      "id" : 248610
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/686200/page_bg_generated_v6b.jpg?t=1698844595",
      "developers" : [
        "PixelShard",
        "KillHouse Games"
      ],
      "dlc" : [
        1788610,
        926800,
        1286400
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/686200/header.jpg?t=1698844595",
      "game" : "Door Kickers: Action Squad",
      "publishers" : [
        "KillHouse Games"
      ],
      "short_description" : "Rescue hostages, disarm bombs and save the day in this old school, side-scroller action game with retro graphics and retro sensibilities. Online and Couch Coop Included.",
      "id" : 686200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/17450/page_bg_generated_v6b.jpg?t=1654009248",
      "developers" : [
        "BioWare"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/17450/header.jpg?t=1654009248",
      "game" : "Dragon Age: Origins",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "When history tells the story of the Fifth Blight, what will be said about the hero who turned the tide against the darkspawn? Determine your legacy and fight for Thedas as a noble dwarf, an elf far from home, a mage apprentice, or a customized hero of your own design.",
      "id" : 17450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/47810/page_bg_generated_v6b.jpg?t=1706729390",
      "developers" : [
        "BioWare"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/47810/header.jpg?t=1706729390",
      "game" : "Dragon Age: Origins - Ultimate Edition",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Explore a stunning world, make complex moral choices, and engage in bone-crushing combat against massive and terrifying creatures. The Ultimate Edition includes Dragon Age: Origins, Dragon Age: Origins - Awakening and all nine content packs.",
      "id" : 47810
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/678950/page_bg_generated_v6b.jpg?t=1710262330",
      "developers" : [
        "Arc System Works"
      ],
      "dlc" : [
        1248434,
        1248432,
        1248433,
        1248431,
        1248430,
        1209880,
        992176,
        992175,
        992174,
        992173,
        992172,
        992170,
        992171,
        729450,
        779932,
        779933,
        779934,
        779935,
        779939,
        779936,
        779937,
        779938,
        758770,
        758771,
        758772,
        779931,
        779930,
        952080,
        1744780
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/678950/header.jpg?t=1710262330",
      "game" : "DRAGON BALL FighterZ",
      "publishers" : [
        "BANDAI NAMCO Entertainment"
      ],
      "short_description" : "DRAGON BALL FighterZ is born from what makes the DRAGON BALL series so loved and famous: endless spectacular fights with its all-powerful fighters.",
      "id" : 678950
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/237630/page_bg_generated_v6b.jpg?t=1644283065",
      "developers" : [
        "WayForward"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/237630/header.jpg?t=1644283065",
      "game" : "DuckTales: Remastered",
      "publishers" : [
        "Capcom"
      ],
      "short_description" : "DuckTales: Remastered is a beautiful hand-crafted reimagining of one of the most cherished 8-bit titles of all time. Go back to one of the golden ages of gaming, now refined with a level of detail that will please the most hardened devoted Disney or retro Capcom fan alike.",
      "id" : 237630
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/214550/page_bg_generated_v6b.jpg?t=1701910949",
      "developers" : [
        "Klei Entertainment"
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/214550/header.jpg?t=1701910949",
      "game" : "Eets Munchies",
      "publishers" : [
        "Klei Entertainment"
      ],
      "short_description" : "A beautiful puzzle game for the whole family!Eets Munchies is a reimagining of the award-winning puzzle game by Klei Entertainment. Featuring gorgeous animation and ridiculous creatures, players help an adorable hungry creature devour cake in increasingly devious puzzles.",
      "id" : 214550
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/359320/page_bg_generated_v6b.jpg?t=1712325926",
      "developers" : [
        "Frontier Developments"
      ],
      "dlc" : [
        1336350,
        1496130
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Multijugador masivo",
          "id" : "29"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/359320/header.jpg?t=1712325926",
      "game" : "Elite Dangerous",
      "publishers" : [
        "Frontier Developments"
      ],
      "short_description" : "Comanda tu nave espacial en una feroz galaxia. Elite Dangerous es la más épica historia espacial de multijugador masivo.",
      "id" : 359320
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/289130/page_bg_generated_v6b.jpg?t=1712062057",
      "developers" : [
        "AMPLITUDE Studios"
      ],
      "dlc" : [
        1523740,
        1275460,
        988450,
        854750,
        521220,
        600560,
        451050,
        415710,
        415700,
        415720,
        374500,
        357360,
        718570
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/289130/header.jpg?t=1712062057",
      "game" : "ENDLESS™ Legend",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "ENDLESS™ Legend is a 4X turn-based fantasy strategy game by the creators of ENDLESS™ Space and Dungeon of the ENDLESS™. Control every aspect of your civilization as you struggle to save your homeworld Auriga. Create your own Legend!",
      "id" : 289130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/208140/page_bg_generated_v6b.jpg?t=1676896716",
      "developers" : [
        "AMPLITUDE Studios"
      ],
      "dlc" : [
        1275470
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/208140/header.jpg?t=1676896716",
      "game" : "ENDLESS™ Space - Definitive Edition",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "ENDLESS™ Space is a turn-based 4X strategy game, covering the space colonization age in the Endless universe, where you can control every aspect of your civilization as you strive for galactic domination.",
      "id" : 208140
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/582890/page_bg_generated_v6b.jpg?t=1667256675",
      "developers" : [
        "Alan Edwardes"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/582890/header.jpg?t=1667256675",
      "game" : "Estranged: The Departure",
      "publishers" : [
        "Alan Edwardes"
      ],
      "short_description" : "Estranged: The Departure follows the story of a fisherman, stranded on a mysterious island during a violent storm. Little does he know his adventure has just begun, and the island is home to more than it first seems.",
      "id" : 582890
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/470260/page_bg_generated_v6b.jpg?t=1515241553",
      "developers" : [
        "Ocelot Society"
      ],
      "dlc" : [
        571120
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/470260/header.jpg?t=1515241553",
      "game" : "Event[0]",
      "publishers" : [
        "Ocelot Society"
      ],
      "short_description" : "Event[0] is a sci-fi narrative exploration game where you build a relationship with a lonely spaceship computer to get home to Earth.",
      "id" : 470260
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1128920/page_bg_generated_v6b.jpg?t=1709586809",
      "developers" : [
        "ROCKFISH Games"
      ],
      "dlc" : [
        2606620,
        2606640
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1128920/header.jpg?t=1709586809",
      "game" : "EVERSPACE™ 2",
      "publishers" : [
        "ROCKFISH Games"
      ],
      "short_description" : "EVERSPACE 2 is a fast-paced single-player spaceship shooter with exploration in space and on planets, tons of loot, RPG elements, mining, and crafting. Experience an exciting sci-fi story set in a vivid, handcrafted open world full of secrets, puzzles, and perils.",
      "id" : 1128920
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/21090/page_bg_generated_v6b.jpg?t=1681232225",
      "developers" : [
        "Monolith Productions, Inc.",
        "Timegate"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/21090/header.jpg?t=1681232225",
      "game" : "F.E.A.R.",
      "publishers" : [
        "Warner Bros. Games",
        "Warner Bros. Interactive Entertainment"
      ],
      "short_description" : "Experience the original F.E.A.R. along with F.E.A.R. Extraction Point and F.E.A.R. Perseus Mandate.",
      "id" : 21090
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/21090/page_bg_generated_v6b.jpg?t=1681232225",
      "developers" : [
        "Monolith Productions, Inc.",
        "Timegate"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/21090/header.jpg?t=1681232225",
      "game" : "F.E.A.R.",
      "publishers" : [
        "Warner Bros. Games",
        "Warner Bros. Interactive Entertainment"
      ],
      "short_description" : "Experience the original F.E.A.R. along with F.E.A.R. Extraction Point and F.E.A.R. Perseus Mandate.",
      "id" : 21090
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/21090/page_bg_generated_v6b.jpg?t=1681232225",
      "developers" : [
        "Monolith Productions, Inc.",
        "Timegate"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/21090/header.jpg?t=1681232225",
      "game" : "F.E.A.R.",
      "publishers" : [
        "Warner Bros. Games",
        "Warner Bros. Interactive Entertainment"
      ],
      "short_description" : "Experience the original F.E.A.R. along with F.E.A.R. Extraction Point and F.E.A.R. Perseus Mandate.",
      "id" : 21090
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/16450/page_bg_generated_v6b.jpg?t=1681232401",
      "developers" : [
        "Monolith"
      ],
      "dlc" : [
        16465
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/16450/header.jpg?t=1681232401",
      "game" : "F.E.A.R. 2: Project Origin",
      "publishers" : [
        "Warner Bros. Games",
        "Warner Bros. Interactive Entertainment"
      ],
      "short_description" : "Assume the role of Special Forces Sgt. Becket as your routine mission quickly turns into a fight for survival against the wrath of Alma Wade. As Alma's terrifying power surges out of control, your squad is forced to battle through an apocalyptic landscape in search of clues for how to destroy her!",
      "id" : 16450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/21100/page_bg_generated_v6b.jpg?t=1666213659",
      "developers" : [
        "Day 1 Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/21100/header.jpg?t=1666213659",
      "game" : "F.E.A.R. 3",
      "publishers" : [
        "Warner Bros. Interactive Entertainment"
      ],
      "short_description" : "F.E.A.R. 3 delivers all the hallmarks that define the F.E.A.R. brand: terrifying paranormal experience, frenetic combat and a dramatic storyline.",
      "id" : 21100
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/286570/page_bg_generated_v6b.jpg?t=1647013399",
      "developers" : [
        "Codemasters",
        "Feral Interactive (Linux)"
      ],
      "genres" : [
        {
          "description" : "Carreras",
          "id" : "9"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/286570/header.jpg?t=1647013399",
      "game" : "F1 2015",
      "publishers" : [
        "Codemasters",
        "Feral Interactive (Linux)"
      ],
      "short_description" : "Race like a champion in F1™ 2015 A stunning new game engine and all-new ‘broadcast presentation’ puts you in the heart of the action.",
      "id" : 286570
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/38410/page_bg_generated_v6b.jpg?t=1572025546",
      "developers" : [
        "Black Isle Studios"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/38410/header.jpg?t=1572025546",
      "game" : "Fallout 2: A Post Nuclear Role Playing Game",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Fallout® 2 is the sequel to the critically acclaimed game that took RPG'ing out of the dungeons and into a dynamic, apocalyptic retro-future. It's been 80 long years since your ancestors trod across the wastelands.",
      "id" : 38410
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22370/page_bg_generated_v6b.jpg?t=1665072789",
      "developers" : [
        "Bethesda Game Studios"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22370/header.jpg?t=1665072789",
      "game" : "Fallout 3: Game of the Year Edition",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Prepare for the Future™ With Fallout 3: Game of the Year Edition, experience the most acclaimed game of 2008 like never before. Create a character of your choosing and descend into an awe-inspiring, post-apocalyptic world where every minute is a fight for survival.",
      "id" : 22370
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/38420/page_bg_generated_v6b.jpg?t=1572025647",
      "developers" : [
        "14° East"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/38420/header.jpg?t=1572025647",
      "game" : "Fallout Tactics: Brotherhood of Steel",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Tactical Squad-Based Combat comes to the Fallout® Universe! You are the wretched refuse. You may be born from dirt, but we will forge you into steel. You will learn to bend; if not you, will you break. In these dark times, the Brotherhood - your Brotherhood - is all that stands between the rekindled flame of civilization and the howling,...",
      "id" : 38420
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/38400/page_bg_generated_v6b.jpg?t=1572025441",
      "developers" : [
        "Interplay Inc."
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/38400/header.jpg?t=1572025441",
      "game" : "Fallout: A Post Nuclear Role Playing Game",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "You've just unearthed the classic post-apocalyptic role-playing game that revitalized the entire CRPG genre. The Fallout® SPECIAL system allows drastically different types of characters, meaningful decisions and development that puts you in complete control. Explore the devastated ruins of a golden age civilization.",
      "id" : 38400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22380/page_bg_generated_v6b.jpg?t=1665072891",
      "developers" : [
        "Obsidian Entertainment"
      ],
      "dlc" : [
        72840,
        72760,
        72750,
        72740,
        72730,
        461160,
        22470
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22380/header.jpg?t=1665072891",
      "game" : "Fallout: New Vegas",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Welcome to Vegas. New Vegas. Enjoy your stay!",
      "id" : 22380
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/220240/page_bg_generated_v6b.jpg?t=1682960396",
      "developers" : [
        "Ubisoft Montreal, Massive Entertainment, and Ubisoft Shanghai"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/220240/header.jpg?t=1682960396",
      "game" : "Far Cry 3",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "Discover the dark secrets of a lawless island ruled by violence and take the fight to the enemy as you try to escape. You’ll need more than luck to escape alive!",
      "id" : 220240
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/233270/page_bg_generated_v6b.jpg?t=1698436173",
      "developers" : [
        "Ubisoft Montreal"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/233270/header.jpg?t=1698436173",
      "game" : "Far Cry 3 - Blood Dragon",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "Far Cry® 3: Blood Dragon is THE Kick-Ass Cyber Shooter.Welcome to an 80’s vision of the future. The year is 2007 and you are Sargent Rex Colt, a Mark IV Cyber Commando. Your mission: get the girl, kill the baddies, and save the world.",
      "id" : 233270
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/13520/page_bg_generated_v6b.jpg?t=1602602361",
      "developers" : [
        "Crytek Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/13520/header.jpg?t=1602602361",
      "game" : "Far Cry®",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "A tropical paradise seethes with hidden evil in Far Cry®, a cunningly detailed action shooter that pushes the boundaries of combat to shocking new levels. Freelance mariner Jack Carver is cursing the day he ever came to this island.",
      "id" : 13520
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/19900/page_bg_generated_v6b.jpg?t=1709317476",
      "developers" : [
        "Ubisoft Montreal"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/19900/header.jpg?t=1709317476",
      "game" : "Far Cry® 2",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "You are a gun for hire, trapped in a war-torn African state, stricken with malaria and forced to make deals with corrupt warlords on both sides of the conflict in order to make this country your home. You must identify and exploit your enemies' weaknesses, neutralizing their superior numbers and firepower with surprise, subversion,...",
      "id" : 19900
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/552520/page_bg_generated_v6b.jpg?t=1694554810",
      "developers" : [
        "Ubisoft Montreal",
        "Red Storm",
        "Ubisoft Shanghai",
        "Ubisoft Toronto",
        "Ubisoft Kiev"
      ],
      "dlc" : [
        761820,
        761821,
        763820,
        823990,
        874610
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/552520/header.jpg?t=1694554810",
      "game" : "Far Cry® 5",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "Discover the open world of Hope County, Montana, besieged by a fanatical doomsday cult. Dive into the action solo or two-player co-op in the story campaign, use a vast arsenal of weapons and allies, and free Hope County from Joseph Seed and his cult.",
      "id" : 552520
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/224760/page_bg_generated_v6b.jpg?t=1572375251",
      "developers" : [
        "Polytron Corporation"
      ],
      "dlc" : [
        224763
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/224760/header.jpg?t=1572375251",
      "game" : "FEZ",
      "publishers" : [
        "Trapdoor"
      ],
      "short_description" : "Gomez is a 2D creature living in a 2D world. Or is he? When the existence of a mysterious 3rd dimension is revealed to him, Gomez is sent out on a journey that will take him to the very end of time and space. Use your ability to navigate 3D structures from 4 distinct classic 2D perspectives.",
      "id" : 224760
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2290/page_bg_generated_v6b.jpg?t=1660239972",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2290/header.jpg?t=1660239972",
      "game" : "Final DOOM",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "Two New, 32-Level DOOM II Episodes. Evilution: Far from earth, the UAC recommenced their experiments on on of the moons of Jupiter. A spaceship, mistaken for a supply vexxel on radar, hovered above the base. Hideous demons poured out, blanketing the base with death. All your comrades were quickly slaughtered or zombified.",
      "id" : 2290
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/33950/page_bg_generated_v6b.jpg?t=1582122990",
      "developers" : [
        "Altar Games"
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/33950/header.jpg?t=1582122990",
      "game" : "Fish Fillets 2",
      "publishers" : [
        "Bohemia Interactive"
      ],
      "short_description" : "In this underwater puzzle game you control fish secret agents Max Flounder and Tina Guppy. Seemingly a common case turns into a tough fight with a mysterious enemy and the strings appear to lead pretty high. Fortunately, you are not alone.",
      "id" : 33950
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/508790/page_bg_generated_v6b.jpg?t=1706213466",
      "developers" : [
        "Parallel Circles"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/508790/header.jpg?t=1706213466",
      "game" : "Flat Heroes",
      "publishers" : [
        "Parallel Circles"
      ],
      "short_description" : "Dodge, jump, and dash your way through hundreds of terrifying geometric levels and epic bosses. Too tough? Bring your friends!",
      "id" : 508790
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/21640/page_bg_generated_v6b.jpg?t=1709710944",
      "developers" : [
        "Proper Games"
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/21640/header.jpg?t=1709710944",
      "game" : "Flock!",
      "publishers" : [
        "Capcom"
      ],
      "short_description" : "Protect your cornfields and lock up your livestock, because FLOCK is here!",
      "id" : 21640
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/36000/page_bg_generated_v6b.jpg?t=1667822575",
      "developers" : [
        "Sakari Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/36000/header.jpg?t=1667822575",
      "game" : "Foreign Legion: Buckets of Blood",
      "publishers" : [
        "Sakari Games"
      ],
      "short_description" : "Foreign Legion: Buckets of Blood is a cartoon-style third-person shooter. You take the role of a last-standing hard-boiled Legionnaire taking on an entire rebel army. A small campaign with various objectives, such as defending civilians, escorting a tourist bus and a mass-chicken-murder map.",
      "id" : 36000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/8880/page_bg_generated_v6b.jpg?t=1569012854",
      "developers" : [
        "Irrational Games"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/8880/header.jpg?t=1569012854",
      "game" : "Freedom Force",
      "publishers" : [
        "2K"
      ],
      "short_description" : "From a distant corner of the galaxy, an evil alien race sets in motion a sinister plan to conquer the Earth. They unleash a powerful catalyst — Energy X — that imbues the planet's worst miscreants with super-powers to bring the planet to its knees. Now Earth's only hope lies with a new breed of heroes... The Freedom Force!",
      "id" : 8880
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/323190/page_bg_generated_v6b.jpg?t=1712767383",
      "developers" : [
        "11 bit studios"
      ],
      "dlc" : [
        1125020,
        1146960,
        1147010,
        966350,
        1103840,
        1606200,
        2052430
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/323190/header.jpg?t=1712767383",
      "game" : "Frostpunk",
      "publishers" : [
        "11 bit studios"
      ],
      "short_description" : "Frostpunk is the first society survival game. As the ruler of the last city on Earth, it is your duty to manage both its citizens and infrastructure. What decisions will you make to ensure your society's survival? What will you do when pushed to breaking point? Who will you become in the process?",
      "id" : 323190
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/98200/page_bg_generated_v6b.jpg?t=1458256347",
      "developers" : [
        "Mode 7"
      ],
      "dlc" : [
        98211,
        437930
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/98200/header.jpg?t=1458256347",
      "game" : "Frozen Synapse",
      "publishers" : [
        "Mode 7"
      ],
      "short_description" : "Brings the simultaneous turn-based strategy genre up-to-date and lets you give detailed, accurate orders to your squad.",
      "id" : 98200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/212680/page_bg_generated_v6b.jpg?t=1689017446",
      "developers" : [
        "Subset Games"
      ],
      "dlc" : [
        221001
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/212680/header.jpg?t=1689017446",
      "game" : "FTL: Faster Than Light",
      "publishers" : [
        "Subset Games"
      ],
      "short_description" : "This &quot;spaceship simulation roguelike-like&quot; allows you to take your ship and crew on an adventure through a randomly generated galaxy filled with glory and bitter defeat.",
      "id" : 212680
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/228360/page_bg_generated_v6b.jpg?t=1710444970",
      "developers" : [
        "Double Fine Productions",
        "Shiny Shoe"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/228360/header.jpg?t=1710444970",
      "game" : "Full Throttle Remastered",
      "publishers" : [
        "Double Fine Productions"
      ],
      "short_description" : "Originally released by LucasArts in 1995, Full Throttle is a classic graphic adventure game from industry legend Tim Schafer, telling the story of Ben Throttle; butt-kicking leader of biker gang the Polecats, who gets caught up in a tale of Motorcycles, Mayhem and Murder.",
      "id" : 228360
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/226860/page_bg_generated_v6b.jpg?t=1697741439",
      "developers" : [
        "Stardock Entertainment"
      ],
      "dlc" : [
        1277830,
        1104410,
        976210,
        747060,
        954810,
        513520,
        527070,
        495371,
        495370,
        484860,
        455460,
        411650,
        420030,
        395990,
        389930,
        373980,
        390740
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/226860/header.jpg?t=1697741439",
      "game" : "Galactic Civilizations III",
      "publishers" : [
        "Stardock Entertainment"
      ],
      "short_description" : "Build a civilization that will stand the test of time in the largest space-based strategy game ever! Choose from dozens of unique races and make a name for yourself across the galaxy through diplomacy, espionage, technological advances, and more.",
      "id" : 226860
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/202200/page_bg_generated_v6b.jpg?t=1693335277",
      "developers" : [
        "Stardock Entertainment"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/202200/header.jpg?t=1693335277",
      "game" : "Galactic Civilizations® II: Ultimate Edition",
      "publishers" : [
        "Stardock Entertainment"
      ],
      "short_description" : "Get the complete GalCiv II saga including Galactic Civilizations II: Dread Lords, the expansion pack Dark Avatar, and the newest expansion pack Twilight of the Arnor!",
      "id" : 202200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/208730/page_bg_generated_v6b.jpg?t=1562029560",
      "developers" : [
        "Cyanide Studios"
      ],
      "dlc" : [
        208740,
        208741,
        208742
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/208730/header.jpg?t=1562029560",
      "game" : "Game of Thrones",
      "publishers" : [
        ""
      ],
      "short_description" : "Experience an amazing adventure in one of the most fascinating universes! Amidst conspiracy and betrayal, try to survive the orchestrated machinations around the Iron Throne.",
      "id" : 208730
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/330840/page_bg_generated_v6b.jpg?t=1555446231",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/330840/header.jpg?t=1555446231",
      "game" : "Game of Thrones - A Telltale Games Series",
      "publishers" : [
        "Telltale Games"
      ],
      "short_description" : "Game of Thrones - A Telltale Games Series is a six part episodic game series set in the world of HBO's groundbreaking TV show. This new story tells of House Forrester, a noble family from the north of Westeros, loyal to the Starks of Winterfell.",
      "id" : 330840
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/80310/page_bg_generated_v6b.jpg?t=1673436655",
      "developers" : [
        "Joshua Nuernberger"
      ],
      "dlc" : [
        1934510
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/80310/header.jpg?t=1673436655",
      "game" : "Gemini Rue",
      "publishers" : [
        "Wadjet Eye Games"
      ],
      "short_description" : "Discover a world where life is cheap, identities are bought &amp; sold, &amp; a quest for redemption can change the fate of a whole galaxy.",
      "id" : 80310
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/704270/page_bg_generated_v6b.jpg?t=1708510131",
      "developers" : [
        "Systemic Reaction™"
      ],
      "dlc" : [
        2689180,
        2591100,
        2473770,
        2334430,
        2200740,
        2144760,
        2144761,
        2009530,
        1771050,
        1850670,
        1610690,
        1610720,
        1580920,
        1450340,
        1157550,
        1301740,
        1062420,
        1099600,
        1062400,
        1252740,
        1173930,
        1103830
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/704270/header.jpg?t=1708510131",
      "game" : "Generation Zero®",
      "publishers" : [
        "Systemic Reaction™"
      ],
      "short_description" : "Generation Zero is a stealth-action shooter where you wage guerilla warfare against lethal mechanical enemies. Explore a vast open world map inspired by the Swedish Cold War era, take part in the resistance alone or with up to three friends in seamless co-op.",
      "id" : 704270
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/437570/page_bg_generated_v6b.jpg?t=1709550414",
      "developers" : [
        "Art in Heart"
      ],
      "dlc" : [
        533240,
        984210
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/437570/header.jpg?t=1709550414",
      "game" : "GoNNER",
      "publishers" : [
        "Raw Fury"
      ],
      "short_description" : "GoNNER es un complicadísimo juego de plataformas generado por procedimientos y con un toque roguelike. GoNNER también es una historia de amistad entre Ikk, La Muerte y una ballena espacial llamada Sally.Morirás. Muchas veces. Es parte del diseño, no queremos tratarte mal. Acabarás dominando GoNNER, así que no pierdas la cabeza.",
      "id" : 437570
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/23450/page_bg_generated_v6b.jpg?t=1699553579",
      "developers" : [
        "Haemimont Games"
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/23450/header.jpg?t=1699553579",
      "game" : "Grand Ages: Rome",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "Raise massive armies, embark on epic campaigns to expand the Empire, and take control of the known world! Engage in grand-scale city building and create magnificent cities with creativity and control like never before.",
      "id" : 23450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/12210/page_bg_generated_v6b.jpg?t=1695131205",
      "developers" : [
        "Rockstar North",
        "Rockstar Toronto"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/12210/header.jpg?t=1695131205",
      "game" : "Grand Theft Auto IV: The Complete Edition",
      "publishers" : [
        "Rockstar Games"
      ],
      "short_description" : "Niko Bellic, Johnny Klebitz y Luis Lopez tienen una cosa en común: viven en la peor ciudad de Estados Unidos. En Liberty City, el dinero y el estatus social lo son todo, y dependiendo de si los tienes o no, vivirás en el cielo o en el infierno.",
      "id" : 12210
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/271590/page_bg_generated_v6b.jpg?t=1711059470",
      "developers" : [
        "Rockstar North"
      ],
      "dlc" : [
        771300
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1711059470",
      "game" : "Grand Theft Auto V",
      "publishers" : [
        "Rockstar Games"
      ],
      "short_description" : "Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo.",
      "id" : 271590
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/599140/page_bg_generated_v6b.jpg?t=1690979259",
      "developers" : [
        "Lazy Bear Games"
      ],
      "dlc" : [
        919050,
        919051,
        1163770,
        1430990,
        1788370
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/599140/header.jpg?t=1690979259",
      "game" : "Graveyard Keeper",
      "publishers" : [
        "tinyBuild"
      ],
      "short_description" : "Build and manage a medieval graveyard while facing ethical dilemmas and making questionable decisions. Welcome to Graveyard Keeper, the most inaccurate medieval cemetery sim of the year.",
      "id" : 599140
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/44350/page_bg_generated_v6b.jpg?t=1571948291",
      "developers" : [
        "Codemasters Racing"
      ],
      "genres" : [
        {
          "description" : "Carreras",
          "id" : "9"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/44350/header.jpg?t=1571948291",
      "game" : "GRID 2",
      "publishers" : [
        "Codemasters"
      ],
      "short_description" : "Be fast, be first and be famous as the race returns in GRID 2, the sequel to the BAFTA-award winning, multi-million selling Race Driver: GRID.",
      "id" : 44350
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/255220/page_bg_generated_v6b.jpg?t=1593617496",
      "developers" : [
        "Codemasters Racing",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "genres" : [
        {
          "description" : "Carreras",
          "id" : "9"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/255220/header.jpg?t=1593617496",
      "game" : "GRID Autosport",
      "publishers" : [
        "Codemasters",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "short_description" : "It’s all about the teams, the rivals and the race as you become driver for hire, specialising in your favourite disciplines or conquering them all in an intense world of professional motorsport.",
      "id" : 255220
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/219990/page_bg_generated_v6b.jpg?t=1709073331",
      "developers" : [
        "Crate Entertainment"
      ],
      "dlc" : [
        897670,
        642280,
        2701090,
        1088290,
        565610,
        483840,
        1250890
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/219990/header.jpg?t=1709073331",
      "game" : "Grim Dawn",
      "publishers" : [
        "Crate Entertainment"
      ],
      "short_description" : "Enter an apocalyptic fantasy world where humanity is on the brink of extinction, iron is valued above gold and trust is hard earned. This ARPG features complex character development, hundreds of unique items, crafting and quests with choice &amp; consequence.",
      "id" : 219990
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/316790/page_bg_generated_v6b.jpg?t=1677883403",
      "developers" : [
        "Double Fine Productions",
        "Shiny Shoe"
      ],
      "dlc" : [
        368190
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/316790/header.jpg?t=1677883403",
      "game" : "Grim Fandango Remastered",
      "publishers" : [
        "Double Fine Productions"
      ],
      "short_description" : "One of the most acclaimed adventure games of all time is now back, better than ever. Grim Fandango Remastered has the all the beautiful art and engaging story fans remember, but has also been remastered to look, sound, and control even better than the award-winning original release.",
      "id" : 316790
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/214770/page_bg_generated_v6b.jpg?t=1687889916",
      "developers" : [
        "DrinkBox Studios"
      ],
      "dlc" : [
        257020
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/214770/header.jpg?t=1687889916",
      "game" : "Guacamelee! Gold Edition",
      "publishers" : [
        "DrinkBox Studios"
      ],
      "short_description" : "Guacamelee! Gold Edition es un juego de acción y plataformas al estilo Metroidvania ambientado en un mundo mágico de inspiraciones mexicanas. El juego está inspirado en la cultura y el folclore mexicanos e incluye un interesantísimo elenco de personajes únicos.",
      "id" : 214770
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/275390/page_bg_generated_v6b.jpg?t=1698866178",
      "developers" : [
        "DrinkBox Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/275390/header.jpg?t=1698866178",
      "game" : "Guacamelee! Super Turbo Championship Edition",
      "publishers" : [
        "DrinkBox Studios"
      ],
      "short_description" : "La versión definitiva del exitoso juego de plataformas de acción al más puro estilo Metroidvania, Guacamelee! Super Turbo Championship Edition, trae nuevos niveles, poderes, desafíos y mejoras a la extensa y ridícula aventura de inspiración mexicana del original.",
      "id" : 275390
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/70120/page_bg_generated_v6b.jpg?t=1447354299",
      "developers" : [
        "exosyphen studios"
      ],
      "dlc" : [
        211990,
        211994,
        211992,
        241950,
        259220,
        261070
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/70120/header.jpg?t=1447354299",
      "game" : "Hacker Evolution Duality",
      "publishers" : [
        "exosyphen studios"
      ],
      "short_description" : "Hacker Evolution Duality is the hacking simulation game, developed by exosyphen studios. Based on the successful Hacker Evolution game series, it has been completely redesigned to offer an impressive and new gaming experience.",
      "id" : 70120
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/294770/page_bg_generated_v6b.jpg?t=1569579915",
      "developers" : [
        "Digital Reality"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/294770/header.jpg?t=1569579915",
      "game" : "Haegemonia: Legions of Iron",
      "publishers" : [
        "Microids"
      ],
      "short_description" : "From the makers of the award-winning Imperium Galactica 1 and 2 games, discover a powerful space-opera like RTS game.",
      "id" : 294770
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/294790/page_bg_generated_v6b.jpg?t=1569580540",
      "developers" : [
        "Digital Reality"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/294790/header.jpg?t=1569580540",
      "game" : "Haegemonia: The Solon Heritage",
      "publishers" : [
        "Microids"
      ],
      "short_description" : "A stand-alone expansion pack to Legions of Iron, discover new innovations and even more stunning visuals that launch the Haegemonia experience into light speed.",
      "id" : 294790
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/70/page_bg_generated_v6b.jpg?t=1700269108",
      "developers" : [
        "Valve"
      ],
      "dlc" : [
        323130
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/70/header.jpg?t=1700269108",
      "game" : "Half-Life",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Nombrado juego del año por más de 50 publicaciones, la ópera prima de Valve mezcla acción y aventuras con una tecnología galardonada con varios premios, en un mundo terriblemente realista en el que los jugadores deberán esforzarse por sobrevivir.",
      "id" : 70
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/220/page_bg_generated_v6b.jpg?t=1699003213",
      "developers" : [
        "Valve"
      ],
      "dlc" : [
        323140
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/220/header.jpg?t=1699003213",
      "game" : "Half-Life 2",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "1998. HALF-LIFE supone un impacto en la industria de juegos gracias a su combinación de acción frenética y narración continua y absorbente. El título debut de Valve fue galardonado con más de 50 premios, que sentaron las bases para que luego se convirtiera en <strong>El mejor juego para PC de la historia</strong>, galardón concedido por la revista PC...",
      "id" : 220
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/320/page_bg_generated_v6b.jpg?t=1602536087",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/320/header.jpg?t=1602536087",
      "game" : "Half-Life 2: Deathmatch",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Acción multijugador extrema en el universo Half-Life 2. La simulación física de HL2 abre una nueva dimensión en el juego a muerte. Juega a muerte o prueba el juego en equipo de la Alianza contra la Resistencia. ¡No dejes sobrevivientes!",
      "id" : 320
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/380/page_bg_generated_v6b.jpg?t=1699003429",
      "developers" : [
        "Valve"
      ],
      "dlc" : [
        323150
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/380/header.jpg?t=1699003429",
      "game" : "Half-Life 2: Episode One",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Half-Life 2 ha vendido más de 4 millones de copias en todo el mundo y recibido más de 35 galardones como mejor juego del año. Episode One es el primero de una serie de juegos que revelarán los acontecimientos posteriores al final de Half-Life 2 y te permitirán aventurarte más allá de Ciudad 17.",
      "id" : 380
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/420/page_bg_generated_v6b.jpg?t=1699003557",
      "developers" : [
        "Valve"
      ],
      "dlc" : [
        323160
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/420/header.jpg?t=1699003557",
      "game" : "Half-Life 2: Episode Two",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Half-Life&reg; 2: Episodio dos es la segunda parte de la nueva trilogía creada por Valve que amplía la galardonada saga superventas Half-Life&reg;. Asumirás el papel del Dr. Gordon Freeman, visto por última vez escapando de Ciudad 17 con Alyx Vance en el mismo momento en que la Ciudadela entraba en erupción en medio de una tormenta de...",
      "id" : 420
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/340/page_bg_generated_v6b.jpg?t=1571757270",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/340/header.jpg?t=1571757270",
      "game" : "Half-Life 2: Lost Coast",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Pensado en un principio como una sección del capítulo Autopista 17 de Half-Life 2, Lost Coast es un ejemplo de tecnología jugable que presenta la iluminación de alto rango dinámico en el motor Source.",
      "id" : 340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/360/page_bg_generated_v6b.jpg?t=1567240329",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/360/header.jpg?t=1567240329",
      "game" : "Half-Life Deathmatch: Source",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Half-Life Deathmatch: Source reinventa el primer juego multijugador ambientado en el universo de Half-Life. Incluye todas las armas clásicas y los mapas más populares, solo que con el motor Source.",
      "id" : 360
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/130/page_bg_generated_v6b.jpg?t=1579629868",
      "developers" : [
        "Gearbox Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/130/header.jpg?t=1579629868",
      "game" : "Half-Life: Blue Shift",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "En Blue Shift, un juego creado por Gearbox Software y puesto a la venta por primera vez en 2001 como ampliación para Half-Life, volverás a las instalaciones de investigación de Black Mesa en la piel de Barney Calhoun, el guardia de seguridad que le evitó muchísimos dolores de cabeza a Gordon.",
      "id" : 130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/50/page_bg_generated_v6b.jpg?t=1579628243",
      "developers" : [
        "Gearbox Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/50/header.jpg?t=1579628243",
      "game" : "Half-Life: Opposing Force",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Vuelve a las instalaciones de investigación de Black Mesa en calidad de especialista militar destinado a eliminar a Gordon Freeman. Vive una historia para un jugador desde un punto de vista totalmente distinto. Lucha contra feroces rivales alienígenas y experimenta con armas nuevas.",
      "id" : 50
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/280/page_bg_generated_v6b.jpg?t=1700246092",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/280/header.jpg?t=1700246092",
      "game" : "Half-Life: Source",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Galardonado con más de 50 premios de juego del año, el lanzamiento de Half-Life en 1998 supuso todo un hito para los juegos de acción. Half-Life: Source es una versión remasterizada digitalmente de este juego de PC aclamado por la crítica y que se convirtió en todo un éxito de ventas.",
      "id" : 280
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/277430/page_bg_generated_v6b.jpg?t=1667852203",
      "developers" : [
        "Vanguard Games",
        "343 Industries"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/277430/header.jpg?t=1667852203",
      "game" : "Halo: Spartan Assault",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "Halo: Spartan Assault brings the excitement of Halo combat to Steam for the very first time. Battle your way through 30 action-packed missions against the Covenant as you explore the origin of the Spartan Ops program featured in Halo 4. *DirectX feature level 10 required. *",
      "id" : 277430
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/239070/page_bg_generated_v6b.jpg?t=1692296656",
      "developers" : [
        "Crackshell"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/239070/header.jpg?t=1692296656",
      "game" : "Hammerwatch",
      "publishers" : [
        "Crackshell"
      ],
      "short_description" : "A hack and slash action adventure, set in a fantasy pixel art environment. Play solo or co-op in this adventure from bottom to top of Castle Hammerwatch. Kill hordes of enemies with varied looks and features through four unique environments with traps, hidden secrets and puzzles.",
      "id" : 239070
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/307670/page_bg_generated_v6b.jpg?t=1710326919",
      "developers" : [
        "CreativeForge Games"
      ],
      "dlc" : [
        419040,
        441700,
        736750
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/307670/header.jpg?t=1710326919",
      "game" : "Hard West",
      "publishers" : [
        "Good Shepherd Entertainment"
      ],
      "short_description" : "When a tragic turn of events sets one man down a path of supernatural chaos and revenge, he must brutally hunt down all those who wronged him. Fight and survive through 8 unique story-based scenarios, and try your hand at 40 individually designed turn-based combat missions",
      "id" : 307670
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1282410/page_bg_generated_v6b.jpg?t=1711624158",
      "developers" : [
        "Ice Code Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1282410/header.jpg?t=1711624158",
      "game" : "Hard West 2",
      "publishers" : [
        "Good Shepherd Entertainment"
      ],
      "short_description" : "Hard West 2 es una aventura en la que una banda sobrenatural persigue a un misterioso tren fantasma por el corazón más oscuro del oeste americano. En este juego táctico por turnos, el salvaje oeste nunca es lo que parece, así que engaña, haz trampas y derrota a tus enemigos con las mejores armas.",
      "id" : 1282410
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22130/page_bg_generated_v6b.jpg?t=1669909739",
      "developers" : [
        "Paradox Development Studio"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22130/header.jpg?t=1669909739",
      "game" : "Hearts of Iron 2 Complete",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Includes Hearts of Iron II plus the two expansions, Doomsday and Armageddon When Germany is defeated in 1945, the Allies and the new Soviet alliance fight for supremacy. World War III is drawing closer. Play as the ruler of one of 175 countries through World Wars II and III.",
      "id" : 22130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/25890/page_bg_generated_v6b.jpg?t=1669816232",
      "developers" : [
        "Paradox Development Studio"
      ],
      "dlc" : [
        214991,
        214990,
        214988,
        214987,
        214986,
        214980,
        25960,
        25898,
        25896,
        25897,
        25899,
        25892,
        25962,
        42904,
        214981,
        42902,
        42903,
        42905
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/25890/header.jpg?t=1669816232",
      "game" : "Hearts of Iron III",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Hearts of Iron III lets you play the most engaging conflict in world history, World War 2, on all fronts as any country and through multiple different scenarios. Guide your nation to glory between 1936 and 1948 and wage war, conduct diplomacy and build your industry in the most detailed World War 2 game ever made.",
      "id" : 25890
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/394360/page_bg_generated_v6b.jpg?t=1712678025",
      "developers" : [
        "Paradox Development Studio"
      ],
      "dlc" : [
        2695150,
        2183930,
        1880650,
        1877010,
        1348661,
        1579991,
        1579992,
        1086480,
        1086481,
        1348660,
        1158100,
        815460,
        584141,
        461800,
        1317230,
        1317250
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/394360/header.jpg?t=1712678025",
      "game" : "Hearts of Iron IV",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Victory is at your fingertips! Your ability to lead your nation is your supreme weapon, the strategy game Hearts of Iron IV lets you take command of any nation in World War II; the most engaging conflict in world history.",
      "id" : 394360
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/94620/page_bg_generated_v6b.jpg?t=1686748461",
      "developers" : [
        "Telltale"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/94620/header.jpg?t=1686748461",
      "game" : "Hector: Badge of Carnage - Full Series",
      "publishers" : [
        "Telltale"
      ],
      "short_description" : "All 3 episodes available now - get the full season!",
      "id" : 94620
    },
    {
      "background" : "",
      "developers" : [
        "Telltale"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/94600/header.jpg?t=1686748289",
      "game" : "Hector: Episode 1",
      "publishers" : [
        "Telltale"
      ],
      "short_description" : "All 3 episodes available now - get the full season!",
      "id" : 94600
    },
    {
      "background" : "",
      "developers" : [
        "Telltale"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/94610/header.jpg?t=1686748394",
      "game" : "Hector: Episode 2",
      "publishers" : [
        "Telltale"
      ],
      "short_description" : "All 3 episodes available now - get the full season!",
      "id" : 94610
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/205230/page_bg_generated_v6b.jpg?t=1632610026",
      "developers" : [
        "Arkedo"
      ],
      "dlc" : [
        213312,
        213311
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/205230/header.jpg?t=1632610026",
      "game" : "Hell Yeah! Wrath of the Dead Rabbit",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "A crazy action-adventure platformer... In Hell.",
      "id" : 205230
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/414340/page_bg_generated_v6b.jpg?t=1707499179",
      "developers" : [
        "Ninja Theory"
      ],
      "dlc" : [
        862810
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/414340/header.jpg?t=1707499179",
      "game" : "Hellblade: Senua's Sacrifice",
      "publishers" : [
        "Ninja Theory"
      ],
      "short_description" : "From the makers of Heavenly Sword, Enslaved: Odyssey to the West, and DmC: Devil May Cry, comes a warrior’s brutal journey into myth and madness. Set in the Viking age, a broken Celtic warrior embarks on a haunting vision quest into Viking Hell to fight for the soul of her dead lover.",
      "id" : 414340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2390/page_bg_generated_v6b.jpg?t=1664908063",
      "developers" : [
        "Raven Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2390/header.jpg?t=1664908063",
      "game" : "Heretic: Shadow of the Serpent Riders",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "En un mundo corrompido por la perversa magia de tres hermanos conocidos como los Jinetes Serpiente, eres un hereje. Al ser uno de los últimos elfos Sidhe y un mago hábil, te embarcas en una misión para vengarte de quienes masacraron a tus amigos y familiares y aniquilaron a toda tu raza.",
      "id" : 2390
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/209270/page_bg_generated_v6b.jpg?t=1546888006",
      "developers" : [
        "Robot Entertainment"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/209270/header.jpg?t=1546888006",
      "game" : "Hero Academy",
      "publishers" : [
        "Robot Entertainment"
      ],
      "short_description" : "Test your skills in this light-hearted battle between friends! Heroic teams have gathered to engage in friendly contests on the Academy playfields. Will your team emerge triumphant?",
      "id" : 209270
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9060/page_bg_generated_v6b.jpg?t=1666381851",
      "developers" : [
        "Raven Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9060/header.jpg?t=1666381851",
      "game" : "HeXen II",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "Los cuatro jinetes del apocalipsis acechan en las sombras frente a ti. Son la muerte, la pestilencia, el hambre y la guerra. Son la raíz de todo mal... y la menor de tus preocupaciones. Porque el último de los tres Serpent Riders aún vive.",
      "id" : 9060
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2360/page_bg_generated_v6b.jpg?t=1665002863",
      "developers" : [
        "Raven Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2360/header.jpg?t=1665002863",
      "game" : "Hexen: Beyond Heretic",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "Mientras el elfo Sidhe Corvus combatía contra las malvadas fuerzas de D'Sparil, los Jinetes Serpiente restantes estaban ocupados corrompiendo otras dimensiones. Como guerrero, mago o clérigo, debes defender tu mundo, Cronos, frente al segundo Jinete Serpiente conocido como Korax.",
      "id" : 2360
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2370/page_bg_generated_v6b.jpg?t=1664998557",
      "developers" : [
        "Raven Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2370/header.jpg?t=1664998557",
      "game" : "Hexen: Deathkings of the Dark Citadel",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "Hexen: Deathkings of the Dark Citadel, un shooter de fantasía oscura en primera persona, es la expansión de Hexen: Beyond Heretic. Tras descubrir la Esfera del Caos, has aparecido en el Reino de los Muertos. Ahora, la Dark Citadel bloquea la única forma de volver a tu hogar.",
      "id" : 2370
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6850/page_bg_generated_v6b.jpg?t=1667311130",
      "developers" : [
        "Io-Interactive A/S"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6850/header.jpg?t=1667311130",
      "game" : "Hitman 2: Silent Assassin",
      "publishers" : [
        "Io-Interactive A/S"
      ],
      "short_description" : "Enter the realm of a retired assassin, forced back into action by treason. You may be a hired killer but you still have a sense of loyalty and justice. Visit the dark recesses of a world corrupted by crime, greed, degradation and dishonor. And a past that catches up with you.",
      "id" : 6850
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1659040/page_bg_generated_v6b.jpg?t=1712754757",
      "developers" : [
        "IO Interactive A/S"
      ],
      "dlc" : [
        2828470,
        2475260,
        1829596,
        2184790,
        2184791
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1659040/header.jpg?t=1712754757",
      "game" : "HITMAN World of Assassination",
      "publishers" : [
        "IO Interactive A/S"
      ],
      "short_description" : "Entra en el mundo del asesino definitivo. HITMAN: mundo del asesinato reúne lo mejor de HITMAN, HITMAN 2 y HITMAN 3. Incluye la campaña principal, contratos, intensificaciones, objetivos escurridizos y HITMAN: Freelancer, un modo inspirado en el género roguelike.",
      "id" : 1659040
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/427820/page_bg_generated_v6b.jpg?t=1699905509",
      "developers" : [
        "Square Enix Montréal"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/427820/header.jpg?t=1699905509",
      "game" : "Hitman GO: Definitive Edition",
      "publishers" : [
        "Crystal Dynamics"
      ],
      "short_description" : "Hitman GO is a simple to play, but difficult to master turn-based strategy game set in a stunning interpretation of the Hitman universe.",
      "id" : 427820
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/203140/page_bg_generated_v6b.jpg?t=1712238033",
      "developers" : [
        "Io-Interactive A/S"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/203140/header.jpg?t=1712238033",
      "game" : "Hitman: Absolution™",
      "publishers" : [
        "Io-Interactive A/S"
      ],
      "short_description" : "The original assassin is back! Betrayed by the Agency and hunted by the police, Agent 47 finds himself pursuing redemption in a corrupt and twisted world.",
      "id" : 203140
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6860/page_bg_generated_v6b.jpg?t=1667311083",
      "developers" : [
        "Io-Interactive A/S"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6860/header.jpg?t=1667311083",
      "game" : "Hitman: Blood Money",
      "publishers" : [
        "Io-Interactive A/S"
      ],
      "short_description" : "Money Talks. Silence Pays. Prepare to Make a Killing. When assassins from Agent 47's contract agency, The ICA, are eliminated in a series of hits, it seems a larger, more powerful agency has entered the fray. Sensing he may be a target, 47 travels to America, and prepares to make a killing.",
      "id" : 6860
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6900/page_bg_generated_v6b.jpg?t=1599829728",
      "developers" : [
        "IO Interactive A/S"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6900/header.jpg?t=1599829728",
      "game" : "Hitman: Codename 47",
      "publishers" : [
        "IO Interactive A/S"
      ],
      "short_description" : "As the enigmatic Hitman, you must use stealth and tactical problem solving to enter, execute and exit your assignment with minimum attention and maximum effectiveness. For a price, you have access to the most devious devices, but how you use them will determine if you retire as a millionaire or get permanently retired.",
      "id" : 6900
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/236870/page_bg_generated_v6b.jpg?t=1674758373",
      "developers" : [
        "IO Interactive A/S",
        "Feral Interactive (Linux)",
        "Feral Interactive (Mac)"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/236870/header.jpg?t=1674758373",
      "game" : "HITMAN™",
      "publishers" : [
        "IO Interactive A/S",
        "Feral Interactive (Linux)",
        "Feral Interactive (Mac)"
      ],
      "short_description" : "There is a world beyond ours. Beyond nations, justice, ethics. It never sleeps. It exists everywhere. And once you enter....there is no going back. Welcome to the World of Assassination. You are Agent 47, the world's ultimate assassin.",
      "id" : 236870
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/863550/page_bg_generated_v6b.jpg?t=1674755762",
      "developers" : [
        "IO Interactive A/S"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/863550/header.jpg?t=1674755762",
      "game" : "HITMAN™ 2",
      "publishers" : [
        "IO Interactive A/S"
      ],
      "short_description" : "Travel the globe and track your targets across exotic sandbox locations in HITMAN™ 2. From sun-drenched streets to dark and dangerous rainforests, nowhere is safe from the world’s most creative assassin, Agent 47 in the ultimate spy thriller story.",
      "id" : 863550
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/55100/page_bg_generated_v6b.jpg?t=1709649918",
      "developers" : [
        "Kaos Studios",
        "Digital Extremes"
      ],
      "dlc" : [
        55203,
        55205,
        55204
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/55100/header.jpg?t=1709649918",
      "game" : "Homefront",
      "publishers" : [
        "Deep Silver"
      ],
      "short_description" : "The Rock Map Pack is Now Available! Join the Resistance, stand united and fight for freedom against an overwhelming military force.",
      "id" : 55100
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/244160/page_bg_generated_v6b.jpg?t=1698168325",
      "developers" : [
        "Gearbox Software",
        "Aspyr (Mac)"
      ],
      "dlc" : [
        352590,
        352710
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/244160/header.jpg?t=1698168325",
      "game" : "Homeworld Remastered Collection",
      "publishers" : [
        "Gearbox Publishing",
        "Aspyr (Mac)"
      ],
      "short_description" : "Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions. Choose unit types, fleet formations and flight tactics for each strategic situation.",
      "id" : 244160
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/281610/page_bg_generated_v6b.jpg?t=1698167985",
      "developers" : [
        "Blackbird Interactive"
      ],
      "dlc" : [
        433240,
        433241,
        433242,
        436550
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/281610/header.jpg?t=1698167985",
      "game" : "Homeworld: Deserts of Kharak",
      "publishers" : [
        "Gearbox Publishing"
      ],
      "short_description" : "A ground-based RTS prequel to the classic Homeworld games. Assemble your fleet and lead them to victory on the shifting sands of Kharak in this compelling strategy game for PC from Blackbird Interactive.",
      "id" : 281610
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/389140/page_bg_generated_v6b.jpg?t=1695839746",
      "developers" : [
        "AQUIRIS"
      ],
      "dlc" : [
        1137940,
        863520,
        1174880,
        1608540
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Carreras",
          "id" : "9"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/389140/header.jpg?t=1695839746",
      "game" : "Horizon Chase Turbo",
      "publishers" : [
        "AQUIRIS"
      ],
      "short_description" : "Thrilling arcade racing game, inspired by the super-fun-straight-to-the-point classic racing games from the 90s.",
      "id" : 389140
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/11590/page_bg_generated_v6b.jpg?t=1627923481",
      "developers" : [
        "Deep Red Limited"
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/11590/header.jpg?t=1627923481",
      "game" : "Hospital Tycoon",
      "publishers" : [
        "Codemasters",
        "Electronic Arts"
      ],
      "short_description" : "Develop your own hospital drama and manipulate the results to your best advantage! In charge of a rapidly expanding hospital, your job is to cure the patients with your army of doctors and nurses while successfully managing the facilities and taking care of everyone's needs.",
      "id" : 11590
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/267980/page_bg_generated_v6b.jpg?t=1530529909",
      "developers" : [
        "Rage Software"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/267980/header.jpg?t=1530529909",
      "game" : "Hostile Waters: Antaeus Rising",
      "publishers" : [
        "Funbox Media Ltd"
      ],
      "short_description" : "In 2032 an Earth that knows only peace is forced to relearn the art of war. Twenty years have passed since the population of Earth did a fine job of destroying nearly everything in one final struggle for power by the politicians and military leaders.",
      "id" : 267980
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/609920/page_bg_generated_v6b.jpg?t=1634666816",
      "developers" : [
        "Sumo Digital Ltd",
        "Lucky Mountain Games"
      ],
      "dlc" : [
        1400720
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Carreras",
          "id" : "9"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/609920/header.jpg?t=1634666816",
      "game" : "Hotshot Racing",
      "publishers" : [
        "Curve Games"
      ],
      "short_description" : "Hotshot Racing es un vertiginoso juego de carreras estilo arcade con derrapes, gráficos retro muy nítidos y una increíble sensación de velocidad que crean una experiencia de conducción alucinante.",
      "id" : 609920
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22450/page_bg_generated_v6b.jpg?t=1572894032",
      "developers" : [
        "inXile Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22450/header.jpg?t=1572894032",
      "game" : "Hunted: The Demon’s Forge™",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "It will take the combined efforts of two great warriors to explore menacing dungeons, overgrown ruins, and downtrodden towns … and discover the secrets of the Demon’s Forge.",
      "id" : 22450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/321800/page_bg_generated_v6b.jpg?t=1618856688",
      "developers" : [
        "Beamdog"
      ],
      "dlc" : [
        467600
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/321800/header.jpg?t=1618856688",
      "game" : "Icewind Dale: Enhanced Edition",
      "publishers" : [
        "Beamdog"
      ],
      "short_description" : "Icewind Dale: Enhanced Edition revives the classic RPG with fresh updates for modern players. Build a party of Dungeons &amp; Dragons heroes and explore the frozen tundra in this retro fantasy adventure.",
      "id" : 321800
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/23400/page_bg_generated_v6b.jpg?t=1699553576",
      "developers" : [
        "Haemimont Games"
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/23400/header.jpg?t=1699553576",
      "game" : "Imperium Romanum Gold Edition",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "The city builder strategy game Imperium Romanum is set in the time-honoured Roman Empire. As governor of a Roman province, you will devise a strategy to build a well organised, prosperous and commanding settlement. Its fortune very much lies in your own hands.",
      "id" : 23400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6010/page_bg_generated_v6b.jpg?t=1571778027",
      "developers" : [
        "LucasArts"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6010/header.jpg?t=1571778027",
      "game" : "Indiana Jones® and the Fate of Atlantis™",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "The Man With The Hat Is Back In His Greatest Adventure Yet! 1939 - The eve of World War II. Nazi agents are about to get their hands on a weapon more dangerous than the atom bomb. Only Indy can stop them before they unleash the deadly secret that sank Atlantis.",
      "id" : 6010
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/32310/page_bg_generated_v6b.jpg?t=1571778024",
      "developers" : [
        "LucasArts"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/32310/header.jpg?t=1571778024",
      "game" : "Indiana Jones® and the Last Crusade™",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "Europe, 1938: The lost Ark was just a warm-up! Now Adolf Hitler is after the most powerful talisman of all - the Holy Grail. A few brave men stand in his way. Fortunately, one of them is Indiana Jones, and this time he has his dad with him.",
      "id" : 32310
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/242700/page_bg_generated_v6b.jpg?t=1681921507",
      "developers" : [
        "NetherRealm Studios",
        "High Voltage Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/242700/header.jpg?t=1681921507",
      "game" : "Injustice: Gods Among Us Ultimate Edition",
      "publishers" : [
        "Warner Bros. Interactive Entertainment"
      ],
      "short_description" : "Injustice: Gods Among Us Ultimate Edition enhances the bold new franchise to the fighting game genre from NetherRealm Studios. Featuring six new playable characters, over 30 new skins, and 60 new S.T.A.R. Labs missions, this edition packs a punch.",
      "id" : 242700
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/304430/page_bg_generated_v6b.jpg?t=1684943720",
      "developers" : [
        "Playdead"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/304430/header.jpg?t=1684943720",
      "game" : "INSIDE",
      "publishers" : [
        "Playdead"
      ],
      "short_description" : "Hunted and alone, a boy finds himself drawn into the center of a dark project. INSIDE is a dark, narrative-driven platformer combining intense action with challenging puzzles. It has been critically acclaimed for its moody art style, ambient soundtrack and unsettling atmosphere.",
      "id" : 304430
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1486630/page_bg_generated_v6b.jpg?t=1706387958",
      "developers" : [
        "Explosive Squat Games"
      ],
      "dlc" : [
        1661230
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1486630/header.jpg?t=1706387958",
      "game" : "Intravenous",
      "publishers" : [
        "HypeTrain Digital"
      ],
      "short_description" : "Sigilo que te hará apretar los dientes, seguido de una jugabilidad hardcore y táctica para aquellos que no buscan un camino tranquilo. ¡Intravenous redefine la acción de sigilo desafiante y te mantendrá al filo del asiento!",
      "id" : 1486630
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/243970/page_bg_generated_v6b.jpg?t=1701910010",
      "developers" : [
        "Klei Entertainment"
      ],
      "dlc" : [
        370650,
        376980
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/243970/header.jpg?t=1701910010",
      "game" : "Invisible, Inc.",
      "publishers" : [
        "Klei Entertainment"
      ],
      "short_description" : "Take control of Invisible's agents in the field and infiltrate the world's most dangerous corporations. Stealth, precision, and teamwork are essential in high-stakes, high-profit missions, where every move may cost an agent their life.",
      "id" : 243970
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/826630/page_bg_generated_v6b.jpg?t=1704725086",
      "developers" : [
        "KING Art"
      ],
      "dlc" : [
        1341701,
        1341702,
        1628070
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/826630/header.jpg?t=1704725086",
      "game" : "Iron Harvest",
      "publishers" : [
        "Prime Matter"
      ],
      "short_description" : "A classic real-time strategy game with an epic single player campaign, multiplayer &amp; coop, set in the alternate reality of 1920+",
      "id" : 826630
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/220900/page_bg_generated_v6b.jpg?t=1513875024",
      "developers" : [
        "Owlchemy Labs"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/220900/header.jpg?t=1513875024",
      "game" : "Jack Lumber",
      "publishers" : [
        "Owlchemy Labs"
      ],
      "short_description" : "A tree killed his granny and now he is out for revenge. Meet Jack Lumber, the supernatural lumberjack who hates trees, loves animals, and hates trees. Did we say that twice? The guy really hates trees, and boy does he have an axe to grind.",
      "id" : 220900
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/205950/page_bg_generated_v6b.jpg?t=1710932635",
      "developers" : [
        "Blit Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/205950/header.jpg?t=1710932635",
      "game" : "Jet Set Radio",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Tag, grind, and trick to the beat in SEGA’s hit game Jet Set Radio!",
      "id" : 205950
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/229890/page_bg_generated_v6b.jpg?t=1709306835",
      "developers" : [
        "Hello Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Carreras",
          "id" : "9"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/229890/header.jpg?t=1709306835",
      "game" : "Joe Danger",
      "publishers" : [
        "Hello Games"
      ],
      "short_description" : "Can you put the world’s most determined stuntman back into the limelight? Combo, boost and pull ludicrous stunts as Joe attempts to race his way back into the record books in over 100 eye-popping levels. Leap school buses full of screaming kids and pools of ravenous sharks! Dodge spikes and mousetraps!",
      "id" : 229890
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/242110/page_bg_generated_v6b.jpg?t=1709306875",
      "developers" : [
        "Hello Games"
      ],
      "dlc" : [
        242120
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Carreras",
          "id" : "9"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/242110/header.jpg?t=1709306875",
      "game" : "Joe Danger 2: The Movie",
      "publishers" : [
        "Hello Games"
      ],
      "short_description" : "Joe Danger, the world’s most determined stuntman, returns to embark on a death-defying thrill-ride across the set of the greatest blockbuster movie ever made. Across 100 crazy levels he’ll chase crooks by police bike, destroy laser-firing robots with a stolen jetpack, escape giant boulders in a minecart, time-travel to punch dinosaurs...",
      "id" : 242110
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/8190/page_bg_generated_v6b.jpg?t=1660140289",
      "developers" : [
        "Avalanche Studios"
      ],
      "dlc" : [
        259080,
        35080,
        35089,
        35083,
        35090,
        35091,
        35102,
        35101
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/8190/header.jpg?t=1660140289",
      "game" : "Just Cause 2",
      "publishers" : [
        "Square Enix"
      ],
      "short_description" : "Dive into an adrenaline-fuelled free-roaming adventure with 400 square miles of rugged terrain and hundreds of weapons and vehicles.",
      "id" : 8190
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/544810/page_bg_generated_v6b.jpg?t=1706265294",
      "developers" : [
        "1939 Games"
      ],
      "dlc" : [
        1471390,
        1597920,
        1869350
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/544810/header_latam.jpg?t=1706265294",
      "game" : "KARDS - El juego de cartas de la Segunda Guerra Mundial",
      "publishers" : [
        "1939 Games"
      ],
      "short_description" : "KARDS, el juego de cartas de la Segunda Guerra Mundial, combina un sistema de juego típico de cartas coleccionables con innovadoras mecánicas basadas en los juegos de estrategia y en las tácticas de los campos de batalla reales. Ponte al mando y desafía a otros jugadores en combates a gran escala.",
      "id" : 544810
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/220200/page_bg_generated_v6b.jpg?t=1663603925",
      "developers" : [
        "Squad"
      ],
      "dlc" : [
        283740,
        982970
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/220200/header.jpg?t=1663603925",
      "game" : "Kerbal Space Program",
      "publishers" : [
        "Private Division "
      ],
      "short_description" : "In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals. You have access to an array of parts to assemble fully-functional spacecraft that flies (or doesn’t) based on realistic aerodynamic and orbital physics.",
      "id" : 220200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/292500/page_bg_generated_v6b.jpg?t=1688030892",
      "developers" : [
        "Studio Pixel"
      ],
      "dlc" : [
        407070
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/292500/header.jpg?t=1688030892",
      "game" : "Kero Blaster",
      "publishers" : [
        "PLAYISM"
      ],
      "short_description" : "C&amp;F Inc. teleporters are going offline all over the place, and it's up to an intrepid frog employee to fix the situation.",
      "id" : 292500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1250/page_bg_generated_v6b.jpg?t=1697726402",
      "developers" : [
        "Tripwire Interactive"
      ],
      "dlc" : [
        258750,
        258751,
        258752,
        210943,
        210944,
        210945,
        210938,
        210937,
        210934,
        210936,
        210931,
        210933,
        210932,
        35429,
        35425,
        35419,
        35417,
        1257,
        1256,
        309990,
        309991
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1250/header.jpg?t=1697726402",
      "game" : "Killing Floor",
      "publishers" : [
        "Tripwire Interactive"
      ],
      "short_description" : "6-player co-op survival horror at its finest! Free updates, free special events and a ridiculous amount of fun!",
      "id" : 1250
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/232090/page_bg_generated_v6b.jpg?t=1712103749",
      "developers" : [
        "Tripwire Interactive"
      ],
      "dlc" : [
        1914490,
        1524820,
        1914560,
        354020,
        2363410
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/232090/header.jpg?t=1712103749",
      "game" : "Killing Floor 2",
      "publishers" : [
        "Tripwire Interactive"
      ],
      "short_description" : "In KILLING FLOOR 2, players descend into continental Europe after it has been overrun by horrific, murderous clones called Zeds that were created by rogue elements of the Horzine Corporation. 6-player Co-Op &amp; 12-player VS Zed-slaughtering mayhem.",
      "id" : 232090
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/379430/page_bg_generated_v6b.jpg?t=1704727571",
      "developers" : [
        "Warhorse Studios"
      ],
      "dlc" : [
        1033890,
        977420,
        921950,
        883150,
        768530,
        1052530,
        794220,
        801980,
        836890,
        836910,
        836920,
        836930,
        836900
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/379430/header.jpg?t=1704727571",
      "game" : "Kingdom Come: Deliverance",
      "publishers" : [
        "Warhorse Studios",
        "Prime Matter"
      ],
      "short_description" : "Story-driven open-world RPG that immerses you in an epic adventure in the Holy Roman Empire. Avenge your parents' death as you battle invading forces, go on game-changing quests, and make influential choices. Explore castles, forests, villages and other realistic settings in medieval Bohemia!",
      "id" : 379430
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/368230/page_bg_generated_v6b.jpg?t=1704795548",
      "developers" : [
        "Noio",
        "Licorice"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/368230/header.jpg?t=1704795548",
      "game" : "Kingdom: Classic",
      "publishers" : [
        "Raw Fury"
      ],
      "short_description" : "Kingdom is a 2D sidescrolling strategy/resource management hybrid with a minimalist feel wrapped in a beautiful, modern pixel art aesthetic.",
      "id" : 368230
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/496300/page_bg_generated_v6b.jpg?t=1704383233",
      "developers" : [
        "Noio"
      ],
      "dlc" : [
        509430,
        760200
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/496300/header.jpg?t=1704383233",
      "game" : "Kingdom: New Lands",
      "publishers" : [
        "Raw Fury"
      ],
      "short_description" : "Kingdom: Las nuevas tierras toman como base el laureado estilo de juego y el misterio de Kingdom al incluir abundante contenido nuevo, a la vez que se mantiene la simplicidad y profundidad que las legiones de monarcas han experimentado y disfrutado.",
      "id" : 496300
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/35130/page_bg_generated_v6b.jpg?t=1709838035",
      "developers" : [
        "Crystal Dynamics"
      ],
      "dlc" : [
        35135,
        35136,
        35137,
        35138
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/35130/header.jpg?t=1709838035",
      "game" : "Lara Croft and the Guardian of Light",
      "publishers" : [
        "Crystal Dynamics"
      ],
      "short_description" : "Take control of Lara and her new partner Totec, a Mayan tribesman, and uncover the ancient artifact known as the &quot;Mirror of Smoke&quot; in this all new action adventure game.",
      "id" : 35130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/540840/page_bg_generated_v6b.jpg?t=1709837228",
      "developers" : [
        "Square Enix Montréal"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/540840/header.jpg?t=1709837228",
      "game" : "Lara Croft GO",
      "publishers" : [
        "Crystal Dynamics"
      ],
      "short_description" : "Lara Croft GO is a turn based puzzle-adventure set in a long-forgotten world. Explore the ruins of an ancient civilization, discover well-kept secrets and face deadly challenges as you uncover the myth of the Queen of Venom.",
      "id" : 540840
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/391720/page_bg_generated_v6b.jpg?t=1684223647",
      "developers" : [
        "Bloober Team SA"
      ],
      "dlc" : [
        493530,
        550210
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/391720/header.jpg?t=1684223647",
      "game" : "Layers of Fear (2016)",
      "publishers" : [
        "Bloober Team SA"
      ],
      "short_description" : "Layers of Fear is a first-person psychedelic horror game with a heavy focus on story and exploration. Players take control of a painter whose sole purpose is to finish his Magnum Opus. The player must navigate a constantly changing Victorian-era mansion and ghastly visions of the painter’s psyche.",
      "id" : 391720
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/500/page_bg_generated_v6b.jpg?t=1699003822",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/500/header.jpg?t=1699003822",
      "game" : "Left 4 Dead",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Valve (los creadores de Counter-Strike, Half-Life y otros) presenta Left 4 Dead, una nueva aventura cooperativa de acción y terror para PC y Xbox 360, que coloca a cuatro jugadores en una épica batalla por la supervivencia contra aterradoras hordas de zombis y monstruos mutantes.",
      "id" : 500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/550/page_bg_generated_v6b.jpg?t=1675801903",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/550/header.jpg?t=1675801903",
      "game" : "Left 4 Dead 2",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Ambientado en el apocalipsis zombi, Left 4 Dead 2 (L4D2) es la esperadísima secuela del galardonado Left 4 Dead, el juego cooperativo número 1 de 2008. Este FPS cooperativo de acción terrorífica lleva a tus amigos y a ti a través de ciudades, pantanos y cementerios del Profundo Sur de EE. UU.",
      "id" : 550
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/207170/page_bg_generated_v6b.jpg?t=1447355394",
      "developers" : [
        "Almost Human Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/207170/header.jpg?t=1447355394",
      "game" : "Legend of Grimrock",
      "publishers" : [
        "Almost Human Games"
      ],
      "short_description" : "Use the Dungeon Editor to build entirely new adventures and challenges for other players to solve.",
      "id" : 207170
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/48000/page_bg_generated_v6b.jpg?t=1673342440",
      "developers" : [
        "Playdead"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/48000/header.jpg?t=1673342440",
      "game" : "LIMBO",
      "publishers" : [
        "Playdead"
      ],
      "short_description" : "Uncertain of his sister's fate, a boy enters LIMBO",
      "id" : 48000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/221260/page_bg_generated_v6b.jpg?t=1668741117",
      "developers" : [
        "Tomorrow Corporation"
      ],
      "dlc" : [
        1270140,
        2108900
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/221260/header.jpg?t=1668741117",
      "game" : "Little Inferno",
      "publishers" : [
        "Tomorrow Corporation"
      ],
      "short_description" : "Throw your toys into your fire, and play with them as they burn. An adventure that takes place almost entirely in front of a fireplace - about looking up up up out of the chimney, and the cold world just on the other side of the wall. From the creators of World of Goo and Human Resource Machine.",
      "id" : 221260
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/711540/page_bg_generated_v6b.jpg?t=1661969986",
      "developers" : [
        "Megagon Industries"
      ],
      "dlc" : [
        1256740,
        1399610,
        1746220,
        1843500,
        1849860,
        1850640
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Carreras",
          "id" : "9"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/711540/header.jpg?t=1661969986",
      "game" : "Lonely Mountains: Downhill",
      "publishers" : [
        "Thunderful Publishing"
      ],
      "short_description" : "Just you and your bike - take it on a thrilling ride down an unspoiled mountain landscape. Make your way through thick forests, narrow trails and wild rivers. Race, jump, slide and try not to crash - all the way from the peak to the valley!",
      "id" : 711540
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/32800/page_bg_generated_v6b.jpg?t=1550025329",
      "developers" : [
        "Snowblind Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/32800/header.jpg?t=1550025329",
      "game" : "Lord of the Rings: War in the North",
      "publishers" : [
        "Warner Bros. Interactive Entertainment"
      ],
      "short_description" : "Work together or die alone in this epic quest to turn the tides in the War of the Ring.",
      "id" : 32800
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/871420/page_bg_generated_v6b.jpg?t=1706883826",
      "developers" : [
        "LLC Blini Games"
      ],
      "dlc" : [
        1061960,
        1081920
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/871420/header.jpg?t=1706883826",
      "game" : "Lovecraft's Untold Stories",
      "publishers" : [
        "Fulqrum Publishing"
      ],
      "short_description" : "Lovecraft’s Untold Stories is an action roguelite with RPG elements. Explore randomly generated levels based in Lovecraft's stories, fight cultists and all kinds of monsters from the Mythos, improve your gear, solve puzzles, and find clues and knowledge to defeat the Great Old Ones.",
      "id" : 871420
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/40990/page_bg_generated_v6b.jpg?t=1661895807",
      "developers" : [
        "Illusion Softworks"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/40990/header.jpg?t=1661895807",
      "game" : "Mafia",
      "publishers" : [
        "2K"
      ],
      "short_description" : "It’s 1930. After an inadvertent brush with the mafia, cabdriver Tommy Angelo is reluctantly thrust into the world of organized crime. Initially, he is uneasy about falling in with the Salieri family, but soon the rewards become too big to ignore.",
      "id" : 40990
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/50130/page_bg_generated_v6b.jpg?t=1589909831",
      "developers" : [
        "2K Czech"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/50130/header.jpg?t=1589909831",
      "game" : "Mafia II (Classic)",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Vito Scaletta has started to make a name for himself on the streets of Empire Bay as someone who can be trusted to get a job done. Together with his buddy Joe, he is working to prove himself to the Mafia, quickly escalating up the family ladder with crimes of larger reward, status and consequence… the life as a wise guy isn’t quite as...",
      "id" : 50130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1030830/page_bg_generated_v6b.jpg?t=1589933058",
      "developers" : [
        "Hangar 13",
        "D3T"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1030830/header.jpg?t=1589933058",
      "game" : "Mafia II: Edición Definitiva",
      "publishers" : [
        "2K"
      ],
      "short_description" : "El héroe de guerra Vito Scaletta se une a la mafia para pagar las deudas de su padre. Vito ascenderá en la familia mediante crímenes de recompensas, importancia y consecuencias cada vez mayores.",
      "id" : 1030830
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/360430/page_bg_generated_v6b.jpg?t=1602775991",
      "developers" : [
        "Hangar 13",
        "Aspyr (Mac)"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/360430/header.jpg?t=1602775991",
      "game" : "Mafia III: Definitive Edition",
      "publishers" : [
        "2K",
        "Aspyr (Mac)"
      ],
      "short_description" : "After Lincoln Clay's surrogate family, the black mob, is betrayed and killed by the Italian Mafia, Lincoln builds a new family and blazes a path of revenge through the Mafioso responsible.",
      "id" : 360430
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1030840/page_bg_generated_v6b.jpg?t=1632420251",
      "developers" : [
        "Hangar 13"
      ],
      "dlc" : [
        1421480
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1030840/header.jpg?t=1632420251",
      "game" : "Mafia: Edición Definitiva",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Un percance con la mafia introduce al taxista Tommy Angelo en el crimen organizado. A pesar de su reticencia inicial, las ventajas de unirse a la familia Salieri son demasiadas como para ignorarlas.",
      "id" : 1030840
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/42910/page_bg_generated_v6b.jpg?t=1615973729",
      "developers" : [
        "Arrowhead Game Studios"
      ],
      "dlc" : [
        255980,
        73119,
        73118,
        73120,
        73115,
        73095,
        73096,
        73097,
        73098,
        73093,
        73039,
        73058,
        73091,
        73092,
        42918,
        73030,
        73033,
        73031,
        73035,
        73036,
        73037,
        73057,
        266740,
        813830
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/42910/header.jpg?t=1615973729",
      "game" : "Magicka",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Magicka is a satirical action-adventure game set in a rich fantasy world based on Norse mythology. The player assumes the role of a wizard from a sacred order tasked with stopping an evil sorcerer who has thrown the world into turmoil, his foul creations besieging the forces of good.",
      "id" : 42910
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/214560/page_bg_generated_v6b.jpg?t=1668892924",
      "developers" : [
        "Klei Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/214560/header.jpg?t=1668892924",
      "game" : "Mark of the Ninja",
      "publishers" : [
        "Microsoft Studios"
      ],
      "short_description" : "In Mark of the Ninja, you'll know what it is to truly be a ninja. You must be silent, agile and clever to outwit your opponents in a world of gorgeous scenery and flowing animation. Marked with cursed tattoos giving you heightened senses, every situation presents you with options.",
      "id" : 214560
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/368260/page_bg_generated_v6b.jpg?t=1702946042",
      "developers" : [
        "Firaxis Games"
      ],
      "dlc" : [
        1922634,
        1922633,
        1922632,
        1922631,
        2074340,
        1712442
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/368260/header.jpg?t=1702946042",
      "game" : "Marvel's Midnight Suns",
      "publishers" : [
        "2K"
      ],
      "short_description" : "LUCHA Y CREA ESTRATEGIAS COMO UN SUPERHÉROE EN LOS RINCONES MÁS OSCUROS DEL UNIVERSO MARVEL. Juega como Hunter, legendario cazador de demonios que debe liderar un equipo de superhéroes y guerreros sobrenaturales que se enfrentan a amenazas apocalípticas.",
      "id" : 368260
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1328670/page_bg_generated_v6b.jpg?t=1669773470",
      "developers" : [
        "BioWare"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1328670/header.jpg?t=1669773470",
      "game" : "Mass Effect™ Legendary Edition",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Mass Effect™ Legendary Edition incluye el contenido básico para un jugador y más de cuarenta artículos descargables de Mass Effect, Mass Effect 2 y Mass Effect 3, además de armas, armaduras y paquetes promocionales remasterizados y optimizados en 4K Ultra HD.",
      "id" : 1328670
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9160/page_bg_generated_v6b.jpg?t=1660150724",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9160/header.jpg?t=1660150724",
      "game" : "Master Levels for Doom II",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "Introducing the Master Levels for DOOM II. Twenty never-before-seen levels all with the same acid drenched, hell spawned horror of the originals. Each was created by independent designers and supervised by the demented minds of id Software. You might as well forget about seeing the light of day ever again.",
      "id" : 9160
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/204100/page_bg_generated_v6b.jpg?t=1706133942",
      "developers" : [
        "Rockstar Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/204100/header.jpg?t=1706133942",
      "game" : "Max Payne 3",
      "publishers" : [
        "Rockstar Games"
      ],
      "short_description" : "Max Payne deja la policía de Nueva York y se traslada a São Paulo para proteger a una familia rica en un intento por escapar de su turbulento pasado. Esta edición completa de Max Payne 3 incluye el juego original y todo el contenido descargable publicado previamente.",
      "id" : 204100
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/47790/page_bg_generated_v6b.jpg?t=1615244654",
      "developers" : [
        "Electronic Arts"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/47790/header.jpg?t=1615244654",
      "game" : "Medal of Honor™",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "This is a new war. There is a new warrior. He is Tier 1.",
      "id" : 47790
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/47790/page_bg_generated_v6b.jpg?t=1615244654",
      "developers" : [
        "Electronic Arts"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/47790/header.jpg?t=1615244654",
      "game" : "Medal of Honor™",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "This is a new war. There is a new warrior. He is Tier 1.",
      "id" : 47790
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/363440/page_bg_generated_v6b.jpg?t=1697508222",
      "developers" : [
        "Capcom"
      ],
      "dlc" : [
        1484300,
        1484330,
        1484350,
        1484370,
        1484380,
        1484390
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/363440/header.jpg?t=1697508222",
      "game" : "Mega Man Legacy Collection",
      "publishers" : [
        "Capcom"
      ],
      "short_description" : "Mega Man Legacy Collection is a celebration of the 8-bit history of Capcom’s iconic Blue Bomber featuring faithful reproductions of the series’ origins with the original six Mega Man games.",
      "id" : 363440
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/64000/page_bg_generated_v6b.jpg?t=1681220732",
      "developers" : [
        "Digitalmindsoft"
      ],
      "dlc" : [
        64005,
        64013,
        64014,
        64016,
        64017
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/64000/header.jpg?t=1681220732",
      "game" : "Men of War: Assault Squad",
      "publishers" : [
        "Fulqrum Publishing"
      ],
      "short_description" : "Men of War: Assault Squad features a completely new cooperative skirmish game mode with access to five different nations (Russia, Germany, USA, Commonwealth and, for the first time ever in the Men of War series, Japan) as well as increased realism and accessibility.",
      "id" : 64000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/204860/page_bg_generated_v6b.jpg?t=1681221455",
      "developers" : [
        "Fulqrum Publishing"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/204860/header.jpg?t=1681221455",
      "game" : "Men of War: Condemned Heroes",
      "publishers" : [
        "Fulqrum Publishing"
      ],
      "short_description" : "Men of War: Condemned Heroes tells the story of one of the infamous Soviet penal battalions during the WWII.",
      "id" : 204860
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/3130/page_bg_generated_v6b.jpg?t=1681221516",
      "developers" : [
        "Fulqrum Publishing"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/3130/header.jpg?t=1681221516",
      "game" : "Men of War: Red Tide",
      "publishers" : [
        "Fulqrum Publishing"
      ],
      "short_description" : "Men of War: Red Tide is a sequel to the critically acclaimed RTS Men of War. Red Tide introduces a new story driven campaign based on the writings of Soviet scribe Alexander Zorich, it also includes dozens of new or upgraded units and weapons.",
      "id" : 3130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/63940/page_bg_generated_v6b.jpg?t=1681221563",
      "developers" : [
        "Fulqrum Publishing"
      ],
      "dlc" : [
        63942
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/63940/header.jpg?t=1681221563",
      "game" : "Men of War: Vietnam",
      "publishers" : [
        "Fulqrum Publishing"
      ],
      "short_description" : "The critically acclaimed series returns! Experience Vietnam from both sides of the war.",
      "id" : 63940
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/7830/page_bg_generated_v6b.jpg?t=1679994012",
      "developers" : [
        "Best Way",
        "Digitalmindsoft"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/7830/header.jpg?t=1679994012",
      "game" : "Men of War™",
      "publishers" : [
        "Fulqrum Publishing"
      ],
      "short_description" : "Men of War is a stunning Real-Time Strategy game that takes place during the height of World War II. Intense battles span Europe and North Africa as gamers play as Soviet, Allied or German forces across 19 massive single-player missions.",
      "id" : 7830
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/235460/page_bg_generated_v6b.jpg?t=1690416005",
      "developers" : [
        "PlatinumGames"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/235460/header.jpg?t=1690416005",
      "game" : "METAL GEAR RISING: REVENGEANCE",
      "publishers" : [
        "KONAMI"
      ],
      "short_description" : "Developed by Kojima Productions and PlatinumGames, METAL GEAR RISING: REVENGEANCE takes the renowned METAL GEAR franchise into exciting new territory with an all-new action experience. The game seamlessly melds pure action and epic story-telling that surrounds Raiden – a child soldier transformed into a half-human, half-cyborg ninja who...",
      "id" : 235460
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/311340/page_bg_generated_v6b.jpg?t=1690416708",
      "developers" : [
        "KONAMI"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/311340/header.jpg?t=1690416708",
      "game" : "METAL GEAR SOLID V: GROUND ZEROES",
      "publishers" : [
        "KONAMI"
      ],
      "short_description" : "World-renowned Kojima Productions brings the Metal Gear Solid franchise to Steam with METAL GEAR SOLID V: GROUND ZEROES. Play as the legendary hero Snake and infiltrate a Cuban military base to rescue the hostages. Can you make it out alive?",
      "id" : 311340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/287700/page_bg_generated_v6b.jpg?t=1690416673",
      "developers" : [
        "KONAMI"
      ],
      "dlc" : [
        406540,
        406560,
        406580,
        406590,
        406600,
        406610,
        406620,
        436030,
        436040,
        436050,
        437230,
        437231,
        437233
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/287700/header.jpg?t=1690416673",
      "game" : "METAL GEAR SOLID V: THE PHANTOM PAIN",
      "publishers" : [
        "KONAMI"
      ],
      "short_description" : "Ushering in a new era for the METAL GEAR franchise with cutting-edge technology powered by the Fox Engine, METAL GEAR SOLID V: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
      "id" : 287700
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/250180/page_bg_generated_v6b.jpg?t=1584640973",
      "developers" : [
        "SNK CORPORATION",
        "Dotemu"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/250180/header.jpg?t=1584640973",
      "game" : "METAL SLUG 3",
      "publishers" : [
        "SNK CORPORATION"
      ],
      "short_description" : "“METAL SLUG 3”, the masterpiece in SNK’s emblematic 2D run &amp; gun action shooting game series, still continues to fascinate millions of fans worldwide to this day for its intricate dot-pixel graphics, and simple and intuitive game controls!",
      "id" : 250180
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/373990/page_bg_generated_v6b.jpg?t=1693981121",
      "developers" : [
        "Digital Dreams"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/373990/header.jpg?t=1693981121",
      "game" : "Metrico+",
      "publishers" : [
        "Digital Dreams"
      ],
      "short_description" : "Explore this unique world of infographics: All the bar charts, line diagrams and pie charts react to what you are doing. Metrico+ is a combination of exploration, skill, experimentation, but most of all: thinking outside of the box. Are you smart enough to solve all the mysteries?",
      "id" : 373990
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/43110/page_bg_generated_v6b.jpg?t=1709655393",
      "developers" : [
        "4A Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/43110/header.jpg?t=1709655393",
      "game" : "Metro 2033",
      "publishers" : [
        "Deep Silver"
      ],
      "short_description" : "Set in the shattered subway of a post apocalyptic Moscow, Metro 2033 is a story of intensive underground survival where the fate of mankind rests in your hands. In 2013 the world was devastated by an apocalyptic event, annihilating almost all mankind and turning the earth’s surface into a poisonous wasteland.",
      "id" : 43110
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/286690/page_bg_generated_v6b.jpg?t=1709553030",
      "developers" : [
        "4A Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/286690/header.jpg?t=1709553030",
      "game" : "Metro 2033 Redux",
      "publishers" : [
        "Deep Silver"
      ],
      "short_description" : "In 2013 the world was devastated by an apocalyptic event, annihilating almost all mankind and turning the Earth's surface into a poisonous wasteland. A handful of survivors took refuge in the depths of the Moscow underground, and human civilization entered a new Dark Age. The year is 2033.",
      "id" : 286690
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/412020/page_bg_generated_v6b.jpg?t=1706778291",
      "developers" : [
        "4A Games"
      ],
      "dlc" : [
        889920,
        889921,
        924220
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/412020/header.jpg?t=1706778291",
      "game" : "Metro Exodus",
      "publishers" : [
        "Deep Silver"
      ],
      "short_description" : "Flee the shattered ruins of the Moscow Metro and embark on an epic, continent-spanning journey across the post-apocalyptic Russian wilderness. Explore vast, non-linear levels, lose yourself in an immersive, sandbox survival experience, and follow a thrilling story-line that spans an entire year in the greatest Metro adventure yet.",
      "id" : 412020
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/412020/page_bg_generated_v6b.jpg?t=1706778291",
      "developers" : [
        "4A Games"
      ],
      "dlc" : [
        889920,
        889921,
        924220
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/412020/header.jpg?t=1706778291",
      "game" : "Metro Exodus",
      "publishers" : [
        "Deep Silver"
      ],
      "short_description" : "Flee the shattered ruins of the Moscow Metro and embark on an epic, continent-spanning journey across the post-apocalyptic Russian wilderness. Explore vast, non-linear levels, lose yourself in an immersive, sandbox survival experience, and follow a thrilling story-line that spans an entire year in the greatest Metro adventure yet.",
      "id" : 412020
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/287390/page_bg_generated_v6b.jpg?t=1709553119",
      "developers" : [
        "4A Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/287390/header.jpg?t=1709553119",
      "game" : "Metro: Last Light Redux",
      "publishers" : [
        "Deep Silver"
      ],
      "short_description" : "It is the year 2034. Beneath the ruins of post-apocalyptic Moscow, in the tunnels of the Metro, the remnants of mankind are besieged by deadly threats from outside – and within. Mutants stalk the catacombs beneath the desolate surface, and hunt amidst the poisoned skies above.",
      "id" : 287390
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1250410/page_bg_generated_v6b.jpg?t=1700500143",
      "developers" : [
        "Asobo Studio"
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1250410/header.jpg?t=1700500143",
      "game" : "Microsoft Flight Simulator 40th Anniversary Edition",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "¡Gracias por vuestro apoyo, fans recientes y de toda la vida! La edición Game of the Year (GOTY) de Microsoft Flight Simulator ofrece 5 nuevas aeronaves, 8 aeropuertos flamantes creados a mano, 6 vuelos introductorios inéditos, novedosos tutoriales y actualizaciones para el sistema climático.",
      "id" : 1250410
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/356190/page_bg_generated_v6b.jpg?t=1575317164",
      "developers" : [
        "Monolith Productions"
      ],
      "dlc" : [
        533110,
        561630,
        561631,
        561650,
        561950,
        666840,
        716270,
        784070
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/356190/header.jpg?t=1575317164",
      "game" : "Middle-earth™: Shadow of War™",
      "publishers" : [
        "WB Games"
      ],
      "short_description" : "Experience an epic open-world brought to life by the award-winning Nemesis System. Forge a new Ring of Power, conquer Fortresses in massive battles and dominate Mordor with your personal orc army in Middle-earth™: Shadow of War™.",
      "id" : 356190
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/287980/page_bg_generated_v6b.jpg?t=1689886905",
      "developers" : [
        "Dinosaur Polo Club"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/287980/header_latam.jpg?t=1689886905",
      "game" : "Mini Metro",
      "publishers" : [
        "Dinosaur Polo Club"
      ],
      "short_description" : "Mini Metro es un juego en el que diseñarás la red de metro de una ciudad en crecimiento. Traza líneas entre las diferentes estaciones y pon tus trenes en marcha. Consigue que tus rutas sean eficientes y modifícalas a medida que se abran nuevas estaciones. Decide cómo usar tus limitados recursos.",
      "id" : 287980
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1127500/page_bg_generated_v6b.jpg?t=1667780984",
      "developers" : [
        "Dinosaur Polo Club"
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1127500/header.jpg?t=1667780984",
      "game" : "Mini Motorways",
      "publishers" : [
        "Dinosaur Polo Club"
      ],
      "short_description" : "Mini Motorways is a strategy simulation game about designing the road map for a growing city. Build a traffic network, one road at a time, to create a bustling metropolis. Redesign your roads and place your motorways to get everyone where they need to go. How long can you keep the city moving?",
      "id" : 1127500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/35000/page_bg_generated_v6b.jpg?t=1592492627",
      "developers" : [
        "IO Interactive"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/35000/header.jpg?t=1592492627",
      "game" : "Mini Ninjas",
      "publishers" : [
        "Square Enix"
      ],
      "short_description" : "Mini Ninjas is a game that combines furious action with stealth and exploration for an experience that appeals to a wide audience across age groups and preferences. It’s an action-adventure with a strong focus on allowing the player freedom to explore the world and has the depth to allow for very varied gameplay and approaches to getting...",
      "id" : 35000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/17410/page_bg_generated_v6b.jpg?t=1668566648",
      "developers" : [
        "DICE"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/17410/header.jpg?t=1668566648",
      "game" : "Mirror's Edge™",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "In a city where information is heavily monitored, couriers called Runners transport sensitive data. In this seemingly utopian paradise, a crime has been committed, &amp; you are being hunted. You are a Runner called Faith and this innovative first-person action-adventure is your story.",
      "id" : 17410
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/32460/page_bg_generated_v6b.jpg?t=1657725463",
      "developers" : [
        "LucasArts"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/32460/header.jpg?t=1657725463",
      "game" : "Monkey Island™ 2 Special Edition: LeChuck’s Revenge™",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "Wannabe pirate Guybrush Threepwood, and the now zombie pirate LeChuck, return in what has long been considered one of the greatest LucasArts adventure games of all time.",
      "id" : 32460
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/494720/page_bg_generated_v6b.jpg?t=1568021619",
      "developers" : [
        "Suspicious Developments"
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/494720/header.jpg?t=1568021619",
      "game" : "Morphblade",
      "publishers" : [
        "Suspicious Developments"
      ],
      "short_description" : "In Morphblade you move around a grid slicing, smashing and bursting waves of nasty red bugs. Each tile you move to transforms you into a different weapon: on a Blades hex you can slice enemies on either side of you, on an Arrow you can launch yourself through two enemies in a row.",
      "id" : 494720
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/205350/page_bg_generated_v6b.jpg?t=1447355233",
      "developers" : [
        "NetherRealm Studios, High Voltage"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/205350/header.jpg?t=1447355233",
      "game" : "Mortal Kombat Kollection",
      "publishers" : [
        "Warner Bros. Interactive Entertainment"
      ],
      "short_description" : "Three iconic fighting games rolled into one hard-hitting, downloadable package.",
      "id" : 205350
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/307780/page_bg_generated_v6b.jpg?t=1698957913",
      "developers" : [
        "NetherRealm Studios",
        "QLOC"
      ],
      "dlc" : [
        524620,
        347880,
        351550,
        354427,
        351553,
        351551,
        351554,
        351555,
        347150,
        354425,
        347154,
        351556,
        347155,
        347890,
        351552,
        354426,
        524260,
        524270,
        524280,
        524290,
        524300,
        524310,
        524320
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/307780/header.jpg?t=1698957913",
      "game" : "Mortal Kombat X",
      "publishers" : [
        "Warner Bros. Games",
        "Warner Bros. Interactive Entertainment"
      ],
      "short_description" : "Experience the Next Generation of the #1 Fighting Franchise. Mortal Kombat X combines unparalleled, cinematic presentation with all new gameplay.",
      "id" : 307780
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1530/page_bg_generated_v6b.jpg?t=1669048878",
      "developers" : [
        "Introversion Software"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1530/header.jpg?t=1669048878",
      "game" : "Multiwinia",
      "publishers" : [
        "Introversion Software"
      ],
      "short_description" : "&quot;Long ago a computer scientist called Dr Sepulveda created a beautiful digital world existing entirely within a computer network of his own invention. This world was called Darwinia and it was inhabited by a peaceful, law-abiding digital life-form called the Darwinians.",
      "id" : 1530
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/760060/page_bg_generated_v6b.jpg?t=1710420820",
      "developers" : [
        "The Bearded Ladies"
      ],
      "dlc" : [
        887780,
        1088000
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/760060/header.jpg?t=1710420820",
      "game" : "Mutant Year Zero: Road to Eden",
      "publishers" : [
        "Funcom"
      ],
      "short_description" : "A tactical game combining the turn-based combat of XCOM with story, exploration, stealth, and strategy. Take control of a team of Mutants navigating a post-human Earth. Created by a team including former HITMAN leads and the designer of PAYDAY.",
      "id" : 760060
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/385760/page_bg_generated_v6b.jpg?t=1630701765",
      "developers" : [
        "Visual Concepts"
      ],
      "genres" : [
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/385760/header.jpg?t=1630701765",
      "game" : "NBA 2K17",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Following the record-breaking launch of NBA 2K16, the NBA 2K franchise continues to stake its claim as the most authentic sports video game with NBA 2K17. As the franchise that “all sports video games should aspire to be” (GamesRadar), NBA 2K17 will take the game to new heights and continue to blur the lines between video game and...",
      "id" : 385760
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2760/page_bg_generated_v6b.jpg?t=1447351140",
      "developers" : [
        "Obsidian Entertainment"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2760/header.jpg?t=1447351140",
      "game" : "Neverwinter Nights™ 2 Platinum",
      "publishers" : [
        "Atari"
      ],
      "short_description" : "Experience the long-awaited sequel to the game that revolutionized computer role-playing games!",
      "id" : 2760
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/275850/page_bg_generated_v6b.jpg?t=1711607335",
      "developers" : [
        "Hello Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/275850/header_alt_assets_21.jpg?t=1711607335",
      "game" : "No Man's Sky",
      "publishers" : [
        "Hello Games"
      ],
      "short_description" : "No Man's Sky is a game about exploration and survival in an infinite procedurally generated universe.",
      "id" : 275850
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/881100/page_bg_generated_v6b.jpg?t=1675987871",
      "developers" : [
        "Nolla Games"
      ],
      "dlc" : [
        1161410
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/881100/header.jpg?t=1675987871",
      "game" : "Noita",
      "publishers" : [
        "Nolla Games"
      ],
      "short_description" : "Noita is a magical action roguelite set in a world where every pixel is physically simulated. Fight, explore, melt, burn, freeze and evaporate your way through the procedurally generated world using spells you've created yourself.",
      "id" : 881100
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/466560/page_bg_generated_v6b.jpg?t=1702028918",
      "developers" : [
        "Shiro Games"
      ],
      "dlc" : [
        888650,
        971630,
        1036760,
        1088640,
        1223060,
        1401490,
        1644210,
        1876990,
        2138500,
        1236370,
        2228200,
        2515460,
        2658730
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/466560/header.jpg?t=1702028918",
      "game" : "Northgard",
      "publishers" : [
        "Shiro Unlimited"
      ],
      "short_description" : "Northgard is a critically acclaimed strategy game based on Norse mythology. Lead your clan, uncover the secrets of a mysterious newfound continent and defeat your enemies to conquer the Throne!",
      "id" : 466560
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/15700/page_bg_generated_v6b.jpg?t=1666185068",
      "developers" : [
        "Oddworld Inhabitants"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/15700/header.jpg?t=1666185068",
      "game" : "Oddworld: Abe's Oddysee®",
      "publishers" : [
        "Oddworld Inhabitants"
      ],
      "short_description" : "Selected by the fickle finger of fate, Abe™, floor-waxer first class for RuptureFarms, was catapulted into a life of adventure when he overheard plans by his boss, Molluck the Glukkon™, to turn Abe and his fellow Mudokons into Tasty Treats as part of a last-ditch effort to rescue Molluck's failing meat-packing empire.",
      "id" : 15700
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/271240/page_bg_generated_v6b.jpg?t=1700720827",
      "developers" : [
        "Mohawk Games"
      ],
      "dlc" : [
        1469670,
        1022910,
        977930,
        756060,
        665500,
        561150,
        553160,
        538090,
        511450,
        487300,
        461130,
        462280,
        462270
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/271240/header.jpg?t=1700720827",
      "game" : "Offworld Trading Company",
      "publishers" : [
        "Stardock Entertainment"
      ],
      "short_description" : "Mars has been colonized, and Earth's corporate titans fight to dominate this new market. Competition is fierce in this fast-paced economic RTS from Civilization IV Lead Designer, Soren Johnson.",
      "id" : 271240
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/208520/page_bg_generated_v6b.jpg?t=1710944212",
      "developers" : [
        "Haemimont Games"
      ],
      "dlc" : [
        215374,
        215373,
        215371,
        215372,
        215370
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/208520/header.jpg?t=1710944212",
      "game" : "Omerta - City of Gangsters",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "Omerta - City of Gangsters is a simulation game with tactical turn-based combat. Taking the role of a fresh-from-the-boat immigrant, with dreams of the big life, the player will work his way up the criminal hierarchy of 1920’s Atlantic City.",
      "id" : 208520
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/331600/page_bg_generated_v6b.jpg?t=1701307253",
      "developers" : [
        "KOEI TECMO GAMES CO., LTD."
      ],
      "dlc" : [
        378501,
        378504,
        378505
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/331600/header.jpg?t=1701307253",
      "game" : "One Piece Pirate Warriors 3",
      "publishers" : [
        "BANDAI NAMCO Entertainment"
      ],
      "short_description" : "Enjoy the original story of ONE PIECE from Fuschia Village to the mysterious kingdom of Dressrosa. Will your resolution be strong enough to defeat the most dangerous pirates, including Doflamingo and many more?",
      "id" : 331600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1536610/page_bg_generated_v6b.jpg?t=1701554571",
      "developers" : [
        "OpenTTD"
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1536610/header.jpg?t=1701554571",
      "game" : "OpenTTD",
      "publishers" : [
        "OpenTTD"
      ],
      "short_description" : "OpenTTD es un juego de simulación empresarial en el que los jugadores ganan dinero transportando pasajeros y mercancías por carretera, ferrocarril, agua y aire. Es una recreación y expansión de código abierto de Transport Tycoon Deluxe, videojuego creado en 1995 por Chris Sawyer.",
      "id" : 1536610
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/12830/page_bg_generated_v6b.jpg?t=1627920748",
      "developers" : [
        "Codemasters"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/12830/header.jpg?t=1627920748",
      "game" : "Operation Flashpoint: Dragon Rising",
      "publishers" : [
        "Codemasters",
        "Electronic Arts"
      ],
      "short_description" : "Operation Flashpoint: Dragon Rising is a game about a fictitious conflict on one of the Sakhalin islands.",
      "id" : 12830
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/44340/page_bg_generated_v6b.jpg?t=1573465898",
      "developers" : [
        "Codemasters Action Studio"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/44340/header.jpg?t=1573465898",
      "game" : "Operation Flashpoint: Red River",
      "publishers" : [
        "Codemasters"
      ],
      "short_description" : "Stand together with the US Marines in Operation Flashpoint: Red River, the ultimate tactical infantry shooter.",
      "id" : 44340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/102600/page_bg_generated_v6b.jpg?t=1666985655",
      "developers" : [
        "Robot Entertainment"
      ],
      "dlc" : [
        102622,
        102623
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/102600/header.jpg?t=1666985655",
      "game" : "Orcs Must Die!",
      "publishers" : [
        "Robot Entertainment"
      ],
      "short_description" : "Slice them, burn them, skewer them, and launch them - no matter how you get it done, orcs must die in this fantasy action-strategy game from Robot Entertainment. As a powerful War Mage with dozens of deadly weapons, spells, and traps at your fingertips, defend twenty-four fortresses from a rampaging mob of beastly enemies, including...",
      "id" : 102600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/201790/page_bg_generated_v6b.jpg?t=1631205565",
      "developers" : [
        "Robot Entertainment"
      ],
      "dlc" : [
        201802,
        201804,
        201809,
        201805
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/201790/header.jpg?t=1631205565",
      "game" : "Orcs Must Die! 2",
      "publishers" : [
        "Robot Entertainment"
      ],
      "short_description" : "You’ve tossed, burned and sliced them by the thousands – now orcs must die more than ever before! Grab a friend and slay orcs in untold numbers in this sequel to the 2011 AIAS Strategy Game of the Year from Robot Entertainment.",
      "id" : 201790
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/104900/page_bg_generated_v6b.jpg?t=1644009911",
      "developers" : [
        "DANKIE"
      ],
      "dlc" : [
        538190
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/104900/header.jpg?t=1644009911",
      "game" : "ORION: Prelude",
      "publishers" : [
        "DANKIE"
      ],
      "short_description" : "Work together to survive the devastating Dinosaur horde in huge, endless environments.",
      "id" : 104900
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/12810/page_bg_generated_v6b.jpg?t=1656372034",
      "developers" : [
        "Triumph Studios"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/12810/header.jpg?t=1656372034",
      "game" : "Overlord II",
      "publishers" : [
        "Codemasters",
        "Electronic Arts"
      ],
      "short_description" : "Overlord II, sequel to the critically acclaimed cult hit, sees the return of the chaotic Minions and their new Dark Master. Bigger, badder and more beautifully destructive, Overlord 2 has a Glorious Empire to smash, a massive Netherworld to revive, Minion mounts to mobilize, a trio of mistresses to woo, War Machines to crush opposition...",
      "id" : 12810
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/11450/page_bg_generated_v6b.jpg?t=1656371873",
      "developers" : [
        "Triumph Studios"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/11450/header.jpg?t=1656371873",
      "game" : "Overlord™",
      "publishers" : [
        "Codemasters",
        "Electronic Arts"
      ],
      "short_description" : "Prepare to be tempted, mesmerized and thrilled, become the Overlord, how corrupt you become depends on how you handle any given situation. Your actions impact the game world. With incredible power at your disposal and a team of evil minded minions to do your evil bidding, how will you resist the temptation to be incredibly despotic?",
      "id" : 11450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/12710/page_bg_generated_v6b.jpg?t=1656371503",
      "developers" : [
        "Triumph Studios"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/12710/header.jpg?t=1656371503",
      "game" : "Overlord™: Raising Hell",
      "publishers" : [
        "Codemasters",
        "Electronic Arts"
      ],
      "short_description" : "How evil can you get? Discover how corruptible you are in Overlord, the twisted fantasy action adventure where you can be evil (or really evil). In the game's seriously warped fantasy world, players will become the Overlord and get first-hand experience of how absolute power corrupts absolutely.",
      "id" : 12710
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/236450/page_bg_generated_v6b.jpg?t=1580311291",
      "developers" : [
        "Mine Loader Software Co., Ltd."
      ],
      "dlc" : [
        246250,
        246251,
        246252,
        246253,
        246254,
        246255,
        246256,
        246257
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/236450/header.jpg?t=1580311291",
      "game" : "PAC-MAN™ Championship Edition DX+",
      "publishers" : [
        "BANDAI NAMCO Entertainment"
      ],
      "short_description" : "It's time to gear up!Get ready for more ghost chain gobbling and frantic action in PAC-MAN® CE-DX+! The award-winning chomping game makes a shattering debut on Steam with even more content and a refined user-interface to compare high scores with your friends!",
      "id" : 236450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/239030/page_bg_generated_v6b.jpg?t=1678266428",
      "developers" : [
        "Lucas Pope"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/239030/header.jpg?t=1678266428",
      "game" : "Papers, Please",
      "publishers" : [
        "3909"
      ],
      "short_description" : "Congratulations. The October labor lottery is complete. Your name was pulled. For immediate placement, report to the Ministry of Admission at Grestin Border Checkpoint. An apartment will be provided for you and your family in East Grestin. Expect a Class-8 dwelling.",
      "id" : 239030
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1227530/page_bg_generated_v6b.jpg?t=1712148482",
      "developers" : [
        "Alter Games"
      ],
      "dlc" : [
        1439000,
        1236710,
        1573740
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1227530/header.jpg?t=1712148482",
      "game" : "Partisans 1941",
      "publishers" : [
        "Daedalic Entertainment"
      ],
      "short_description" : "Partisans 1941 is a real-time tactics game with stealth elements, set on the eastern front of WW II. As an army commander behind enemy lines you gather a group of Partisans to wage guerilla warfare against the German occupants.",
      "id" : 1227530
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/640820/page_bg_generated_v6b.jpg?t=1704727386",
      "developers" : [
        "Owlcat Games"
      ],
      "dlc" : [
        900447,
        900448,
        900449,
        1209370,
        965950,
        1041820
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/640820/header.jpg?t=1704727386",
      "game" : "Pathfinder: Kingmaker - Enhanced Plus Edition",
      "publishers" : [
        "Prime Matter"
      ],
      "short_description" : "Pathfinder: Kingmaker - Enhanced Plus Edition is the first isometric party-based computer RPG set in the Pathfinder fantasy universe. Enjoy a classic RPG experience inspired by games like Baldur's Gate, Fallout 1 and 2 and Arcanum. Explore and conquer the Stolen Lands and make them your kingdom!",
      "id" : 640820
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/57620/page_bg_generated_v6b.jpg?t=1707918067",
      "developers" : [
        "Gaming Minds Studios"
      ],
      "dlc" : [
        57730
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/57620/header.jpg?t=1707918067",
      "game" : "Patrician IV",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "You are a merchant in northern Europe in the late Middle Ages when the Hanseatic League was flourishing. Your goal is to rise to the most successful and influential member of the Hanse, ultimately being elected Elderman, leader of the trading league.",
      "id" : 57620
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/57730/page_bg_generated_v6b.jpg?t=1668001067",
      "developers" : [
        "Gaming Minds Studios"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/57730/header.jpg?t=1668001067",
      "game" : "Patrician IV: Rise of a Dynasty",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "Patrician IV - Rise of a Dynasty brings a comprehensive package of improvements and new features to the best-selling Patrician IV including online multiplayer and new scenarios. Finally, you are able to operate your business in cooperative multiplayer mode with up to three friends helping out.",
      "id" : 57730
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/218620/page_bg_generated_v6b.jpg?t=1712649983",
      "developers" : [
        "OVERKILL - a Starbreeze Studio."
      ],
      "dlc" : [
        2353512,
        2353511,
        2353510,
        2352300,
        2215010,
        2200970,
        2218650,
        2200971,
        2074240,
        2074230,
        2074220,
        2076560,
        1945681,
        1945682,
        1945680,
        1906240,
        1907080,
        1901420,
        1824880,
        1778790,
        1778791,
        1746580,
        1654480,
        1654481,
        1619070,
        1555040,
        1555050,
        1449450,
        1449440,
        1449442,
        1449441,
        1347750,
        1347751,
        1351060,
        1252200,
        1255151,
        1255150,
        1255152,
        826090,
        1184411,
        1184412,
        758420,
        1184410,
        612900,
        591710,
        548421,
        548420,
        545100,
        487210,
        450660,
        468410,
        441600,
        433730,
        422400,
        401650,
        384020,
        384021,
        374301,
        374300,
        366660,
        368870,
        349830,
        358150,
        351890,
        348090,
        344140,
        339480,
        337661,
        337660,
        331900,
        323500,
        320030,
        311050,
        306690,
        259380,
        259381,
        275590,
        267381,
        267380,
        264610,
        254260
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/218620/header.jpg?t=1712649983",
      "game" : "PAYDAY 2",
      "publishers" : [
        "Starbreeze Publishing AB"
      ],
      "short_description" : "PAYDAY 2 es un juego de acción cooperativo para cuatro jugadores que, una vez más, permite a los jugadores ponerse en la piel del equipo original de PAYDAY - Dallas, Hoxton, Wolf y Chains - mientras descienden por Washington DC en una épica ola de crímenes.",
      "id" : 218620
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/24240/page_bg_generated_v6b.jpg?t=1574898258",
      "developers" : [
        "OVERKILL Software"
      ],
      "dlc" : [
        207816,
        207815
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/24240/header.jpg?t=1574898258",
      "game" : "PAYDAY™ The Heist",
      "publishers" : [
        "Daybreak Game Company"
      ],
      "short_description" : "Take on the role of a hardened career criminal executing intense, dynamic heists in constant pursuit of the next “big score”",
      "id" : 24240
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/11280/page_bg_generated_v6b.jpg?t=1667023239",
      "developers" : [
        "Frogames"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/11280/header.jpg?t=1667023239",
      "game" : "Penguins Arena: Sedna's World",
      "publishers" : [
        "Frogames"
      ],
      "short_description" : "Penguins Arena is a thrilling and innovative First Penguin Shooter with quick, hectic rounds and where the magic of reincarnation, combined with the supernatural ability to return to the game as a ghost, ensures that your character has every chance to change your tribe's fate, even in the afterlife.",
      "id" : 11280
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/218740/page_bg_generated_v6b.jpg?t=1656003226",
      "developers" : [
        "Might and Delight"
      ],
      "dlc" : [
        504760
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/218740/header.jpg?t=1656003226",
      "game" : "Pid",
      "publishers" : [
        "Might and Delight"
      ],
      "short_description" : "Challenging platformer with striking visuals and deep engrossing story transports you to a world beyond ours!",
      "id" : 218740
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/291650/page_bg_generated_v6b.jpg?t=1683221851",
      "developers" : [
        "Obsidian Entertainment"
      ],
      "dlc" : [
        373740,
        373340,
        734070
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/291650/header.jpg?t=1683221851",
      "game" : "Pillars of Eternity",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "Prepare to be enchanted by a world where the choices you make and the paths you choose shape your destiny. Obsidian Entertainment, the developer of Fallout: New Vegas™ and South Park: The Stick of Truth™, together with Paradox Interactive is proud to present Pillars of Eternity.",
      "id" : 291650
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/560130/page_bg_generated_v6b.jpg?t=1690563846",
      "developers" : [
        "Obsidian Entertainment"
      ],
      "dlc" : [
        734830,
        821940,
        821950,
        821970,
        821980,
        821990,
        822000,
        854220,
        854290,
        855930
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/560130/header.jpg?t=1690563846",
      "game" : "Pillars of Eternity II: Deadfire",
      "publishers" : [
        "Versus Evil",
        "Obsidian Entertainment"
      ],
      "short_description" : "Patch 5.0 - Turn-based mode and The Ultimate challenge out now! Pursue a rogue god over land and sea in the sequel to the multi-award-winning RPG Pillars of Eternity. Captain your ship on a dangerous voyage of discovery across the vast unexplored archipelago region of the Deadfire.",
      "id" : 560130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/442120/page_bg_generated_v6b.jpg?t=1682000900",
      "developers" : [
        "Zen Studios"
      ],
      "dlc" : [
        1849550,
        1450220,
        1203510,
        1167870,
        1086760,
        1044440,
        984180,
        947000,
        931640,
        836820,
        782110,
        750060,
        715110,
        646668,
        646670,
        657431,
        657430,
        646660,
        646661,
        646662,
        646663,
        657421,
        657420,
        657422,
        718800,
        646664,
        646665,
        646666,
        646667,
        646669,
        646671,
        646672,
        646673,
        657423,
        657424
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/442120/header.jpg?t=1682000900",
      "game" : "Pinball FX3",
      "publishers" : [
        "Zen Studios"
      ],
      "short_description" : "Pinball FX3 is the biggest, most community focused pinball game ever created. Multiplayer matchups, user generated tournaments and league play create endless opportunity for pinball competition.",
      "id" : 442120
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/246620/page_bg_generated_v6b.jpg?t=1695295528",
      "developers" : [
        "Ndemic Creations"
      ],
      "dlc" : [
        1472780,
        315960
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/246620/header.jpg?t=1695295528",
      "game" : "Plague Inc: Evolved",
      "publishers" : [
        "Ndemic Creations"
      ],
      "short_description" : "Plague Inc: Evolved is a unique mix of high strategy and terrifyingly realistic simulation. Your pathogen has just infected 'Patient Zero' - now you must bring about the end of human history by evolving a deadly, global Plague whilst adapting against everything humanity can do to defend itself.",
      "id" : 246620
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1383250/page_bg_generated_v6b.jpg?t=1700741652",
      "developers" : [
        "ARIELEK"
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1383250/header.jpg?t=1700741652",
      "game" : "Please Fix The Road",
      "publishers" : [
        "ARIELEK"
      ],
      "short_description" : "Please Fix The Road es un juego de rompecabezas colorido, minimalista, relajado y casual en el que... ¡obviamente estás arreglando carreteras! Tu resultado final de la reparación de las carreteras no tiene que ser precisamente bonito, ¡sólo tiene que hacer el trabajo!",
      "id" : 1383250
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/31280/page_bg_generated_v6b.jpg?t=1558627507",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31280/header.jpg?t=1558627507",
      "game" : "Poker Night at the Inventory",
      "publishers" : [
        ""
      ],
      "short_description" : "Prepare for a different kind of poker night in a very different kind of club and play against familiar faces!",
      "id" : 31280
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/367450/page_bg_generated_v6b.jpg?t=1567634023",
      "developers" : [
        "Dry Cactus"
      ],
      "dlc" : [
        447410
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/367450/header.jpg?t=1567634023",
      "game" : "Poly Bridge",
      "publishers" : [
        "Dry Cactus"
      ],
      "short_description" : "Unleash your engineering creativity with an engaging and fresh bridge-building simulator with all the bells and whistles. Enjoy hours of physics-based puzzle solving in the Campaign and then jump in the Sandbox to create your own bridge designs and puzzles!",
      "id" : 367450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/205610/page_bg_generated_v6b.jpg?t=1707917640",
      "developers" : [
        "Gaming Minds Studios"
      ],
      "dlc" : [
        215972,
        215971,
        215970
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/205610/header.jpg?t=1707917640",
      "game" : "Port Royale 3",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "Develop a successful trading company, lead your ships in naval battles and force your opponents to their knees!",
      "id" : 205610
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/400/page_bg_generated_v6b.jpg?t=1699003695",
      "developers" : [
        "Valve"
      ],
      "dlc" : [
        323170,
        2012840
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/400/header.jpg?t=1699003695",
      "game" : "Portal",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Portal&trade; es la nueva aventura para un solo jugador de Valve. Ambientado en los misteriosos laboratorios de Aperture Science, Portal ha sido calificado como uno de los juegos más innovadores de los últimos tiempos y ofrece incontables horas de rompecabezas nunca vistos.",
      "id" : 400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/620/page_bg_generated_v6b.jpg?t=1698805825",
      "developers" : [
        "Valve"
      ],
      "dlc" : [
        323180
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg?t=1698805825",
      "game" : "Portal 2",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "¡La &quot;Iniciativa de Prueba Perpetua&quot; ha sido ampliada, permitiéndote ahora diseñar rompecabezas cooperativos para ti y tus amigos!",
      "id" : 620
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/480490/page_bg_generated_v6b.jpg?t=1594910513",
      "developers" : [
        "Arkane Studios"
      ],
      "dlc" : [
        865670
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/480490/header.jpg?t=1594910513",
      "game" : "Prey",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted.",
      "id" : 480490
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/233450/page_bg_generated_v6b.jpg?t=1705500802",
      "developers" : [
        "Double Eleven",
        "Introversion Software"
      ],
      "dlc" : [
        2237250,
        2184800,
        2154010,
        2085570,
        1948120,
        1760030,
        1601350,
        1493470,
        1244781,
        1244780,
        1143650,
        1195240
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/233450/header.jpg?t=1705500802",
      "game" : "Prison Architect",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Only the world’s most ruthless Warden can contain the world’s most ruthless inmates. Design and develop your personalized penitentiary in Prison Architect.",
      "id" : 233450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/224000/page_bg_generated_v6b.jpg?t=1572382151",
      "developers" : [
        "Blackbird Interactive"
      ],
      "genres" : [
        {
          "description" : "Free to Play",
          "id" : "37"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/224000/header.jpg?t=1572382151",
      "game" : "Project Eagle: A 3D Interactive Mars Base",
      "publishers" : [
        "Blackbird Interactive"
      ],
      "short_description" : "Una demostración artística interactiva que muestra cómo sería una base futura en Marte. Project Eagle no es un juego, sino una exploración de un posible futuro de la humanidad.",
      "id" : 224000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/893680/page_bg_generated_v6b.jpg?t=1712237010",
      "developers" : [
        "Buckshot Software"
      ],
      "dlc" : [
        989960
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/893680/header.jpg?t=1712237010",
      "game" : "Project Warlock",
      "publishers" : [
        "Retrovibe",
        "gaming company"
      ],
      "short_description" : "Project Warlock is a first-person shooter that fans of Doom, Hexen, and Wolfenstein cannot miss. It serves you an exploding cocktail of bullets, spells, and monsters. Battle through 60 levels of non-stop action, packed with bloodthirsty enemies and challenging bosses.",
      "id" : 893680
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/31270/page_bg_generated_v6b.jpg?t=1686674900",
      "developers" : [
        "Telltale"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31270/header.jpg?t=1686674900",
      "game" : "Puzzle Agent",
      "publishers" : [
        "Telltale"
      ],
      "short_description" : "Created with indie comic artist Graham Annable's unique narrative and visual sensibilities, delivered with the distinctive Telltale storytelling style, Puzzle Agent is sure to challenge, thrill and engage in more ways than you can shake a cryptogram at!",
      "id" : 31270
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/94590/page_bg_generated_v6b.jpg?t=1686675497",
      "developers" : [
        "Telltale"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/94590/header.jpg?t=1686675497",
      "game" : "Puzzle Agent 2",
      "publishers" : [
        "Telltale"
      ],
      "short_description" : "Agent Nelson Tethers just solved his biggest case yet. So why isn't he satisfied? Venture back to eerie Scoggins, Minnesota to solve the mystery of &quot;the Hidden People&quot; once and for all!",
      "id" : 94590
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2310/page_bg_generated_v6b.jpg?t=1691683243",
      "developers" : [
        "id Software",
        "Nightdive Studios",
        "MachineGames"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2310/header.jpg?t=1691683243",
      "game" : "Quake",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Desarrollado por el galardonado equipo de id Software, Quake® es el innovador shooter en primera persona de fantasía oscura que inspiró los shooters de estilo retro de hoy en día. Con Quake (Enhanced), disfruta de la versión auténtica, actualizada y visualmente mejorada del original.",
      "id" : 2310
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2210/page_bg_generated_v6b.jpg?t=1664372514",
      "developers" : [
        "RavenSoft",
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2210/header.jpg?t=1664372514",
      "game" : "Quake 4",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Formas parte del pelotón Rino y encabezas la invasión militar de la Tierra a un planeta alienígena hostil. Pero en esta guerra desesperada por la supervivencia contra un enemigo implacable, descubrirás que el único modo de derrotarlo es... convertirte en uno de ellos.",
      "id" : 2210
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2320/page_bg_generated_v6b.jpg?t=1695916764",
      "developers" : [
        "id Software",
        "Nightdive Studios",
        "MachineGames"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2320/header.jpg?t=1695916764",
      "game" : "Quake II",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Eres la última esperanza de la humanidad contra los Strogg, una raza de alienígenas hostiles que libra una guerra contra la Tierra. Prueba este FPS de ciencia ficción en una versión para plataformas modernas con gráficos mejorados, nuevo contenido de campaña, multijugador online/cooperativo y más.",
      "id" : 2320
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2340/page_bg_generated_v6b.jpg?t=1660237193",
      "developers" : [
        "Rogue Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2340/header.jpg?t=1660237193",
      "game" : "Quake II Mission Pack: Ground Zero",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "Take out the Big Gun sounded simple enough, except the Strogg were waiting. You, and a few marines like you, are the lucky ones. You've made it down in one piece and are still able to contact the fleet. The Gravity Well, the Strogg's newest weapon in its arsenal against mankind, is operational.",
      "id" : 2340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2330/page_bg_generated_v6b.jpg?t=1660237210",
      "developers" : [
        "Xatrix Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2330/header.jpg?t=1660237210",
      "game" : "Quake II Mission Pack: The Reckoning",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "You are part of an elite commando force that must infiltrate a hostile alien cite. Once inside, you must scour industrial landscapes, crawl through waterways and air ducts, navigate treacherous canyons teeming with vicious mutants, stow away on an alien spacecraft, and destroy the enemy's secret moon base.",
      "id" : 2330
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1089130/page_bg_generated_v6b.jpg?t=1667234977",
      "developers" : [
        "Lightspeed Studios™"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1089130/header.jpg?t=1667234977",
      "game" : "Quake II RTX",
      "publishers" : [
        "NVIDIA"
      ],
      "short_description" : "Quake II RTX is a cutting-edge, ray-traced reimagining of id software’s old school classic, by NVIDIA’s Lightspeed Studios. Global lighting effects, including realistic reflections, refraction, shadows, ambient occlusion and global illumination are a result of the path-traced simulation of light.",
      "id" : 1089130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2200/page_bg_generated_v6b.jpg?t=1664229254",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2200/header.jpg?t=1664229254",
      "game" : "Quake III Arena",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "Los mejores guerreros de todos los tiempos han sido convocados para combatir y entretener a una antigua raza alienígena. Empuña diversas armas y potenciadores, y lucha por la gloria contra combatientes despiadados en este frenético FPS para uno o varios jugadores.",
      "id" : 2200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9040/page_bg_generated_v6b.jpg?t=1629396047",
      "developers" : [
        "Ritual Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9040/header.jpg?t=1629396047",
      "game" : "QUAKE Mission Pack 1: Scourge of Armagon",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "After defeating Shub-Niggurath, you arrive back at your home base on Earth, but it's not all blue skies and butterflies. Apparently, not all QUAKE forces have been subdued. Chaos ensues as you blast your way through the QUAKE minions and toward the infested gateway. Your only choice is to find the source of evil and shut it down.",
      "id" : 9040
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9030/page_bg_generated_v6b.jpg?t=1629396043",
      "developers" : [
        "Rogue Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9030/header.jpg?t=1629396043",
      "game" : "QUAKE Mission Pack 2: Dissolution of Eternity",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "TWO NEW EPISODES. SIXTEEN NEW LEVELS. ONE WAY OUT. Your journey has led you down a path of no return. The acrid smell of death fills the air. And you know the road ahead may lead to your grave. But Quake, with his insidious, apocalyptic plans, must be crushed. If you fail, evil will shroud the universe for all eternity.",
      "id" : 9030
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/474960/page_bg_generated_v6b.jpg?t=1682524073",
      "developers" : [
        "Remedy Entertainment"
      ],
      "dlc" : [
        514800
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/474960/header.jpg?t=1682524073",
      "game" : "Quantum Break",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "From Remedy Entertainment, the masters of cinematic action games, comes Quantum Break, a time-amplified suspenseful blockbuster. The Quantum Break experience is part game, part live action show—where decisions in one dramatically affect the other.",
      "id" : 474960
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/209730/page_bg_generated_v6b.jpg?t=1712312434",
      "developers" : [
        "Wizarbox"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/209730/header.jpg?t=1712312434",
      "game" : "R.A.W. Realms of Ancient War",
      "publishers" : [
        "Focus Entertainment"
      ],
      "short_description" : "Do you have what it takes to survive the Realms of Ancient War?Take control of a fearsome Warrior, a powerful Wizard or a Rogue, and plunge into a grand quest full of action!Key Features:The explosive Hack’n’Slash (action/role-playing game) R.A.",
      "id" : 209730
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9200/page_bg_generated_v6b.jpg?t=1706806214",
      "developers" : [
        "id Software"
      ],
      "dlc" : [
        209460,
        452290
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9200/header.jpg?t=1706806214",
      "game" : "RAGE",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Powered by id’s revolutionary id Tech® 5 technology, RAGE is an intense first-person shooter with breakneck vehicle combat, an expansive world to explore, and jaw-dropping graphics!",
      "id" : 9200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/503940/page_bg_generated_v6b.jpg?t=1707917941",
      "developers" : [
        "Gaming Minds Studios"
      ],
      "dlc" : [
        1479630,
        1161421,
        1161420,
        884143,
        884142,
        884141,
        884140,
        873880,
        820930,
        1341580
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/503940/header.jpg?t=1707917941",
      "game" : "Railway Empire",
      "publishers" : [
        "Kalypso Media"
      ],
      "short_description" : "In Railway Empire, you will create an elaborate and wide-ranging rail network, purchase over 40 different trains modelled in extraordinary detail, and buy or build railway stations, maintenance buildings, factories and tourist attractions to keep your travel network ahead of the competition.",
      "id" : 503940
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/234190/page_bg_generated_v6b.jpg?t=1667232597",
      "developers" : [
        "Wolfire Games"
      ],
      "dlc" : [
        1963640
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/234190/header.jpg?t=1667232597",
      "game" : "Receiver",
      "publishers" : [
        "Wolfire Games"
      ],
      "short_description" : "Receiver was created for the 7-day FPS challenge to explore gun handling mechanics, randomized levels, and unordered storytelling. Armed only with a handgun and an audio cassette player, you must uncover the secrets of the Mindkill in a building complex infested with automated turrets and hovering shock drones.",
      "id" : 234190
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1174180/page_bg_generated_v6b.jpg?t=1695140956",
      "developers" : [
        "Rockstar Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956",
      "game" : "Red Dead Redemption 2",
      "publishers" : [
        "Rockstar Games"
      ],
      "short_description" : "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por Estados Unidos en los albores del siglo XX. También incluye acceso al mundo multijugador compartido de Red Dead Online.",
      "id" : 1174180
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/20500/page_bg_generated_v6b.jpg?t=1591111308",
      "developers" : [
        "Volition",
        "Reactor Zero",
        "THQ Nordic"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/20500/header.jpg?t=1591111308",
      "game" : "Red Faction Guerrilla Steam Edition",
      "publishers" : [
        "Deep Silver"
      ],
      "short_description" : "Set 50 years after the climactic events of the original Red Faction, Red Faction: Guerrilla allows players to take the role of an insurgent fighter with the newly re-established Red Faction movement as they battle for liberation from the oppressive Earth Defense Force.",
      "id" : 20500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/35450/page_bg_generated_v6b.jpg?t=1552425243",
      "developers" : [
        "Tripwire Interactive"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Multijugador masivo",
          "id" : "29"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/35450/header.jpg?t=1552425243",
      "game" : "Red Orchestra 2: Heroes of Stalingrad with Rising Storm",
      "publishers" : [
        "Tripwire Interactive"
      ],
      "short_description" : "Contains full Rising Storm content as well!",
      "id" : 35450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/99300/page_bg_generated_v6b.jpg?t=1614779423",
      "developers" : [
        "Avalanche Studios"
      ],
      "dlc" : [
        200610,
        200620
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/99300/header.jpg?t=1614779423",
      "game" : "Renegade Ops",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Blast your way through enemy lines to defeat Inferno, a madman intent on global domination. Destruction just got awesome.",
      "id" : 99300
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/304240/page_bg_generated_v6b.jpg?t=1709710949",
      "developers" : [
        "CAPCOM Co., Ltd."
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/304240/header.jpg?t=1709710949",
      "game" : "Resident Evil",
      "publishers" : [
        "CAPCOM Co., Ltd."
      ],
      "short_description" : "The game that defined the survival-horror genre is back! Check out the remastered HD version of Resident Evil.",
      "id" : 304240
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/339340/page_bg_generated_v6b.jpg?t=1700452825",
      "developers" : [
        "CAPCOM Co., Ltd."
      ],
      "dlc" : [
        381710,
        381711,
        381712,
        381713,
        381716,
        406140
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/339340/header.jpg?t=1700452825",
      "game" : "Resident Evil 0",
      "publishers" : [
        "CAPCOM Co., Ltd."
      ],
      "short_description" : "Before the mansion, before the destruction of Raccoon City, there was Resident Evil 0. Now remastered with improved visuals and sounds, as well as the all-new Wesker Mode, there's never been a better time to experience the origins of the Resident Evil story.",
      "id" : 339340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/883710/page_bg_generated_v6b.jpg?t=1701395502",
      "developers" : [
        "CAPCOM Co., Ltd."
      ],
      "dlc" : [
        920560,
        920561,
        920565,
        920562,
        920563,
        920564,
        920566,
        920570,
        920569,
        920568,
        920567,
        920571,
        1335170
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/883710/header.jpg?t=1701395502",
      "game" : "Resident Evil 2",
      "publishers" : [
        "CAPCOM Co., Ltd."
      ],
      "short_description" : "Publicado originalmente en 1998, Resident Evil 2, uno de los juegos más icónicos de todos los tiempos, regresa completamente reinventado para las consolas de nueva generación.",
      "id" : 883710
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/221040/page_bg_generated_v6b.jpg?t=1700452901",
      "developers" : [
        "Capcom"
      ],
      "dlc" : [
        232570,
        232550,
        232590,
        232530,
        236080
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/221040/header.jpg?t=1700452901",
      "game" : "Resident Evil 6",
      "publishers" : [
        "Capcom"
      ],
      "short_description" : "Blending action and survival horror, Resident Evil 6 promises to be the dramatic horror experience of 2013.",
      "id" : 221040
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/418370/page_bg_generated_v6b.jpg?t=1701827839",
      "developers" : [
        "CAPCOM Co., Ltd."
      ],
      "dlc" : [
        564190,
        530611,
        540340,
        529930,
        530610,
        583810
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/418370/header.jpg?t=1701827839",
      "game" : "Resident Evil 7 Biohazard",
      "publishers" : [
        "CAPCOM Co., Ltd."
      ],
      "short_description" : "El peligro y la soledad emanan de las decrépitas paredes de una granja abandonada en el sur de los EE. UU. «7» marca un nuevo inicio para el género del survival horror, con el cambio a la aterradora perspectiva de jugador «vista aislada». Con el RE Engine, el terror llega a nuevas cotas de fotorrealismo.",
      "id" : 418370
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9010/page_bg_generated_v6b.jpg?t=1664380265",
      "developers" : [
        "Gray Matter Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9010/header.jpg?t=1664380265",
      "game" : "Return to Castle Wolfenstein",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "La Segunda Guerra Mundial causa estragos y las naciones caen. Los nazis están corrompiendo la ciencia y lo oculto para crear un ejército capaz de aniquilar a los Aliados de una vez por todas. Encarna al ranger del Ejército de los Estados Unidos William “B. J.” Blazkowicz y atraviesa el oscuro corazón del Tercer Reich para detenerlos...",
      "id" : 9010
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/60/page_bg_generated_v6b.jpg?t=1599518374",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/60/header.jpg?t=1599518374",
      "game" : "Ricochet",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Juego futurista de acción que pondrá a prueba tu agilidad y tu puntería. Ricochet te permite jugar solo o con tus amigos en diversos campos de batalla futuristas.",
      "id" : 60
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/391220/page_bg_generated_v6b.jpg?t=1709834259",
      "developers" : [
        "Crystal Dynamics",
        "Eidos-Montréal",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)",
        "Nixxes"
      ],
      "dlc" : [
        505540,
        418800,
        418810,
        418790,
        419110,
        418680,
        418690,
        418700,
        418710,
        418750,
        418760,
        418770,
        418780
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/391220/header.jpg?t=1709834259",
      "game" : "Rise of the Tomb Raider™",
      "publishers" : [
        "Crystal Dynamics",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "short_description" : "Rise of the Tomb Raider: 20 Year Celebration includes the base game and Season Pass featuring all-new content. Explore Croft Manor in the new “Blood Ties” story, then defend it against a zombie invasion in “Lara’s Nightmare”.",
      "id" : 391220
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/217140/page_bg_generated_v6b.jpg?t=1691536162",
      "developers" : [
        "Interceptor Entertainment"
      ],
      "dlc" : [
        389240
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/217140/header.jpg?t=1691536162",
      "game" : "Rise of the Triad",
      "publishers" : [
        "Apogee Entertainment"
      ],
      "short_description" : "Apogee Software and Interceptor Entertainment proudly present the rebirth of the cult-classic first-person shooter, “Rise of the Triad”. Bigger, better and more ludicrous than ever before.",
      "id" : 217140
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/278100/page_bg_generated_v6b.jpg?t=1491295962",
      "developers" : [
        "Two Tribes"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/278100/header.jpg?t=1491295962",
      "game" : "RIVE: Wreck, Hack, Die, Retry!",
      "publishers" : [
        "Two Tribes Publishing"
      ],
      "short_description" : "This 360-degree shooter/platformer hybrid lets you choreograph a ‘dance of destruction’ in insanely spectacular battles and set-pieces. RIVE feels like the explosive games of yore, pumping megapixels in true 21st century style.",
      "id" : 278100
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/215510/page_bg_generated_v6b.jpg?t=1666995931",
      "developers" : [
        "Ratloop Asia"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/215510/header.jpg?t=1666995931",
      "game" : "Rocketbirds: Hardboiled Chicken",
      "publishers" : [
        "Reverb Publishing"
      ],
      "short_description" : "Annihilate an evil penguin regime in this cinematic platform adventure game offering full solo and co-op campaigns.",
      "id" : 215510
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22310/page_bg_generated_v6b.jpg?t=1574189934",
      "developers" : [
        "Rebellion"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22310/header.jpg?t=1574189934",
      "game" : "Rogue Warrior",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Rogue Warrior is a character-driven, first-person-shooter, featuring Richard 'Demo Dick' Marcinko's explosive personality in an action-packed single player campaign, and intense multiplayer combat. Playing as Richard 'Demo Dick' Marcinko, you go behind the iron curtain to disrupt a suspected North Korean ballistic missile program.",
      "id" : 22310
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/4770/page_bg_generated_v6b.jpg?t=1711461029",
      "developers" : [
        "The Creative Assembly"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/4770/header.jpg?t=1711461029",
      "game" : "Rome: Total War™ - Alexander",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Rome: Total War - Alexander is the second official expansion pack to Rome: Total War. An entirely new campaign map that stretches from Macedonia to Greece and into the heart of the ancient Persian Empire New campaign game that tasks players with matching the exploits of Alexander the Great as he swept across Central Asia and dominated...",
      "id" : 4770
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/4760/page_bg_generated_v6b.jpg?t=1668768077",
      "developers" : [
        "CREATIVE ASSEMBLY"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/4760/header.jpg?t=1668768077",
      "game" : "Rome: Total War™ - Collection",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Control and conquer the greatest empire ever known to man.",
      "id" : 4760
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/41700/page_bg_generated_v6b.jpg?t=1685134248",
      "developers" : [
        "GSC Game World"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/41700/header.jpg?t=1685134248",
      "game" : "S.T.A.L.K.E.R.: Call of Pripyat",
      "publishers" : [
        "GSC Game World"
      ],
      "short_description" : "S.T.A.L.K.E.R.: Call of Pripyat is the direct sequel of the S.T.A.L.K.E.R.: Shadow of Chernobyl. As a Major Alexander Degtyarev you should investigate the crash of the governmental helicopters around the Zone and find out, what happened there.",
      "id" : 41700
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/20510/page_bg_generated_v6b.jpg?t=1685134249",
      "developers" : [
        "GSC Game World"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/20510/header.jpg?t=1685134249",
      "game" : "S.T.A.L.K.E.R.: Clear Sky",
      "publishers" : [
        "GSC World Publishing"
      ],
      "short_description" : "S.T.A.L.K.E.R.: Clear Sky – standalone prequel for the acclaimed S.T.A.L.K.E.R.: Shadow of Chernobyl, which tells you story about the Clear Sky group, that want to research the Zone and understand it better.",
      "id" : 20510
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/4500/page_bg_generated_v6b.jpg?t=1686945417",
      "developers" : [
        "GSC Game World"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/4500/header.jpg?t=1686945417",
      "game" : "S.T.A.L.K.E.R.: Shadow of Chernobyl",
      "publishers" : [
        "GSC Game World"
      ],
      "short_description" : "S.T.A.L.K.E.R.: Shadow of Chernobyl tells a story about survival in the Zone – a very dangerous place, where you fear not only the radiation, anomalies and deadly creatures, but other S.T.A.L.K.E.R.s, who have their own goals and wishes.",
      "id" : 4500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/206420/page_bg_generated_v6b.jpg?t=1686927307",
      "developers" : [
        "Deep Silver Volition"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/206420/header.jpg?t=1686927307",
      "game" : "Saints Row IV: Re-Elected",
      "publishers" : [
        "Deep Silver"
      ],
      "short_description" : "No te pierdas las desternillantes locuras de Saints Row IV. Los Saints han pasado del ático a la Casa Blanca, pero la Tierra ha sido invadida y te toca a ti salvarla con un arsenal de superpoderes y extrañas armas en el juego de mundo abierto más alocado de la historia.",
      "id" : 206420
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/55230/page_bg_generated_v6b.jpg?t=1706618956",
      "developers" : [
        "Volition"
      ],
      "dlc" : [
        901805,
        55394,
        55399,
        55400,
        55392,
        55391,
        55397,
        55398,
        55396,
        55382,
        55381,
        55380,
        55389,
        55388,
        55390,
        55386,
        55387,
        55395,
        55385,
        55393
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/55230/header.jpg?t=1706618956",
      "game" : "Saints Row: The Third",
      "publishers" : [
        "Deep Silver"
      ],
      "short_description" : "Get ready for the most out-landish gameplay scenarios ever seen as the Third Street Saints take on the Syndicate!",
      "id" : 55230
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/31220/page_bg_generated_v6b.jpg?t=1613872984",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31220/header.jpg?t=1613872984",
      "game" : "Sam & Max 301: The Penal Zone",
      "publishers" : [
        "Skunkape Games"
      ],
      "short_description" : "Wield psychic powers against fearsome foes in this epic comedy saga. In The Devil’s Playhouse, an otherworldly power for controlling matter and space calls to the strongest and strangest who might wield it -- intergalactic warlords and eldritch gods, under-dwellers and scholars of the arcane.",
      "id" : 31220
    },
    {
      "background" : "",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31230/header.jpg?t=1613873784",
      "game" : "Sam & Max 302: The Tomb of Sammun-Mak",
      "publishers" : [
        "Skunkape Games"
      ],
      "short_description" : "Wield psychic powers against fearsome foes in this epic comedy saga. In The Devil’s Playhouse, an otherworldly power for controlling matter and space calls to the strongest and strangest who might wield it -- intergalactic warlords and eldritch gods, under-dwellers and scholars of the arcane.",
      "id" : 31230
    },
    {
      "background" : "",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31240/header.jpg?t=1613874197",
      "game" : "Sam & Max 303: They Stole Max's Brain!",
      "publishers" : [
        "Skunkape Games"
      ],
      "short_description" : "Wield psychic powers against fearsome foes in this epic comedy saga. In The Devil’s Playhouse, an otherworldly power for controlling matter and space calls to the strongest and strangest who might wield it -- intergalactic warlords and eldritch gods, under-dwellers and scholars of the arcane.",
      "id" : 31240
    },
    {
      "background" : "",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31250/header.jpg?t=1613874572",
      "game" : "Sam & Max 304: Beyond the Alley of the Dolls",
      "publishers" : [
        "Skunkape Games"
      ],
      "short_description" : "Wield psychic powers against fearsome foes in this epic comedy saga. In The Devil’s Playhouse, an otherworldly power for controlling matter and space calls to the strongest and strangest who might wield it -- intergalactic warlords and eldritch gods, under-dwellers and scholars of the arcane.",
      "id" : 31250
    },
    {
      "background" : "",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31260/header.jpg?t=1613875188",
      "game" : "Sam & Max 305: The City That Dares Not Sleep",
      "publishers" : [
        "Skunkape Games"
      ],
      "short_description" : "Wield psychic powers against fearsome foes in this epic comedy saga. In The Devil’s Playhouse, an otherworldly power for controlling matter and space calls to the strongest and strangest who might wield it -- intergalactic warlords and eldritch gods, under-dwellers and scholars of the arcane.",
      "id" : 31260
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/34270/page_bg_generated_v6b.jpg?t=1673520718",
      "developers" : [
        "D3T Limited"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/34270/header.jpg?t=1673520718",
      "game" : "SEGA Mega Drive and Genesis Classics",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "SEGA’s collection of Mega Drive &amp; Genesis Classics comes to a new generation, now updated with even more features: online multiplayer, achievements, mirror mode, rewind, save states, VR and more! Over 50 classic games in one great package. Get into the classics!",
      "id" : 34270
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/204340/page_bg_generated_v6b.jpg?t=1701713072",
      "developers" : [
        "Croteam"
      ],
      "dlc" : [
        1585110
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/204340/header.jpg?t=1701713072",
      "game" : "Serious Sam 2",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "Serious Sam 2 is a shot of adrenaline to the hearts of first-person shooter fans across the world. This is serious!",
      "id" : 204340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/41070/page_bg_generated_v6b.jpg?t=1701713123",
      "developers" : [
        "Croteam"
      ],
      "dlc" : [
        41074,
        616060
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/41070/header.jpg?t=1701713123",
      "game" : "Serious Sam 3: BFE",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "Serious Sam 3: BFE is a prequel to the original indie fast action FPS and Game of the Year sensation - Serious Sam: The First Encounter!",
      "id" : 41070
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/41050/page_bg_generated_v6b.jpg?t=1601675032",
      "developers" : [
        "Croteam"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/41050/header.jpg?t=1601675032",
      "game" : "Serious Sam Classic: The First Encounter",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "Serious Sam is a high-adrenaline single-play and 16-player co-operative arcade-action FPS and Gamespot's Game of the Year 2001!",
      "id" : 41050
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/41060/page_bg_generated_v6b.jpg?t=1601675107",
      "developers" : [
        "Croteam"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/41060/header.jpg?t=1601675107",
      "game" : "Serious Sam Classic: The Second Encounter",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "Serious Sam Classic: The Second Encounter is a high-adrenaline single-play and 16-player co-operative arcade-action FPS and Gamespot's Game of the Month February 2002!",
      "id" : 41060
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/227780/page_bg_generated_v6b.jpg?t=1582213660",
      "developers" : [
        "Croteam",
        "Alligator Pit"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/227780/header.jpg?t=1582213660",
      "game" : "Serious Sam Classics: Revolution",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "Serious Sam is a high-adrenaline arcade-action shooter heavily focused on frantic action. In a world where cyberpunk meets fantasy-fiction and advanced technology is mixed with black magic and psycho-powers, Sam travels through four beautiful worlds, confronting countless foes on his way to Mental's base.",
      "id" : 227780
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/111600/page_bg_generated_v6b.jpg?t=1659054445",
      "developers" : [
        "Mommy's Best Games",
        "Croteam"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/111600/header.jpg?t=1659054445",
      "game" : "Serious Sam Double D XXL",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "Pile on the firepower with the revolutionary Gunstacker and fire all your weapons at once in a symphony of destruction!",
      "id" : 111600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/564310/page_bg_generated_v6b.jpg?t=1601674968",
      "developers" : [
        "Croteam"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/564310/header.jpg?t=1601674968",
      "game" : "Serious Sam Fusion 2017 (beta)",
      "publishers" : [
        "Devolver Digital",
        "Croteam"
      ],
      "short_description" : "Serious Sam Fusion is a central hub for several existing Serious Sam games developed by Croteam. Cool new features, engine upgrades, patches and updates will be released to existing owners for FREE!",
      "id" : 564310
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/41000/page_bg_generated_v6b.jpg?t=1601674786",
      "developers" : [
        "Croteam"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/41000/header.jpg?t=1601674786",
      "game" : "Serious Sam HD: The First Encounter",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "Serious Sam HD: The First Encounter is a visually upgraded and fully Steam supported remake version of the original high-adrenaline single-play and 16-player co-operative arcade-action FPS which was Gamespot's Game of the Year 2001 and which scored overall of 87% on Metacritic!",
      "id" : 41000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/201480/page_bg_generated_v6b.jpg?t=1659054358",
      "developers" : [
        "Vlambeer",
        "Croteam"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/201480/header.jpg?t=1659054358",
      "game" : "Serious Sam: The Random Encounter",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "Choose your weapons and take aim at the most random Serious Sam adventure yet!",
      "id" : 201480
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/750920/page_bg_generated_v6b.jpg?t=1709834464",
      "developers" : [
        "Eidos-Montréal",
        "Crystal Dynamics",
        "Nixxes",
        "Feral Interactive (Mac)",
        "Feral interactive (Linux)"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/750920/header.jpg?t=1709834464",
      "game" : "Shadow of the Tomb Raider: Definitive Edition",
      "publishers" : [
        "Crystal Dynamics",
        "Feral Interactive (Mac)",
        "Feral interactive (Linux)"
      ],
      "short_description" : "As Lara Croft races to save the world from a Maya apocalypse, she must become the Tomb Raider she is destined to be.",
      "id" : 750920
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/418240/page_bg_generated_v6b.jpg?t=1712147903",
      "developers" : [
        "Mimimi Games"
      ],
      "dlc" : [
        556900,
        571410
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/418240/header.jpg?t=1712147903",
      "game" : "Shadow Tactics: Blades of the Shogun",
      "publishers" : [
        "Daedalic Entertainment"
      ],
      "short_description" : "Shadow Tactics is a hardcore tactical stealth game set in Japan around the Edo period. A new Shogun seizes power over Japan and enforces nationwide peace. In his battle against conspiracy and rebellion, he recruits five specialists with extraordinary skills for assassination, sabotage and espionage.",
      "id" : 418240
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/233130/page_bg_generated_v6b.jpg?t=1710246206",
      "developers" : [
        "Flying Wild Hog"
      ],
      "dlc" : [
        2550000
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/233130/header.jpg?t=1710246206",
      "game" : "Shadow Warrior",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "Shadow Warrior is a bold reimagining of the classic 3D Realms’ shooter from independent developer Flying Wild Hog (Hard Reset) starring the legendary and quick-witted warrior Lo Wang.",
      "id" : 233130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/225160/page_bg_generated_v6b.jpg?t=1706008342",
      "developers" : [
        "General Arcade"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/225160/header.jpg?t=1706008342",
      "game" : "Shadow Warrior Classic Redux",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "The definitive version of the cult classic shooter, Shadow Warrior Classic Redux features remastered visuals and two massive expansion packs. Corporations rule every facet of life in a near-future Japan and employ Shadow Warriors, one-man armies of unparalleled skill, to protect their power and forcefully remove all opposition.",
      "id" : 225160
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/234650/page_bg_generated_v6b.jpg?t=1709809316",
      "developers" : [
        "Harebrained Schemes"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/234650/header.jpg?t=1709809316",
      "game" : "Shadowrun Returns",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "The unique cyberpunk-meets-fantasy world of Shadowrun has gained a huge cult following since its creation nearly 25 years ago. Now, creator Jordan Weisman returns to the world of Shadowrun, modernizing this classic game setting as a single player, turn-based tactical RPG.",
      "id" : 234650
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/300550/page_bg_generated_v6b.jpg?t=1709819435",
      "developers" : [
        "Harebrained Schemes"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/300550/header.jpg?t=1709819435",
      "game" : "Shadowrun: Dragonfall - Director's Cut",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Harebrained Schemes' biggest Shadowrun game to date, and the definitive Shadowrun RPG experience available on PC. Now a standalone title with tons of new content &amp; improvements!",
      "id" : 300550
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/20820/page_bg_generated_v6b.jpg?t=1674680770",
      "developers" : [
        "Sidhe"
      ],
      "dlc" : [
        20828
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/20820/header.jpg?t=1674680770",
      "game" : "Shatter",
      "publishers" : [
        "PikPok"
      ],
      "short_description" : "Shatter is a retro-inspired brick-breaking game that merges familiar action with unique twists and a modern crafted production approach.",
      "id" : 20820
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/350640/page_bg_generated_v6b.jpg?t=1667551536",
      "developers" : [
        "Frogwares"
      ],
      "dlc" : [
        459460
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/350640/header.jpg?t=1667551536",
      "game" : "Sherlock Holmes: The Devil's Daughter",
      "publishers" : [
        "Frogwares"
      ],
      "short_description" : "Experience a fantastic adventure with unique gameplay that blends investigation, action and exploration in a breath-taking thriller that will test the limits of your nerves and intelligence. Play as the great detective and track down evil in the darkest corners of London and the human soul…",
      "id" : 350640
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/16810/page_bg_generated_v6b.jpg?t=1573064277",
      "developers" : [
        "Firaxis Games"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/16810/header.jpg?t=1573064277",
      "game" : "Sid Meier's Civilization IV: Colonization",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Sid Meier's Civilization IV: Colonization is the third offering in the award winning Civilization IV series. A re-imagining of the classic Colonization game Sid Meier created in 1994, Sid Meier's Civilization IV: Colonization is a total conversion of the Civilization IV engine into a game experience in which players will lead a European...",
      "id" : 16810
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/3900/page_bg_generated_v6b.jpg?t=1573063101",
      "developers" : [
        "Firaxis Games"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/3900/header.jpg?t=1573063101",
      "game" : "Sid Meier's Civilization® IV",
      "publishers" : [
        "2K"
      ],
      "short_description" : "With over 6 million units sold and unprecedented critical acclaim from fans and press around the world, Sid Meier's Civilization is recognized as one of the greatest PC game franchises of all-time. Now, Sid Meier and Firaxis Games will take this incredibly fun and addictive game to new heights by adding new ways to play and win, new...",
      "id" : 3900
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/3900/page_bg_generated_v6b.jpg?t=1573063101",
      "developers" : [
        "Firaxis Games"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/3900/header.jpg?t=1573063101",
      "game" : "Sid Meier's Civilization® IV",
      "publishers" : [
        "2K"
      ],
      "short_description" : "With over 6 million units sold and unprecedented critical acclaim from fans and press around the world, Sid Meier's Civilization is recognized as one of the greatest PC game franchises of all-time. Now, Sid Meier and Firaxis Games will take this incredibly fun and addictive game to new heights by adding new ways to play and win, new...",
      "id" : 3900
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/8930/page_bg_generated_v6b.jpg?t=1579731804",
      "developers" : [
        "Firaxis Games",
        "Aspyr (Mac)",
        "Aspyr (Linux)"
      ],
      "dlc" : [
        235580,
        16870,
        235584,
        235585,
        16868,
        16860,
        16861,
        16862,
        16863,
        16867,
        99610,
        99611,
        16866,
        99614,
        99612
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/8930/header.jpg?t=1579731804",
      "game" : "Sid Meier's Civilization® V",
      "publishers" : [
        "2K",
        "Aspyr (Mac)",
        "Aspyr (Linux)"
      ],
      "short_description" : "Create, discover, and download new player-created maps, scenarios, interfaces, and more!",
      "id" : 8930
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/65980/page_bg_generated_v6b.jpg?t=1568764824",
      "developers" : [
        "Firaxis Games",
        "Aspyr (Mac)",
        "Aspyr (Linux)"
      ],
      "dlc" : [
        304010,
        353830
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/65980/header.jpg?t=1568764824",
      "game" : "Sid Meier's Civilization®: Beyond Earth™",
      "publishers" : [
        "2K",
        "Aspyr (Mac)",
        "Aspyr (Linux)"
      ],
      "short_description" : "Sid Meier’s Civilization: Beyond Earth is a new science-fiction-themed entry into the award winning Civilization series. As part of an expedition sent to find a home beyond Earth, lead your people into a new frontier, explore and colonize an alien planet and create a new civilization in space.",
      "id" : 65980
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/289070/page_bg_generated_v6b.jpg?t=1708651986",
      "developers" : [
        "Firaxis Games",
        "Aspyr (Mac)",
        "Aspyr (Linux)"
      ],
      "dlc" : [
        2158250,
        1308090,
        947510,
        645402,
        1478300,
        1436950,
        1388850,
        1284470,
        1270540,
        1253990
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg?t=1708651986",
      "game" : "Sid Meier’s Civilization® VI",
      "publishers" : [
        "2K",
        "Aspyr (Mac)",
        "Aspyr (Linux)"
      ],
      "short_description" : "Civilization VI is the newest installment in the award winning Civilization Franchise. Expand your empire, advance your culture and go head-to-head against history’s greatest leaders. Will your civilization stand the test of time?",
      "id" : 289070
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/397340/page_bg_generated_v6b.jpg?t=1709675790",
      "developers" : [
        "Jundroo, LLC"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/397340/header.jpg?t=1709675790",
      "game" : "SimplePlanes",
      "publishers" : [
        "Jundroo, LLC"
      ],
      "short_description" : "Build airplanes by snapping parts together, designing wing sections, and attaching engines. At any time, you can strap yourself into the cockpit and see how it flies with realistic physics. If you're not in the mood for building, over 100,000 airplanes are available to download for free.",
      "id" : 397340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/307690/page_bg_generated_v6b.jpg?t=1602800785",
      "developers" : [
        "United Front Games",
        "Feral Interactive (Mac)"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Carreras",
          "id" : "9"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/307690/header.jpg?t=1602800785",
      "game" : "Sleeping Dogs: Definitive Edition",
      "publishers" : [
        "Square Enix",
        "Feral Interactive (Mac)"
      ],
      "short_description" : "The Definitive Edition of the critically acclaimed, award winning open-world action adventure, reworked, rebuilt and re-mastered for the new generation. With all previously available DLC included and a wealth of tech and visual improvements, Hong Kong has never felt so alive.",
      "id" : 307690
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/473530/page_bg_generated_v6b.jpg?t=1676466112",
      "developers" : [
        "Fabraz"
      ],
      "dlc" : [
        613000
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/473530/header.jpg?t=1676466112",
      "game" : "Slime-san: Superslime Edition",
      "publishers" : [
        "Headup Publishing"
      ],
      "short_description" : "Slime-san was minding his own business when suddenly… A giant worm appeared and gobbled him up! Deep within the worm’s belly, Slime-san has to face a decision: Be digested by the incoming wall of stomach acid... Or jump, slide and slime his way through the worm and back out its mouth!",
      "id" : 473530
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/238090/page_bg_generated_v6b.jpg?t=1601483606",
      "developers" : [
        "Rebellion"
      ],
      "dlc" : [
        305181,
        305182,
        305183,
        305184,
        305185,
        305186,
        305187,
        305180,
        312680,
        312690,
        312740,
        326430,
        326431
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/238090/header.jpg?t=1601483606",
      "game" : "Sniper Elite 3",
      "publishers" : [
        "Rebellion"
      ],
      "short_description" : "Sniper Elite 3 is a tactical third-person shooter that combines stealth, gameplay choice and genre-defining ballistics with huge, open levels and the exotic terrain of World War 2 North Africa.",
      "id" : 238090
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/312660/page_bg_generated_v6b.jpg?t=1681207252",
      "developers" : [
        "Rebellion"
      ],
      "dlc" : [
        474740,
        474763,
        474760,
        474761,
        474762,
        513034,
        474764,
        513032,
        474765,
        513031,
        513033,
        474766,
        513030
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/312660/header.jpg?t=1681207252",
      "game" : "Sniper Elite 4",
      "publishers" : [
        "Rebellion"
      ],
      "short_description" : "Discover unrivalled sniping freedom in the largest and most advanced World War 2 shooter ever built. Experience tactical third-person combat, gameplay choice and epic longshots across gigantic levels as you liberate wartime Italy from the grip of Fascism.",
      "id" : 312660
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1029690/page_bg_generated_v6b.jpg?t=1698833632",
      "developers" : [
        "Rebellion"
      ],
      "dlc" : [
        2273730,
        1875170,
        2167703,
        2167702,
        2167701,
        1724941,
        2167700,
        2228230,
        2161920,
        1724942,
        2053022,
        2053021,
        2053020,
        1724940,
        1872750,
        1872751
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1029690/header.jpg?t=1698833632",
      "game" : "Sniper Elite 5",
      "publishers" : [
        "Rebellion"
      ],
      "short_description" : "The award-winning series returns as Karl Fairburne fights to uncover Project Kraken in 1944 France. The genre-defining authentic sniping, with enhanced kill cam, has never looked or felt better as you fight across immersive maps to stop the Nazi war machine in its tracks.",
      "id" : 1029690
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/63380/page_bg_generated_v6b.jpg?t=1601483610",
      "developers" : [
        "Rebellion"
      ],
      "dlc" : [
        222021,
        210561,
        63398,
        63399
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/63380/header.jpg?t=1601483610",
      "game" : "Sniper Elite V2",
      "publishers" : [
        "Rebellion"
      ],
      "short_description" : "In the dark days of the end of World War Two amidst the ruins of Berlin, one bullet can change history…",
      "id" : 63380
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/728740/page_bg_generated_v6b.jpg?t=1601483608",
      "developers" : [
        "Rebellion"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/728740/header.jpg?t=1601483608",
      "game" : "Sniper Elite V2 Remastered",
      "publishers" : [
        "Rebellion"
      ],
      "short_description" : "En los obscuros días del final de la Segunda Guerra Mundial en el centro de las ruinas de Berlín, una sola bala pueda cambiar el curso de la historia… El francotirador de élite, Karl Fairburne regresa al frente en la remasterización de esta galardonada experiencia de sigilo y acción.",
      "id" : 728740
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/973580/page_bg_generated_v6b.jpg?t=1692600844",
      "developers" : [
        "Underdog Studio"
      ],
      "dlc" : [
        1174630,
        1174631,
        1174632,
        1213590,
        1228720,
        1244510,
        1502350,
        1674634,
        1674635,
        1674636,
        1674637
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/973580/header.jpg?t=1692600844",
      "game" : "Sniper Ghost Warrior Contracts",
      "publishers" : [
        "CI Games"
      ],
      "short_description" : "Conviértete en el asesino más letal en el juego de francotiradores más realista hasta la fecha. Disfruta de una campaña para un jugador inmersiva con grandes mapas con muchas opciones. Tendrás que combinar pensamiento táctico, un enfoque sigiloso y disparos precisos a larga distancia.",
      "id" : 973580
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1338770/page_bg_generated_v6b.jpg?t=1692600766",
      "developers" : [
        "Underdog Studio"
      ],
      "dlc" : [
        1575881,
        1575882,
        1575883,
        1575884,
        1575885,
        1575887,
        1575888,
        1576260,
        1587590,
        1587591,
        1587592,
        1587593,
        1587594,
        1587595,
        1587596,
        1587597,
        1587598,
        1587599,
        1587620,
        1587621,
        1587622,
        1587623,
        1619170
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1338770/header.jpg?t=1692600766",
      "game" : "Sniper Ghost Warrior Contracts 2",
      "publishers" : [
        "CI Games"
      ],
      "short_description" : "SGW Contracts 2 es un shooter de guerra moderna situado en Oriente Medio. Eres Raven, un asesino francotirador, y tu deber es eliminar a tus objetivos en la intensa campaña de un jugador. Dispara desde distancias extremas, superiores a los 1000 metros, en esta nueva y emocionante entrega.",
      "id" : 1338770
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/97000/page_bg_generated_v6b.jpg?t=1630650368",
      "developers" : [
        "Murudai"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/97000/header.jpg?t=1630650368",
      "game" : "Solar 2",
      "publishers" : [
        "Murudai"
      ],
      "short_description" : "Dynamic abstract sandbox universe. Changes and evolves as you do.",
      "id" : 97000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/71340/page_bg_generated_v6b.jpg?t=1704380608",
      "developers" : [
        "Devil's Details"
      ],
      "dlc" : [
        200590
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/71340/header.jpg?t=1704380608",
      "game" : "Sonic Generations Collection",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Celebrate 20 years of Sonic in an all new adventure that delivers a definitive experience to Sonic fans new and old!",
      "id" : 71340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/242570/page_bg_generated_v6b.jpg?t=1572552321",
      "developers" : [
        "Full Control Studios"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/242570/header.jpg?t=1572552321",
      "game" : "Space Hulk",
      "publishers" : [
        "Full Control"
      ],
      "short_description" : "&quot;WE ARE THE VANGUARD OF HONOUR. THE CUTTING EDGE OF THE BLOOD ANGELS. WE BRING DEATH.&quot;The legendary Space Hulk returns to Windows PC, Mac and Linux in this epic turn based strategy game. Set in the Warhammer 40,000 universe, an intriguing story of legendary battles and heroic actions unfolds.",
      "id" : 242570
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/107200/page_bg_generated_v6b.jpg?t=1666986024",
      "developers" : [
        "MinMax Games Ltd."
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/107200/header.jpg?t=1666986024",
      "game" : "Space Pirates and Zombies",
      "publishers" : [
        "MinMax Games Ltd."
      ],
      "short_description" : "Explore a randomly generated Galaxy populated with factions, enemies, missions, and items providing you with a unique experience each time you play.",
      "id" : 107200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/355800/page_bg_generated_v6b.jpg?t=1651048669",
      "developers" : [
        "Passtech Games"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/355800/header.jpg?t=1651048669",
      "game" : "Space Run Galaxy",
      "publishers" : [
        "Focus Entertainment"
      ],
      "short_description" : "Space Run Galaxy is the sequel to Space Run, the game from one-man studio Passtech, which seduced hundreds of thousands of players with its dynamic and original gameplay. By twisting the tower-defense game style, Space Run offered an addictive real-time spaceship construction strategy experience.",
      "id" : 355800
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/92800/page_bg_generated_v6b.jpg?t=1667072182",
      "developers" : [
        "Zachtronics"
      ],
      "dlc" : [
        92803
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/92800/header.jpg?t=1667072182",
      "game" : "SpaceChem",
      "publishers" : [
        "Zachtronics"
      ],
      "short_description" : "Zachtronics is back with an ambitious new design-based puzzle game. Take on the role of a Reactor Engineer working for SpaceChem, the leading chemical synthesizer for frontier colonies. Construct elaborate factories to transform raw materials into valuable chemical products!",
      "id" : 92800
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9000/page_bg_generated_v6b.jpg?t=1663261973",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9000/header.jpg?t=1663261973",
      "game" : "Spear of Destiny",
      "publishers" : [
        "id Software"
      ],
      "short_description" : "It's World War II and you are B.J. Blazkowicz, the Allies' most valuable agent. In the midst of the German Blitzkrieg, the Spear that pierced the side of Christ is taken from Versailles by the Nazis and secured in the impregnable Castle Wolfenstein. According to legend, no man can be defeated when he has the Spear.",
      "id" : 9000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/50300/page_bg_generated_v6b.jpg?t=1706567828",
      "developers" : [
        "YAGER"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/50300/header.jpg?t=1706567828",
      "game" : "Spec Ops: The Line",
      "publishers" : [
        "2K",
        "Missing Link Games"
      ],
      "short_description" : "A Third-Person modern military Shooter designed to challenge players' morality by putting them in the middle of unspeakable situations.",
      "id" : 50300
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9900/page_bg_generated_v6b.jpg?t=1712608666",
      "developers" : [
        "Cryptic Studios"
      ],
      "genres" : [
        {
          "description" : "Multijugador masivo",
          "id" : "29"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9900/header.jpg?t=1712608666",
      "game" : "Star Trek Online",
      "publishers" : [
        "Arc Games"
      ],
      "short_description" : "In Star Trek Online, the Star Trek universe appears for the first time on a truly massive scale. Players take the captain's chair as they command their own starship and crew. Explore strange new worlds, seek out new life and new civilizations, and boldly go where no one has gone before.",
      "id" : 9900
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/361670/page_bg_generated_v6b.jpg?t=1586467460",
      "developers" : [
        "Totally Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/361670/header.jpg?t=1586467460",
      "game" : "STAR WARS™ - X-Wing Alliance™",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "A neutral family fights for its business - and its survival - and is swept up in the struggle against the encroaching Empire. You must defy the strong-arm tactics of a rival family who will stop at nothing to destroy your trading company.",
      "id" : 361670
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/354430/page_bg_generated_v6b.jpg?t=1586470086",
      "developers" : [
        "Lucasfim"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/354430/header.jpg?t=1586470086",
      "game" : "STAR WARS™ - X-Wing Special Edition",
      "publishers" : [
        "LucasArts",
        "Lucasfim",
        "Disney"
      ],
      "short_description" : "Against the overwhelming might of the Empire stands a small but growing Rebel Alliance. Scattered resistance groups are uniting and what is needed most now are Starfighter pilots. Will you join their struggle to end this tyranny and become a hero of the Rebellion?",
      "id" : 354430
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/32400/page_bg_generated_v6b.jpg?t=1709124796",
      "developers" : [
        "LucasArts"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/32400/header.jpg?t=1709124796",
      "game" : "STAR WARS™ Dark Forces (Classic, 1995)",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "Behind a veil of secrecy the evil Empire is creating a doomsday army - one that, if finished, will become the final cog in the Empire's arsenal of terror and domination. Your Mission? Join the Rebel Alliance's covert operations division, infiltrate the Empire.",
      "id" : 32400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/356500/page_bg_generated_v6b.jpg?t=1608334827",
      "developers" : [
        "Ensemble Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/356500/header.jpg?t=1608334827",
      "game" : "STAR WARS™ Galactic Battlegrounds Saga",
      "publishers" : [
        "Disney",
        "Lucasfilm",
        "LucasArts"
      ],
      "short_description" : "Lead the great armies of the Star Wars™ Episode II: Attack of the Clones saga in intense real-time strategy clashes. Enter the fray as the Galactic Empire, Rebel Alliance, Wookies, Trade Federation, Gungans or Royal Naboo to determine the course of the Galactic Civil War.",
      "id" : 356500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6020/page_bg_generated_v6b.jpg?t=1586462966",
      "developers" : [
        "Raven Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6020/header.jpg?t=1586462966",
      "game" : "STAR WARS™ Jedi Knight - Jedi Academy™",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "Forge your weapon and follow the path of the Jedi Jedi Knight: Jedi Academy is the latest installment of the highly acclaimed Jedi Knight series. Take on the role of a new student eager to learn the ways of the Force from Jedi Master Luke Skywalker.",
      "id" : 6020
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/32390/page_bg_generated_v6b.jpg?t=1586469827",
      "developers" : [
        "LucasArts"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/32390/header.jpg?t=1586469827",
      "game" : "STAR WARS™ Jedi Knight - Mysteries of the Sith™",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "It is five years after Kyle's victory over the seven dark Jedi. Invading Imperial forces advance upon a quiet Rebel outpost, interrupting Kyle's training of a brave new Jedi, Mara Jade. First introduced in Timothy Zahn's award-winning Star Wars novel, Heir to the Empire, Mara Jade blends her past experiences as a one time smuggler and...",
      "id" : 32390
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6030/page_bg_generated_v6b.jpg?t=1586465683",
      "developers" : [
        "Raven Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6030/header.jpg?t=1586465683",
      "game" : "STAR WARS™ Jedi Knight II - Jedi Outcast™",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "The Legacy of Star Wars Dark Forces™ and Star Wars® Jedi Knight lives on in the intense first-person action of Jedi Outcast.",
      "id" : 6030
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/32380/page_bg_generated_v6b.jpg?t=1586466719",
      "developers" : [
        "LucasArts"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/32380/header.jpg?t=1586466719",
      "game" : "STAR WARS™ Jedi Knight: Dark Forces II",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "Jedi Knight: Dark Forces II picks up where the award-winning Dark Forces™ game left off...with even more features and firepower in dazzling 3D graphics. As Kyle Katarn, you must acquire a lightsaber and learn the ways of the Force to become a Jedi Knight.",
      "id" : 32380
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/32370/page_bg_generated_v6b.jpg?t=1681144833",
      "developers" : [
        "BioWare",
        "Aspyr (Mac)"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/32370/header.jpg?t=1681144833",
      "game" : "STAR WARS™ Knights of the Old Republic™",
      "publishers" : [
        "LucasArts",
        "Aspyr (Mac)",
        "Disney",
        "Lucasfilm"
      ],
      "short_description" : "It is four thousand years before the Galactic Empire and hundreds of Jedi Knights have fallen in battle against the ruthless Sith. You are the last hope of the Jedi Order. Can you master the awesome power of the Force on your quest to save the Republic? Or will you fall to the lure of the dark side?",
      "id" : 32370
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/208580/page_bg_generated_v6b.jpg?t=1699053053",
      "developers" : [
        "Obsidian Entertainment",
        "Aspyr (Mac, Linux, & Windows Update)"
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/208580/header.jpg?t=1699053053",
      "game" : "STAR WARS™ Knights of the Old Republic™ II - The Sith Lords™",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Aspyr (Mac, Linux)"
      ],
      "short_description" : "5 years after the events of the award winning original, the Sith are on the verge of crushing the Old Republic. As a lone Jedi, will you follow the light side or succumb to the dark?",
      "id" : 208580
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/6000/page_bg_generated_v6b.jpg?t=1586465290",
      "developers" : [
        "LucasArts"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/6000/header.jpg?t=1586465290",
      "game" : "STAR WARS™ Republic Commando™",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "You are the leader of an elite squad of Republic Commandos, your mission is to infiltrate, dominate, and ultimately, annihilate the enemy. Your squad will follow your orders and your lead, working together as a team - instinctively, intelligently, instantly. You are their leader. They are your weapon.",
      "id" : 6000
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/361690/page_bg_generated_v6b.jpg?t=1586468836",
      "developers" : [
        "Totally Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/361690/header.jpg?t=1586468836",
      "game" : "STAR WARS™ X-Wing vs TIE Fighter - Balance of Power Campaigns™",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "Real-time against real pilots; this is Star Wars space combat as it was meant to be! Featuring challenging real-time dogfights of 2 to 8 players, Star Wars™: X-Wing vs. TIE Fighter is one of the most historically significant space combat simulators ever made.",
      "id" : 361690
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/456540/page_bg_generated_v6b.jpg?t=1586469951",
      "developers" : [
        "LucasArts"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/456540/header.jpg?t=1586469951",
      "game" : "STAR WARS™: Rebel Assault I + II",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "ake your T16 through Beggar's Canyon...Then dodge asteroids and blast TIE fighters in a deep space rumble... tackle a fleet of menacing AT-ATs on the icy tundra of Hoth...and ultimately annihilate Vader and the evil Empire with a kamikaze trench run on the infamous Death Star.",
      "id" : 456540
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/355250/page_bg_generated_v6b.jpg?t=1586467354",
      "developers" : [
        "Totally Games"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/355250/header.jpg?t=1586467354",
      "game" : "STAR WARS™: TIE Fighter Special Edition",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "The Imperial Navy is called upon to eradicate the last of the rebellion and restore law and order. As an Imperial navy starfighter pilot, you will safeguard imperiled lives thoughout the galaxy. Join the Emperor's cause in eliminating the Rebel uprising as the Empire strikes back!",
      "id" : 355250
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/236150/page_bg_generated_v6b.jpg?t=1667659479",
      "developers" : [
        "Little Green Men Games"
      ],
      "dlc" : [
        345870,
        371060,
        411420,
        1239150
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/236150/header.jpg?t=1667659479",
      "game" : "Starpoint Gemini 2",
      "publishers" : [
        "Little Green Men Games"
      ],
      "short_description" : "Captain your own space ship and roam the galaxy in 3D in this tactical space simulator with tons of RPG depth ! Space has never looked so inviting - but images can betray...It has been two years since the end of the second Gemini war, the situation in the wartorn system is further from resolution than ever.",
      "id" : 236150
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1202130/page_bg_generated_v6b.jpg?t=1710416240",
      "developers" : [
        "The Artistocrats"
      ],
      "dlc" : [
        2139990,
        2139991
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1202130/header.jpg?t=1710416240",
      "game" : "Starship Troopers: Terran Command",
      "publishers" : [
        "Slitherine Ltd."
      ],
      "short_description" : "Lead the Mobile Infantry in this RTS game set in the Starship Troopers film universe. Balance your army composition with a diverse set of unit types, overcome line-of-sight and line-of-fire challenges through tactical positioning, and use special abilities to smash the Arachnid hordes!",
      "id" : 1202130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/241540/page_bg_generated_v6b.jpg?t=1573205685",
      "developers" : [
        "Undead Labs"
      ],
      "dlc" : [
        259040,
        259041
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/241540/header.jpg?t=1573205685",
      "game" : "State of Decay",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "The end is here. Life as you knew it has gone to hell after the mother of all zombie outbreaks. Now you and the few scattered survivors must band together to survive and rebuild in a 3rd-person action game set in a dynamic open world.",
      "id" : 241540
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/329430/page_bg_generated_v6b.jpg?t=1701649701",
      "developers" : [
        "Undead Labs"
      ],
      "dlc" : [
        1274660,
        397220
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/329430/header.jpg?t=1701649701",
      "game" : "State of Decay: YOSE",
      "publishers" : [
        "Xbox Game Studios"
      ],
      "short_description" : "Make your stand against the collapse of society in the ultimate zombie survival-fantasy game. Explore an open world full of dangers and opportunities that respond to your every decision. Recruit a community of playable survivors, each with their own unique skills and talents.",
      "id" : 329430
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2272400/page_bg_generated_v6b.jpg?t=1710433818",
      "developers" : [
        "Galaxy Grove"
      ],
      "dlc" : [
        2620620,
        2621730
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2272400/header_alt_assets_2.jpg?t=1710433818",
      "game" : "Station to Station",
      "publishers" : [
        "Prismatika"
      ],
      "short_description" : "“Station to Station” es un juego relajante y minimalista sobre conexiones ferroviarias. ¡Ponte tu gorro de conductor y usa la magia de los trenes para darle vida a este mundo de vóxeles!",
      "id" : 2272400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/281990/page_bg_generated_v6b.jpg?t=1712856437",
      "developers" : [
        "Paradox Development Studio"
      ],
      "dlc" : [
        2863190,
        2840100,
        2729490,
        553280,
        716670,
        944290,
        1140001,
        1522090,
        1889490,
        2380030,
        2534090,
        518910,
        642750,
        844810,
        1045980,
        2277860,
        498870,
        756010,
        1140000,
        1341520,
        1749080,
        2115770,
        616191,
        492740,
        497660,
        633310,
        2863060,
        2863080,
        2863180
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/281990/header.jpg?t=1712856437",
      "game" : "Stellaris",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "Explore a galaxy full of wonders in this sci-fi grand strategy game from Paradox Development Studios. Interact with diverse alien races, discover strange new worlds with unexpected events and expand the reach of your empire. Each new adventure holds almost limitless possibilities.",
      "id" : 281990
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/312670/page_bg_generated_v6b.jpg?t=1589878497",
      "developers" : [
        "Rebellion"
      ],
      "dlc" : [
        920960,
        826080,
        826081,
        826082,
        826084,
        826083,
        826085,
        826086,
        826088,
        826087
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/312670/header.jpg?t=1589878497",
      "game" : "Strange Brigade",
      "publishers" : [
        "Rebellion"
      ],
      "short_description" : "Embark on an exotic journey into danger in this rip-roaring 1930s third person adventure for 1-4 players! Encounter pulse-pounding action, treacherous traps and tales of derring-do!",
      "id" : 312670
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/310950/page_bg_generated_v6b.jpg?t=1705467952",
      "developers" : [
        "CAPCOM Co., Ltd."
      ],
      "dlc" : [
        1825950,
        1503030,
        1405400,
        1405401,
        1233100,
        995950,
        789460,
        590750,
        480520,
        475230,
        807290,
        444680,
        1403540
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1705467952",
      "game" : "Street Fighter V",
      "publishers" : [
        "CAPCOM Co., Ltd."
      ],
      "short_description" : "Experience the intensity of head-to-head battles with Street Fighter® V! Choose from 16 iconic characters, then battle against friends online or offline with a robust variety of match options.",
      "id" : 310950
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/235210/page_bg_generated_v6b.jpg?t=1712193426",
      "developers" : [
        "Double Helix Games",
        "Capcom"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/235210/header.jpg?t=1712193426",
      "game" : "STRIDER™ / ストライダー飛竜®",
      "publishers" : [
        "Capcom"
      ],
      "short_description" : "Strider returns in a brand new adventure, complete with incredible side-scrolling action, and lightning fast combat all in a massive interconnected world! Download the full game February 19th and become the original assassin!",
      "id" : 235210
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/373930/page_bg_generated_v6b.jpg?t=1711621442",
      "developers" : [
        "Kite Games"
      ],
      "dlc" : [
        501560,
        606080,
        813390,
        873870,
        873871,
        1341590
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/373930/header.jpg?t=1711621442",
      "game" : "Sudden Strike 4",
      "publishers" : [
        "Kalypso Media"
      ],
      "short_description" : "Sudden Strike is back! The beloved Real Time Strategy series returns, this time with bigger battlefields, more units, better graphics, new scenarios and legendary commanders – making Sudden Strike 4 more tactical and realistic than ever before!",
      "id" : 373930
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/384250/page_bg_generated_v6b.jpg?t=1546792414",
      "developers" : [
        "Alex Rose"
      ],
      "dlc" : [
        615500
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/384250/header.jpg?t=1546792414",
      "game" : "Super Rude Bear Resurrection",
      "publishers" : [
        "Alex Rose Games"
      ],
      "short_description" : "Super Rude Bear Resurrection is an ultra-tight, masocore platformer that anyone can beat! Use your corpses to get ahead, or take on the ultimate challenge and try to defeat the entire game without dying!",
      "id" : 384250
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/464920/page_bg_generated_v6b.jpg?t=1701955588",
      "developers" : [
        "Haemimont Games",
        "Abstraction"
      ],
      "dlc" : [
        1816780,
        1658001,
        1658000,
        1498760,
        1657990,
        1497160,
        952890,
        1042360,
        801670,
        952892,
        952891,
        801710,
        801690,
        801650
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/464920/header.jpg?t=1701955588",
      "game" : "Surviving Mars",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "There will be challenges to overcome. Execute your strategy and improve your colony’s chances of survival while unlocking the mysteries of this alien world. Are you ready? Mars is waiting for you.",
      "id" : 464920
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/65730/page_bg_generated_v6b.jpg?t=1635943534",
      "developers" : [
        "Bohemia Interactive"
      ],
      "dlc" : [
        65733
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/65730/header.jpg?t=1635943534",
      "game" : "Take On Helicopters",
      "publishers" : [
        "Bohemia Interactive"
      ],
      "short_description" : "The brand new helicopter game from independent developers Bohemia Interactive – creators of the award-winning military-Sim series Arma 2. Built upon over 10 years of experience in cutting-edge simulator development, Take On Helicopters immerses players within beautifully rich landscapes and an authentic flight model.",
      "id" : 65730
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/20/page_bg_generated_v6b.jpg?t=1579634708",
      "developers" : [
        "Valve"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/20/header.jpg?t=1579634708",
      "game" : "Team Fortress Classic",
      "publishers" : [
        "Valve"
      ],
      "short_description" : "Estás ante uno de los juegos de acción en línea más populares de toda la historia. Team Fortress Classic incorpora más de nueve tipos de personaje (como, por ejemplo, el médico, el espía y el experto en explosivos) y los lanza a un combate en línea único.",
      "id" : 20
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1361510/page_bg_generated_v6b.jpg?t=1700575342",
      "developers" : [
        "Tribute Games Inc."
      ],
      "dlc" : [
        2348930
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1361510/header.jpg?t=1700575342",
      "game" : "Teenage Mutant Ninja Turtles: Shredder's Revenge",
      "publishers" : [
        "Dotemu",
        "Gamera Games"
      ],
      "short_description" : "Teenage Mutant Ninja Turtles: Shredder’s Revenge reunites Leonardo, Michelangelo, Donatello and Raphael as they kick shell in a beautifully realized beat ’em up.",
      "id" : 1361510
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/418180/page_bg_generated_v6b.jpg?t=1709825862",
      "developers" : [
        "HeroCraft"
      ],
      "dlc" : [
        527010,
        651020,
        746820,
        1073630
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/418180/header.jpg?t=1709825862",
      "game" : "Tempest: Pirate Action RPG",
      "publishers" : [
        "HeroCraft PC"
      ],
      "short_description" : "Tempest is a Pirate Open World Action RPG where you rove the seas across three continents filled with dozens of colonies and forts, hundreds of quests and countless ships to plunder. Customize your ship, trade, challenge fellow pirates and face mythical monsters such as the Kraken and Leviathan!",
      "id" : 418180
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/954740/page_bg_generated_v6b.jpg?t=1701952741",
      "developers" : [
        "Teyon"
      ],
      "dlc" : [
        1451140,
        1755190
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/954740/header.jpg?t=1701952741",
      "game" : "Terminator: Resistance",
      "publishers" : [
        "Reef Entertainment"
      ],
      "short_description" : "Terminator: Resistance es un shooter en primera persona basado en la época de &quot;Future War&quot;, sobre la cual pudimos descubrir algunos detalles gracias a las legendarias películas &quot;TERMINATOR&quot; y &quot;T2: Judgment Day&quot;. Las máquinas están destinadas a la derrota, ¿pero a qué precio?",
      "id" : 954740
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/105600/page_bg_generated_v6b.jpg?t=1666290860",
      "developers" : [
        "Re-Logic"
      ],
      "dlc" : [
        409210,
        1323320
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860",
      "game" : "Terraria",
      "publishers" : [
        "Re-Logic"
      ],
      "short_description" : "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!",
      "id" : 105600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/41900/page_bg_generated_v6b.jpg?t=1689781985",
      "developers" : [
        "inXile Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/41900/header.jpg?t=1689781985",
      "game" : "The Bard's Tale ARPG: Remastered and Resnarkled",
      "publishers" : [
        "inXile Entertainment"
      ],
      "short_description" : "You are the Bard, a selfish rogue weary of pointless sub-quests and rat-infested cellars. Now includes original classic games The Bard’s Tale 1, 2 &amp; 3!",
      "id" : 41900
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/65930/page_bg_generated_v6b.jpg?t=1587584277",
      "developers" : [
        "2K Marin"
      ],
      "dlc" : [
        66000,
        66001,
        66002
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/65930/header.jpg?t=1587584277",
      "game" : "The Bureau: XCOM Declassified",
      "publishers" : [
        "2K"
      ],
      "short_description" : "The year is 1962 and the Cold War has the nation gripped by fear.  A top-secret government unit called The Bureau begins investigating a series of mysterious attacks by an enemy more powerful than communism.",
      "id" : 65930
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22320/page_bg_generated_v6b.jpg?t=1569959880",
      "developers" : [
        "Bethesda Game Studios"
      ],
      "dlc" : [
        451410
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22320/header.jpg?t=1569959880",
      "game" : "The Elder Scrolls III: Morrowind® Game of the Year Edition",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "The Elder Scrolls III: Morrowind® Game of the Year Edition includes Morrowind plus all of the content from the Bloodmoon and Tribunal expansions. The original Mod Construction Set is not included in this package. An epic, open-ended single-player RPG, Morrowind allows you to create and play any kind of character imaginable.",
      "id" : 22320
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22330/page_bg_generated_v6b.jpg?t=1712869953",
      "developers" : [
        "Bethesda Game Studios"
      ],
      "dlc" : [
        452070
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22330/header.jpg?t=1712869953",
      "game" : "The Elder Scrolls IV: Oblivion® Game of the Year Edition",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "The Elder Scrolls IV: Oblivion® Game of the Year Edition presents one of the best RPGs of all time like never before. Step inside the most richly detailed and vibrant game-world ever created. With a powerful combination of freeform gameplay and unprecedented graphics, you can unravel the main quest at your own pace or explore the vast...",
      "id" : 22330
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/72850/page_bg_generated_v6b.jpg?t=1647357402",
      "developers" : [
        "Bethesda Game Studios"
      ],
      "dlc" : [
        1240360
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/72850/header.jpg?t=1647357402",
      "game" : "The Elder Scrolls V: Skyrim",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "EPIC FANTASY REBORN The next chapter in the highly anticipated Elder Scrolls saga arrives from the makers of the 2006 and 2008 Games of the Year, Bethesda Game Studios. Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose.",
      "id" : 72850
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/489830/page_bg_generated_v6b.jpg?t=1701807334",
      "developers" : [
        "Bethesda Game Studios"
      ],
      "dlc" : [
        1746860
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1701807334",
      "game" : "The Elder Scrolls V: Skyrim Special Edition",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "The Elder Scrolls V: Skyrim Special Edition, ganador de más de 200 premios al “Juego del año”, da vida a la fantasía épica con un nivel de detalle asombroso. La Special Edition incluye el juego aclamado por la crítica y complementos con nuevas funcionalidades.",
      "id" : 489830
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/306130/page_bg_generated_v6b.jpg?t=1712247229",
      "developers" : [
        "ZeniMax Online Studios"
      ],
      "dlc" : [
        2172860,
        1049240,
        1382241,
        460760,
        2662630
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Multijugador masivo",
          "id" : "29"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/306130/header.jpg?t=1712247229",
      "game" : "The Elder Scrolls® Online",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Únete a más de 22 millones de jugadores en este RPG multijugador online y vive una aventura sin límites en el mundo de The Elder Scrolls",
      "id" : 306130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/215530/page_bg_generated_v6b.jpg?t=1573827571",
      "developers" : [
        "NeocoreGames"
      ],
      "dlc" : [
        215535,
        215534,
        215536,
        215533
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/215530/header.jpg?t=1573827571",
      "game" : "The Incredible Adventures of Van Helsing",
      "publishers" : [
        "NeocoreGames"
      ],
      "short_description" : "Put on your wide-brimmed hat, grab your weapons and embark on an incredible adventure in the gothic-noir world of Borgovia, where mad science threatens the fragile peace between monster and mortal.",
      "id" : 215530
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/400170/page_bg_generated_v6b.jpg?t=1618303802",
      "developers" : [
        "NeocoreGames"
      ],
      "dlc" : [
        416400
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/400170/header.jpg?t=1618303802",
      "game" : "The Incredible Adventures of Van Helsing: Final Cut",
      "publishers" : [
        "NeocoreGames"
      ],
      "short_description" : "Embark on an adventure in a gothic-noir world, where mad science threatens the peace between monsters and mortals. The Incredible Adventures of Van Helsing: Final Cut is definitive edition of the trilogy with six playable classes and a new endgame mode with a huge variety of open missions!",
      "id" : 400170
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/222940/page_bg_generated_v6b.jpg?t=1634687660",
      "developers" : [
        "SNK CORPORATION"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/222940/header.jpg?t=1634687660",
      "game" : "THE KING OF FIGHTERS XIII STEAM EDITION",
      "publishers" : [
        "SNK CORPORATION"
      ],
      "short_description" : "[[i]i]“THE KING OF FIGHTERS XIII”[/i], SNK PLAYMORE’s flagship 2D versus fighting title returns in an ultimate version on Steam!!",
      "id" : 222940
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/40930/page_bg_generated_v6b.jpg?t=1568757248",
      "developers" : [
        "The Odd Gentlemen"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/40930/header.jpg?t=1568757248",
      "game" : "The Misadventures of P.B. Winterbottom",
      "publishers" : [
        "2K"
      ],
      "short_description" : "Enter a macabre and comical silent world filled with mischief, time travel and delicious pie. Includes Steam Achievements, Cloud, and Leaderboards!",
      "id" : 40930
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/32360/page_bg_generated_v6b.jpg?t=1684960488",
      "developers" : [
        "LucasArts"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/32360/header.jpg?t=1684960488",
      "game" : "The Secret of Monkey Island: Special Edition",
      "publishers" : [
        "LucasArts",
        "Lucasfilm",
        "Disney"
      ],
      "short_description" : "Back by popular demand, The Secret of Monkey Island™: Special Edition faithfully re-imagines the internationally-acclaimed classic game (originally released in 1990) for original and new audiences alike.",
      "id" : 32360
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/499520/page_bg_generated_v6b.jpg?t=1688058407",
      "developers" : [
        "BULKHEAD"
      ],
      "dlc" : [
        508340
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/499520/header.jpg?t=1688058407",
      "game" : "The Turing Test",
      "publishers" : [
        "BULKHEAD"
      ],
      "short_description" : "The Turing Test is a challenging first-person puzzle game set on Jupiter’s moon, Europa. You are Ava Turing, an engineer for the International Space Agency (ISA) sent to discover the cause behind the disappearance of the ground crew stationed there.",
      "id" : 499520
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/207610/page_bg_generated_v6b.jpg?t=1681496660",
      "developers" : [
        "Telltale Games"
      ],
      "dlc" : [
        207620
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/207610/header.jpg?t=1681496660",
      "game" : "The Walking Dead",
      "publishers" : [
        "Skybound Games"
      ],
      "short_description" : "Descarga el demo para tener una probada de la aventura de horror.",
      "id" : 207610
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/261030/page_bg_generated_v6b.jpg?t=1612901674",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/261030/header.jpg?t=1612901674",
      "game" : "The Walking Dead: Season Two",
      "publishers" : [
        "Skybound Games"
      ],
      "short_description" : "The Walking Dead: Season Two continues the story of Clementine, a young girl orphaned by the undead apocalypse. Left to fend for herself, she has been forced to learn how to survive in a world gone mad.",
      "id" : 261030
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/20900/page_bg_generated_v6b.jpg?t=1700481839",
      "developers" : [
        "CD PROJEKT RED"
      ],
      "dlc" : [
        1229370
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/20900/header.jpg?t=1700481839",
      "game" : "The Witcher: Enhanced Edition Director's Cut",
      "publishers" : [
        "CD PROJEKT RED",
        "1C-SoftClub"
      ],
      "short_description" : "Conviértete en el brujo Geralt de Rivia, un cazador de monstruos legendario atrapado en una red de intrigas tejida por fuerzas que compiten por controlar el mundo. Toma decisiones difíciles y vive con las consecuencias en un juego que te sumergirá en una historia extraordinaria y única.",
      "id" : 20900
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/292030/page_bg_generated_v6b.jpg?t=1710411171",
      "developers" : [
        "CD PROJEKT RED"
      ],
      "dlc" : [
        355880,
        378649,
        370000,
        370001,
        370002,
        370003,
        373950,
        373951,
        376390,
        376391,
        378640,
        378641,
        378642,
        378643,
        378644,
        378645,
        378646,
        378647,
        378648,
        1229320,
        1233280,
        1233340
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1710411171",
      "game" : "The Witcher® 3: Wild Hunt",
      "publishers" : [
        "CD PROJEKT RED"
      ],
      "short_description" : "Eres Geralt de Rivia, cazador de monstruos. En un continente devastado por la guerra e infestado de criaturas, tu misión es encontrar a Ciri, la niña de la profecía, un arma viviente que puede alterar el mundo tal y como lo conocemos.",
      "id" : 292030
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/210970/page_bg_generated_v6b.jpg?t=1598383120",
      "developers" : [
        "Thekla, Inc."
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/210970/header.jpg?t=1598383120",
      "game" : "The Witness",
      "publishers" : [
        "Thekla, Inc."
      ],
      "short_description" : "You wake up, alone, on a strange island full of puzzles that will challenge and surprise you.",
      "id" : 210970
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/250320/page_bg_generated_v6b.jpg?t=1686747108",
      "developers" : [
        "Telltale"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/250320/header.jpg?t=1686747108",
      "game" : "The Wolf Among Us",
      "publishers" : [
        "Telltale"
      ],
      "short_description" : "From the makers of the 2012 Game of the Year: The Walking Dead, comes a thriller based on the award-winning Fables comic books. As Bigby Wolf you will discover that a brutal, bloody murder is just a taste of things to come in a game series where your every decision can have enormous consequences.",
      "id" : 250320
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/518790/page_bg_generated_v6b.jpg?t=1712838440",
      "developers" : [
        "Expansive Worlds"
      ],
      "dlc" : [
        2383430,
        2167630,
        2631430,
        2701860,
        2532370,
        2199075,
        2199072,
        2199015,
        2199012,
        2198095,
        2198092,
        2198025,
        2197822,
        2198015,
        2198012,
        2197812,
        2299780,
        2198874,
        2198872,
        2198870,
        2064720,
        1931910,
        1843410,
        1776430,
        1608440,
        1546670,
        1463090,
        1316840,
        1252750,
        1179710,
        1164110,
        1146830,
        1108410,
        1093700,
        1076850,
        1052690,
        1028270,
        986850,
        939840,
        894600,
        854070,
        766870,
        695680,
        630940,
        622450,
        1011280,
        767380,
        706150,
        640230,
        619790,
        602310,
        1070170,
        1433620,
        1450350
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/518790/header.jpg?t=1712838440",
      "game" : "theHunter: Call of the Wild™",
      "publishers" : [
        "Expansive Worlds"
      ],
      "short_description" : "Discover an atmospheric hunting game like no other in this realistic, stunning open world – regularly updated in collaboration with the community. Immerse yourself in the single player campaign, or share the ultimate hunting experience with friends.",
      "id" : 518790
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/211600/page_bg_generated_v6b.jpg?t=1681398290",
      "developers" : [
        "Looking Glass Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/211600/header.jpg?t=1681398290",
      "game" : "Thief™ Gold",
      "publishers" : [
        "Eidos Interactive Corp."
      ],
      "short_description" : "Stalk your prey on the quest for stolen goods with your blackjack, sword, and an assortment of unique arrows. Steal for money and uncover the hidden agendas of your allies and enemies as you play through an unravelling story of deception and revenge.",
      "id" : 211600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/569860/page_bg_generated_v6b.jpg?t=1667234024",
      "developers" : [
        "Terrible Toybox"
      ],
      "dlc" : [
        638280,
        1319580
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/569860/header.jpg?t=1667234024",
      "game" : "Thimbleweed Park™",
      "publishers" : [
        "Terrible Toybox"
      ],
      "short_description" : "In Thimbleweed Park, a dead body is the least of your problems. Switch between five playable characters to uncover the surreal secrets of this strange town in a modern mystery adventure game from the creators of Monkey Island and Maniac Mansion. The deeper you go, the weirder it gets.",
      "id" : 569860
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/443810/page_bg_generated_v6b.jpg?t=1699453489",
      "developers" : [
        "Weappy Studio"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/443810/header.jpg?t=1699453489",
      "game" : "This Is the Police",
      "publishers" : [
        "THQ Nordic"
      ],
      "short_description" : "This Is the Police is a strategy/adventure game set in a city spiraling the drain. Taking the role of gritty Police Chief Jack Boyd, you'll dive into a deep story of crime and intrigue. Will Jack reach his retirement with a nice stack of bills, or will he end up broken ... or worse?",
      "id" : 443810
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/282070/page_bg_generated_v6b.jpg?t=1709638398",
      "developers" : [
        "11 bit studios"
      ],
      "dlc" : [
        750031,
        750030,
        974610,
        1125630,
        481090,
        348040,
        354350
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/282070/header.jpg?t=1709638398",
      "game" : "This War of Mine",
      "publishers" : [
        "11 bit studios"
      ],
      "short_description" : "In This War Of Mine you do not play as an elite soldier, rather a group of civilians trying to survive in a besieged city; struggling with lack of food, medicine and constant danger from snipers and hostile scavengers. The game provides an experience of war seen from an entirely new angle.",
      "id" : 282070
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/37400/page_bg_generated_v6b.jpg?t=1447352433",
      "developers" : [
        "Size Five Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/37400/header.jpg?t=1447352433",
      "game" : "Time Gentlemen, Please! and Ben There, Dan That! Special Edition  Double Pack",
      "publishers" : [
        "Size Five Games"
      ],
      "short_description" : "Ben There, Dan That! and Time Gentlemen, Please! are a couple of rip-roaring point-and-click adventure games . With tongue firmly in cheek, sit back, relax, and put your mind to work solving puzzles, and reading some very funny dialogue. It's like a book, only good!",
      "id" : 37400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/37400/page_bg_generated_v6b.jpg?t=1447352433",
      "developers" : [
        "Size Five Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/37400/header.jpg?t=1447352433",
      "game" : "Time Gentlemen, Please! and Ben There, Dan That! Special Edition  Double Pack",
      "publishers" : [
        "Size Five Games"
      ],
      "short_description" : "Ben There, Dan That! and Time Gentlemen, Please! are a couple of rip-roaring point-and-click adventure games . With tongue firmly in cheek, sit back, relax, and put your mind to work solving puzzles, and reading some very funny dialogue. It's like a book, only good!",
      "id" : 37400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1354910/page_bg_generated_v6b.jpg?t=1705833778",
      "developers" : [
        "Hyper Three Studio"
      ],
      "dlc" : [
        2211350,
        2624900,
        2766000
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1354910/header.jpg?t=1705833778",
      "game" : "Tiny Lands",
      "publishers" : [
        "Maple Whispering Limited"
      ],
      "short_description" : "Un relajante juego isométrico con low poly en el cual tienes que encontrar las diferencias en 3D experimentando un entorno precioso.",
      "id" : 1354910
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/475150/page_bg_generated_v6b.jpg?t=1696424355",
      "developers" : [
        "Iron Lore Entertainment",
        "THQ Nordic"
      ],
      "dlc" : [
        741350,
        1071200,
        1804460
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/475150/header.jpg?t=1696424355",
      "game" : "Titan Quest Anniversary Edition",
      "publishers" : [
        "THQ Nordic"
      ],
      "short_description" : "For its 10 year anniversary, Titan Quest will shine in new splendour. This Anniversary Edition combines both Titan Quest and Titan Quest Immortal Throne in one game, and has been given a massive overhaul for the ultimate ARPG experience.",
      "id" : 475150
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/460930/page_bg_generated_v6b.jpg?t=1695136171",
      "developers" : [
        "Ubisoft Paris",
        "Ubisoft Annecy",
        "Ubisoft Bucharest",
        "Ubisoft Montpellier",
        "Ubisoft Milan",
        "Reflections",
        "Ubisoft Belgrade"
      ],
      "dlc" : [
        832700,
        573830,
        573831,
        573832
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/460930/header.jpg?t=1695136171",
      "game" : "Tom Clancy's Ghost Recon® Wildlands",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "Create a team with up to 3 friends in Tom Clancy’s Ghost Recon® Wildlands and enjoy the ultimate military shooter experience set in a massive, dangerous, and responsive open world.",
      "id" : 460930
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/13570/page_bg_generated_v6b.jpg?t=1680013933",
      "developers" : [
        "Ubisoft Montreal"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/13570/header.jpg?t=1680013933",
      "game" : "Tom Clancy's Splinter Cell Chaos Theory®",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "The year is 2008. Citywide blackouts ... stock exchange sabotage ... electronic hijacking of national defense systems ... this is information warfare. To prevent these attacks, operatives must infiltrate deep into hostile territory and aggressively collect critical intelligence, closer than ever to enemy soldiers.",
      "id" : 13570
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/33220/page_bg_generated_v6b.jpg?t=1709317521",
      "developers" : [
        "Ubisoft Montreal"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/33220/header.jpg?t=1709317521",
      "game" : "Tom Clancy's Splinter Cell Conviction™",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "Now playable on either PC or Mac OSX!",
      "id" : 33220
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/13580/page_bg_generated_v6b.jpg?t=1680014047",
      "developers" : [
        "Ubisoft Montreal"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/13580/header.jpg?t=1680014047",
      "game" : "Tom Clancy's Splinter Cell Double Agent®",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "The best-selling Tom Clancy's Splinter Cell® saga takes on an entirely new direction. In the highly anticipated sequel to the 2005 game of the year, Tom Clancy's Splinter Cell Double Agent™, play as a double agent spy for the first time ever.",
      "id" : 13580
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/13560/page_bg_generated_v6b.jpg?t=1680011054",
      "developers" : [
        "Ubisoft"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/13560/header.jpg?t=1680011054",
      "game" : "Tom Clancy's Splinter Cell®",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "Infiltrate terrorists' positions, acquire critical intelligence by any means necessary, execute with extreme prejudice, and exit without a trace! You are Sam Fisher, a highly trained secret operative of the NSA's secret arm: Third Echelon.",
      "id" : 13560
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/365590/page_bg_generated_v6b.jpg?t=1711101159",
      "developers" : [
        "Massive Entertainment"
      ],
      "dlc" : [
        437700,
        437701,
        437702,
        456280,
        459500,
        468460,
        494630,
        556470,
        568990,
        569000,
        596190
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/365590/header.jpg?t=1711101159",
      "game" : "Tom Clancy’s The Division™",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "After a deadly pandemic sweeps through New York, it's up to Agents to save what remains. Complete missions, explore the Dark Zone, and fight back enemy factions alone or with 3 friends. Experience a full endgame offering you new PvP and PvE modes.",
      "id" : 365590
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/203160/page_bg_generated_v6b.jpg?t=1710446431",
      "developers" : [
        "Crystal Dynamics",
        "Eidos-Montréal",
        "Feral Interactive (Mac)",
        "Nixxes"
      ],
      "dlc" : [
        208791,
        208812,
        208813,
        237450,
        208817,
        208809,
        208818,
        208811,
        208814,
        208801,
        208803,
        208790,
        208792,
        208793,
        208802,
        208804,
        208805,
        208806,
        208807,
        208808,
        208810
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/203160/header.jpg?t=1710446431",
      "game" : "Tomb Raider",
      "publishers" : [
        "Crystal Dynamics",
        "Feral Interactive (Mac)"
      ],
      "short_description" : "Tomb Raider explores the intense origin story of Lara Croft and her ascent from a young woman to a hardened survivor.",
      "id" : 203160
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2395210/page_bg_generated_v6b.jpg?t=1696374771",
      "developers" : [
        "Vicarious Visions",
        "Iron Galaxy Studios"
      ],
      "genres" : [
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2395210/header.jpg?t=1696374771",
      "game" : "Tony Hawk's™ Pro Skater™ 1 + 2",
      "publishers" : [
        "Activision"
      ],
      "short_description" : "Juega a los juegos Tony Hawk's™ Pro Skater™ y Tony Hawk's™ Pro Skater™ 2 totalmente remasterizados en una colección épica, reconstruida desde cero en increíble HD.",
      "id" : 2395210
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/4700/page_bg_generated_v6b.jpg?t=1712148720",
      "developers" : [
        "CREATIVE ASSEMBLY",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/4700/header.jpg?t=1712148720",
      "game" : "Total War: MEDIEVAL II – Definitive Edition",
      "publishers" : [
        "SEGA",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "short_description" : "Spanning the most turbulent era in Western history, your quest for territory and power takes you through Europe, Africa, the Middle East, and even onto the shores of the New World.",
      "id" : 4700
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/201270/page_bg_generated_v6b.jpg?t=1603131194",
      "developers" : [
        "CREATIVE ASSEMBLY",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "dlc" : [
        223180,
        201279,
        201277,
        34348,
        34342,
        34343,
        34345,
        201272
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/201270/header.jpg?t=1603131194",
      "game" : "Total War: SHOGUN 2",
      "publishers" : [
        "SEGA",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "short_description" : "Total War: SHOGUN 2 is the perfect mix of real-time and turn-based strategy gaming for newcomers and veterans alike.",
      "id" : 34330
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/364360/page_bg_generated_v6b.jpg?t=1668768531",
      "developers" : [
        "CREATIVE ASSEMBLY",
        "Feral Interactive (Linux)",
        "Feral Interactive (Mac)"
      ],
      "dlc" : [
        455040,
        534330,
        455041,
        534331,
        551821,
        551820,
        404015,
        506190,
        404014,
        404013,
        404012,
        404010,
        404011
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/364360/header.jpg?t=1668768531",
      "game" : "Total War: WARHAMMER",
      "publishers" : [
        "SEGA",
        "Feral Interactive (Linux)",
        "Feral Interactive (Mac)"
      ],
      "short_description" : "Addictive turn-based empire-building with colossal, real-time battles, all set in a world of legendary heroes, giant monsters, flying creatures and storms of magical power.",
      "id" : 364360
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/287260/page_bg_generated_v6b.jpg?t=1625756552",
      "developers" : [
        "Codemasters"
      ],
      "genres" : [
        {
          "description" : "Carreras",
          "id" : "9"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/287260/header.jpg?t=1625756552",
      "game" : "Toybox Turbos",
      "publishers" : [
        "Codemasters",
        "Electronic Arts"
      ],
      "short_description" : "Codemasters reboots the classic table top racing experience in Toybox Turbos! Collect &amp; customise 35 vehicles, take on 18 crazy tracks &amp; send your rivals into a spin with awesome power-ups, including mines, machine guns &amp; giant car-mounted hammers!",
      "id" : 287260
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/602320/page_bg_generated_v6b.jpg?t=1710346893",
      "developers" : [
        "Alexey Davydov",
        "Sergey Dvoynikov",
        "Timofey Shargorodskiy"
      ],
      "dlc" : [
        2848820,
        2440700,
        2330180,
        2098231,
        2098232,
        2098230,
        1874870,
        1154780,
        1056730
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/602320/header.jpg?t=1710346893",
      "game" : "Train Valley 2",
      "publishers" : [
        "Flazm",
        "META Publishing"
      ],
      "short_description" : "Build bigger and more complex railway networks than ever before! Building on the success of the original, you’ll get more of what you loved about the original and then some. With increasingly difficult and complex challenges from local industries, the Valley has never felt so vast! ALL ABOARD!",
      "id" : 602320
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/35720/page_bg_generated_v6b.jpg?t=1620222378",
      "developers" : [
        "Frozenbyte"
      ],
      "dlc" : [
        1228580
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/35720/header.jpg?t=1620222378",
      "game" : "Trine 2: Complete Story",
      "publishers" : [
        "Frozenbyte"
      ],
      "short_description" : "Three Heroes make their way through dangers untold in a fairytale world, featuring physics-based puzzles, beautiful sights and online co-op.",
      "id" : 35720
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/690640/page_bg_generated_v6b.jpg?t=1693221619",
      "developers" : [
        "Frozenbyte"
      ],
      "dlc" : [
        1444560,
        1503550,
        1224800,
        1504370
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/690640/header.jpg?t=1693221619",
      "game" : "Trine 4: The Nightmare Prince",
      "publishers" : [
        "Frozenbyte"
      ],
      "short_description" : "The best-selling Trine series returns to the magic of 2.5D! Join three iconic heroes as they set off on a quest through fantastical fairytale landscapes to save the world from the Nightmare Prince’s shadows.",
      "id" : 690640
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/35700/page_bg_generated_v6b.jpg?t=1620222376",
      "developers" : [
        "Frozenbyte"
      ],
      "dlc" : [
        1227420
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/35700/header.jpg?t=1620222376",
      "game" : "Trine Enchanted Edition",
      "publishers" : [
        "Frozenbyte"
      ],
      "short_description" : "Three Heroes make their way through dangers untold in a fairytale world of great castles and strange machinery, featuring physics-based puzzles, beautiful sights and online co-op.",
      "id" : 35700
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/23490/page_bg_generated_v6b.jpg?t=1699552771",
      "developers" : [
        "Haemimont Games"
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/23490/header.jpg?t=1699552771",
      "game" : "Tropico 3",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "Become the dictator of a remote island during the Cold War. Charm, persuade, intimidate, oppress, or cheat your people to stay in power! Are you a kind and generous leader? A corrupt and ruthless tyrant ruling with an iron fist?",
      "id" : 23490
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/57690/page_bg_generated_v6b.jpg?t=1699552768",
      "developers" : [
        "Haemimont Games"
      ],
      "dlc" : [
        205630,
        205636,
        205635,
        205637,
        205638,
        205634,
        205633,
        205632,
        57697,
        57695,
        57696
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/57690/header.jpg?t=1699552768",
      "game" : "Tropico 4",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "The world is changing and Tropico is moving with the times - geographical powers rise and fall and the world market is dominated by new players with new demands and offers - and you, as El Presidente, face a whole new set of challenges.",
      "id" : 57690
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/245620/page_bg_generated_v6b.jpg?t=1699552765",
      "developers" : [
        "Haemimont Games"
      ],
      "dlc" : [
        306401,
        306392,
        306394,
        284441,
        306390,
        306399,
        306397,
        306395,
        284440,
        306398,
        306396,
        306393,
        306391
      ],
      "genres" : [
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/245620/header.jpg?t=1699552765",
      "game" : "Tropico 5",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "Return to the remote island nation of Tropico and expand your Dynasty’s reign from the early colonial period to beyond the 21st Century, facing new challenges including advanced trading mechanics, technology and scientific research, as well as cooperative and competitive MULTIPLAYER.",
      "id" : 245620
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/492720/page_bg_generated_v6b.jpg?t=1711091573",
      "developers" : [
        "Limbic Entertainment",
        "Realmforge Studios"
      ],
      "dlc" : [
        2594010,
        2186250,
        1631380,
        1449310,
        1282350,
        1259750,
        1100250,
        881960,
        1224940
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/492720/header.jpg?t=1711091573",
      "game" : "Tropico 6",
      "publishers" : [
        "Kalypso Media"
      ],
      "short_description" : "El Presidente is back! Prove yourself once again as a feared dictator or peace-loving statesman on the island state of Tropico and shape the fate of your very own banana republic through four distinctive eras.",
      "id" : 492720
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/33520/page_bg_generated_v6b.jpg?t=1668507922",
      "developers" : [
        "PopTop Software",
        "BreakAway Games",
        "Frog City Software"
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/33520/header.jpg?t=1668507922",
      "game" : "Tropico Reloaded",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "TROPICO RELOADED is the ultimate game compilation for hobby-dictators and those dreaming of their own Caribbean island. Tropico combines real-time strategy and simulation elements with a healthy dose of political intrigue and Caribbean flair to create a unique and critically acclaimed game experience.",
      "id" : 33520
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/33520/page_bg_generated_v6b.jpg?t=1668507922",
      "developers" : [
        "PopTop Software",
        "BreakAway Games",
        "Frog City Software"
      ],
      "genres" : [
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/33520/header.jpg?t=1668507922",
      "game" : "Tropico Reloaded",
      "publishers" : [
        "Kalypso Media Digital"
      ],
      "short_description" : "TROPICO RELOADED is the ultimate game compilation for hobby-dictators and those dreaming of their own Caribbean island. Tropico combines real-time strategy and simulation elements with a healthy dose of political intrigue and Caribbean flair to create a unique and critically acclaimed game experience.",
      "id" : 33520
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/269710/page_bg_generated_v6b.jpg?t=1673726244",
      "developers" : [
        "The Quantum Astrophysicists Guild"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/269710/header.jpg?t=1673726244",
      "game" : "Tumblestone",
      "publishers" : [
        "The Quantum Astrophysicists Guild"
      ],
      "short_description" : "Tumblestone reinventa por completo el juego de emparejamiento en una experiencia intensa y desafiante de resolución de puzzles que no podrás olvidar.",
      "id" : 269710
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/535930/page_bg_generated_v6b.jpg?t=1702376601",
      "developers" : [
        "Two Point Studios"
      ],
      "dlc" : [
        1901750,
        1498090,
        1377080,
        1376920,
        1440200,
        1424940,
        1196150,
        1144500,
        1096580,
        1003310,
        1035020,
        966690,
        1257570
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/535930/header.jpg?t=1702376601",
      "game" : "Two Point Hospital",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Design stunning hospitals, cure peculiar illnesses and manage troublesome staff as you spread your budding healthcare organisation across Two Point County.",
      "id" : 535930
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/237950/page_bg_generated_v6b.jpg?t=1521643581",
      "developers" : [
        "Altar Games"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/237950/header.jpg?t=1521643581",
      "game" : "UFO: Afterlight",
      "publishers" : [
        "Bohemia Interactive"
      ],
      "short_description" : "The story is situated on Mars. It starts where UFO: Aftermath left off and runs simultaneously with UFO: Aftershock. While the Laputans on Earth are fighting Wargots and Starghosts and finding out what caused the destruction of their home planet, a small colony on Mars is trying to survive and flourish.",
      "id" : 237950
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/390340/page_bg_generated_v6b.jpg?t=1700453099",
      "developers" : [
        "CAPCOM"
      ],
      "dlc" : [
        450000,
        450001
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/390340/header.jpg?t=1700453099",
      "game" : "Umbrella Corps",
      "publishers" : [
        "CAPCOM"
      ],
      "short_description" : "Join the corps! Umbrella Corps brings a competitive experience featuring new types of strategy and technique blended with elements from the world of Resident Evil, to create a unique kind of shooter!",
      "id" : 390340
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/391540/page_bg_generated_v6b.jpg?t=1579096091",
      "developers" : [
        "tobyfox"
      ],
      "dlc" : [
        391570
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg?t=1579096091",
      "game" : "Undertale",
      "publishers" : [
        "tobyfox"
      ],
      "short_description" : "UNDERTALE! The RPG game where you don't have to destroy anyone.",
      "id" : 391540
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/72200/page_bg_generated_v6b.jpg?t=1634773573",
      "developers" : [
        "Giant Army"
      ],
      "genres" : [
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/72200/header.jpg?t=1634773573",
      "game" : "Universe Sandbox Legacy",
      "publishers" : [
        "Giant Army"
      ],
      "short_description" : "Create and destroy on a scale you’ve never imagined!",
      "id" : 72200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/13200/page_bg_generated_v6b.jpg?t=1671033925",
      "developers" : [
        "Epic Games, Inc."
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/13200/header.jpg?t=1671033925",
      "game" : "Unreal 2: The Awakening",
      "publishers" : [
        "Epic Games, Inc."
      ],
      "short_description" : "You are John Dalton, an ex-Marine assigned to patrol the edge of human space as a Marshal for the Terran Colonial Authority. Unexpectedly, your monotonous life is shattered by a chilling distress signal, plunging you into an adventure beyond belief. Violent turmoil among the races has erupted on your watch.",
      "id" : 13200
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/13250/page_bg_generated_v6b.jpg?t=1671033925",
      "developers" : [
        "Epic Games, Inc."
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/13250/header.jpg?t=1671033925",
      "game" : "Unreal Gold",
      "publishers" : [
        "Epic Games, Inc."
      ],
      "short_description" : "Your prison ship has crash-landed on the fastest, sleekest, most dangerous 3D world ever created. Look around, crystal clear water shimmers, shadows dance and shift, alien architecture fades into the horizon.",
      "id" : 13250
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/13230/page_bg_generated_v6b.jpg?t=1671033925",
      "developers" : [
        "Epic Games, Inc."
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/13230/header.jpg?t=1671033925",
      "game" : "Unreal Tournament 2004: Editor's Choice Edition",
      "publishers" : [
        "Epic Games, Inc."
      ],
      "short_description" : "Unreal Tournament 2004 is a multiplayer first person shooter that combines the kill-or-be-killed experience of gladiatorial combat with cutting-edge technology. Ten game modes - both team-based and &quot;every man for himself&quot; -- provide even the most hardcore gamer with palm-sweating challenges through unbelievably detailed indoor...",
      "id" : 13230
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/13210/page_bg_generated_v6b.jpg?t=1685710371",
      "developers" : [
        "Epic Games, Inc."
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/13210/header.jpg?t=1685710371",
      "game" : "Unreal Tournament 3",
      "publishers" : [
        "Epic Games, Inc."
      ],
      "short_description" : "Now includes the free Titan Pack expansion! The Titan Pack gives players a substantial amount of enhanced features and new content, including many original environments, new gametypes, the namesake Titan mutator, powerful deployables and weapons, new characters, and the Stealthbender.",
      "id" : 13210
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/13240/page_bg_generated_v6b.jpg?t=1671033924",
      "developers" : [
        "Epic Games, Inc."
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/13240/header.jpg?t=1671033924",
      "game" : "Unreal Tournament: Game of the Year Edition",
      "publishers" : [
        "Epic Games, Inc."
      ],
      "short_description" : "Unreal Tournament is the original King of the Hill in the frag-or-be-fragged multiplayer gaming world. As the undisputed 1999 Game of the Year, Unreal Tournament grabbed the first person shooter genre by the soiled seat of its pants and knocked it around the room with its never-before-seen graphics, brutal edge-of-your-seat gameplay and...",
      "id" : 13240
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1510/page_bg_generated_v6b.jpg?t=1677710894",
      "developers" : [
        "Introversion Software"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1510/header.jpg?t=1677710894",
      "game" : "Uplink",
      "publishers" : [
        "Introversion Software"
      ],
      "short_description" : "You play an Uplink Agent who makes a living by performing jobs for major corporations. Your tasks involve hacking into rival computer systems, stealing research data, sabotaging other companies, laundering money, erasing evidence, or framing innocent people.",
      "id" : 1510
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/243450/page_bg_generated_v6b.jpg?t=1712232235",
      "developers" : [
        "Tate Multimedia"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Carreras",
          "id" : "9"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/243450/header.jpg?t=1712232235",
      "game" : "Urban Trial Freestyle",
      "publishers" : [
        "Tate Multimedia"
      ],
      "short_description" : "The city is your playground! Nothing will stop you on your freestyle trials bike. Use the urban landscape to pull spectacular tricks - backflips, 360s, wallrides, ollies, and more. Customize your bike to boost your performance in Time Attack or Stunt mode. Choose between speed and style, developing your own unique riding style.",
      "id" : 243450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/790820/page_bg_generated_v6b.jpg?t=1704380775",
      "developers" : [
        "SEGA"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/790820/header.jpg?t=1704380775",
      "game" : "Valkyria Chronicles 4 Complete Edition",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "A Continent Engulfed in the Bitter Flames of War! Commander Claude Wallace and his childhood friends set out to fight in a desperate war, but bone-chilling blizzards, waves of imperial soldiers, and the godlike powers of the Valkyria stand between them and victory.",
      "id" : 790820
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/294860/page_bg_generated_v6b.jpg?t=1709293968",
      "developers" : [
        "SEGA"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/294860/header.jpg?t=1709293968",
      "game" : "Valkyria Chronicles™",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "The critically acclaimed Valkyria Chronicles is now available on PC in 1080p True HD, including all previously released DLC!",
      "id" : 294860
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/211160/page_bg_generated_v6b.jpg?t=1603131477",
      "developers" : [
        "Creative Assembly, PC Port - Hardlight"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/211160/header.jpg?t=1603131477",
      "game" : "Viking: Battle for Asgard",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "A fierce struggle is taking place within Asgard, the realm of the Norse Gods.",
      "id" : 211160
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/255520/page_bg_generated_v6b.jpg?t=1666984019",
      "developers" : [
        "RuneStorm"
      ],
      "genres" : [
        {
          "description" : "Gore",
          "id" : "74"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/255520/header.jpg?t=1666984019",
      "game" : "Viscera Cleanup Detail: Shadow Warrior",
      "publishers" : [
        "Devolver Digital"
      ],
      "short_description" : "After the battle is over, someone has to cleanup the mess! Introducing Viscera Cleanup Detail: Shadow Warrior from RuneStorm, a unique crossover mini-game that combines the worlds of Viscera Cleanup Detail and Shadow Warrior.",
      "id" : 255520
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/31110/page_bg_generated_v6b.jpg?t=1447351732",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31110/header.jpg?t=1447351732",
      "game" : "Wallace & Gromit’s Grand Adventures, Episode 2: The Last Resort",
      "publishers" : [
        "Telltale Games"
      ],
      "short_description" : "Will the perfect holiday turn into the perfect crime? When unrelenting rain ruins their holiday plans, Wallace &amp; Gromit bring the beach to their basement and transform 62 West Wallaby into a makeshift resort. Keeping the customers satisfied is tricky business, especially when one of them is clocked on the head by an unknown assailant.",
      "id" : 31110
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/31120/page_bg_generated_v6b.jpg?t=1447351733",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31120/header.jpg?t=1447351733",
      "game" : "Wallace & Gromit’s Grand Adventures, Episode 3: Muzzled!",
      "publishers" : [
        "Telltale Games"
      ],
      "short_description" : "Enter the colorful world of West Wallaby Street in a series of four comedy games brought to you by Aardman Animations, the creators of the Wallace &amp; Gromit animated films, and Telltale, the award-winning studio behind Sam &amp; Max and Strong Bad's Cool Game for Attractive People.",
      "id" : 31120
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/31130/page_bg_generated_v6b.jpg?t=1447351734",
      "developers" : [
        "Telltale Games"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31130/header.jpg?t=1447351734",
      "game" : "Wallace & Gromit’s Grand Adventures, Episode 4: The Bogey Man",
      "publishers" : [
        "Telltale Games"
      ],
      "short_description" : "Wallace has been admitted to Prickly Thicket, the oldest country club in Lancashire. Wallace and his faithful caddie Gromit get wrapped up in a decades-old club dispute that threatens to destroy their peaceful West Wallaby lifestyle, and the duo must fight to save the neighborhood they hold dear!",
      "id" : 31130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/31100/page_bg_generated_v6b.jpg?t=1686747510",
      "developers" : [
        "Telltale"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/31100/header.jpg?t=1686747510",
      "game" : "Wallace & Gromit’s Grand Adventures",
      "publishers" : [
        "Telltale"
      ],
      "short_description" : "Enter the colorful world of West Wallaby Street in a series of four cracking adventures brought to you by Aardman Animations, the creators of the Wallace &amp; Gromit animated films, and award-winning Telltale Games.",
      "id" : 31100
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/236390/page_bg_generated_v6b.jpg?t=1711903585",
      "developers" : [
        "Gaijin Entertainment"
      ],
      "dlc" : [
        2825820,
        2690300,
        1108450,
        2054413,
        1233370,
        2054412,
        1478810,
        2315421,
        1657120,
        1947130,
        2407261,
        2232231,
        2232230,
        2199220,
        2407260,
        1368800,
        1423760,
        1368801,
        1937490,
        1368110,
        1582830,
        2560000,
        1557850,
        2717510,
        1945841,
        1945840,
        1945930,
        1247130,
        1247140,
        1247150,
        2500430,
        2500440
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Multijugador masivo",
          "id" : "29"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/236390/header.jpg?t=1711903585",
      "game" : "War Thunder",
      "publishers" : [
        "Gaijin Network Ltd"
      ],
      "short_description" : "War Thunder is the most comprehensive free-to-play, cross-platform, MMO military game dedicated to aviation, armoured vehicles, and naval craft, from the early 20th century to the most advanced modern combat units. Join now and take part in major battles on land, in the air, and at sea.",
      "id" : 236390
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/222750/page_bg_generated_v6b.jpg?t=1639653297",
      "developers" : [
        "Eugen Systems"
      ],
      "dlc" : [
        260850,
        245660
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/222750/header.jpg?t=1639653297",
      "game" : "Wargame: Airland Battle",
      "publishers" : [
        "Eugen Systems"
      ],
      "short_description" : "2 SIDES, 12 NATIONS, 750 UNITS: THE STRATEGY GAME REFERENCE IS BACK! Richer, more beautiful and more accessible, Wargame AirLand Battle is the sequel to the explosive real-time strategy game Wargame European Escalation! 1985.",
      "id" : 222750
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/58610/page_bg_generated_v6b.jpg?t=1639818022",
      "developers" : [
        "Eugen Systems"
      ],
      "dlc" : [
        58645,
        58646,
        58648,
        58643
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/58610/header.jpg?t=1639818022",
      "game" : "Wargame: European Escalation",
      "publishers" : [
        "Eugen Systems"
      ],
      "short_description" : "The New Fatal Error DLC includes a new 5-mission Operation and touch-screen controls.",
      "id" : 58610
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/251060/page_bg_generated_v6b.jpg?t=1639786925",
      "developers" : [
        "Eugen Systems"
      ],
      "dlc" : [
        1575820,
        561470,
        529390,
        443730,
        552090,
        348330,
        318290,
        313560
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/251060/header.jpg?t=1639786925",
      "game" : "Wargame: Red Dragon",
      "publishers" : [
        "Eugen Systems"
      ],
      "short_description" : "The new reference in RTS at its best! The Wargame series returns to duty, larger, richer and more spectacular than ever before. In Wargame Red Dragon, you are engaged in a large-scale conflict where Western forces clash against the Communist bloc.",
      "id" : 251060
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1295500/page_bg_generated_v6b.jpg?t=1711450494",
      "developers" : [
        "Black Lab Games"
      ],
      "dlc" : [
        2583910,
        2199370,
        2305830,
        2011980,
        1793051,
        1718640,
        1793050,
        1726490
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1295500/header.jpg?t=1711450494",
      "game" : "Warhammer 40,000: Battlesector",
      "publishers" : [
        "Slitherine Ltd."
      ],
      "short_description" : "Warhammer 40,000: Battlesector is a fast-paced turn-based strategy game set in the grimdark universe of the 41st Millennium. Pick your force, develop your army, field mighty heroes and fight for victory using superior strategy, awesome abilities, and devastating weaponry.",
      "id" : 1295500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2005010/page_bg_generated_v6b.jpg?t=1695829282",
      "developers" : [
        "Auroch Digital"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2005010/header.jpg?t=1695829282",
      "game" : "Warhammer 40,000: Boltgun",
      "publishers" : [
        "Focus Entertainment"
      ],
      "short_description" : "Carga tu Bólter y desata el arsenal de un marine espacial para abrirte paso entre espíritus, píxeles y sangre en una combinación perfecta de Warhammer 40,000, mecánica de juego frenética y los gráficos elegantes de los shooters retro de los 90.",
      "id" : 2005010
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/15620/page_bg_generated_v6b.jpg?t=1632305419",
      "developers" : [
        "Relic Entertainment",
        "Feral Interactive (Mac/Linux)"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/15620/header.jpg?t=1632305419",
      "game" : "Warhammer 40,000: Dawn of War II",
      "publishers" : [
        "SEGA",
        "Feral Interactive (Mac/Linux)"
      ],
      "short_description" : "With a focus on fast-action RTS gameplay, Dawn of War II brings to life the science fiction universe of Warhammer 40,000 like never before. Experience the intimate brutality of battle as you play through your chosen race’s epic campaign.",
      "id" : 15620
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/56437/page_bg_generated_v6b.jpg?t=1603127845",
      "developers" : [
        "Relic Entertainment",
        "Feral Interactive (Mac/Linux)"
      ],
      "dlc" : [
        378041,
        378040,
        56431,
        56432,
        56433,
        56434,
        56435,
        56436,
        56536,
        56480,
        56481,
        56482,
        56483,
        56484,
        56485,
        56538,
        56487,
        56488,
        56489,
        56493
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/56437/header.jpg?t=1603127845",
      "game" : "Warhammer 40,000: Dawn of War II: Retribution",
      "publishers" : [
        "SEGA",
        "Feral Interactive (Mac/Linux)"
      ],
      "short_description" : "Command any of the six unique factions in the next standalone expansion of the critically acclaimed Dawn of War real-time strategy franchise. Choose to build a massive army or lead a small squad of elite heroes into battle and experience a single player campaign customized to your favorite race.",
      "id" : 56400
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/285190/page_bg_generated_v6b.jpg?t=1655744092",
      "developers" : [
        "Relic Entertainment",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/285190/header.jpg?t=1655744092",
      "game" : "Warhammer 40,000: Dawn of War III",
      "publishers" : [
        "SEGA",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "short_description" : "Step into a brutal battle between three warring factions In Dawn of War III you will have no choice but to face your foes when a catastrophic weapon is found on the mysterious world of Acheron.",
      "id" : 285190
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/489630/page_bg_generated_v6b.jpg?t=1710932957",
      "developers" : [
        "Proxy Studios"
      ],
      "dlc" : [
        2668040,
        2399890,
        2130960,
        2006870,
        1788210,
        1640850,
        1425820,
        1330480,
        1239450,
        1170010,
        1084820,
        995860,
        961840,
        870540,
        870530,
        870550
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/489630/header.jpg?t=1710932957",
      "game" : "Warhammer 40,000: Gladius - Relics of War",
      "publishers" : [
        "Slitherine Ltd."
      ],
      "short_description" : "Warhammer 40,000: Gladius – Relics of War brings you to a world of terror and violence. Four factions will engage in a brutal war for dominance over the planet’s resources. In the first turn-based 4X strategy game set in Warhammer 40,000 you will lead one of four unique factions.",
      "id" : 489630
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/673880/page_bg_generated_v6b.jpg?t=1709032923",
      "developers" : [
        "Bulwark Studios"
      ],
      "dlc" : [
        916250,
        1049290,
        1236640
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/673880/header.jpg?t=1709032923",
      "game" : "Warhammer 40,000: Mechanicus",
      "publishers" : [
        "Kasedo Games"
      ],
      "short_description" : "Take control of the most technologically advanced army in the Imperium - The Adeptus Mechanicus. Your every decision will weigh heavily on the outcome of the mission, in this turn-based tactical game. Will you be blessed by the Omnissiah?",
      "id" : 673880
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/55150/page_bg_generated_v6b.jpg?t=1653590231",
      "developers" : [
        "Relic Entertainment"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/55150/header.jpg?t=1653590231",
      "game" : "Warhammer 40,000: Space Marine - Anniversary Edition",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "In Warhammer 40,000 Space Marine you are Captain Titus, a Space Marine of the Ultramarines chapter and a seasoned veteran of countless battles.",
      "id" : 55150
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/774241/page_bg_generated_v6b.jpg?t=1679414208",
      "developers" : [
        "Eko Software"
      ],
      "dlc" : [
        1396230,
        1004919,
        1004910,
        1004911,
        1004912,
        1004913,
        1004914,
        1004915,
        1004916,
        1004917,
        1004918,
        1081970,
        1455550
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/774241/header.jpg?t=1679414208",
      "game" : "Warhammer: Chaosbane",
      "publishers" : [
        "Nacon"
      ],
      "short_description" : "En un mundo devastado por la guerra y dominado por la magia, álzate para plantar cara a las hordas del Caos. Solo o hasta con cuatro jugadores en modo local o cooperativo online, elige héroe de entre cuatro clases y prepárate para batallas épicas usando los artefactos más poderosos del Viejo Mundo.",
      "id" : 774241
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/552500/page_bg_generated_v6b.jpg?t=1713107996",
      "developers" : [
        "Fatshark"
      ],
      "dlc" : [
        2585630,
        2585640,
        1782450,
        1782451,
        1629000,
        1629010,
        1601550,
        1592630,
        1443790,
        1443780,
        1345990,
        1343500,
        1033060,
        975400,
        737040,
        828790,
        2199500,
        2445960
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/552500/header.jpg?t=1713107996",
      "game" : "Warhammer: Vermintide 2",
      "publishers" : [
        "Fatshark"
      ],
      "short_description" : "The critically acclaimed Vermintide 2 is a visually stunning and groundbreaking melee action game pushing the boundaries of the first person co-op genre. Join the fight now!",
      "id" : 552500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/4580/page_bg_generated_v6b.jpg?t=1603128095",
      "developers" : [
        "Relic Entertainment"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/4580/header.jpg?t=1603128095",
      "game" : "Warhammer® 40,000: Dawn of War® - Dark Crusade",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Deep under the central desert of Kronus, a vast honeycomb of skull-lined tunnels and funeral chambers house the awakening Necron menace. Eons ago, these were the boulevards and squares of a great necropolis built to house the bones of the races who had fallen to the Necrons, and ultimately were where the Necrons themselves retire to...",
      "id" : 4580
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/4570/page_bg_generated_v6b.jpg?t=1622581511",
      "developers" : [
        "Relic Entertainment"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/4570/header.jpg?t=1622581511",
      "game" : "Warhammer® 40,000: Dawn of War® - Game of the Year Edition",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "Prepare yourself for the grim, dark future of the 41st millennium, where alien races battle mankind for galactic domination in a universe of unending war. Personalize your armies with a revolutionary unit customization tool that gives you the ability to choose your armies insignias, banners, squad colors and names.",
      "id" : 4570
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9450/page_bg_generated_v6b.jpg?t=1667816957",
      "developers" : [
        "Relic Entertainment"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9450/header.jpg?t=1667816957",
      "game" : "Warhammer® 40,000: Dawn of War® - Soulstorm",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "The third and final expansion to the genre-defining and critically-acclaimed RTS, Dawn of War. In Soulstorm, two new armies are introduced – Sisters of Battle and Dark Eldar - raising the total number of playable armies to nine.",
      "id" : 9450
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/20570/page_bg_generated_v6b.jpg?t=1603128043",
      "developers" : [
        "Relic Entertainment",
        "Feral Interactive (Mac/Linux)"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/20570/header.jpg?t=1603128043",
      "game" : "Warhammer® 40,000: Dawn of War® II Chaos Rising",
      "publishers" : [
        "SEGA",
        "Feral Interactive (Mac/Linux)"
      ],
      "short_description" : "In Dawn of War II: Chaos Rising you will take command of the Blood Ravens and defend the sector against the Chaos Space Marines of the Black Legion. Purge the Chaos filth and hold the chapter together as traitorous forces work from within to try bring down the Blood Ravens.",
      "id" : 20570
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/9310/page_bg_generated_v6b.jpg?t=1603128269",
      "developers" : [
        "Relic Entertainment"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/9310/header.jpg?t=1603128269",
      "game" : "Warhammer® 40,000: Dawn of War® – Winter Assault",
      "publishers" : [
        "SEGA"
      ],
      "short_description" : "This expansion adds all-new units and strategies to the exciting gameplay offered by Dawn of War. The Imperial Guard brings new weaponry, including heavy armor, new troop units as well as defensive and ranged tactics overwhelming numbers. Coupled with new abilities, this fighting force is as lethal as they come.",
      "id" : 9310
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/203630/page_bg_generated_v6b.jpg?t=1710238567",
      "developers" : [
        "Ino-Co Plus"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/203630/header.jpg?t=1710238567",
      "game" : "Warlock - Master of the Arcane",
      "publishers" : [
        "Paradox Interactive"
      ],
      "short_description" : "In a time of chaotic upheaval, the player takes the role of a great mage, a warlord vying for ultimate power.",
      "id" : 203630
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1291010/page_bg_generated_v6b.jpg?t=1712148570",
      "developers" : [
        "Skirmish Mode Games"
      ],
      "dlc" : [
        1606930,
        1619140
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1291010/header.jpg?t=1712148570",
      "game" : "Warpips",
      "publishers" : [
        "Daedalic Entertainment"
      ],
      "short_description" : "Warpips is the ultimate quick to learn but amazingly deep tug-of-war strategy game. Deploy the right composition of soldiers, tanks, helicopters and planes in this tight, streamlined strategy-focused war game. Compose the best army, research the right tech; overwhelm your enemy!",
      "id" : 1291010
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/259130/page_bg_generated_v6b.jpg?t=1667323274",
      "developers" : [
        "inXile Entertainment"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/259130/header.jpg?t=1667323274",
      "game" : "Wasteland 1 - The Original Classic",
      "publishers" : [
        "inXile Entertainment"
      ],
      "short_description" : "For the first time in over 20 years, we are heralding the return of a much loved piece of gaming history with the classic RPG, Wasteland! Mutants. Again. Even more than there were last time: they seem to materialize out of the very grains of the radioactive desert sand. Venomous yellow eyes.",
      "id" : 259130
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/240760/page_bg_generated_v6b.jpg?t=1686191412",
      "developers" : [
        "inXile Entertainment"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/240760/header.jpg?t=1686191412",
      "game" : "Wasteland 2: Director's Cut",
      "publishers" : [
        "inXile Entertainment"
      ],
      "short_description" : "From the producer of the original Fallout comes Wasteland 2. With over 80 hours of gameplay, deck out your Ranger squad with devastating weaponry, test the limits of your strategy skills, and bring justice to the Wasteland! The choices are yours…but so are the consequences.",
      "id" : 240760
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/240760/page_bg_generated_v6b.jpg?t=1686191412",
      "developers" : [
        "inXile Entertainment"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/240760/header.jpg?t=1686191412",
      "game" : "Wasteland 2: Director's Cut",
      "publishers" : [
        "inXile Entertainment"
      ],
      "short_description" : "From the producer of the original Fallout comes Wasteland 2. With over 80 hours of gameplay, deck out your Ranger squad with devastating weaponry, test the limits of your strategy skills, and bring justice to the Wasteland! The choices are yours…but so are the consequences.",
      "id" : 240760
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/226120/page_bg_generated_v6b.jpg?t=1575869691",
      "developers" : [
        "Digital Eel"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Casual",
          "id" : "4"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/226120/header.jpg?t=1575869691",
      "game" : "Weird Worlds: Return to Infinite Space",
      "publishers" : [
        "Digital Eel"
      ],
      "short_description" : "Weird Worlds: Return to Infinite Space is a hybrid roguelike game of space exploration, adventure and starship combat.",
      "id" : 226120
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/2270/page_bg_generated_v6b.jpg?t=1664378515",
      "developers" : [
        "id Software"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/2270/header.jpg?t=1664378515",
      "game" : "Wolfenstein 3D",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "La Segunda Guerra Mundial causa estragos. Los nazis planean crear un ejército imparable de mutantes. Cuando estabas en una misión para robar los planos secretos, te capturaron y encerraron. Ahora, gracias a un golpe de suerte, tienes la oportunidad de escapar, pero los pasillos laberínticos y los nazis de gatillo fácil se interponen en...",
      "id" : 2270
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/612880/page_bg_generated_v6b.jpg?t=1691683256",
      "developers" : [
        "Machine Games"
      ],
      "dlc" : [
        624620,
        624621,
        624622,
        650410
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/612880/header.jpg?t=1691683256",
      "game" : "Wolfenstein II: The New Colossus",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "America, 1961. The assassination of Nazi General Deathshead was a short-lived victory. The Nazis maintain their stranglehold on the world. You are BJ Blazkowicz, aka “Terror-Billy,” member of the Resistance, scourge of the Nazi empire, and humanity’s last hope for liberty.",
      "id" : 612880
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/201810/page_bg_generated_v6b.jpg?t=1691683281",
      "developers" : [
        "MachineGames"
      ],
      "dlc" : [
        426820
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/201810/header.jpg?t=1691683281",
      "game" : "Wolfenstein: The New Order",
      "publishers" : [
        "Bethesda Softworks"
      ],
      "short_description" : "Wolfenstein®: The New Order reignites the series that created the first-person shooter genre. Wolfenstein offers a deep game narrative packed with action, adventure and first-person combat.",
      "id" : 201810
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/21760/page_bg_generated_v6b.jpg?t=1468510512",
      "developers" : [
        "Massive Entertainment"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/21760/header.jpg?t=1468510512",
      "game" : "World In Conflict",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "World War III rages and a Soviet-led army has launched a surprise attack on the U.S.A. Command your troops into fast-paced battles fought on a fully destructible battle-field. Strategy meets intense action in this epic clash of Super Powers!",
      "id" : 21760
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/21760/page_bg_generated_v6b.jpg?t=1468510512",
      "developers" : [
        "Massive Entertainment"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/21760/header.jpg?t=1468510512",
      "game" : "World In Conflict",
      "publishers" : [
        "Ubisoft"
      ],
      "short_description" : "World War III rages and a Soviet-led army has launched a surprise attack on the U.S.A. Command your troops into fast-paced battles fought on a fully destructible battle-field. Strategy meets intense action in this epic clash of Super Powers!",
      "id" : 21760
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/22600/page_bg_generated_v6b.jpg?t=1596807362",
      "developers" : [
        "Team17 Digital Ltd"
      ],
      "dlc" : [
        22630,
        22631,
        22632,
        22633,
        22634
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/22600/header.jpg?t=1596807362",
      "game" : "Worms Reloaded",
      "publishers" : [
        "Team17 Digital Ltd"
      ],
      "short_description" : "Ten years on from Worms™ Armageddon and the turn-based comic mayhem continues in Worms™ Reloaded, an all-new edition available for PC through Steam.",
      "id" : 22600
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/327030/page_bg_generated_v6b.jpg?t=1687253105",
      "developers" : [
        "Team17"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/327030/header.jpg?t=1687253105",
      "game" : "Worms W.M.D",
      "publishers" : [
        "Team17"
      ],
      "short_description" : "The worms are back in their most destructive game yet. With a gorgeous, hand-drawn 2D look, brand new weapons, the introduction of crafting, vehicles and buildings plus the return of some much-loved classic weapons and gameplay, Worms W.M.D is the best worms experience ever.",
      "id" : 327030
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/366220/page_bg_generated_v6b.jpg?t=1593011906",
      "developers" : [
        "Code Club AB"
      ],
      "genres" : [
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/366220/header.jpg?t=1593011906",
      "game" : "Wurm Unlimited",
      "publishers" : [
        "Plug In Digital"
      ],
      "short_description" : "Wurm Unlimited is the standalone version of the fantasy sandbox world Wurm Online, the MMORPG where the players are in charge! A pioneer in the ideas of player influence, crafting and adventure, it is now one of the most deep and feature packed true sandbox experiences available.",
      "id" : 366220
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1142100/page_bg_generated_v6b.jpg?t=1677705920",
      "developers" : [
        "Saber Interactive"
      ],
      "dlc" : [
        1544760
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Deportes",
          "id" : "18"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1142100/header.jpg?t=1677705920",
      "game" : "WWE 2K BATTLEGROUNDS",
      "publishers" : [
        "2K"
      ],
      "short_description" : "El mundo de la WWE es tu nuevo campo de batalla. ¡Únete a intensos combates arcade nunca vistos y haz que tus Superstars y leyendas preferidas luchen entre sí en peculiares entornos interactivos!",
      "id" : 1142100
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/7510/page_bg_generated_v6b.jpg?t=1577604007",
      "developers" : [
        "Gaijin Entertainment"
      ],
      "dlc" : [
        604280,
        604290
      ],
      "genres" : [
        {
          "description" : "Desnudos",
          "id" : "72"
        },
        {
          "description" : "Violencia",
          "id" : "73"
        },
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Rol",
          "id" : "3"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/7510/header.jpg?t=1577604007",
      "game" : "X-Blades",
      "publishers" : [
        "Topware Interactive"
      ],
      "short_description" : "In X-Blades, the player takes on the role of the enchanting heroine Ayumi, who survives a breathtaking dance of blades through the Hordes of Darkness. The long-haired beautiful anime, with her pistol blades and mind-blowing leaps, whirls and swirls from one fantastic level to the next.",
      "id" : 7510
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/7660/page_bg_generated_v6b.jpg?t=1571243661",
      "developers" : [
        "MicroProse Software, Inc"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/7660/header.jpg?t=1571243661",
      "game" : "X-COM: Apocalypse",
      "publishers" : [
        "2K"
      ],
      "short_description" : "There's something evil in the city tonight... Earth has been ravaged by human excess, petty conflict and alien invasion. The world's population has been herded into huge cities, the first of which was Mega Primus. 2084: A Utopia shattered, social collapse and civil unrest reigns in Mega Primus. Fiendish aliens terrorize the city.",
      "id" : 7660
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/7770/page_bg_generated_v6b.jpg?t=1571243874",
      "developers" : [
        "MicroProse Software, Inc"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/7770/header.jpg?t=1571243874",
      "game" : "X-COM: Enforcer",
      "publishers" : [
        "2K"
      ],
      "short_description" : "X-COM: Earth's top-secret eXtraterrestrial COMbat unit The Place: America - early 21st century The Mission: Eradicate the extraterrestrials Alien forces have invaded Earth and are terrorizing the population.",
      "id" : 7770
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/7730/page_bg_generated_v6b.jpg?t=1571243765",
      "developers" : [
        "MicroProse Software, Inc"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/7730/header.jpg?t=1571243765",
      "game" : "X-COM: Interceptor",
      "publishers" : [
        "2K"
      ],
      "short_description" : "They're back...only this time the heinous aliens are out to destroy Earth and rule the new frontier. As X-COM commander, it's your sole duty to protect humanity and the prized mining operations in outer space.",
      "id" : 7730
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/7650/page_bg_generated_v6b.jpg?t=1568749080",
      "developers" : [
        "MicroProse Software, Inc"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/7650/header.jpg?t=1568749080",
      "game" : "X-COM: Terror From the Deep",
      "publishers" : [
        "2K"
      ],
      "short_description" : "The war continues... X-COM: UFO Defense brought you to a galactic battlefield. X-COM: Terror from the Deep brings the alien terror into a totally new dimension.Seeking to take advantage of a weakened Earth, X-COM's deep space foes unexpectedly change strategy and launch a powerful second front against planet Earth.",
      "id" : 7650
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/7760/page_bg_generated_v6b.jpg?t=1571243544",
      "developers" : [
        "MicroProse Software, Inc"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/7760/header.jpg?t=1571243544",
      "game" : "X-COM: UFO Defense",
      "publishers" : [
        "2K"
      ],
      "short_description" : "You are in control of X-COM: an organization formed by the world's governments to fight the ever-increasing alien menace.",
      "id" : 7760
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/392160/page_bg_generated_v6b.jpg?t=1712242818",
      "developers" : [
        "Egosoft"
      ],
      "dlc" : [
        1133000,
        1288460,
        1701060,
        1990040,
        2700340,
        1239390,
        1277600,
        1288490,
        1788600,
        2288980,
        2375830
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/392160/header.jpg?t=1712242818",
      "game" : "X4: Foundations",
      "publishers" : [
        "Egosoft"
      ],
      "short_description" : "X4:FOUNDATIONS trae consigo nuestra SIMULACIÓN del universo más sofisticada que nunca. Vuela todas las naves, EXPLORA el espacio o administra un imperio; COMERCIA, LUCHA, CONSTRUYE e INVESTIGA cuidadosamente, mientras te embarcas en un viaje épico.",
      "id" : 392160
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/200510/page_bg_generated_v6b.jpg?t=1587584126",
      "developers" : [
        "Firaxis Games",
        "Feral Interactive (Linux)"
      ],
      "dlc" : [
        225340,
        209812,
        209811
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/200510/header.jpg?t=1587584126",
      "game" : "XCOM: Enemy Unknown",
      "publishers" : [
        "2K",
        "Feral Interactive (Linux)"
      ],
      "short_description" : "The XCOM: Enemy Unknown - Slingshot Pack is Now Available!",
      "id" : 200510
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/268500/page_bg_generated_v6b.jpg?t=1646157374",
      "developers" : [
        "Firaxis Games",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "dlc" : [
        593380,
        426321,
        785300,
        433091,
        433090,
        433080,
        399620
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/268500/header.jpg?t=1646157374",
      "game" : "XCOM® 2",
      "publishers" : [
        "2K",
        "Feral Interactive (Mac)",
        "Feral Interactive (Linux)"
      ],
      "short_description" : "Los alienígenas dominan la tierra y prometen un futuro brillante para la humanidad mientras ocultan sus siniestros planes. Ponte en la piel del líder de una guerrilla y, con todo en tu contra, prende la llama de la resistencia mundial para acabar con la amenaza alienígena y salvar a la raza humana de la extinción.",
      "id" : 268500
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/882100/page_bg_generated_v6b.jpg?t=1603903072",
      "developers" : [
        "Firaxis Games"
      ],
      "genres" : [
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/882100/header.jpg?t=1603903072",
      "game" : "XCOM®: Chimera Squad",
      "publishers" : [
        "2K"
      ],
      "short_description" : "XCOM: Chimera Squad delivers an all-new story and turn-based tactical combat experience in the XCOM universe.",
      "id" : 882100
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/223830/page_bg_generated_v6b.jpg?t=1673967760",
      "developers" : [
        "Goldhawk Interactive"
      ],
      "genres" : [
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Simuladores",
          "id" : "28"
        },
        {
          "description" : "Estrategia",
          "id" : "2"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/223830/header.jpg?t=1673967760",
      "game" : "Xenonauts",
      "publishers" : [
        "Goldhawk Interactive"
      ],
      "short_description" : "Xenonauts is a strategy game in which you control a multi-national military organisation defending a Cold War-era Earth from alien invasion, using small squads of persistent soldiers to eliminate the extraterrestrials and recover their technology in turn-based ground combat.",
      "id" : 223830
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/433850/page_bg_generated_v6b.jpg?t=1579626820",
      "developers" : [
        "Daybreak Game Company"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        },
        {
          "description" : "Multijugador masivo",
          "id" : "29"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/433850/header.jpg?t=1579626820",
      "game" : "Z1 Battle Royale",
      "publishers" : [
        "Daybreak Game Company"
      ],
      "short_description" : "Z1 Battle Royale is a Free to Play, fast-paced, action arcade, competitive Battle Royale. Staying true to its &quot;King of the Kill&quot; roots, the game has been revamped and restored to the classic feel, look, and gameplay everyone fell in love with. Play solo, duos, or fives and be the last ones standing.",
      "id" : 433850
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/439700/page_bg_generated_v6b.jpg?t=1623781388",
      "developers" : [
        "Daybreak Game Company"
      ],
      "genres" : [
        {
          "description" : "Multijugador masivo",
          "id" : "29"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/439700/header.jpg?t=1623781388",
      "game" : "Z1 Battle Royale: Test Server",
      "publishers" : [
        "Daybreak Game Company"
      ],
      "short_description" : "Z1 Battle Royale is a Free to Play, fast-paced, action arcade, competitive Battle Royale. Staying true to its &quot;King of the Kill&quot; roots, the game has been revamped and restored to the classic feel, look, and gameplay everyone fell in love with. Play solo, duos, or fives and be the last ones standing.",
      "id" : 439700
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/694280/page_bg_generated_v6b.jpg?t=1698833175",
      "developers" : [
        "Rebellion"
      ],
      "dlc" : [
        1820340,
        1498320,
        1820341,
        1820343,
        1820342,
        1558885,
        1405830,
        1090620,
        1569330,
        1569332,
        1569331,
        1569333,
        1569334,
        1569321,
        1569322,
        1569320,
        1569323,
        1569324,
        1569310,
        1569281,
        1457800,
        1424201,
        1424200,
        1271893,
        1271892,
        1271891,
        1090603,
        1089851,
        1088940,
        1569312,
        1569314,
        1569311,
        1569313,
        1558882,
        1558880,
        1558881,
        1558883,
        1558884,
        1088941,
        1088942,
        1088943,
        1088944,
        1088945,
        1088946,
        1088947,
        1088948,
        1088949,
        1089850,
        1089852,
        1090600,
        1090601,
        1090602,
        1090604,
        1090605,
        1090606,
        1090607,
        1090608,
        1090609,
        1090610,
        1090611,
        1090612,
        1271200,
        1271210,
        1271860,
        1271861,
        1271862,
        1271890,
        1353090,
        1404040,
        1404041,
        1404042,
        1448510,
        1448511,
        1448512,
        1454040,
        1479790,
        1479791,
        1479792,
        1479793,
        1479794,
        1517210,
        1517211,
        1517212,
        1517213,
        1517214,
        1517215,
        1517216,
        1517217,
        1569280,
        1569282,
        1569283,
        1569284
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/694280/header.jpg?t=1698833175",
      "game" : "Zombie Army 4: Dead War",
      "publishers" : [
        "Rebellion"
      ],
      "short_description" : "Hitler’s hordes are back for more in this spine-chilling shooter from the makers of Sniper Elite 4! Abominable occult enemies, epic weapons and a harrowing new campaign for 1-4 players await in 1940s Europe, as you fight to save humankind from undead Armageddon!",
      "id" : 694280
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/301640/page_bg_generated_v6b.jpg?t=1589808341",
      "developers" : [
        "Rebellion"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/301640/header.jpg?t=1589808341",
      "game" : "Zombie Army Trilogy",
      "publishers" : [
        "Rebellion"
      ],
      "short_description" : "The cult horror shooter series comes to an apocalyptic conclusion with an epic new third chapter, a heart-pumping new horde mode, and remastered editions of the best-selling Nazi Zombie Army 1 &amp; 2.",
      "id" : 301640
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/220820/page_bg_generated_v6b.jpg?t=1694603710",
      "developers" : [
        "Exor Studios"
      ],
      "dlc" : [
        220825,
        220824,
        220823,
        220822,
        301900
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Indie",
          "id" : "23"
        },
        {
          "description" : "Carreras",
          "id" : "9"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/220820/header.jpg?t=1694603710",
      "game" : "Zombie Driver HD",
      "publishers" : [
        "Exor Studios"
      ],
      "short_description" : "Insane mix of cars, speed, explosions, blood and zombies! Fight through an epic narrative campaign or test yourself in the Slaughter and Blood Race modes.",
      "id" : 220820
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/578080/page_bg_generated_v6b.jpg?t=1712911294",
      "developers" : [
        "KRAFTON, Inc."
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Multijugador masivo",
          "id" : "29"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg?t=1712911294",
      "game" : "PUBG: BATTLEGROUNDS",
      "publishers" : [
        "KRAFTON, Inc."
      ],
      "short_description" : "Juega a PUBG: BATTLEGROUNDS gratis. Aterriza en ubicaciones estratégicas, saquea armas y suministros, y sobrevive para ser el último equipo en pie en campos de batalla distintos y diversos.",
      "id" : 578080
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/553850/page_bg_generated_v6b.jpg?t=1709666906",
      "developers" : [
        "Arrowhead Game Studios"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/553850/header.jpg?t=1709666906",
      "game" : "HELLDIVERS™ 2",
      "publishers" : [
        "PlayStation PC LLC"
      ],
      "short_description" : "La última línea ofensiva de la galaxia. Enlístate en los Helldivers y únete a la lucha por la libertad en una galaxia hostil en este juego de disparos en tercera persona frenético y feroz.",
      "id" : 553850
    },
    {
      "background" : "https://cdn.akamai.steamstatic.com/steam/apps/1172470/page_bg_generated_v6b.jpg?t=1712869091",
      "developers" : [
        "Respawn"
      ],
      "genres" : [
        {
          "description" : "Acción",
          "id" : "1"
        },
        {
          "description" : "Aventura",
          "id" : "25"
        },
        {
          "description" : "Free to Play",
          "id" : "37"
        }
      ],
      "header_image" : "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header_alt_assets_3.jpg?t=1712869091",
      "game" : "Apex Legends™",
      "publishers" : [
        "Electronic Arts"
      ],
      "short_description" : "Apex Legends es el galardonado juego de disparos de héroes gratuito de Respawn Entertainment. Controla un elenco en aumento de personajes con habilidades poderosas y disfruta del juego estratégico por escuadrones y de la dinámica de juego innovadora del nuevo Battle Royale de disparos de héroes.",
      "id" : 1172470
    }
]`);

const detailedGame = JSON.parse(`{
  "publishers": [
    "PlayStation PC LLC"
  ],
  "genres": [
    {
      "description": "Acción",
      "id": "1"
    }
  ],
  "steam_appid": 553850,
  "game": "HELLDIVERS™ 2",
  "background": "https://cdn.akamai.steamstatic.com/steam/apps/553850/page_bg_generated_v6b.jpg?t=1709666906",
  "movies": [
    {
      "webm": {
        "480": "http://cdn.akamai.steamstatic.com/steam/apps/256994373/movie480_vp9.webm?t=1705428404",
        "max": "http://cdn.akamai.steamstatic.com/steam/apps/256994373/movie_max_vp9.webm?t=1705428404"
      },
      "id": 256994373,
      "mp4": {
        "480": "http://cdn.akamai.steamstatic.com/steam/apps/256994373/movie480.mp4?t=1705428404",
        "max": "http://cdn.akamai.steamstatic.com/steam/apps/256994373/movie_max.mp4?t=1705428404"
      },
      "highlight": true,
      "name": "Launch Trailer (US-EN)"
    },
    {
      "id": 256992403,
      "webm": {
        "480": "http://cdn.akamai.steamstatic.com/steam/apps/256992403/movie480_vp9.webm?t=1704816615",
        "max": "http://cdn.akamai.steamstatic.com/steam/apps/256992403/movie_max_vp9.webm?t=1704816615"
      },
      "mp4": {
        "480": "http://cdn.akamai.steamstatic.com/steam/apps/256992403/movie480.mp4?t=1704816615",
        "max": "http://cdn.akamai.steamstatic.com/steam/apps/256992403/movie_max.mp4?t=1704816615"
      },
      "highlight": true,
      "name": "PC Trailer (US-EN)"
    },
    {
      "id": 256971096,
      "name": "Pre-Purchase Trailer (US_EN)",
      "webm": {
        "480": "http://cdn.akamai.steamstatic.com/steam/apps/256971096/movie480_vp9.webm?t=1695379302",
        "max": "http://cdn.akamai.steamstatic.com/steam/apps/256971096/movie_max_vp9.webm?t=1695379302"
      },
      "mp4": {
        "480": "http://cdn.akamai.steamstatic.com/steam/apps/256971096/movie480.mp4?t=1695379302",
        "max": "http://cdn.akamai.steamstatic.com/steam/apps/256971096/movie_max.mp4?t=1695379302"
      },
      "highlight": true
    },
    {
      "mp4": {
        "480": "http://cdn.akamai.steamstatic.com/steam/apps/256957675/movie480.mp4?t=1691444486",
        "max": "http://cdn.akamai.steamstatic.com/steam/apps/256957675/movie_max.mp4?t=1691444486"
      },
      "webm": {
        "480": "http://cdn.akamai.steamstatic.com/steam/apps/256957675/movie480_vp9.webm?t=1691444486",
        "max": "http://cdn.akamai.steamstatic.com/steam/apps/256957675/movie_max_vp9.webm?t=1691444486"
      },
      "id": 256957675,
      "highlight": true,
      "name": "Co-op & Combat Trailer (US-EN)"
    },
    {
      "webm": {
        "480": "http://cdn.akamai.steamstatic.com/steam/apps/256954185/movie480_vp9.webm?t=1687299549",
        "max": "http://cdn.akamai.steamstatic.com/steam/apps/256954185/movie_max_vp9.webm?t=1687299549"
      },
      "mp4": {
        "480": "http://cdn.akamai.steamstatic.com/steam/apps/256954185/movie480.mp4?t=1687299549",
        "max": "http://cdn.akamai.steamstatic.com/steam/apps/256954185/movie_max.mp4?t=1687299549"
      },
      "id": 256954185,
      "highlight": true,
      "name": "Reveal Trailer (US-EN)"
    }
  ],
  "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/553850/header.jpg?t=1709666906",
  "short_description": "La última línea ofensiva de la galaxia. Enlístate en los Helldivers y únete a la lucha por la libertad en una galaxia hostil en este juego de disparos en tercera persona frenético y feroz.",
  "developers": ["Arrowhead Game Studios"],
  "detailed_description": "<h1>Digital Deluxe Edition</h1><p><img src='https://cdn.akamai.steamstatic.com/steam/apps/553850/extras/SCE_1x1_MX_AN.jpg?t=1709666906' /><br><br>La edición incluye:<br><ul class='bb_ul'><li>Conjunto de armadura &quot;DP-53 Salvador de los libres&quot;.<br></li><li>Capa &quot;Voluntad del pueblo&quot;.<br></li><li>Arma &quot;MP-98 Caballero&quot;.<br></li><li>Estatus de Superciudadano.<br></li><li>Juego de la nave Héroe de estratagemas.<br></li><li>Bono de guerra premium &quot;Veteranos templados&quot;.</li></ul></p><br><h1>Acerca del juego</h1><img src='https://cdn.akamai.steamstatic.com/steam/apps/553850/extras/SuperEarthSTEAM.gif?t=1709666906' /><br>La última línea ofensiva de la galaxia.<br><br>Enlístate en los Helldivers y únete a la lucha por la libertad en una galaxia hostil en este juego de disparos en tercera persona frenético y feroz.<br><br><img src='https://cdn.akamai.steamstatic.com/steam/apps/553850/extras/BugAssaultSTEAM.gif?t=1709666906' /><h2 class='bb_tag'>TRANSMISIÓN URGENTE - FUERZAS ARMADAS DE LA SUPERTIERRA</h2>Libertad. Paz. Democracia. <br>Tus derechos inalienables por ser ciudadano de la Supertierra. Los pilares de nuestra civilización. <br>De nuestra existencia. <br>Pero la guerra no cesa. Todo está bajo amenaza una vez más.<br>Únete a la fuerza militar más poderosa de la galaxia y conviértela en un lugar libre y seguro para vivir.<br><br><img src='https://cdn.akamai.steamstatic.com/steam/apps/553850/extras/StratagemSTEAM.gif?t=1709666906' /><h2 class='bb_tag'>CONVIÉRTETE EN LEYENDA</h2>Serás parte de un escuadrón de cuatro Helldivers y te asignarán misiones estratégicas.<br>Cuídense las espaldas; el fuego amigo es una realidad desafortunada de la guerra, pero sin trabajo en equipo la victoria es imposible.*<br><br><img src='https://cdn.akamai.steamstatic.com/steam/apps/553850/extras/EagleExplosionsSTEAM.gif?t=1709666906' /><h2 class='bb_tag'>EQUIPAMIENTO</h2>Haz que llueva la libertad desde el cielo, entra sigilosamente en territorio enemigo o carga con valor hacia las fauces del combate.<br>Tú decides cómo quieres que llegue la libertad; tendrás acceso a mucho armamento explosivo, armaduras protectoras y estratagemas que puedan cambiar el curso de la batalla... la joya en el arsenal de todo Helldiver.<br><br><img src='https://cdn.akamai.steamstatic.com/steam/apps/553850/extras/ChargerChargeSTEAM.gif?t=1709666906' /><h2 class='bb_tag'>SOLICITUD</h2>La Supertierra premia tus esfuerzos con las valiosas solicitudes. Úsalas para acceder a recompensas para ti, tu escuadrón, tu nave destructora y la campaña de guerra.<br><br><img src='https://cdn.akamai.steamstatic.com/steam/apps/553850/extras/StriderSTEAM.gif?t=1709666906' /><h2 class='bb_tag'>AMENAZAS</h2>Todas las criaturas de todos los planetas quieren matarnos. Esa es la gravedad de la situación.<br>Cada enemigo tiene sus propias características, tácticas y comportamientos impredecibles, pero todos luchan ferozmente sin miedo ni moral.<br><br><img src='https://cdn.akamai.steamstatic.com/steam/apps/553850/extras/SquadRunningSTEAM.gif?t=1709666906' /><h2 class='bb_tag'>LA GUERRA GALÁCTICA</h2>Captura planetas enemigos, detén invasiones y completa misiones para ayudar a nuestra causa.<br>El destino de esta guerra se decidirá según las acciones de todos.<br>Si no luchamos juntos, moriremos."
}`);