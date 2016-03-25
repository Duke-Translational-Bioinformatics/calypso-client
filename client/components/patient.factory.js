'use strict';

angular.module('calypsoClientApp')
  .service('Patient', function (ENV, $http, $q, Utils, $rootScope) {
    var patientService = {
      values: {
        'age': null,
        'alcohol': null,
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
      histogram: {},
      prediction: {}
    };

    // init values
    patientService.init = function () {
      patientService.find_patient(1);
    };

    patientService.refresh = function (patient_values, no_histogram) {
      var promises = [];
      promises.push(patientService.get_prediction(patient_values));
      if (!no_histogram) promises.push(patientService.get_histogram(patient_values));
      return $q.all(promises).then(function (values_array) {
        patientService.prediction = values_array[0].data;
        if (!no_histogram) {
          Object.keys(values_array[1].data.histogram).forEach(function (ele) {
            values_array[1].data.histogram[ele] = values_array[1].data.histogram[ele].sort();
          });
          patientService.histogram = values_array[1].data;
        }
        patientService.values = patient_values;
        $rootScope.$broadcast('patient-update');
      });
    };

    patientService.find_patient = function (caseid) {
      var deferred = $q.defer();
      $http.get(ENV.hosts.server + '/patient/' + caseid).success(function (patient_values) {
        patientService.refresh(patient_values).then(function () {
          deferred.resolve();
        });
      }).error(function (err) {
        console.log(err);
      });
      return deferred.promise;
    };

    patientService.get_histogram = function (patient_values) {
      return $http({
        url: ENV.hosts.server + '/histogram',
        method: 'GET',
        params: {
          ccs_category: patient_values.cpt_type,
          cpt_type: patient_values.cpt_type
        }
      });
    };

    patientService.get_prediction = function (patient_values) {
      return $http({
        url: ENV.hosts.server + '/predict',
        method: 'GET',
        params: {
          preds: Utils.transform(patient_values)
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
