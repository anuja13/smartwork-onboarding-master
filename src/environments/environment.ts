// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backend: {
    endpoints:{
      eligibility: "https://smartwork-dev-backend-user.idi.ntnu.no/onboarding/eligibility",
      register: "https://smartwork-dev-backend-user.idi.ntnu.no/onboarding/patient",
      status: "https://smartwork-dev-backend-user.idi.ntnu.no/onboarding/sendFromStatus/"
    }
  },
  defaults:{
    username: "test-username",
    email: "test@example.com",
    phone: "+47 12345678"
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
