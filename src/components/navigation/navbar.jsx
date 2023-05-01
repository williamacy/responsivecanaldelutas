import { Link } from 'react-router-dom';

const options = [
  { label: 'Hero', to: '/' },
  { label: 'History', to: '/history' },
  { label: 'Founder Carousel', to: '/founder-carousel' },
  { label: 'Modalities', to: '/modalities' },
  { label: 'Contact', to: '/contact' },
  { label: 'Location', to: '/location' },
];

function NavigationMenuDemo() {
  return (
    <nav>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <Link to={option.to}>{option.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationMenuDemo;