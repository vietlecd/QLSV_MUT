export const LogOut = async () => {
    try{
        sessionStorage.removeItem('jwtToken');
        await fetch('/api/logout', { method: 'POST' });
        console.log('Logged out successfully (backend)');
    } catch (error) {
        console.error('Error logging out (backend):', error);
    } finally {
        window.location.href = '/';
    }
};