'use strict';

angular.module('calypsoClientApp')
  .service('Patient', function (ENV, $http, $q, Utils, $rootScope) {
    var patientService = {
      values: {
        'age': null,
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
      percentile: {},
      targets: {}
    };

    // init values
    patientService.init = function () {
      patientService.find_patient(972273);
    };

    patientService.refresh = function (patient_values) {
      var promises = [];
      promises.push(patientService.get_prediction(patient_values.caseid));
      promises.push(patientService.get_percentile(patient_values.caseid));
      return $q.all(promises).then(function (values_array) {
        patientService.prediction = values_array[0].data;
        patientService.percentile = values_array[1].data;
        patientService.values = patient_values;
        $rootScope.$broadcast('patient-update');
      });
    };

    patientService.refresh_byvalue = function (patient_values) {
      var promises = [];
      promises.push(patientService.get_prediction_byvalue(patient_values));
      promises.push(patientService.get_percentile_byvalue(patient_values));
      promises.push(patientService.get_targets_byvalue(patient_values));
      return $q.all(promises).then(function (values_array) {
        patientService.prediction = values_array[0].data;
        patientService.percentile = values_array[1].data;
        patientService.targets = values_array[2].data;
        patientService.values = patient_values;
        $rootScope.$broadcast('patient-update');
      });
    };

    patientService.find_patient = function (caseid) {
      var deferred = $q.defer();
      $http.get(ENV.hosts.server + '/api/patients/' + caseid).success(function (patient_values) {
        patientService.refresh(patient_values).then(function () {
          $http.get(ENV.hosts.server + '/api/targets/patient/' + caseid).then(function (targets){
            patientService.targets = targets.data;
          });
        });
          deferred.resolve();
      }).error(function (err) {
        console.log(err);
      });
      return deferred.promise;
    };

    patientService.get_histogram = function (complication, caseid) {
      return $http({
        url: ENV.hosts.server + '/api/analysis/histogram/' + caseid,
        method: 'GET',
        params: {
          complication: complication,
          bins: 20
        }
      }).then(function (response){
        patientService.histogram[complication] = response.data;
      });
    };

    patientService.get_histogram_byvalue = function (complication, patient_values) {
      return $http({
        url: ENV.hosts.server + '/api/analysis/histogram/0',
        method: 'GET',
        params: {
          values : patient_values,
          complication: complication,
          bins: 20
        }
      }).then(function (response){
        patientService.histogram[complication] = response.data;
      });
    };


    patientService.get_prediction = function (caseid) {
      return $http({
        url: ENV.hosts.server + '/api/analysis/predict/' + caseid,
        method: 'GET'
      });
    };

    patientService.get_prediction_byvalue = function (patient_values) {
      return $http({
        url: ENV.hosts.server + '/api/analysis/predict/0',
        method: 'GET',
        params: {
          values: patient_values
        }
      });
    };

    patientService.get_percentile = function (caseid) {
      return $http({
        url: ENV.hosts.server + '/api/analysis/percentile/' + caseid, 
        method: 'GET'
      });
    };

    patientService.get_percentile_byvalue = function (patient_values) {
      return $http({
        url: ENV.hosts.server + '/api/analysis/percentile/0', 
        method: 'GET',
        params: {
          values: patient_values
        }
      });
    };

    patientService.get_targets_byvalue = function (patient_values) {
      return $http({
        url: ENV.hosts.server + '/api/targets/patient/0',
        method: 'GET',
        params: {
          values: patient_values
        }
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
        patientService.refresh_byvalue(patient_values).then(function () {
          deferred.resolve(patient_values);
        });
      };
      reader.readAsText($file[0]);
      return deferred.promise;
    };

    patientService.init();
    return patientService;
  });
