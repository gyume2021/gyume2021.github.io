const treasure = [16, 17, 18, 29 ,31, 32, 42, 43, 44, 46 , 47, 48, 54, 57, 61, 68, 69,71 ,72,73,75,80,81,83,84,86,87,88, 94,95,97, 99,101,102,108,110,112,114,115,120,121,123,124,125,126,129,136,137,139,140,141,146,147,148, 154, 158,161,162,163,164,165,166,173,174,179,180, 184,187,188,189,190,191,192,198 ,199,200,201,203,205,206,213,214,216,218,224,225,228,229,230,236,238,240,242,243,244,249,251,252,254,256,257,262,264,266,267, 269, 276,278,280,282, 288, 290, 292,293,294,303,305,306, 314,316,317,327,328,329,330];
const patter_location = {"Armor-increase":[16, 114, 147, 163, 254],
                      "Enemy-dodge-reduction":[18, 73, 136, 173, 288, 327],
                      "Magic-Attack-increase":[43, 114, 120, 218, 256, 327], 
                      "Magic-Defense-increase":[47, 199, 218, 254, 249],
                      "Physical-Attack-increase":[47, 99, 110, 136, 163, 288],
                      "Battle-Flag-Chest": [173]};

const location_pattern = {16: ["Armor-increase"],
                          18: ["Enemy-dodge-reduction"],
                          43: ["Magic-Attack-increase"], 
                          47: ["Magic-Defense-increase", "Physical-Attack-increase"],
                          73: ["Enemy-dodge-reduction"], 
                          99: ["Physical-Attack-increase"],
                          110: ["Physical-Attack-increase"],
                          114: ["Armor-increase", "Magic-Attack-increase"],
                          120: ["Magic-Attack-increase"], 
                          136: ["Enemy-dodge-reduction", "Physical-Attack-increase"], 
                          147: ["Armor-increase"],  
                          163: ["Armor-increase", "Physical-Attack-increase"], 
                          173: ["Enemy-dodge-reduction","Battle-Flag-Chest"], 
                          199: ["Magic-Defense-increase"],
                          218: ["Magic-Attack-increase", "Magic-Defense-increase"],
                          249: ["Magic-Defense-increase"],
                          254: ["Armor-increase", "Magic-Defense-increase"],  
                          256: ["Magic-Attack-increase"],  
                          288: ["Enemy-dodge-reduction", "Physical-Attack-increase"],  
                          327: ["Enemy-dodge-reduction", "Magic-Attack-increase"] };
                          
