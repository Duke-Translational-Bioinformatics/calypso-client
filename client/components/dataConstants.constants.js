'use strict';

angular.module('calypsoClientApp')
  .constant('dataConstants', {
    COMPLICATIONS: ['ssi', 'cardiac', 'dvt', 'pna', 'renal', 'uti', 'morbidity', 'mortality'],
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
      'OFFICIAL1': 'Integumentary system',
      'OFFICIAL2': 'Musculoskeletal system',
      'OFFICIAL3': 'Respiratory system',
      'OFFICIAL4': 'Cardiovascular system',
      'OFFICIAL5': 'Hemic and lymphatic systems',
      'OFFICIAL6': 'Mediastinum and diaphragm',
      'OFFICIAL7': 'Digestive system',
      'OFFICIAL8': 'Urinary system',
      'OFFICIAL9': 'Male genital system',
      'OFFICIAL10': 'Reproductive system and intersex',
      'OFFICIAL11': 'Female genital system',
      'OFFICIAL12': 'Maternity care and delivery',
      'OFFICIAL13': 'Endocrine system',
      'OFFICIAL14': 'Nervous system',
      'OFFICIAL15': 'Eye and ocular adnexa',
      'OFFICIAL16': 'Auditory system',
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
        'name': 'Year of Operation',
        'description': 'Year of surgical operation',
        'type': 'int',
        'min': 2005,
        'max': 2008
      },
      'sex': {
        'name': 'Gender',
        'description': 'Gender',
        'type': 'string',
        'category': ['Male', 'Female']
      },
      'age': {
        'name': 'Age',
        'description': 'Enter patient age in years (enter 90 for greater than age 90).',
        'type': 'int',
        'min': 15,
        'max': 90
      },
      'smoker': {
        'name': 'Current Smoker',
        'description': 'If the patient has smoked cigarettes in the year prior to admission for surgery',
        'type': 'boolean'
      },
      'alcohol': {
        'name': 'Alcohol Abuse',
        'description': 'If 2 drinks per day in the two weeks prior to admission',
        'type': 'boolean'
      },
      'dnr': {
        'name': 'DNR Status',
        'description': 'If the patient has had a Do-Not-Resuscitate order',
        'type': 'boolean'
      },
      'ventilat': {
        'name': 'Recent Ventilator Use',
        'description': 'If a preoperative patient required ventilator-assisted respiration at any time during the 48 hours preceding surgery. This does not include the treatment of sleep apnea with CPAP.',
        'type': 'boolean'
      },
      'hxcopd': {
        'name': 'Severe COPD',
        'description': 'If there is a historical or current diagnosis of COPD AND at least one of the following, within the 30 days prior to the principal operative procedure or at the time the patient is being considered as a candidate for surgery: (1) Functional disability from COPD (e.g., dyspnea, inability to perform ADLs) (2) Requires chronic bronchodilator therapy with oral or inhaled agents (3) Hospitalization in the past for treatment of COPD (4) An FEV1 of <75% of predicted on a prior pulmonary function test (PFT)',
        'type': 'boolean'
      },
      'cpneumon': {
        'name': 'Pneumonia',
        'description': 'If the patient has a new pneumonia or recently diagnosed pneumonia and on current antibiotic treatment at the time the patient is brought to the OR',
        'type': 'boolean'
      },
      'hxchf': {
        'name': 'Symptomatic CHF',
        'description': 'Only newly diagnosed CHF within the previous 30 days or a diagnosis of chronic CHF with new signs or symptoms in the 30 days prior to surgery fulfills this definition. Common manifestations are: Abnormal limitation in exercise tolerance due to dyspnea or fatigue -Orthopnea (dyspnea on lying supine); Paroxysmal nocturnal dyspnea (PND-awakening from sleep with dyspnea); Increased jugular venous pressure -Pulmonary rales on physical examination; Cardiomegaly -Pulmonary vascular engorgement',
        'type': 'boolean'
      },
      'cardiac_surgery': {
        'name': 'Previous Cardiac Surgery',
        'description': 'If the patient has had any major cardiac surgical procedures (performed either as an ‘off-pump’ repair or utilizing cardiopulmonary bypass). This includes coronary artery bypass graft surgery, valve replacement or repair, repair of atrial or ventricular septal defects, great thoracic vessel repair, cardiac transplant, left ventricular aneurysmectomy, insertion of left ventricular assist devices (LVAD)',
        'type': 'boolean'
      },
      'renalfail': {
        'name': 'Acute Renal Failure',
        'description': 'The patient’s renal function has demonstrated compromise within 24 hours prior to surgery. Patient must have an increase in BUN based on two measurements and two creatinine (Cr) results above 3mg/dl. There must be at minimum two measurements per lab value, the most recent of which must be within 24 hours prior to the start of the principal operative procedure; the second must be within 90 days of the principal operative procedure.',
        'type': 'boolean',
      },
      'dialysis': {
        'name': 'Dialysis Dependent',
        'description': 'If the patient has acute or chronic renal failure requiring treatment with peritoneal dialysis, hemodialysis, hemofiltration, hemodiafiltration, or ultrafiltration within 2 weeks prior to the principal operative procedure.',
        'type': 'boolean'
      },
      'discancr': {
        'name': 'Disseminated Cancer',
        'description': 'Patients who have cancer that: (1) Has spread to one site or more sites in addition to the primary site AND (2) In whom the presence of multiple metastases indicates the cancer is widespread, fulminant, or near terminal. The following are reported as Disseminated Cancer: Acute Lymphocytic Leukemia (ALL), Acute Myelogenous Leukemia (AML), and Stage IV Lymphoma. The following are not reported as Disseminated Cancer: Chronic Lymphocytic Leukemia (CLL), Chronic Myelogenous Leukemia (CML), Stages I through III Lymphomas or Multiple Myeloma. Example: A patient with a primary breast cancer with positive nodes in the axilla does NOT qualify for this definition. She has spread of the tumor to a site other than the primary site, but does not have widespread metastases. A patient with primary breast cancer with positive nodes in the axilla AND liver metastases does qualify, because she has both spread of the tumor to the axilla and other major organs.',
        'type': 'boolean'
      },
      'preop_wndinf': {
        'name': 'Open/Infected Wound',
        'description': 'Preoperative evidence of a documented open wound at the time of the principal operative procedure. An open wound is a breach in the integrity of the skin or separation of skin edges and includes open surgical wounds, with or without cellulitis or purulent exudate. Open drains should be considered an open wound: (e.g. Penrose drains). Open wounds currently undergoing dressing changes or with negative pressure wound devices (e.g., wound vacs). Any abnormal passageway leading from an internal organ (e.g. intestinal tract) to the surface of the body / skin. (e.g. enterocutaneous fistula [ECF])',
        'type': 'boolean'
      },
      'steroid_immunosup': {
        'name': 'Steroid Use',
        'description': 'Patient has required the regular administration of oral or parenteral corticosteroid (e.g. Prednisone, Decadron) medications or immunosuppressant medications, within the 30 days prior to the principal operative procedure or at the time the patient is being considered as a candidate for surgery, for a chronic medical condition (e.g. COPD, asthma, rheumatologic disease, rheumatoid arthritis, inflammatory bowel disease). A one-time pulse, limited short course, or a taper of less than 10 days duration would not qualify. Do not include topical corticosteroids applied to the skin or corticosteroids administered by inhalation or rectally. Do not include patients who only receive short course steroids (duration 10 days or less) in the 30 days prior to surgery.',
        'type': 'boolean'
      },
      'wtloss': {
        'name': 'Recent Weight Loss',
        'description': 'Patients with a greater than 10% decrease in body weight in the six month interval immediately preceding surgery as manifested by serial weights in the chart, as reported by the patient, or as evidenced by change in clothing size or severe cachexia. Patients who have intentionally lost weight as part of a weight reduction program do not qualify.',
        'type': 'boolean'
      },
      'bleeddis': {
        'name': 'Bleeding Risk',
        'description': 'Patients with any condition that places the patient at risk for excessive bleeding requiring hospitalization due to a deficiency of blood clotting elements (e.g., vitamin K deficiency, hemophilias, thrombocytopenia, chronic anticoagulation therapy that has not been discontinued prior to surgery).',
        'type': 'boolean'
      },
      'preop_transfus': {
        'name': 'Recent Transfusion',
        'description': 'Preoperative loss of blood necessitating any transfusion (minimum of 1 unit) of whole blood/packed red cells transfused during the 72 hours prior to surgery start time, including any blood transfused in the emergency room.',
        'type': 'boolean'
      },
      'pregnancy': {
        'name': 'Pregnancy Status',
        'description': 'Pregnancy is determined by one of the following: Administration of a blood or urine pregnancy test with a positive result; Visualization of the fetus by ultrasound . Indication of fetal heart rate by ultrasound or fetal heart monitoring Pregnancy takes approximately 40 weeks between the time of the last menstrual cycle and delivery',
        'type': 'boolean'
      },
      'priorop': {
        'name': 'Recent Surgery',
        'description': 'Patient has had any major surgical procedure performed within 30 days prior to the assessed operation',
        'type': 'boolean'
      },
      'race': {
        'name': 'Race',
        'description': 'Race',
        'type': 'string',
        'category': ['White','Black','Asian', 'Other']
      },
      'bmi': {
        'name': 'BMI',
        'description': 'Patient body mass index, caculated from the most recent height and weight',
        'type': 'real',
        'min': 0,
        'max': 100
      },
      'asa': {
        'name': 'ASA Classification',
        'description': 'The American Society of Anesthesiology (ASA) Physical Status Classification of the patient’s present physical condition on a scale from 1-5 as it appears on the anesthesia record. The classifications are as follows: ASA 1-Normal healthy patient; ASA 2-Patient with mild systemic disease; ASA 3-Patient with severe systemic disease; ASA 4-Patient with severe systemic disease that is a constant threat to life; ASA 5-Moribund patient who is not expected to survive without the operation.',
        'type': 'string',
        'category': ['1-Healthy','2-Mild Systemic Disease','3-Severe Systemic Disease','4-Life Threatening Disease','5-Moribund']
      },
      'diabetes': {
        'name': 'Diabetes Severity',
        'description': 'Patients with insulin resistance that routinely take anti-diabetic agents are included. Patients whose diabetes is controlled by diet alone are not included.',
        'type': 'string',
        'category': ['No Diabetes','Non-Insulin', 'Insulin']
      },
      'dyspnea': {
        'name': 'Baseline Dyspnea',
        'description': 'The usual or typical level of dyspnea (patient’s baseline), within the 30-days prior to surgery. The intent is not to include patients solely because of an acute respiratory condition leading to intubation prior to surgery, but rather to reflect a chronic disease state.',
        'type': 'string',
        'category': ['No Dyspnea','At Rest', 'Moderate Exertion']
      },
      'fnstatus': {
        'name': 'Functional Health Status',
        'description': 'The best functional status demonstrated by the patient within the 30 days prior to surgery is reported. Report the level of functional health status as defined by the following criteria. (1) Independent: The patient does not require assistance from another person for any activities of daily living. This includes a person who is able to function independently with prosthetics, equipment, or devices. (2) Partially dependent: The patient requires some assistance from another person for activities of daily living. This includes a person who utilizes prosthetics, equipment, or devices but still requires some assistance from another person for ADLs. (3) Totally dependent: The patient requires total assistance for all activities of daily living.',
        'type': 'string',
        'category': ['Independent', 'Partially Dependent', 'Totally Dependent']
      },
      'liver': {
        'name': 'Liver Disease',
        'description': 'Presence of ascites or esophageal varices. Patients with the presence of fluid accumulation in the peritoneal cavity noted on physical examination, abdominal ultrasound, or abdominal CT/MRI within 30 days prior to the operation. Documentation should state either active or a history of liver disease (for example, jaundice, encephalopathy, hepatomegaly, portal hypertension, liver failure, or spider telangiectasia). Minimal or trace ascites would not qualify; however; malignant ascites (exclusive of liver disease) due to extensive cancer would qualify. Also, patients with esophageal varices present preoperatively and documented on an EGD or CT scan performed within 6 months prior to the surgical procedure.',
        'type': 'boolean'
      },
      'heart': {
        'name': 'Heart Disease',
        'description': 'History of myocardial infarction within 6 months from surgery. Or, patient has undergone percutaneous coronary intervention at any time. Or, patient reports pain or discomfort between the diaphragm and the mandible resulting from myocardial ischemia. Or, hypertension documented in the patient’s medical record and the condition is severe enough that it requires antihypertensive medication, within 30 days prior to the principal operative procedure.',
        'type': 'boolean'
      },
      'pvd': {
        'name': 'Peripheral vascular disease',
        'description': 'Patient with any type of angioplasty (including stent placement) or revascularization procedure for atherosclerotic peripheral vascular disease (PVD) (e.g., aorta-femoral, femoral-femoral, femoral-popliteal) or a patient who has had any type of amputation procedure for PVD (e.g., toe amputations, transmetatarsal amputations, below the knee or above the knee amputations). Patients who have had amputation for trauma or a resection of abdominal aortic aneurysms should not be included. Or, patient with rest pain or gangrene. Patients included with ischemic ulceration and/or tissue loss related to peripheral vascular disease.',
        'type': 'boolean'
      },
      'neuro': {
        'name': 'Neurological Disorder',
        'description': 'History of neurological disorders: impaired sensorium, coma >24hrs, history of transient ischemic attacks, history of stroke with/without neurological deficit, tumor involving central nervous system. Patient is acutely confused and/or delirious and responds to verbal and/or mild tactile stimulation. Patients is noted to have developed an impaired sensorium if they have mental status changes, and/or delirium in the context of the current illness. Patients with chronic or long-standing mental status changes secondary to chronic mental illness (e.g., schizophrenia) or chronic dementing illnesses (e.g., multi-infarct dementia, senile dementia of the Alzheimer type) are not included. Patient is unconscious, or postures to painful stimuli, or is unresponsive to all stimuli entering surgery. This does not include drug-induced coma. Patient has transient ischemic attacks (TIAs). Patient has a history of a cerebrovascular accident (embolic, thrombotic, or hemorrhagic) with/without persistent residual motor, sensory, or cognitive dysfunction. (e.g., hemiplegia, hemiparesis, aphasia, sensory deficit, impaired memory). Patient has a space-occupying tumor of the brain or spinal cord, which may be benign (e.g., meningiomas, ependymoma, oligodendroglioma) or primary (e.g., astrocytoma, glioma, glioblastoma multiform) or secondary malignancies (e.g., metastatic lung, breast, malignant melanoma). Other tumors that may involve the CNS include lymphomas and sarcomas.',
        'type': 'boolean'
      },
      'plegia': {
        'name': 'Paralysis',
        'description': 'History of hemi, para, or qudraiplegia',
        'type': 'boolean'
      },
      'chemo_radio': {
        'name': 'Recent Chemo or XRT',
        'description': 'Chemotherapy within 30 days of surgery, OR radiation within 90 days of surgery',
        'type': 'boolean'
      },
      'infx': {
        'name': 'Sepsis',
        'description': 'Infection Level',
        'type': 'string',
        'category': ['No Sepsis','SIRS', 'Sepsis', 'Septic shock']
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
        'category': ['Neither','Neoplasm', 'Infection']
      },
      'workrvu': {
        'name': 'Work RVU',
        'description': 'Work Relative Value Unit',
        'type': 'real',
        'min': 0,
        'max': 1000
      },
      'pgy': {
        'name': 'Resident PGY',
        'description': 'Post Graduate Year of Resident',
        'type': 'int',
        'min': 0,
        'max': 12,
      },
      'emergency': {
        'name': 'Emergency Surgery',
        'description': 'Designate if emergent case (note: urgent cases do not count)',
        'type': 'boolean'
      },
      'optime': {
        'name': 'Operation Time (min)',
        'description': 'Surgical operation time in minutes',
        'type': 'int',
        'min': 0,
        'max': 10000
      },
      'general_anes': {
        'name': 'General Anesthesia',
        'description': 'If general anesthesia was used',
        'type': 'boolean'
      },
      'other_proc': {
        'name': 'Additional Procedure',
        'description': 'There were additional procedures performed by the same surgical team',
        'type': 'boolean'
      },
      'concurrent_proc': {
        'name': 'Concurrent Procedure',
        'description': 'There were additional procedures while the principle procedure was performed',
        'type': 'boolean'
      },
      'wound': {
        'name': 'Wound Classification',
        'description': 'Wound class',
        'type': 'string',
        'category': ['Clean','Clean contaminated','Contaminated', 'Dirty']
      },
      'cpt': {
        'name': 'Primary Procedure CPT',
        'description': 'CPT code of the primary surgical procedure',
        'type': 'int',
        'min': 10040,
        'max': 69979
        
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
        'name': 'Surgical Diagnosis',
        'description': 'Enter reason for surgery, categorized by the Clinical Classification Software (CCS) category',
        'type': 'string',
        'category': [
        'Tuberculosis Infection', //1
        'Septicemia Infection', 
        'Bacterial Infection NOS',
        'Fungal Mycoses Infection', 
        'HIV Infection', 
        'Hepatitis Infection', 
        'Viral Infection', 
        'Infection NOS', //8
        'Head and Neck Cancer',  //11
        'Esophageal Cancer', 
        'Gastric Cancer', 
        'Colon Cancer', 
        'Rectal or Anal Cancer', 
        'Liver or Biliary Cancer', 
        'Pancreas Cancer', 
        'Small Bowel or Gallbladder or Other GI Cancer', 
        'Lung Cancer', 
        'Mesothelioma or Other Respiratory Tract Cancer', 
        'Bone or Connective Tissue Cancer',  //21
        "Skin Cancer - Melanoma", 
        'Skin Cancer - Non-Epithelial', 
        'Breast Cancer', 
        'Uterine Cancer', 
        'Cervical Cancer', 
        'Ovarian Cancer', 
        'Female Genitourinary Cancer, NOS', 
        'Protate Cancer', 
        'Testicular Cancer', 
        'Male Genitourinary Cancer, NOS',  // 31
        'Bladder Cancer',
        'Renal Cancer', 
        'Urinary System Cancer, NOS', 
        'Brain Cancer', 
        'Thyroid Cancer / Multiple Endocrine Neoplasia', 
        'Hodgkin Disease Cancer', 
        'Non-Hodgkin Lymphoma Cancer', //38
        'Leukemia, Cancer, NOS', 
        'Multiple Myeloma Cancer', 
        'Other Primary Cancer, NOS', 
        'Benign Uterine Neoplasia / Leiomyoma',
        'Benign Neoplasia, NOS', 
        'CCS.CATEGORY48', 
        'CCS.CATEGORY49',
        'CCS.CATEGORY50', 
        'CCS.CATEGORY51', 
        'CCS.CATEGORY52', 
        'CCS.CATEGORY53', 
        'CCS.CATEGORY54', 
        'CCS.CATEGORY55', 
        'CCS.CATEGORY58', 
        'CCS.CATEGORY59', 
        'CCS.CATEGORY60', 
        'CCS.CATEGORY62', 
        'CCS.CATEGORY63',
        'CCS.CATEGORY64', 
        'CCS.CATEGORY78', 
        'CCS.CATEGORY79', 
        'CCS.CATEGORY81', 
        'CCS.CATEGORY82', 
        'CCS.CATEGORY83', 
        'CCS.CATEGORY91',
        'CCS.CATEGORY92', 
        'CCS.CATEGORY94', 
        'CCS.CATEGORY95', 
        'CCS.CATEGORY96', 
        'CCS.CATEGORY97', 
        'CCS.CATEGORY98', 
        'CCS.CATEGORY99', 
        'CCS.CATEGORY100', 
        'CCS.CATEGORY101', 'CCS.CATEGORY102', 'CCS.CATEGORY103', 'CCS.CATEGORY104', 'CCS.CATEGORY106', 'CCS.CATEGORY108', 'CCS.CATEGORY109', 'CCS.CATEGORY110', 'CCS.CATEGORY111', 'CCS.CATEGORY112', 'CCS.CATEGORY114', 'CCS.CATEGORY115', 'CCS.CATEGORY116', 'CCS.CATEGORY117', 'CCS.CATEGORY118', 'CCS.CATEGORY119', 'CCS.CATEGORY120', 'CCS.CATEGORY121', 'CCS.CATEGORY122', 'CCS.CATEGORY124', 'CCS.CATEGORY126', 'CCS.CATEGORY127', 'CCS.CATEGORY128', 'CCS.CATEGORY129', 'CCS.CATEGORY130', 'CCS.CATEGORY131', 'CCS.CATEGORY132', 'CCS.CATEGORY133', 'CCS.CATEGORY134', 'CCS.CATEGORY135', 'CCS.CATEGORY136', 'CCS.CATEGORY137', 'CCS.CATEGORY138', 'CCS.CATEGORY139', 'CCS.CATEGORY140', 'CCS.CATEGORY141', 'CCS.CATEGORY142', 'CCS.CATEGORY143', 'CCS.CATEGORY144', 'CCS.CATEGORY145', 'CCS.CATEGORY146', 'CCS.CATEGORY147', 'CCS.CATEGORY148', 'CCS.CATEGORY149', 'CCS.CATEGORY151', 'CCS.CATEGORY152', 'CCS.CATEGORY153', 'CCS.CATEGORY154', 'CCS.CATEGORY155', 'CCS.CATEGORY156', 'CCS.CATEGORY157', 'CCS.CATEGORY158', 'CCS.CATEGORY159', 'CCS.CATEGORY160', 'CCS.CATEGORY161', 'CCS.CATEGORY162', 'CCS.CATEGORY163', 'CCS.CATEGORY164', 'CCS.CATEGORY165', 'CCS.CATEGORY166', 'CCS.CATEGORY167', 'CCS.CATEGORY168', 'CCS.CATEGORY169', 'CCS.CATEGORY170', 'CCS.CATEGORY171', 'CCS.CATEGORY172', 'CCS.CATEGORY173', 'CCS.CATEGORY175', 'CCS.CATEGORY176', 'CCS.CATEGORY178', 'CCS.CATEGORY180', 'CCS.CATEGORY181', 'CCS.CATEGORY195', 'CCS.CATEGORY197', 'CCS.CATEGORY198', 'CCS.CATEGORY199', 'CCS.CATEGORY200', 'CCS.CATEGORY201', 'CCS.CATEGORY202', 'CCS.CATEGORY203', 'CCS.CATEGORY204', 'CCS.CATEGORY205', 'CCS.CATEGORY207', 'CCS.CATEGORY208', 'CCS.CATEGORY209', 'CCS.CATEGORY210', 'CCS.CATEGORY211', 'CCS.CATEGORY212', 'CCS.CATEGORY213', 'CCS.CATEGORY214', 'CCS.CATEGORY215', 'CCS.CATEGORY216', 'CCS.CATEGORY217', 'CCS.CATEGORY224', 'CCS.CATEGORY225', 'CCS.CATEGORY226', 'CCS.CATEGORY227', 'CCS.CATEGORY228', 'CCS.CATEGORY229', 'CCS.CATEGORY230', 'CCS.CATEGORY231', 'CCS.CATEGORY232', 'CCS.CATEGORY233', 'CCS.CATEGORY234', 'CCS.CATEGORY235', 'CCS.CATEGORY236', 'CCS.CATEGORY237', 'CCS.CATEGORY238', 'CCS.CATEGORY239', 'CCS.CATEGORY240', 'CCS.CATEGORY244', 'CCS.CATEGORY246', 'CCS.CATEGORY247', 'CCS.CATEGORY248', 'CCS.CATEGORY249', 'CCS.CATEGORY250', 'CCS.CATEGORY251', 'CCS.CATEGORY253', 'CCS.CATEGORY254', 'CCS.CATEGORY257', 'CCS.CATEGORY258', 'CCS.CATEGORY259', 'CCS.CATEGORY260', 'CCS.CATEGORY261']
      }
    },
    DEFAULT_PATIENT: {
      'caseid': 1,
      'year': 2005,
      'sex': 'Male',
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
      'diabetes': 'No Diabetes',
      'dyspnea': 'No Dyspnea',
      'fnstatus': 'Totally Dependent',
      'liver': false,
      'heart': true,
      'pvd': false,
      'neuro': false,
      'plegia': false,
      'chemo_radio': false,
      'infx': 'No Sepsis',
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
      'wound': 'Clean',
      'cpt_type': 'OFFICIAL4',
      'ccs_category': null,
      'cpt': '33881',
      'cpt_mis': true,
      'cpt_implant': false
    },
    PATIENT_INFO: 'caseid,age,sex,race,bmi', // removed: year
    // PATIENT_HISTORY: 'heart,hxchf,cardiac_surgery,hxcopd,neuro,plegia,steroid_immunosup,bleeddis,pvd,chemo_radio,discancr',
    RISK_FACTORS: '',
    RISK_FACTORS_BOOLEAN: 'heart,hxchf,cardiac_surgery,smoker,pvd,dyspnea,cpneumon,hxcopd,ventilat,diabetes,renalfail,dialysis,liver,alcohol,neuro,plegia,steroid_immunosup,chemo_radio,discancr,preop_wndinf,infx,bleeddis,preop_transfus,wtloss,fnstatus,dnr,priorop,pregnancy',
    SURGICAL_INFO: 'asa,ccs_category,podiag,cpt,workrvu,cpt_mis,cpt_implant,other_proc,concurrent_proc,optime,emergency,general_anes,pgy,wound',  // removed: cpt_type
    SURGICAL_INFO_BOOLEAN: '',
    LABS: 'lab_sodium,lab_bun,lab_creatine,lab_albumin,lab_bili,lab_ast,lab_alkphos,lab_wbc,lab_hct,lab_plt,lab_ptt,lab_inr',
    ORDERS: [
      null, {
        'order_type': 'order',
        'order_text': 'Remove foley. [Recommended within 24 hours after operation].'
      }, {
        'order_type': 'order',
        'order_text': 'Post Wash Hands sign. [Reminder to wash hands before/ after dressing change.]'
      }, {
        'order_type': 'order',
        'order_text': 'Remove dressing 24-48 hours after operation. '
      }, {
        'order_type': 'order',
        'order_text': 'Educate patient and family on proper care for sterile dressing changes. [This can be a nursing/ PRM order.]'
      }, {
        'order_type': 'order',
        'order_text': 'Check BMP or POC glucose and assess for glucose < 200'
      }, {
        'order_type': ' page physician. ',
        'order_text': 'If temperature < or > 36C'
      }, {
        'order_type': 'order',
        'order_text': 'Continue beta-blockers postoperatively.'
      }, {
        'order_type': 'order',
        'order_text': 'Monitor strict I/Os [For renal or heart failure patients.]'
      }, {
        'order_type': 'order',
        'order_text': 'Monitor daily weights.'
      }, {
        'order_type': 'order',
        'order_text': 'Start unfractionated heparin within 2 hours of operation and every 8-12 hours afterwards OR low molecular weight heparin within 12 hours and then daily.'
      }, {
        'order_type': 'order',
        'order_text': 'Resume chronic anticoagulation therapy within 12-24 hours after surgery.'
      }, {
        'order_type': 'order',
        'order_text': 'Continue DVT chemoprophylaxis with acquired hypercoagulable states (i.e. cancer). [Recommended for 2 weeks postoperatively.]'
      }, {
        'order_type': 'order',
        'order_text': 'Order incentive spirometer for deep breathing. '
      }, {
        'order_type': 'order',
        'order_text': 'Order assisted ambulation around the room and on the floor as soon as possible. '
      }, {
        'order_type': 'order',
        'order_text': 'Check BMP for electrolytes and BUN/Cr. '
      }, {
        'order_type': ' re-start anticoagulation:',
        'order_text': 'For patients on anti-coagulation prior to operation'
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
        'order_text': 'consult: geriatric service'
      }, {
        'order_type': 'consult',
        'order_text': 'consult: pharmacy to reconcile home meds '
      }, {
        'order_type': 'consult',
        'order_text': 'consult: social work '
      }, {
        'order_type': 'consult',
        'order_text': 'consult: PT/OT '
      }, {
        'order_type': ' systemic narcotics ',
        'order_text': 'alert: Avoid benzo/anticholinergic'
      }, {
        'order_type': 'order',
        'order_text': 'order: lovenox 40mg daily'
      }, {
        'order_type': 'order',
        'order_text': 'order: CPAP for suspected/diagnosed sleep apnea;'
      }, {
        'order_type': 'order',
        'order_text': 'order: chest PT'
      }, {
        'order_type': 'order',
        'order_text': 'order: telemetry'
      }, {
        'order_type': 'order',
        'order_text': 'order: weight appropriate DVT prophylaxis'
      }, {
        'order_type': 'order',
        'order_text': 'order: multivitamin BID'
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
        'order_text': 'consult diabetes service'
      }, {
        'order_type': 'order',
        'order_text': 'order: nicotine replacement therapy'
      }, {
        'order_type': 'order',
        'order_text': 'order: incentive spirometry'
      }, {
        'order_type': 'order',
        'order_text': 'order: CIWA protocol'
      }, {
        'order_type': 'alert',
        'order_text': 'alert: monitor for signs of alcohol withdrawal'
      }, {
        'order_type': 'order',
        'order_text': 'order: inhaled bronchodilators PRN or scheduled if part of patient’s home meds'
      }, {
        'order_type': 'order',
        'order_text': 'order: inhaled Bronchodilators'
      }, {
        'order_type': 'order',
        'order_text': 'order: systemic steroids for those taking chronic steroids'
      }, {
        'order_type': 'consult',
        'order_text': 'consult: Pain management for pain control'
      }, {
        'order_type': 'alert',
        'order_text': 'alert: reminder to continue appropriate antibiotics'
      }, {
        'order_type': 'order',
        'order_text': 'order: daily BMP'
      }, {
        'order_type': 'alert',
        'order_text': 'alert: restrict sedatives: benzo/narcotics'
      }, {
        'order_type': 'alert',
        'order_text': 'alert: Any drugs with hepatic metabolism should be flagged'
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
        'order_text': 'alert: renally dose medications'
      }, {
        'order_type': 'consult',
        'order_text': 'consult nephrology'
      }, {
        'order_type': 'order',
        'order_text': 'order: daily weights'
      }, {
        'order_type': 'alert',
        'order_text': 'alert: Postoperative blood pressure goals SBP<140'
      }, {
        'order_type': 'order',
        'order_text': 'order: 8am cortisol'
      }, {
        'order_type': 'alert',
        'order_text': 'alert: Resume home steroids'
      }, {
        'order_type': 'bpa',
        'order_text': 'BPA: start early enteral feed'
      }, {
        'order_type': 'consult',
        'order_text': 'consult: RD nutritionist'
      }, {
        'order_type': ' albumin level',
        'order_text': 'order: prealbumin'
      }, {
        'order_type': 'order',
        'order_text': 'order: ensure'
      }, {
        'order_type': 'order',
        'order_text': 'order: calorie count'
      }, {
        'order_type': 'order',
        'order_text': 'order: daily CBC'
      }, {
        'order_type': 'order',
        'order_text': 'order: fetal monitoring'
      }, {
        'order_type': 'consult',
        'order_text': 'consult: obstetrics'
      }, {
        'order_type': 'order',
        'order_text': 'order: increased level of care for disturbances to hemodynamic parameters'
      }, {
        'order_type': 'order',
        'order_text': 'order:daily CMP'
      }, {
        'order_type': 'order',
        'order_text': 'order: FeNa'
      }, {
        'order_type': 'alert',
        'order_text': 'alert: discuss goals of care'
      }, {
        'order_type': '',
        'order_text': 'alert: q12hour microbiology review'
      }
    ],
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
