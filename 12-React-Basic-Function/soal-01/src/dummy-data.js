const data = [
  {
    mal_id: 5114,
    rank: 1,
    title: "Fullmetal Alchemist: Brotherhood",
    url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
    type: "TV",
    episodes: 64,
    start_date: "Apr 2009",
    end_date: "Jul 2010",
    members: 2649743,
    score: 9.16
  },
  {
    mal_id: 28977,
    rank: 2,
    title: "Gintama\u00b0",
    url: "https://myanimelist.net/anime/28977/Gintama\u00b0",
    image_url:
      "https://cdn.myanimelist.net/images/anime/3/72078.jpg?s=e9537ac90c08758594c787ede117f209",
    type: "TV",
    episodes: 51,
    start_date: "Apr 2015",
    end_date: "Mar 2016",
    members: 475052,
    score: 9.1
  },
  {
    mal_id: 38524,
    rank: 3,
    title: "Shingeki no Kyojin Season 3 Part 2",
    url:
      "https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1517/100633.jpg?s=4540a01b5883647ade494cd28392f100",
    type: "TV",
    episodes: 10,
    start_date: "Apr 2019",
    end_date: "Jul 2019",
    members: 1560848,
    score: 9.09
  },
  {
    mal_id: 9253,
    rank: 4,
    title: "Steins;Gate",
    url: "https://myanimelist.net/anime/9253/Steins_Gate",
    image_url:
      "https://cdn.myanimelist.net/images/anime/5/73199.jpg?s=97b97d568f25a02cf5a22dda13b5371f",
    type: "TV",
    episodes: 24,
    start_date: "Apr 2011",
    end_date: "Sep 2011",
    members: 2072765,
    score: 9.09
  },
  {
    mal_id: 42938,
    rank: 5,
    title: "Fruits Basket: The Final",
    url: "https://myanimelist.net/anime/42938/Fruits_Basket__The_Final",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1085/114792.jpg?s=bb4303c0804c9d5ca9fcb30b8f8e6783",
    type: "TV",
    episodes: 13,
    start_date: "Apr 2021",
    end_date: "Jun 2021",
    members: 264229,
    score: 9.07
  },
  {
    mal_id: 9969,
    rank: 6,
    title: "Gintama'",
    url: "https://myanimelist.net/anime/9969/Gintama",
    image_url:
      "https://cdn.myanimelist.net/images/anime/4/50361.jpg?s=b3a061db8c3d42a055d58f9df1f3dac7",
    type: "TV",
    episodes: 51,
    start_date: "Apr 2011",
    end_date: "Mar 2012",
    members: 424938,
    score: 9.06
  },
  {
    mal_id: 11061,
    rank: 7,
    title: "Hunter x Hunter (2011)",
    url: "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011",
    image_url:
      "https://cdn.myanimelist.net/images/anime/11/33657.jpg?s=5724d8c22ae7a1dad72d8f4229ef803f",
    type: "TV",
    episodes: 148,
    start_date: "Oct 2011",
    end_date: "Sep 2014",
    members: 2123271,
    score: 9.06
  },
  {
    mal_id: 820,
    rank: 8,
    title: "Ginga Eiyuu Densetsu",
    url: "https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu",
    image_url:
      "https://cdn.myanimelist.net/images/anime/13/13225.jpg?s=385cedad342e284c5765833ab1cddc1c",
    type: "OVA",
    episodes: 110,
    start_date: "Jan 1988",
    end_date: "Mar 1997",
    members: 260870,
    score: 9.05
  },
  {
    mal_id: 15417,
    rank: 9,
    title: "Gintama': Enchousen",
    url: "https://myanimelist.net/anime/15417/Gintama__Enchousen",
    image_url:
      "https://cdn.myanimelist.net/images/anime/6/75172.jpg?s=38a6e800ace5bcbee7a17b6c351ba987",
    type: "TV",
    episodes: 13,
    start_date: "Oct 2012",
    end_date: "Mar 2013",
    members: 258670,
    score: 9.03
  },
  {
    mal_id: 39486,
    rank: 10,
    title: "Gintama: The Final",
    url: "https://myanimelist.net/anime/39486/Gintama__The_Final",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1245/116760.jpg?s=8f52d6ff46ef1233eb9fcd542434221c",
    type: "Movie",
    episodes: 1,
    start_date: "Jan 2021",
    end_date: "Jan 2021",
    members: 76210,
    score: 9.01
  },
  {
    mal_id: 34096,
    rank: 11,
    title: "Gintama.",
    url: "https://myanimelist.net/anime/34096/Gintama",
    image_url:
      "https://cdn.myanimelist.net/images/anime/3/83528.jpg?s=948f092dd55fb2572f38a0e21f03b642",
    type: "TV",
    episodes: 12,
    start_date: "Jan 2017",
    end_date: "Mar 2017",
    members: 242478,
    score: 8.99
  },
  {
    mal_id: 35180,
    rank: 12,
    title: "3-gatsu no Lion 2nd Season",
    url: "https://myanimelist.net/anime/35180/3-gatsu_no_Lion_2nd_Season",
    image_url:
      "https://cdn.myanimelist.net/images/anime/3/88469.jpg?s=becfbf556902bc3501e06a07354b9d76",
    type: "TV",
    episodes: 22,
    start_date: "Oct 2017",
    end_date: "Mar 2018",
    members: 319929,
    score: 8.98
  },
  {
    mal_id: 28851,
    rank: 13,
    title: "Koe no Katachi",
    url: "https://myanimelist.net/anime/28851/Koe_no_Katachi",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1122/96435.jpg?s=56d2750d600af93a5d326daec7748cae",
    type: "Movie",
    episodes: 1,
    start_date: "Sep 2016",
    end_date: "Sep 2016",
    members: 1747751,
    score: 8.97
  },
  {
    mal_id: 4181,
    rank: 14,
    title: "Clannad: After Story",
    url: "https://myanimelist.net/anime/4181/Clannad__After_Story",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1299/110774.jpg?s=fcd9db2cfd72c10a2278f483173cfff9",
    type: "TV",
    episodes: 24,
    start_date: "Oct 2008",
    end_date: "Mar 2009",
    members: 1018347,
    score: 8.95
  },
  {
    mal_id: 918,
    rank: 15,
    title: "Gintama",
    url: "https://myanimelist.net/anime/918/Gintama",
    image_url:
      "https://cdn.myanimelist.net/images/anime/10/73274.jpg?s=ed42453c10ba12b03b1600d02725a174",
    type: "TV",
    episodes: 201,
    start_date: "Apr 2006",
    end_date: "Mar 2010",
    members: 878022,
    score: 8.95
  },
  {
    mal_id: 15335,
    rank: 16,
    title: "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
    url:
      "https://myanimelist.net/anime/15335/Gintama_Movie_2__Kanketsu-hen_-_Yorozuya_yo_Eien_Nare",
    image_url:
      "https://cdn.myanimelist.net/images/anime/10/51723.jpg?s=27cd24446486572fb64c42a689d38902",
    type: "Movie",
    episodes: 1,
    start_date: "Jul 2013",
    end_date: "Jul 2013",
    members: 194303,
    score: 8.94
  },
  {
    mal_id: 2904,
    rank: 17,
    title: "Code Geass: Hangyaku no Lelouch R2",
    url:
      "https://myanimelist.net/anime/2904/Code_Geass__Hangyaku_no_Lelouch_R2",
    image_url:
      "https://cdn.myanimelist.net/images/anime/4/9391.jpg?s=be052972605dd5422ef2df117766cff0",
    type: "TV",
    episodes: 25,
    start_date: "Apr 2008",
    end_date: "Sep 2008",
    members: 1455558,
    score: 8.91
  },
  {
    mal_id: 35247,
    rank: 18,
    title: "Owarimonogatari 2nd Season",
    url: "https://myanimelist.net/anime/35247/Owarimonogatari_2nd_Season",
    image_url:
      "https://cdn.myanimelist.net/images/anime/6/87322.jpg?s=3e60507a4b6016d83e7433aa4cb7853e",
    type: "TV",
    episodes: 7,
    start_date: "Aug 2017",
    end_date: "Aug 2017",
    members: 319141,
    score: 8.91
  },
  {
    mal_id: 40028,
    rank: 19,
    title: "Shingeki no Kyojin: The Final Season",
    url:
      "https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1000/110531.jpg?s=3df5ebb6800604dc04c6a6187dd7161b",
    type: "TV",
    episodes: 16,
    start_date: "Dec 2020",
    end_date: "Mar 2021",
    members: 1312684,
    score: 8.91
  },
  {
    mal_id: 32281,
    rank: 20,
    title: "Kimi no Na wa.",
    url: "https://myanimelist.net/anime/32281/Kimi_no_Na_wa",
    image_url:
      "https://cdn.myanimelist.net/images/anime/5/87048.jpg?s=2bca128fcb9dfd6d0908f3d9986576c6",
    type: "Movie",
    episodes: 1,
    start_date: "Aug 2016",
    end_date: "Aug 2016",
    members: 2128768,
    score: 8.89
  },
  {
    mal_id: 37491,
    rank: 21,
    title: "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen",
    url:
      "https://myanimelist.net/anime/37491/Gintama__Shirogane_no_Tamashii-hen_-_Kouhan-sen",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1776/96566.jpg?s=e1aed468f049dd9444375e9149d33d65",
    type: "TV",
    episodes: 14,
    start_date: "Jul 2018",
    end_date: "Oct 2018",
    members: 144034,
    score: 8.88
  },
  {
    mal_id: 37987,
    rank: 22,
    title: "Violet Evergarden Movie",
    url: "https://myanimelist.net/anime/37987/Violet_Evergarden_Movie",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1825/110716.jpg?s=3ad8359182d0b47905f28d0a68683171",
    type: "Movie",
    episodes: 1,
    start_date: "Sep 2020",
    end_date: "Sep 2020",
    members: 313415,
    score: 8.88
  },
  {
    mal_id: 44074,
    rank: 23,
    title: "Shiguang Dailiren",
    url: "https://myanimelist.net/anime/44074/Shiguang_Dailiren",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1135/114867.jpg?s=048f06f7edb150d017394574a108c72c",
    type: "ONA",
    episodes: 11,
    start_date: "Apr 2021",
    end_date: "Jul 2021",
    members: 120555,
    score: 8.87
  },
  {
    mal_id: 37510,
    rank: 24,
    title: "Mob Psycho 100 II",
    url: "https://myanimelist.net/anime/37510/Mob_Psycho_100_II",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1918/96303.jpg?s=b5b51cff7ba201e4f1acf37f4f44e224",
    type: "TV",
    episodes: 13,
    start_date: "Jan 2019",
    end_date: "Apr 2019",
    members: 1078522,
    score: 8.82
  },
  {
    mal_id: 36838,
    rank: 25,
    title: "Gintama.: Shirogane no Tamashii-hen",
    url:
      "https://myanimelist.net/anime/36838/Gintama__Shirogane_no_Tamashii-hen",
    image_url:
      "https://cdn.myanimelist.net/images/anime/12/89603.jpg?s=635cb89402d5d39f43767f3942e91206",
    type: "TV",
    episodes: 12,
    start_date: "Jan 2018",
    end_date: "Mar 2018",
    members: 157218,
    score: 8.82
  },
  {
    mal_id: 32935,
    rank: 26,
    title: "Haikyuu!!: Karasuno Koukou vs. Shiratorizawa Gakuen Koukou",
    url:
      "https://myanimelist.net/anime/32935/Haikyuu__Karasuno_Koukou_vs_Shiratorizawa_Gakuen_Koukou",
    image_url:
      "https://cdn.myanimelist.net/images/anime/7/81992.jpg?s=6d977383e0b5dc1ba1c122213178e547",
    type: "TV",
    episodes: 10,
    start_date: "Oct 2016",
    end_date: "Dec 2016",
    members: 923740,
    score: 8.81
  },
  {
    mal_id: 31758,
    rank: 27,
    title: "Kizumonogatari III: Reiketsu-hen",
    url: "https://myanimelist.net/anime/31758/Kizumonogatari_III__Reiketsu-hen",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1084/112813.jpg?s=db4fcf9c5e229584ca1b04bcebe2c3dc",
    type: "Movie",
    episodes: 1,
    start_date: "Jan 2017",
    end_date: "Jan 2017",
    members: 366211,
    score: 8.81
  },
  {
    mal_id: 19,
    rank: 28,
    title: "Monster",
    url: "https://myanimelist.net/anime/19/Monster",
    image_url:
      "https://cdn.myanimelist.net/images/anime/10/18793.jpg?s=08c4f10a101c3835eeb14ca0715512bd",
    type: "TV",
    episodes: 74,
    start_date: "Apr 2004",
    end_date: "Sep 2005",
    members: 753701,
    score: 8.8
  },
  {
    mal_id: 199,
    rank: 29,
    title: "Sen to Chihiro no Kamikakushi",
    url: "https://myanimelist.net/anime/199/Sen_to_Chihiro_no_Kamikakushi",
    image_url:
      "https://cdn.myanimelist.net/images/anime/6/79597.jpg?s=1f170071bc9a54ce2ba3c0d8c7aa6927",
    type: "Movie",
    episodes: 1,
    start_date: "Jul 2001",
    end_date: "Jul 2001",
    members: 1474765,
    score: 8.8
  },
  {
    mal_id: 46102,
    rank: 30,
    title: "Odd Taxi",
    url: "https://myanimelist.net/anime/46102/Odd_Taxi",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1981/113348.jpg?s=38082dbb5a64de5fc2129a59c46c3fe0",
    type: "TV",
    episodes: 13,
    start_date: "Apr 2021",
    end_date: "Jun 2021",
    members: 194711,
    score: 8.79
  },
  {
    mal_id: 17074,
    rank: 31,
    title: "Monogatari Series: Second Season",
    url: "https://myanimelist.net/anime/17074/Monogatari_Series__Second_Season",
    image_url:
      "https://cdn.myanimelist.net/images/anime/3/52133.jpg?s=b22811f98b26399cd65787af1447848c",
    type: "TV",
    episodes: 26,
    start_date: "Jul 2013",
    end_date: "Dec 2013",
    members: 572751,
    score: 8.78
  },
  {
    mal_id: 1,
    rank: 32,
    title: "Cowboy Bebop",
    url: "https://myanimelist.net/anime/1/Cowboy_Bebop",
    image_url:
      "https://cdn.myanimelist.net/images/anime/4/19644.jpg?s=bb1e96eb0a0224a57aa45443eab92575",
    type: "TV",
    episodes: 26,
    start_date: "Apr 1998",
    end_date: "Apr 1999",
    members: 1460680,
    score: 8.77
  },
  {
    mal_id: 33095,
    rank: 33,
    title: "Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen",
    url:
      "https://myanimelist.net/anime/33095/Shouwa_Genroku_Rakugo_Shinjuu__Sukeroku_Futatabi-hen",
    image_url:
      "https://cdn.myanimelist.net/images/anime/10/82947.jpg?s=9f1dd28adde3fea5a733d1cfd7be7ad6",
    type: "TV",
    episodes: 12,
    start_date: "Jan 2017",
    end_date: "Mar 2017",
    members: 158048,
    score: 8.76
  },
  {
    mal_id: 24701,
    rank: 34,
    title: "Mushishi Zoku Shou 2nd Season",
    url: "https://myanimelist.net/anime/24701/Mushishi_Zoku_Shou_2nd_Season",
    image_url:
      "https://cdn.myanimelist.net/images/anime/9/68095.jpg?s=6025adedafce15a9d2c9363e225241ba",
    type: "TV",
    episodes: 10,
    start_date: "Oct 2014",
    end_date: "Dec 2014",
    members: 221720,
    score: 8.75
  },
  {
    mal_id: 33050,
    rank: 35,
    title: "Fate/stay night Movie: Heaven's Feel - III. Spring Song",
    url:
      "https://myanimelist.net/anime/33050/Fate_stay_night_Movie__Heavens_Feel_-_III_Spring_Song",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1142/112957.jpg?s=f0984cb6fcb8188ce26035b0b56de828",
    type: "Movie",
    episodes: 1,
    start_date: "Aug 2020",
    end_date: "Aug 2020",
    members: 223055,
    score: 8.75
  },
  {
    mal_id: 263,
    rank: 36,
    title: "Hajime no Ippo",
    url: "https://myanimelist.net/anime/263/Hajime_no_Ippo",
    image_url:
      "https://cdn.myanimelist.net/images/anime/4/86334.jpg?s=4b3096d30158e251d87c196e56c04e63",
    type: "TV",
    episodes: 75,
    start_date: "Oct 2000",
    end_date: "Mar 2002",
    members: 439875,
    score: 8.74
  },
  {
    mal_id: 40748,
    rank: 37,
    title: "Jujutsu Kaisen (TV)",
    url: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen_TV",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79",
    type: "TV",
    episodes: 24,
    start_date: "Oct 2020",
    end_date: "Mar 2021",
    members: 1480972,
    score: 8.73
  },
  {
    mal_id: 37521,
    rank: 38,
    title: "Vinland Saga",
    url: "https://myanimelist.net/anime/37521/Vinland_Saga",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1500/103005.jpg?s=b21dbd168612f531ce4eec9bd53e272b",
    type: "TV",
    episodes: 24,
    start_date: "Jul 2019",
    end_date: "Dec 2019",
    members: 931136,
    score: 8.73
  },
  {
    mal_id: 44,
    rank: 39,
    title: "Rurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen",
    url:
      "https://myanimelist.net/anime/44/Rurouni_Kenshin__Meiji_Kenkaku_Romantan_-_Tsuioku-hen",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1807/102419.jpg?s=f66e01379baa6d60de8ce23f0fbf2fe1",
    type: "OVA",
    episodes: 4,
    start_date: "Feb 1999",
    end_date: "Sep 1999",
    members: 244749,
    score: 8.72
  },
  {
    mal_id: 40456,
    rank: 40,
    title: "Kimetsu no Yaiba Movie: Mugen Ressha-hen",
    url:
      "https://myanimelist.net/anime/40456/Kimetsu_no_Yaiba_Movie__Mugen_Ressha-hen",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1704/106947.jpg?s=685b7fa652f5b3df29bd20fc2c8cb32e",
    type: "Movie",
    episodes: 1,
    start_date: "Oct 2020",
    end_date: "Oct 2020",
    members: 840794,
    score: 8.72
  },
  {
    mal_id: 1575,
    rank: 41,
    title: "Code Geass: Hangyaku no Lelouch",
    url: "https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch",
    image_url:
      "https://cdn.myanimelist.net/images/anime/5/50331.jpg?s=afd09d7e5d76283418a1a22e7c122ca9",
    type: "TV",
    episodes: 25,
    start_date: "Oct 2006",
    end_date: "Jul 2007",
    members: 1838454,
    score: 8.71
  },
  {
    mal_id: 21939,
    rank: 42,
    title: "Mushishi Zoku Shou",
    url: "https://myanimelist.net/anime/21939/Mushishi_Zoku_Shou",
    image_url:
      "https://cdn.myanimelist.net/images/anime/13/58533.jpg?s=ff40f900ea0877725ccde517b126c531",
    type: "TV",
    episodes: 10,
    start_date: "Apr 2014",
    end_date: "Jun 2014",
    members: 252410,
    score: 8.71
  },
  {
    mal_id: 3786,
    rank: 43,
    title: "Evangelion: 3.0+1.0 Thrice Upon a Time",
    url:
      "https://myanimelist.net/anime/3786/Evangelion__30_10_Thrice_Upon_a_Time",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1422/113533.jpg?s=1e4f4aa0e597b1c1f082779ab9baa2fc",
    type: "Movie",
    episodes: 1,
    start_date: "Mar 2021",
    end_date: "Mar 2021",
    members: 237363,
    score: 8.7
  },
  {
    mal_id: 34599,
    rank: 44,
    title: "Made in Abyss",
    url: "https://myanimelist.net/anime/34599/Made_in_Abyss",
    image_url:
      "https://cdn.myanimelist.net/images/anime/6/86733.jpg?s=56ac623880ec87f3a0197e0391bc12c3",
    type: "TV",
    episodes: 13,
    start_date: "Jul 2017",
    end_date: "Sep 2017",
    members: 1023808,
    score: 8.7
  },
  {
    mal_id: 36862,
    rank: 45,
    title: "Made in Abyss Movie 3: Fukaki Tamashii no Reimei",
    url:
      "https://myanimelist.net/anime/36862/Made_in_Abyss_Movie_3__Fukaki_Tamashii_no_Reimei",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1502/110723.jpg?s=371a6b383817649bb1d3468f03522f66",
    type: "Movie",
    episodes: 1,
    start_date: "Jan 2020",
    end_date: "Jan 2020",
    members: 278176,
    score: 8.7
  },
  {
    mal_id: 245,
    rank: 46,
    title: "Great Teacher Onizuka",
    url: "https://myanimelist.net/anime/245/Great_Teacher_Onizuka",
    image_url:
      "https://cdn.myanimelist.net/images/anime/13/11460.jpg?s=7e890b7e93b7b57c2de4aa90211931bd",
    type: "TV",
    episodes: 43,
    start_date: "Jun 1999",
    end_date: "Sep 2000",
    members: 670764,
    score: 8.69
  },
  {
    mal_id: 164,
    rank: 47,
    title: "Mononoke Hime",
    url: "https://myanimelist.net/anime/164/Mononoke_Hime",
    image_url:
      "https://cdn.myanimelist.net/images/anime/7/75919.jpg?s=0d877ed9aa60cc49fdb128a2f68386e2",
    type: "Movie",
    episodes: 1,
    start_date: "Jul 1997",
    end_date: "Jul 1997",
    members: 1009467,
    score: 8.69
  },
  {
    mal_id: 23273,
    rank: 48,
    title: "Shigatsu wa Kimi no Uso",
    url: "https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso",
    image_url:
      "https://cdn.myanimelist.net/images/anime/3/67177.jpg?s=bc267f764bffe825e1e8d60f7185a2e9",
    type: "TV",
    episodes: 22,
    start_date: "Oct 2014",
    end_date: "Mar 2015",
    members: 1755334,
    score: 8.69
  },
  {
    mal_id: 457,
    rank: 49,
    title: "Mushishi",
    url: "https://myanimelist.net/anime/457/Mushishi",
    image_url:
      "https://cdn.myanimelist.net/images/anime/2/73862.jpg?s=d976f75f480430a0c9fde4455696131d",
    type: "TV",
    episodes: 26,
    start_date: "Oct 2005",
    end_date: "Jun 2006",
    members: 693380,
    score: 8.68
  },
  {
    mal_id: 2921,
    rank: 50,
    title: "Ashita no Joe 2",
    url: "https://myanimelist.net/anime/2921/Ashita_no_Joe_2",
    image_url:
      "https://cdn.myanimelist.net/images/anime/3/45028.jpg?s=bf58ff0c0759f78bf968a74ec535d0d2",
    type: "TV",
    episodes: 47,
    start_date: "Oct 1980",
    end_date: "Aug 1981",
    members: 36667,
    score: 8.68
  }
];

export default data;
