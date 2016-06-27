'use strict';

angular.module('calypsoClientApp')
  .factory('Utils', function Utils(dataConstants, $http, $q, $rootScope) {
    var transform = function (data) {
      var array = [];

      var i;
      for (i = 0; i <= 3; i++) {
        array[i] = 0;
      }
      if (data.year === 2005) array[0] = 1;
      if (data.year === 2006) array[1] = 1;
      if (data.year === 2007) array[2] = 1;
      if (data.year === 2008) array[3] = 1;

      if (data.sex === 'male') array[4] = 1;
      if (data.sex === 'female') array[4] = 0;

      array[5] = data.age;
      array[6] = data.smoker ? 1 : 0;
      array[7] = data.alcohol ? 1 : 0;
      array[8] = data.dnr ? 1 : 0;
      array[9] = data.ventilat ? 1 : 0;
      array[10] = data.hxcopd ? 1 : 0;
      array[11] = data.cpneumon ? 1 : 0;
      array[12] = data.hxchf ? 1 : 0;
      array[13] = data.cardiac_surgery ? 1 : 0;
      array[14] = data.renalfail ? 1 : 0;
      array[15] = data.dialysis ? 1 : 0;
      array[16] = data.discancr ? 1 : 0;
      array[17] = data.preop_wndinf ? 1 : 0;
      array[18] = data.steroid_immunosup ? 1 : 0;
      array[19] = data.wtloss ? 1 : 0;
      array[20] = data.bleeddis ? 1 : 0;
      array[21] = data.preop_transfus ? 1 : 0;
      array[22] = data.pregnancy ? 1 : 0;
      array[23] = data.priorop ? 1 : 0;

      for (i = 24; i <= 26; i++) {
        array[i] = 0;
      }
      if (data.race === 'other') array[24] = 1;
      if (data.race === 'asian') array[25] = 1;
      if (data.race === 'black') array[26] = 1;

      array[27] = data.bmi;

      for (i = 28; i <= 31; i++) {
        array[i] = 0;
      }
      if (data.asa === 4) array[28] = 1;
      if (data.asa === 3) array[29] = 1;
      if (data.asa === 2) array[30] = 1;
      if (data.asa === 5) array[31] = 1;

      for (i = 32; i <= 33; i++) {
        array[i] = 0;
      }
      if (data.diabetes === 'non-insulin') array[32] = 1;
      if (data.diabetes === 'insulin') array[33] = 1;

      for (i = 34; i <= 35; i++) {
        array[i] = 0;
      }
      if (data.dyspnea === 'moderate exertion') array[34] = 1;
      if (data.dyspnea === 'at rest') array[35] = 1;

      for (i = 36; i <= 37; i++) {
        array[i] = 0;
      }
      if (data.fnstatus === 'totally dependent') array[36] = 1;
      if (data.fnstatus === 'partially dependent') array[37] = 1;

      array[38] = data.liver ? 1 : 0;
      array[39] = data.heart ? 1 : 0;
      array[40] = data.pvd ? 1 : 0;
      array[41] = data.neuro ? 1 : 0;
      array[42] = data.plegia ? 1 : 0;
      array[43] = data.chemo_radio ? 1 : 0;

      for (i = 44; i <= 46; i++) {
        array[i] = 0;
      }
      if (data.infx === 'SIRS') array[44] = 1;
      if (data.infx === 'sepsis') array[45] = 1;
      if (data.infx === 'septic shock') array[46] = 1;

      array[47] = data.lab_sodium;
      array[48] = data.lab_bun;
      array[49] = data.lab_creatine;
      array[50] = data.lab_albumin;
      array[51] = data.lab_bili;
      array[52] = data.lab_ast;
      array[53] = data.lab_alkphos;
      array[54] = data.lab_wbc;
      array[55] = data.lab_hct;
      array[56] = data.lab_plt;
      array[57] = data.lab_ptt;
      array[58] = data.lab_inr;

      for (i = 59; i <= 60; i++) {
        array[i] = 0;
      }
      if (data.podiag === 'neoplasm') array[59] = 1;
      if (data.podiag === 'infection') array[60] = 1;

      array[61] = data.workrvu;
      array[62] = data.pgy;
      array[63] = data.emergency ? 1 : 0;
      array[64] = data.optime;

      array[65] = data.cpt_mis ? 1 : 0;
      array[66] = data.cpt_implant ? 1 : 0;

      array[67] = data.general_anes ? 1 : 0;
      array[68] = data.other_proc ? 1 : 0;
      array[69] = data.concurrent_proc ? 1 : 0;

      for (i = 70; i <= 72; i++) {
        array[i] = 0;
      }
      if (data.wound === 'contaminated') array[70] = 1;
      if (data.wound === 'dirty') array[71] = 1;
      if (data.wound === 'clean contaminated') array[72] = 1;

      for (i = 73; i <= 86; i++) {
        array[i] = 0;
      }
      if (data.cpt_type === 'OFFICIAL1') array[73] = 1;
      if (data.cpt_type === 'OFFICIAL2') array[74] = 1;
      if (data.cpt_type === 'OFFICIAL3') array[75] = 1;
      if (data.cpt_type === 'OFFICIAL4') array[76] = 1;
      if (data.cpt_type === 'OFFICIAL5') array[77] = 1;
      if (data.cpt_type === 'OFFICIAL6') array[78] = 1;
      if (data.cpt_type === 'OFFICIAL7') array[79] = 1;
      if (data.cpt_type === 'OFFICIAL8') array[80] = 1;
      if (data.cpt_type === 'OFFICIAL9') array[81] = 1;
      if (data.cpt_type === 'OFFICIAL11') array[82] = 1;
      if (data.cpt_type === 'OFFICIAL12') array[83] = 1;
      if (data.cpt_type === 'OFFICIAL13') array[84] = 1;
      if (data.cpt_type === 'OFFICIAL14') array[85] = 1;
      if (data.cpt_type === 'OFFICIAL16') array[86] = 1;

      for (i = 87; i <= 282; i++) {
        array[i] = 0;
      }
      if (data.ccs_category === 'CCS.CATEGORY1') array[87] = 1;
      if (data.ccs_category === 'CCS.CATEGORY2') array[88] = 1;
      if (data.ccs_category === 'CCS.CATEGORY3') array[89] = 1;
      if (data.ccs_category === 'CCS.CATEGORY4') array[90] = 1;
      if (data.ccs_category === 'CCS.CATEGORY5') array[91] = 1;
      if (data.ccs_category === 'CCS.CATEGORY6') array[92] = 1;
      if (data.ccs_category === 'CCS.CATEGORY7') array[93] = 1;
      if (data.ccs_category === 'CCS.CATEGORY8') array[94] = 1;
      if (data.ccs_category === 'CCS.CATEGORY11') array[95] = 1;
      if (data.ccs_category === 'CCS.CATEGORY12') array[96] = 1;
      if (data.ccs_category === 'CCS.CATEGORY13') array[97] = 1;
      if (data.ccs_category === 'CCS.CATEGORY14') array[98] = 1;
      if (data.ccs_category === 'CCS.CATEGORY15') array[99] = 1;
      if (data.ccs_category === 'CCS.CATEGORY16') array[100] = 1;
      if (data.ccs_category === 'CCS.CATEGORY17') array[101] = 1;
      if (data.ccs_category === 'CCS.CATEGORY18') array[102] = 1;
      if (data.ccs_category === 'CCS.CATEGORY19') array[103] = 1;
      if (data.ccs_category === 'CCS.CATEGORY20') array[104] = 1;
      if (data.ccs_category === 'CCS.CATEGORY21') array[105] = 1;
      if (data.ccs_category === 'CCS.CATEGORY22') array[106] = 1;
      if (data.ccs_category === 'CCS.CATEGORY23') array[107] = 1;
      if (data.ccs_category === 'CCS.CATEGORY24') array[108] = 1;
      if (data.ccs_category === 'CCS.CATEGORY25') array[109] = 1;
      if (data.ccs_category === 'CCS.CATEGORY26') array[110] = 1;
      if (data.ccs_category === 'CCS.CATEGORY27') array[111] = 1;
      if (data.ccs_category === 'CCS.CATEGORY28') array[112] = 1;
      if (data.ccs_category === 'CCS.CATEGORY29') array[113] = 1;
      if (data.ccs_category === 'CCS.CATEGORY30') array[114] = 1;
      if (data.ccs_category === 'CCS.CATEGORY31') array[115] = 1;
      if (data.ccs_category === 'CCS.CATEGORY32') array[116] = 1;
      if (data.ccs_category === 'CCS.CATEGORY33') array[117] = 1;
      if (data.ccs_category === 'CCS.CATEGORY34') array[118] = 1;
      if (data.ccs_category === 'CCS.CATEGORY35') array[119] = 1;
      if (data.ccs_category === 'CCS.CATEGORY36') array[120] = 1;
      if (data.ccs_category === 'CCS.CATEGORY37') array[121] = 1;
      if (data.ccs_category === 'CCS.CATEGORY38') array[122] = 1;
      if (data.ccs_category === 'CCS.CATEGORY39') array[123] = 1;
      if (data.ccs_category === 'CCS.CATEGORY40') array[124] = 1;
      if (data.ccs_category === 'CCS.CATEGORY41') array[125] = 1;
      if (data.ccs_category === 'CCS.CATEGORY42') array[126] = 1;
      if (data.ccs_category === 'CCS.CATEGORY43') array[127] = 1;
      if (data.ccs_category === 'CCS.CATEGORY44') array[128] = 1;
      if (data.ccs_category === 'CCS.CATEGORY46') array[129] = 1;
      if (data.ccs_category === 'CCS.CATEGORY47') array[130] = 1;
      if (data.ccs_category === 'CCS.CATEGORY48') array[131] = 1;
      if (data.ccs_category === 'CCS.CATEGORY49') array[132] = 1;
      if (data.ccs_category === 'CCS.CATEGORY50') array[133] = 1;
      if (data.ccs_category === 'CCS.CATEGORY51') array[134] = 1;
      if (data.ccs_category === 'CCS.CATEGORY52') array[135] = 1;
      if (data.ccs_category === 'CCS.CATEGORY53') array[136] = 1;
      if (data.ccs_category === 'CCS.CATEGORY54') array[137] = 1;
      if (data.ccs_category === 'CCS.CATEGORY55') array[138] = 1;
      if (data.ccs_category === 'CCS.CATEGORY58') array[139] = 1;
      if (data.ccs_category === 'CCS.CATEGORY59') array[140] = 1;
      if (data.ccs_category === 'CCS.CATEGORY60') array[141] = 1;
      if (data.ccs_category === 'CCS.CATEGORY62') array[142] = 1;
      if (data.ccs_category === 'CCS.CATEGORY63') array[143] = 1;
      if (data.ccs_category === 'CCS.CATEGORY64') array[144] = 1;
      if (data.ccs_category === 'CCS.CATEGORY78') array[145] = 1;
      if (data.ccs_category === 'CCS.CATEGORY79') array[146] = 1;
      if (data.ccs_category === 'CCS.CATEGORY81') array[147] = 1;
      if (data.ccs_category === 'CCS.CATEGORY82') array[148] = 1;
      if (data.ccs_category === 'CCS.CATEGORY83') array[149] = 1;
      if (data.ccs_category === 'CCS.CATEGORY91') array[150] = 1;
      if (data.ccs_category === 'CCS.CATEGORY92') array[151] = 1;
      if (data.ccs_category === 'CCS.CATEGORY94') array[152] = 1;
      if (data.ccs_category === 'CCS.CATEGORY95') array[153] = 1;
      if (data.ccs_category === 'CCS.CATEGORY96') array[154] = 1;
      if (data.ccs_category === 'CCS.CATEGORY97') array[155] = 1;
      if (data.ccs_category === 'CCS.CATEGORY98') array[156] = 1;
      if (data.ccs_category === 'CCS.CATEGORY99') array[157] = 1;
      if (data.ccs_category === 'CCS.CATEGORY100') array[158] = 1;
      if (data.ccs_category === 'CCS.CATEGORY101') array[159] = 1;
      if (data.ccs_category === 'CCS.CATEGORY102') array[160] = 1;
      if (data.ccs_category === 'CCS.CATEGORY103') array[161] = 1;
      if (data.ccs_category === 'CCS.CATEGORY104') array[162] = 1;
      if (data.ccs_category === 'CCS.CATEGORY106') array[163] = 1;
      if (data.ccs_category === 'CCS.CATEGORY108') array[164] = 1;
      if (data.ccs_category === 'CCS.CATEGORY109') array[165] = 1;
      if (data.ccs_category === 'CCS.CATEGORY110') array[166] = 1;
      if (data.ccs_category === 'CCS.CATEGORY111') array[167] = 1;
      if (data.ccs_category === 'CCS.CATEGORY112') array[168] = 1;
      if (data.ccs_category === 'CCS.CATEGORY114') array[169] = 1;
      if (data.ccs_category === 'CCS.CATEGORY115') array[170] = 1;
      if (data.ccs_category === 'CCS.CATEGORY116') array[171] = 1;
      if (data.ccs_category === 'CCS.CATEGORY117') array[172] = 1;
      if (data.ccs_category === 'CCS.CATEGORY118') array[173] = 1;
      if (data.ccs_category === 'CCS.CATEGORY119') array[174] = 1;
      if (data.ccs_category === 'CCS.CATEGORY120') array[175] = 1;
      if (data.ccs_category === 'CCS.CATEGORY121') array[176] = 1;
      if (data.ccs_category === 'CCS.CATEGORY122') array[177] = 1;
      if (data.ccs_category === 'CCS.CATEGORY124') array[178] = 1;
      if (data.ccs_category === 'CCS.CATEGORY126') array[179] = 1;
      if (data.ccs_category === 'CCS.CATEGORY127') array[180] = 1;
      if (data.ccs_category === 'CCS.CATEGORY128') array[181] = 1;
      if (data.ccs_category === 'CCS.CATEGORY129') array[182] = 1;
      if (data.ccs_category === 'CCS.CATEGORY130') array[183] = 1;
      if (data.ccs_category === 'CCS.CATEGORY131') array[184] = 1;
      if (data.ccs_category === 'CCS.CATEGORY132') array[185] = 1;
      if (data.ccs_category === 'CCS.CATEGORY133') array[186] = 1;
      if (data.ccs_category === 'CCS.CATEGORY134') array[187] = 1;
      if (data.ccs_category === 'CCS.CATEGORY135') array[188] = 1;
      if (data.ccs_category === 'CCS.CATEGORY136') array[189] = 1;
      if (data.ccs_category === 'CCS.CATEGORY137') array[190] = 1;
      if (data.ccs_category === 'CCS.CATEGORY138') array[191] = 1;
      if (data.ccs_category === 'CCS.CATEGORY139') array[192] = 1;
      if (data.ccs_category === 'CCS.CATEGORY140') array[193] = 1;
      if (data.ccs_category === 'CCS.CATEGORY141') array[194] = 1;
      if (data.ccs_category === 'CCS.CATEGORY142') array[195] = 1;
      if (data.ccs_category === 'CCS.CATEGORY143') array[196] = 1;
      if (data.ccs_category === 'CCS.CATEGORY144') array[197] = 1;
      if (data.ccs_category === 'CCS.CATEGORY145') array[198] = 1;
      if (data.ccs_category === 'CCS.CATEGORY146') array[199] = 1;
      if (data.ccs_category === 'CCS.CATEGORY147') array[200] = 1;
      if (data.ccs_category === 'CCS.CATEGORY148') array[201] = 1;
      if (data.ccs_category === 'CCS.CATEGORY149') array[202] = 1;
      if (data.ccs_category === 'CCS.CATEGORY151') array[203] = 1;
      if (data.ccs_category === 'CCS.CATEGORY152') array[204] = 1;
      if (data.ccs_category === 'CCS.CATEGORY153') array[205] = 1;
      if (data.ccs_category === 'CCS.CATEGORY154') array[206] = 1;
      if (data.ccs_category === 'CCS.CATEGORY155') array[207] = 1;
      if (data.ccs_category === 'CCS.CATEGORY156') array[208] = 1;
      if (data.ccs_category === 'CCS.CATEGORY157') array[209] = 1;
      if (data.ccs_category === 'CCS.CATEGORY158') array[210] = 1;
      if (data.ccs_category === 'CCS.CATEGORY159') array[211] = 1;
      if (data.ccs_category === 'CCS.CATEGORY160') array[212] = 1;
      if (data.ccs_category === 'CCS.CATEGORY161') array[213] = 1;
      if (data.ccs_category === 'CCS.CATEGORY162') array[214] = 1;
      if (data.ccs_category === 'CCS.CATEGORY163') array[215] = 1;
      if (data.ccs_category === 'CCS.CATEGORY164') array[216] = 1;
      if (data.ccs_category === 'CCS.CATEGORY165') array[217] = 1;
      if (data.ccs_category === 'CCS.CATEGORY166') array[218] = 1;
      if (data.ccs_category === 'CCS.CATEGORY167') array[219] = 1;
      if (data.ccs_category === 'CCS.CATEGORY168') array[220] = 1;
      if (data.ccs_category === 'CCS.CATEGORY169') array[221] = 1;
      if (data.ccs_category === 'CCS.CATEGORY170') array[222] = 1;
      if (data.ccs_category === 'CCS.CATEGORY171') array[223] = 1;
      if (data.ccs_category === 'CCS.CATEGORY172') array[224] = 1;
      if (data.ccs_category === 'CCS.CATEGORY173') array[225] = 1;
      if (data.ccs_category === 'CCS.CATEGORY175') array[226] = 1;
      if (data.ccs_category === 'CCS.CATEGORY176') array[227] = 1;
      if (data.ccs_category === 'CCS.CATEGORY178') array[228] = 1;
      if (data.ccs_category === 'CCS.CATEGORY180') array[229] = 1;
      if (data.ccs_category === 'CCS.CATEGORY181') array[230] = 1;
      if (data.ccs_category === 'CCS.CATEGORY195') array[231] = 1;
      if (data.ccs_category === 'CCS.CATEGORY197') array[232] = 1;
      if (data.ccs_category === 'CCS.CATEGORY198') array[233] = 1;
      if (data.ccs_category === 'CCS.CATEGORY199') array[234] = 1;
      if (data.ccs_category === 'CCS.CATEGORY200') array[235] = 1;
      if (data.ccs_category === 'CCS.CATEGORY201') array[236] = 1;
      if (data.ccs_category === 'CCS.CATEGORY202') array[237] = 1;
      if (data.ccs_category === 'CCS.CATEGORY203') array[238] = 1;
      if (data.ccs_category === 'CCS.CATEGORY204') array[239] = 1;
      if (data.ccs_category === 'CCS.CATEGORY205') array[240] = 1;
      if (data.ccs_category === 'CCS.CATEGORY207') array[241] = 1;
      if (data.ccs_category === 'CCS.CATEGORY208') array[242] = 1;
      if (data.ccs_category === 'CCS.CATEGORY209') array[243] = 1;
      if (data.ccs_category === 'CCS.CATEGORY210') array[244] = 1;
      if (data.ccs_category === 'CCS.CATEGORY211') array[245] = 1;
      if (data.ccs_category === 'CCS.CATEGORY212') array[246] = 1;
      if (data.ccs_category === 'CCS.CATEGORY213') array[247] = 1;
      if (data.ccs_category === 'CCS.CATEGORY214') array[248] = 1;
      if (data.ccs_category === 'CCS.CATEGORY215') array[249] = 1;
      if (data.ccs_category === 'CCS.CATEGORY216') array[250] = 1;
      if (data.ccs_category === 'CCS.CATEGORY217') array[251] = 1;
      if (data.ccs_category === 'CCS.CATEGORY224') array[252] = 1;
      if (data.ccs_category === 'CCS.CATEGORY225') array[253] = 1;
      if (data.ccs_category === 'CCS.CATEGORY226') array[254] = 1;
      if (data.ccs_category === 'CCS.CATEGORY227') array[255] = 1;
      if (data.ccs_category === 'CCS.CATEGORY228') array[256] = 1;
      if (data.ccs_category === 'CCS.CATEGORY229') array[257] = 1;
      if (data.ccs_category === 'CCS.CATEGORY230') array[258] = 1;
      if (data.ccs_category === 'CCS.CATEGORY231') array[259] = 1;
      if (data.ccs_category === 'CCS.CATEGORY232') array[260] = 1;
      if (data.ccs_category === 'CCS.CATEGORY233') array[261] = 1;
      if (data.ccs_category === 'CCS.CATEGORY234') array[262] = 1;
      if (data.ccs_category === 'CCS.CATEGORY235') array[263] = 1;
      if (data.ccs_category === 'CCS.CATEGORY236') array[264] = 1;
      if (data.ccs_category === 'CCS.CATEGORY237') array[265] = 1;
      if (data.ccs_category === 'CCS.CATEGORY238') array[266] = 1;
      if (data.ccs_category === 'CCS.CATEGORY239') array[267] = 1;
      if (data.ccs_category === 'CCS.CATEGORY240') array[268] = 1;
      if (data.ccs_category === 'CCS.CATEGORY244') array[269] = 1;
      if (data.ccs_category === 'CCS.CATEGORY246') array[270] = 1;
      if (data.ccs_category === 'CCS.CATEGORY247') array[271] = 1;
      if (data.ccs_category === 'CCS.CATEGORY248') array[272] = 1;
      if (data.ccs_category === 'CCS.CATEGORY249') array[273] = 1;
      if (data.ccs_category === 'CCS.CATEGORY250') array[274] = 1;
      if (data.ccs_category === 'CCS.CATEGORY251') array[275] = 1;
      if (data.ccs_category === 'CCS.CATEGORY253') array[276] = 1;
      if (data.ccs_category === 'CCS.CATEGORY254') array[277] = 1;
      if (data.ccs_category === 'CCS.CATEGORY257') array[278] = 1;
      if (data.ccs_category === 'CCS.CATEGORY258') array[279] = 1;
      if (data.ccs_category === 'CCS.CATEGORY259') array[280] = 1;
      if (data.ccs_category === 'CCS.CATEGORY660') array[281] = 1;
      if (data.ccs_category === 'CCS.CATEGORY2616') array[282] = 1;

      return array;
    };
    var getPercentile = function (element, array) {
      if (!array || !element) return 0;

      function locationOf(element, array, start, end) {
        start = start || 0;
        end = end || array.length;
        var pivot = parseInt(start + (end - start) / 2, 10);
        if (end - start <= 1 || array[pivot] === element) return pivot;
        if (array[pivot] < element) {
          return locationOf(element, array, pivot, end);
        } else {
          return locationOf(element, array, start, pivot);
        }
      }
      var value = parseFloat(locationOf(element, array) / array.length * 100);
      return value;
    };

    var getOutcomeLink = function (name) {
      var map = {
        'uti': 'OUTCOMES_UTI',
        'ssi': 'OUTCOMES_SSI_ANY',
        'cardiac': 'OUTCOMES_CARDIAC',
        'dvt': 'OUTCOMES_DVTPE',
        'pna': 'OUTCOMES_RESP',
        'septic': 'OUTCOMES_SEPTIC',
        'renal': 'OUTCOMES_RENAL_FAIL',
        'bleeding': 'OUTCOMES_BLEEDING',
        'neuro': 'OUTCOMES_NEURO',
        'reop': 'OUTCOMES_REOPERATION',
        'los': 'OUTCOMES_LOS'
      };
      return map[name];
    };

    var getName = function (name) {
      var map = {
        'wound_compilcations': 'Wound Complications',
        'cardiac_complications': 'Cardiac Complications',
        'respiratory_complications': 'Respiratory Complications',
        'thrombeombolic_complications': 'Thrombotic Complications',
        'renal_complications': 'Renal Complications',
        'urinary_tract_infections': 'Urinary Tract Infection',
        'neurologic_complications': 'Neurological Complications',
        'systemic_septic_complications': 'Septic Complications',
        'reoperations': 'Reoperations',
        'morbidity': 'Any Complication',
        'mortality': '30 Day Mortality'
      };

      return map[name];
    };

    var isTrigger = function (triggerText, value) {
      var compare;
      if (triggerText === 'TRUE') {
        return value === true;
      } else if (triggerText === 'FALSE') {
        return value === false;
      } else if (triggerText.slice(0, 1) === '<') {
        compare = triggerText.slice(1);
        return value < compare;
      } else if (triggerText.slice(0, 1) === '>') {
        compare = triggerText.slice(1);
        return value > compare;
      } else if (triggerText === 'lab_sodium') {
        return value > 150 || value < 130;
      } else if (triggerText === 'podiag') {
        return value === 1;
      } else if (triggerText === 'race') {
        return value !== 'white' && value !== null;
      } else if (triggerText === 'fnstatus') {
        return value !== 'independent' && value !== null;
      }
    };

    var orderBasket = {
      // factor1 : [
      //   {order: order,
      //    selected: false},
      // ],
      // factor2: []
    };
     function updateFactor(factor) {
         orderBasket[factor.label] = [];
     }
     function updateOrder(factor, orders) {
       orders.map(function (iOrder) {
         orderBasket[factor.label].push({order: iOrder, selected: false});
       });
     }

     function checkOrder(checkedOrder) {
       Object.keys(orderBasket).map(function(factor) {
         var orderList = orderBasket[factor];
         orderList.map(function(orderObj) {
            if(orderObj.order == checkedOrder){
              orderObj.selected = !orderObj.selected;
            }
         });
       });
     }

      function getBasket() {
        var orderBasketDisplay = {};
        Object.keys(orderBasket).map(function(factor) {
          var orderList = orderBasket[factor];
          orderBasketDisplay[factor] = [];
          orderList.map(function(order) {
            if(order.selected){
              orderBasketDisplay[factor].push(order);
            }
          });
          if(orderBasketDisplay[factor].length == 0){
            delete orderBasketDisplay[factor];
          };
        });
        return orderBasketDisplay;
      }

    return {
      transform: transform,
      getPercentile: getPercentile,
      getName: getName,
      getOutcomeLink: getOutcomeLink,
      updateFactor: updateFactor,
      updateOrder: updateOrder,
      checkOrder: checkOrder,
      getBasket: getBasket
    };
  });
