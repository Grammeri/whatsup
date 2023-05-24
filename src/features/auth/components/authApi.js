
export const authApi = {
    login: (idInstance, apiTokenInstance) => {
        // replace these with real validations if needed
        if (idInstance && apiTokenInstance) {
            return Promise.resolve({ isLoggedIn: true });
        } else {
            return Promise.reject({ message: 'Login failed.' });
        }
    },
    logout: () => {
        // replace this with real logout logic if needed
        return Promise.resolve({ isLoggedIn: false });
    },
};
