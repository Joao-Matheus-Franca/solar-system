import React from 'react';
import Title from './Title';
import PlanetCards from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((card) => (<PlanetCards
          key={ card.name }
          planetName={ card.name }
          planetImage={ card.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
