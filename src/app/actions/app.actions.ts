export class AppActions {
  static SET_APP = '[Config] SET_APP';
  static GET_APP_SUCCESS = '[Config] GET_APP_SUCCESS';
  static setApp = () => ({
    type: AppActions.SET_APP
  });
  static getAppSuccess = payload => ({
    type: AppActions.GET_APP_SUCCESS,
    payload
  });
}
