const data = [
            
                    {PopulationName: "#1 type of Stellar populations" ,  Components: "blue disk stars",          FirstProperty: "metal rich",     SecondProperty: "young and blue", ThirdProperty: "circular orbits"              },
                    {PopulationName: "#2 type of Stellar populations",   Components: "red bulge and halo stars", FirstProperty: "metal poor",     SecondProperty: "old and red",    ThirdProperty: "elliptical and tilted orbits" },
                    {Classification: "galaxy classification",            TypeOne: "ellipticals",                 TypeTwo:"dwarf ellipticals",     TypeThree:"spirals",              TypeFour:"barred spirals", TypeFive:"irregulars"}
                  
                   ];


/* Below is the code that exports the constant named data above. */ 
                
exports.data = data;

const data_ans = [
            
                    {Title: "Type of Stellar Populations",   PopulationName: "#1 type of Stellar populations" ,  Components: "blue disk stars",          FirstProperty: "metal rich",     SecondProperty: "young and blue", ThirdProperty: "circular orbits"              },
                    {Title: "Type of Stellar Populations",   PopulationName: "#2 type of Stellar populations",   Components: "red bulge and halo stars", FirstProperty: "metal poor",     SecondProperty: "old and red",    ThirdProperty: "elliptical and tilted orbits" }
                    
                   ];
                   
exports.data1 = data_ans;

/*const data_ans2 = [
            
                    {Title: "Galaxy Classification",   Classification: "galaxy classification",     TypeOne: "40 point 10",                 TypeTwo:"dwarf ellipticals",     TypeThree:"spirals",              TypeFour:"barred spirals", TypeFive:"irregulars"}
                  
                   ];
 */
