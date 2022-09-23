$("#chart-container").insertFusionCharts({
     type: "maps/thailand",
     width: "100%",
     height: "100%",
     dataFormat: "json",
     dataSource: {
       chart: {
         //caption: "Average Annual Population Growth",
        // subcaption: "Click on a continent to see trend from 1955-2015",
         numbersuffix: "",
         includevalueinlabels: "1",
         labelsepchar: ": ",
         entityfillhovercolor: "#FFF9C4",
         theme: "fusion"
       },
       colorrange: {
         minvalue: "0",
         code: "#FFE0B2",
         gradient: "1",
         color: [
          //  {
          //    minvalue: "0.5",
          //    maxvalue: "1.0",
          //    color: "#FFD74D"
          //  },
          //  {
          //    minvalue: "1.0",
          //    maxvalue: "2.0",
          //    color: "#FB8C00"
          //  },
          //  {
          //    minvalue: "2.0",
          //    maxvalue: "3.0",
          //    color: "#E65100"
          //  }
         ]
       },
       data: [
         {
           id: "TH.BG",
           value: ".82",
           showlabel: "1",
         //  link: "newchart-json-NAM"
         },
         {
           id: "TH.BK",
           value: "2.04",
           showlabel: "1",
           //link: "newchart-json-SAM"
         },
         {
           id: "TH.BR",
           value: "1.78",
           showlabel: "1",
          // link: "newchart-json-ASI"
         },
         {
           id: "TH.CC",
           value: ".40",
           showlabel: "1",
          // link: "newchart-json-EUP"
         },
         {
           id: "TH.CN",
           value: "2.58",
           showlabel: "1",
           //link: "newchart-json-AFC"
         },
         {
           id: "TH.CY",
           value: "1.30",
           showlabel: "1",
           //link: "newchart-json-AUS"
         }
       ],
     }
   });
   
   
   
   /*
   ID	Short label	Label
   TH.AC	AC	Amnat Charoen
   TH.AT	AT	Ang Thong
   TH.AU	AU	Ayutthaya
   TH.BG	BG	Bangkok
   TH.BK	BK	BuengKan
   TH.BR	BR	Buri Ram
   TH.CC	CC	Chachoengsao
   TH.CN	CN	Chai Nat
   TH.CY	CY	Chaiyaphum
   TH.CT	CT	Chanthaburi
   TH.CM	CM	Chiang Mai
   TH.CR	CR	Chiang Rai
   TH.CB	CB	Chon Buri
   TH.CP	CP	Chumphon
   TH.KL	KL	Kalasin
   TH.KP	KP	Kamphaeng Phet
   TH.KN	KN	Kanchanaburi
   TH.KK	KK	Khon Kaen
   TH.KR	KR	Krabi
   TH.LG	LG	Lampang
   TH.LN	LN	Lamphun
   TH.LE	LE	Loei
   TH.LB	LB	Lop Buri
   TH.MH	MH	Mae Hong Son
   TH.MS	MS	Maha Sarakham
   TH.MD	MD	Mukdahan
   TH.NN	NN	Nakhon Nayok
   TH.NP	NP	Nakhon Pathom
   TH.NF	NF	Nakhon Phanom
   TH.NR	NR	Nakhon Ratchasima
   TH.NS	NS	Nakhon Sawan
   TH.NT	NT	Nakhon Si Thammarat
   TH.NA	NA	Nan
   TH.NW	NW	Narathiwat
   TH.NB	NB	Nong Bua Lamphu
   TH.NK	NK	Nong Khai
   TH.NO	NO	Nonthaburi
   TH.PT	PT	Pathum Thani
   TH.PI	PI	Pattani
   TH.PG	PG	Phang Nga
   TH.PL	PL	Phatthalung
   TH.PY	PY	Phayao
   TH.PH	PH	Phetchabun
   TH.PE	PE	Phetchaburi
   TH.PC	PC	Phichit
   TH.PS	PS	Phitsanulok
   TH.PR	PR	Phrae
   TH.PU	PU	Phuket
   TH.PB	PB	Prachin Buri
   TH.PK	PK	Prachuap Khiri Khan
   TH.RN	RN	Ranong
   TH.RT	RT	Ratchaburi
   TH.RY	RY	Rayong
   TH.RE	RE	Roi Et
   TH.SK	SK	Sa Kaeo
   TH.SN	SN	Sakon Nakhon
   TH.SP	SP	Samut Prakan
   TH.SS	SS	Samut Sakhon
   TH.SM	SM	Samut Songkhram
   TH.SR	SR	Saraburi
   TH.SA	SA	Satun
   TH.SI	SI	Si Sa Ket
   TH.SB	SB	Sing Buri
   TH.SG	SG	Songkhla
   TH.SO	SO	Sukhothai
   TH.SH	SH	Suphan Buri
   TH.ST	ST	Surat Thani
   TH.SU	SU	Surin
   TH.TK	TK	Tak
   TH.TG	TG	Trang
   TH.TT	TT	Trat
   TH.UR	UR	Ubon Ratchathani
   TH.UN	UN	Udon Thani
   TH.UT	UT	Uthai Thani
   TH.UD	UD	Uttaradit
   TH.YL	YL	Yala
   TH.YS	YS	Yasothon
   */