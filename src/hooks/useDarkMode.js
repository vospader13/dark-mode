import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const UseDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('dark-mode_toggle');

    const prefersDarkMode = getprefColorScheme();

    const enabled = typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode; 
    useEffect(() => {
        const element = window.document.body;
        if (enabled) {
            element.classList.add('dark-mode');
            } else {
                element.classList.remove('dark-mode');
            }
    }, [enabled]);
    function getprefColorScheme() {
        if (!window.matchMedia) return;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return [enabled, setEnabledState];
};