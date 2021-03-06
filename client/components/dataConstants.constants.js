'use strict';

angular.module('calypsoClientApp')
  .constant('dataConstants', {
    COMPLICATIONS: ['wound_compilcations', 'cardiac_complications', 'respiratory_complications', 'thrombeombolic_complications', 'renal_complications', 'urinary_tract_infections', 'neurologic_complications', 'systemic_septic_complications', 'reoperations', 'morbidity', 'mortality'],
    AVERAGE_RISK: {
      ssi: 0.069740481215882,
      cardiac: 0.019877459851071779,
      dvt: 0.0086973951312287433,
      pna: 0.039793506449036592,
      renal: 0.027872539324457532,
      uti: 0.02598189307262877,
      morbidity: 0.15589811011887184,
      mortality: 0.052122954751793876
    },
    STD_RISK: {
      ssi: 0.058178387079773033,
      cardiac: 0.018912270546653401,
      dvt: 0.0080469321146130479,
      pna: 0.039523492772242846,
      renal: 0.030170633871355802,
      uti: 0.021040562614349362,
      morbidity: 0.14604025035362472,
      mortality: 0.075465449905425086
    },
    CONTINUOUS_VAR_MAP: {
      'AGE': {
        'index': 5,
        'mean': 55.34176056,
        'std': 17.16799824
      },
      'BMI': {
        'index': 27,
        'mean': 29.78516345,
        'std': 8.284061419
      },
      'LAB_SODIUM': {
        'index': 47,
        'mean': 138.9628371,
        'std': 3.125906274
      },
      'LAB_BUN': {
        'index': 48,
        'mean': 16.18489156,
        'std': 10.27300854
      },
      'LAB_CREATINE': {
        'index': 49,
        'mean': 1.058180976,
        'std': 0.956915243
      },
      'LAB_ALBUMIN': {
        'index': 50,
        'mean': 3.931857437,
        'std': 0.661011214
      },
      'LAB_BILI': {
        'index': 51,
        'mean': 0.692964361,
        'std': 0.769292651
      },
      'LAB_AST': {
        'index': 52,
        'mean': 30.03984606,
        'std': 38.49276553
      },
      'LAB_ALKPHOS': {
        'index': 53,
        'mean': 88.83489805,
        'std': 58.7740041
      },
      'LAB_WBC': {
        'index': 54,
        'mean': 8.308680658,
        'std': 3.992318252
      },
      'LAB_HCT': {
        'index': 55,
        'mean': 39.18487341,
        'std': 5.330334913
      },
      'LAB_PLT': {
        'index': 56,
        'mean': 261.7530622,
        'std': 90.7106664
      },
      'LAB_PTT': {
        'index': 57,
        'mean': 29.94302455,
        'std': 7.366418335
      },
      'LAB_INR': {
        'index': 58,
        'mean': 1.077051524,
        'std': 0.288072919
      },
      'WORKRVU': {
        'index': 61,
        'mean': 15.80514132,
        'std': 9.24601534
      },
      'PGY': {
        'index': 62,
        'mean': 2.173242199,
        'std': 2.259867544
      },
      'OPTIME': {
        'index': 64,
        'mean': 109.61065,
        'std': 89.8935085
      }
    },
    CPT_TYPE_LABELS: {
      'OFFICIAL1': 'integumentary system',
      'OFFICIAL2': 'musculoskeletal system',
      'OFFICIAL3': 'respiratory system',
      'OFFICIAL4': 'cardiovascular system',
      'OFFICIAL5': 'hemic and lymphatic systems',
      'OFFICIAL6': 'mediastinum and diaphragm',
      'OFFICIAL7': 'digestive system',
      'OFFICIAL8': 'urinary system',
      'OFFICIAL9': 'male genital system',
      'OFFICIAL10': 'reproductive system and intersex',
      'OFFICIAL11': 'female genital system',
      'OFFICIAL12': 'maternity care and delivery',
      'OFFICIAL13': 'endocrine system',
      'OFFICIAL14': 'nervous system',
      'OFFICIAL15': 'eye and ocular adnexa',
      'OFFICIAL16': 'auditory system',
      'OFFICIAL17': 'NOS'
    },
    LABELS: {
      'caseid': {
        'name': 'Case ID',
        'description': 'Unique case ID from NSQIP',
        'type': 'int',
        'min': 0
      },
      'year': {
        'name': 'Operation Year',
        'description': 'Year of surgical operation',
        'type': 'int',
        'min': 2005,
        'max': 2008
      },
      'sex': {
        'name': 'Sex',
        'description': 'Patient biological sex',
        'type': 'string',
        'category': ['male', 'female']
      },
      'age': {
        'name': 'Age',
        'description': 'Patient age in years (enter 90 for >90)',
        'type': 'int',
        'min': 15,
        'max': 90
      },
      'smoker': {
        'name': 'Smoking History',
        'description': 'Current smoker within 1 year',
        'type': 'boolean'
      },
      'alcohol': {
        'name': 'Alcohol History',
        'description': 'Significant alcoholic history',
        'type': 'boolean'
      },
      'dnr': {
        'name': 'DNR',
        'description': 'Do Not Resuscitate status',
        'type': 'boolean'
      },
      'ventilat': {
        'name': 'Ventilator Dependence',
        'description': 'Ventilator dependent within 48hrs before surgery',
        'type': 'boolean'
      },
      'hxcopd': {
        'name': 'COPD',
        'description': 'History of severe COPD',
        'type': 'boolean'
      },
      'cpneumon': {
        'name': 'Pneumonia',
        'description': 'Currently has pneumonia',
        'type': 'boolean'
      },
      'hxchf': {
        'name': 'CHF History',
        'description': 'History of Congestive Heart Failure',
        'type': 'boolean'
      },
      'cardiac_surgery': {
        'name': 'History of Cardiac Surgery',
        'description': 'Patient previously had a cardiac surgery',
        'type': 'boolean'
      },
      'renalfail': {
        'name': 'Renal Failure',
        'description': 'Preoperative actue renal failure',
        'type': 'boolean',
      },
      'dialysis': {
        'name': 'Dialysis Dependent',
        'description': 'Patient currently on dialysis',
        'type': 'boolean'
      },
      'discancr': {
        'name': 'Disseminated Cancer',
        'description': 'History of disseminated cancer',
        'type': 'boolean'
      },
      'preop_wndinf': {
        'name': 'Preoperative Wound Infection',
        'description': 'Preoperative open wound or wound infection',
        'type': 'boolean'
      },
      'steroid_immunosup': {
        'name': 'Steroid or immunosuppression use',
        'description': 'History of using steroid or any other immunosuppressant',
        'type': 'boolean'
      },
      'wtloss': {
        'name': 'Recenet weight Loss',
        'description': '> 10% weight loss in last 6 months',
        'type': 'boolean'
      },
      'bleeddis': {
        'name': 'Bleeding Disorder',
        'description': 'History of bleeding disorder',
        'type': 'boolean'
      },
      'preop_transfus': {
        'name': 'Recent Transfusion',
        'description': 'Preop transfusion of >=1 unit of red blood cells within 72 hours before surgery',
        'type': 'boolean'
      },
      'pregnancy': {
        'name': 'Pregnancy',
        'description': 'Pregnant',
        'type': 'boolean'
      },
      'priorop': {
        'name': 'Prior Operation',
        'description': 'Patient received another operation within 30 days of the index operation',
        'type': 'boolean'
      },
      'race': {
        'name': 'Race',
        'description': 'Patient Race',
        'type': 'string',
        'category': ['other', 'asian', 'black']
      },
      'bmi': {
        'name': 'BMI',
        'description': 'Patient BMI',
        'type': 'real',
        'min': 0,
        'max': 100
      },
      'asa': {
        'name': 'ASA Class',
        'description': 'American society of anesthesiology physical status classification',
        'type': 'int',
        'min': 1,
        'max': 5
      },
      'diabetes': {
        'name': 'Diabetes History',
        'description': 'Diabetes mellitus with oral agents or insulin',
        'type': 'string',
        'category': ['non-insulin', 'insulin', 'no']
      },
      'dyspnea': {
        'name': 'Dyspnea at rest',
        'description': 'Dyspnea',
        'type': 'string',
        'category': ['at rest', 'moderate exertion', 'no']
      },
      'fnstatus': {
        'name': 'Functional Status',
        'description': 'Functional health status Prior to Surgery',
        'type': 'string',
        'category': ['independent', 'partially dependent', 'totally dependent']
      },
      'liver': {
        'name': 'Liver Condition',
        'description': 'History of any ascites or esophageal variceas',
        'type': 'boolean'
      },
      'heart': {
        'name': 'Heart Condition',
        'description': 'History of myocardial infarctions 6 months before surgery, previous percutaneous coronary',
        'type': 'boolean'
      },
      'pvd': {
        'name': 'Peripheral vascular disease',
        'description': 'History of revascularization / amputation for peripheral vascular disease, or rest pain',
        'type': 'boolean'
      },
      'neuro': {
        'name': 'Neurological Disorder',
        'description': 'History of neurological disorders: impaired sensorium, coma >24hrs, history of transient ischemic attacks, history of stroke with / without neurological deficit, tumor involving central nervous system',
        'type': 'boolean'
      },
      'plegia': {
        'name': 'Paralysis',
        'description': 'History of hemi, para, or qudraiplegia',
        'type': 'boolean'
      },
      'chemo_radio': {
        'name': 'Recent chemotherapy',
        'description': 'Chemotherapy <= 30 days before surgery, OR radiotherapy <= 90 days',
        'type': 'boolean'
      },
      'infx': {
        'name': 'Septic status',
        'description': 'Infection Level',
        'type': 'string',
        'category': ['SIRS', 'sepsis', 'septic shock', 'no']
      },
      'lab_sodium': {
        'name': 'Sodium',
        'description': 'Serum sodium level',
        'type': 'real',
        'min': 100,
        'max': 170
      },
      'lab_bun': {
        'name': 'BUN',
        'description': 'Blood urea nitrogen level',
        'type': 'real',
        'min': 0,
        'max': 100
      },
      'lab_creatine': {
        'name': 'Creatinine',
        'description': 'Serum creatinine level',
        'type': 'real',
        'min': 0,
        'max': 100
      },
      'lab_albumin': {
        'name': 'Albumin',
        'description': 'Serum albumin level',
        'type': 'real',
        'min': 0,
        'max': 7
      },
      'lab_bili': {
        'name': 'Bilirubin',
        'description': 'Serum bilirubin level',
        'type': 'real',
        'min': 0,
        'max': 100
      },
      'lab_ast': {
        'name': 'AST',
        'description': 'Serum AST level',
        'type': 'real',
        'min': 0,
        'max': 10000
      },
      'lab_alkphos': {
        'name': 'ALP',
        'description': 'Serum alkaline phosphatase',
        'type': 'real',
        'min': 0,
        'max': 10000
      },
      'lab_wbc': {
        'name': 'WBC',
        'description': 'Serum white blood cell count (in thousands)',
        'type': 'real',
        'min': 0,
        'max': 100
      },
      'lab_hct': {
        'name': 'Hematocrit',
        'description': 'Serum hematocrit',
        'type': 'real',
        'min': 0,
        'max': 100
      },
      'lab_plt': {
        'name': 'Platelet',
        'description': 'Serum platetlet level',
        'type': 'real',
        'min': 0,
        'max': 2000
      },
      'lab_ptt': {
        'name': 'PTT',
        'description': 'Partial thromboplastin time ',
        'type': 'real',
        'min': 0,
        'max': 1000
      },
      'lab_inr': {
        'name': 'INR',
        'description': 'International normalized ratio/Prothrombin time',
        'type': 'real',
        'min': 0,
        'max': 50
      },
      'podiag': {
        'name': 'Surgical Indication Type',
        'description': 'Categories of the indications for surgery',
        'type': 'string',
        'category': ['neoplasm', 'infection', 'no']
      },
      'workrvu': {
        'name': 'Work RVU',
        'description': 'Work Relative Value Unit',
        'type': 'real',
        'min': 0,
        'max': 1000
      },
      'pgy': {
        'name': 'Resident PGY level',
        'description': 'Post Graduate Year of Resident',
        'type': 'int',
        'min': 0,
        'max': 20,
      },
      'emergency': {
        'name': 'Emergency Surgery Status',
        'description': 'Designate if emergent case (note: urgent cases do not count)',
        'type': 'boolean'
      },
      'optime': {
        'name': 'Operation Time (min)',
        'description': 'Surgical Operation Time in ',
        'type': 'int',
        'min': 0,
        'max': 10000
      },
      'general_anes': {
        'name': 'General Anesthesia',
        'description': 'General anesthesia was used',
        'type': 'boolean'
      },
      'other_proc': {
        'name': 'Other Procedure (Same team)',
        'description': 'There were additional procedures performed by the same surgical team',
        'type': 'boolean'
      },
      'concurrent_proc': {
        'name': 'Concurrent Procedure (Different team)',
        'description': 'There were additional procedures while the principle procedure was performed',
        'type': 'boolean'
      },
      'wound': {
        'name': 'Wound Classification',
        'description': 'Wound class',
        'type': 'string',
        'category': ['contaminated', 'dirty', 'clean contaminated', 'clean']
      },
      'cpt': {
        'name': 'CPT Code of Primary Procedure',
        'description': 'Common Procedure Code',
        'type': 'string'
      },
      'cpt_type': {
        'name': 'CPT Type',
        'description': 'CPT Type',
        'type': 'string',
        'category': ['OFFICIAL1', 'OFFICIAL2', 'OFFICIAL3', 'OFFICIAL4', 'OFFICIAL5', 'OFFICIAL6', 'OFFICIAL7', 'OFFICIAL8', 'OFFICIAL9', 'OFFICIAL11', 'OFFICIAL12', 'OFFICIAL13', 'OFFICIAL14', 'OFFICIAL16']
      },
      'cpt_mis': {
        'name': 'Minimally Invasive Surgery',
        'description': 'Either laparoscopic or robotic surgery',
        'type': 'boolean'
      },
      'cpt_implant': {
        'name': 'Implant',
        'description': 'Foreign bodies implants were used',
        'type': 'boolean'
      },
      'ccs_category': {
        'name': 'CCS Category',
        'description': 'Clinical Classification Software Category',
        'type': 'string',
        'category': ['CCS.CATEGORY1', 'CCS.CATEGORY2', 'CCS.CATEGORY3', 'CCS.CATEGORY4', 'CCS.CATEGORY5', 'CCS.CATEGORY6', 'CCS.CATEGORY7', 'CCS.CATEGORY8', 'CCS.CATEGORY11', 'CCS.CATEGORY12', 'CCS.CATEGORY13', 'CCS.CATEGORY14', 'CCS.CATEGORY15', 'CCS.CATEGORY16', 'CCS.CATEGORY17', 'CCS.CATEGORY18', 'CCS.CATEGORY19', 'CCS.CATEGORY20', 'CCS.CATEGORY21', 'CCS.CATEGORY22', 'CCS.CATEGORY23', 'CCS.CATEGORY24', 'CCS.CATEGORY25', 'CCS.CATEGORY26', 'CCS.CATEGORY27', 'CCS.CATEGORY28', 'CCS.CATEGORY29', 'CCS.CATEGORY30', 'CCS.CATEGORY31', 'CCS.CATEGORY32', 'CCS.CATEGORY33', 'CCS.CATEGORY34', 'CCS.CATEGORY35', 'CCS.CATEGORY36', 'CCS.CATEGORY37', 'CCS.CATEGORY38', 'CCS.CATEGORY39', 'CCS.CATEGORY40', 'CCS.CATEGORY41', 'CCS.CATEGORY42', 'CCS.CATEGORY43', 'CCS.CATEGORY44', 'CCS.CATEGORY46', 'CCS.CATEGORY47', 'CCS.CATEGORY48', 'CCS.CATEGORY49', 'CCS.CATEGORY50', 'CCS.CATEGORY51', 'CCS.CATEGORY52', 'CCS.CATEGORY53', 'CCS.CATEGORY54', 'CCS.CATEGORY55', 'CCS.CATEGORY58', 'CCS.CATEGORY59', 'CCS.CATEGORY60', 'CCS.CATEGORY62', 'CCS.CATEGORY63', 'CCS.CATEGORY64', 'CCS.CATEGORY78', 'CCS.CATEGORY79', 'CCS.CATEGORY81', 'CCS.CATEGORY82', 'CCS.CATEGORY83', 'CCS.CATEGORY91', 'CCS.CATEGORY92', 'CCS.CATEGORY94', 'CCS.CATEGORY95', 'CCS.CATEGORY96', 'CCS.CATEGORY97', 'CCS.CATEGORY98', 'CCS.CATEGORY99', 'CCS.CATEGORY100', 'CCS.CATEGORY101', 'CCS.CATEGORY102', 'CCS.CATEGORY103', 'CCS.CATEGORY104', 'CCS.CATEGORY106', 'CCS.CATEGORY108', 'CCS.CATEGORY109', 'CCS.CATEGORY110', 'CCS.CATEGORY111', 'CCS.CATEGORY112', 'CCS.CATEGORY114', 'CCS.CATEGORY115', 'CCS.CATEGORY116', 'CCS.CATEGORY117', 'CCS.CATEGORY118', 'CCS.CATEGORY119', 'CCS.CATEGORY120', 'CCS.CATEGORY121', 'CCS.CATEGORY122', 'CCS.CATEGORY124', 'CCS.CATEGORY126', 'CCS.CATEGORY127', 'CCS.CATEGORY128', 'CCS.CATEGORY129', 'CCS.CATEGORY130', 'CCS.CATEGORY131', 'CCS.CATEGORY132', 'CCS.CATEGORY133', 'CCS.CATEGORY134', 'CCS.CATEGORY135', 'CCS.CATEGORY136', 'CCS.CATEGORY137', 'CCS.CATEGORY138', 'CCS.CATEGORY139', 'CCS.CATEGORY140', 'CCS.CATEGORY141', 'CCS.CATEGORY142', 'CCS.CATEGORY143', 'CCS.CATEGORY144', 'CCS.CATEGORY145', 'CCS.CATEGORY146', 'CCS.CATEGORY147', 'CCS.CATEGORY148', 'CCS.CATEGORY149', 'CCS.CATEGORY151', 'CCS.CATEGORY152', 'CCS.CATEGORY153', 'CCS.CATEGORY154', 'CCS.CATEGORY155', 'CCS.CATEGORY156', 'CCS.CATEGORY157', 'CCS.CATEGORY158', 'CCS.CATEGORY159', 'CCS.CATEGORY160', 'CCS.CATEGORY161', 'CCS.CATEGORY162', 'CCS.CATEGORY163', 'CCS.CATEGORY164', 'CCS.CATEGORY165', 'CCS.CATEGORY166', 'CCS.CATEGORY167', 'CCS.CATEGORY168', 'CCS.CATEGORY169', 'CCS.CATEGORY170', 'CCS.CATEGORY171', 'CCS.CATEGORY172', 'CCS.CATEGORY173', 'CCS.CATEGORY175', 'CCS.CATEGORY176', 'CCS.CATEGORY178', 'CCS.CATEGORY180', 'CCS.CATEGORY181', 'CCS.CATEGORY195', 'CCS.CATEGORY197', 'CCS.CATEGORY198', 'CCS.CATEGORY199', 'CCS.CATEGORY200', 'CCS.CATEGORY201', 'CCS.CATEGORY202', 'CCS.CATEGORY203', 'CCS.CATEGORY204', 'CCS.CATEGORY205', 'CCS.CATEGORY207', 'CCS.CATEGORY208', 'CCS.CATEGORY209', 'CCS.CATEGORY210', 'CCS.CATEGORY211', 'CCS.CATEGORY212', 'CCS.CATEGORY213', 'CCS.CATEGORY214', 'CCS.CATEGORY215', 'CCS.CATEGORY216', 'CCS.CATEGORY217', 'CCS.CATEGORY224', 'CCS.CATEGORY225', 'CCS.CATEGORY226', 'CCS.CATEGORY227', 'CCS.CATEGORY228', 'CCS.CATEGORY229', 'CCS.CATEGORY230', 'CCS.CATEGORY231', 'CCS.CATEGORY232', 'CCS.CATEGORY233', 'CCS.CATEGORY234', 'CCS.CATEGORY235', 'CCS.CATEGORY236', 'CCS.CATEGORY237', 'CCS.CATEGORY238', 'CCS.CATEGORY239', 'CCS.CATEGORY240', 'CCS.CATEGORY244', 'CCS.CATEGORY246', 'CCS.CATEGORY247', 'CCS.CATEGORY248', 'CCS.CATEGORY249', 'CCS.CATEGORY250', 'CCS.CATEGORY251', 'CCS.CATEGORY253', 'CCS.CATEGORY254', 'CCS.CATEGORY257', 'CCS.CATEGORY258', 'CCS.CATEGORY259', 'CCS.CATEGORY660', 'CCS.CATEGORY2616']
      }
    },
    DEFAULT_PATIENT: {
      'caseid': 1,
      'year': 2005,
      'sex': 'male',
      'age': 63,
      'smoker': true,
      'alcohol': false,
      'dnr': false,
      'ventilat': true,
      'hxcopd': false,
      'cpneumon': false,
      'hxchf': false,
      'cardiac_surgery': false,
      'renalfail': false,
      'dialysis': false,
      'discancr': false,
      'preop_wndinf': false,
      'steroid_immunosup': false,
      'wtloss': false,
      'bleeddis': false,
      'preop_transfus': false,
      'pregnancy': false,
      'priorop': false,
      'race': null,
      'bmi': 27.9854,
      'asa': 4,
      'diabetes': 'no',
      'dyspnea': 'no',
      'fnstatus': 'totally dependent',
      'liver': false,
      'heart': true,
      'pvd': false,
      'neuro': false,
      'plegia': false,
      'chemo_radio': false,
      'infx': 'no',
      'lab_sodium': 144,
      'lab_bun': 41,
      'lab_creatine': 1.6,
      'lab_albumin': 2.4,
      'lab_bili': 0.6,
      'lab_ast': 12,
      'lab_alkphos': 43,
      'lab_wbc': 9.6,
      'lab_hct': 25.5,
      'lab_plt': 267,
      'lab_ptt': 23.2,
      'lab_inr': 1.4,
      'podiag': 'no',
      'workrvu': 14.35,
      'pgy': 6,
      'emergency': false,
      'optime': 189,
      'general_anes': true,
      'other_proc': true,
      'concurrent_proc': false,
      'wound': 'clean',
      'cpt_type': 'OFFICIAL4',
      'ccs_category': null,
      'cpt': '33881',
      'cpt_mis': true,
      'cpt_implant': false
    },
    PATIENT_INFO: 'caseid,sex,age,race,year,bmi',
    PATIENT_HISTORY: 'hxcopd,hxchf,cardiac_surgery,discancr,steroid_immunosup,bleeddis,liver,heart,pvd,neuro,plegia,chemo_radio',
    RISK_FACTORS: 'asa,infx,fnstatus,diabetes,dyspnea',
    RISK_FACTORS_BOOLEAN: 'smoker,alcohol,pregnancy,dnr,renalfail,ventilat,cpneumon,dialysis,preop_wndinf,preop_transfus,wtloss,priorop',
    SURGICAL_INFO: 'cpt,cpt_type,ccs_category,workrvu,pgy,optime,wound,podiag',
    SURGICAL_INFO_BOOLEAN: 'cpt_mis,cpt_implant,general_anes,other_proc,concurrent_proc,emergency',
    LABS: 'lab_sodium,lab_bun,lab_creatine,lab_albumin,lab_bili,lab_ast,lab_alkphos,lab_wbc,lab_hct,lab_plt,lab_ptt,lab_inr',
    ORDERS: [
      null, {
        'order_type': 'order',
        'order_text': 'Order to remove foley within 24 hours after operation, except when otherwise indicated'
      }, {
        'order_type': 'order',
        'order_text': 'Order nursing alert: post reminder to wash hands before/after dressing change'
      }, {
        'order_type': 'order',
        'order_text': 'Order to remove dressing 24-48 hours after operation'
      }, {
        'order_type': 'order',
        'order_text': 'Order nursing alert: Educate patient and family on proper care for sterile dressing changes'
      }, {
        'order_type': 'order',
        'order_text': 'Check POC glucose. Notify team for for glucose > 200 mg/dL'
      }, {
        'order_type': ' page physician. ',
        'order_text': 'Check body temperature, if <36C or >38.5C, notify the rounding team'
      }, {
        'order_type': 'order',
        'order_text': 'Continue beta-blockers postoperatively for patients that were already taking beta blockers'
      }, {
        'order_type': 'order',
        'order_text': 'Monitor strict I/Os for renal or heart failure patients'
      }, {
        'order_type': 'order',
        'order_text': 'Monitor daily weights'
      }, {
        'order_type': 'order',
        'order_text': 'Start unfractionated heparin every 8-12 hours afterwards operation'
      }, {
        'order_type': 'order',
        'order_text': 'Resume chronic anticoagulation therapy within 12-24 hours after surgery'
      }, {
        'order_type': 'order',
        'order_text': 'Continue DVT chemoprophylaxis with acquired hypercoagulable states 2 week after operation (i.e. cancer)'
      }, {
        'order_type': 'order',
        'order_text': 'Order incentive spirometer for deep breathing. '
      }, {
        'order_type': 'order',
        'order_text': 'Order nursing alert: assisted ambulation around the room and on the floor as soon as possible'
      }, {
        'order_type': 'order',
        'order_text': 'Check BMP for electrolytes and BUN/Cr. '
      }, {
        'order_type': ' re-start anticoagulation:',
        'order_text': 'For patients on anti-coagulation prior to operation, re-start anticoagulation'
      }, {
        'order_type': 'order',
        'order_text': 'Modify risk factors for stroke: Atrial fibrillation: Re-start any heart rate or rhythm medications for control. '
      }, {
        'order_type': 'order',
        'order_text': 'Modify risk factors for stroke: Diabetes Mellitus: Re-start any home diabetes medications for control. '
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': '',
        'order_text': ''
      }, {
        'order_type': 'consult',
        'order_text': 'Consult geriatric service'
      }, {
        'order_type': 'consult',
        'order_text': 'Order nursing alert: Optimize physical environment (sleep hygiene, minimize tethers, encourage family at bedside, vision/hearing aids, universal fall precautions)'
      }, {
        'order_type': 'consult',
        'order_text': 'consult: social work '
      }, {
        'order_type': 'consult',
        'order_text': 'Consult PT/OT for early mobilization'
      }, {
        'order_type': 'systemic narcotics',
        'order_text': 'Order pharmacist to assess appropriate pain control regimen to prevent delirium'
      }, {
        'order_type': 'order',
        'order_text': 'Order weight-appropriate DVT prophylaxis'
      }, {
        'order_type': 'order',
        'order_text': 'Order CPAP for suspected/diagnosed sleep apnea;'
      }, {
        'order_type': 'order',
        'order_text': 'Order chest physiotherapy'
      }, {
        'order_type': 'order',
        'order_text': 'Order monitored telemetry for at least 24 hours'
      }, {
        'order_type': 'order',
        'order_text': 'Order weight appropriate DVT prophylaxis'
      }, {
        'order_type': 'order',
        'order_text': 'Order multivitamin'
      }, {
        'order_type': 'order',
        'order_text': 'order: glucose check q6 or ACHS'
      }, {
        'order_type': ' then q6 or achs thereafter',
        'order_text': 'order: glucose check every 3 hours for first 24 hours'
      }, {
        'order_type': ' resume non-metformin oral meds + sliding scale insulin',
        'order_text': 'alert: use insulin for glucose control if not eating if eating'
      }, {
        'order_type': 'bpa',
        'order_text': 'BPA: PCP follow-up for metformin resumption (or if patient is eating well and no renal/hepatic/congestive heart failure)'
      }, {
        'order_type': ' and at bedtime as needed',
        'order_text': 'alert: short-acting insulin can be given before meals together with their prandial insulin'
      }, {
        'order_type': 'consult',
        'order_text': 'Consult endocrine/diabetes service'
      }, {
        'order_type': 'order',
        'order_text': 'Order nicotine replacement therapy'
      }, {
        'order_type': 'order',
        'order_text': 'Order incentive spirometer'
      }, {
        'order_type': 'order',
        'order_text': 'Order CIWA protocol'
      }, {
        'order_type': 'alert',
        'order_text': 'Alert: monitor for signs of alcohol withdrawal'
      }, {
        'order_type': 'order',
        'order_text': 'Order inhaled bronchodilators PRN or scheduled if part of patient’s home meds'
      }, {
        'order_type': 'order',
        'order_text': 'Order inhaled Bronchodilators'
      }, {
        'order_type': 'order',
        'order_text': 'Order systemic steroids for those taking chronic steroids'
      }, {
        'order_type': 'consult',
        'order_text': 'Consult Pain management for pain control'
      }, {
        'order_type': 'alert',
        'order_text': 'Alert: reminder to continue appropriate antibiotics'
      }, {
        'order_type': 'order',
        'order_text': 'Order: daily BMP'
      }, {
        'order_type': 'alert',
        'order_text': 'Alert: restrict sedatives: benzo/narcotics'
      }, {
        'order_type': 'alert',
        'order_text': 'Alert: Any drugs with hepatic metabolism should be flagged'
      }, {
        'order_type': 'alert',
        'order_text': 'Alert: Continue beta blockers in patients who are on beta blockers chronically'
      }, {
        'order_type': 'alert',
        'order_text': 'Alert: Continue statins in patients currently taking statins'
      }, {
        'order_type': 'bpa',
        'order_text': 'BPA: Perioperative initiation of statin use is reasonable in patients undergoing vascular surgery'
      }, {
        'order_type': 'bpa',
        'order_text': 'BPA: Continuation of ACE inhibitors or ARBs is reasonable perioperatively'
      }, {
        'order_type': ' avoid nephrotoxic drugs',
        'order_text': 'Alert: renally dose medications'
      }, {
        'order_type': 'consult',
        'order_text': 'Consult Nephrology'
      }, {
        'order_type': 'order',
        'order_text': 'Order: daily weights'
      }, {
        'order_type': 'alert',
        'order_text': 'Alert: Postoperative blood pressure goals SBP<140'
      }, {
        'order_type': 'order',
        'order_text': 'Order: 8am cortisol'
      }, {
        'order_type': 'alert',
        'order_text': 'Alert: Resume home steroids'
      }, {
        'order_type': 'bpa',
        'order_text': 'BPA: start early enteral feed'
      }, {
        'order_type': 'consult',
        'order_text': 'consult: RD nutritionist'
      }, {
        'order_type': ' albumin level',
        'order_text': 'Order: prealbumin'
      }, {
        'order_type': 'order',
        'order_text': 'Order: nutritional supplements (ensure)'
      }, {
        'order_type': 'order',
        'order_text': 'Order: calorie count'
      }, {
        'order_type': 'order',
        'order_text': 'Order: daily CBC'
      }, {
        'order_type': 'order',
        'order_text': 'Order: fetal monitoring'
      }, {
        'order_type': 'consult',
        'order_text': 'Consult: obstetrics'
      }, {
        'order_type': 'order',
        'order_text': 'Order: increased level of care for disturbances to hemodynamic parameters'
      }, {
        'order_type': 'order',
        'order_text': 'Order: daily CMP'
      }, {
        'order_type': 'order',
        'order_text': 'Order: FeNa'
      }, {
        'order_type': 'alert',
        'order_text': 'Alert: discuss goals of care'
      }, {
        'order_type': '',
        'order_text': 'Alert: q12hour microbiology review'
      }
    ],
    COMPLICATION_INTERVENTIONS: {
      'urinary_tract_infections': {
        'id': 1,
        'preop_variable': 'urinary_tract_infections',
        'label': 'Urinary Tract Infections',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          10
        ]
        },
      'wound_compilcations':{
        'id': 2,
        'preop_variable': 'wound_compilcations',
        'label': 'Wound Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          21,
          22,
          23,
          24
        ]
      },
      'cardiac_complications': {
        'id': 3,
        'preop_variable': 'cardiac_complications',
        'label': 'Cardiac Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          30,
          31,
          32,
          604,
          605
          ]
        },
      'thrombeombolic_complications': {
        'id': 4,
        'preop_variable': 'thrombeombolic_complications',
        'label': 'Thromboembolic Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          40,
          41,
          42
          ]
        },
      'respiratory_complications': {
        'id': 5,
        'preop_variable': 'respiratory_complications',
        'label': 'Respiratory Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          50,
          203
          ]
        },
      'systemic_septic_complications': {
        'id': 6,
        'preop_variable': 'systemic_septic_complications',
        'label': 'Systemic Septic Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          10,
          20,
          21,
          22,
          23,
          24
          ]
        },
      'renal_complications': {
        'id': 7,
        'preop_variable': 'renal_complications',
        'label': 'Renal Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          800,
          801,
          802
          ]
        },
      'neurologic_complications': {
        'id': 9,
        'preop_variable': 'neurologic_complications',
        'label': 'Neurologic Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          80,
          81,
          82,
          83
          ]
        },
      'reoperations': {
        'id': 10,
        'preop_variable': 'reoperations',
        'label': 'Reoperations',
        'active': '0',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
        ],
      },
      'postoperative_hospital_stay': {
        'id': 11,
        'preop_variable': 'postoperative_hospital_stay',
        'label': 'Postoperative Hospital Stay',
        'active': '0',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
        ],
      },
      'morbidity': {
        'id': 12,
        'preop_variable': 'morbidity',
        'label': 'Overall Complications',
        'active': '0',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
        ],
      },
      'mortality': {
        'id': 13,
        'preop_variable': 'mortality',
        'label': '30-Day Mortality',
        'active': '0',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
        ],
      }
    },
    INTERVENTIONS: {
      'OUTCOMES_UTI': {
        'preop_variable': 'OUTCOMES_UTI',
        'label': 'Urinary Tract Infections',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          1
        ],
        'references': '\'http://www.ncbi.nlm.nih.gov/pubmed/20156062, http://www.ncbi.nlm.nih.gov/pubmed/16625600\'',
        'comments': ''
      },
      'OUTCOMES_SSI_ANY': {
        'preop_variable': 'OUTCOMES_SSI_ANY',
        'label': 'Wound Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          2,
          3,
          4,
          5,
          6
        ],
        'references': '\'http://www.ahaphysicianforum.org/resources/appropriate-use/antimicrobial/content%20files%20pdf/SHEA-Clinical-Guidelines.pdf\', \'http://www.md.ucl.ac.be/didac/hosp/ssi.pdf\',   \'http://www.ncbi.nlm.nih.gov/pubmed/25163027\'',
        'comments': ''
      },
      'OUTCOMES_CARDIAC': {
        'preop_variable': 'OUTCOMES_CARDIAC',
        'label': 'Cardiac Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          7,
          8,
          9
        ],
        'references': '\'http://circ.ahajournals.org/content/116/17/e418.full.pdf\'',
        'comments': ''
      },
      'OUTCOMES_DVTPE': {
        'preop_variable': 'OUTCOMES_DVTPE',
        'label': 'Thromboembolic Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          10,
          11,
          12
        ],
        'references': '\'http://www.ncbi.nlm.nih.gov/pubmed/17544079\', \'http://www.ncbi.nlm.nih.gov/pubmed/22315266\'',
        'comments': ''
      },
      'OUTCOMES_RESP': {
        'preop_variable': 'OUTCOMES_RESP',
        'label': 'Respiratory Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          13,
          14
        ],
        'references': '\'http://www.ncbi.nlm.nih.gov/pubmed/15048056\'',
        'comments': ''
      },
      'OUTCOMES_SEPTIC': {
        'preop_variable': 'OUTCOMES_SEPTIC',
        'label': 'Septic Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          1,
          2,
          3,
          4,
          13,
          14
        ],
        'references': '\'http://www.ncbi.nlm.nih.gov/pubmed/20156062\', \'http://www.ncbi.nlm.nih.gov/pubmed/16625600\', \'http://www.ahaphysicianforum.org/resources/appropriate-use/antimicrobial/content%20files%20pdf/SHEA-Clinical-Guidelines.pdf\', \'http://www.md.ucl.ac.be/didac/hosp/ssi.pdf\', \'http://www.ncbi.nlm.nih.gov/pubmed/15048056\'',
        'comments': ''
      },
      'OUTCOMES_RENAL_FAIL': {
        'preop_variable': 'OUTCOMES_RENAL_FAIL',
        'label': 'Renal Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          8,
          9,
          15
        ],
        'references': '\'http://www.uptodate.com.proxy.lib.duke.edu/contents/overview-of-the-management-of-acute-kidney-injury-acute-renal-failure?source=search_result&search=acute+kidney+injury+prevention&selectedTitle=4~150#H6570915\'',
        'comments': ''
      },
      'OUTCOMES_BLEEDING': {
        'preop_variable': 'OUTCOMES_BLEEDING',
        'label': 'Postoperative Bleeding',
        'active': '0',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          16
        ],
        'references': '\'http://www.uptodate.com/contents/perioperative-management-of-patients-receiving-anticoagulants\'',
        'comments': ''
      },
      'OUTCOMES_NEURO': {
        'preop_variable': 'OUTCOMES_NEURO',
        'label': 'Neurologic Complications',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [
          16,
          17,
          18
        ],
        'references': '\'http://www.uptodate.com/contents/atrial-fibrillation-anticoagulant-therapy-to-prevent-embolization\'',
        'comments': ''
      },
      'OUTCOMES_REOPERATION': {
        'preop_variable': 'OUTCOMES_REOPERATION',
        'label': 'Reoperations',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [],
        'references': '',
        'comments': ''
      },
      'OUTCOMES_LOS': {
        'preop_variable': 'OUTCOMES_LOS',
        'label': 'Postoperative Length of Stay',
        'active': '1',
        'trigger': '',
        'context': 'outcome',
        'description': '',
        'order_ids': [],
        'references': '',
        'comments': ''
      },
      'age': {
        'preop_variable': 'age',
        'label': 'Older Age',
        'active': '1',
        'trigger': '>50',
        'context': 'postop',
        'description': '',
        'order_ids': [
          101,
          102,
          103,
          104,
          105,
          106
        ],
        'references': '\'https://www.facs.org/~/media/files/quality%20programs/geriatric/acs%20nsqip%20geriatric%202016%20guidelines.ashx\', \'http://archinte.jamanetwork.com/article.aspx?articleid=485472\'',
        'comments': ''
      },
      'race': {
        'preop_variable': 'race',
        'label': 'Racial Displarity',
        'active': '1',
        'trigger': 'NOT white',
        'context': 'postop',
        'description': '',
        'order_ids': [
          103
        ],
        'references': '\'http://www.ncbi.nlm.nih.gov/pubmed/15800282\'',
        'comments': ''
      },
      'bmi': {
        'preop_variable': 'bmi',
        'label': 'BMI',
        'active': '1',
        'trigger': '>30',
        'context': 'postop',
        'description': '',
        'order_ids': [
          107,
          108,
          109,
          110,
          111,
          112,
          104
        ],
        'references': '\'https://asmbs.org/resources/clinical-practice-guidelines-for-the-perioperative-nutritional-metabolic-and-nonsurgical-support-of-the-bariatric-surgery-patient\'',
        'comments': ''
      },
      'diabetes': {
        'preop_variable': 'diabetes',
        'label': 'Diabetes - Insulin',
        'active': '1',
        'trigger': 'inuslin-dependent',
        'context': 'postop',
        'description': '',
        'order_ids': [
          116,
          117
        ],
        'references': '\'Randomized study of basal-bolus insulin therapy in the inpatient management of patients with type 2 diabetes undergoing general surgery (RABBIT 2 surgery).\'',
        'comments': ''
      },
      'smoker': {
        'preop_variable': 'smoker',
        'label': 'Smoking',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          118,
          119,
          108
        ],
        'references': '\'http://www.thoracic.org/copd-guidelines/for-health-professionals/management-of-stable-copd/surgery-in-and-for-copd/perioperative-management.php\',\'http://bja.oxfordjournals.org/content/102/3/297.full\'',
        'comments': ''
      },
      'alcohol': {
        'preop_variable': 'alcohol',
        'label': 'Alcohol Use',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          120,
          121
        ],
        'references': '\'http://bja.oxfordjournals.org/content/102/3/297.full\',\'Kork et al. Perioperative management of patients with alcohol, tobacco and drug dependency\'',
        'comments': ''
      },
      'dyspnea': {
        'preop_variable': 'dyspnea',
        'label': 'Dyspnea',
        'active': '1',
        'trigger': 'yes',
        'context': 'postop',
        'description': '',
        'order_ids': [
          122,
          108,
          104
        ],
        'references': '\'http://www.thoracic.org/copd-guidelines/for-health-professionals/management-of-stable-copd/surgery-in-and-for-copd/perioperative-management.php\'',
        'comments': ''
      },
      'fnstatus': {
        'preop_variable': 'fnstatus',
        'label': 'Functional Status',
        'active': '1',
        'trigger': 'NOT none',
        'context': 'postop',
        'description': '',
        'order_ids': [
          103,
          104
        ],
        'references': '',
        'comments': ''
      },
      'hxcopd': {
        'preop_variable': 'hxcopd',
        'label': 'History of COPD',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          123,
          124,
          125,
          104,
          108,
          118
        ],
        'references': '\'http://www.thoracic.org/copd-guidelines/for-health-professionals/management-of-stable-copd/surgery-in-and-for-copd/perioperative-management.php\'',
        'comments': ''
      },
      'cpneumon': {
        'preop_variable': 'cpneumon',
        'label': 'Pneumonia',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          108,
          126
        ],
        'references': '',
        'comments': ''
      },
      'liver': {
        'preop_variable': 'liver',
        'label': 'Liver Disease',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          149,
          128,
          125,
          129
        ],
        'references': '\'http://www.uptodate.com/contents/assessing-surgical-risk-in-patients-with-liver-disease\'',
        'comments': ''
      },
      'hxchf': {
        'preop_variable': 'hxchf',
        'label': 'Heart Failure',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          109,
          125,
          130,
          131,
          132,
          133
        ],
        'references': '\'http://content.onlinejacc.org/article.aspx?articleid=1893784\'',
        'comments': ''
      },
      'heart': {
        'preop_variable': 'heart',
        'label': 'Heart Disease',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          109,
          125,
          130,
          131,
          132,
          133
        ],
        'references': '',
        'comments': ''
      },
      'htn': {
        'preop_variable': 'htn',
        'label': 'Hypertension',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          109,
          125,
          130,
          131,
          132,
          133
        ],
        'references': '',
        'comments': ''
      },
      'cardiac_surgery': {
        'preop_variable': 'cardiac_surgery',
        'label': 'Cardiac Surgery',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          109,
          125,
          130,
          131,
          132,
          133
        ],
        'references': '',
        'comments': ''
      },
      'pvd': {
        'preop_variable': 'pvd',
        'label': 'Peripheral Vascular Disease',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          109,
          125,
          130,
          131,
          132,
          133
        ],
        'references': '',
        'comments': ''
      },
      'renalfail': {
        'preop_variable': 'renalfail',
        'label': 'Renal Failure',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          127,
          134,
          135
        ],
        'references': '',
        'comments': ''
      },
      'dialysis': {
        'preop_variable': 'dialysis',
        'label': 'Dialysis',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          127,
          134,
          135,
          136
        ],
        'references': '',
        'comments': ''
      },
      'neuro': {
        'preop_variable': 'neuro',
        'label': 'Neurological Disorder',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          137
        ],
        'references': '\'http://anesthesiology.pubs.asahq.org/article.aspx?articleid=1933989\'',
        'comments': ''
      },
      'plegia': {
        'preop_variable': 'plegia',
        'label': 'Paralysis',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          106
        ],
        'references': '',
        'comments': ''
      },
      'discancr': {
        'preop_variable': 'discancr',
        'label': 'Disseminated Cancer',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          151,
          106,
          141,
          142,
          143,
          144
        ],
        'references': '',
        'comments': ''
      },
      'steroid_immunosup': {
        'preop_variable': 'steroid_immunosup',
        'label': 'Immunosuppression',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          138,
          139
        ],
        'references': '\'http://www.uptodate.com/contents/the-surgical-patient-taking-glucocorticoids\'',
        'comments': ''
      },
      'wndinf': {
        'preop_variable': 'wndinf',
        'label': 'Preoperative Wound Infection',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          140,
          141,
          142,
          143,
          144
        ],
        'references': '',
        'comments': ''
      },
      'wtloss': {
        'preop_variable': 'wtloss',
        'label': 'Recent Weight Loss',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          140,
          141,
          142,
          143,
          144
        ],
        'references': '',
        'comments': ''
      },
      'bleeddis': {
        'preop_variable': 'bleeddis',
        'label': 'Bleeding Disorder',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          145
        ],
        'references': '',
        'comments': ''
      },
      'preop_chemo_radio': {
        'preop_variable': 'preop_chemo_radio',
        'label': 'Recent Chemotherapy or Radiotherapy',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          140,
          141,
          142,
          143,
          144
        ],
        'references': '',
        'comments': ''
      },
      'preop_infx_sirs': {
        'preop_variable': 'preop_infx_sirs',
        'label': 'Ongoing Infection',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          145,
          152
        ],
        'references': '',
        'comments': ''
      },
      'preop_pregnancy': {
        'preop_variable': 'preop_pregnancy',
        'label': 'Pregnancy',
        'active': '1',
        'trigger': 'TRUE',
        'context': 'postop',
        'description': '',
        'order_ids': [
          146,
          147
        ],
        'references': '',
        'comments': ''
      },
      'lab_sodium': {
        'preop_variable': 'lab_sodium',
        'label': 'Sodium Level',
        'active': '1',
        'trigger': '>150 OR <130',
        'context': 'postop',
        'description': '',
        'order_ids': [
          127
        ],
        'references': '',
        'comments': ''
      },
      'lab_bun': {
        'preop_variable': 'lab_bun',
        'label': 'BUN Level',
        'active': '1',
        'trigger': '>40',
        'context': 'postop',
        'description': '',
        'order_ids': [
          127
        ],
        'references': '',
        'comments': ''
      },
      'lab_creatine': {
        'preop_variable': 'lab_creatine',
        'label': 'Creatinine Level',
        'active': '1',
        'trigger': '>1.5',
        'context': 'postop',
        'description': '',
        'order_ids': [
          127
        ],
        'references': '',
        'comments': ''
      },
      'lab_albumin': {
        'preop_variable': 'lab_albumin',
        'label': 'Albumin Level',
        'active': '1',
        'trigger': '<3.9',
        'context': 'postop',
        'description': '',
        'order_ids': [
          140,
          141,
          142,
          143,
          144
        ],
        'references': '',
        'comments': ''
      },
      'lab_bili': {
        'preop_variable': 'lab_bili',
        'label': 'Bilirubin Level',
        'active': '1',
        'trigger': '>2',
        'context': 'postop',
        'description': '',
        'order_ids': [
          149,
          128,
          125,
          129
        ],
        'references': '',
        'comments': ''
      },
      'lab_wbc': {
        'preop_variable': 'lab_wbc',
        'label': 'WBC Level',
        'active': '1',
        'trigger': '>11',
        'context': 'postop',
        'description': '',
        'order_ids': [
          145,
          152
        ],
        'references': '',
        'comments': ''
      },
      'lab_hct': {
        'preop_variable': 'lab_hct',
        'label': 'Hematocrit Level',
        'active': '1',
        'trigger': '<30',
        'context': 'postop',
        'description': '',
        'order_ids': [
          109,
          148
        ],
        'references': '\'http://anesthesiology.pubs.asahq.org/article.aspx?articleid=1923206#67895748\'',
        'comments': ''
      },
      'lab_plt': {
        'preop_variable': 'lab_plt',
        'label': 'Platelet Level',
        'active': '1',
        'trigger': '<150',
        'context': 'postop',
        'description': '',
        'order_ids': [
          145
        ],
        'references': '\'http://anesthesiology.pubs.asahq.org/article.aspx?articleid=1923206#67895748\'',
        'comments': ''
      },
      'lab_ptt': {
        'preop_variable': 'lab_ptt',
        'label': 'PTT Level',
        'active': '1',
        'trigger': '>35',
        'context': 'postop',
        'description': '',
        'order_ids': [
          145
        ],
        'references': '',
        'comments': ''
      },
      'lab_inr': {
        'preop_variable': 'lab_inr',
        'label': 'INR Level',
        'active': '1',
        'trigger': '>1.3',
        'context': 'postop',
        'description': '',
        'order_ids': [
          145
        ],
        'references': '',
        'comments': ''
      },
      'podiag: malnutrition': {
        'preop_variable': 'podiag: malnutrition',
        'label': 'Manutrition',
        'active': '0',
        'trigger': '1',
        'context': 'postop',
        'description': '',
        'order_ids': [],
        'references': '',
        'comments': ''
      },
      'cpt_mis': {
        'preop_variable': 'cpt_mis',
        'label': 'Minimally Invasive Surgery',
        'active': '1',
        'trigger': 'FALSE',
        'context': 'postop',
        'description': '',
        'order_ids': [],
        'references': '',
        'comments': ''
      }
    }
  });
