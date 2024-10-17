import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Exploration',
    Svg: require('@site/static/img/exploration.svg').default,
    description: (
      <>
        Exploration is at the heart of research, where the primary goal is to uncover unknown aspects of a subject. Researchers delve into uncharted territories, seeking to discover new ideas, phenomena, or relationships that can expand our understanding of the world.
      </>
    ),
  },
  {
    title: 'Advancement',
    Svg: require('@site/static/img/advancement.svg').default,
    description: (
      <>
        Research often aims for advancement, where the focus is on pushing the field forward. Through new methodologies or groundbreaking theories, researchers contribute to the ongoing progress, ensuring that their work leaves a lasting impact on future studies.
      </>
    ),
  },
  {
    title: 'Optimization',
    Svg: require('@site/static/img/optimization.svg').default,
    description: (
      <>
        Optimization is a key objective in research, where the goal is to improve existing systems, processes, or models. By refining methods and enhancing outcomes, researchers strive to achieve the most efficient and effective solutions to the challenges they are investigating.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
