export const selectUserData = state => state.auht.user;

export const selectUserToken = state => state.auht.token;

export const selectUserIsLoggedIn = state => state.auht.isLoggedIn;

export const selectUserIsRefreshing = state => state.auht.isRefreshing;

export const selectUserIsLoading = state => state.auht.loading;
export const selectUserError = state => state.auht.error;
