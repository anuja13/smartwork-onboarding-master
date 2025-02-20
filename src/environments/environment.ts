// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backend: {
    endpoints:{
      //eligibility: "http://localhost:8013/onboarding/eligibility",
      //register: "http://localhost:8013/onboarding/patient",
      //status: "http://localhost:8013/onboarding/sendFromStatus/"
      eligibility: "http://smartwork-dev-onboarding.idi.ntnu.no/onboarding/eligibility",
      register: "http://smartwork-dev-onboarding.idi.ntnu.no/onboarding/patient",
    }
  },
  defaults:{
    username: "",
    email: "",
    phone: ""
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
