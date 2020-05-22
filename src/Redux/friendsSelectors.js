export const getFriends = (state) => state.friendsPage.friends;
export const getPageSize = (state) => state.friendsPage.pageSize;
export const getTotalUsersCount = (state) => state.friendsPage.totalUsersCount;
export const getCurrentPage = (state) => state.friendsPage.currentPage;
export const getIsFetching = (state) => state.friendsPage.isFetching;
export const getIsFollowingInProgress = (state) => state.friendsPage.isFollowingInProgress;
