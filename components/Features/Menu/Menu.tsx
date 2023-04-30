import { MenuProps } from './Menu.props';

import styles from './Menu.module.scss';
import { Grid } from '../../Atoms/Grid/Grid';

interface IMenu {
  name: string,
  route: string,
  name1?: string,
  href?: string
}

const menu: IMenu[] = [
  {
    name: 'About',
    route: 'about',
  },
  {
    name: 'Collection',
    route: 'collection',
  },
  {
    name: 'Roadmap',
    route: 'roadmap',
  },
   {
    name: 'Team',
     route: 'team',
   },
  {
    name: 'Faq',
    route: 'faq',
  },
];

export const Menu = ({ column, ...props }: MenuProps): JSX.Element => {
  const scrollIt = (route) => {
    const to = document.getElementById(`${route}`);
    if (to) {
      window.scrollTo({
        top: to.offsetTop + window.innerHeight * 3 + 550,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Grid className={styles.menu} column={column} centerX centerY {...props}>
      {menu.map(({ name, name1, href, route }: IMenu) => {
        return (
          <div className={styles.link} key={name || name1}   onClick={() => scrollIt(route)}>
            <div>{name}</div>
            <a href={href} target="_blank" style={{ textDecoration: 'none' }}>
              <div>{name1}</div>
            </a>
          </div>
        );
      })}
    </Grid>
  );
};
