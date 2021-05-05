import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR';

import Link from 'next/link';

import { Switch } from '@material-ui/core';
import useTheme from '../../contexts/ThemeContext'


import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d, MMMM', {
        locale: ptBR,
    });

    const { isDark, toggleTheme } = useTheme()

    return (
        <header  className={isDark ? `${styles.headerContainer} ${styles.dark}` : styles.headerContainer}>
            
            <Link href='/'>
                <img src="/logo.svg" alt="Podecastr"/>
            </Link>

            <p>O melhor para você ouvir sempre</p>

            <Switch
            checked={isDark}
            onChange={toggleTheme}
            color="primary"
            />            

            <span>{currentDate}</span>
        </header>
    );
}