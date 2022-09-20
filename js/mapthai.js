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
           {
             minvalue: "0.5",
             maxvalue: "1.0",
             color: "#FFD74D"
           },
           {
             minvalue: "1.0",
             maxvalue: "2.0",
             color: "#FB8C00"
           },
           {
             minvalue: "2.0",
             maxvalue: "3.0",
             color: "#E65100"
           }
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
      /* linkeddata: [
         {
           id: "NAM",
           linkedchart: {
             chart: {
               caption: "Average Annual Population Growth - North America",
               subcaption: "1955 - 2015",
               yaxisname: "Growth",
               numbersuffix: "%",
               palettecolors: "FFD74D",
               theme: "fusion"
             },
             data: [
               {
                 label: "1955",
                 value: "1.5078"
               },
               {
                 label: "1960",
                 value: "1.5502"
               },
               {
                 label: "1965",
                 value: "1.3121"
               },
               {
                 label: "1970",
                 value: "0.8648"
               },
               {
                 label: "1975",
                 value: "0.6402"
               },
               {
                 label: "1980",
                 value: "0.62"
               },
               {
                 label: "1985",
                 value: "0.6748"
               },
               {
                 label: "1990",
                 value: "0.6882"
               },
               {
                 label: "1995",
                 value: "0.6804"
               },
               {
                 label: "2000",
                 value: "0.5627"
               },
               {
                 label: "2005",
                 value: "0.5373"
               },
               {
                 label: "2010",
                 value: "0.5536"
               },
               {
                 label: "2015",
                 value: "0.4291"
               }
             ]
           }
         },
         {
           id: "SAM",
           linkedchart: {
             chart: {
               caption: "Average Annual Population Growth - South America",
               subcaption: "1955 - 2015",
               yaxisname: "Growth",
               numbersuffix: "%",
               palettecolors: "E65100",
               theme: "fusion"
             },
             data: [
               {
                 label: "1955",
                 value: "2.6275"
               },
               {
                 label: "1960",
                 value: "2.6995"
               },
               {
                 label: "1965",
                 value: "2.757"
               },
               {
                 label: "1970",
                 value: "2.5376"
               },
               {
                 label: "1975",
                 value: "2.3431"
               },
               {
                 label: "1980",
                 value: "2.3261"
               },
               {
                 label: "1985",
                 value: "2.2036"
               },
               {
                 label: "1990",
                 value: "1.9611"
               },
               {
                 label: "1995",
                 value: "1.7184"
               },
               {
                 label: "2000",
                 value: "1.5965"
               },
               {
                 label: "2005",
                 value: "1.4482"
               },
               {
                 label: "2010",
                 value: "1.2031"
               },
               {
                 label: "2015",
                 value: "1.0698"
               }
             ]
           }
         },
         {
           id: "ASI",
           linkedchart: {
             chart: {
               caption: "Average Annual Population Growth - Asia",
               subcaption: "1955 - 2015",
               yaxisname: "Growth",
               numbersuffix: "%",
               theme: "fusion",
               palettecolors: "FB8C00"
             },
             data: [
               {
                 label: "1955",
                 value: "1.9075"
               },
               {
                 label: "1960",
                 value: "1.8842"
               },
               {
                 label: "1965",
                 value: "2.1082"
               },
               {
                 label: "1970",
                 value: "2.4554"
               },
               {
                 label: "1975",
                 value: "2.3036"
               },
               {
                 label: "1980",
                 value: "1.9889"
               },
               {
                 label: "1985",
                 value: "1.9683"
               },
               {
                 label: "1990",
                 value: "2.0176"
               },
               {
                 label: "1995",
                 value: "1.6823"
               },
               {
                 label: "2000",
                 value: "1.3682"
               },
               {
                 label: "2005",
                 value: "1.2435"
               },
               {
                 label: "2010",
                 value: "1.1661"
               },
               {
                 label: "2015",
                 value: "1.0731"
               }
             ]
           }
         },
         {
           id: "EUP",
           linkedchart: {
             chart: {
               caption: "Average Annual Population Growth - Europe",
               subcaption: "1955 - 2015",
               yaxisname: "Growth",
               numbersuffix: "%",
               theme: "fusion",
               palettecolors: "FFE0B2"
             },
             data: [
               {
                 label: "1955",
                 value: "1.026"
               },
               {
                 label: "1960",
                 value: "1.0652"
               },
               {
                 label: "1965",
                 value: "0.9381"
               },
               {
                 label: "1970",
                 value: "0.6925"
               },
               {
                 label: "1975",
                 value: "0.54"
               },
               {
                 label: "1980",
                 value: "0.4218"
               },
               {
                 label: "1985",
                 value: "0.354"
               },
               {
                 label: "1990",
                 value: "0.2971"
               },
               {
                 label: "1995",
                 value: "0.0276"
               },
               {
                 label: "2000",
                 value: "-0.1301"
               },
               {
                 label: "2005",
                 value: "-0.1558"
               },
               {
                 label: "2010",
                 value: "-0.0576"
               },
               {
                 label: "2015",
                 value: "-0.0292"
               }
             ]
           }
         },
         {
           id: "AFC",
           linkedchart: {
             chart: {
               caption: "Average Annual Population Growth - Africa",
               subcaption: "1955 - 2015",
               yaxisname: "Growth",
               numbersuffix: "%",
               theme: "fusion",
               palettecolors: "E65100"
             },
             data: [
               {
                 label: "1955",
                 value: "2.1242"
               },
               {
                 label: "1960",
                 value: "2.338"
               },
               {
                 label: "1965",
                 value: "2.5075"
               },
               {
                 label: "1970",
                 value: "2.5947"
               },
               {
                 label: "1975",
                 value: "2.7175"
               },
               {
                 label: "1980",
                 value: "2.8398"
               },
               {
                 label: "1985",
                 value: "2.8857"
               },
               {
                 label: "1990",
                 value: "2.8243"
               },
               {
                 label: "1995",
                 value: "2.6172"
               },
               {
                 label: "2000",
                 value: "2.5072"
               },
               {
                 label: "2005",
                 value: "2.4853"
               },
               {
                 label: "2010",
                 value: "2.5593"
               },
               {
                 label: "2015",
                 value: "2.6001"
               }
             ]
           }
         },
         {
           id: "AUS",
           linkedchart: {
             chart: {
               caption: "Average Annual Population Growth - Oceania",
               subcaption: "1955 - 2015",
               yaxisname: "Growth",
               numbersuffix: "%",
               theme: "fusion",
               palettecolors: "FB8C00"
             },
             data: [
               {
                 label: "1955",
                 value: "1.511"
               },
               {
                 label: "1960",
                 value: "1.6045"
               },
               {
                 label: "1965",
                 value: "1.5578"
               },
               {
                 label: "1970",
                 value: "1.455"
               },
               {
                 label: "1975",
                 value: "1.4727"
               },
               {
                 label: "1980",
                 value: "1.2404"
               },
               {
                 label: "1985",
                 value: "1.2398"
               },
               {
                 label: "1990",
                 value: "1.1853"
               },
               {
                 label: "1995",
                 value: "1.2006"
               },
               {
                 label: "2000",
                 value: "1.1244"
               },
               {
                 label: "2005",
                 value: "1.0724"
               },
               {
                 label: "2010",
                 value: "1.1255"
               },
               {
                 label: "2015",
                 value: "1.0397"
               }
             ]
           }
         }
       ]*/
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