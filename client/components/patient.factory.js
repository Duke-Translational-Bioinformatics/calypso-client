'use strict';

angular.module('calypsoClientApp')
  .service('Patient', function (ENV, $http, $q, Utils, $rootScope) {
    var patientService = {
      values: {
        'age': 32,
        'alcohol': true,
        'asa': null,
        'bleeddis': null,
        'bmi': null,
        'cardiac_surgery': null,
        'caseid': null,
        'ccs_category': null,
        'chemo_radio': null,
        'concurrent_proc': null,
        'cpneumon': null,
        'cpt': null,
        'cpt_implant': null,
        'cpt_mis': null,
        'cpt_type': null,
        'diabetes': null,
        'dialysis': null,
        'discancr': null,
        'dnr': null,
        'dyspnea': null,
        'emergency': null,
        'fnstatus': null,
        'general_anes': null,
        'heart': null,
        'hxchf': null,
        'hxcopd': null,
        'infx': null,
        'lab_albumin': null,
        'lab_alkphos': null,
        'lab_ast': null,
        'lab_bili': null,
        'lab_bun': null,
        'lab_creatine': null,
        'lab_hct': null,
        'lab_inr': null,
        'lab_plt': null,
        'lab_ptt': null,
        'lab_sodium': null,
        'lab_wbc': null,
        'liver': null,
        'neuro': null,
        'optime': null,
        'other_proc': null,
        'pgy': null,
        'plegia': null,
        'podiag': null,
        'pregnancy': null,
        'preop_transfus': null,
        'preop_wndinf': null,
        'priorop': null,
        'pvd': null,
        'race': null,
        'renalfail': null,
        'sex': null,
        'smoker': null,
        'steroid_immunosup': null,
        'ventilat': null,
        'workrvu': null,
        'wound': null,
        'wtloss': null,
        'year': null,
      },
      histogram: {
        'wound_compilcations': null,
        'cardiac_complications': null,
        'respiratory_complications': null,
        'thrombeombolic_complications': null,
        'renal_complications': null,
        'urinary_tract_infections': null,
        'neurologic_complications': null,
        'systemic_septic_complications': null,
        'reoperations': null,
        'morbidity': null,
        'mortality': null
      },
      prediction: {},
      percentile: {}
    };

    // init values
    patientService.init = function () {
      patientService.find_patient(1);
    };

    patientService.refresh = function (patient_values, no_histogram) {
      var promises = [];
      promises.push(patientService.get_prediction(patient_values.caseid));
      promises.push(patientService.get_percentile(patient_values.caseid));
      if (!no_histogram) {
        Object.keys(patientService.histogram).forEach(function (complication) {
          promises.push(patientService.get_histogram(complication, patient_values.caseid));
        });
      };
      return $q.all(promises).then(function (values_array) {
        patientService.prediction = values_array[0].data;
        patientService.percentile = values_array[1].data;
        if (!no_histogram) {
          var i = 2;
          Object.keys(patientService.histogram).forEach(function (complication) {
            patientService.histogram[complication] = values_array[i].data;
            if (i<values_array.length) i++;
          });
        };
        patientService.values = patient_values;
        $rootScope.$broadcast('patient-update');
      });
    };

    patientService.find_patient = function (caseid) {
      var deferred = $q.defer();
      $http.get('http://54.186.43.170/api/patients/' + caseid).success(function (patient_values) {
        patientService.refresh(patient_values).then(function () {
          deferred.resolve();
        });
      }).error(function (err) {
        console.log(err);
      });
      return deferred.promise;
    };



    patientService.get_histogram = function (complication, caseid) {
      return $http({
        url: 'http://54.186.43.170/api/analysis/histogram/' + caseid, //'http://54.186.43.170/api/analysis/predict/0?values='
        method: 'GET',
        params: {
          complication: complication,
          bins: 20
        }
      });
    };

    patientService.get_prediction = function (caseid) {
      return $http({
        url: 'http://54.186.43.170/api/analysis/predict/' + caseid, //'http://54.186.43.170/api/analysis/predict/0?values='
        method: 'GET'
      });
    };

    patientService.get_percentile = function (caseid) {
      return $http({
        url: 'http://54.186.43.170/api/analysis/percentile/' + caseid, //'http://54.186.43.170/api/analysis/predict/0?values='
        method: 'GET'
      });
    };

    patientService.download_patient = function (data) {
      var json = JSON.stringify(data, null, '\t');
      var blob = new Blob([json], {
        type: 'application/json'
      });
      var url = URL.createObjectURL(blob);

      var a = document.createElement('a');
      a.download = 'patient_' + data.caseid + '.json';
      a.href = url;
      a.textContent = 'Download backup.json';
      a.click();
    };

    patientService.load_patient = function ($file) {
      var deferred = $q.defer();
      var reader = new FileReader();
      reader.onloadend = function () {
        var patient_values = JSON.parse(reader.result);
        patientService.refresh(patient_values).then(function () {
          deferred.resolve(patient_values);
        });
      };
      reader.readAsText($file[0]);
      return deferred.promise;
    };

    patientService.init();
    return patientService;
  });