const data_ans2 = [
                     {Topic: "Huygens Principle",                     Textbook: "Jewett and Serway 8th Edition",       Pages: "1022-1024",      Section: "35.6",         ProblemPages: "-",          ProblemNumbers: "-"},
                     {Topic: "Young's Double Slit Experiment",        Textbook: "Jewett and Serway 8th Edition",       Pages: "1084-1092",      Section: "37.1-37.3",    ProblemPages: "1102-1110",  ProblemNumbers: "1-27, 44, 46, 48, 53, 54, 56-58, 63, 68, 71"},
                     {Topic: "Michelson Interferometer",              Textbook: "Jewett and Serway 8th Edition",       Pages: "1097-1098",      Section: "37.6",         ProblemPages: "1106-1107",  ProblemNumbers: "40, 41, 52"},
                     {Topic: "Blackbody Radiation",                   Textbook: "Jewett and Serway 8th Edition",       Pages: "1186-1190",      Section: "40.1",         ProblemPages: "1213-1214",  ProblemNumbers: "1-14"},
                     {Topic: "Photoelectric effect",                  Textbook: "Jewett and Serway 8th Edition",       Pages: "1192-1195",      Section: "40.2",         ProblemPages: "1214-1215",  ProblemNumbers: "16-22"},
                     {Topic: "Compton Effect",                        Textbook: "Jewett and Serway 8th Edition",       Pages: "1197-1200",      Section: "40.3",         ProblemPages: "1215",       ProblemNumbers: "23-33"},
                     {Topic: "Planetary Model",                       Textbook: "Jewett and Serway 8th Edition",       Pages: "1254-1255",      Section: "42.2",         ProblemPages: "-",          ProblemNumbers: "-"},
                     {Topic: "Rydberg's Equation",                    Textbook: "Jewett and Serway 8th Edition",       Pages: "1252-1254",      Section: "42.1",         ProblemPages: "1287",       ProblemNumbers: "1-5"},
                     {Topic: "Bohr Model",                            Textbook: "Jewett and Serway 8th Edition",       Pages: "1255-1259",      Section: "42.3",         ProblemPages: "1287-1288",  ProblemNumbers: "8-17"},
                     {Topic: "Uniform Circular Motion",               Textbook: "Jewett and Serway 8th Edition",       Pages: "86-89, 139-140", Section: "4.4-4.5, 6.1", ProblemPages: "-",          ProblemNumbers: "-"},
                     {Topic: "Coulomb's Law",                         Textbook: "Jewett and Serway 8th Edition",       Pages: "661-663",        Section: "25.3",         ProblemPages: "-",          ProblemNumbers: "-"},
                     {Topic: "de Broglie Wavelength",                 Textbook: "Jewett and Serway 8th Edition",       Pages: "1201-1204",      Section: "40.5",         ProblemPages: "1216-1217",  ProblemNumbers: "37-39, 42, 44, 57"},
                     {Topic: "Electron diffraction",                  Textbook: "Jewett and Serway 8th Edition",       Pages: "1207-1208",      Section: "40.7",         ProblemPages: "1216-1217",  ProblemNumbers: "48-50"},
                     {Topic: "Wavefunctions",                         Textbook: "Jewett and Serway 8th Edition",       Pages: "1220-1222",      Section: "41.1",         ProblemPages: "1244-1245",  ProblemNumbers: "1-4"},
                     {Topic: "Uncertainty Principle",                 Textbook: "Jewett and Serway 8th Edition",       Pages: "1208-1209",      Section: "40.8",         ProblemPages: "1217",       ProblemNumbers: "51-56"},
                     {Topic: "Time Independent Schrodinger Equation", Textbook: "Jewett and Serway 8th Edition",       Pages: "1230-1232",      Section: "41.3",         ProblemPages: "1246",       ProblemNumbers: "23-27"},
                     {Topic: "Infinite Square Well",                  Textbook: "Jewett and Serway 8th Edition",       Pages: "1224-1229",      Section: "41.2",         ProblemPages: "1245-1246",  ProblemNumbers: "5-22"},
                     {Topic: "Finite Square Well",                    Textbook: "Jewett and Serway 8th Edition",       Pages: "1232-1234",      Section: "41.1",         ProblemPages: "1246",       ProblemNumbers: "28, 29"},
                     {Topic: "Quantum Tunnelling",                    Textbook: "Jewett and Serway 8th Edition",       Pages: "1234-1235",      Section: "41.4",         ProblemPages: "1246",       ProblemNumbers: "30-34"},
                     {Topic: "Quantum Atom",                          Textbook: "Jewett and Serway 8th Edition",       Pages: "1260-1263",      Section: "42.4",         ProblemPages: "1288-1289",  ProblemNumbers: "18-20"},
                     {Topic: "Quantum Numbers",                       Textbook: "Jewett and Serway 8th Edition",       Pages: "1263-1266",      Section: "42.4-42.5",    ProblemPages: "1289",       ProblemNumbers: "21-25"},
                     {Topic: "Quantum Spin",                          Textbook: "Jewett and Serway 8th Edition",       Pages: "1272-1272",      Section: "42.6",         ProblemPages: "-",          ProblemNumbers: "-"},
                     {Topic: "Exclusion Principle",                   Textbook: "Jewett and Serway 8th Edition",       Pages: "1272-1273",      Section: "42.7",         ProblemPages: "-",          ProblemNumbers: "-"},
                     {Topic: "Multi Electron Atoms",                  Textbook: "Jewett and Serway 8th Edition",       Pages: "1273-1276",      Section: "42.7",         ProblemPages: "-",          ProblemNumbers: "-"},
                     {Topic: "Wein's Law", 					                      Textbook: "Freedman and Kaufmann 8th Edition",	 	Pages: "106-107", 		     Section: "5.4", 		       ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Stefan Boltzmann Law", 			              Textbook: "Freedman and Kaufmann 8th Edition",	 	Pages: "107",	 		        Section: "5.4", 		       ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Kirchoff's Laws", 				                  Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "112",	 		        Section: "5.6", 	       	ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Emission and Absorption Spectra", 		    Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "112-115", 	     	Section: "5.6", 	       	ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Hydrogen Spectrum", 				                Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "116-121", 	     	Section: "5.8", 	       	ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Doppler Effect", 		                   		Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "121-123", 		     Section: "5.9", 	       	ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Stellar Classifications", 			           Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "258, 446-449", 		Section: "13.1, 17.5", 		ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Luminosity Classes", 			               	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "455", 			        Section: "17.8", 	      	ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Hertzsprung Russell Diagrams", 		       Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "452-455", 		     Section: "17.7", 		      ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Hydrogen Fusion", 				                  Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "405-408", 		     Section: "16.1", 	      	ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Solar Neutrinos", 		                  		Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "412-414", 	     	Section: "16.4", 	      	ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Helium Fusion",	 	                    		Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "503-505", 	     	Section: "19.3", 	      	ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Heavy Element Fusion",				              Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "533-536", 	     	Section: "20.5", 	      	ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Star Birth", 					                      Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "477-479", 	     	Section: "18.3", 	      	ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Stellar Evolutionary Tracks", 		       	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "479-481", 		     Section: "18.4", 	      	ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Main Sequence", 				                    Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "497-500", 	     	Section: "19.1", 	      	ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Red Giants", 					                      Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "500-502", 	     	Section: "19.2", 	      	ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Planetary Nebulae", 			                	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "528-520", 	     	Section: "20.3", 	      	ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "White Dwarfs", 		                     		Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "531-532", 	     	Section: "20.4", 	      	ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Type 1A Supernova", 			                	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "554-545", 		     Section: "20.9", 	      	ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Chandra Limit", 				                    Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "554-545", 	     	Section: "20.9", 		      ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Type 2 Supernova", 		                 		Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "536-538", 	     	Section: "20.6", 		      ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "SN 1987 A", 				                       	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "539-543", 	     	Section: "20.7-20.8", 	 	ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Neutron Stars", 			                    	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "555-556", 	     	Section: "21.1", 		      ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Pulsars", 					                         Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "558-559", 	     	Section: "21.3", 	      	ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Neutron Star Collapse", 	             		Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "572", 			        Section: "21.10",       	ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Black Holes", 					                     Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "592-594", 		     Section: "22.6", 	      	ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Schwarzschild Radius", 			              Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "592-594", 		     Section: "22.6", 		      ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Accretion Discs", 				                  Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "586-588", 	     	Section: "22.3", 	      	ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Elliptical Galaxies", 				              Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "641-642", 		     Section: "24.3", 	      	ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Spiral Galaxies", 				                  Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "639-641", 	     	Section: "24.3",       		ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Irregular Galaxies", 				               Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "642-643", 		     Section: "24.3",       		ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Tuning Fork Diagram", 		              		Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "643", 			        Section: "24.11",      		ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Milky Way Structure", 				              Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "608-609", 	     	Section: "23.2", 		      ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Stellar Populations", 				              Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "610-611", 	     	Section: "23.2", 	      	ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Density Waves", 			                    	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "622-624", 		     Section: "22.5", 		      ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Sagittarius A Star", 		               		Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "626-628", 		     Section: "23.6", 		      ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Active Galatic Nuclei", 		             	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "679-681", 	     	Section: "25.4", 		      ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Supermassive Black Holes", 		          	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "682-685", 	     	Section: "25.5", 		      ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Galaxy Clusters", 				                  Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "650-654", 	     	Section: "24.6", 		      ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Rotation Curves", 			                  	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "619, 658", 	     Section: "23.4, 24.8", 		ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Mass of the Milky Way", 			             Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "616-618", 		     Section: "23.4", 	      	ProblemPages: "-", 		       ProblemNumbers: "-"},
                     {Topic: "Gravitational Lensing", 	             		Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "659-660", 		     Section: "24.8", 		      ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Dark Matter", 					                     Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "659-660", 		     Section: "24.8", 		      ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Standard Candles", 		                 		Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "643-644", 		     Section: "24.4", 	      	ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Distance Ladder", 	                  			Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "645", 			        Section: "24.5", 		      ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Hubbles Law", 					                     Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "646-650", 		     Section: "24.6", 		      ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Expanding Universe", 		                	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "693-697", 		     Section: "26.2", 		      ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Big Bang Model", 				                   Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "697-699", 	     	Section: "26.3", 		      ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Cosmic Microwave Background",		         Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "699-701", 	     	Section: "26.4", 		      ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Big Bang Nucleosynthesis", 			          Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "731-732", 	     	Section: "27.5",       		ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Curvature Of The Universe", 		         	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "705-706", 	     	Section: "26.6",       		ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Critical Density", 				                 Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "706-707", 		     Section: "26.6", 	      	ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Deceleration Of The Universe", 		       Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "706-707", 		     Section: "26.6", 		      ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Acceleration Of The Universe", 		       Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "707-712", 		     Section: "26.6, 26.7", 		ProblemPages: "-", 			      ProblemNumbers: "-"},
                     {Topic: "Cosmological Constant",	 		             Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "707-712", 		     Section: "26.6, 26.7", 		ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Dark Energy",			 	                     	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "707-712", 		     Section: "26.6, 26.7", 		ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Cosmic Background Fluctuations", 	     	Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "712-713", 	     	Section: "26.8", 		      ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Flatness Problem", 				                 Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "721-724", 	     	Section: "27.1", 	      	ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Inflationary Model", 				               Textbook: "Freedman and Kaufmann 8th Edition", 		Pages: "721-724", 	     	Section: "27.1", 		      ProblemPages: "-",       			ProblemNumbers: "-"},
                     {Topic: "Calculus Help", 			                    	Textbook: "Young and Freedman 14th Edition", 		  Pages: "1510", 			       Section: "-",	 		        ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Unit Definitions", 			                 	Textbook: "Young and Freedman 14th Edition", 	  	Pages: "1548", 			       Section: "-",	         		ProblemPages: "-", 		      	ProblemNumbers: "-"},
                     {Topic: "Unit Conversion", 				                  Textbook: "Young and Freedman 14th Edition", 	  	Pages: "1552", 			       Section: "-",	 		        ProblemPages: "-", 	      		ProblemNumbers: "-"},
                     {Topic: "Astronomical Data", 	                			Textbook: "Young and Freedman 14th Edition", 		  Pages: "1554", 			       Section: "-",	 	        	ProblemPages: "-", 		      	ProblemNumbers: "-"}

                   ];
 
exports.data2 = data_ans2;